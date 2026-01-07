import React from 'react';
import { COUNSELOR_DATA } from '../../../data/counselorData';
import { HeartPulse, TrendingDown, BrainCircuit, AlertOctagon } from 'lucide-react';

const WellbeingTrends = () => {
  const { wellbeing } = COUNSELOR_DATA;

  return (
    <div className="space-y-8">
       {/* AI Wellness Score */}
       <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="flex justify-between items-start relative z-10">
             <div>
               <h2 className="text-3xl font-bold flex items-center gap-3">
                 <BrainCircuit className="text-purple-200" /> Wellbeing Index
               </h2>
               <p className="opacity-80 mt-2 max-w-lg">
                 AI-generated score based on attendance patterns, academic stress markers, and reported mood logs.
               </p>
             </div>
             <div className="text-right">
               <span className="text-6xl font-extrabold tracking-tighter">{wellbeing.avgMoodIndex}</span>
               <span className="block text-sm font-bold bg-white/20 px-3 py-1 rounded-full mt-2 text-center">Stable</span>
             </div>
          </div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Correlation Chart (Visual Simulation) */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
             <h3 className="font-bold text-slate-800 mb-6">Attendance vs. Mood Correlation</h3>
             <div className="h-64 flex items-end justify-between gap-4 px-2">
                {wellbeing.attendanceCorrelation.map((day, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                     <div className="w-full relative h-48 flex items-end justify-center">
                        {/* Attendance Bar */}
                        <div className="w-3 bg-blue-200 rounded-t-lg" style={{ height: `${day.attendance}%` }}></div>
                        {/* Mood Line Point (Simulated) */}
                        <div className="absolute w-2 h-2 bg-purple-600 rounded-full border-2 border-white shadow-sm" style={{ bottom: `${day.mood * 10}%` }}></div>
                     </div>
                     <span className="text-xs font-bold text-slate-400">{day.day}</span>
                  </div>
                ))}
             </div>
             <div className="flex justify-center gap-6 mt-6">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500"><div className="w-3 h-3 bg-blue-200 rounded"></div> Attendance</div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500"><div className="w-2 h-2 bg-purple-600 rounded-full"></div> Reported Mood</div>
             </div>
          </div>

          {/* High Risk Alerts */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-red-50">
             <div className="flex justify-between items-center mb-6">
               <h3 className="font-bold text-slate-800 flex items-center gap-2">
                 <AlertOctagon className="text-red-500" /> At-Risk Students
               </h3>
               <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">{wellbeing.highRiskStudents} Detected</span>
             </div>
             
             <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-2xl flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">
                           S{i}
                        </div>
                        <div>
                           <p className="font-bold text-slate-700 text-sm">Student Name {i}</p>
                           <p className="text-xs text-red-500 font-medium">Flag: Sharp Attendance Drop</p>
                        </div>
                     </div>
                     <button className="text-xs font-bold text-slate-500 border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-white hover:text-blue-600">
                        Investigate
                     </button>
                  </div>
                ))}
             </div>
          </div>

       </div>
    </div>
  );
};

export default WellbeingTrends;
