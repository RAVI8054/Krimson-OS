import React, { useState } from "react";
import { PARENT_DATA } from "../../../data/parentData";
import AttendanceHeader from "../../../components/dashboard/parent/AttendanceRecord/AttendanceHeader";
import AttendanceStats from "../../../components/dashboard/parent/AttendanceRecord/AttendanceStats";
import AttendanceTrend from "../../../components/dashboard/parent/AttendanceRecord/AttendanceTrend";
import AttendanceCalendar from "../../../components/dashboard/parent/AttendanceRecord/AttendanceCalendar";
import AbsenceLog from "../../../components/dashboard/parent/AttendanceRecord/AbsenceLog";
import TermSummary from "../../../components/dashboard/parent/AttendanceRecord/TermSummary";

const AttendanceRecord = () => {
  const [selectedMonth, setSelectedMonth] = useState(0); // 0 = Jan, 1 = Dec, etc.
  const attendanceData = PARENT_DATA.attendance;

  const handleDownloadReport = () => {
    console.log("Downloading attendance report");
    // API call will be added here
  };

  const handlePrevMonth = () => {
    // Logic to be implemented or connected to state
    console.log("Previous month");
  };

  const handleNextMonth = () => {
    // Logic to be implemented or connected to state
    console.log("Next month");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-pink-50/30 p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Header */}
      <AttendanceHeader onDownload={handleDownloadReport} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 relative z-10">
        {/* Left Column - Stats and Trend */}
        <div className="lg:col-span-1 space-y-4 md:space-y-6">
          <AttendanceStats data={attendanceData} />
          <AttendanceTrend data={attendanceData.monthlyTrend} />
        </div>

        {/* Right Column - Calendar and Absence Log */}
        <div className="lg:col-span-2 space-y-4 md:space-y-6">
          <AttendanceCalendar
            calendarData={attendanceData.calendar}
            currentMonth={attendanceData.currentMonth}
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
          />
          <AbsenceLog absenceReasons={attendanceData.absenceReasons} />
          <TermSummary termData={attendanceData.term} />
        </div>
      </div>
    </div>
  );
};

export default AttendanceRecord;
