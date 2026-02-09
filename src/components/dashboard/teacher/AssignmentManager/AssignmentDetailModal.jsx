import React from "react";
import {
  Users,
  Calendar,
  Award,
  X,
  TrendingUp,
  Sparkles,
  Target,
  Shield,
  AlertTriangle,
  FileText,
  Download,
  Share2,
  Upload,
  Copy,
  FileCheck,
  Send,
  Edit,
  Trash2,
  Zap,
  CheckCircle,
} from "lucide-react";

const AssignmentDetailModal = ({ assignment, onClose }) => {
  // Helper functions for styling
  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "from-blue-400 to-cyan-500";
      case "Overdue":
        return "from-red-400 to-pink-500";
      case "Completed":
        return "from-green-400 to-emerald-500";
      default:
        return "from-slate-400 to-slate-500";
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Active":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Overdue":
        return "bg-red-100 text-red-700 border-red-200";
      case "Completed":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) return "Today";
    if (date.toDateString() === tomorrow.toDateString()) return "Tomorrow";
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] shadow-2xl flex flex-col">
        {/* Modal Header - Fixed, No Scroll */}
        <div className="flex items-start justify-between gap-4 p-6 md:p-8 pb-6 border-b border-slate-200 flex-shrink-0">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`px-3 py-1.5 bg-gradient-to-r ${getStatusColor(assignment.status)} text-white rounded-xl font-bold text-sm`}
              >
                {assignment.subject}
              </span>
              <span
                className={`px-3 py-1.5 rounded-xl font-bold text-sm border-2 ${getStatusBadge(assignment.status)}`}
              >
                {assignment.status}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
              {assignment.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <Users size={16} className="text-blue-500" />
                {assignment.class}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-purple-500" />
                Due: {formatDate(assignment.due)} at {assignment.dueTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Award size={16} className="text-orange-500" />
                {assignment.maxMarks} marks
              </span>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Submission Stats */}
              <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <TrendingUp className="text-blue-500" size={20} />
                  Submission Tracking
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">
                      Total Submissions
                    </span>
                    <span className="text-lg font-bold text-slate-800">
                      {assignment.submitted}/{assignment.total}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-white rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${getStatusColor(assignment.status)} transition-all`}
                      style={{
                        width: `${(assignment.submitted / assignment.total) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="text-center p-2 bg-white rounded-lg">
                      <p className="text-xs text-slate-500 mb-1">Graded</p>
                      <p className="text-lg font-bold text-green-600">
                        {assignment.graded}
                      </p>
                    </div>
                    <div className="text-center p-2 bg-white rounded-lg">
                      <p className="text-xs text-slate-500 mb-1">Pending</p>
                      <p className="text-lg font-bold text-orange-600">
                        {assignment.pending}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Analysis */}
              {assignment.aiAnalysis && (
                <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
                  <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Sparkles className="text-purple-500" size={20} />
                    AI Grading Assistant
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white rounded-xl">
                      <span className="text-sm text-slate-600 flex items-center gap-2">
                        <Target size={14} />
                        Avg. Completion
                      </span>
                      <span className="font-bold text-slate-800">
                        {assignment.aiAnalysis.avgCompletion}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-xl">
                      <span className="text-sm text-slate-600 flex items-center gap-2">
                        <Shield size={14} />
                        Plagiarism Detected
                      </span>
                      <span
                        className={`font-bold ${assignment.aiAnalysis.plagiarismDetected > 0 ? "text-red-600" : "text-green-600"}`}
                      >
                        {assignment.aiAnalysis.plagiarismDetected} case
                        {assignment.aiAnalysis.plagiarismDetected !== 1
                          ? "s"
                          : ""}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-xl">
                      <span className="text-sm text-slate-600 flex items-center gap-2">
                        <AlertTriangle size={14} />
                        Low Scores
                      </span>
                      <span className="font-bold text-orange-600">
                        {assignment.aiAnalysis.lowScores} student
                        {assignment.aiAnalysis.lowScores !== 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Attachments */}
              <div className="p-5 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <FileText className="text-slate-500" size={20} />
                  Attachments
                </h3>
                <div className="space-y-2">
                  {assignment.attachments.map((file, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <FileText size={16} className="text-blue-600" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">
                          {file}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Download"
                        >
                          <Download size={16} />
                        </button>
                        <button
                          className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
                          title="Share"
                        >
                          <Share2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                  <button className="w-full mt-3 px-4 py-3 bg-blue-50 text-blue-600 border-2 border-blue-200 rounded-xl font-bold hover:bg-blue-100 transition-all flex items-center justify-center gap-2">
                    <Upload size={18} />
                    <div>
                      <div>Upload New File</div>
                      <div className="text-[10px] opacity-70">get in app</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Template Info */}
              <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Copy className="text-green-500" size={20} />
                  Template Used
                </h3>
                <div className="p-4 bg-white rounded-xl border border-green-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <FileCheck size={20} className="text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">
                        {assignment.template}
                      </p>
                      <p className="text-xs text-slate-500">
                        {assignment.type}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold hover:from-green-600 hover:to-emerald-600 shadow-md transition-all active:scale-95 flex items-center justify-center gap-2">
                  <Send size={20} />
                  <div>
                    <div>Return with Feedback</div>
                    <div className="text-[10px] opacity-80">get in app</div>
                  </div>
                </button>
                <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 shadow-md transition-all active:scale-95 flex items-center justify-center gap-2">
                  <Sparkles size={20} />
                  <div>
                    <div>Run AI Analysis</div>
                    <div className="text-[10px] opacity-80">get in app</div>
                  </div>
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <button className="px-4 py-3 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex flex-col items-center gap-1">
                    <Edit size={18} />
                    <span className="text-xs">Edit</span>
                    <span className="text-[10px] text-slate-400">
                      get in app
                    </span>
                  </button>
                  <button className="px-4 py-3 bg-white text-red-600 border-2 border-red-200 rounded-xl font-bold hover:bg-red-50 transition-all flex flex-col items-center gap-1">
                    <Trash2 size={18} />
                    <span className="text-xs">Delete</span>
                    <span className="text-[10px] text-red-400">get in app</span>
                  </button>
                </div>
              </div>

              {/* Auto-sync Info */}
              <div className="p-5 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-200">
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Zap className="text-orange-500" size={20} />
                  Auto-Sync Status
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      size={16}
                      className="text-green-500 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-slate-700">
                      Grades auto-synced with student report cards
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      size={16}
                      className="text-green-500 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-slate-700">
                      Evaluation engine integrated
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle
                      size={16}
                      className="text-green-500 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-slate-700">
                      Real-time progress tracking enabled
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetailModal;
