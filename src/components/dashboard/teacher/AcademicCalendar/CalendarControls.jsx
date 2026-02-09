import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  BookOpen,
  Users,
  Award,
  Bell,
} from "lucide-react";

const CalendarControls = ({
  onPrevMonth,
  onNextMonth,
  onToday,
  filterType,
  setFilterType,
}) => (
  <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
      {/* Navigation */}
      <div className="flex items-center gap-3">
        <button
          onClick={onPrevMonth}
          className="p-3 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
        >
          <ChevronLeft size={20} className="text-slate-600" />
        </button>
        <button
          onClick={onToday}
          className="px-4 py-2 bg-blue-500 text-white rounded-xl font-bold text-sm hover:bg-blue-600 transition-colors"
        >
          Today
        </button>
        <button
          onClick={onNextMonth}
          className="p-3 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
        >
          <ChevronRight size={20} className="text-slate-600" />
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {[
          { value: "all", label: "All Events", icon: <Calendar size={14} /> },
          { value: "school", label: "School", icon: <BookOpen size={14} /> },
          { value: "personal", label: "Personal", icon: <Users size={14} /> },
          { value: "exam", label: "Exams", icon: <Award size={14} /> },
          { value: "holiday", label: "Holidays", icon: <Bell size={14} /> },
        ].map((filter) => (
          <button
            key={filter.value}
            onClick={() => setFilterType(filter.value)}
            className={`px-4 py-2 rounded-xl font-bold text-xs transition-all flex items-center gap-1 ${
              filterType === filter.value
                ? "bg-blue-500 text-white shadow-md"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {filter.icon}
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default CalendarControls;
