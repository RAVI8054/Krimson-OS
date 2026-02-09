import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import HomeHeader from "../../../components/dashboard/teacher/HomeDashboard/HomeHeader";
import StatsGrid from "../../../components/dashboard/teacher/HomeDashboard/StatsGrid";
import ClassesTodayWidget from "../../../components/dashboard/teacher/HomeDashboard/ClassesTodayWidget";
import AlertsSection from "../../../components/dashboard/teacher/HomeDashboard/AlertsSection";
import AttendanceToMark from "../../../components/dashboard/teacher/HomeDashboard/AttendanceToMark";
import QuickActions from "../../../components/dashboard/teacher/HomeDashboard/QuickActions";

const HomeDashboard = () => {
  const { dashboard, user, quickActions } = TEACHER_DATA;
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Format time
  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  // Format date
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Mock API call - to be replaced with actual API
  useEffect(() => {
    console.log("Dashboard loaded - Ready for API integration");
  }, []);

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Home Header */}
      <HomeHeader
        userName={user.name.split(" ")[1]}
        currentDate={formatDate(currentTime)}
        currentTime={formatTime(currentTime)}
        classesCount={dashboard.classesToday.length}
      />

      {/* Stats Grid */}
      <StatsGrid dashboard={dashboard} />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Classes Today Widget */}
        <ClassesTodayWidget classes={dashboard.classesToday} />

        {/* Right Sidebar - Alerts & Actions */}
        <AlertsSection
          pendingCount={dashboard.pendingAssignments}
          alerts={dashboard.alerts}
        />
      </div>

      {/* Attendance to Mark Section */}
      <AttendanceToMark
        pendingClass={dashboard.classesToday[0]} // Passing first class as pending for demo
      />

      {/* Quick Actions Bar */}
      <QuickActions actions={quickActions} />
    </div>
  );
};

export default HomeDashboard;
