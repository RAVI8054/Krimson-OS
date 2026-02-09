import React from "react";
import { TrendingUp } from "lucide-react";

const AcademicGrowthCard = ({ academicGrowth }) => {
  if (!academicGrowth) return null;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 flex flex-col justify-between overflow-hidden relative group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="p-1.5 bg-blue-100 text-blue-600 rounded-lg">
            <TrendingUp size={18} />
          </span>
          <h3 className="font-bold text-slate-700">Academic Growth Index</h3>
        </div>
        <div className="flex items-end gap-3 mt-4">
          <span className="text-5xl font-extrabold text-slate-800 tracking-tight">
            {academicGrowth.current}
          </span>
          <div className="flex flex-col mb-1.5">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Current Score
            </span>
            <span
              className={`text-xs font-bold flex items-center gap-0.5 ${academicGrowth.trend === "up" ? "text-green-500" : "text-red-500"}`}
            >
              <TrendingUp
                size={12}
                className={
                  academicGrowth.trend === "down" ? "transform rotate-180" : ""
                }
              />
              {academicGrowth.trend === "up" ? "+" : ""}
              {academicGrowth.percentage}%
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-50 relative z-10">
        <p className="text-xs text-slate-500">
          Top 5% growth rate among peers. Previous term:{" "}
          <span className="font-semibold text-slate-700">
            {academicGrowth.previous}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AcademicGrowthCard;
