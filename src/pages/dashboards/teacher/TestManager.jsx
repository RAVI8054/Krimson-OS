import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import TestHeader from "../../../components/dashboard/teacher/TestManager/TestHeader";
import QuestionBankWidget from "../../../components/dashboard/teacher/TestManager/QuestionBankWidget";
import TestStats from "../../../components/dashboard/teacher/TestManager/TestStats";
import TestFilters from "../../../components/dashboard/teacher/TestManager/TestFilters";
import TestCard from "../../../components/dashboard/teacher/TestManager/TestCard";
import EmptyState from "../../../components/dashboard/teacher/TestManager/EmptyState";
import TestGradingModal from "../../../components/dashboard/teacher/TestManager/TestGradingModal";

const TestManager = () => {
  // States mapped from TEACHER_DATA for API readiness
  const [tests, setTests] = useState(TEACHER_DATA.tests || []);
  const [questionBank, setQuestionBank] = useState(
    TEACHER_DATA.questionBank || {},
  );

  const [selectedTest, setSelectedTest] = useState(null);
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter logic
  const filteredTests = tests.filter((test) => {
    if (filterType !== "all" && test.type !== filterType) return false;
    if (filterStatus !== "all" && test.status !== filterStatus) return false;
    if (searchQuery) {
      return (
        test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        test.class.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return true;
  });

  // Statistics calculation
  const stats = {
    total: tests.length,
    scheduled: tests.filter((t) => t.status === "scheduled").length,
    live: tests.filter((t) => t.status === "live").length,
    grading: tests.filter((t) => t.status === "grading").length,
  };

  // API Integration Ready - Effect for fetching data
  useEffect(() => {
    // Placeholder for actual API call
    // const fetchTestData = async () => {
    //   try {
    //     const response = await fetch('/api/teacher/tests');
    //     const data = await response.json();
    //     setTests(data.tests);
    //     setQuestionBank(data.questionBank);
    //   } catch (error) {
    //     console.error("Error fetching test data:", error);
    //   }
    // };
    // fetchTestData();
    console.log("Test Manager loaded - Ready for API integration");
  }, []);

  return (
    <div className="space-y-6 md:space-y-8 animate-fadeIn pb-10">
      {/* Header Section */}
      <TestHeader stats={stats} />

      {/* Question Bank Widget */}
      <QuestionBankWidget questionBank={questionBank} />

      {/* Quick Stats Summary */}
      <TestStats stats={stats} />

      {/* Search and Filters */}
      <TestFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterType={filterType}
        setFilterType={setFilterType}
      />

      {/* Test Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTests.map((test) => (
          <TestCard key={test.id} test={test} onSelect={setSelectedTest} />
        ))}
      </div>

      {/* Empty State when no tests match */}
      {filteredTests.length === 0 && (
        <EmptyState
          searchQuery={searchQuery}
          filterType={filterType}
          filterStatus={filterStatus}
        />
      )}

      {/* Grading Detail Modal */}
      <TestGradingModal
        selectedTest={selectedTest}
        onClose={() => setSelectedTest(null)}
      />
    </div>
  );
};

export default TestManager;
