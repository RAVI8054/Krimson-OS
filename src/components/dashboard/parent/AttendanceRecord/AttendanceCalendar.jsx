import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AttendanceCalendar = ({
  calendarData,
  currentMonth,
  onPrevMonth,
  onNextMonth,
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "present":
        return "bg-green-500 hover:bg-green-600";
      case "absent":
        return "bg-red-500 hover:bg-red-600";
      case "holiday":
        return "bg-purple-400 hover:bg-purple-500";
      case "weekend":
        return "bg-slate-200 hover:bg-slate-300";
      default:
        return "bg-transparent";
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-xl border border-white/60">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800">{currentMonth}</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={onPrevMonth}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <ChevronLeft size={20} className="text-slate-600" />
          </button>
          <button
            onClick={onNextMonth}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <ChevronRight size={20} className="text-slate-600" />
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6 text-xs font-medium">
        <span className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-green-500"></div>
          Present
        </span>
        <span className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-red-500"></div>
          Absent
        </span>
        <span className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-purple-400"></div>
          Holiday
        </span>
        <span className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-slate-200"></div>
          Weekend
        </span>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {/* Day Headers */}
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div
            key={day}
            className="text-center text-slate-500 text-xs md:text-sm font-bold py-2"
          >
            {day}
          </div>
        ))}

        {/* Calendar Days */}
        {calendarData.map((dayData, index) => (
          <div
            key={index}
            className={`aspect-square rounded-lg flex items-center justify-center text-sm md:text-base font-bold transition-all cursor-pointer ${
              dayData.day ? getStatusColor(dayData.status) : ""
            } ${
              dayData.day &&
              dayData.status !== "weekend" &&
              dayData.status !== "holiday"
                ? "text-white shadow-md"
                : dayData.day
                  ? "text-white"
                  : ""
            }`}
            title={dayData.day ? `${dayData.day} - ${dayData.status}` : ""}
          >
            {dayData.day || ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceCalendar;
