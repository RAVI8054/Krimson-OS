import React, { useState, useEffect } from "react";
import {
  UserPlus,
  RefreshCw,
  AlertCircle,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal 
} from "lucide-react";
import { userService } from "../../../services/userService"; 
import { useAppDispatch } from "../../../store/hooks";
import { addNotification } from "../../../store/slices/uiSlice";

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 ${className}`}
  >
    {children}
  </div>
);

// Helper component for dynamic real-time updates
const LiveTimestamp = ({ dateString }) => {
  const calculateTimeAgo = (date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return "Just now";
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} min ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
    return null; // Return null if older than a week to fall back to static date
  };

  const [timeAgo, setTimeAgo] = useState(() => {
    if (!dateString) return "N/A";
    return calculateTimeAgo(new Date(dateString));
  });

  useEffect(() => {
    if (!dateString) return;
    
    // Update every minute
    const interval = setInterval(() => {
      const relative = calculateTimeAgo(new Date(dateString));
      if (relative !== timeAgo) {
        setTimeAgo(relative);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [dateString, timeAgo]);

  if (!dateString) return <span className="text-slate-400">N/A</span>;

  const date = new Date(dateString);
  const relative = calculateTimeAgo(date); // Recalculate for render resilience

  // Format exact date: "Jan 08, 12:30 PM"
  const exactDate = date.toLocaleDateString('en-SG', { 
    month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' 
  });

  return (
    <div className="flex flex-col">
      <span className="text-slate-700 font-medium text-xs">
        {exactDate}
      </span>
      {relative && (
        <span className="text-[10px] text-slate-400 font-medium">
          {relative}
        </span>
      )}
    </div>
  );
};

const UserManagement = () => {
  const dispatch = useAppDispatch();
  
  // State for Database Data
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination State
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalUsers: 0
  });

  const ITEMS_PER_PAGE = 10;

  // Form State (Matches Backend Schema: full_name, email, role)
  const [newUser, setNewUser] = useState({
    full_name: "",
    role: "Student",
    email: "",
  });

  // Helper function to expand users with multiple roles into separate entries
  const expandUsersByRole = (users) => {
    const expanded = [];
    
    users.forEach(user => {
      // If user has roles array populated, create entry for each role
      if (user.roles && user.roles.length > 0) {
        // Reverse roles to show the most recently added role (end of array) first
        [...user.roles].reverse().forEach(role => {
          expanded.push({
            ...user,
            role: role, // Override with specific role
            _isExpanded: true // Flag to identify expanded entries
          });
        });
      } else {
        // If no roles array, just use the primary role
        expanded.push({
          ...user,
          _isExpanded: false
        });
      }
    });
    
    return expanded;
  };

  // --- API FUNCTION: GET USERS ---
  const fetchUsers = async (page = 1) => {
    setLoading(true);
    try {
      const result = await userService.getAllUsers(page, ITEMS_PER_PAGE);

      if (result.success) {
        setUsers(result.data); // Update state with real DB data
        
        // Update pagination state
        if (result.pagination) {
          setPagination({
            currentPage: result.pagination.page,
            totalPages: result.pagination.totalPages,
            totalUsers: result.pagination.total
          });
        }
        setError(null);
      } else {
        // Fallback or empty if fail, but log it
        console.error("Failed to load users:", result.message);
        setError("Failed to load users");
        // For demo purposes if backend fails, we might want to show empty or mock, 
        // but user requested DYNAMIC implementation, so we show error state.
      }
    } catch (err) {
      console.error(err);
      setError(err.message || "Error connecting to server.");
    } finally {
      setLoading(false);
    }
  };

  // Load users on component mount
  useEffect(() => {
    fetchUsers(1);
  }, []);

  // --- API FUNCTION: ADD USER ---
  const handleAddUser = async () => {
    // Validation
    if (!newUser.full_name || !newUser.email) {
      dispatch(addNotification({ type: 'warning', message: 'Please enter Name and Email' }));
      return;
    }

    try {
      // ⚡ OPTIMIZATION: Frontend Check (Best Method for UX)
      // Check if user exists locally to give instant feedback without server call
      const existingUserStr = newUser.email.toLowerCase();
      const localDuplicate = users.find(u => 
        u.email.toLowerCase() === existingUserStr && 
        (u.roles?.includes(newUser.role) || u.role === newUser.role)
      );

      if (localDuplicate) {
        dispatch(addNotification({ 
          type: 'error', 
          message: `User already has the role ${newUser.role}` 
        }));
        return; 
      }

      const result = await userService.createUser(newUser);

      if (result.success) {
        if (result.data.role_already_existed) {
             dispatch(addNotification({ type: 'error', message: `User already has the role ${newUser.role}` }));
        } else {
             dispatch(addNotification({ type: 'success', message: 'User created/updated successfully!' }));
             
             // If creating new user, refresh page 1 to show latest
             setNewUser({ full_name: "", role: "Student", email: "" }); // Reset Form
             fetchUsers(1); 
        }
      } else {
        dispatch(addNotification({ type: 'error', message: result.message || 'Failed to create user' }));
      }
    } catch (err) {
      console.error(err);
      dispatch(addNotification({ type: 'error', message: err.message || 'Error connecting to server' }));
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

      {/* --- ADD USER FORM --- */}
      <Card className="mb-6">
        <h3 className="font-bold text-lg text-slate-800 mb-4">Add New User</h3>
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
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            >
              {[
                { label: "Student", value: "Student" },
                { label: "Teacher", value: "Teacher" },
                { label: "Parent", value: "Parent" },
                { label: "Administrator", value: "Administrator" },
                { label: "Principal", value: "Principal" },
                { label: "Finance Officer", value: "Finance" },
                { label: "Registrar", value: "Registrar" },
                { label: "Academic Coordinator", value: "Academic Coordinator" },
                { label: "Counselor", value: "Counselor" },
                { label: "Librarian", value: "Librarian" },
                { label: "Management", value: "Management" },
                { label: "IT/System Admin", value: "IT/System Admin" },
              ].map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleAddUser}
            className="p-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold text-sm hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
          >
            <UserPlus className="h-4 w-4" /> Add User
          </button>
        </div>
      </Card>

      {/* --- USERS TABLE (Dynamic) --- */}
      <Card className="overflow-hidden p-0">
        <div className="p-6 border-b border-slate-100">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg text-slate-800">
                Existing Users ({pagination.totalUsers} total)
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Showing page {pagination.currentPage} of {pagination.totalPages}
              </p>
            </div>
            <span className="text-xs text-slate-500 italic">
              Sorted by newest first
            </span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50">
              <tr>
                {["Name", "Role", "Email", "Created", "App Access", "Status"].map(
                  (h, i) => (
                    <th
                      key={i}
                      className="p-4 text-xs font-bold uppercase text-slate-500"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {/* Loading State */}
              {loading && users.length === 0 && (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-slate-500">
                    Loading data...
                  </td>
                </tr>
              )}

              {/* Error State */}
              {error && (
                <tr>
                  <td
                    colSpan="6"
                    className="p-8 text-center text-rose-500 flex justify-center items-center gap-2"
                  >
                    <AlertCircle className="h-4 w-4" /> {error}
                  </td>
                </tr>
              )}

              {/* Data State */}
              {!loading &&
                !error &&
                expandUsersByRole(users).map((user, i) => (
                  <tr
                    key={`${user.user_id}-${user.role}-${i}`}
                    className="hover:bg-slate-50/50 transition-colors border-b border-slate-50 last:border-0"
                  >
                    <td className="p-4 text-sm font-bold text-slate-700">
                      <div className="flex items-center gap-2">
                        {user.full_name}
                        {user.roles && user.roles.length > 1 && (
                          <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs rounded-full font-bold">
                            {user.roles.length} roles
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-sm text-slate-600">
                      <span
                        className={`px-2 py-1 rounded text-xs font-bold ${
                          user.role === "Administrator" ? "bg-purple-100 text-purple-700" :
                          user.role === "Principal" ? "bg-rose-100 text-rose-700" :
                          user.role === "Teacher" ? "bg-amber-100 text-amber-700" :
                          user.role === "Student" ? "bg-blue-100 text-blue-700" :
                          user.role === "Finance" ? "bg-emerald-100 text-emerald-700" :
                          user.role === "IT/System Admin" ? "bg-slate-800 text-slate-200" :
                          "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="p-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className={user.roles && user.roles.length > 1 ? "text-indigo-600 font-semibold" : "text-slate-600"}>
                          {user.email}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-slate-600">
                      <LiveTimestamp dateString={user.created_at} />
                    </td>
                    <td className="p-4 text-sm">
                      <span className="text-emerald-600 font-bold text-xs flex items-center gap-1">
                         <CheckSquare className="h-3 w-3" /> Granted
                      </span>
                    </td>
                    <td className="p-4 text-sm">
                      <span className="text-emerald-600 font-bold text-xs flex items-center gap-1">
                         <CheckSquare className="h-3 w-3" /> Active
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Controls */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between">
          <div className="text-xs text-slate-500">
             Showing {users.length} users on this page
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => fetchUsers(pagination.currentPage - 1)}
              disabled={pagination.currentPage === 1 || loading}
              className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="h-4 w-4 text-slate-600" />
            </button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                // Logic to show generic page numbers around current page could be complex, 
                // for simplicity showing first 5 or simpler logic.
                // Let's implement a simple "Current of Total" logic for robustness
                // or just simple numbers if pages are few.
                // For "Best Production Level", let's keep it clean:
                
                let pageNum;
                if (pagination.totalPages <= 5) {
                   pageNum = i + 1;
                } else if (pagination.currentPage <= 3) {
                   pageNum = i + 1;
                } else if (pagination.currentPage >= pagination.totalPages - 2) {
                   pageNum = pagination.totalPages - 4 + i;
                } else {
                   pageNum = pagination.currentPage - 2 + i;
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => fetchUsers(pageNum)}
                    className={`h-8 w-8 rounded-lg text-xs font-bold transition-all ${
                      pagination.currentPage === pageNum
                        ? "bg-slate-900 text-white"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              
              {pagination.totalPages > 5 && pagination.currentPage < pagination.totalPages - 2 && (
                 <span className="text-slate-400 px-1"><MoreHorizontal className="h-4 w-4" /></span>
              )}
            </div>

            <button
              onClick={() => fetchUsers(pagination.currentPage + 1)}
              disabled={pagination.currentPage === pagination.totalPages || loading}
              className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="h-4 w-4 text-slate-600" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserManagement;
