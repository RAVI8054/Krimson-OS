import React from "react";
import DailyScheduleCard from "./DailyScheduleCard";

const ScheduleGrid = ({ timetable, view }) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const daysToShow = view === "Daily" ? ["Monday"] : days;

  return (
    <div className="grid grid-cols-1 gap-6">
      {daysToShow.map((day) => (
        <DailyScheduleCard
          key={day}
          day={day}
          slots={timetable[day.toLowerCase()]}
        />
      ))}
    </div>
  );
};

export default ScheduleGrid;
