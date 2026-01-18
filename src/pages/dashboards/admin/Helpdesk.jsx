/**
 * @component Helpdesk
 * @description Internal support ticket management system
 */
import React from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { 
  LifeBuoy, 
  Clock, 
  MessageSquare, 
  CheckCircle, 
  AlertCircle,
  Search,
  Filter,
  MoreVertical,
  User
} from 'lucide-react';

const Helpdesk = () => {
  const { tickets } = ADMIN_DATA;

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      
      {/* ========================================
          HEADER SECTION WITH GRADIENT THEME
          ======================================== */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                  Support & Operations
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                   <LifeBuoy size={12} className="text-yellow-300" />
                   24/7 Active
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Internal Helpdesk
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Streamline support requests from Staff, Students, and Parents.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-xl flex items-center gap-4">
               <div>
                  <h3 className="text-4xl font-extrabold text-white text-center drop-shadow-md">
                     {tickets.filter(t => t.status === 'Open').length}
                  </h3>
                  <p className="text-xs font-bold uppercase text-white/80 tracking-wide text-center">Open Tickets</p>
               </div>
               <div className="w-px h-10 bg-white/20"></div>
               <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-xs font-medium text-white/90">
                     <span className="w-2 h-2 rounded-full bg-red-400"></span> 2 High Priority
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-white/90">
                     <span className="w-2 h-2 rounded-full bg-blue-300"></span> 5 Standard
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          TOOLBAR
          ======================================== */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
         <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
               type="text" 
               placeholder="Search ticket, subject, or ID..." 
               className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-100 text-slate-700 font-medium placeholder:text-slate-400"
            />
         </div>
         <div className="flex gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold rounded-xl transition-colors text-sm">
               <Filter size={18} />
               <span>Filter Status</span>
            </button>
         </div>
      </div>

      {/* ========================================
          TICKETS TABLE
          ======================================== */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Ticket Details</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Submitted By</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Priority</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Status</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                  {tickets.map(t => (
                     <tr key={t.id} className="hover:bg-blue-50/20 transition-colors group">
                        <td className="p-5">
                           <div className="flex flex-col">
                              <span className="font-bold text-slate-800 text-base">{t.subject}</span>
                              <span className="text-xs font-mono text-slate-400 mt-1 bg-slate-50 w-fit px-1.5 py-0.5 rounded border border-slate-100">
                                 #{t.id}
                              </span>
                           </div>
                        </td>
                        <td className="p-5">
                           <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                 <User size={14} />
                              </div>
                              <div>
                                 <p className="text-sm font-bold text-slate-700">{t.from}</p>
                                 <p className="text-xs text-slate-400">Student</p>
                              </div>
                           </div>
                        </td>
                        <td className="p-5">
                           <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border ${
                              t.priority === 'High' ? 'bg-red-50 text-red-600 border-red-100' : 
                              'bg-orange-50 text-orange-600 border-orange-100'
                           }`}>
                              <AlertCircle size={14} /> {t.priority}
                           </span>
                        </td>
                        <td className="p-5">
                           <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border ${
                              t.status === 'Open' ? 'bg-blue-50 text-blue-600 border-blue-100' : 
                              'bg-green-50 text-green-600 border-green-100'
                           }`}>
                              {t.status === 'Open' ? <Clock size={14}/> : <CheckCircle size={14}/>}
                              {t.status}
                           </span>
                        </td>
                        <td className="p-5 text-right">
                           <div className="flex items-center justify-end gap-2 text-sm">
                              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-md shadow-blue-500/20">
                                 Resolve
                              </button>
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );
};

export default Helpdesk;
