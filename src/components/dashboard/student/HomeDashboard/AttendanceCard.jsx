import React from "react";
import { ExternalLink, TrendingUp } from "lucide-react";

const AttendanceCard = ({ attendance }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-400 opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity"></div>

      <a
        href="#"
        className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-bold text-slate-400 hover:text-blue-600 transition-colors group/link z-10"
      >
        <span>View Details</span>
        <ExternalLink
          size={10}
          className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
        />
      </a>

      <div className="flex items-center gap-4 relative z-10">
        <div className="relative w-24 h-24">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-slate-100"
            />
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="url(#gradient-attendance)"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray="251"
              strokeDashoffset={251 - (251 * parseFloat(attendance)) / 100}
              className="transition-all duration-1000"
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-slate-800">
            {attendance}
          </span>

          {/* SVG Gradient Definition */}
          <svg width="0" height="0">
            <defs>
              <linearGradient
                id="gradient-attendance"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div>
          <h4 className="font-bold text-slate-800 text-lg">Attendance</h4>
          <p className="text-xs text-slate-500 mb-1">Current Month</p>
          <div className="flex items-center gap-1 text-green-600">
            <TrendingUp size={12} />
            <span className="text-xs font-bold">+2% this month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceCard;
