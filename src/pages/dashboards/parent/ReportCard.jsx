import React from 'react';
import { Download, FileText, Eye } from 'lucide-react';

const ReportCard = () => {
  return (
    <div className="space-y-6">
       <div className="bg-white rounded-3xl p-8 shadow-sm">
         <h1 className="text-2xl font-bold text-slate-800 mb-6">Academic Reports Repository</h1>
         
         <div className="overflow-hidden rounded-2xl border border-slate-100">
           <table className="w-full text-left">
             <thead className="bg-slate-50">
               <tr>
                 <th className="p-4 text-xs font-bold text-slate-500 uppercase">Exam Name</th>
                 <th className="p-4 text-xs font-bold text-slate-500 uppercase">Date</th>
                 <th className="p-4 text-xs font-bold text-slate-500 uppercase">Grade</th>
                 <th className="p-4 text-xs font-bold text-slate-500 uppercase text-right">Actions</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-slate-100">
               {[
                 { name: "Half-Yearly Assessment", date: "Dec 15, 2025", grade: "A" },
                 { name: "Unit Test 2", date: "Oct 10, 2025", grade: "B+" },
                 { name: "Unit Test 1", date: "Aug 22, 2025", grade: "A-" }
               ].map((report, i) => (
                 <tr key={i} className="hover:bg-slate-50/50">
                   <td className="p-4 font-bold text-slate-700">{report.name}</td>
                   <td className="p-4 text-slate-500 text-sm">{report.date}</td>
                   <td className="p-4">
                     <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">{report.grade}</span>
                   </td>
                   <td className="p-4 text-right flex justify-end gap-2">
                     <button className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                       <Eye size={18} />
                     </button>
                     <button className="p-2 text-slate-400 hover:text-green-500 hover:bg-green-50 rounded-lg transition-colors">
                       <Download size={18} />
                     </button>
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

export default ReportCard;
