import React from 'react';
import { SYSTEM_ADMIN_DATA } from '../../../data/systemAdminData';
import { Shield, Lock, Unlock, Key, Settings, LogOut } from 'lucide-react';

const SecurityAccessControl = () => {
  const { security } = SYSTEM_ADMIN_DATA;

  return (
    <div className="space-y-8">
       {/* Security Header */}
       <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 text-white shadow-lg flex justify-between items-center">
         <div>
           <h2 className="text-2xl font-bold flex items-center gap-2"><Shield className="text-green-400"/> Security Status</h2>
           <p className="text-slate-400 text-sm mt-1">MFA: {security.mfaStatus} | Encryption: AES-256 Enabled</p>
         </div>
         <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 backdrop-blur-sm transition-colors">
           <Settings size={16} /> Configure Policy
         </button>
       </div>

       <div className="bg-white rounded-3xl p-8 shadow-sm">
         <h3 className="font-bold text-slate-800 mb-6">Active User Sessions & Permissions</h3>
         
         <table className="w-full text-left">
           <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
             <tr>
               <th className="p-4 rounded-l-xl">User ID</th>
               <th className="p-4">Name</th>
               <th className="p-4">Role</th>
               <th className="p-4">Last Activity</th>
               <th className="p-4">Status</th>
               <th className="p-4 rounded-r-xl text-right">Actions</th>
             </tr>
           </thead>
           <tbody className="divide-y divide-slate-50">
             {security.users.map((user) => (
               <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                 <td className="p-4 font-mono text-xs text-slate-500">{user.id}</td>
                 <td className="p-4 font-bold text-slate-700">{user.name}</td>
                 <td className="p-4 text-sm text-slate-600">{user.role}</td>
                 <td className="p-4 text-xs text-slate-400">{user.lastLogin}</td>
                 <td className="p-4">
                   <span className={`px-2 py-1 rounded text-xs font-bold ${
                     user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                   }`}>
                     {user.status}
                   </span>
                 </td>
                 <td className="p-4 text-right flex justify-end gap-2">
                   {user.status === 'Active' ? (
                     <button className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100" title="Revoke Access">
                       <Lock size={16} />
                     </button>
                   ) : (
                     <button className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100" title="Unlock User">
                       <Unlock size={16} />
                     </button>
                   )}
                   <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100" title="Reset Password">
                     <Key size={16} />
                   </button>
                   <button className="p-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200" title="Force Logout">
                     <LogOut size={16} />
                   </button>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
    </div>
  );
};

export default SecurityAccessControl;
