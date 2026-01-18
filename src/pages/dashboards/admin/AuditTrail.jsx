/**
 * @component AuditTrail
 * @description Comprehensive system log and security audit trail
 */
import React from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { 
  Shield, 
  Search, 
  Download, 
  Filter, 
  Clock, 
  User, 
  FileText,
  Activity,
  CheckCircle,
  AlertOctagon
} from 'lucide-react';

const AuditTrail = () => {
  const { auditLogs } = ADMIN_DATA;

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      
      {/* ========================================
          HEADER SECTION WITH GRADIENT THEME
          ======================================== */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        
        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                  Security & Compliance
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                   <Activity size={12} className="text-green-400" />
                   System Active
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                System Audit Log
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Immutable record of all system activities, user actions, and security events.
              </p>
            </div>
            
            <button className="flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl font-bold border border-white/20 transition-all shadow-lg">
               <Download size={20} />
               <span>Export Log</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================
          FILTERS & ACTIONS
          ======================================== */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
         <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
               type="text" 
               placeholder="Search by user, action ID, or IP..." 
               className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-100 text-slate-700 font-medium placeholder:text-slate-400"
            />
         </div>
         
         <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 rounded-xl text-slate-600 font-bold text-sm">
               <Filter size={18} />
               <select className="bg-transparent border-none focus:ring-0 p-0 text-slate-700 font-bold cursor-pointer">
                  <option>All Actions</option>
                  <option>Create</option>
                  <option>Update</option>
                  <option>Delete</option>
                  <option>Login</option>
               </select>
            </div>
            <button className="px-4 py-3 bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold rounded-xl transition-colors">
               <Clock size={18} />
            </button>
         </div>
      </div>

      {/* ========================================
          AUDIT LOG TABLE
          ======================================== */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Log ID</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">User / Actor</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Action Details</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Timestamp</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">IP Source</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider text-right">Status</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                  {auditLogs.map((log) => (
                     <tr key={log.id} className="hover:bg-blue-50/30 transition-colors group">
                        <td className="p-5">
                           <span className="font-mono text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-md group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                              LOG-{log.id}
                           </span>
                        </td>
                        <td className="p-5">
                           <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                                 <User size={14} />
                              </div>
                              <span className="font-bold text-slate-700">{log.user}</span>
                           </div>
                        </td>
                        <td className="p-5">
                           <div className="flex items-center gap-2">
                              <span className={`p-1.5 rounded-lg ${
                                 log.action.includes('Delete') ? 'bg-red-50 text-red-500' :
                                 log.action.includes('Create') ? 'bg-green-50 text-green-500' :
                                 'bg-blue-50 text-blue-500'
                              }`}>
                                 <Activity size={14} />
                              </span>
                              <span className="text-sm font-medium text-slate-600">{log.action}</span>
                           </div>
                        </td>
                        <td className="p-5">
                           <div className="flex items-center gap-2 text-sm text-slate-500">
                              <Clock size={14} />
                              {log.time}
                           </div>
                        </td>
                        <td className="p-5">
                           <span className="font-mono text-xs text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                              192.168.1.10{log.id}
                           </span>
                        </td>
                        <td className="p-5 text-right">
                           <span className="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-lg text-xs font-bold inline-flex items-center gap-1">
                              <CheckCircle size={12} /> Success
                           </span>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         
         {/* Table Footer */}
         <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-between items-center text-xs text-slate-500 font-medium">
             <span>Showing recent 50 logs</span>
             <span>System Integrity: <span className="text-green-600 font-bold">100% OK</span></span>
         </div>
      </div>
    </div>
  );
};

export default AuditTrail;
