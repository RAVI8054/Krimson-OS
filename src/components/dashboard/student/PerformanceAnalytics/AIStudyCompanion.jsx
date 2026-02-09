import React from "react";
import { Lightbulb } from "lucide-react";

const AIStudyCompanion = ({ tips, focusArea }) => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-3xl p-6 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
            <Lightbulb size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg">AI Study Companion</h3>
            <p className="text-xs opacity-80">
              Personalized insights based on your gaps
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10"
            >
              <div className="flex justify-between items-start mb-1">
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-lg bg-white/20 text-white`}
                >
                  {tip.subject} • {tip.topic}
                </span>
              </div>
              <p className="text-sm font-medium mb-3 leading-relaxed">
                "{tip.tip}"
              </p>
              <button className="w-full py-2 bg-white text-violet-600 font-bold rounded-lg text-xs hover:bg-slate-50 transition-colors shadow-sm">
                {tip.action} →
              </button>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`bg-${focusArea.color}-50 border border-${focusArea.color}-100 p-6 rounded-3xl`}
      >
        <h4 className={`font-bold text-${focusArea.color}-800 mb-2`}>
          Focus Area
        </h4>
        <p className={`text-sm text-${focusArea.color}-700`}>
          {focusArea.message}
        </p>
      </div>
    </div>
  );
};

export default AIStudyCompanion;
