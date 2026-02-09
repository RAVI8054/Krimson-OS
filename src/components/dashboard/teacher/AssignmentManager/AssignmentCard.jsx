import React from "react";
import {
  CheckSquare,
  Users,
  Calendar,
  Award,
  CheckCircle,
  Clock,
  Sparkles,
  Paperclip,
  Eye,
  BarChart2,
} from "lucide-react";

const AssignmentCard = ({ assignment, onClick }) => {
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
    <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-transparent hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
      {/* Card Header */}
      <div className="flex justify-between items-start mb-4">
        <div
          className={`p-3 bg-gradient-to-br ${getStatusColor(assignment.status)} text-white rounded-xl shadow-md group-hover:scale-110 transition-transform`}
        >
          <CheckSquare size={24} />
        </div>
        <div
          className={`px-3 py-1 rounded-xl text-xs font-bold border-2 ${getStatusBadge(assignment.status)}`}
        >
          {assignment.status}
        </div>
      </div>

      {/* Assignment Info */}
      <h4 className="font-bold text-slate-800 text-lg mb-2 line-clamp-2">
        {assignment.title}
      </h4>

      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-500 font-medium flex items-center gap-1">
            <Users size={14} />
            {assignment.class}
          </span>
          <span
            className={`px-2 py-0.5 bg-gradient-to-r ${getStatusColor(assignment.status)} text-white rounded-lg text-xs font-bold`}
          >
            {assignment.subject}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-500 font-medium flex items-center gap-1">
            <Calendar size={14} />
            Due: {formatDate(assignment.due)}
          </span>
          <span className="text-slate-600 font-bold">{assignment.dueTime}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-500 font-medium flex items-center gap-1">
            <Award size={14} />
            Max Marks
          </span>
          <span className="text-slate-800 font-bold">
            {assignment.maxMarks}
          </span>
        </div>
      </div>

      {/* Submission Progress */}
      <div className="mb-4">
        <div className="flex justify-between text-xs mb-2 font-semibold text-slate-500">
          <span>Submissions</span>
          <span>
            {assignment.submitted} / {assignment.total}
          </span>
        </div>
        <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${getStatusColor(assignment.status)} rounded-full transition-all`}
            style={{
              width: `${(assignment.submitted / assignment.total) * 100}%`,
            }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-xs">
          <span className="text-green-600 font-bold flex items-center gap-1">
            <CheckCircle size={12} />
            {assignment.graded} Graded
          </span>
          <span className="text-orange-600 font-bold flex items-center gap-1">
            <Clock size={12} />
            {assignment.pending} Pending
          </span>
        </div>
      </div>

      {/* AI Analysis Section */}
      {assignment.aiAnalysis && (
        <div className="mb-4 p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={14} className="text-purple-500" />
            <p className="text-xs font-bold text-purple-700">AI Analysis</p>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <p className="text-slate-500">Avg. Completion</p>
              <p className="font-bold text-slate-800">
                {assignment.aiAnalysis.avgCompletion}%
              </p>
            </div>
            <div>
              <p className="text-slate-500">Plagiarism</p>
              <p
                className={`font-bold ${assignment.aiAnalysis.plagiarismDetected > 0 ? "text-red-600" : "text-green-600"}`}
              >
                {assignment.aiAnalysis.plagiarismDetected} cases
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Attachments */}
      {assignment.attachments && assignment.attachments.length > 0 && (
        <div className="mb-4 flex items-center gap-2 text-xs text-blue-600 font-medium">
          <Paperclip size={12} />
          <span>
            {assignment.attachments.length} attachment
            {assignment.attachments.length > 1 ? "s" : ""}
          </span>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button
          onClick={onClick}
          className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 shadow-md transition-all active:scale-95 text-xs flex flex-col items-center"
        >
          <div className="flex items-center gap-1 mb-1">
            <Eye size={14} />
            <span>View Details</span>
          </div>
          <span className="text-[10px] opacity-80">get in app</span>
        </button>
        <button className="flex-1 px-4 py-3 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 text-xs flex flex-col items-center">
          <div className="flex items-center gap-1 mb-1">
            <BarChart2 size={14} />
            <span>Grade Now</span>
          </div>
          <span className="text-[10px] text-slate-400">get in app</span>
        </button>
      </div>
    </div>
  );
};

export default AssignmentCard;
