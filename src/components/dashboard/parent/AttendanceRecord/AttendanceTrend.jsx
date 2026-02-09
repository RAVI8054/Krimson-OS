import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const AttendanceTrend = ({ data }) => {
  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-xl border border-white/60">
      <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
        <TrendingUp className="text-purple-600" size={20} />
        Attendance Trend
      </h2>

      <div className="space-y-4">
        {data.map((month, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-700">{month.month}</span>
              <div className="flex items-center gap-3">
                <span
                  className={`font-bold ${
                    month.percentage >= 85 ? "text-emerald-600" : "text-red-600"
                  }`}
                >
                  {month.percentage}%
                </span>
                {month.percentage > data[index - 1]?.percentage && index > 0 ? (
                  <TrendingUp size={14} className="text-emerald-600" />
                ) : index > 0 ? (
                  <TrendingDown size={14} className="text-red-600" />
                ) : null}
              </div>
            </div>
            <div className="relative">
              {/* Student bar */}
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    month.percentage >= 85
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                      : "bg-gradient-to-r from-red-500 to-orange-500"
                  }`}
                  style={{ width: `${month.percentage}%` }}
                ></div>
              </div>
              {/* Class average indicator */}
              <div
                className="absolute top-0 h-3 w-0.5 bg-purple-600"
                style={{ left: `${month.classAvg}%` }}
                title={`Class Avg: ${month.classAvg}%`}
              ></div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-500">
              <span>You</span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-purple-600 rounded-sm"></div>
                Class Avg: {month.classAvg}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceTrend;
