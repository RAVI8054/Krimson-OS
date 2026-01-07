import React from 'react';
import { TEACHER_DATA } from '../../../data/teacherData';
import { TrendingUp, AlertOctagon, User } from 'lucide-react';

const StudentInsights = () => {
  const { insights } = TEACHER_DATA;

  return (
    <div className="space-y-8">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
             <div className="relative z-10">
                <p className="text-cyan-100 font-bold uppercase text-xs">Top Performing Class</p>
                <h3 className="text-4xl font-extrabold mt-2">{insights.topPerformer}</h3>
                <p className="mt-2 text-sm flex items-center gap-2"><TrendingUp size={16}/> Consistent Improvement</p>
             </div>
             <User className="absolute right-4 bottom-4 text-white opacity-20 w-32 h-32" />
         </div>
         <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex items-center justify-between">
             <div>
                <p className="text-slate-400 font-bold uppercase text-xs">Overall Attendance Trend</p>
                <h3 className="text-4xl font-extrabold text-slate-800 mt-2">{insights.attendanceTrend}</h3>
                <p className="text-cyan-500 font-bold text-sm mt-1">vs Last Month</p>
             </div>
             <div className="h-20 w-32 bg-slate-50 rounded-xl"></div> {/* Mini chart placeholder */}
         </div>
      </div>

      {/* At Risk List */}
      <div className="bg-white rounded-3xl p-8 shadow-sm">
         <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
            <AlertOctagon className="text-pink-500" /> Students Needing Attention
         </h3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.riskStudents.map((stu, i) => (
              <div key={i} className="border border-pink-100 bg-pink-50/30 rounded-2xl p-6 relative group hover:shadow-md transition-shadow">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-pink-500 font-bold shadow-sm text-lg">
                       {stu.name.charAt(0)}
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-800">{stu.name}</h4>
                       <p className="text-xs text-pink-500 font-bold uppercase tracking-wider">High Risk</p>
                    </div>
                 </div>
                 <p className="text-sm text-slate-600 mb-4">Flagged for: <span className="font-bold">{stu.issue}</span></p>
                 <button className="w-full py-2 bg-white border border-pink-200 text-pink-600 rounded-xl text-xs font-bold hover:bg-pink-50 transition-colors">
                    Send to Counselor
                 </button>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default StudentInsights;
