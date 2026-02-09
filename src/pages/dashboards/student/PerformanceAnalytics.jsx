import React from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import OverallPerformanceCard from "../../../components/dashboard/student/PerformanceAnalytics/OverallPerformanceCard";
import AcademicGrowthChart from "../../../components/dashboard/student/PerformanceAnalytics/AcademicGrowthChart";
import SubjectStrengthRadar from "../../../components/dashboard/student/PerformanceAnalytics/SubjectStrengthRadar";
import AIStudyCompanion from "../../../components/dashboard/student/PerformanceAnalytics/AIStudyCompanion";
import AnecdotalReports from "../../../components/dashboard/student/PerformanceAnalytics/AnecdotalReports";

const PerformanceAnalytics = () => {
  const { analytics, analyticsFocusArea } = STUDENT_DATA;

  return (
    <div className="space-y-8">
      {/* 1. Academic Growth & Rank Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Class Rank Card */}
        <OverallPerformanceCard
          grade={analytics.grade}
          percentile={analytics.percentile}
          gpa={analytics.gpa}
        />

        {/* Academic Growth Line Chart */}
        <AcademicGrowthChart data={analytics.academicGrowth} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 2. Strength & Weakness Radar Chart */}
        <SubjectStrengthRadar data={analytics.subjectStrengths} />

        {/* 3. AI Study Tips */}
        <AIStudyCompanion
          tips={analytics.aiStudyTips}
          focusArea={analyticsFocusArea}
        />
      </div>

      {/* 4. Enhanced Anecdotal Reports Section */}
      <AnecdotalReports reports={analytics.anecdotalReports} />
    </div>
  );
};

export default PerformanceAnalytics;
