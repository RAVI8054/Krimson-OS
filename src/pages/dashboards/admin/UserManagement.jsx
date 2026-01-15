import React, { useState, useEffect, useRef } from "react";
import {
  UserPlus,
  RefreshCw,
  CheckSquare,
  Edit3,
  UserX,
  AlertCircle
} from "lucide-react";
import { userService } from "../../../services/userService";
import { useAppDispatch } from "../../../store/hooks";
import { addNotification } from "../../../store/slices/uiSlice";

// Components
import ActionDropdown from "./components/ActionDropdown";
import RoleMultiSelector from "./components/RoleMultiSelector";
import UserSearchPanel from "./components/UserSearchPanel";
import UserListTable from "./components/UserListTable";

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 ${className}`}
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

  const FETCH_LIMIT = 100; // Fetch more users to have enough data for local pagination
  const ROWS_PER_PAGE = 10; // Show exactly 10 rows per page

  // Local Pagination State
  const [localPage, setLocalPage] = useState(1);

  // Action Mode State - Controls which form to display
  const [actionMode, setActionMode] = useState("add"); // "add" | "edit" | "suspend"
  // Note: isDropdownOpen logic moved to ActionDropdown component

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
  const fetchUsers = async (page = 1) => {
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
  };

  // --- API FUNCTION: GET ROLES ---
  const fetchRoles = async () => {
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
  };

  // Load users and roles on component mount
  useEffect(() => {
    fetchUsers(1);
    fetchRoles();
  }, []);

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
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-end mb-2">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">User Management</h2>
          <p className="text-slate-500 mt-1">
            Add and manage users for SSO access via Database.
          </p>
        </div>
        {/* Refresh Button */}
        <button
          onClick={() => fetchUsers(pagination.currentPage)}
          className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
          title="Refresh Data"
        >
          <RefreshCw className={`h-5 w-5 ${loading ? "animate-spin" : ""}`} />
        </button>
      </div>

      {/* --- DYNAMIC USER MANAGEMENT FORM --- */}
      <Card className="mb-6">
        <h3 className="font-bold text-lg text-slate-800 mb-4">
          {actionMode === "add" && "Add New User"}
          {actionMode === "edit" && "Edit User"}
          {actionMode === "suspend" && "Suspend User"}
        </h3>

        {/* ADD USER FORM */}
        {actionMode === "add" && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-2.5 border border-slate-200 rounded-xl text-sm bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                placeholder="e.g. John Tan"
                value={newUser.full_name}
                onChange={(e) =>
                  setNewUser({ ...newUser, full_name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">
                Email (SSO ID)
              </label>
              <input
                type="email"
                className="w-full p-2.5 border border-slate-200 rounded-xl text-sm bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                placeholder="user@krimson.edu"
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">
                Role
              </label>
              <select
                className="w-full p-2.5 border border-slate-200 rounded-xl text-sm bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
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
            </div>

            {/* Split Button - Action + Dropdown */}
            <ActionDropdown
              mainLabel="Add User"
              MainIcon={UserPlus}
              onMainAction={handleAddUser}
              actionMode={actionMode}
              onSwitchMode={switchActionMode}
              mainBtnClass="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-blue-500/20"
            />
          </div>
        )}

        {/* EDIT USER FORM */}
        {actionMode === "edit" && (
          <div className="space-y-4">
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
                mainLabel="Edit"
                MainIcon={Edit3}
                onMainAction={handleEditUser}
                actionMode={actionMode}
                onSwitchMode={switchActionMode}
                disabled={!searchedUser}
                mainBtnClass="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-blue-500/20"
              />
            </UserSearchPanel>

            {/* User Found - Edit Form */}
            {searchedUser && (
              <div className="space-y-4 p-4 bg-green-50 border border-green-200 rounded-xl animate-in slide-in-from-top-2 duration-200">
                <div className="flex items-center gap-2 text-green-700 font-bold mb-4">
                  <CheckSquare className="h-5 w-5" />
                  User Found!
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-slate-300 rounded-xl text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                      value={editForm.full_name}
                      onChange={(e) =>
                        setEditForm({ ...editForm, full_name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 border border-slate-300 rounded-xl text-sm bg-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                      value={editForm.email}
                      disabled
                      title="Email cannot be changed"
                    />
                  </div>

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

                {/* Update Button */}
                <button
                  onClick={handleEditUser}
                  className="w-full p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-sm hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <CheckSquare className="h-4 w-4" />
                  Update User
                </button>
              </div>
            )}
          </div>
        )}

        {/* SUSPEND USER FORM */}
        {actionMode === "suspend" && (
          <div className="space-y-4">
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
                {/* 
                  Note: The suspend form in original code also had the dropdown to switch back to add/edit.
                  But the original code (lines 852-885) for suspend search DID NOT have the dropdown next to the search button.
                  It only showed the dropdown in Add and Edit modes.
                  Wait, let's check lines 868-884 (Suspend Search Button). It ends at 885.
                  Then line 886 is Error.
                  There is NO ActionDropdown in the Suspend Search bar in the ORIGINAL code.
                  However, how does one switch AWAY from Suspend mode?
                  In the original code (lines 511-600), "Add" mode shows dropdown.
                  In "Edit" mode (lines 641-729), the search bar shows dropdown.
                  In "Suspend" mode... I don't see a way to switch back!
                  Ah, I see lines 576 in Add mode switch to "Suspend".
                  But once in "Suspend", where is the switcher?
                  Original code lines 852-963 covers Suspend.
                  There is NO switcher in Suspend mode in the original code!
                  This seems like a bug or bad UX in source.
                  I should probably ADD the switcher to Suspend mode too for consistency.
                  I will add `ActionDropdown` here too, but what is the "Main Action"?
                  The main action in Suspend mode is usually "Confirm Suspend" but that only appears AFTER search.
                  In "Add", Main is Add. In "Edit", Main is Edit.
                  In "Suspend" search bar, the main action is just Search (already there).
                  I will add a `ActionDropdown` that acts purely as a switcher?
                  Or I can pass a dummy main action or make `ActionDropdown` robust to missing main action?
                  My `ActionDropdown` requires `mainLabel`.
                  I will use "Suspend User" as label, but disable it or make it do nothing (since suspend happens after search)?
                  Or I can make the main button switch to "Add" by default?
                  Let's just show the switcher with "Suspend User" (dummy) or...
                  Actually, I'll essentially replicate the "Edit" style but the main button might be disabled until user is found?
                  No, in Edit mode, the main button triggers `handleEditUser`.
                  In Suspend mode, `handleSuspendUser` is triggered by a big button at the bottom.
                  So the top bar doesn't really have a "Suspend" action.
                  I will just add the dropdown part?
                  My `ActionDropdown` couples them.
                  I'll use `UserX` icon and label "Suspend", and `disabled={true}` for the main button, just to provide the dropdown arrow.
                 */}
                 <ActionDropdown
                    mainLabel="Suspend Mode"
                    MainIcon={UserX}
                    onMainAction={() => {}} // No top-level action
                    actionMode={actionMode}
                    onSwitchMode={switchActionMode}
                    disabled={true} 
                    mainBtnClass="bg-gradient-to-r from-red-500 to-orange-500 opacity-80 cursor-default"
                    toggleBtnClass="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                 />
            </UserSearchPanel>

            {/* User Found - Show Details */}
            {searchedUser && (
              <div className="space-y-4 p-6 bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 rounded-2xl animate-in slide-in-from-top-2 duration-200">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-300">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {searchedUser.full_name?.charAt(0).toUpperCase() || "U"}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800">
                        {searchedUser.full_name || "N/A"}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {searchedUser.email}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`px-4 py-2 rounded-lg font-bold text-sm ${
                      searchedUser.status === "suspended"
                        ? "bg-red-100 text-red-700 border-2 border-red-300"
                        : searchedUser.status === "active"
                        ? "bg-green-100 text-green-700 border-2 border-green-300"
                        : "bg-gray-100 text-gray-700 border-2 border-gray-300"
                    }`}
                  >
                    {searchedUser.status?.toUpperCase() || "UNKNOWN"}
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <p className="text-xs font-semibold text-slate-500 mb-1">
                      User ID
                    </p>
                    <p className="text-sm font-mono text-slate-800 truncate">
                      {searchedUser.user_id || "N/A"}
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <p className="text-xs font-semibold text-slate-500 mb-1">
                      Active Role
                    </p>
                    <p className="text-sm font-bold text-slate-800">
                      {searchedUser.active_role || searchedUser.role || "N/A"}
                    </p>
                  </div>
                  {searchedUser.status === "suspended" &&
                    searchedUser.updated_at && (
                      <div className="col-span-2 bg-red-50 p-4 rounded-xl border-2 border-red-200">
                        <p className="text-xs font-semibold text-red-600 mb-1">
                          ⚠️ Suspended On
                        </p>
                        <p className="text-sm font-bold text-red-800">
                          {new Date(searchedUser.updated_at).toLocaleString(
                            "en-US",
                            {
                              dateStyle: "medium",
                              timeStyle: "short",
                            }
                          )}
                        </p>
                      </div>
                    )}
                </div>

                {/* Action Button */}
                {searchedUser.status === "suspended" ? (
                  <button
                    onClick={handleUnsuspendUser}
                    className="w-full p-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-bold text-sm hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <CheckSquare className="h-5 w-5" />
                    Unsuspend User
                  </button>
                ) : (
                  <button
                    onClick={handleSuspendUser}
                    className="w-full p-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl font-bold text-sm hover:from-red-700 hover:to-orange-700 transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <UserX className="h-5 w-5" />
                    Confirm Suspend User
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
