import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import { CheckCircle, XCircle, Clock } from "lucide-react";

// Import new components
import AttendanceHeader from "../../../components/dashboard/teacher/AttendanceLog/AttendanceHeader";
import AttendanceStats from "../../../components/dashboard/teacher/AttendanceLog/AttendanceStats";
import AttendanceActionBar from "../../../components/dashboard/teacher/AttendanceLog/AttendanceActionBar";
import AttendanceSummary from "../../../components/dashboard/teacher/AttendanceLog/AttendanceSummary";
import AttendanceList from "../../../components/dashboard/teacher/AttendanceLog/AttendanceList";
import StudentDetailModal from "../../../components/dashboard/teacher/AttendanceLog/StudentDetailModal";
import AbsenceReasonModal from "../../../components/dashboard/teacher/AttendanceLog/AbsenceReasonModal";

const AttendanceLog = () => {
  const {
    attendance: initialAttendance,
    subjects,
    attendanceCalendar,
    classes,
    attendanceReasons,
  } = TEACHER_DATA;

  // State management
  const [attendance, setAttendance] = useState(initialAttendance);
  const [selectedClass, setSelectedClass] = useState("Grade 9-A");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");
  const [viewMode, setViewMode] = useState("all"); // 'all', 'present', 'absent', 'late'
  const [searchQuery, setSearchQuery] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [calendarView, setCalendarView] = useState("weekly"); // 'weekly' or 'monthly'
  const [calendarSubject, setCalendarSubject] = useState("All Subjects");
  const [showReasonModal, setShowReasonModal] = useState(false);
  const [newReason, setNewReason] = useState("");
  const [customReasons, setCustomReasons] = useState(() => {
    const saved = localStorage.getItem("customAbsenceReasons");
    return saved ? JSON.parse(saved) : [];
  });
  const itemsPerPage = 10;

  // Filter attendance based on view mode and search
  const filteredAttendance = attendance.filter((student) => {
    // Filter by view mode
    if (viewMode !== "all") {
      if (viewMode === "present" && student.status !== "Present") return false;
      if (viewMode === "absent" && student.status !== "Absent") return false;
      if (viewMode === "late" && student.status !== "Late") return false;
    }

    // Filter by search query
    if (searchQuery) {
      return (
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.roll.toString().includes(searchQuery)
      );
    }

    return true;
  });

  // Calculate statistics
  const stats = {
    total: attendance.length,
    present: attendance.filter((s) => s.status === "Present").length,
    absent: attendance.filter((s) => s.status === "Absent").length,
    late: attendance.filter((s) => s.status === "Late").length,
    percentage: Math.round(
      (attendance.filter((s) => s.status === "Present").length /
        attendance.length) *
        100,
    ),
  };

  // Mark individual attendance
  const markAttendance = (studentId, status) => {
    setAttendance((prev) =>
      prev.map((student) =>
        student.id === studentId
          ? {
              ...student,
              status,
              reason: status === "Absent" ? student.reason : undefined,
            }
          : student,
      ),
    );
  };

  // Mark all present
  const markAllPresent = () => {
    setAttendance((prev) =>
      prev.map((student) => ({
        ...student,
        status: "Present",
        reason: undefined,
      })),
    );
  };

  // Update absence reason
  const updateReason = (studentId, reason) => {
    setAttendance((prev) =>
      prev.map((student) =>
        student.id === studentId ? { ...student, reason } : student,
      ),
    );
  };

  // Get calendar data for student
  const getCalendarData = (studentId) => {
    const calendar = attendanceCalendar[studentId] || [];
    const currentDate = new Date();

    if (calendarView === "weekly") {
      // Get current week (last 7 days)
      return calendar.slice(0, 7);
    } else {
      // Get current month (last 30 days or current month data)
      return calendar;
    }
  };

  // Helper functions for styling and formatting
  const getStatusColor = (status) => {
    if (!status) return "bg-gray-100 text-gray-400";
    switch (status) {
      case "Present":
        return "bg-green-100 text-green-600 border-green-300";
      case "Absent":
        return "bg-red-100 text-red-600 border-red-300";
      case "Late":
        return "bg-orange-100 text-orange-600 border-orange-300";
      default:
        return "bg-gray-100 text-gray-400";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Present":
        return <CheckCircle size={16} className="text-green-500" />;
      case "Absent":
        return <XCircle size={16} className="text-red-500" />;
      case "Late":
        return <Clock size={16} className="text-orange-500" />;
      default:
        return <div className="w-4 h-4 rounded-full bg-gray-300" />;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  // Mock API call
  useEffect(() => {
    console.log("Attendance Log loaded - Ready for API integration");
  }, []);

  // Absence reason options (predefined + custom)
  const predefinedReasons = attendanceReasons;
  const reasonOptions = [...predefinedReasons, ...customReasons];

  // Add custom reason
  const addCustomReason = () => {
    if (newReason.trim() && !reasonOptions.includes(newReason.trim())) {
      const updated = [...customReasons, newReason.trim()];
      setCustomReasons(updated);
      localStorage.setItem("customAbsenceReasons", JSON.stringify(updated));
      setNewReason("");
      setShowReasonModal(false);
    }
  };

  // Remove custom reason
  const removeCustomReason = (reason) => {
    const updated = customReasons.filter((r) => r !== reason);
    setCustomReasons(updated);
    localStorage.setItem("customAbsenceReasons", JSON.stringify(updated));
  };

  return (
    <div className="space-y-6 md:space-y-8">
      <AttendanceHeader
        stats={stats}
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
        classes={classes}
        selectedDate={selectedDate}
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
        subjects={subjects}
      />

      <AttendanceStats
        stats={stats}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <AttendanceActionBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        markAllPresent={markAllPresent}
        showSummary={showSummary}
        setShowSummary={setShowSummary}
      />

      <AttendanceSummary showSummary={showSummary} stats={stats} />

      <AttendanceList
        attendance={attendance}
        filteredAttendance={filteredAttendance}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        viewMode={viewMode}
        setViewMode={setViewMode}
        markAttendance={markAttendance}
        updateReason={updateReason}
        reasonOptions={reasonOptions}
        setShowReasonModal={setShowReasonModal}
        setSelectedStudent={setSelectedStudent}
      />

      <StudentDetailModal
        student={selectedStudent}
        onClose={() => setSelectedStudent(null)}
        calendarSubject={calendarSubject}
        setCalendarSubject={setCalendarSubject}
        subjects={subjects}
        calendarView={calendarView}
        setCalendarView={setCalendarView}
        calendarData={
          selectedStudent ? getCalendarData(selectedStudent.id) : []
        }
        formatDate={formatDate}
        getDayOfWeek={getDayOfWeek}
        getStatusColor={getStatusColor}
        getStatusIcon={getStatusIcon}
      />

      <AbsenceReasonModal
        showReasonModal={showReasonModal}
        setShowReasonModal={setShowReasonModal}
        customReasons={customReasons}
        newReason={newReason}
        setNewReason={setNewReason}
        addCustomReason={addCustomReason}
        removeCustomReason={removeCustomReason}
      />
    </div>
  );
};

export default AttendanceLog;
