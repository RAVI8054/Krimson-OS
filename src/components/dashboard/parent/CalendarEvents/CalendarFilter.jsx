import React from "react";
import { Search, Calendar, BookOpen, Trophy, Music, Users } from "lucide-react";
import { PARENT_DATA } from "../../../../data/parentData";

const iconMap = {
  Calendar: Calendar,
  BookOpen: BookOpen,
  Trophy: Trophy,
  Music: Music,
  Users: Users,
};

const CalendarFilter = ({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  filteredEventsCount,
  totalEventsCount,
}) => {
  const { categories } = PARENT_DATA.calendarEvents;

  return (
    <>
      <div className="mb-4 md:mb-6 relative z-10">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search events..."
              className="w-full pl-10 pr-4 py-2.5 bg-white/95 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all"
            />
          </div>
        </div>
      </div>

      <div className="mb-4 md:mb-6 relative z-10">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];
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
                      ? totalEventsCount
                      : filteredEventsCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default CalendarFilter;
