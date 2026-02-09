import React, { useState } from "react";
import { BookOpen } from "lucide-react";
import { PARENT_DATA } from "../../../data/parentData";
import AssignmentStats from "../../../components/dashboard/parent/HomeworkAssignments/AssignmentStats";
import AssignmentsFilter from "../../../components/dashboard/parent/HomeworkAssignments/AssignmentsFilter";
import AssignmentsList from "../../../components/dashboard/parent/HomeworkAssignments/AssignmentsList";

const HomeworkAssignments = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [acknowledgments, setAcknowledgments] = useState({});

  // Get assignments from centralized data
  const assignments = PARENT_DATA.homework?.assignments || [];

  const toggleAcknowledgment = (id) => {
    setAcknowledgments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    // In future, this will save to API
    console.log(`Acknowledgment toggled for assignment ${id}`);
  };

  const filteredAssignments = assignments.filter((assignment) => {
    const matchesFilter =
      activeFilter === "all" ||
      assignment.status.toLowerCase() === activeFilter;
    const matchesSearch =
      assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assignment.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const stats = {
    total: assignments.length,
    pending: assignments.filter((a) => a.status === "Pending").length,
    submitted: assignments.filter((a) => a.status === "Submitted").length,
    graded: assignments.filter((a) => a.status === "Graded").length,
  };

  const counts = {
    total: stats.total,
    pending: stats.pending,
    submitted: stats.submitted,
    graded: stats.graded,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-50 p-6">
      {/* Header Section with Gradient */}
      <div className="relative mb-8 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 p-8 text-white shadow-2xl overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
              <BookOpen size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Homework & Assignments</h1>
              <p className="text-white/90 text-sm">
                Monitor workload and track submissions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <AssignmentStats stats={stats} />

      {/* Filters and Search */}
      <AssignmentsFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        counts={counts}
      />

      {/* Assignments List */}
      <AssignmentsList
        assignments={filteredAssignments}
        acknowledgments={acknowledgments}
        toggleAcknowledgment={toggleAcknowledgment}
      />
    </div>
  );
};

export default HomeworkAssignments;
