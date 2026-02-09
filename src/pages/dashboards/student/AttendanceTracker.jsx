import React from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import AttendanceSummaryCard from "../../../components/dashboard/student/AttendanceTracker/AttendanceSummaryCard";
import AttendanceHeatmap from "../../../components/dashboard/student/AttendanceTracker/AttendanceHeatmap";
import AttendanceWeeklyTrend from "../../../components/dashboard/student/AttendanceTracker/AttendanceWeeklyTrend";
import AttendanceWarning from "../../../components/dashboard/student/AttendanceTracker/AttendanceWarning";

const AttendanceTracker = () => {
  const { attendance, attendanceContext } = STUDENT_DATA;
  const { currentMonth, daysInMonth, heatmapStart } = attendanceContext;

  /* =========================
     MONTHLY HEATMAP DATA
  ========================= */
  const calendarGrid = Array.from({ length: daysInMonth }, (_, i) => {
    const dateStr = `${heatmapStart}${String(i + 1).padStart(2, "0")}`;
    let status = "neutral";

    if (attendance.heatmap.present.includes(dateStr)) status = "present";
    if (attendance.heatmap.absent.includes(dateStr)) status = "absent";

    return { date: i + 1, status };
  });

  const handleDownload = () => {
    alert("Downloading Attendance Certificate...");
  };

  /* =========================
     WEEKLY GRAPH DATA
  ========================= */
  const chartData = attendance.weeklyAttendance || [];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* =========================
           SUMMARY CARD
        ========================= */}
        <AttendanceSummaryCard
          attendance={attendance}
          onDownload={handleDownload}
        />

        {/* =========================
           HEATMAP + GRAPH
        ========================= */}
        <div className="md:col-span-2 space-y-6">
          {/* -------- Heatmap -------- */}
          <AttendanceHeatmap
            currentMonth={currentMonth}
            calendarGrid={calendarGrid}
          />

          {/* -------- Weekly Line Graph -------- */}
          <AttendanceWeeklyTrend chartData={chartData} />
        </div>
      </div>

      {/* =========================
         WARNING
      ========================= */}
      <AttendanceWarning percentage={attendance.percentage} />
    </div>
  );
};

export default AttendanceTracker;
