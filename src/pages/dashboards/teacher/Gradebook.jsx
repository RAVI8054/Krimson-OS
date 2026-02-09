import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import GradebookHeader from "../../../components/dashboard/teacher/Gradebook/GradebookHeader";
import GradebookStats from "../../../components/dashboard/teacher/Gradebook/GradebookStats";
import PredictiveAlert from "../../../components/dashboard/teacher/Gradebook/PredictiveAlert";
import GradebookControls from "../../../components/dashboard/teacher/Gradebook/GradebookControls";
import GradebookTable from "../../../components/dashboard/teacher/Gradebook/GradebookTable";
import StudentDetailModal from "../../../components/dashboard/teacher/Gradebook/StudentDetailModal";

const Gradebook = () => {
  // Gradebook data mapped from TEACHER_DATA
  const [students] = useState(
    TEACHER_DATA.gradebook.map((student) => {
      // Helper to extract assessment marks safely
      const getMark = (name) => student.scores[name]?.marks || 0;

      return {
        id: student.id,
        name: student.name,
        roll: student.roll,
        assessments: {
          unitTest1: getMark("Unit Test 1"),
          unitTest2: 0, // Not in sample data, defaulting
          project: getMark("Project"),
          midterm: getMark("Mid-Term"),
        },
        participation: "A", // Default
        attendance: student.attendance,
        behaviorScore: 85, // Default
        trend: "improving", // Default
        trendValue: 0, // Default
        overallGrade: student.overallGrade,
        avgScore: 0, // Placeholder, can be calculated if needed
        atRisk: student.overallGrade === "D" || student.overallGrade === "F",
        remarks: student.remarks ? [student.remarks] : [],
      };
    }),
  );

  const [selectedClass, setSelectedClass] = useState("Grade 9-A");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterMode, setFilterMode] = useState("all"); // 'all', 'atRisk', 'improving', 'declining'
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter students
  const filteredStudents = students.filter((student) => {
    // Filter by mode
    if (filterMode !== "all") {
      if (filterMode === "atRisk" && !student.atRisk) return false;
      if (filterMode === "improving" && student.trend !== "improving")
        return false;
      if (filterMode === "declining" && student.trend !== "declining")
        return false;
    }

    // Filter by search
    if (searchQuery) {
      return (
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.roll.toString().includes(searchQuery)
      );
    }

    return true;
  });

  // Calculate class statistics
  const stats = {
    total: students.length,
    atRisk: students.filter((s) => s.atRisk).length,
    improving: students.filter((s) => s.trend === "improving").length,
    declining: students.filter((s) => s.trend === "declining").length,
    avgScore: (
      students.reduce((sum, s) => sum + s.avgScore, 0) / students.length
    ).toFixed(1),
    avgAttendance: (
      students.reduce((sum, s) => sum + s.attendance, 0) / students.length
    ).toFixed(1),
  };

  // Mock API call
  useEffect(() => {
    console.log("Gradebook loaded - Ready for API integration");
  }, []);

  // Get grade color
  const getGradeColor = (grade) => {
    if (grade >= 90) return "text-green-600 bg-green-50";
    if (grade >= 75) return "text-blue-600 bg-blue-50";
    if (grade >= 60) return "text-orange-600 bg-orange-50";
    return "text-red-600 bg-red-50";
  };

  const getTrendColor = (trend) => {
    return trend === "improving" ? "text-green-600" : "text-red-600";
  };

  const getParticipationColor = (participation) => {
    if (participation === "A+" || participation === "A")
      return "bg-green-100 text-green-700";
    if (participation === "B") return "bg-blue-100 text-blue-700";
    if (participation === "C") return "bg-orange-100 text-orange-700";
    return "bg-red-100 text-red-700";
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section */}
      <GradebookHeader
        selectedClass={selectedClass}
        studentCount={students.length}
      />

      {/* Quick Stats */}
      <GradebookStats
        stats={stats}
        filterMode={filterMode}
        setFilterMode={setFilterMode}
      />

      {/* Predictive Analytics Banner */}
      <PredictiveAlert stats={stats} students={students} />

      {/* Action Bar */}
      <GradebookControls
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        filterMode={filterMode}
        setFilterMode={setFilterMode}
      />

      {/* Performance Table */}
      <GradebookTable
        filteredStudents={filteredStudents}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
        getGradeColor={getGradeColor}
        getParticipationColor={getParticipationColor}
        getTrendColor={getTrendColor}
        setSelectedStudent={setSelectedStudent}
        searchQuery={searchQuery}
        filterMode={filterMode}
      />

      {/* Student Detail Modal */}
      <StudentDetailModal
        selectedStudent={selectedStudent}
        setSelectedStudent={setSelectedStudent}
        getGradeColor={getGradeColor}
        getParticipationColor={getParticipationColor}
        getTrendColor={getTrendColor}
      />
    </div>
  );
};

export default Gradebook;
