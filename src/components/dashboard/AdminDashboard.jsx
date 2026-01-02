import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  UserPlus,
  Users,
  Settings,
  Briefcase,
  DollarSign,
  CheckSquare,
  Bell,
  Lock,
  FileText,
  Server,
  BarChart,
  LifeBuoy,
  Search,
  Menu,
  LogOut,
  Scan,
  Shield,
  ExternalLink,
  RefreshCw, // Added for refresh button
  AlertCircle, // Added for error display
} from "lucide-react";

// --- CONFIGURATION ---
const ADMIN_MENU_ITEMS = [
  { id: "ad1", title: "Control Dashboard", icon: LayoutDashboard },
  { id: "ad2", title: "Admissions Console", icon: UserPlus },
  { id: "ad3", title: "User Management", icon: Users },
  { id: "ad4", title: "Class Config", icon: Settings },
  { id: "ad5", title: "HR Admin", icon: Briefcase },
  { id: "ad6", title: "Finance Control", icon: DollarSign },
  { id: "ad7", title: "Attendance Oversight", icon: CheckSquare },
  { id: "ad8", title: "Notification Center", icon: Bell },
  { id: "ad9", title: "Compliance Vault", icon: Lock },
  { id: "ad10", title: "Audit Trail", icon: FileText },
];

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white/80 backdrop-blur-lg rounded-[2rem] p-6 shadow-sm border border-white/50 ${className}`}
  >
    {children}
  </div>
);

// --- 1. USER MANAGEMENT SCREEN (Connected to API) ---
const UserManagementModule = () => {
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
      const response = await fetch("http://localhost:5000/api/users");
      const result = await response.json();

      if (result.success) {
        setUsers(result.data); // Update state with real DB data
        setError(null);
      } else {
        setError("Failed to load users");
      }
    } catch (err) {
      console.error(err);
      setError("Error connecting to server. Is backend running?");
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
      alert("Please enter Name and Email");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      const result = await response.json();

      if (response.ok) {
        alert("User created successfully!");
        setNewUser({ full_name: "", role: "Student", email: "" }); // Reset Form
        fetchUsers(); // Refresh Table
      } else {
        alert(result.message || "Failed to create user");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to server");
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
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
              className="w-full p-2.5 border border-slate-200 rounded-xl text-sm bg-white/50 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="e.g. John Tan"
              value={newUser.full_name} // Changed from name to full_name
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
              className="w-full p-2.5 border border-slate-200 rounded-xl text-sm bg-white/50 focus:ring-2 focus:ring-blue-500 outline-none"
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
              className="w-full p-2.5 border border-slate-200 rounded-xl text-sm bg-white/50 focus:ring-2 focus:ring-blue-500 outline-none"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            >
              {/* Added more roles from your config */}
              {[
                "Student",
                "Teacher",
                "Parent",
                "Administrator",
                "Principal",
                "Finance Officer",
              ].map((r) => (
                <option key={r} value={r}>
                  {r}
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
            <thead>
              <tr>
                {["Name", "Role", "Email", "App Access", "Status"].map(
                  (h, i) => (
                    <th
                      key={i}
                      className="p-4 text-xs font-bold uppercase text-slate-500 border-b border-slate-100"
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
                    key={user.user_id || i} // Use DB ID if available
                    className="hover:bg-slate-50/50 transition-colors border-b border-slate-50 last:border-0"
                  >
                    <td className="p-4 text-sm font-bold text-slate-700">
                      {user.full_name} {/* Display full_name from DB */}
                    </td>
                    <td className="p-4 text-sm text-slate-600">
                      <span
                        className={`px-2 py-1 rounded text-xs font-bold ${
                          user.role === "Administrator"
                            ? "bg-purple-100 text-purple-700"
                            : user.role === "Teacher"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-slate-600">{user.email}</td>
                    {/* App Access column */}
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

// 2. DASHBOARD HOME
const DashboardHome = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
    <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-8 relative overflow-hidden shadow-xl shadow-blue-900/5 mb-8 border border-white/50">
      <div className="relative z-10 max-w-2xl">
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-semibold tracking-wide mb-6 text-blue-700">
          Singapore Campus
        </span>
        <h1 className="text-4xl font-bold mb-4 text-slate-900">
          Admin Control Center
        </h1>
        <p className="text-slate-600 text-lg">
          System Overview & Health Metrics
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="flex items-center gap-4">
        <div className="p-4 bg-blue-50 rounded-2xl text-blue-600">
          <Users className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-800">2,450</h3>
          <p className="text-slate-500 text-sm">Total Users</p>
        </div>
      </Card>
      <Card className="flex items-center gap-4">
        <div className="p-4 bg-emerald-50 rounded-2xl text-emerald-600">
          <CheckSquare className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-800">98%</h3>
          <p className="text-slate-500 text-sm">System Uptime</p>
        </div>
      </Card>
      <Card className="flex items-center gap-4">
        <div className="p-4 bg-purple-50 rounded-2xl text-purple-600">
          <Lock className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-800">Secure</h3>
          <p className="text-slate-500 text-sm">SSO Status</p>
        </div>
      </Card>
    </div>
  </div>
);

// --- MAIN DASHBOARD COMPONENT ---
const AdminDashboard = ({ onLogout }) => {
  const [activeScreenId, setActiveScreenId] = useState("ad3");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-purple-100 to-rose-100 flex font-sans text-slate-900 overflow-hidden">
      {/* SIDEBAR */}
      <aside
        className={`fixed inset-y-4 left-4 z-50 w-[280px] flex flex-col overflow-hidden rounded-[2.5rem] shadow-2xl shadow-blue-900/10 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-[120%]"
        } md:translate-x-0`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-300 via-blue-300 to-pink-300"></div>

        <div className="relative z-10 flex-1 flex flex-col p-6 overflow-hidden">
          <div className="flex items-center gap-4 mb-8 shrink-0">
            <div className="w-10 h-10 bg-white/40 backdrop-blur rounded-xl flex items-center justify-center shadow-sm">
              <Shield className="h-6 w-6 text-slate-800" />
            </div>
            <div>
              <h1 className="font-bold text-xl tracking-tight leading-none text-slate-800">
                Krimson OS
              </h1>
              <p className="text-xs text-slate-700 mt-1 font-medium">
                Singapore
              </p>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto space-y-1 custom-scrollbar py-2 min-h-0 pr-1">
            {ADMIN_MENU_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeScreenId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveScreenId(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all duration-200 group relative ${
                    isActive
                      ? "bg-white/40 backdrop-blur text-slate-900 font-bold shadow-sm"
                      : "text-slate-700 hover:text-slate-900 hover:bg-white/20"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 ${
                      isActive ? "text-slate-900" : "group-hover:text-slate-900"
                    }`}
                  />
                  <span className="tracking-wide text-sm truncate">
                    {item.title}
                  </span>
                  {isActive && (
                    <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-slate-800"></div>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="mt-auto pt-4 border-t border-white/30 shrink-0">
            <div className="bg-white/30 backdrop-blur rounded-2xl p-3 flex items-center gap-3 border border-white/20 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold text-xs shadow-sm">
                A
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-800 truncate">
                  Administrator
                </p>
                <div className="flex items-center gap-1 text-[10px] text-slate-700 font-medium">
                  <Scan className="h-2 w-2" />
                  <span>Verified</span>
                </div>
              </div>
              <button
                onClick={onLogout}
                className="text-slate-600 hover:text-white transition-colors"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 md:ml-[310px] flex flex-col h-screen overflow-hidden relative">
        <header className="h-24 flex items-center justify-between px-8 md:px-12 z-10 sticky top-0">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 bg-white/50 backdrop-blur rounded-xl shadow-sm"
            >
              <Menu className="h-6 w-6 text-slate-700" />
            </button>
            <div className="hidden md:block">
              <h2 className="text-2xl font-bold text-slate-800">
                {ADMIN_MENU_ITEMS.find((i) => i.id === activeScreenId)?.title ||
                  "Dashboard"}
              </h2>
              <p className="text-slate-500 text-sm">Aggregated Data View</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center gap-3 bg-white/60 backdrop-blur-md px-5 py-3 rounded-full shadow-sm border border-white/50 min-w-[300px]">
              <Search className="h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search across all apps..."
                className="bg-transparent border-none focus:outline-none text-slate-600 text-sm w-full placeholder-slate-400"
              />
            </div>
            <button className="w-12 h-12 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm border border-white/50 relative hover:shadow-md transition-shadow">
              <Bell className="h-5 w-5 text-slate-600" />
              <span className="absolute top-3 right-3 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-12 pb-24">
          {activeScreenId === "ad3" ? (
            <UserManagementModule />
          ) : (
            <DashboardHome />
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
