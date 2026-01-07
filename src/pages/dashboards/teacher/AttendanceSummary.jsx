import React from 'react';
import { TEACHER_DATA } from '../../../data/teacherData';
import { PieChart, Download } from 'lucide-react';

const AttendanceSummary = () => {
  const { attendanceSummary } = TEACHER_DATA;

  return (
    <div className="space-y-8">
       <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm">
         <h2 className="text-xl font-bold text-slate-800">Cumulative Attendance Report</h2>
         <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg hover:bg-green-700">
            <Download size={16} /> Export Excel
         </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="bg-white p-8 rounded-3xl shadow-sm flex flex-col items-center justify-center text-center">
            <div className="w-48 h-48 rounded-full border-[12px] border-green-500 flex items-center justify-center mb-6">
               <span className="text-4xl font-extrabold text-slate-800">{attendanceSummary.monthlyAverage}</span>
            </div>
            <h3 className="font-bold text-slate-700">Monthly Average</h3>
            <p className="text-xs text-slate-400 mt-1">Across all assigned classes</p>
         </div>

         <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
               <PieChart className="text-cyan-500" /> Class Breakdown
            </h3>
            <div className="space-y-6">
               {attendanceSummary.classBreakdown.map((item, i) => (
                  <div key={i}>
                     <div className="flex justify-between text-sm font-bold text-slate-600 mb-2">
                        <span>Grade {item.class}</span>
                        <span>{item.percentage}%</span>
                     </div>
                     <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full" style={{ width: `${item.percentage}%` }}></div>
                     </div>
                     {item.percentage < 93 && <p className="text-[10px] text-pink-500 font-bold mt-1">Below average warning</p>}
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default AttendanceSummary;
