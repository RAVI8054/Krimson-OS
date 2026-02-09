import React, { useState } from "react";
import Header from "../../../components/dashboard/management/OperationalEfficiency/Header";
import StatsOverview from "../../../components/dashboard/management/OperationalEfficiency/StatsOverview";
import TeacherStudentRatio from "../../../components/dashboard/management/OperationalEfficiency/TeacherStudentRatio";
import LessonPlanSubmission from "../../../components/dashboard/management/OperationalEfficiency/LessonPlanSubmission";
import FeedbackTime from "../../../components/dashboard/management/OperationalEfficiency/FeedbackTime";
import ParentCommunication from "../../../components/dashboard/management/OperationalEfficiency/ParentCommunication";
import ResourceUtilization from "../../../components/dashboard/management/OperationalEfficiency/ResourceUtilization";
import { MANAGEMENT_DATA } from "../../../data/managementData";

/**
 * Screen 5: Operational Efficiency Monitor
 * Purpose: Evaluate school process efficiency and resource utilization
 * KPIs:
 * - Teacher-to-Student Ratio (target vs actual)
 * - Average Lesson Plan Submission Rate
 * - Assignment Feedback Time (avg days)
 * - Parent Communication Response Time
 * - Resource Utilization (Labs, Rooms, Equipment)
 * Integration: Lesson Plan API + HR Module + Resource Management Database
 * Outcome: Data-backed performance metrics for operational governance meetings
 */

const OperationalEfficiency = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const { operationalEfficiency } = MANAGEMENT_DATA;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <Header />

        {/* Stats Overview */}
        <StatsOverview stats={operationalEfficiency.stats} />

        {/* Teacher-to-Student Ratio */}
        <TeacherStudentRatio data={operationalEfficiency.teacherStudentRatio} />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Lesson Plan Submission Rate */}
          <LessonPlanSubmission
            data={operationalEfficiency.lessonPlanSubmission}
          />

          {/* Assignment Feedback Time */}
          <FeedbackTime data={operationalEfficiency.feedbackTime} />
        </div>

        {/* Parent Communication Response Time */}
        <ParentCommunication data={operationalEfficiency.parentCommunication} />

        {/* Resource Utilization */}
        <ResourceUtilization data={operationalEfficiency.resourceUtilization} />
      </div>
    </div>
  );
};

export default OperationalEfficiency;
