import React, { useState } from "react";
import { STUDENT_DATA } from "../../../data/studentData";

// Components
import TimetableHeader from "../../../components/dashboard/student/TimetableSchedule/TimetableHeader";
import ScheduleGrid from "../../../components/dashboard/student/TimetableSchedule/ScheduleGrid";

const TimetableSchedule = () => {
  const [view, setView] = useState("Daily"); // Daily or Weekly
  const { timetable } = STUDENT_DATA;

  return (
    <div className="space-y-8">
      <TimetableHeader view={view} setView={setView} />
      <ScheduleGrid timetable={timetable} view={view} />
    </div>
  );
};

export default TimetableSchedule;
