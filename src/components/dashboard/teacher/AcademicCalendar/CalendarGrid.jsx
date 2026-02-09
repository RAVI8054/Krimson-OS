import React from "react";

const CalendarGrid = ({
  dayNames,
  daysInMonth,
  getEventsForDay,
  isToday,
  onSelectDate,
  getEventColor,
  getEventDotColor,
}) => (
  <div className="bg-white rounded-3xl shadow-md overflow-hidden">
    {/* Day Headers */}
    <div className="grid grid-cols-7 bg-gradient-to-r from-slate-50 to-blue-50 border-b-2 border-blue-100">
      {dayNames.map((day) => (
        <div
          key={day}
          className="p-4 text-center font-bold text-slate-600 text-sm"
        >
          {day}
        </div>
      ))}
    </div>

    {/* Calendar Days */}
    <div className="grid grid-cols-7">
      {daysInMonth.map((dayObj, idx) => {
        const dayEvents = dayObj.isCurrentMonth
          ? getEventsForDay(dayObj.day)
          : [];
        const today = isToday(dayObj.day);

        return (
          <div
            key={idx}
            className={`min-h-[120px] p-2 border border-slate-100 transition-all ${
              !dayObj.isCurrentMonth
                ? "bg-slate-50"
                : today
                  ? "bg-blue-50 border-blue-300"
                  : "hover:bg-slate-50"
            }`}
          >
            {dayObj.isCurrentMonth && (
              <>
                <div
                  className={`text-sm font-bold mb-2 ${
                    today
                      ? "w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center"
                      : "text-slate-700"
                  }`}
                >
                  {dayObj.day}
                </div>
                <div className="space-y-1">
                  {dayEvents.slice(0, 2).map((event) => (
                    <div
                      key={event.id}
                      onClick={() => onSelectDate(event)}
                      className={`px-2 py-1 rounded-lg text-xs font-bold cursor-pointer hover:shadow-md transition-all border ${getEventColor(event.color)}`}
                    >
                      <div className="flex items-center gap-1">
                        <div
                          className={`w-2 h-2 rounded-full ${getEventDotColor(event.color)}`}
                        ></div>
                        <span className="truncate">{event.title}</span>
                      </div>
                    </div>
                  ))}
                  {dayEvents.length > 2 && (
                    <div className="text-xs text-slate-500 font-bold px-2">
                      +{dayEvents.length - 2} more
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  </div>
);

export default CalendarGrid;
