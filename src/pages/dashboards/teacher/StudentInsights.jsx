import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import InsightsHeader from "../../../components/dashboard/teacher/StudentInsights/InsightsHeader";
import InsightsStats from "../../../components/dashboard/teacher/StudentInsights/InsightsStats";
import DataPrivacyNotice from "../../../components/dashboard/teacher/StudentInsights/DataPrivacyNotice";
import SearchAndFilter from "../../../components/dashboard/teacher/StudentInsights/SearchAndFilter";
import StudentCard from "../../../components/dashboard/teacher/StudentInsights/StudentCard";
import StudentDetailModal from "../../../components/dashboard/teacher/StudentInsights/StudentDetailModal";
import EmptyState from "../../../components/dashboard/teacher/StudentInsights/EmptyState";

const StudentInsights = () => {
  // Student data mapped from TEACHER_DATA.studentInsights
  const [students] = useState(TEACHER_DATA.studentInsights);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRisk, setFilterRisk] = useState("all"); // 'all', 'atRisk', 'onTrack'

  // Filter students
  const filteredStudents = students.filter((student) => {
    // Filter by risk status
    if (filterRisk !== "all") {
      if (filterRisk === "atRisk" && !student.atRisk) return false;
      if (filterRisk === "onTrack" && student.atRisk) return false;
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

  // Calculate statistics
  const stats = {
    total: students.length,
    atRisk: students.filter((s) => s.atRisk).length,
    avgAttendance: (
      students.reduce((sum, s) => sum + s.attendance, 0) / students.length
    ).toFixed(1),
    avgGrade: (
      students.reduce((sum, s) => sum + (s.avgGrade || 0), 0) / students.length
    ).toFixed(1),
  };

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch('/api/teacher/student-insights')
    //   .then(res => res.json())
    //   .then(data => setStudents(data));
    console.log("Student Insights loaded - Ready for API integration");
  }, []);

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section with Gradient */}
      <InsightsHeader totalStudents={stats.total} atRiskCount={stats.atRisk} />

      {/* Quick Stats */}
      <InsightsStats stats={stats} />

      {/* Data Privacy Notice */}
      <DataPrivacyNotice />

      {/* Search and Filter */}
      <SearchAndFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        filterRisk={filterRisk}
        onFilterChange={setFilterRisk}
      />

      {/* Student Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onClick={() => setSelectedStudent(student)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredStudents.length === 0 && (
        <EmptyState searchQuery={searchQuery} filterRisk={filterRisk} />
      )}

      {/* Student Detail Modal */}
      <StudentDetailModal
        student={selectedStudent}
        onClose={() => setSelectedStudent(null)}
      />
    </div>
  );
};

export default StudentInsights;
