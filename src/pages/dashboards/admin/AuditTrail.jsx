import React from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { Shield, Search, Download } from 'lucide-react';

const AuditTrail = () => {
  const { auditLogs } = ADMIN_DATA;

  return (
    <div className="space-y-8">
      <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl flex justify-between items-center">
         <div>
            <h2 className="text-2xl font-bold flex items-center gap-3"><Shield size={24} className="text-green-400"/> System Audit Log</h2>
            <p className="text-slate-400 text-sm mt-1">Immutable record of all system activities.</p>
         </div>
         <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
            <Download size={16}/> Export Log
         </button>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
         <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex gap-4">
            <div className="relative flex-1">
               <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
               <input type="text" placeholder="Search by user, action, or ID..." className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm outline-none"/>
            </div>
            <select className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none">
               <option>All Actions</option>
               <option>Create</option>
               <option>Delete</option>
               <option>Update</option>
            </select>
         </div>
         <table className="w-full text-left">
            <thead className="bg-slate-50">
               <tr>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Log ID</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">User</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Action</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Timestamp</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">IP Address</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 font-mono text-sm">
               {auditLogs.map(log => (
                  <tr key={log.id} className="hover:bg-slate-50/50">
                     <td className="p-4 text-slate-400">LOG-{log.id}</td>
                     <td className="p-4 font-bold text-blue-600">{log.user}</td>
                     <td className="p-4 text-slate-700">{log.action}</td>
                     <td className="p-4 text-slate-500">{log.time}</td>
                     <td className="p-4 text-slate-400">192.168.1.10{log.id}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
    </div>
  );
};

export default AuditTrail;
