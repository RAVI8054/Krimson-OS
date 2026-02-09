import React, { useState } from "react";
import Header from "../../../components/dashboard/management/InstitutionalOverview/Header";
import RealTimeAlerts from "../../../components/dashboard/management/InstitutionalOverview/RealTimeAlerts";
import KPICards from "../../../components/dashboard/management/InstitutionalOverview/KPICards";
import FeeCollection from "../../../components/dashboard/management/InstitutionalOverview/FeeCollection";
import DepartmentPerformance from "../../../components/dashboard/management/InstitutionalOverview/DepartmentPerformance";
import GradeWiseSummary from "../../../components/dashboard/management/InstitutionalOverview/GradeWiseSummary";
import { MANAGEMENT_DATA } from "../../../data/managementData";

/**
 * Screen 1: Institutional Overview Dashboard
 * Purpose: Provide complete institutional performance summary for leadership
 * Key Widgets:
 * - Total Student Strength (Current/Target)
 * - Faculty Strength and Retention Rate
 * - Average Attendance (Term-to-Date)
 * - Academic Performance Index (Average %)
 * - Fee Collection Efficiency (Collected vs Expected)
 * - Real-Time Alerts: departments below target, compliance pending
 * Integration: Core Aggregation API + Academic, Finance, and HR Modules
 * Design: Executive analytics style with clean panels, infographics, and traffic-light KPIs
 */

const InstitutionalOverview = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("current"); // current, ytd, quarterly
  const { institutionalOverview } = MANAGEMENT_DATA;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <Header />

        {/* Real-Time Alerts */}
        <RealTimeAlerts alerts={institutionalOverview.realTimeAlerts} />

        {/* Key Performance Indicators with Traffic Lights */}
        <KPICards metrics={institutionalOverview.kpiMetrics} />

        {/* Fee Collection Efficiency */}
        <FeeCollection data={institutionalOverview.feeCollection} />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Department Performance */}
          <DepartmentPerformance
            departments={institutionalOverview.departmentPerformance}
          />

          {/* Grade-wise Summary */}
          <GradeWiseSummary summary={institutionalOverview.gradeWiseSummary} />
        </div>
      </div>
    </div>
  );
};

export default InstitutionalOverview;
