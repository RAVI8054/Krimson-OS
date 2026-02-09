import React from "react";
import { Zap, Lightbulb } from "lucide-react";

const getPriorityColor = (priority) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-700 border-red-200";
    case "medium":
      return "bg-yellow-100 text-yellow-700 border-yellow-200";
    case "low":
      return "bg-blue-100 text-blue-700 border-blue-200";
    default:
      return "bg-gray-100 text-gray-700 border-gray-200";
  }
};

const AiInsights = ({ insights }) => {
  return (
    <div className="bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-1">
              AI-Powered Strategic Insights
            </h2>
            <p className="text-sm text-white/80">
              Data-driven recommendations for institutional growth
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className="p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getPriorityColor(insight.priority)}`}
                  >
                    {insight.priority.toUpperCase()} PRIORITY
                  </span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">
                    {insight.category}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-xs text-white/80">Confidence</p>
                  <p className="text-lg font-bold">{insight.confidence}%</p>
                </div>
              </div>

              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                {insight.insight}
              </h3>

              <p className="text-sm text-white/90 mb-3">
                {insight.recommendation}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-white/20">
                <span className="text-sm font-semibold">Expected Impact:</span>
                <span className="text-sm">{insight.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiInsights;
