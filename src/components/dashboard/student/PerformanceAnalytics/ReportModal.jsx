import React from "react";
import { X } from "lucide-react";

const ReportModal = ({ report, onClose }) => {
  if (!report) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-gradient-to-br from-violet-500 to-fuchsia-600 p-6 rounded-t-3xl">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg bg-white/20 text-white backdrop-blur-sm">
                  {report.type}
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-lg bg-white/20 text-white backdrop-blur-sm">
                  {report.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white leading-tight">
                {report.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-xl transition-colors"
            >
              <X className="text-white" size={24} />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Observation */}
          <div>
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">
              Observation
            </h4>
            <p className="text-slate-700 leading-relaxed">
              {report.observation}
            </p>
          </div>

          {/* Tags */}
          <div>
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
              Key Points
            </h4>
            <div className="flex flex-wrap gap-2">
              {report.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-700 px-3 py-1.5 rounded-full border border-violet-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Meta Info */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                Teacher
              </h4>
              <p className="text-slate-800 font-semibold">{report.teacher}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                Date
              </h4>
              <p className="text-slate-800 font-semibold">
                {new Date(report.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Sentiment Badge */}
          <div className="flex items-center justify-center pt-2">
            <div
              className={`px-4 py-2 rounded-full text-sm font-bold ${
                report.sentiment === "positive"
                  ? "bg-green-100 text-green-700"
                  : report.sentiment === "neutral"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-red-100 text-red-700"
              }`}
            >
              {report.sentiment.charAt(0).toUpperCase() +
                report.sentiment.slice(1)}{" "}
              Feedback
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
