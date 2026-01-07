import React from 'react';
import { UserCheck, Clock, FileText, Zap } from 'lucide-react';

const TeacherPerformance = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between overflow-hidden relative">
        <div className="relative z-10">
            <h1 className="text-2xl font-bold text-slate-800">Teacher Performance Analytics</h1>
            <p className="text-slate-500 mt-1">Evaluate teaching effectiveness and engagement</p>
        </div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-pink-50 to-transparent"></div>
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-2xl flex items-center justify-center text-white shadow-inner">
            <UserCheck size={24} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
         <div className="bg-white p-5 rounded-xl border border-slate-200">
            <div className="flex justify-between items-start mb-2">
               <span className="text-slate-500 text-sm">Lesson Plan Submission</span>
               <FileText className="text-blue-500" size={20} />
            </div>
            <h3 className="text-2xl font-bold">94%</h3>
            <p className="text-xs text-green-500 mt-1">On time this week</p>
         </div>
         <div className="bg-white p-5 rounded-xl border border-slate-200">
            <div className="flex justify-between items-start mb-2">
               <span className="text-slate-500 text-sm">Feedback Turnaround</span>
               <Clock className="text-purple-500" size={20} />
            </div>
            <h3 className="text-2xl font-bold">1.8 Days</h3>
            <p className="text-xs text-slate-400 mt-1">Avg time to grade</p>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         {/* AI Insights */}
         <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
            <h3 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
              <Zap size={18} fill="currentColor" /> AI Insights
            </h3>
            <ul className="space-y-3 text-sm">
               <li className="flex gap-3">
                 <span className="bg-white p-1 rounded shadow-sm text-lg">🌟</span>
                 <div>
                   <p className="font-semibold text-indigo-900">High Engagement Detected</p>
                   <p className="text-indigo-700">Mrs. Davis (Biology) has consistently high student participation scores this month.</p>
                 </div>
               </li>
               <li className="flex gap-3">
                 <span className="bg-white p-1 rounded shadow-sm text-lg">📉</span>
                 <div>
                   <p className="font-semibold text-indigo-900">Support Needed</p>
                   <p className="text-indigo-700">Mr. Clark's class attendance shows a downward trend on Fridays.</p>
                 </div>
               </li>
            </ul>
         </div>

         {/* Radar Chart */}
         <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-center justify-center">
             <h3 className="font-semibold text-slate-700 w-full text-left mb-4">Department Performance Radar</h3>
             <div className="h-48 w-48 rounded-full border-4 border-slate-100 flex items-center justify-center text-xs text-slate-400 text-center">
                [Radar Chart Placeholder] <br/> Teaching vs Engagement
             </div>
         </div>
      </div>
    </div>
  );
};

export default TeacherPerformance;
