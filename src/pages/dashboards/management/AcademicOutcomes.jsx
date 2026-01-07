import React from 'react';
import { MANAGEMENT_DATA } from '../../../data/managementData';
import { BarChart3, TrendingUp, Download } from 'lucide-react';

const AcademicOutcomes = () => {
  const { academic } = MANAGEMENT_DATA;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-800">Academic Performance Analytics</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm text-sm font-bold text-slate-600 hover:text-blue-600">
          <Download size={16} /> Principal's Report
        </button>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Cluster Performance */}
        <div className="col-span-8 bg-white rounded-3xl p-8 shadow-sm">
           <h3 className="font-bold text-slate-700 mb-6">Performance by Subject Cluster</h3>
           <div className="space-y-6">
             {academic.clusters.map((cluster, i) => (
               <div key={i}>
                 <div className="flex justify-between mb-2">
                   <span className="font-bold text-slate-700">{cluster.name}</span>
                   <span className="text-sm font-bold text-blue-600">{cluster.score}% <span className="text-green-500 text-xs ml-1">({cluster.trend})</span></span>
                 </div>
                 <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden">
                   <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-full rounded-full relative" style={{ width: `${cluster.score}%` }}>
                     {/* Gloss effect */}
                     <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20"></div>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* Student Distribution */}
        <div className="col-span-4 bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center">
           <h3 className="font-bold text-slate-700 mb-6 w-full text-left">Student Distribution</h3>
           
           {/* Custom Donut-like Representation */}
           <div className="w-48 h-48 rounded-full border-[16px] border-slate-100 relative flex items-center justify-center">
             <div className="text-center">
               <span className="block text-3xl font-extrabold text-slate-800">1250</span>
               <span className="text-xs text-slate-400 uppercase tracking-widest">Students</span>
             </div>
             {/* Segments simulated via conic gradient would go here, using simple legend for React limitations */}
           </div>
           
           <div className="w-full space-y-3 mt-8">
             <div className="flex justify-between items-center text-sm">
               <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-500"></div> Top 10% (High Achievers)</span>
               <span className="font-bold">{academic.distribution.top}%</span>
             </div>
             <div className="flex justify-between items-center text-sm">
               <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500"></div> Mid 60% (Average)</span>
               <span className="font-bold">{academic.distribution.mid}%</span>
             </div>
             <div className="flex justify-between items-center text-sm">
               <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div> Bottom 20% (Remedial)</span>
               <span className="font-bold">{academic.distribution.bottom}%</span>
             </div>
           </div>
        </div>
      </div>

      {/* Grade Level Trend */}
      <div className="bg-white rounded-3xl p-8 shadow-sm">
         <h3 className="font-bold text-slate-700 mb-6 flex items-center gap-2">
            <TrendingUp size={20} /> Year-on-Year Improvement
         </h3>
         <div className="h-64 flex items-end justify-between gap-4">
            {Object.entries(academic.passRate).map(([grade, rate], i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                 <div className={`w-full rounded-t-2xl transition-all duration-300 relative group-hover:bg-blue-500 ${rate >= 95 ? 'bg-green-400' : 'bg-blue-300'}`} style={{ height: `${rate}%` }}>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {rate}%
                    </span>
                 </div>
                 <span className="text-xs font-bold text-slate-500 uppercase">{grade}</span>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default AcademicOutcomes;
