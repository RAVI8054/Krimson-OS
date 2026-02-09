import React from "react";
import { Award, TrendingUp, Clock, BookOpen } from "lucide-react";

const iconMap = {
  Award: Award,
  TrendingUp: TrendingUp,
  Clock: Clock,
  BookOpen: BookOpen,
};

const QuickStatsGrid = ({ quickStats }) => {
  if (!quickStats) return null;

  return (
    <div className="grid grid-cols-2 gap-4">
      {quickStats.map((stat, i) => {
        const IconComponent = iconMap[stat.icon] || Award;

        return (
          <div
            key={i}
            className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all"
          >
            <div
              className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center mb-3`}
            >
              <IconComponent className={stat.iconColor} size={20} />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-slate-800">
                {stat.value}
              </h4>
              <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QuickStatsGrid;
