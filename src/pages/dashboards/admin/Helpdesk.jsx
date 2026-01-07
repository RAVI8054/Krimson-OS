import React from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { LifeBuoy, Clock, MessageSquare, CheckCircle } from 'lucide-react';

const Helpdesk = () => {
  const { tickets } = ADMIN_DATA;

  return (
    <div className="space-y-8">
      <div className="bg-emerald-600 rounded-3xl p-8 text-white shadow-lg flex justify-between items-center">
         <div>
            <h2 className="text-2xl font-bold flex items-center gap-3"><LifeBuoy /> Internal Helpdesk</h2>
            <p className="text-emerald-100 text-sm mt-1">Manage support requests from Staff, Students, and Parents.</p>
         </div>
         <div className="text-right">
            <h3 className="text-3xl font-extrabold">{tickets.filter(t => t.status === 'Open').length}</h3>
            <p className="text-xs font-bold uppercase opacity-80">Open Tickets</p>
         </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
         <table className="w-full text-left">
            <thead className="bg-slate-50">
               <tr>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Ticket ID</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Subject</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Submitted By</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Priority</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Status</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Action</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
               {tickets.map(t => (
                  <tr key={t.id} className="hover:bg-slate-50/50">
                     <td className="p-4 text-sm font-mono text-slate-400">#{t.id}</td>
                     <td className="p-4 font-bold text-slate-800">{t.subject}</td>
                     <td className="p-4 text-sm text-slate-600">{t.from}</td>
                     <td className="p-4">
                        <span className={`flex items-center gap-1 text-xs font-bold ${t.priority === 'High' ? 'text-red-600' : 'text-orange-600'}`}>
                           <AlertCircle size={12}/> {t.priority}
                        </span>
                     </td>
                     <td className="p-4">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${t.status === 'Open' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>
                           {t.status}
                        </span>
                     </td>
                     <td className="p-4">
                        <button className="text-blue-600 font-bold text-xs hover:underline">Resolve</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
    </div>
  );
};
// Helper
const AlertCircle = ({ size, className }) => <svg className={`${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>;

export default Helpdesk;
