import React from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { Download, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const GradesReport = () => {
  const { grades } = STUDENT_DATA;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm">
         <h2 className="text-2xl font-bold text-slate-800">Academic Report Card</h2>
         <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 shadow-lg transition-transform active:scale-95">
            <Download size={18} /> Download PDF
         </button>
      </div>

      <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
         <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-100">
               <tr>
                  <th className="p-6 text-xs font-bold text-slate-500 uppercase">Subject</th>
                  <th className="p-6 text-xs font-bold text-slate-500 uppercase">Term 1</th>
                  <th className="p-6 text-xs font-bold text-slate-500 uppercase">Term 2</th>
                  <th className="p-6 text-xs font-bold text-slate-500 uppercase">Progress</th>
                  <th className="p-6 text-xs font-bold text-slate-500 uppercase">Remarks</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
               {grades.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                     <td className="p-6 font-bold text-slate-700">{item.subject}</td>
                     <td className="p-6 text-sm font-medium text-slate-600">{item.term1}%</td>
                     <td className="p-6">
                        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg font-bold text-sm">
                           {item.term2}%
                        </span>
                     </td>
                     <td className="p-6">
                        {item.trend === 'up' && <span className="flex items-center gap-2 text-green-500 font-bold text-xs"><TrendingUp size={16}/> Improved</span>}
                        {item.trend === 'down' && <span className="flex items-center gap-2 text-red-500 font-bold text-xs"><TrendingDown size={16}/> Declined</span>}
                        {item.trend === 'flat' && <span className="flex items-center gap-2 text-slate-400 font-bold text-xs"><Minus size={16}/> Stable</span>}
                     </td>
                     <td className="p-6 text-sm text-slate-500 italic">"Excellent understanding of concepts."</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6 text-center text-blue-700 text-xs font-bold">
         Note: This is a provisional report. The final signed report card will be distributed on Jan 30th.
      </div>
    </div>
  );
};

export default GradesReport;
