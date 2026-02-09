import React from "react";
import { Download, XCircle, ExternalLink } from "lucide-react";

const AttendanceSummaryCard = ({ attendance, onDownload }) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm text-center flex flex-col justify-between h-fit">
      <div>
        <div className="relative inline-flex items-center justify-center w-32 h-32 rounded-full border-[8px] border-green-500 bg-green-50 mb-4">
          <span className="text-3xl font-extrabold text-green-700">
            {attendance.percentage}%
          </span>

          {attendance.percentage < 90 && (
            <div className="absolute -top-1 -right-1 bg-red-500 text-white p-1 rounded-full border-4 border-white">
              <XCircle size={20} />
            </div>
          )}
        </div>

        <h3 className="font-bold text-slate-800">Overall Attendance</h3>
        <p className="text-xs text-slate-500 mt-2">
          Total Days: {attendance.totalDays} • Present: {attendance.presentDays}
        </p>
      </div>

      <div>
        <button
          onClick={onDownload}
          className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 border border-slate-200 rounded-xl text-slate-600 font-bold text-sm hover:bg-slate-50 transition"
        >
          <Download size={16} />
          Download Certificate
        </button>

        <a
          href="#"
          className="mt-3 flex items-center justify-center gap-1 text-[10px] font-bold text-slate-400 hover:text-blue-600 transition group"
        >
          View detailed report
          <ExternalLink
            size={10}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
          />
        </a>
      </div>
    </div>
  );
};

export default AttendanceSummaryCard;
