import React, { useState } from "react";
import Header from "../../../components/dashboard/management/StrategicPlanning/Header";
import StatsOverview from "../../../components/dashboard/management/StrategicPlanning/StatsOverview";
import AiInsights from "../../../components/dashboard/management/StrategicPlanning/AiInsights";
import AnnualTargets from "../../../components/dashboard/management/StrategicPlanning/AnnualTargets";
import TrendProjection from "../../../components/dashboard/management/StrategicPlanning/TrendProjection";
import InitiativeTracker from "../../../components/dashboard/management/StrategicPlanning/InitiativeTracker";
import { MANAGEMENT_DATA } from "../../../data/managementData";

/**
 * Screen 7: Strategic Planning & Vision Alignment
 * Purpose: Link measurable school data to long-term strategic goals
 * Features:
 * - Annual Targets vs Actual (Enrollment, Results, Finance)
 * - 3-Year Trend Projection (Growth %)
 * - Initiative Tracker (New Campus, New Curriculum, etc.)
 * - AI-powered Insights and recommendations
 * - Export meeting reports in PDF format for board circulation
 * Integration: Analytics Engine + Strategic KPI Database
 * Outcome: Data-driven governance ensuring alignment with institutional mission
 */

const StrategicPlanning = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const { strategicPlanning } = MANAGEMENT_DATA;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <Header />

        {/* Stats Overview */}
        <StatsOverview stats={strategicPlanning.stats} />

        {/* AI-Powered Insights */}
        <AiInsights insights={strategicPlanning.aiInsights} />

        {/* Annual Targets vs Actual */}
        <AnnualTargets targets={strategicPlanning.annualTargets} />

        {/* 3-Year Trend Projection */}
        <TrendProjection projection={strategicPlanning.trendProjection} />

        {/* Initiative Tracker */}
        <InitiativeTracker initiatives={strategicPlanning.initiatives} />
      </div>
    </div>
  );
};

export default StrategicPlanning;
