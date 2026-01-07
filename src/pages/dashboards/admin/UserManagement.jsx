import React, { useState, useEffect } from "react";
import {
  UserPlus,
  RefreshCw,
  AlertCircle,
  CheckSquare
} from "lucide-react";
import { userService } from "../../../services/userService"; 
import { toast } from 'react-toastify';

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 ${className}`}
  >
    {children}
  </div>
);

const UserManagement = () => {
  // State for Database Data
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Form State (Matches Backend Schema: full_name, email, role)
  const [newUser, setNewUser] = useState({
    full_name: "",
    role: "Student",
    email: "",
  });

  // --- API FUNCTION: GET USERS ---
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const result = await userService.getAllUsers();

      if (result.success) {
        setUsers(result.data); // Update state with real DB data
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
    fetchUsers();
  }, []);

  // --- API FUNCTION: ADD USER ---
  const handleAddUser = async () => {
    // Validation
    if (!newUser.full_name || !newUser.email) {
      toast.warning("Please enter Name and Email");
      return;
    }

    try {
      const result = await userService.createUser(newUser);

      if (result.success) {
        toast.success("User created successfully!");
        setNewUser({ full_name: "", role: "Student", email: "" }); // Reset Form
        fetchUsers(); // Refresh Table
      } else {
        toast.error(result.message || "Failed to create user");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Error connecting to server");
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
          onClick={fetchUsers}
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
            className="p-2.5 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
          >
            <UserPlus className="h-4 w-4" /> Add User
          </button>
        </div>
      </Card>

      {/* --- USERS TABLE (Dynamic) --- */}
      <Card className="overflow-hidden p-0">
        <div className="p-6 border-b border-slate-100">
          <h3 className="font-bold text-lg text-slate-800">
            Existing Users ({users.length})
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50">
              <tr>
                {["Name", "Role", "Email", "App Access", "Status"].map(
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
                  <td colSpan="5" className="p-8 text-center text-slate-500">
                    Loading data...
                  </td>
                </tr>
              )}

              {/* Error State */}
              {error && (
                <tr>
                  <td
                    colSpan="5"
                    className="p-8 text-center text-rose-500 flex justify-center items-center gap-2"
                  >
                    <AlertCircle className="h-4 w-4" /> {error}
                  </td>
                </tr>
              )}

              {/* Data State */}
              {!loading &&
                !error &&
                users.map((user, i) => (
                  <tr
                    key={user.user_id || i}
                    className="hover:bg-slate-50/50 transition-colors border-b border-slate-50 last:border-0"
                  >
                    <td className="p-4 text-sm font-bold text-slate-700">
                      {user.full_name}
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
                    <td className="p-4 text-sm text-slate-600">{user.email}</td>
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
      </Card>
    </div>
  );
};

export default UserManagement;
