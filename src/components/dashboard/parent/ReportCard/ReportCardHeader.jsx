import React from "react";
import { FileCheck } from "lucide-react";

const ReportCardHeader = ({ selectedYear, setSelectedYear }) => {
  return (
    <div className="relative rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-6 md:p-8 text-white shadow-2xl overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
            <FileCheck size={32} />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              Academic Reports & Progress
            </h1>
            <p className="text-white/90 text-sm mt-1">
              Access official report cards and track academic growth
            </p>
          </div>
        </div>

        <div className="flex bg-white/10 backdrop-blur-md rounded-xl p-1">
          {["2025-2026", "2024-2025"].map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                selectedYear === year
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-white hover:bg-white/10 font-medium"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportCardHeader;
