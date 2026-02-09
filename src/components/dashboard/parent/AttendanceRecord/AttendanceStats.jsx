import React from "react";
import { Clock, CheckCircle, XCircle, Users, AlertCircle } from "lucide-react";

const AttendanceStats = ({ data }) => {
  const isLowAttendance = data.percentage < 85;

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Stats Summary */}
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-xl border border-white/60">
        <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Clock className="text-cyan-600" size={20} />
          This Month Summary
        </h2>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl">
            <span className="text-sm font-medium text-slate-600">
              Total School Days
            </span>
            <span className="text-lg font-bold text-slate-800">
              {data.totalDays}
            </span>
          </div>

          <div className="flex items-center justify-between p-3 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
            <span className="text-sm font-medium text-emerald-700 flex items-center gap-2">
              <CheckCircle size={16} />
              Present
            </span>
            <span className="text-lg font-bold text-emerald-700">
              {data.present}
            </span>
          </div>

          <div className="flex items-center justify-between p-3 bg-gradient-to-br from-red-50 to-rose-50 rounded-xl border border-red-200">
            <span className="text-sm font-medium text-red-700 flex items-center gap-2">
              <XCircle size={16} />
              Absent
            </span>
            <span className="text-lg font-bold text-red-700">
              {data.absent}
            </span>
          </div>

          <div className="flex items-center justify-between p-3 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200">
            <span className="text-sm font-medium text-purple-700">
              Holidays
            </span>
            <span className="text-lg font-bold text-purple-700">
              {data.holidays}
            </span>
          </div>
        </div>

        {/* Attendance Percentage */}
        <div className="mt-4 p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-cyan-800">
              Attendance Rate
            </span>
            <span
              className={`text-2xl font-bold ${
                data.percentage >= 85 ? "text-emerald-600" : "text-red-600"
              }`}
            >
              {data.percentage}%
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${
                data.percentage >= 85
                  ? "bg-gradient-to-r from-emerald-500 to-green-500"
                  : "bg-gradient-to-r from-red-500 to-orange-500"
              }`}
              style={{ width: `${data.percentage}%` }}
            ></div>
          </div>
        </div>

        {/* Class Average Comparison */}
        <div className="mt-3 p-3 bg-slate-50 rounded-xl">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-600 flex items-center gap-1">
              <Users size={14} />
              Class Average
            </span>
            <span className="font-bold text-slate-700">
              {data.classAverage}%
            </span>
          </div>
        </div>
      </div>

      {/* Low Attendance Alert */}
      {isLowAttendance && (
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl md:rounded-3xl p-5 border-2 border-red-200 shadow-lg animate-pulse">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertCircle className="text-red-600" size={20} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-red-800 text-sm mb-1">
                Low Attendance Alert!
              </h4>
              <p className="text-red-700 text-xs leading-relaxed">
                Attendance has fallen below 85%. Regular attendance is crucial
                for academic success. Please ensure consistent presence.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendanceStats;
