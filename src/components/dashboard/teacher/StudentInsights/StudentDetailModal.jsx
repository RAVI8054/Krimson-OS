import React from "react";
import {
  X,
  BarChart2,
  Heart,
  MessageSquare,
  FileText,
  Lock,
  Send,
  Edit,
} from "lucide-react";
import {
  getTrendColor,
  getTrendIcon,
  getBehaviorColor,
  getBehaviorIcon,
} from "./utils.jsx";

/**
 * StudentDetailModal Component
 * Full-screen modal showing detailed student information
 *
 * @param {Object} props
 * @param {Object} props.student - Student object with all details
 * @param {Function} props.onClose - Callback to close modal
 */
const StudentDetailModal = ({ student, onClose }) => {
  if (!student) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] shadow-2xl flex flex-col">
        {/* Modal Header - Fixed, No Scroll */}
        <div className="flex items-start justify-between gap-4 p-6 md:p-8 pb-6 border-b border-slate-200 flex-shrink-0">
          <div className="flex items-center gap-4 flex-1">
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg flex-shrink-0 ${
                student.atRisk
                  ? "bg-gradient-to-br from-red-500 to-pink-500"
                  : "bg-gradient-to-br from-blue-500 to-cyan-500"
              }`}
            >
              {student.name.charAt(0)}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                {student.name}
              </h2>
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                <span>Roll: {student.roll}</span>
                <span>•</span>
                <span>{student.class}</span>
                <span>•</span>
                <span>ID: {student.id}</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors flex-shrink-0"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Content - Scrollable */}
        <div
          className="overflow-y-auto p-6 md:p-8 pt-6"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#cbd5e1 #f1f5f9" }}
        >
          {/* Profile Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Academic Stats */}
            <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <BarChart2 className="text-blue-500" size={20} />
                Academic Performance
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">
                    Attendance Rate
                  </span>
                  <span
                    className={`font-bold ${student.attendance >= 90 ? "text-green-600" : student.attendance >= 75 ? "text-orange-600" : "text-red-600"}`}
                  >
                    {student.attendance}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Average Grade</span>
                  <span className="font-bold text-slate-800">
                    {student.avgGrade}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Overall Grade</span>
                  <span className="text-lg font-bold text-blue-600">
                    {student.overallGrade}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">
                    Performance Trend
                  </span>
                  <span
                    className={`font-bold flex items-center gap-1 ${getTrendColor(student.trend)}`}
                  >
                    {getTrendIcon(student.trend)}
                    {student.trend === "improving" ? "+" : ""}
                    {student.trendValue}%
                  </span>
                </div>
              </div>
            </div>

            {/* Behavioral Stats */}
            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Heart className="text-purple-500" size={20} />
                Behavioral Score
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Behavior Score</span>
                  <span className="font-bold text-slate-800">
                    {student.behaviorScore}/100
                  </span>
                </div>
                <div className="w-full h-3 bg-white rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${student.behaviorScore >= 85 ? "bg-green-500" : student.behaviorScore >= 70 ? "bg-orange-500" : "bg-red-500"}`}
                    style={{ width: `${student.behaviorScore}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Commendations</span>
                  <span className="font-bold text-green-600">
                    {
                      (student.behaviorLog || []).filter(
                        (log) => log.type === "commendation",
                      ).length
                    }
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Warnings</span>
                  <span className="font-bold text-orange-600">
                    {
                      (student.behaviorLog || []).filter(
                        (log) => log.type === "warning",
                      ).length
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback History */}
          <div className="mb-6 p-5 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <MessageSquare className="text-slate-500" size={20} />
              Feedback History
            </h3>
            <div className="space-y-3">
              {(student.feedbackHistory || []).map((feedback, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white rounded-xl border border-slate-100"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-bold text-slate-800 text-sm">
                        {feedback.subject}
                      </p>
                      <p className="text-xs text-slate-500">
                        {feedback.teacher} •{" "}
                        {new Date(feedback.date).toLocaleDateString()}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-lg text-xs font-bold ${
                        feedback.type === "positive"
                          ? "bg-green-100 text-green-700"
                          : feedback.type === "concern"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {feedback.type}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700">{feedback.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Behavior Log */}
          <div className="mb-6 p-5 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-100">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <FileText className="text-orange-500" size={20} />
              Behavior Log
            </h3>
            <div className="space-y-3">
              {(student.behaviorLog || []).map((log, idx) => (
                <div
                  key={idx}
                  className={`p-4 bg-white rounded-xl border ${log.encrypted ? "border-purple-200" : "border-slate-100"}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-lg text-xs font-bold border ${getBehaviorColor(log.type)} flex items-center gap-1`}
                      >
                        {getBehaviorIcon(log.type)}
                        {log.type.toUpperCase()}
                      </span>
                      {log.encrypted && (
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-lg text-xs font-bold flex items-center gap-1 border border-purple-200">
                          <Lock size={12} />
                          Encrypted
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-slate-500">
                      {new Date(log.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p
                    className={`text-sm mb-2 ${log.encrypted ? "text-purple-800 font-medium" : "text-slate-700"}`}
                  >
                    {log.note}
                  </p>
                  <p className="text-xs text-slate-500">— {log.submittedBy}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="px-6 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-bold hover:from-red-600 hover:to-pink-600 shadow-md transition-all flex items-center justify-center gap-2">
              <Send size={18} />
              <div className="text-left">
                <div>Send to Counselor</div>
                <div className="text-[10px] opacity-80">get in app</div>
              </div>
            </button>
            <button className="px-6 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              <Edit size={18} />
              <div className="text-left">
                <div>Add Note</div>
                <div className="text-[10px] text-slate-400">get in app</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetailModal;
