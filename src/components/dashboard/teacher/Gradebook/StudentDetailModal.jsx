import React from "react";
import {
  X,
  BarChart2,
  Activity,
  TrendingUp,
  TrendingDown,
  MessageSquare,
  Edit,
  Send,
  Share2,
} from "lucide-react";

const StudentDetailModal = ({
  selectedStudent,
  setSelectedStudent,
  getGradeColor,
  getParticipationColor,
  getTrendColor,
}) => {
  if (!selectedStudent) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] shadow-2xl flex flex-col">
        {/* Modal Header - Fixed, No Scroll */}
        <div className="flex items-start justify-between gap-4 p-6 md:p-8 pb-6 border-b border-slate-200 flex-shrink-0">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              {selectedStudent.name}
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span>Roll: {selectedStudent.roll}</span>
              <span>•</span>
              <span>ID: {selectedStudent.id}</span>
              <span>•</span>
              <span
                className={`px-2 py-1 rounded-lg font-bold ${selectedStudent.atRisk ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}
              >
                {selectedStudent.atRisk ? "At Risk" : "On Track"}
              </span>
            </div>
          </div>
          <button
            onClick={() => setSelectedStudent(null)}
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
          {/* Performance Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <BarChart2 className="text-blue-500" size={20} />
                Academic Performance
              </h3>
              <div className="space-y-3">
                {Object.entries(selectedStudent.assessments).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm text-slate-600 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-lg font-bold text-sm ${getGradeColor(value)}`}
                      >
                        {value}%
                      </span>
                    </div>
                  ),
                )}
                <div className="pt-3 border-t border-blue-200 flex justify-between items-center">
                  <span className="font-bold text-slate-700">
                    Overall Average
                  </span>
                  <span className="text-lg font-bold text-blue-600">
                    {selectedStudent.avgScore}%
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Activity className="text-purple-500" size={20} />
                Behavioral Analytics
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Participation</span>
                  <span
                    className={`px-3 py-1 rounded-lg font-bold text-sm ${getParticipationColor(selectedStudent.participation)}`}
                  >
                    {selectedStudent.participation}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">
                    Attendance Rate
                  </span>
                  <span className="font-bold text-slate-800">
                    {selectedStudent.attendance}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Behavior Score</span>
                  <span className="font-bold text-slate-800">
                    {selectedStudent.behaviorScore}/100
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">
                    Performance Trend
                  </span>
                  <span
                    className={`font-bold flex items-center gap-1 ${getTrendColor(selectedStudent.trend)}`}
                  >
                    {selectedStudent.trend === "improving" ? (
                      <TrendingUp size={16} />
                    ) : (
                      <TrendingDown size={16} />
                    )}
                    {selectedStudent.trend === "improving" ? "+" : ""}
                    {selectedStudent.trendValue}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Remarks Section */}
          <div className="p-5 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-100 mb-6">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <MessageSquare className="text-orange-500" size={20} />
              Teacher Remarks
            </h3>
            {selectedStudent.remarks.length > 0 ? (
              <div className="space-y-2 mb-4">
                {selectedStudent.remarks.map((remark, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white rounded-xl border border-orange-100"
                  >
                    <p className="text-sm text-slate-700">{remark}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-500 mb-4">
                No remarks added yet
              </p>
            )}
            <button className="w-full px-4 py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-all flex items-center justify-center gap-2">
              <Edit size={18} />
              <div>
                <div>Add Remark for Parent Report</div>
                <div className="text-[10px] opacity-80">get in app</div>
              </div>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 shadow-md transition-all flex flex-col items-center gap-1">
              <Send size={18} />
              <span className="text-sm">Send Report</span>
              <span className="text-[10px] opacity-80">get in app</span>
            </button>
            <button className="px-4 py-3 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex flex-col items-center gap-1">
              <Share2 size={18} />
              <span className="text-sm">Share</span>
              <span className="text-[10px] text-slate-400">get in app</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetailModal;
