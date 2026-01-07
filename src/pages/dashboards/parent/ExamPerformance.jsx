import React from 'react';
import { BarChart3, TrendingUp, Calendar } from 'lucide-react';

const ExamPerformance = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-12 gap-6">
        {/* Performance Chart Placeholder */}
        <div className="col-span-8 bg-white rounded-3xl p-8 shadow-sm">
           <div className="flex justify-between mb-8">
             <div>
               <h2 className="text-xl font-bold text-slate-800">Term Performance</h2>
               <p className="text-slate-400 text-sm">Comparison across major subjects</p>
             </div>
             <div className="p-2 bg-slate-50 rounded-lg">
               <BarChart3 className="text-slate-400" />
             </div>
           </div>
           
           {/* Simple CSS Bar Chart */}
           <div className="flex items-end gap-8 h-64 w-full px-4 border-b border-slate-100 pb-4">
              {['Math', 'Science', 'English', 'History', 'Comp Sci'].map((sub, i) => {
                const height = [85, 70, 92, 65, 88][i];
                return (
                  <div key={sub} className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="relative w-full bg-slate-100 rounded-t-xl h-full overflow-hidden">
                       <div 
                         className={`absolute bottom-0 w-full rounded-t-xl transition-all duration-500 ${height > 80 ? 'bg-green-400' : height > 70 ? 'bg-blue-400' : 'bg-orange-400'}`} 
                         style={{ height: `${height}%` }}
                       ></div>
                    </div>
                    <span className="text-xs font-bold text-slate-500">{sub}</span>
                    <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">{height}%</span>
                  </div>
                )
              })}
           </div>
        </div>

        {/* Next Exam Card */}
        <div className="col-span-4 space-y-6">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-6 text-white">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Calendar size={20}/> Next Exam</h3>
            <div className="text-center py-6">
               <span className="text-5xl font-extrabold">12</span>
               <span className="block text-xl opacity-80 uppercase tracking-widest mt-1">Days Left</span>
            </div>
            <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm mt-2">
               <p className="font-bold">Science: Physics Unit 2</p>
               <p className="text-xs opacity-80 mt-1">Monday, 24th Jan • 09:00 AM</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">
             <h3 className="font-bold text-slate-700 mb-2">Areas for Improvement</h3>
             <ul className="space-y-3">
               <li className="flex items-center gap-3 text-sm text-slate-600">
                 <span className="w-2 h-2 rounded-full bg-red-400"></span> History (Dates & Events)
               </li>
               <li className="flex items-center gap-3 text-sm text-slate-600">
                 <span className="w-2 h-2 rounded-full bg-orange-400"></span> Science (Lab Reports)
               </li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPerformance;
