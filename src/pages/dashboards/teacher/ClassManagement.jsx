import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import ClassManagementHeader from "../../../components/dashboard/teacher/ClassManagement/ClassManagementHeader";
import SubstitutionAlerts from "../../../components/dashboard/teacher/ClassManagement/SubstitutionAlerts";
import SearchFilterBar from "../../../components/dashboard/teacher/ClassManagement/SearchFilterBar";
import ClassCardGrid from "../../../components/dashboard/teacher/ClassManagement/ClassCardGrid";
import ClassManagementStats from "../../../components/dashboard/teacher/ClassManagement/ClassManagementStats";
import EmptyState from "../../../components/dashboard/teacher/ClassManagement/EmptyState";

const ClassManagement = () => {
  const { classes, user } = TEACHER_DATA;

  // State management
  const [filteredClasses, setFilteredClasses] = useState(classes);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    grade: "All",
    subject: "All",
    section: "All",
  });
  const [searchQuery, setSearchQuery] = useState("");

  // Extract unique values for filters
  const grades = [
    "All",
    ...new Set(classes.map((cls) => cls.grade.split("-")[0])),
  ];
  const subjects = ["All", ...new Set(classes.map((cls) => cls.subject))];
  const sections = [
    "All",
    ...new Set(
      classes
        .map((cls) => {
          const match = cls.grade.match(/-([A-Z])$/);
          return match ? match[1] : null;
        })
        .filter(Boolean),
    ),
  ];

  // Mock substitution alerts from TEACHER_DATA
  const substitutionAlerts = TEACHER_DATA.substitutionAlerts.map((alert) => ({
    id: alert.id,
    grade: alert.class,
    subject: alert.subject,
    period: alert.period,
    time: "11:30 AM", // Default time as it's not in the data
    reason: alert.teacher,
    urgent: alert.status === "Pending",
  }));

  // Filter logic
  useEffect(() => {
    let result = classes;

    // Apply grade filter
    if (filters.grade !== "All") {
      result = result.filter((cls) => cls.grade.startsWith(filters.grade));
    }

    // Apply subject filter
    if (filters.subject !== "All") {
      result = result.filter((cls) => cls.subject === filters.subject);
    }

    // Apply section filter
    if (filters.section !== "All") {
      result = result.filter((cls) =>
        cls.grade.endsWith(`-${filters.section}`),
      );
    }

    // Apply search query
    if (searchQuery) {
      result = result.filter(
        (cls) =>
          cls.grade.toLowerCase().includes(searchQuery.toLowerCase()) ||
          cls.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
          cls.topic.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    setFilteredClasses(result);
  }, [filters, searchQuery, classes]);

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      grade: "All",
      subject: "All",
      section: "All",
    });
    setSearchQuery("");
  };

  // Mock API call
  useEffect(() => {
    console.log("Class Management loaded - Ready for API integration");
  }, []);

  const activeFiltersCount = Object.values(filters).filter(
    (v) => v !== "All",
  ).length;

  // Calculate average score
  const avgScore =
    classes.length > 0
      ? Math.round(
          classes.reduce((sum, cls) => sum + (cls.avgScore || 85), 0) /
            classes.length,
        )
      : 85;

  const totalStudents = classes.reduce((sum, cls) => sum + cls.students, 0);

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section */}
      <ClassManagementHeader
        user={user}
        classesCount={classes.length}
        totalStudents={totalStudents}
      />

      {/* Substitution Alerts */}
      <SubstitutionAlerts alerts={substitutionAlerts} />

      {/* Search and Filter Bar */}
      <SearchFilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filters={filters}
        handleFilterChange={handleFilterChange}
        resetFilters={resetFilters}
        filterOpen={filterOpen}
        setFilterOpen={setFilterOpen}
        grades={grades}
        subjects={subjects}
        sections={sections}
        activeFiltersCount={activeFiltersCount}
      />

      {/* Results Summary and Content */}
      {filteredClasses.length > 0 ? (
        <>
          <div className="flex items-center justify-between px-2">
            <p className="text-sm text-slate-600 font-medium">
              Showing{" "}
              <span className="font-bold text-slate-800">
                {filteredClasses.length}
              </span>{" "}
              of{" "}
              <span className="font-bold text-slate-800">{classes.length}</span>{" "}
              classes
            </p>
            {activeFiltersCount > 0 && (
              <button
                onClick={resetFilters}
                className="text-xs text-blue-600 font-bold hover:text-blue-700 transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>
          <ClassCardGrid filteredClasses={filteredClasses} />
        </>
      ) : (
        <EmptyState resetFilters={resetFilters} />
      )}

      {/* Summary Stats Footer */}
      <ClassManagementStats classes={classes} avgScore={avgScore} />
    </div>
  );
};

export default ClassManagement;
