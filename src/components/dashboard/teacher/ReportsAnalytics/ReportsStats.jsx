import React from "react";
import { BarChart2, CheckCircle, Target, Users } from "lucide-react";

const ReportsStats = ({ overallStats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-blue-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Avg Term Score
          </p>
          <BarChart2 className="text-blue-400 opacity-60" size={20} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-blue-600">
          {overallStats.avgTermScore}%
        </h3>
        <p className="text-[10px] text-slate-400 mt-1">get in app</p>
      </div>

      <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-green-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Avg Attendance
          </p>
          <CheckCircle className="text-green-400 opacity-60" size={20} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-green-600">
          {overallStats.avgAttendance}%
        </h3>
        <p className="text-[10px] text-slate-400 mt-1">get in app</p>
      </div>

      <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-purple-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Assignment Rate
          </p>
          <Target className="text-purple-400 opacity-60" size={20} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-purple-600">
          {overallStats.avgCompletion}%
        </h3>
        <p className="text-[10px] text-slate-400 mt-1">get in app</p>
      </div>

      <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-orange-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Total Students
          </p>
          <Users className="text-orange-400 opacity-60" size={20} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-orange-600">
          {overallStats.totalStudents}
        </h3>
        <p className="text-[10px] text-slate-400 mt-1">get in app</p>
      </div>
    </div>
  );
};

export default ReportsStats;
