import React, { useState, useEffect, useCallback } from "react";
import {
  UserPlus,
  RefreshCw,
  CheckSquare,
  Edit3,
  UserX,
  AlertCircle,
  Users
} from "lucide-react";
import { userService } from "../../../services/userService";
import { useAppDispatch } from "../../../store/hooks";
import { addNotification } from "../../../store/slices/uiSlice";

// Components
import ActionDropdown from "./components/ActionDropdown";
import RoleMultiSelector from "./components/RoleMultiSelector";
import UserSearchPanel from "./components/UserSearchPanel";
import UserListTable from "./components/UserListTable";

const LEGACY_ROLE_MAP = {
  "FINANCE": "FINANCE_OFFICER",
  "FINANCE OFFICER": "FINANCE_OFFICER",
  "ACADEMIC COORDINATOR": "ACADEMIC_COORDINATOR",
  "IT": "IT_ADMIN",
  "IT/SYSTEM ADMIN": "IT_ADMIN",
  "IT ADMIN": "IT_ADMIN",
  // Code mappings for robustness
  "R01": "STUDENT",
  "R02": "TEACHER",
  "R03": "PARENT",
  "R04": "PRINCIPAL",
  "R05": "ADMINISTRATOR",
  "R06": "FINANCE_OFFICER",
  "R07": "REGISTRAR",
  "R08": "MANAGEMENT",
  "R09": "ACADEMIC_COORDINATOR",
  "R10": "COUNSELOR",
  "R11": "LIBRARIAN",
  "R12": "IT_ADMIN",
};

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white rounded-3xl p-8 shadow-sm border border-slate-100 ${className}`}
  >
    {children}
  </div>
);

const UserManagement = () => {
  const dispatch = useAppDispatch();

  // State for Database Data
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [roles, setRoles] = useState([]); // State for roles

  // Pagination State
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalUsers: 0,
  });

  // Constants
  const VALID_ROLES = [
    { label: "Student", value: "STUDENT" },
    { label: "Teacher", value: "TEACHER" },
    { label: "Parent", value: "PARENT" },
    { label: "Administrator", value: "ADMINISTRATOR" },
    { label: "Principal", value: "PRINCIPAL" },
    { label: "Finance Officer", value: "FINANCE_OFFICER" },
    { label: "Registrar", value: "REGISTRAR" },
    { label: "Academic Coordinator", value: "ACADEMIC_COORDINATOR" },
    { label: "Counselor", value: "COUNSELOR" },
    { label: "Librarian", value: "LIBRARIAN" },
    { label: "Management", value: "MANAGEMENT" },
    { label: "IT/System Admin", value: "IT_ADMIN" },
  ];

  const FETCH_LIMIT = 100; // Fetch more users to have enough data for local pagination
  const ROWS_PER_PAGE = 10; // Show exactly 10 rows per page

  // Local Pagination State
  const [localPage, setLocalPage] = useState(1);

  // Action Mode State - Controls which form to display
  const [actionMode, setActionMode] = useState("add"); // "add" | "edit" | "suspend"

  // Form State for Add User
  const [newUser, setNewUser] = useState({
    full_name: "",
    role: "Student",
    email: "",
  });

  // Search State for Edit/Suspend
  const [searchEmail, setSearchEmail] = useState("");
  const [searchedUser, setSearchedUser] = useState(null);
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState("");

  // Edit Form State
  const [editForm, setEditForm] = useState({
    full_name: "",
    roles: [], // Array of selected roles
    email: "",
  });

  // Switch action mode
  const switchActionMode = (mode) => {
    setActionMode(mode);
    // Reset all forms when switching
    setSearchEmail("");
    setSearchedUser(null);
    setSearchError("");
    setNewUser({ full_name: "", role: "Student", email: "" });
    setEditForm({ full_name: "", roles: [], email: "" });
  };

  // Search user by email (for Edit/Suspend)
  const handleSearchUser = async () => {
    if (!searchEmail.trim()) {
      setSearchError("Please enter an email address");
      return;
    }

    setSearching(true);
    setSearchError("");
    setSearchedUser(null);

    try {
      const result = await userService.getUserByIdentifier(searchEmail);

      if (result.success && result.data) {
        setSearchedUser(result.data);
        // Only populate edit form if in edit mode (or just do it anyway, harmless)
        // Aggressive Role Cleaning: Deduplicate & Filter only valid roles
        const rawRoles = result.data.roles || [result.data.active_role || result.data.role];
        const validRoleValues = VALID_ROLES.map(r => r.value);
        
        const cleanedRoles = [...new Set(
          rawRoles
            .filter(Boolean)
            .map(r => {
                if (!r) return r;
                const upper = r.toUpperCase();
                return LEGACY_ROLE_MAP[upper] || upper;
            })
            .filter(r => validRoleValues.includes(r))
        )];

        setEditForm({
          full_name: result.data.full_name,
          roles: cleanedRoles,
          email: result.data.email,
        });
      } else {
        setSearchError("User not found with this email address");
      }
    } catch (err) {
      console.error(err);
      if (err.response?.status === 404) {
        setSearchError("User not found with this email address");
      } else {
        setSearchError(err.message || "Error searching user");
      }
    } finally {
      setSearching(false);
    }
  };

  // Handle Edit User
  const handleEditUser = async () => {
    if (!searchedUser) {
      dispatch(
        addNotification({
          type: "warning",
          message: "Please search for a user first",
        })
      );
      return;
    }

    try {
      const result = await userService.updateUser(searchedUser.email, {
        full_name: editForm.full_name,
        roles: editForm.roles,
      });

      if (result.success) {
        dispatch(
          addNotification({
            type: "success",
            message: "User roles updated successfully!",
          })
        );

        // Reset form and switch back to add mode
        switchActionMode("add");

        // Refresh users list
        fetchUsers(pagination.currentPage);
      } else {
        dispatch(
          addNotification({
            type: "error",
            message: result.message || "Error updating user",
          })
        );
      }
    } catch (err) {
      console.error(err);
      dispatch(
        addNotification({
          type: "error",
          message: err.message || "Error updating user",
        })
      );
    }
  };

  // Handle Suspend User
  const handleSuspendUser = async () => {
    if (!searchedUser) {
      dispatch(
        addNotification({
          type: "warning",
          message: "Please search for a user first",
        })
      );
      return;
    }

    try {
      const result = await userService.suspendUser(searchedUser.email);

      if (result.success) {
        dispatch(
          addNotification({
            type: "success",
            message: `User ${searchedUser.email} suspended successfully!`,
          })
        );

        // Reset form and switch back to add mode
        switchActionMode("add");

        // Refresh users list
        fetchUsers(pagination.currentPage);
      } else {
        dispatch(
          addNotification({
            type: "error",
            message: result.message || "Error suspending user",
          })
        );
      }
    } catch (err) {
      console.error(err);
      dispatch(
        addNotification({
          type: "error",
          message: err.message || "Error suspending user",
        })
      );
    }
  };

  // Handle Unsuspend User
  const handleUnsuspendUser = async () => {
    if (!searchedUser) {
      dispatch(
        addNotification({
          type: "warning",
          message: "Please search for a user first",
        })
      );
      return;
    }

    try {
      const result = await userService.unsuspendUser(searchedUser.email);

      if (result.success) {
        dispatch(
          addNotification({
            type: "success",
            message: `User ${searchedUser.email} unsuspended successfully!`,
          })
        );

        // Reset form and switch back to add mode
        switchActionMode("add");

        // Refresh users list
        fetchUsers(pagination.currentPage);
      } else {
        dispatch(
          addNotification({
            type: "error",
            message: result.message || "Error unsuspending user",
          })
        );
      }
    } catch (err) {
      console.error(err);
      dispatch(
        addNotification({
          type: "error",
          message: err.message || "Error unsuspending user",
        })
      );
    }
  };

  // --- API FUNCTION: GET USERS ---
  const fetchUsers = useCallback(async (page = 1) => {
    setLoading(true);
    const pageNum = parseInt(page, 10);
    try {
      const result = await userService.getAllUsers(pageNum, FETCH_LIMIT);

      if (result.success) {
        setUsers(result.data); // Update state with real DB data

        // Update pagination state
        if (result.pagination) {
          setPagination({
            currentPage: parseInt(result.pagination.page, 10),
            totalPages: parseInt(result.pagination.totalPages, 10),
            totalUsers: parseInt(result.pagination.total, 10),
          });
        }
        setError(null);
      } else {
        console.error("Failed to load users:", result.message);
        setError("Failed to load users");
      }
    } catch (err) {
      console.error(err);
      setError(err.message || "Error connecting to server.");
    } finally {
      setLoading(false);
    }
  }, []);

  // --- API FUNCTION: GET ROLES ---
  const fetchRoles = useCallback(async () => {
    try {
      const result = await userService.getRoles();
      if (result.success) {
        const formattedRoles = result.data.map((role) => {
          const rawName = role.name || role;
          const upperName = typeof rawName === 'string' ? rawName.toUpperCase() : ''; 
          // Normalize value using legacy map
          const normalizedValue = LEGACY_ROLE_MAP[upperName] || rawName;
          
          return {
            label: role.name || role,
            value: normalizedValue, 
          };
        });
        setRoles(formattedRoles);
      } else {
        console.error("Failed to load roles:", result.message);
        dispatch(
          addNotification({ type: "error", message: "Failed to load roles" })
        );
      }
    } catch (err) {
      console.error(err);
      dispatch(
        addNotification({ type: "error", message: "Error fetching roles" })
      );
    }
  }, [dispatch]);

  // Load users and roles on component mount
  useEffect(() => {
    fetchUsers(1);
    fetchRoles();
  }, [fetchUsers, fetchRoles]);

  // --- API FUNCTION: ADD USER ---
  const handleAddUser = async () => {
    // Validation
    if (!newUser.full_name || !newUser.email) {
      dispatch(
        addNotification({
          type: "warning",
          message: "Please enter Name and Email",
        })
      );
      return;
    }

    try {
      // ⚡ OPTIMIZATION: Frontend Check
      const existingUserStr = newUser.email.toLowerCase();
      const localDuplicate = users.find(
        (u) =>
          u.email.toLowerCase() === existingUserStr &&
          (u.roles?.includes(newUser.role) || u.role === newUser.role)
      );

      if (localDuplicate) {
        dispatch(
          addNotification({
            type: "error",
            message: `User already has the role ${newUser.role}`,
          })
        );
        return;
      }

      const result = await userService.createUser(newUser);

      if (result.success) {
        if (result.data.role_already_existed) {
          dispatch(
            addNotification({
              type: "error",
              message: `User already has the role ${newUser.role}`,
            })
          );
        } else {
          dispatch(
            addNotification({
              type: "success",
              message: "User created/updated successfully!",
            })
          );

          // If creating new user, refresh page 1 to show latest
          setNewUser({ full_name: "", role: "Student", email: "" }); // Reset Form
          fetchUsers(1);
        }
      } else {
        dispatch(
          addNotification({
            type: "error",
            message: result.message || "Failed to create user",
          })
        );
      }
    } catch (err) {
      console.error(err);
      dispatch(
        addNotification({
          type: "error",
          message: err.message || "Error connecting to server",
        })
      );
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      
      {/* ========================================
          HEADER SECTION WITH GRADIENT THEME
          ======================================== */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                  Identity Management
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                   <Users size={12} className="text-green-300" />
                   Active
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                User Management
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Add and manage users for SSO access via Database.
              </p>
            </div>
            
             <button
              onClick={() => fetchUsers(pagination.currentPage)}
              className="flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl font-bold border border-white/20 transition-all shadow-lg text-white group"
            >
              <RefreshCw className={`h-5 w-5 ${loading ? "animate-spin" : "group-hover:rotate-180 transition-transform duration-500"}`} />
              <span>Refresh Data</span>
            </button>
          </div>
        </div>
      </div>

      {/* --- DYNAMIC USER MANAGEMENT FORM --- */}
      <Card className="mb-6 relative overflow-visible">
        <h3 className="font-bold text-2xl text-slate-800 mb-6 flex items-center gap-2">
          {actionMode === "add" && <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><UserPlus size={24}/></div>}
          {actionMode === "edit" && <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg"><Edit3 size={24}/></div>}
          {actionMode === "suspend" && <div className="p-2 bg-red-100 text-red-600 rounded-lg"><UserX size={24}/></div>}
          
          {actionMode === "add" && "Add New User"}
          {actionMode === "edit" && "Edit User Permissions"}
          {actionMode === "suspend" && "Suspend User Access"}
        </h3>

        {/* ADD USER FORM */}
        {actionMode === "add" && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-3 border border-slate-200 rounded-xl text-sm font-semibold bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder:font-normal"
                placeholder="e.g. John Tan"
                value={newUser.full_name}
                onChange={(e) =>
                  setNewUser({ ...newUser, full_name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Email (SSO ID)
              </label>
              <input
                type="email"
                className="w-full p-3 border border-slate-200 rounded-xl text-sm font-semibold bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder:font-normal"
                placeholder="user@krimson.edu"
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Assign Role
              </label>
              <div className="relative">
                 <select
                  className="w-full p-3 border border-slate-200 rounded-xl text-sm font-semibold bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all appearance-none cursor-pointer"
                  value={newUser.role}
                  onChange={(e) =>
                    setNewUser({ ...newUser, role: e.target.value })
                  }
                >
                  {[
                    { label: "Select Role", value: "" },
                    ...(roles.length > 0
                      ? roles
                      : VALID_ROLES),
                  ].map((r) => (
                    <option key={r.value} value={r.value}>
                      {r.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            {/* Split Button - Action + Dropdown */}
            <ActionDropdown
              mainLabel="Add User"
              MainIcon={UserPlus}
              onMainAction={handleAddUser}
              actionMode={actionMode}
              onSwitchMode={switchActionMode}
              mainBtnClass="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-lg shadow-blue-500/30 text-white font-bold py-3 px-6 rounded-xl transition-all"
            />
          </div>
        )}

        {/* EDIT USER FORM */}
        {actionMode === "edit" && (
          <div className="space-y-6">
            {/* Search Section */}
            <UserSearchPanel
              searchEmail={searchEmail}
              setSearchEmail={setSearchEmail}
              handleSearchUser={handleSearchUser}
              searching={searching}
              searchError={searchError}
              theme="blue"
            >
              <ActionDropdown
                mainLabel="Start Editing"
                MainIcon={Edit3}
                onMainAction={handleEditUser}
                actionMode={actionMode}
                onSwitchMode={switchActionMode}
                disabled={!searchedUser}
                mainBtnClass="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/20 text-white font-bold py-3 px-6 rounded-xl transition-all"
              />
            </UserSearchPanel>

            {/* User Found - Edit Form */}
            {searchedUser && (
              <div className="space-y-6 p-6 bg-slate-50 border border-slate-200 rounded-2xl animate-in slide-in-from-top-2 duration-300 shadow-inner">
                <div className="flex items-center gap-2 text-blue-700 font-bold mb-2 pb-4 border-b border-slate-200">
                  <CheckSquare className="h-5 w-5" />
                  User Record Found
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-slate-200 rounded-xl text-sm font-bold bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                      value={editForm.full_name}
                      onChange={(e) =>
                        setEditForm({ ...editForm, full_name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 border border-slate-200 rounded-xl text-sm font-bold bg-slate-100 text-slate-500 cursor-not-allowed"
                      value={editForm.email}
                      disabled
                      title="Email cannot be changed"
                    />
                  </div>

                  <div className="md:col-span-2">
                     <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Manage Roles
                     </label>
                     <RoleMultiSelector
                        selectedRoles={editForm.roles}
                        onChange={(newRoles) =>
                           setEditForm({ ...editForm, roles: newRoles })
                        }
                        roles={
                           roles.length > 0
                           ? roles.map((r) => ({ ...r, value: r.value }))
                           : undefined
                        }
                     />
                  </div>
                </div>

                {/* Update Button */}
                <button
                  onClick={handleEditUser}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-base hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <CheckSquare className="h-5 w-5" />
                  Update User Record
                </button>
              </div>
            )}
          </div>
        )}

        {/* SUSPEND USER FORM */}
        {actionMode === "suspend" && (
          <div className="space-y-6">
            {/* Search Section */}
            <UserSearchPanel
              searchEmail={searchEmail}
              setSearchEmail={setSearchEmail}
              handleSearchUser={handleSearchUser}
              searching={searching}
              searchError={searchError}
              theme="red"
              placeholder="user@example.com or user_id"
            >
                 <ActionDropdown
                    mainLabel="Suspend Mode"
                    MainIcon={UserX}
                    onMainAction={() => {}} // No top-level action
                    actionMode={actionMode}
                    onSwitchMode={switchActionMode}
                    disabled={true} 
                    mainBtnClass="bg-red-100 text-red-400 font-bold py-3 px-6 rounded-xl cursor-default"
                    toggleBtnClass="bg-red-500 text-white hover:bg-red-600 transition-colors"
                 />
            </UserSearchPanel>

            {/* User Found - Show Details */}
            {searchedUser && (
              <div className="space-y-6 p-6 bg-red-50/50 border border-red-100 rounded-2xl animate-in slide-in-from-top-2 duration-300">
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-red-100">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-extrabold text-2xl shadow-lg shadow-red-500/30">
                      {searchedUser.full_name?.charAt(0).toUpperCase() || "U"}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">
                        {searchedUser.full_name || "N/A"}
                      </h3>
                      <p className="text-sm font-semibold text-slate-500">
                        {searchedUser.email}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wide border ${
                      searchedUser.status === "suspended"
                        ? "bg-red-100 text-red-700 border-red-200"
                        : searchedUser.status === "active"
                        ? "bg-green-100 text-green-700 border-green-200"
                        : "bg-gray-100 text-gray-700 border-gray-200"
                    }`}
                  >
                    {searchedUser.status?.toUpperCase() || "UNKNOWN"}
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-red-100影子-sm">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      User ID
                    </p>
                    <p className="text-sm font-mono font-bold text-slate-700 truncate">
                      {searchedUser.user_id || "N/A"}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-red-100 shadow-sm">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Active Role
                    </p>
                    <p className="text-sm font-bold text-slate-800">
                      {searchedUser.active_role || searchedUser.role || "N/A"}
                    </p>
                  </div>
                  {searchedUser.status === "suspended" &&
                    searchedUser.updated_at && (
                      <div className="col-span-2 bg-red-100 p-4 rounded-xl border border-red-200 flex items-center gap-3">
                         <AlertCircle className="text-red-600" size={20} />
                         <div>
                            <p className="text-xs font-bold text-red-600 uppercase tracking-wider">
                              Suspended On
                            </p>
                            <p className="text-sm font-bold text-red-900">
                              {new Date(searchedUser.updated_at).toLocaleString("en-US", {dateStyle: "medium", timeStyle: "short"})}
                            </p>
                         </div>
                      </div>
                    )}
                </div>

                {/* Action Button */}
                {searchedUser.status === "suspended" ? (
                  <button
                    onClick={handleUnsuspendUser}
                    className="w-full p-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-bold text-base hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <CheckSquare className="h-5 w-5" />
                    Unsuspend User Account
                  </button>
                ) : (
                  <button
                    onClick={handleSuspendUser}
                    className="w-full p-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl font-bold text-base hover:from-red-700 hover:to-orange-700 transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <UserX className="h-5 w-5" />
                    Confirm User Suspension
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </Card>

      {/* --- USERS TABLE (Dynamic) --- */}
      <UserListTable
        users={users}
        loading={loading}
        error={error}
        localPage={localPage}
        setLocalPage={setLocalPage}
        rowsPerPage={ROWS_PER_PAGE}
      />
    </div>
  );
};

export default UserManagement;
