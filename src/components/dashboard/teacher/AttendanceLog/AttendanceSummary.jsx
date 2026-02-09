import React from "react";

const AttendanceSummary = ({ showSummary, stats }) => {
  if (!showSummary) return null;

  return (
    <div className="mt-4 p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-blue-100">
      <h3 className="font-bold text-slate-800 mb-3 text-sm">
        Attendance Summary
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="text-center">
          <p className="text-xs text-slate-500 mb-1">Attendance Rate</p>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-600">
            {stats.percentage}%
          </h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-slate-500 mb-1">Present</p>
          <h3 className="text-2xl md:text-3xl font-bold text-green-600">
            {stats.present}
          </h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-slate-500 mb-1">Absent</p>
          <h3 className="text-2xl md:text-3xl font-bold text-orange-600">
            {stats.absent}
          </h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-slate-500 mb-1">Late Arrivals</p>
          <h3 className="text-2xl md:text-3xl font-bold text-orange-600">
            {stats.late}
          </h3>
          <p className="text-[10px] text-slate-400 mt-1">get in app</p>
        </div>
      </div>
    </div>
  );
};

export default AttendanceSummary;
