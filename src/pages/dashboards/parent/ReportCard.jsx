import React, { useState } from "react";
import { PARENT_DATA } from "../../../data/parentData";
import ReportCardHeader from "../../../components/dashboard/parent/ReportCard/ReportCardHeader";
import AcademicGrowthCard from "../../../components/dashboard/parent/ReportCard/AcademicGrowthCard";
import QuickStatsGrid from "../../../components/dashboard/parent/ReportCard/QuickStatsGrid";
import PerformanceChart from "../../../components/dashboard/parent/ReportCard/PerformanceChart";
import CumulativeRecordTable from "../../../components/dashboard/parent/ReportCard/CumulativeRecordTable";
import DownloadableReports from "../../../components/dashboard/parent/ReportCard/DownloadableReports";
import AISummarySection from "../../../components/dashboard/parent/ReportCard/AISummarySection";

const ReportCard = () => {
  const [selectedYear, setSelectedYear] = useState("2025-2026");
  const {
    academicGrowth,
    quickStats,
    termPerformance,
    cumulativeRecord,
    parentSummaries,
    reportCards,
  } = PARENT_DATA.reportCardData || {};

  const handleDownload = (title) => {
    console.log(`Downloading: ${title}`);
    alert(`Downloading verified report: ${title}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-50 p-4 md:p-6 space-y-6">
      {/* Header Section */}
      <ReportCardHeader
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - Growth & Stats (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Main Growth Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* AGI Card */}
            <AcademicGrowthCard academicGrowth={academicGrowth} />

            {/* Quick Stats Grid */}
            <QuickStatsGrid quickStats={quickStats} />
          </div>

          {/* Historical Performance Chart */}
          <PerformanceChart termPerformance={termPerformance} />

          {/* Cumulative Record Table */}
          <CumulativeRecordTable cumulativeRecord={cumulativeRecord} />
        </div>

        {/* Right Column - Downloadable Reports (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <DownloadableReports
            reportCards={reportCards}
            onDownload={handleDownload}
          />
        </div>
      </div>

      {/* Parent-Readable AI Summaries Section - Enhanced Premium Version - FULL WIDTH */}
      <AISummarySection parentSummaries={parentSummaries} />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ReportCard;
