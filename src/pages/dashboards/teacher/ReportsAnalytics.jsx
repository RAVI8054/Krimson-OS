import React from 'react';
import { BarChart2, TrendingUp, PieChart as PieIcon } from 'lucide-react';

const ReportsAnalytics = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-3xl shadow-sm">
         <h2 className="text-2xl font-bold text-slate-800">Academic Analytics Console</h2>
         <p className="text-slate-500 text-sm">Performance metrics across all classes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {/* Simple Chart Cards */}
         <div className="bg-white p-6 rounded-3xl shadow-sm">
            <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
               <BarChart2 className="text-blue-500" size={20}/> Term Average
            </h3>
            <div className="h-40 flex items-end gap-3 px-2">
               {[65, 78, 82, 75].map((h, i) => (
                  <div key={i} className="flex-1 bg-blue-100 rounded-t-lg relative group">
                     <div className="absolute bottom-0 w-full bg-blue-500 rounded-t-lg transition-all duration-500 group-hover:bg-blue-600" style={{ height: `${h}%` }}></div>
                     <div className="absolute -top-6 w-full text-center text-xs font-bold text-slate-400">{h}%</div>
                  </div>
               ))}
            </div>
            <div className="flex justify-between mt-4 text-xs font-bold text-slate-400">
               <span>Gr 9A</span><span>Gr 9B</span><span>Gr 10C</span><span>Avg</span>
            </div>
         </div>

         <div className="bg-white p-6 rounded-3xl shadow-sm">
            <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
               <TrendingUp className="text-green-500" size={20}/> Assignment Completion
            </h3>
            <div className="h-40 flex items-center justify-center relative">
               <svg viewBox="0 0 36 36" className="w-32 h-32 transform -rotate-90">
                  <path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8" />
                  <path className="text-green-500" strokeDasharray="85, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8" />
               </svg>
               <div className="absolute text-center">
                  <span className="text-2xl font-bold text-slate-800">85%</span>
                  <span className="block text-[10px] text-slate-400 uppercase font-bold">On Time</span>
               </div>
            </div>
         </div>

         <div className="bg-white p-6 rounded-3xl shadow-sm">
            <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
               <PieIcon className="text-purple-500" size={20}/> Performance Mix
            </h3>
            <div className="space-y-4">
               {['High Achievers (>90%)', 'Average (60-89%)', 'Needs Support (<60%)'].map((label, i) => (
                  <div key={i}>
                     <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
                        <span>{label}</span>
                        <span>{i === 0 ? '15%' : i === 1 ? '65%' : '20%'}</span>
                     </div>
                     <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${i===0?'bg-emerald-500':i===1?'bg-blue-500':'bg-red-500'}`} style={{ width: i === 0 ? '15%' : i === 1 ? '65%' : '20%' }}></div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default ReportsAnalytics;
