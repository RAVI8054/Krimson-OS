import React from 'react';
import { LIBRARIAN_DATA } from '../../../data/librarianData';
import { BarChart3, TrendingUp, Download, PieChart } from 'lucide-react';

const LibraryReports = () => {
  const { analytics } = LIBRARIAN_DATA;

  return (
    <div className="space-y-8">
      {/* Header with Export */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-800">Resource Usage Analytics</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:text-blue-600 hover:border-blue-200">
          <Download size={16} /> Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Top Borrowed Books */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
           <h3 className="font-bold text-slate-700 mb-6 flex items-center gap-2">
             <BarChart3 size={20} className="text-blue-500" /> Top Borrowed Titles
           </h3>
           <div className="space-y-6">
             {analytics.map((item, i) => (
               <div key={i}>
                 <div className="flex justify-between mb-2 text-sm">
                   <span className="font-semibold text-slate-700">{item.title}</span>
                   <span className="font-bold text-slate-800">{item.borrows} issues</span>
                 </div>
                 <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                   <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-full rounded-full" style={{ width: `${(item.borrows / 150) * 100}%` }}></div>
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* Overdue Trends & Reading Index */}
        <div className="space-y-8">
           <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                <TrendingUp size={20} className="text-red-500" /> Overdue Trends
              </h3>
              <div className="flex items-end justify-between h-32 gap-4">
                 {[10, 25, 15, 45, 30, 20].map((val, i) => (
                   <div key={i} className="flex-1 bg-red-50 rounded-t-xl relative group">
                     <div className="absolute bottom-0 w-full bg-red-400 rounded-t-xl transition-all duration-500" style={{ height: `${val}%` }}></div>
                     <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-400">M{i+1}</span>
                   </div>
                 ))}
              </div>
              <p className="text-center text-xs text-slate-400 mt-8">Month-wise overdue comparison</p>
           </div>

           <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl p-8 text-white shadow-lg">
             <div className="flex justify-between items-start">
               <div>
                 <p className="font-bold text-emerald-100 uppercase text-xs">Reading Frequency Index</p>
                 <h2 className="text-4xl font-extrabold mt-2">High</h2>
                 <p className="text-sm mt-1 opacity-90">Avg. 3.5 books / student / month</p>
               </div>
               <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                 <PieChart size={24} />
               </div>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default LibraryReports;
