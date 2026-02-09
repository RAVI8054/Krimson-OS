import React from "react";
import { X, CheckSquare, Edit, Send } from "lucide-react";
import { getStatusColor, getTypeColor } from "./utils.jsx";

const TestGradingModal = ({ selectedTest, onClose }) => {
  if (!selectedTest) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-start justify-between mb-6 pb-6 border-b border-slate-200">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`px-3 py-1 rounded-lg text-xs font-bold uppercase ${getTypeColor(selectedTest.type)}`}
              >
                {selectedTest.type}
              </span>
              <span
                className={`px-3 py-1 rounded-lg text-xs font-bold border ${getStatusColor(selectedTest.status)}`}
              >
                {selectedTest.status}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              {selectedTest.title}
            </h2>
            <p className="text-slate-600">{selectedTest.class}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Grading Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Auto-Scoring Progress */}
          <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <CheckSquare className="text-blue-500" size={20} />
              Auto-Scoring Status
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">
                  Objective Questions
                </span>
                <span className="font-bold text-slate-800">
                  {selectedTest.questionsObjective}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Auto-Graded</span>
                <span className="font-bold text-green-600">
                  {selectedTest.autoGraded}/{selectedTest.submitted}
                </span>
              </div>
              <div className="w-full h-3 bg-white rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                  style={{
                    width: `${selectedTest.submitted > 0 ? (selectedTest.autoGraded / selectedTest.submitted) * 100 : 0}%`,
                  }}
                ></div>
              </div>
              <p className="text-xs text-slate-500">
                All objective questions automatically scored
              </p>
            </div>
          </div>

          {/* Manual Grading */}
          <div className="p-5 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-100">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Edit className="text-orange-500" size={20} />
              Manual Grading Required
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">
                  Subjective Questions
                </span>
                <span className="font-bold text-slate-800">
                  {selectedTest.questionsSubjective}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Manually Graded</span>
                <span className="font-bold text-orange-600">
                  {selectedTest.manualGraded}/{selectedTest.submitted}
                </span>
              </div>
              <div className="w-full h-3 bg-white rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-400 to-amber-500 rounded-full"
                  style={{
                    width: `${selectedTest.submitted > 0 ? (selectedTest.manualGraded / selectedTest.submitted) * 100 : 0}%`,
                  }}
                ></div>
              </div>
              <p className="text-xs text-slate-500">
                {selectedTest.submitted - selectedTest.manualGraded} submissions
                pending review
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button className="px-6 py-4 bg-gradient-to-r from-orange-50 to-amber-50 text-orange-600 border border-orange-200 rounded-2xl font-bold hover:bg-orange-100 transition-all flex items-center justify-center gap-2 group">
            <div className="p-2 bg-orange-600 text-white rounded-lg shadow-md group-hover:scale-110 transition-transform">
              <Edit size={18} />
            </div>
            <div className="text-left">
              <div>Start Manual Grading</div>
              <div className="text-[10px] opacity-80">get in app</div>
            </div>
          </button>
          <button className="px-6 py-4 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 border border-purple-200 rounded-2xl font-bold hover:bg-purple-100 transition-all flex items-center justify-center gap-2 group">
            <div className="p-2 bg-purple-600 text-white rounded-lg shadow-md group-hover:scale-110 transition-transform">
              <Send size={18} />
            </div>
            <div className="text-left">
              <div>Publish Results</div>
              <div className="text-[10px] opacity-80">get in app</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestGradingModal;
