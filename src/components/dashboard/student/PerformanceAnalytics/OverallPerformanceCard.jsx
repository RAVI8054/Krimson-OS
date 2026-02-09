import React from "react";

const OverallPerformanceCard = ({ grade, percentile, gpa }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm text-center flex flex-col items-center justify-center">
      <div className="relative mb-4">
        <div className="w-24 h-24 rounded-full border-4 border-indigo-100 flex items-center justify-center">
          <div className="text-4xl font-extrabold text-indigo-600">{grade}</div>
        </div>
        <div className="absolute -bottom-2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          {percentile}
        </div>
      </div>
      <p className="text-slate-500 font-bold">Overall Grade</p>
      <p className="text-xs text-slate-400 mt-1">GPA: {gpa}</p>
    </div>
  );
};

export default OverallPerformanceCard;
