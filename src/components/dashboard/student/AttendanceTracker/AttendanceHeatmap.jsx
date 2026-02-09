import React from "react";

const AttendanceHeatmap = ({ currentMonth, calendarGrid }) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-800">{currentMonth}</h3>
        <div className="flex gap-4 text-xs font-bold text-slate-500">
          <span className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-500 rounded-sm" />
            Present
          </span>
          <span className="flex items-center gap-1">
            <div className="w-3 h-3 bg-red-400 rounded-sm" />
            Absent
          </span>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-3">
        {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
          <div key={d} className="text-center text-xs font-bold text-slate-300">
            {d}
          </div>
        ))}

        {calendarGrid.map((day) => (
          <div
            key={day.date}
            className={`h-10 rounded-xl flex items-center justify-center text-sm font-bold
              ${
                day.status === "present"
                  ? "bg-green-100 text-green-700"
                  : day.status === "absent"
                    ? "bg-red-100 text-red-700"
                    : "bg-slate-50 text-slate-400"
              }`}
          >
            {day.date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceHeatmap;
