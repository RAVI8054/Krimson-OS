import React, { useState } from "react";
import { MessageSquare, ThumbsUp, Lightbulb } from "lucide-react";

const TeacherFeedback = ({ feedbacks }) => {
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  return (
    <div className="bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl border border-white/60">
      <h3 className="font-bold text-slate-800 text-base md:text-lg mb-4 flex items-center gap-2">
        <MessageSquare size={20} className="text-cyan-500" />
        Teacher Feedback
      </h3>

      <div className="space-y-3">
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
              feedback.type === "positive"
                ? "bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/20"
                : "bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 hover:shadow-lg hover:shadow-amber-500/20"
            }`}
            onClick={() => setSelectedFeedback(feedback)}
          >
            <div className="flex items-start gap-3">
              <div
                className={`p-2 rounded-lg ${
                  feedback.type === "positive"
                    ? "bg-gradient-to-br from-emerald-500 to-teal-600"
                    : "bg-gradient-to-br from-amber-500 to-orange-600"
                }`}
              >
                {feedback.type === "positive" ? (
                  <ThumbsUp size={16} className="text-white" />
                ) : (
                  <Lightbulb size={16} className="text-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-bold text-slate-800 text-sm md:text-base">
                    {feedback.category}
                  </h4>
                  <span className="text-xs text-slate-500">
                    {new Date(feedback.date).toLocaleDateString("en-SG")}
                  </span>
                </div>
                <p className="text-sm md:text-base text-slate-700 line-clamp-3 mb-3 leading-relaxed">
                  {feedback.feedback}
                </p>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs md:text-sm text-slate-500 font-medium">
                    {feedback.teacher} • {feedback.subject}
                  </p>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1.5 rounded-lg hover:shadow-lg hover:scale-105 active:scale-95 transition-all flex-shrink-0">
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-bold">View More</span>
                      <span className="text-[8px] opacity-80">get in app</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-3 flex-wrap">
              {feedback.tags.slice(0, 2).map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] md:text-xs bg-white/60 text-slate-600 px-2 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherFeedback;
