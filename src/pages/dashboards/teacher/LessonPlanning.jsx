import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import LessonPlanningHeader from "../../../components/dashboard/teacher/LessonPlanning/LessonPlanningHeader";
import LessonStats from "../../../components/dashboard/teacher/LessonPlanning/LessonStats";
import AILessonAssistant from "../../../components/dashboard/teacher/LessonPlanning/AILessonAssistant";
import WeeklySchedule from "../../../components/dashboard/teacher/LessonPlanning/WeeklySchedule";
import LessonDetailModal from "../../../components/dashboard/teacher/LessonPlanning/LessonDetailModal";

const LessonPlanning = () => {
  const { lessons, user, lessonPlanner } = TEACHER_DATA;
  const [selectedDay, setSelectedDay] = useState("monday");
  const [expandedLesson, setExpandedLesson] = useState(null);
  const [currentWeek, setCurrentWeek] = useState(lessonPlanner.currentWeek);

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    console.log("Lesson Planning loaded - Ready for API integration");
  }, []);

  const weekDays = lessonPlanner.weekDays;

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "Taught":
        return "from-green-400 to-emerald-500";
      case "Pending":
        return "from-orange-400 to-amber-500";
      default:
        return "from-blue-400 to-cyan-500";
    }
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "Taught":
        return "bg-green-100 text-green-700 border-green-200";
      case "Pending":
        return "bg-orange-100 text-orange-700 border-orange-200";
      default:
        return "bg-blue-100 text-blue-700 border-blue-200";
    }
  };

  // Toggle lesson details
  const toggleLesson = (lessonId) => {
    setExpandedLesson(expandedLesson === lessonId ? null : lessonId);
  };

  // Count lessons by status
  const countByStatus = (status) => {
    return Object.values(lessons)
      .flat()
      .filter((l) => l.status === status).length;
  };

  const totalLessons = Object.values(lessons).flat().length;

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section */}
      <LessonPlanningHeader
        currentWeek={currentWeek}
        totalLessons={totalLessons}
      />

      {/* Quick Stats */}
      <LessonStats totalLessons={totalLessons} countByStatus={countByStatus} />

      {/* AI Assistant Card */}
      <AILessonAssistant
        aiSuggestions={lessons.monday[0]?.aiSuggestions || []}
      />

      {/* Weekly Planner Grid */}
      <WeeklySchedule
        lessons={lessons}
        weekDays={weekDays}
        user={user}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        expandedLesson={expandedLesson}
        toggleLesson={toggleLesson}
        getStatusBadgeColor={getStatusBadgeColor}
        getStatusColor={getStatusColor}
      />

      {/* Expanded Lesson Details Modal/Panel */}
      <LessonDetailModal
        lessons={lessons}
        expandedLesson={expandedLesson}
        setExpandedLesson={setExpandedLesson}
        getStatusColor={getStatusColor}
        getStatusBadgeColor={getStatusBadgeColor}
      />
    </div>
  );
};

export default LessonPlanning;
