import React from "react";
import { Target } from "lucide-react";

const TermWiseSummary = ({ termData }) => {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-1 flex items-center gap-2">
            <Target className="text-purple-500" size={24} />
            Term-wise Attendance Summary
          </h3>
          <p className="text-sm text-slate-500">
            Academic year overview by term
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {termData.map((term, idx) => (
          <div
            key={idx}
            className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-blue-100 hover:shadow-md transition-all"
          >
            <h4 className="font-bold text-slate-800 mb-4">{term.term}</h4>

            {/* Percentage */}
            <div className="mb-4">
              <div className="flex justify-between text-xs mb-2">
                <span className="text-slate-600">Average Attendance</span>
                <span className="font-bold text-blue-600">
                  {term.percentage}%
                </span>
              </div>
              <div className="w-full h-3 bg-white rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all"
                  style={{ width: `${term.percentage}%` }}
                ></div>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Students</span>
                <span className="font-bold text-slate-800">
                  {term.students}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Total Days</span>
                <span className="font-bold text-slate-800">
                  {term.totalDays}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermWiseSummary;
