import React from "react";
import {
  Lightbulb,
  CheckCircle,
  ArrowUpRight,
  Target,
  Award,
  TrendingUp,
} from "lucide-react";

const iconMap = {
  Award: Award,
  TrendingUp: TrendingUp,
  Target: Target,
  CheckCircle: CheckCircle,
};

const AISummarySection = ({ parentSummaries }) => {
  if (!parentSummaries) return null;

  return (
    <div className="relative bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30 rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl border border-indigo-100/50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>

      {/* Header Section */}
      <div className="relative z-10 mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3">
          <div className="p-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Lightbulb className="text-white" size={28} />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-1">
              Understanding Your Child's Progress
            </h3>
            <p className="text-sm md:text-base text-slate-600 font-medium">
              AI-powered insights translated into clear, actionable guidance
            </p>
          </div>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded-full"></div>
      </div>

      {/* Insights Grid - Responsive Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6">
        {parentSummaries.map((item, index) => {
          const IconComponent = iconMap[item.icon] || Award;

          return (
            <div
              key={item.id}
              className={`group relative rounded-2xl backdrop-blur-sm bg-white/80 border-2 ${item.color} p-5 md:p-6 
                hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-white/0 to-indigo-50/0 group-hover:to-indigo-50/50 transition-all duration-500 pointer-events-none"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Header Row */}
                <div className="flex items-start gap-3 md:gap-4 mb-4">
                  <div className="p-3 bg-white rounded-xl shadow-md flex-shrink-0 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <IconComponent className={item.iconColor} size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h4 className="font-bold text-slate-800 text-xs md:text-sm uppercase tracking-wider">
                        {item.category}
                      </h4>
                      <ArrowUpRight
                        size={16}
                        className="text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                      />
                    </div>
                    <p className="text-slate-700 font-bold text-sm md:text-base leading-snug">
                      {item.summary}
                    </p>
                  </div>
                </div>

                {/* Details Text */}
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-4 px-1">
                  {item.details}
                </p>

                {/* Highlights Section */}
                <div className="space-y-2 bg-white/60 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-slate-100/50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-0.5 w-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                    <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wide">
                      Key Highlights
                    </span>
                  </div>
                  {item.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 group/item hover:bg-green-50/50 rounded-lg p-1.5 transition-colors"
                    >
                      <CheckCircle
                        size={16}
                        className="text-green-500 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform"
                      />
                      <span className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-indigo-100/40 to-transparent rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          );
        })}
      </div>

      {/* Information Footer */}
      <div className="relative z-10 p-5 md:p-6 rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-2 border-indigo-100 shadow-inner">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white rounded-xl shadow-md flex-shrink-0">
            <Lightbulb className="text-indigo-600" size={22} />
          </div>
          <div className="flex-1">
            <h4 className="text-sm md:text-base font-bold text-indigo-800 mb-2 flex items-center gap-2">
              What This Means for Your Child
              <span className="text-xs font-normal text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full">
                AI Insight
              </span>
            </h4>
            <p className="text-xs md:text-sm text-indigo-700/90 leading-relaxed">
              These summaries translate complex academic metrics into actionable
              insights. They help you understand not just the grades, but what
              they mean for your child's learning journey and where support
              might be most beneficial. Our AI analyzes patterns, trends, and
              contextual factors to provide personalized guidance.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-[10px] md:text-xs bg-white/80 backdrop-blur-sm text-indigo-700 px-3 py-1.5 rounded-full font-semibold border border-indigo-200 shadow-sm">
                📊 Data-Driven
              </span>
              <span className="text-[10px] md:text-xs bg-white/80 backdrop-blur-sm text-purple-700 px-3 py-1.5 rounded-full font-semibold border border-purple-200 shadow-sm">
                🎯 Personalized
              </span>
              <span className="text-[10px] md:text-xs bg-white/80 backdrop-blur-sm text-pink-700 px-3 py-1.5 rounded-full font-semibold border border-pink-200 shadow-sm">
                ✨ Parent-Friendly
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISummarySection;
