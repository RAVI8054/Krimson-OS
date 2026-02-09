import React, { useState } from "react";
import { MANAGEMENT_DATA } from "../../../data/managementData";
import AcademicOutcomesHeader from "../../../components/dashboard/management/AcademicOutcome/AcademicOutcomesHeader";
import StatsOverview from "../../../components/dashboard/management/AcademicOutcome/StatsOverview";
import SubjectClusterPerformance from "../../../components/dashboard/management/AcademicOutcome/SubjectClusterPerformance";
import PerformanceDistribution from "../../../components/dashboard/management/AcademicOutcome/PerformanceDistribution";
import GradePassRates from "../../../components/dashboard/management/AcademicOutcome/GradePassRates";
import YoYImprovement from "../../../components/dashboard/management/AcademicOutcome/YoYImprovement";
import SubjectWisePerformance from "../../../components/dashboard/management/AcademicOutcome/SubjectWisePerformance";

/**
 * Screen 2: Academic & Learning Outcomes Dashboard
 * Purpose: Present academic success trends and comparative results across terms
 * Features:
 * - Performance graph by subject cluster (STEM, Humanities, Languages)
 * - Student Performance Distribution (Top 10%, Mid 50%, Bottom 10%)
 * - Pass % by Grade Level
 * - Year-on-Year Improvement line chart
 * - Quick link to Principal's analysis reports
 * Integration: Evaluation Engine + Reporting API
 * Output: Clear, quantifiable academic insights for board discussion
 */

const AcademicOutcomes = () => {
  const [selectedTerm, setSelectedTerm] = useState("current"); // current, term1, term2, term3
  // Check if academic data exists, if not use a fallback or display error (though here we assume it exists as we just added it)
  const academic = MANAGEMENT_DATA.academic || {};

  // If data is missing (e.g. initial render before data load if it was async, but here it is static), handle gracefully
  if (!academic.stats) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <AcademicOutcomesHeader />

        {/* Stats Overview */}
        <StatsOverview stats={academic.stats} />

        {/* Subject Cluster Performance */}
        <SubjectClusterPerformance clusters={academic.subjectClusters} />

        {/* Student Performance Distribution */}
        <PerformanceDistribution
          distribution={academic.performanceDistribution}
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Pass % by Grade Level */}
          <GradePassRates gradePassRates={academic.gradePassRates} />

          {/* Year-on-Year Improvement */}
          <YoYImprovement yoyImprovement={academic.yoyImprovement} />
        </div>

        {/* Subject-wise Detailed Performance */}
        <SubjectWisePerformance
          subjectPerformance={academic.subjectPerformance}
        />
      </div>
    </div>
  );
};

export default AcademicOutcomes;
