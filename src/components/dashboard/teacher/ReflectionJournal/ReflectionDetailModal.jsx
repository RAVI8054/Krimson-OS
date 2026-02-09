import React from "react";
import { X, Calendar, CheckCircle, Target, Share2, Send } from "lucide-react";

const ReflectionDetailModal = ({
  selectedReflection,
  setSelectedReflection,
}) => {
  if (!selectedReflection) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl p-6 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-start justify-between mb-6 pb-6 border-b border-slate-200">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              {selectedReflection.lessonTopic}
            </h2>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {new Date(selectedReflection.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span>•</span>
              <span>{selectedReflection.class}</span>
            </div>
          </div>
          <button
            onClick={() => setSelectedReflection(null)}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Engagement Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <p className="text-xs text-green-600 font-bold mb-1">
              Student Engagement
            </p>
            <p className="text-2xl font-bold text-green-600">
              {selectedReflection.studentEngagement}%
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
            <p className="text-xs text-blue-600 font-bold mb-1">
              Participation Rate
            </p>
            <p className="text-2xl font-bold text-blue-600">
              {selectedReflection.participationRate}%
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
            <p className="text-xs text-purple-600 font-bold mb-1">
              Questions Asked
            </p>
            <p className="text-2xl font-bold text-purple-600">
              {selectedReflection.questionsAsked}
            </p>
          </div>
        </div>

        {/* Reflection Content */}
        <div className="space-y-6 mb-6">
          <div className="p-5 bg-green-50 rounded-2xl border border-green-200">
            <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
              <CheckCircle className="text-green-600" size={20} />
              What Went Well
            </h3>
            <p className="text-slate-700 leading-relaxed">
              {selectedReflection.whatWentWell}
            </p>
          </div>

          <div className="p-5 bg-orange-50 rounded-2xl border border-orange-200">
            <h3 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
              <Target className="text-orange-600" size={20} />
              Areas for Improvement
            </h3>
            <p className="text-slate-700 leading-relaxed">
              {selectedReflection.areasForImprovement}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button className="px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold hover:from-green-600 hover:to-emerald-600 shadow-md transition-all flex items-center justify-center gap-2">
            <Share2 size={18} />
            <div className="text-left">
              <div>Share with Peers</div>
              <div className="text-[10px] opacity-80">get in app</div>
            </div>
          </button>
          <button className="px-6 py-4 bg-white text-blue-600 border-2 border-blue-200 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
            <Send size={18} />
            <div className="text-left">
              <div>Edit Entry</div>
              <div className="text-[10px] text-blue-400">get in app</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReflectionDetailModal;
