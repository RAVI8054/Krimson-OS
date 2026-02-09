import React from "react";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { PARENT_DATA } from "../../../data/parentData";
import WelcomeBanner from "../../../components/dashboard/parent/HomeDashboard/WelcomeBanner";
import QuickActions from "../../../components/dashboard/parent/HomeDashboard/QuickActions";
import AttendanceWidget from "../../../components/dashboard/parent/HomeDashboard/AttendanceWidget";
import FeeStatusWidget from "../../../components/dashboard/parent/HomeDashboard/FeeStatusWidget";
import UpcomingExamsWidget from "../../../components/dashboard/parent/HomeDashboard/UpcomingExamsWidget";
import TeacherRemarks from "../../../components/dashboard/parent/HomeDashboard/TeacherRemarks";
import UpcomingAssignments from "../../../components/dashboard/parent/HomeDashboard/UpcomingAssignments";

/**
 * Parent Home Dashboard - Screen 1
 * Purpose: Single-view summary of child's academic, behavioral, and financial status
 * Features: Attendance, Upcoming Exams, Fee Status, Teacher Remarks, Quick Links
 * Future: Replace static data with Student Database + Attendance API + Finance Module
 */
const HomeDashboard = () => {
  const { user: authUser } = useSelector((state) => state.auth);
  const { children, widgets } = PARENT_DATA;
  const { selectedChildIndex } = useOutletContext();
  const activeChild = children[selectedChildIndex] || children[0];

  // Fallback to static data if authUser is not available (dev mode/unauthenticated preview)
  const userName = authUser?.name || PARENT_DATA.user.name;

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <WelcomeBanner userName={userName} activeChildName={activeChild.name} />

      {/* Quick Action Links */}
      <QuickActions />

      {/* Main Widgets Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Attendance Widget */}
        <AttendanceWidget attendance={activeChild.attendance} />

        {/* Fee Payment Status */}
        <FeeStatusWidget fees={widgets.fees} />

        {/* Upcoming Exams */}
        <UpcomingExamsWidget exams={widgets.exams} />
      </div>

      {/* Teacher Remarks & Upcoming Assignments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Teacher Remarks */}
        <TeacherRemarks remarks={widgets.remarks} />

        {/* Upcoming Assignments */}
        <UpcomingAssignments assignments={widgets.assignments} />
      </div>
    </div>
  );
};

export default HomeDashboard;
