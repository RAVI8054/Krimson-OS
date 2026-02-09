import React from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import { authService } from "../../../services/authService";
import HomeHeader from "../../../components/dashboard/student/HomeDashboard/HomeHeader";
import QuickActions from "../../../components/dashboard/student/HomeDashboard/QuickActions";
import TimetableWidget from "../../../components/dashboard/student/HomeDashboard/TimetableWidget";
import AssignmentsWidget from "../../../components/dashboard/student/HomeDashboard/AssignmentsWidget";
import AttendanceCard from "../../../components/dashboard/student/HomeDashboard/AttendanceCard";
import ExamCountdownCard from "../../../components/dashboard/student/HomeDashboard/ExamCountdownCard";
import AchievementsCard from "../../../components/dashboard/student/HomeDashboard/AchievementsCard";
import RecentNotifications from "../../../components/dashboard/student/HomeDashboard/RecentNotifications";

const HomeDashboard = () => {
  const { dashboard } = STUDENT_DATA;
  const user = authService.getCurrentUser() || STUDENT_DATA.user;

  return (
    <div className="space-y-6">
      {/* Enhanced Hero Banner with Achievement Badges */}
      <HomeHeader user={user} dashboard={dashboard} />

      {/* Quick Actions Grid */}
      <QuickActions actions={dashboard.quickActions} />

      {/* Today's Schedule and Homework */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TimetableWidget timetable={dashboard.todayTimetable} />
        <AssignmentsWidget homework={dashboard.todayHomework} />
      </div>

      {/* Stats Grid - Attendance, Exam Countdown, Achievement Badges */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AttendanceCard attendance={user.attendance} />
        <ExamCountdownCard upcomingExams={dashboard.upcomingExams} />
        <AchievementsCard badges={dashboard.achievementBadges} />
      </div>

      {/* Enhanced Notifications */}
      <RecentNotifications notifications={dashboard.notifications} />
    </div>
  );
};

export default HomeDashboard;
