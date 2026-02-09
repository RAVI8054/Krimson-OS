import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";

// Components
import SummaryHeader from "../../../components/dashboard/teacher/AttendanceLog/SummaryHeader";
import AutomatedInsights from "../../../components/dashboard/teacher/AttendanceLog/AutomatedInsights";
import QuickStats from "../../../components/dashboard/teacher/AttendanceLog/QuickStats";
import ViewToggle from "../../../components/dashboard/teacher/AttendanceLog/ViewToggle";
import MonthlyTrendGraph from "../../../components/dashboard/teacher/AttendanceLog/MonthlyTrendGraph";
import TermWiseSummary from "../../../components/dashboard/teacher/AttendanceLog/TermWiseSummary";
import ClassAttendanceBreakdown from "../../../components/dashboard/teacher/AttendanceLog/ClassAttendanceBreakdown";
import HighAbsenceList from "../../../components/dashboard/teacher/AttendanceLog/HighAbsenceList";
import ExportOptions from "../../../components/dashboard/teacher/AttendanceLog/ExportOptions";

const AttendanceSummary = () => {
  // Monthly attendance data from TEACHER_DATA
  const [monthlyData] = useState(TEACHER_DATA.attendanceStats.monthlyData);

  // Term-wise data (From TEACHER_DATA)
  const [termData] = useState(TEACHER_DATA.termAttendanceData);

  // Class-wise attendance (From TEACHER_DATA)
  const [classAttendance] = useState(TEACHER_DATA.classAttendanceTrends);

  // Student absence frequency mapped from TEACHER_DATA
  const [studentAbsences] = useState(
    TEACHER_DATA.attendanceStats.recentAbsences.map((s) => ({
      name: s.name,
      class: s.class,
      absences: s.days * 2, // Mock calculation or derived from data
      percentage: 100 - s.days * 2, // Mock calculation
      trend: "stable",
      lastAbsent: new Date().toISOString(), // Or specific date if available
    })),
  );

  // Automated insights (From TEACHER_DATA)
  const [insights] = useState(TEACHER_DATA.attendanceInsights);

  const [selectedView, setSelectedView] = useState("monthly"); // 'monthly', 'term'
  const [showInsights, setShowInsights] = useState(true);
  const [selectedClass, setSelectedClass] = useState(null);

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch('/api/teacher/attendance/summary')
    //   .then(res => res.json())
    //   .then(data => setAttendanceData(data));
    console.log("Attendance Summary loaded - Ready for API integration");
  }, []);

  // Calculate overall stats
  const overallStats = {
    currentMonth: monthlyData[monthlyData.length - 1].percentage,
    totalStudents: classAttendance.reduce((sum, c) => sum + c.students, 0),
    avgAttendance: (
      classAttendance.reduce((sum, c) => sum + c.current, 0) /
      classAttendance.length
    ).toFixed(1),
    atRiskStudents: studentAbsences.filter((s) => s.percentage < 85).length,
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section */}
      <SummaryHeader overallStats={overallStats} />

      {/* Automated Insights */}
      <AutomatedInsights
        insights={insights}
        showInsights={showInsights}
        setShowInsights={setShowInsights}
      />

      {/* Quick Stats */}
      <QuickStats overallStats={overallStats} />

      {/* View Toggle */}
      <ViewToggle
        selectedView={selectedView}
        setSelectedView={setSelectedView}
      />

      {/* Monthly/Term Graph */}
      {selectedView === "monthly" && (
        <MonthlyTrendGraph monthlyData={monthlyData} />
      )}

      {/* Term-wise View */}
      {selectedView === "term" && <TermWiseSummary termData={termData} />}

      {/* Class-wise Breakdown */}
      <ClassAttendanceBreakdown
        classAttendance={classAttendance}
        setSelectedClass={setSelectedClass}
      />

      {/* Student Absence Frequency */}
      <HighAbsenceList studentAbsences={studentAbsences} />

      {/* Export Options */}
      <ExportOptions />
    </div>
  );
};

export default AttendanceSummary;
