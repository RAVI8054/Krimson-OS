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

import UserActionPanel from './UserManagement/UserActionPanel';

const UserManagement = () => {
  const data = ADMIN_DATA.userManagement;
  const [selectedTab, setSelectedTab] = useState('users'); // users, activity, groups, security
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({ status: 'all', role: 'all', department: 'all', search: '' });

  const [expandedGroups, setExpandedGroups] = useState({});

  // CRUD State Management
  const [users, setUsers] = useState(data.users);

  // Filter users based on active filters
  const filteredUsers = users.filter(user => {
    if (filters.status !== 'all' && user.status.toLowerCase() !== filters.status.toLowerCase()) return false;
    if (filters.role !== 'all' && !user.roles.includes(filters.role)) return false;
    if (filters.department !== 'all' && user.department !== filters.department) return false;
    if (filters.search && !user.name.toLowerCase().includes(filters.search.toLowerCase()) 
        && !user.email.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });

  // CRUD Operations Handlers
  const handleAddUser = (newUser) => {
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
    alert('User added successfully!');
  };

  const handleUpdateUser = (updatedUser) => {
    setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
    alert('User updated successfully!');
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


  {/* ======================================== USER ACTION PANEL ======================================== */}
  <UserActionPanel 
    users={users}
    allRoles={data.roles}
    departments={data.departments}
    onAddUser={handleAddUser}
    onUpdateUser={handleUpdateUser}
  />


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
                        <span className="text-sm font-semibold text-slate-600">{user.department}</span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-700">{formatDate(user.lastLogin)}</span>
                          <span className="text-xs text-slate-400 font-medium">IP: {user.lastLoginIp || 'N/A'}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 w-fit ${getStatusColor(user.status)}`}>
                          {getStatusIcon(user.status)}
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination Mockup */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
               <p className="text-xs font-bold text-slate-500 uppercase">Showing {filteredUsers.length} of {data.stats.totalUsers} Users</p>
               <div className="flex gap-2">
                 <button className="p-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50 disabled:opacity-50">
                    <ChevronDown className="rotate-90" size={16} />
                 </button>
                 <button className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50">
                    <ChevronRight size={16} />
                 </button>
               </div>
            </div>
          </div>
        )}
        
        {/* Placeholder Content for Other Tabs */}
        {selectedTab !== 'users' && (
           <div className="p-12 flex flex-col items-center justify-center text-center opacity-60">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                 <Activity className="text-slate-400" size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-700">Section Under Construction</h3>
              <p className="text-sm text-slate-500 max-w-sm mt-2">
                 This module is currently being updated with new features. Check back soon!
              </p>
           </div>
        )}

      </div>

    </div>
  );
};

export default UserManagement;
