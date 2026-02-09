import React, { useState } from "react";
import { MANAGEMENT_DATA } from "../../../data/managementData";
import AdmissionsHeader from "../../../components/dashboard/management/AdmissionsGrowth/AdmissionsHeader";
import AdmissionStats from "../../../components/dashboard/management/AdmissionsGrowth/AdmissionStats";
import FunnelChart from "../../../components/dashboard/management/AdmissionsGrowth/FunnelChart";
import RetentionRates from "../../../components/dashboard/management/AdmissionsGrowth/RetentionRates";
import CapacityUtilization from "../../../components/dashboard/management/AdmissionsGrowth/CapacityUtilization";
import Demographics from "../../../components/dashboard/management/AdmissionsGrowth/Demographics";
import PredictiveIntake from "../../../components/dashboard/management/AdmissionsGrowth/PredictiveIntake";

/**
 * Screen 3: Admissions & Growth Analytics
 * Purpose: Visualize student intake, retention, and demographic distribution
 * Widgets:
 * - Admissions Conversion Funnel (Inquiry → Enrolled)
 * - Retention Rate (%) across grades
 * - Demographics by nationality, gender, and region
 * - Capacity Utilization (Seats filled vs available)
 * - Predictive intake trend for next academic year
 * Integration: Admissions Module + Student Database + Predictive Analytics Engine
 * Outcome: Data to support expansion planning and marketing decisions
 */

const AdmissionsGrowth = () => {
  const [selectedYear, setSelectedYear] = useState("2024");

  // Use fallback in case data is missing
  const admissions = MANAGEMENT_DATA.admissions || {};

  if (!admissions.stats) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <AdmissionsHeader />

        {/* Stats Overview */}
        <AdmissionStats stats={admissions.stats} />

        {/* Admissions Conversion Funnel */}
        <FunnelChart data={admissions.conversionFunnel} />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Retention Rate across Grades */}
          <RetentionRates data={admissions.retentionRates} />

          {/* Capacity Utilization */}
          <CapacityUtilization data={admissions.capacityUtilization} />
        </div>

        {/* Demographics */}
        <Demographics demographics={admissions.demographics} />

        {/* Predictive Intake Trend */}
        <PredictiveIntake data={admissions.predictiveIntake} />
      </div>
    </div>
  );
};

export default AdmissionsGrowth;
