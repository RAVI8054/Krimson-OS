import React from "react";
import { Target, X } from "lucide-react";

const SyllabusOverlay = ({
  onClose,
  daysPassed,
  totalDays,
  timeElapsedPercent,
  syllabusProgress,
}) => (
  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 md:p-8 border-2 border-blue-200 shadow-lg">
    <div className="flex items-start justify-between mb-6">
      <div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2">
          <Target className="text-blue-500" size={28} />
          Syllabus vs Calendar Analysis
        </h3>
        <p className="text-slate-600">
          Track your teaching progress against academic timeline
        </p>
      </div>
      <button
        onClick={onClose}
        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-white rounded-xl transition-colors"
      >
        <X size={24} />
      </button>
    </div>

    {/* Time Elapsed vs Completion */}
    <div className="mb-6 p-6 bg-white rounded-2xl border border-blue-100">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-bold text-slate-800">Academic Year Progress</h4>
        <span className="text-sm text-slate-600">
          {daysPassed} of {totalDays} days
        </span>
      </div>
      <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all"
          style={{ width: `${timeElapsedPercent}%` }}
        ></div>
      </div>
      <p className="text-sm text-slate-600">
        Time Elapsed:{" "}
        <span className="font-bold text-slate-800">{timeElapsedPercent}%</span>
      </p>
    </div>

    {/* Subject-wise Progress */}
    <div className="space-y-4">
      {syllabusProgress.map((subject, idx) => (
        <div
          key={idx}
          className="p-5 bg-white rounded-2xl border border-slate-200 hover:shadow-md transition-all"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h5 className="font-bold text-slate-800 mb-1">
                {subject.subject}
              </h5>
              <p className="text-xs text-slate-500">
                Target: {subject.target}% by now
              </p>
            </div>
            <span
              className={`px-3 py-1 rounded-lg text-xs font-bold ${
                subject.onTrack
                  ? "bg-green-100 text-green-700 border border-green-200"
                  : "bg-red-100 text-red-700 border border-red-200"
              }`}
            >
              {subject.onTrack ? "✓ On Track" : "⚠ Behind"}
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-600">Current Completion</span>
              <span className="font-bold text-slate-800">
                {subject.completion}%
              </span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden relative">
              <div
                className={`h-full rounded-full transition-all ${
                  subject.onTrack
                    ? "bg-gradient-to-r from-green-400 to-emerald-500"
                    : "bg-gradient-to-r from-orange-400 to-red-500"
                }`}
                style={{ width: `${subject.completion}%` }}
              ></div>
              {/* Target marker */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-slate-700"
                style={{ left: `${subject.target}%` }}
                title={`Target: ${subject.target}%`}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-slate-500">
              <span>Gap: {subject.target - subject.completion}%</span>
              <span>vs Time Elapsed: {timeElapsedPercent}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SyllabusOverlay;
