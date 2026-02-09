import React from "react";

const PerformanceChart = ({ termPerformance }) => {
  if (!termPerformance) return null;

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-slate-100">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-bold text-slate-800">
            Historical Performance
          </h3>
          <p className="text-slate-400 text-sm">
            Term-wise percentage progression
          </p>
        </div>
        <select className="bg-slate-50 border-none text-sm font-semibold text-slate-600 rounded-xl px-4 py-2 cursor-pointer focus:ring-2 focus:ring-blue-100">
          <option>All Subjects</option>
          <option>Mathematics</option>
          <option>Science</option>
        </select>
      </div>

      {/* Custom CSS Chart */}
      <div className="h-64 w-full flex items-end gap-4 md:gap-8 px-2">
        {termPerformance.map((term, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col items-center gap-3 group h-full justify-end"
          >
            <div className="relative w-full max-w-[60px] h-full flex items-end justify-center">
              {/* Background Bar */}
              <div className="absolute bottom-0 w-full h-full bg-slate-50 rounded-t-xl"></div>

              {/* Active Bar */}
              <div
                className="relative w-full bg-gradient-to-t from-blue-400 to-cyan-400 rounded-t-xl transition-all duration-700 group-hover:from-blue-500 group-hover:to-cyan-500 shadow-lg group-hover:shadow-blue-200"
                style={{ height: `${term.percentage}%` }}
              >
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  {term.percentage}%
                </div>
              </div>
            </div>
            <div className="text-center">
              <span className="text-xs font-bold text-slate-700 block">
                {term.term}
              </span>
              <span className="text-[10px] text-slate-400">GPA {term.gpa}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceChart;
