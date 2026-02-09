import React from "react";
import {
  Star,
  Send,
  AlertCircle,
  Clock,
  CheckCircle,
  BookOpen,
  MessageCircle,
  Building2,
  Trophy,
} from "lucide-react";

const iconMap = {
  BookOpen,
  MessageCircle,
  Building2,
  Trophy,
};

const SurveyForm = ({
  survey,
  onBack,
  responses,
  onRatingClick,
  comments,
  onCommentChange,
  onSubmit,
}) => {
  const SurveyIcon = iconMap[survey.icon] || BookOpen;

  const getStatusBadge = (status, completed) => {
    if (completed) {
      return (
        <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold flex items-center gap-1">
          <CheckCircle size={12} /> Completed
        </span>
      );
    }
    if (status === "active") {
      return (
        <span className="px-2.5 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-bold flex items-center gap-1">
          <Clock size={12} /> Active
        </span>
      );
    }
    return (
      <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-bold flex items-center gap-1">
        <AlertCircle size={12} /> Upcoming
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-pink-50/30 p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-4 text-sm font-bold text-slate-600 hover:text-cyan-600 transition-colors flex items-center gap-2"
        >
          ← Back to Surveys
        </button>

        {/* Survey Header */}
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-white/60 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <div
              className={`p-4 bg-gradient-to-br ${survey.color} rounded-2xl shadow-lg`}
            >
              <SurveyIcon size={32} className="text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
                {survey.title}
              </h1>
              <p className="text-sm text-slate-500 mb-3">
                Your feedback helps us improve. All responses are anonymized and
                shared with management for analysis.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {getStatusBadge(survey.status, survey.completed)}
                <span className="text-xs text-slate-500">
                  Deadline:{" "}
                  {new Date(survey.deadline).toLocaleDateString("en-SG", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-4">
          {survey.questions.map((question, index) => (
            <div
              key={question.id}
              className="bg-white/95 backdrop-blur-xl rounded-2xl p-5 md:p-6 shadow-lg border border-white/60"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold text-slate-800 mb-1">
                    {question.text}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    {question.category}
                  </span>
                </div>
              </div>

              {/* Rating Scale */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-500 font-medium">
                    Very Dissatisfied
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Very Satisfied
                  </span>
                </div>
                <div className="flex gap-2 justify-center">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => onRatingClick(question.id, rating)}
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-xl font-bold text-base md:text-lg transition-all ${
                        responses[question.id] === rating
                          ? `bg-gradient-to-br ${survey.color} text-white shadow-lg scale-110`
                          : "bg-slate-50 text-slate-600 border-2 border-slate-200 hover:border-cyan-400 hover:bg-cyan-50"
                      }`}
                    >
                      {rating}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between mt-2 px-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Star
                      key={rating}
                      size={16}
                      className={`${
                        responses[question.id] >= rating
                          ? "text-amber-400 fill-amber-400"
                          : "text-slate-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Optional Comment */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Additional Comments (Optional)
                </label>
                <textarea
                  value={comments[question.id] || ""}
                  onChange={(e) => onCommentChange(question.id, e.target.value)}
                  placeholder="Share your thoughts or suggestions..."
                  className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all resize-none"
                  rows={3}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="mt-6 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/60">
          <div className="flex items-start gap-3 mb-4 p-3 bg-cyan-50 border border-cyan-200 rounded-xl">
            <AlertCircle
              size={18}
              className="text-cyan-600 flex-shrink-0 mt-0.5"
            />
            <div className="text-xs md:text-sm text-cyan-800">
              <p className="font-bold mb-1">Anonymous Submission</p>
              <p>
                Your responses will be anonymized and aggregated for analysis.
                Individual responses are not shared with specific staff members.
              </p>
            </div>
          </div>
          <button
            onClick={onSubmit}
            disabled={Object.keys(responses).length !== survey.questions.length}
            className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <div className="flex items-center justify-center gap-3">
              <Send size={20} />
              <div className="flex flex-col items-center">
                <span className="text-base">Submit Survey</span>
                <span className="text-xs opacity-80">get in app</span>
              </div>
            </div>
          </button>
          {Object.keys(responses).length !== survey.questions.length && (
            <p className="text-xs text-center text-slate-500 mt-3">
              Please answer all questions before submitting
            </p>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default SurveyForm;
