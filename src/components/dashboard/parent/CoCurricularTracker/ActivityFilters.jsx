import React from "react";
import { Star, Trophy, Palette, BookOpen, Crown } from "lucide-react";

const iconMap = {
  Star,
  Trophy,
  Palette,
  BookOpen,
  Crown,
};

const ActivityFilters = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  activities,
  filteredActivities,
}) => {
  return (
    <div className="mb-4 md:mb-6 relative z-10">
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => {
          const Icon = iconMap[category.icon] || Star;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all flex-shrink-0 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : "bg-white/80 text-slate-600 hover:bg-white hover:scale-105"
              }`}
            >
              <Icon size={16} />
              <span>{category.name}</span>
              {selectedCategory === category.id && (
                <span className="bg-white/30 px-2 py-0.5 rounded-full text-xs">
                  {category.id === "all"
                    ? activities.length
                    : filteredActivities.length}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityFilters;
