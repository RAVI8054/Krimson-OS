import React from "react";
import { Users, AlertTriangle, Activity, Award } from "lucide-react";

/**
 * InsightsStats Component
 * Displays the 4 statistical cards (Total Students, At Risk, Avg Attendance, Avg Grade)
 *
 * @param {Object} props
 * @param {Object} props.stats - Statistics object
 * @param {number} props.stats.total - Total number of students
 * @param {number} props.stats.atRisk - Number of at-risk students
 * @param {string} props.stats.avgAttendance - Average attendance percentage
 * @param {string} props.stats.avgGrade - Average grade percentage
 */
const InsightsStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-blue-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Total Students
          </p>
          <Users className="text-blue-400 opacity-60" size={20} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
          {stats.total}
        </h3>
        <p className="text-[10px] text-slate-400 mt-1">get in app</p>
      </div>

      <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-red-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            At Risk
          </p>
          <AlertTriangle className="text-red-400 opacity-60" size={20} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-red-600">
          {stats.atRisk}
        </h3>
        <p className="text-[10px] text-slate-400 mt-1">get in app</p>
      </div>

      <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-purple-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Avg Attendance
          </p>
          <Activity className="text-purple-400 opacity-60" size={20} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-purple-600">
          {stats.avgAttendance}%
        </h3>
        <p className="text-[10px] text-slate-400 mt-1">get in app</p>
      </div>

      <div className="p-4 md:p-6 rounded-3xl shadow-sm border-2 border-green-200 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Avg Grade
          </p>
          <Award className="text-green-400 opacity-60" size={20} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-green-600">
          {stats.avgGrade}%
        </h3>
        <p className="text-[10px] text-slate-400 mt-1">get in app</p>
      </div>
    </div>
  );
};

export default InsightsStats;
