import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import ReflectionHeader from "../../../components/dashboard/teacher/ReflectionJournal/ReflectionHeader";
import AIPoweredInsights from "../../../components/dashboard/teacher/ReflectionJournal/AIPoweredInsights";
import JournalStats from "../../../components/dashboard/teacher/ReflectionJournal/JournalStats";
import RecentReflections from "../../../components/dashboard/teacher/ReflectionJournal/RecentReflections";
import WeeklyReportModal from "../../../components/dashboard/teacher/ReflectionJournal/WeeklyReportModal";
import ReflectionDetailModal from "../../../components/dashboard/teacher/ReflectionJournal/ReflectionDetailModal";

const ReflectionJournal = () => {
  // Reflections data mapped from TEACHER_DATA
  const [reflections] = useState(TEACHER_DATA.reflections);
  const [analytics] = useState(TEACHER_DATA.journalAnalytics);
  const [weeklyReport] = useState(TEACHER_DATA.journalWeeklyReport);

  const [selectedReflection, setSelectedReflection] = useState(null);
  const [showNewEntry, setShowNewEntry] = useState(false);
  const [showWeeklyReport, setShowWeeklyReport] = useState(false);

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    console.log("Reflection Journal loaded - Ready for API integration");
  }, []);

  // Get engagement color
  const getEngagementColor = (score) => {
    if (score >= 85) return "text-green-600 bg-green-100";
    if (score >= 70) return "text-blue-600 bg-blue-100";
    if (score >= 60) return "text-orange-600 bg-orange-100";
    return "text-red-600 bg-red-100";
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section */}
      <ReflectionHeader
        showWeeklyReport={showWeeklyReport}
        setShowWeeklyReport={setShowWeeklyReport}
        showNewEntry={showNewEntry}
        setShowNewEntry={setShowNewEntry}
      />

      {/* Auto-Suggested Analytics */}
      <AIPoweredInsights analytics={analytics} />

      {/* Quick Stats */}
      <JournalStats reflections={reflections} analytics={analytics} />

      {/* Recent Reflections */}
      <RecentReflections
        reflections={reflections}
        setSelectedReflection={setSelectedReflection}
        getEngagementColor={getEngagementColor}
      />

      {/* Weekly Report Modal */}
      <WeeklyReportModal
        showWeeklyReport={showWeeklyReport}
        setShowWeeklyReport={setShowWeeklyReport}
        weeklyReport={weeklyReport}
      />

      {/* Reflection Detail Modal */}
      <ReflectionDetailModal
        selectedReflection={selectedReflection}
        setSelectedReflection={setSelectedReflection}
      />
    </div>
  );
};

export default ReflectionJournal;
