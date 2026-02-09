import React from "react";
import EventCard from "./EventCard";
import {
  Calendar as CalendarIcon,
  BookOpen,
  Trophy,
  Music,
  Users,
} from "lucide-react";
import { PARENT_DATA } from "../../../../data/parentData";

const iconMap = {
  Calendar: CalendarIcon,
  BookOpen: BookOpen,
  Trophy: Trophy,
  Music: Music,
  Users: Users,
};

const EventList = ({
  currentItems,
  handleRSVP,
  handleDownloadBrochure,
  formatDate,
  filteredEventsLength,
  searchQuery,
  selectedCategory,
}) => {
  const { categories } = PARENT_DATA.calendarEvents;

  const getCategoryIcon = (type) => {
    const category = categories.find((cat) => cat.id === type);
    return category ? iconMap[category.icon] : CalendarIcon;
  };

  return (
    <>
      {/* Events List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 relative z-10">
        {currentItems.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            getCategoryIcon={getCategoryIcon}
            handleRSVP={handleRSVP}
            handleDownloadBrochure={handleDownloadBrochure}
            formatDate={formatDate}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredEventsLength === 0 && (
        <div className="relative z-10 bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60 text-center">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-cyan-100 via-blue-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
            <CalendarIcon size={40} className="text-cyan-500" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-slate-700 mb-2">
            No Events Found
          </h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            {searchQuery
              ? `No events match your search "${searchQuery}"`
              : `No ${selectedCategory} events available at the moment`}
          </p>
        </div>
      )}
    </>
  );
};
export default EventList;
