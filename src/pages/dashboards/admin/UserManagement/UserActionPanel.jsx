import React, { useState } from 'react';
import { UserPlus, Edit, Key, Lock, ChevronDown, Check } from 'lucide-react';
import { 
  UserSearchStep, 
  AddUserForm, 
  EditUserForm, 
  SuspendUserForm, 
  ResetPasswordForm 
} from './ActionForms';

const USER_ACTIONS = [
  { key: "add", label: "Add User", icon: UserPlus, color: "text-blue-600", bg: "bg-blue-100" },
  { key: "edit", label: "Edit User", icon: Edit, color: "text-indigo-600", bg: "bg-indigo-100" },
  { key: "reset", label: "Reset Password", icon: Key, color: "text-yellow-600", bg: "bg-yellow-100" },
  { key: "suspend", label: "Suspend User", icon: Lock, color: "text-red-600", bg: "bg-red-100" },
];

const UserActionPanel = ({ 
  users, 
  allRoles, 
  departments, 
  onAddUser, 
  onUpdateUser 
}) => {
  const [selectedAction, setSelectedAction] = useState(USER_ACTIONS[0]);
  const [showActionMenu, setShowActionMenu] = useState(false);
  const [foundUser, setFoundUser] = useState(null);

  // Reset state when action changes
  const handleActionChange = (action) => {
    setSelectedAction(action);
    setFoundUser(null);
    setShowActionMenu(false);
  };

  const handleUserFound = (user) => {
    setFoundUser(user);
  };

  const handleCancel = () => {
    if (foundUser) {
      setFoundUser(null);
    } 
  };

  return (
    // REMOVED 'overflow-hidden' from parent to allow dropdown to spill out.
    // Added 'z-20' to ensure it sits above other content (like tables/filters below).
    <div className="relative mb-10 z-20"> 
        
        {/* BACKGROUND & DECORATION WRAPPER - HANDLES CLIPPING */}
        <div className="absolute inset-0 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden z-0">
             {/* Decorative Circle */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
        </div>

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 p-8">
            
            {/* HEADER: TITLE + DROPDOWN */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${selectedAction.bg} flex items-center justify-center shadow-sm`}>
                        <selectedAction.icon className={selectedAction.color} size={28} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                            {selectedAction.label}
                        </h2>
                        <p className="text-sm text-slate-500 font-medium mt-1">
                            {selectedAction.key === 'add' && 'Create a new user account with specific roles.'}
                            {selectedAction.key === 'edit' && 'Search and modify an existing user details.'}
                            {selectedAction.key === 'reset' && 'Send a password reset link to a user.'}
                            {selectedAction.key === 'suspend' && 'Suspend or active user access.'}
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <button
                        onClick={() => setShowActionMenu(!showActionMenu)}
                        className="bg-white border-2 border-slate-100 text-slate-700 px-5 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-slate-50 hover:border-slate-200 transition-all shadow-sm"
                    >
                        Change Action <ChevronDown size={16} className={`transition-transform duration-200 ${showActionMenu ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* DROPDOWN MENU - Z-INDEX BOOSTED */}
                    {showActionMenu && (
                        <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-slideDown z-50">
                            <div className="p-2 space-y-1">
                                {USER_ACTIONS.map((action) => (
                                <button
                                    key={action.key}
                                    onClick={() => handleActionChange(action)}
                                    className={`w-full text-left px-4 py-3 text-sm font-bold rounded-xl transition-all flex items-center gap-3
                                    ${selectedAction.key === action.key 
                                        ? "bg-slate-50 text-blue-700 border border-slate-100" 
                                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent"}`}
                                >
                                    <action.icon size={18} className={selectedAction.key === action.key ? "text-blue-600" : "text-slate-400"} />
                                    {action.label}
                                    {selectedAction.key === action.key && <Check size={16} className="ml-auto text-blue-600" />}
                                </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* BODY: FORM RENDERING LOGIC */}
            <div className="w-full">
                {/* 1. ADD USER */}
                {selectedAction.key === 'add' && (
                    <AddUserForm 
                        onCancel={handleCancel}
                        onSave={onAddUser}
                        allRoles={allRoles}
                        departments={departments}
                    />
                )}

                {/* 2. OTHER ACTIONS - SEARCH FIRST */}
                {selectedAction.key !== 'add' && !foundUser && (
                    <UserSearchStep 
                        users={users} 
                        onUserFound={handleUserFound}
                        actionLabel={selectedAction.label}
                    />
                )}

                {/* 3. EDIT FORM */}
                {selectedAction.key === 'edit' && foundUser && (
                    <EditUserForm 
                        user={foundUser}
                        onCancel={handleCancel}
                        onSave={(updatedData) => {
                            onUpdateUser(updatedData);
                            setFoundUser(null);
                        }}
                        allRoles={allRoles}
                    />
                )}

                {/* 4. SUSPEND FORM */}
                {selectedAction.key === 'suspend' && foundUser && (
                    <SuspendUserForm 
                        user={foundUser}
                        onCancel={handleCancel}
                        onSave={(user, reason) => {
                            const updatedUser = { 
                                ...user, 
                                status: user.status === 'Suspended' ? 'Active' : 'Suspended',
                                suspensionReason: user.status === 'Suspended' ? null : reason 
                            };
                            onUpdateUser(updatedUser);
                            setFoundUser(null);
                        }}
                    />
                )}

                {/* 5. RESET FORM */}
                {selectedAction.key === 'reset' && foundUser && (
                    <ResetPasswordForm 
                        user={foundUser}
                        onCancel={handleCancel}
                        onSave={(user) => {
                            alert(`Password reset link sent to ${user.email}`); 
                            setFoundUser(null);
                        }}
                    />
                )}
            </div>
        </div>
    </div>
  );
};

export default UserActionPanel;
