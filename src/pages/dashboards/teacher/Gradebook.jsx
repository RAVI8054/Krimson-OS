import React from 'react';
import { TEACHER_DATA } from '../../../data/teacherData';
import { Download, TrendingUp, TrendingDown, MoreVertical } from 'lucide-react';

const Gradebook = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm">
         <div>
            <h2 className="text-xl font-bold text-slate-800">Class Performance Gradebook</h2>
            <p className="text-slate-500 text-sm">Consolidated Results • {TEACHER_DATA.user.gradeTaught[0]}</p>
         </div>
         <button className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg hover:bg-slate-900">
            <Download size={16} /> Export PDF
         </button>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm">
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                     <th className="p-4 rounded-tl-xl text-xs font-bold text-slate-500 uppercase">Student</th>
                     <th className="p-4 text-xs font-bold text-slate-500 uppercase">Unit Test 1</th>
                     <th className="p-4 text-xs font-bold text-slate-500 uppercase">Unit Test 2</th>
                     <th className="p-4 text-xs font-bold text-slate-500 uppercase">Project</th>
                     <th className="p-4 text-xs font-bold text-slate-500 uppercase">Participation</th>
                     <th className="p-4 text-xs font-bold text-slate-500 uppercase">Trend</th>
                     <th className="p-4 rounded-tr-xl text-xs font-bold text-slate-500 uppercase text-right">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-50">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                       <td className="p-4 font-bold text-slate-700">Student Name {i}</td>
                       <td className="p-4 text-sm text-slate-600">85%</td>
                       <td className="p-4 text-sm text-slate-600">78%</td>
                       <td className="p-4 text-sm text-slate-600">92%</td>
                       <td className="p-4 text-sm text-slate-600">A</td>
                       <td className="p-4">
                          {i % 2 === 0 ? 
                             <span className="flex items-center gap-1 text-xs text-red-500 font-bold"><TrendingDown size={14}/> -2%</span> : 
                             <span className="flex items-center gap-1 text-xs text-green-500 font-bold"><TrendingUp size={14}/> +5%</span>
                          }
                       </td>
                       <td className="p-4 text-right">
                          <button className="text-slate-400 hover:text-slate-600"><MoreVertical size={16}/></button>
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

export default Gradebook;
