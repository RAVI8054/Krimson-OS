import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import { FileText, CheckSquare, FileCheck, Target } from "lucide-react";
import AssignmentHeader from "../../../components/dashboard/teacher/AssignmentManager/AssignmentHeader";
import AssignmentStats from "../../../components/dashboard/teacher/AssignmentManager/AssignmentStats";
import AIGradingBanner from "../../../components/dashboard/teacher/AssignmentManager/AIGradingBanner";
import AssignmentFilters from "../../../components/dashboard/teacher/AssignmentManager/AssignmentFilters";
import AssignmentList from "../../../components/dashboard/teacher/AssignmentManager/AssignmentList";
import AssignmentDetailModal from "../../../components/dashboard/teacher/AssignmentManager/AssignmentDetailModal";

const AssignmentManager = () => {
  const { assignments: initialAssignments } = TEACHER_DATA;

  // State management
  const [assignments, setAssignments] = useState(initialAssignments);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [viewMode, setViewMode] = useState("all"); // 'all', 'active', 'overdue', 'completed'
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Filter assignments
  const filteredAssignments = assignments.filter((assignment) => {
    // Filter by view mode
    if (viewMode !== "all") {
      if (viewMode === "active" && assignment.status !== "Active") return false;
      if (viewMode === "overdue" && assignment.status !== "Overdue")
        return false;
      if (viewMode === "completed" && assignment.status !== "Completed")
        return false;
    }

    // Filter by search query
    if (searchQuery) {
      return (
        assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        assignment.class.toLowerCase().includes(searchQuery.toLowerCase()) ||
        assignment.subject.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return true;
  });

  // Calculate statistics
  const stats = {
    total: assignments.length,
    active: assignments.filter((a) => a.status === "Active").length,
    overdue: assignments.filter((a) => a.status === "Overdue").length,
    completed: assignments.filter((a) => a.status === "Completed").length,
    totalSubmissions: assignments.reduce((sum, a) => sum + a.submitted, 0),
    totalStudents: assignments.reduce((sum, a) => sum + a.total, 0),
    totalPending: assignments.reduce((sum, a) => sum + a.pending, 0),
  };

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch('/api/teacher/assignments')
    //   .then(res => res.json())
    //   .then(data => setAssignments(data));
    console.log("Assignment Manager loaded - Ready for API integration");
  }, []);

  // Assignment templates
  const templates = TEACHER_DATA.assignmentTemplates.map((t) => {
    let Icon = FileText;
    if (t.type === "Quiz") Icon = CheckSquare;
    if (t.type === "Worksheet") Icon = FileCheck;
    if (t.type === "Problem Set") Icon = Target;

    return {
      id: t.id,
      name: t.title,
      type: t.type,
      icon: <Icon size={20} />,
    };
  });

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section */}
      <AssignmentHeader
        stats={stats}
        onCreateNew={() => console.log("Create new assignment")}
      />

      {/* Quick Stats */}
      <AssignmentStats
        stats={stats}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      {/* AI Grading Assistant Banner */}
      <AIGradingBanner pendingCount={stats.totalPending} />

      {/* Action Bar (Search & Filter) */}
      <AssignmentFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        templates={templates}
      />

      {/* Assignment Cards Grid */}
      <AssignmentList
        assignments={filteredAssignments}
        onSelectAssignment={setSelectedAssignment}
        searchQuery={searchQuery}
        viewMode={viewMode}
        setSearchQuery={setSearchQuery}
        setViewMode={setViewMode}
      />

      {/* Detailed View Modal */}
      {selectedAssignment && (
        <AssignmentDetailModal
          assignment={selectedAssignment}
          onClose={() => setSelectedAssignment(null)}
        />
      )}
    </div>
  );
};

export default AssignmentManager;
