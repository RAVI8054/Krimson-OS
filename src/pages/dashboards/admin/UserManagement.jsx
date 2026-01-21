/**
 * @component UserManagement
 * @description Admin Screen 3 - User & Role Management
 * Manage user accounts, privileges, and role hierarchies
 */
import React, { useState } from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { ROLE_LABELS } from '../../../utils/constants';
import {
  Users, UserPlus, Shield, Activity, Lock, Unlock, Eye, EyeOff,
  Mail, Phone, Calendar, Clock, MapPin, Monitor, AlertTriangle,
  CheckCircle, XCircle, Filter, Search, Download, Plus, Edit,
  Trash2, Key, ChevronDown, ChevronRight, X, Check, ShieldAlert,
  UserCheck, Building
} from 'lucide-react';




const USER_ACTIONS = [
  { key: "add", label: "Add User", icon: UserPlus },
  { key: "edit", label: "Edit User", icon: Edit },
  { key: "reset", label: "Reset Password", icon: Key },
  { key: "suspend", label: "Suspend User", icon: Lock },
];

const UserManagement = () => {
  const data = ADMIN_DATA.userManagement;
  const [selectedTab, setSelectedTab] = useState('users'); // users, activity, groups, security
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({ status: 'all', role: 'all', department: 'all', search: '' });

  const [expandedGroups, setExpandedGroups] = useState({});


  // CRUD State Management
  const [users, setUsers] = useState(data.users);

  
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const [selectedAction, setSelectedAction] = useState(USER_ACTIONS[0]);
  const [showActionMenu, setShowActionMenu] = useState(false);

  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [showAssignRoleModal, setShowAssignRoleModal] = useState(false);
  const [showSuspendModal, setShowSuspendModal] = useState(false);
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);
  const [userToSuspend, setUserToSuspend] = useState(null);

  const [newUser, setNewUser] = useState({
    name: '', email: '', phone: '', department: 'Academic', 
    grade: '', roles: [], status: 'Active'
  });
  const [suspendReason, setSuspendReason] = useState('');


  // Filter users based on active filters
  const filteredUsers = users.filter(user => {
    if (filters.status !== 'all' && user.status.toLowerCase() !== filters.status.toLowerCase()) return false;
    if (filters.role !== 'all' && !user.roles.includes(filters.role)) return false;
    if (filters.department !== 'all' && user.department !== filters.department) return false;
    if (filters.search && !user.name.toLowerCase().includes(filters.search.toLowerCase()) 
        && !user.email.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });

  // CRUD Operations
  const handleAddUser = () => {
    // Relaxed validation for quick add - Phone is optional here
    if (!newUser.name || !newUser.email || newUser.roles.length === 0) {
      alert('Please fill all required fields (Name, Email, Role)');
      return;
    }
    
    const user = {
      id: `user_${Date.now()}`,
      userId: `USR${new Date().getFullYear()}${String(users.length + 1).padStart(3, '0')}`,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone || 'N/A',
      roles: newUser.roles,
      status: 'Active',
      department: newUser.department,
      grade: newUser.grade || null,
      avatar: null,
      lastLogin: null,
      lastLoginIp: null,
      accountCreated: new Date().toISOString().split('T')[0],
      totalLogins: 0,
      failedLoginAttempts: 0,
      twoFactorEnabled: false,
      ssoLinked: false,
    };
    
    setUsers([...users, user]);
    setShowAddUserModal(false);
    setNewUser({ name: '', email: '', phone: '', department: 'Academic', grade: '', roles: [], status: 'Active' });
    alert('User added successfully!');
  };

  const handleEditUser = () => {
    if (!userToEdit.name || !userToEdit.email || !userToEdit.phone) {
      alert('Please fill all required fields');
      return;
    }
    
    setUsers(users.map(u => u.id === userToEdit.id ? userToEdit : u));
    setShowEditUserModal(false);
    setUserToEdit(null);
    alert('User updated successfully!');
  };

  const handleAssignRole = () => {
    if (!userToEdit || userToEdit.roles.length === 0) {
      alert('Please select at least one role');
      return;
    }
    
    setUsers(users.map(u => u.id === userToEdit.id ? userToEdit : u));
    setShowAssignRoleModal(false);
    setUserToEdit(null);
    alert('Roles assigned successfully!');
  };

  const handleSuspendUser = () => {
    if (!suspendReason.trim()) {
      alert('Please provide a reason for suspension');
      return;
    }
    
    setUsers(users.map(u => 
      u.id === userToSuspend.id 
        ? { ...u, status: 'Suspended', suspensionReason: suspendReason, suspendedDate: new Date().toISOString().split('T')[0] }
        : u
    ));
    setShowSuspendModal(false);
    setUserToSuspend(null);
    setSuspendReason('');
    alert('User suspended successfully!');
  };

  const handleActivateUser = (user) => {
    setUsers(users.map(u => 
      u.id === user.id 
        ? { ...u, status: 'Active', suspensionReason: null, suspendedDate: null }
        : u
    ));
    alert('User activated successfully!');
  };

  const handleResetPassword = () => {
    // In a real app, this would trigger a backend password reset API
    alert(`Password reset link sent to ${userToEdit.email}`);
    setShowResetPasswordModal(false);
    setUserToEdit(null);
  };

  const toggleRole = (role, isAdding = true, formData, setFormData) => {
    if (isAdding) {
      if (!formData.roles.includes(role)) {
        setFormData({ ...formData, roles: [...formData.roles, role] });
      }
    } else {
      setFormData({ ...formData, roles: formData.roles.filter(r => r !== role) });
    }
  };

  const handlePrimaryAction = () => {
    switch (selectedAction.key) {
      case 'add':
        handleAddUser();
        break;
      case 'edit':
        if (filteredUsers.length === 0) { alert('No users available'); return; }
        setUserToEdit({ ...filteredUsers[0] });
        setShowEditUserModal(true);
        break;
      case 'reset':
         if (filteredUsers.length === 0) { alert('No users available'); return; }
         setUserToEdit({...filteredUsers[0]});
         setShowResetPasswordModal(true);
         break;
      case 'suspend':
         if (filteredUsers.length === 0) { alert('No users available'); return; }
         setUserToSuspend({...filteredUsers[0]});
         setShowSuspendModal(true);
         break;
      default:
        break;
    }
  };


  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'text-green-600 bg-green-50 border-green-200';
      case 'Suspended': return 'text-red-600 bg-red-50 border-red-200';
      case 'Pending': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Active': return <CheckCircle size={14} />;
      case 'Suspended': return <Lock size={14} />;
      case 'Pending': return <AlertTriangle size={14} />;
      default: return <XCircle size={14} />;
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Never';
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const toggleGroup = (groupId) => {
    setExpandedGroups(prev => ({ ...prev, [groupId]: !prev[groupId] }));
  };



  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      
      {/* ======================================== HEADER ======================================== */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                  Security & Access Control
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                User & Role Management
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Manage user accounts, assign roles, track activity, and control system access.
              </p>
            </div>
          </div>
        </div>
      </div>

   {/* ======================================== STATISTICS CARDS ======================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-100 text-blue-600 rounded-xl group-hover:scale-110 transition-transform">
              <Users size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{data.stats.totalUsers}</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Total Users</p>
              <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-green-100 text-green-600 rounded-xl group-hover:scale-110 transition-transform">
              <CheckCircle size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{data.stats.activeUsers}</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Active Users</p>
              <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-red-100 text-red-600 rounded-xl group-hover:scale-110 transition-transform">
              <Lock size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{data.stats.suspendedUsers}</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Suspended</p>
              <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-yellow-100 text-yellow-600 rounded-xl group-hover:scale-110 transition-transform">
              <AlertTriangle size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{data.stats.pendingUsers}</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Pending</p>
              <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:scale-105 transition-all group">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-purple-100 text-purple-600 rounded-xl group-hover:scale-110 transition-transform">
              <Activity size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{data.stats.recentRoleChanges}</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Role Changes</p>
              <p className="text-[10px] text-slate-400 mt-1">(get in app)</p>
            </div>
          </div>
        </div>
      </div>


  {/* ======================================== Idropdown user management ======================================== */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm animate-fadeIn">
        <div className="flex flex-col md:flex-row gap-4 items-end">
          {selectedAction.key === 'add' && (
            <div className="flex-1 w-full">
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Full Name</label>
              <input
                type="text"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                placeholder="e.g. John Doe"
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
            </div>
          )}
          <div className="flex-1 w-full">
            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email (SSO ID)</label>
            <input
              type="email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              placeholder="user@krimson.edu"
              className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>
          {selectedAction.key === 'add' && (
            <div className="w-full md:w-64">
               <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Role</label>
               <div className="w-full">
                  <select
                      value={newUser.roles[0] || ""} 
                      onChange={(e) => {
                           const roleName = e.target.value;
                           setNewUser({...newUser, roles: [roleName]});
                      }}
                      className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white"
                   >
                     <option value="" disabled>Select Role...</option>
                     {Object.values(ROLE_LABELS).map((role) => (
                       <option key={role} value={role}>{role}</option>
                     ))}
                   </select>
                </div>
            </div>
          )}
            <div className="flex relative">
              {/* MAIN ACTION BUTTON */}
              <button
                onClick={handlePrimaryAction}
                className="bg-blue-600 text-white px-6 py-3.5 rounded-l-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2"
              >
                <selectedAction.icon size={18} />
                {selectedAction.label}
              </button>

              {/* DROPDOWN TOGGLE */}
              <button
                onClick={() => setShowActionMenu(!showActionMenu)}
                className="bg-blue-700 text-white px-4 py-3.5 rounded-r-xl hover:bg-blue-800 transition-all flex items-center"
              >
                <ChevronDown size={18} />
              </button>

              {/* DROPDOWN MENU */}
              {showActionMenu && (
                <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-xl shadow-xl border border-slate-100 z-50 overflow-hidden animate-slideDown">
                  {USER_ACTIONS.map((action) => (
                    <button
                      key={action.key}
                      onClick={() => {
                        setSelectedAction(action);
                        setShowActionMenu(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm font-semibold transition-colors flex items-center gap-2
                        ${
                          selectedAction.key === action.key
                            ? "bg-blue-50 text-blue-600"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                    >
                      <action.icon size={16} />
                      {action.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
        </div>
      </div>


      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md animate-slideDown">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Status</label>
              <select
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="suspended">Suspended</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Department</label>
              <select
                value={filters.department}
                onChange={(e) => setFilters({ ...filters, department: e.target.value })}
                className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              >
                <option value="all">All Departments</option>
                {data.departments.map(dept => (
                  <option key={dept.id} value={dept.name}>{dept.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Search</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                  placeholder="Name or email..."
                  className="w-full border border-slate-200 bg-slate-50 rounded-xl pl-12 pr-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                />
              </div>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => setFilters({ status: 'all', role: 'all', department: 'all', search: '' })}
                className="bg-white border-2 border-slate-200 text-slate-600 px-4 py-3 rounded-xl text-sm font-bold hover:bg-slate-50 hover:text-slate-800 transition-colors w-full"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================== TABS ======================================== */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="flex flex-wrap gap-2 p-4 border-b border-slate-200 bg-slate-50/50">
          {[
            { id: 'users', label: 'User Accounts', icon: Users },
            { id: 'activity', label: 'Activity & Logs', icon: Activity },
            { id: 'groups', label: 'Groups & Departments', icon: Building },
            { id: 'security', label: 'Security & Escalations', icon: ShieldAlert },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                selectedTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* ======================================== USER ACCOUNTS TAB ======================================== */}
        {selectedTab === 'users' && (
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">User</th>
                    <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Roles</th>
                    <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Department</th>
                    <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Last Login</th>
                    <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase tracking-wider">Status</th>

                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredUsers.map(user => (
                    <tr key={user.id} className="hover:bg-blue-50/20 transition-colors group">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold shadow-md">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-bold text-slate-800 text-sm">{user.name}</p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <Mail size={10} />
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-wrap gap-1.5">
                          {user.roles.map((role, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200"
                            >
                              {role}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-sm font-semibold text-slate-700">{user.department}</span>
                        {user.grade && (
                          <p className="text-xs text-slate-500">{user.grade}</p>
                        )}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-col gap-1">
                          <span className="text-xs font-semibold text-slate-700">{formatDate(user.lastLogin)}</span>
                          {user.twoFactorEnabled && (
                            <span className="text-[10px] text-green-600 bg-green-50 px-2 py-0.5 rounded-full w-fit flex items-center gap-1 border border-green-200">
                              <Shield size={10} />
                              2FA
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 w-fit border ${getStatusColor(user.status)}`}>
                          {getStatusIcon(user.status)}
                          {user.status}
                        </span>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredUsers.length === 0 && (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users size={32} className="text-slate-300" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-700">No users found</h3>
                  <p className="text-slate-500 max-w-xs mx-auto mt-1">Try adjusting your filters to see more results.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ======================================== ACTIVITY & LOGS TAB ======================================== */}
        {selectedTab === 'activity' && (
          <div className="p-6 space-y-6">
            {/* Activity Logs */}
            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {data.activityLogs.map(log => (
                  <div key={log.id} className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className={`p-2.5 rounded-xl ${
                      log.status === 'Success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    }`}>
                      {log.category === 'Authentication' && <Key size={18} />}
                      {log.category === 'Role Management' && <Shield size={18} />}
                      {log.category === 'Account Management' && <UserCheck size={18} />}
                      {log.category === 'Security' && <ShieldAlert size={18} />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <div>
                          <p className="font-bold text-slate-800 text-sm">{log.action}</p>
                          <p className="text-xs text-slate-600 mt-0.5">{log.description}</p>
                        </div>
                        <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 border ${
                          log.status === 'Success' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'
                        }`}>
                          {log.status === 'Success' ? <CheckCircle size={10} /> : <XCircle size={10} />}
                          {log.status}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-2">
                        <span className="flex items-center gap-1">
                          <Users size={12} />
                          {log.userName}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {formatDate(log.timestamp)}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {log.ipAddress}
                        </span>
                        {log.changedBy && (
                          <span className="text-blue-600 font-semibold">
                            by {log.changedBy}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Login History */}
            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-4">Login History</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase">User</th>
                      <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase">Login Time</th>
                      <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase">Duration</th>
                      <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase">Device</th>
                      <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase">Location</th>
                      <th className="px-4 py-3 text-left text-xs font-extrabold text-slate-500 uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {data.loginHistory.map(login => (
                      <tr key={login.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3">
                          <span className="font-semibold text-slate-800 text-sm">{login.userName}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-xs text-slate-600">{formatDate(login.loginTime)}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-xs font-semibold text-slate-700">{login.duration}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-xs text-slate-600 flex items-center gap-1">
                            <Monitor size={12} />
                            {login.device}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-xs text-slate-600">{login.location}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${
                            login.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-slate-100 text-slate-600'
                          }`}>
                            {login.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ======================================== GROUPS & DEPARTMENTS TAB ======================================== */}
        {selectedTab === 'groups' && (
          <div className="p-6 space-y-6">
            {/* Departments */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-800 text-lg">Departments</h3>
                <button className="text-blue-600 text-sm font-bold hover:underline flex flex-col items-end">
                  <div className="flex items-center gap-1">
                    <Plus size={14} />
                    New Department
                  </div>
                  <span className="text-[9px] text-slate-400 font-normal">(get in app)</span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.departments.map(dept => (
                  <div key={dept.id} className="bg-white border-2 border-slate-100 rounded-2xl p-5 hover:border-blue-200 hover:shadow-md transition-all group">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center text-white shadow-md`}>
                          <Building size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800">{dept.name}</h4>
                          <p className="text-xs text-slate-500">{dept.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-slate-600">
                          <span className="font-bold text-slate-800">{dept.memberCount}</span> members
                        </span>
                        <span className="text-slate-500 text-xs">
                          Head: <span className="font-semibold text-slate-700">{dept.head}</span>
                        </span>
                      </div>
                      <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                        <Edit size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grade Groups */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-800 text-lg">Grade Groups</h3>
              </div>
              <div className="space-y-3">
                {data.gradeGroups.map(group => (
                  <div key={group.id} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 hover:border-blue-200 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-md">
                          {group.memberCount}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 text-sm">{group.name}</h4>
                          <p className="text-xs text-slate-500">{group.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-500">Coordinator</p>
                        <p className="text-sm font-semibold text-slate-700">{group.coordinator}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Roles Overview */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-800 text-lg">System Roles</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.roles.map(role => (
                  <div key={role.id} className="bg-white border-2 border-slate-100 rounded-2xl p-4 hover:border-blue-200 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center text-white shadow-md`}>
                          <Shield size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 text-sm">{role.name}</h4>
                          <p className="text-xs text-slate-500">{role.description}</p>
                        </div>
                      </div>
                      {role.requiresTwoFactorAuth && (
                        <span className="px-2 py-1 rounded-md bg-green-50 text-green-700 text-[9px] font-bold border border-green-200">
                          2FA Required
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-3 text-xs">
                        <span className="text-slate-600">
                          <span className="font-bold text-slate-800">{role.memberCount}</span> users
                        </span>
                        <span className="text-slate-600">
                          <span className="font-bold text-slate-800">{role.permissions}</span> perms
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======================================== SECURITY & ESCALATIONS TAB ======================================== */}
        {selectedTab === 'security' && (
          <div className="p-6 space-y-6">
            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-4">Role Escalation Requests (Two-Level Verification)</h3>
              <p className="text-sm text-slate-600 mb-6">
                Role escalations to Admin or Super Admin require approval from two authorized approvers.
              </p>
              <div className="space-y-4">
                {data.securityEscalations.map(esc => (
                  <div key={esc.id} className={`border-2 rounded-2xl p-5 ${
                    esc.status === 'Pending' ? 'bg-yellow-50 border-yellow-200' :
                    esc.status === 'Approved' ? 'bg-green-50 border-green-200' :
                    'bg-red-50 border-red-200'
                  }`}>
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-bold text-slate-800">{esc.requestedBy}</h4>
                          <span className="text-slate-500 text-sm">→</span>
                          <span className="px-2.5 py-1 rounded-lg bg-white text-blue-700 text-xs font-bold border border-blue-200">
                            {esc.requestedRole}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mb-1">
                          Current Role: <span className="font-semibold">{esc.currentRole}</span>
                        </p>
                        <p className="text-xs text-slate-600">
                          Reason: <span className="italic">{esc.reason}</span>
                        </p>
                      </div>
                      <span className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${
                        esc.status === 'Pending' ? 'bg-yellow-100 text-yellow-700 border-yellow-300' :
                        esc.status === 'Approved' ? 'bg-green-100 text-green-700 border-green-300' :
                        'bg-red-100 text-red-700 border-red-300'
                      }`}>
                        {esc.status}
                      </span>
                    </div>

                    {/* Two-Level Approval Progress */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className={`p-4 rounded-xl border-2 ${
                        esc.approver1.approved ? 'bg-green-100 border-green-300' : 'bg-white border-slate-200'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs font-bold text-slate-500 uppercase mb-1">Approver 1</p>
                            <p className="font-bold text-slate-800">{esc.approver1.name}</p>
                            {esc.approver1.approved && (
                              <p className="text-xs text-green-700 mt-1">
                                Approved on {formatDate(esc.approver1.approvedDate)}
                              </p>
                            )}
                          </div>
                          {esc.approver1.approved ? (
                            <CheckCircle className="text-green-600" size={24} />
                          ) : (
                            <Clock className="text-slate-400" size={24} />
                          )}
                        </div>
                      </div>

                      <div className={`p-4 rounded-xl border-2 ${
                        esc.approver2.approved ? 'bg-green-100 border-green-300' : 'bg-white border-slate-200'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs font-bold text-slate-500 uppercase mb-1">Approver 2</p>
                            <p className="font-bold text-slate-800">{esc.approver2.name}</p>
                            {esc.approver2.approved && (
                              <p className="text-xs text-green-700 mt-1">
                                Approved on {formatDate(esc.approver2.approvedDate)}
                              </p>
                            )}
                          </div>
                          {esc.approver2.approved ? (
                            <CheckCircle className="text-green-600" size={24} />
                          ) : (
                            <Clock className="text-slate-400" size={24} />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4 text-xs text-slate-500">
                      <Calendar size={12} />
                      Requested on {formatDate(esc.requestDate)}
                      {esc.completedDate && (
                        <>
                          <span className="mx-1">•</span>
                          <span>Completed on {formatDate(esc.completedDate)}</span>
                        </>
                      )}
                    </div>

                    {esc.status === 'Pending' && (
                      <div className="flex gap-2 mt-4">
                        <button className="bg-green-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-green-700 transition-colors flex flex-col items-center gap-0.5">
                          <span>Approve Request</span>
                          <span className="text-[9px] text-white/70 font-normal">(get in app)</span>
                        </button>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-red-700 transition-colors flex flex-col items-center gap-0.5">
                          <span>Reject Request</span>
                          <span className="text-[9px] text-white/70 font-normal">(get in app)</span>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>



      {/* ======================================== ADD USER MODAL ======================================== */}
      {showAddUserModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-scaleUp">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-8 py-6 flex justify-between items-start">
              <div>
                <h3 className="font-bold text-2xl">Add New User</h3>
                <p className="text-sm text-white/90 mt-1">Create a new user account</p>
              </div>
              <button
                onClick={() => {
                  setShowAddUserModal(false);
                  setNewUser({ name: '', email: '', phone: '', department: 'Academic', grade: '', roles: [], status: 'Active' });
                }}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    placeholder="e.g. Dr. John Smith"
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email *</label>
                    <input
                      type="email"
                      value={newUser.email}
                      onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                      placeholder="john.smith@school.edu"
                      className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      value={newUser.phone}
                      onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Department *</label>
                    <select
                      value={newUser.department}
                      onChange={(e) => setNewUser({ ...newUser, department: e.target.value })}
                      className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                    >
                      {data.departments.map(dept => (
                        <option key={dept.id} value={dept.name}>{dept.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Grade (Optional)</label>
                    <input
                      type="text"
                      value={newUser.grade}
                      onChange={(e) => setNewUser({ ...newUser, grade: e.target.value })}
                      placeholder="e.g. Grade 5"
                      className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Assign Roles *</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {data.roles.slice(0, 5).map(role => (
                      <button
                        key={role.id}
                        onClick={() => toggleRole(role.name, true, newUser, setNewUser)}
                        className={`p-3 rounded-xl text-sm font-bold border-2 transition-all ${
                          newUser.roles.includes(role.name)
                            ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-500 text-blue-700'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300'
                        }`}
                      >
                        {role.name}
                      </button>
                    ))}
                  </div>
                  {newUser.roles.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {newUser.roles.map((role, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-100 text-blue-700 border border-blue-200 flex items-center gap-2"
                        >
                          {role}
                          <button
                            onClick={() => toggleRole(role, false, newUser, setNewUser)}
                            className="hover:text-red-600"
                          >
                            <X size={14} />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowAddUserModal(false);
                  setNewUser({ name: '', email: '', phone: '', department: 'Academic', grade: '', roles: [], status: 'Active' });
                }}
                className="px-5 py-2.5 rounded-xl font-bold text-slate-600 hover:bg-slate-200 transition-colors text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleAddUser}
                className="px-5 py-2.5 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm shadow-lg shadow-blue-500/30"
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================== EDIT USER MODAL ======================================== */}
      {showEditUserModal && userToEdit && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-scaleUp">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-8 py-6 flex justify-between items-start">
              <div>
                <h3 className="font-bold text-2xl">Edit User</h3>
                <p className="text-sm text-white/90 mt-1">{userToEdit.name}</p>
              </div>
              <button
                onClick={() => {
                  setShowEditUserModal(false);
                  setUserToEdit(null);
                }}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={userToEdit.name}
                    onChange={(e) => setUserToEdit({ ...userToEdit, name: e.target.value })}
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email *</label>
                    <input
                      type="email"
                      value={userToEdit.email}
                      onChange={(e) => setUserToEdit({ ...userToEdit, email: e.target.value })}
                      className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      value={userToEdit.phone}
                      onChange={(e) => setUserToEdit({ ...userToEdit, phone: e.target.value })}
                      className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Department *</label>
                    <select
                      value={userToEdit.department}
                      onChange={(e) => setUserToEdit({ ...userToEdit, department: e.target.value })}
                      className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                    >
                      {data.departments.map(dept => (
                        <option key={dept.id} value={dept.name}>{dept.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Grade</label>
                    <input
                      type="text"
                      value={userToEdit.grade || ''}
                      onChange={(e) => setUserToEdit({ ...userToEdit, grade: e.target.value })}
                      className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Current Roles</label>
                  <div className="flex flex-wrap gap-2">
                    {userToEdit.roles.map((role, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-100 text-blue-700 border border-blue-200"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setShowEditUserModal(false);
                      setShowAssignRoleModal(true);
                    }}
                    className="mt-3 text-blue-600 text-sm font-bold hover:underline flex items-center gap-1"
                  >
                    <Shield size={14} />
                    Modify Roles
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowEditUserModal(false);
                  setUserToEdit(null);
                }}
                className="px-5 py-2.5 rounded-xl font-bold text-slate-600 hover:bg-slate-200 transition-colors text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleEditUser}
                className="px-5 py-2.5 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm shadow-lg shadow-blue-500/30"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================== ASSIGN ROLE MODAL ======================================== */}
      {showAssignRoleModal && userToEdit && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-scaleUp">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-8 py-6 flex justify-between items-start">
              <div>
                <h3 className="font-bold text-2xl">Assign Roles</h3>
                <p className="text-sm text-white/90 mt-1">{userToEdit.name}</p>
              </div>
              <button
                onClick={() => {
                  setShowAssignRoleModal(false);
                  setUserToEdit(null);
                }}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">Select Roles (Multiple Allowed)</label>
                  <div className="w-full">
                    <select
                        value="" 
                        onChange={(e) => {
                             const roleName = e.target.value;
                             if (!userToEdit.roles.includes(roleName)) {
                                 setUserToEdit({...userToEdit, roles: [...userToEdit.roles, roleName]});
                             }
                        }}
                        className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white"
                     >
                       <option value="" disabled>Add Role...</option>
                       {data.roles.map(role => (
                         <option key={role.id} value={role.name}>{role.name}</option>
                       ))}
                     </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Selected Roles ({userToEdit.roles.length})</label>
                  {userToEdit.roles.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {userToEdit.roles.map((role, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-2 rounded-lg text-sm font-bold bg-blue-100 text-blue-700 border border-blue-200 flex items-center gap-2"
                        >
                          {role}
                          <button
                            onClick={() => toggleRole(role, false, userToEdit, setUserToEdit)}
                            className="hover:text-red-600"
                          >
                            <X size={16} />
                          </button>
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-slate-500 italic">No roles selected</p>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowAssignRoleModal(false);
                  setUserToEdit(null);
                }}
                className="px-5 py-2.5 rounded-xl font-bold text-slate-600 hover:bg-slate-200 transition-colors text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleAssignRole}
                className="px-5 py-2.5 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm shadow-lg shadow-blue-500/30"
              >
                Assign Roles
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================== SUSPEND USER MODAL ======================================== */}
      {showSuspendModal && userToSuspend && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden animate-scaleUp">
            <div className="bg-gradient-to-r from-red-400 to-orange-400 text-white px-8 py-6 flex justify-between items-start">
              <div>
                <h3 className="font-bold text-2xl">Suspend User</h3>
                <p className="text-sm text-white/90 mt-1">{userToSuspend.name}</p>
              </div>
              <button
                onClick={() => {
                  setShowSuspendModal(false);
                  setUserToSuspend(null);
                  setSuspendReason('');
                }}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8">
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-bold text-red-800 text-sm mb-1">Warning</p>
                    <p className="text-xs text-red-700">
                      Suspending this user will revoke their access to the system immediately. They will not be able to log in until reactivated.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Reason for Suspension *</label>
                <textarea
                  value={suspendReason}
                  onChange={(e) => setSuspendReason(e.target.value)}
                  placeholder="Please provide a detailed reason for suspension..."
                  rows={4}
                  className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all resize-none"
                />
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowSuspendModal(false);
                  setUserToSuspend(null);
                  setSuspendReason('');
                }}
                className="px-5 py-2.5 rounded-xl font-bold text-slate-600 hover:bg-slate-200 transition-colors text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleSuspendUser}
                className="px-5 py-2.5 rounded-xl font-bold bg-red-600 text-white hover:bg-red-700 transition-colors text-sm shadow-lg shadow-red-500/30"
              >
                Suspend User
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================== RESET PASSWORD MODAL ======================================== */}
      {showResetPasswordModal && userToEdit && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden animate-scaleUp">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-8 py-6 flex justify-between items-start">
              <div>
                <h3 className="font-bold text-2xl">Reset Password</h3>
                <p className="text-sm text-white/90 mt-1">{userToEdit.name}</p>
              </div>
              <button
                onClick={() => {
                  setShowResetPasswordModal(false);
                  setUserToEdit(null);
                }}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8">
              <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                 <div className="flex items-start gap-3">
                   <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-0.5" size={20} />
                   <div>
                     <p className="font-bold text-yellow-800 text-sm mb-1">Confirm Reset</p>
                     <p className="text-xs text-yellow-700">
                       A password reset link will be sent to <strong>{userToEdit.email}</strong>. The user will be prompted to create a new password on their next login.
                     </p>
                   </div>
                 </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowResetPasswordModal(false);
                  setUserToEdit(null);
                }}
                className="px-5 py-2.5 rounded-xl font-bold text-slate-600 hover:bg-slate-200 transition-colors text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleResetPassword}
                className="px-5 py-2.5 rounded-xl font-bold bg-yellow-500 text-white hover:bg-yellow-600 transition-colors text-sm shadow-lg shadow-yellow-500/30 flex items-center gap-2"
              >
                <Key size={18} />
                Send Reset Link
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================== USER DETAILS MODAL ======================================== */}
      {showUserModal && selectedUser && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-scaleUp">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-8 py-6 flex justify-between items-start">
              <div>
                <h3 className="font-bold text-2xl">{selectedUser.name}</h3>
                <p className="text-sm text-white/90 mt-1 font-medium opacity-90">{selectedUser.email}</p>
              </div>
              <button
                onClick={() => { setShowUserModal(false); setSelectedUser(null); }}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase mb-1">User ID</p>
                  <p className="text-sm font-semibold text-slate-800">{selectedUser.userId}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase mb-1">Phone</p>
                  <p className="text-sm font-semibold text-slate-800">{selectedUser.phone}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase mb-1">Department</p>
                  <p className="text-sm font-semibold text-slate-800">{selectedUser.department}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase mb-1">Status</p>
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 w-fit border ${getStatusColor(selectedUser.status)}`}>
                    {getStatusIcon(selectedUser.status)}
                    {selectedUser.status}
                  </span>
                </div>
                <div className="col-span-2">
                  <p className="text-xs font-bold text-slate-500 uppercase mb-2">Roles</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedUser.roles.map((role, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase mb-1">Account Created</p>
                  <p className="text-sm font-semibold text-slate-800">{selectedUser.accountCreated}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase mb-1">Total Logins</p>
                  <p className="text-sm font-semibold text-slate-800">{selectedUser.totalLogins}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase mb-1">Last Login</p>
                  <p className="text-sm font-semibold text-slate-800">{formatDate(selectedUser.lastLogin)}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase mb-1">Last Login IP</p>
                  <p className="text-sm font-semibold text-slate-800">{selectedUser.lastLoginIp || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase mb-1">Two-Factor Auth</p>
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 w-fit ${
                    selectedUser.twoFactorEnabled ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {selectedUser.twoFactorEnabled ? <CheckCircle size={12} /> : <XCircle size={12} />}
                    {selectedUser.twoFactorEnabled ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase mb-1">SSO Linked</p>
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 w-fit ${
                    selectedUser.ssoLinked ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {selectedUser.ssoLinked ? <CheckCircle size={12} /> : <XCircle size={12} />}
                    {selectedUser.ssoLinked ? 'Linked' : 'Not Linked'}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
              <button onClick={() => setShowUserModal(false)} className="px-5 py-2.5 rounded-xl font-bold text-slate-600 hover:bg-slate-200 transition-colors text-sm">Close</button>
              <button className="px-5 py-2.5 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm shadow-lg shadow-blue-500/30 flex flex-col items-center gap-0.5">
                <span>Edit User</span>
                <span className="text-[10px] text-white/70 font-normal">(get in app)</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
