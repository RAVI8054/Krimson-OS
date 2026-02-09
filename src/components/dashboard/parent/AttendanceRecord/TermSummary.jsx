import React from "react";
import { Info } from "lucide-react";

const TermSummary = ({ termData }) => {
  return (
    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl md:rounded-3xl p-5 md:p-6 border border-cyan-200 shadow-lg">
      <div className="flex items-start gap-3">
        <Info size={20} className="text-cyan-600 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="text-sm md:text-base font-bold text-cyan-800 mb-2">
            Term-Wise Summary
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <p className="text-xs text-cyan-600 mb-1">Total Days</p>
              <p className="text-xl font-bold text-cyan-800">
                {termData.totalDays}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-cyan-600 mb-1">Present</p>
              <p className="text-xl font-bold text-cyan-800">
                {termData.present}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-cyan-600 mb-1">Percentage</p>
              <p
                className={`text-xl font-bold ${
                  termData.percentage >= 85
                    ? "text-emerald-600"
                    : "text-red-600"
                }`}
              >
                {termData.percentage}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermSummary;
