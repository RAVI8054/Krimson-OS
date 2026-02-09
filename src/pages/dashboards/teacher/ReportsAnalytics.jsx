import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";
import ReportsHeader from "../../../components/dashboard/teacher/ReportsAnalytics/ReportsHeader";
import BenchmarkComparison from "../../../components/dashboard/teacher/ReportsAnalytics/BenchmarkComparison";
import ReportsStats from "../../../components/dashboard/teacher/ReportsAnalytics/ReportsStats";
import ClassPerformanceCharts from "../../../components/dashboard/teacher/ReportsAnalytics/ClassPerformanceCharts";
import AssignmentTrendChart from "../../../components/dashboard/teacher/ReportsAnalytics/AssignmentTrendChart";
import StudentPerformanceLists from "../../../components/dashboard/teacher/ReportsAnalytics/StudentPerformanceLists";
import ExportOptions from "../../../components/dashboard/teacher/ReportsAnalytics/ExportOptions";

const ReportsAnalytics = () => {
  // Sample analytics data mapped from TEACHER_DATA
  const [classPerformance] = useState(TEACHER_DATA.reports.classPerformance);
  const [assignmentTrend] = useState(TEACHER_DATA.reports.assignmentTrend);
  const [topPerformers] = useState(TEACHER_DATA.reports.topStudents);
  const [bottomPerformers] = useState(TEACHER_DATA.reports.atRiskStudents);
  const [benchmark] = useState(TEACHER_DATA.reports.benchmark);

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    console.log("Reports & Analytics loaded - Ready for API integration");
  }, []);

  // Calculate overall statistics
  const overallStats = {
    totalStudents: classPerformance.reduce((sum, c) => sum + c.students, 0),
    avgTermScore: (
      classPerformance.reduce((sum, c) => sum + c.termAvg, 0) /
      classPerformance.length
    ).toFixed(1),
    avgAttendance: (
      classPerformance.reduce((sum, c) => sum + c.attendance, 0) /
      classPerformance.length
    ).toFixed(1),
    avgCompletion: (
      classPerformance.reduce((sum, c) => sum + c.assignmentCompletion, 0) /
      classPerformance.length
    ).toFixed(1),
  };

  // Get trend color
  const getTrendColor = (trend) => {
    switch (trend) {
      case "improving":
        return "text-green-600";
      case "declining":
        return "text-red-600";
      default:
        return "text-slate-600";
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case "improving":
        return <TrendingUp size={14} />;
      case "declining":
        return <TrendingDown size={14} />;
      default:
        return <Activity size={14} />;
    }
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section */}
      <ReportsHeader
        totalStudents={overallStats.totalStudents}
        classCount={classPerformance.length}
      />

      {/* Benchmark Comparison */}
      <BenchmarkComparison benchmark={benchmark} />

      {/* Quick Stats */}
      <ReportsStats overallStats={overallStats} />

      {/* Class Performance Graphs */}
      <ClassPerformanceCharts classPerformance={classPerformance} />

      {/* Assignment Completion Trendline */}
      <AssignmentTrendChart assignmentTrend={assignmentTrend} />

      {/* Top and Bottom Performers */}
      <StudentPerformanceLists
        topPerformers={topPerformers}
        bottomPerformers={bottomPerformers}
        getTrendColor={getTrendColor}
        getTrendIcon={getTrendIcon}
      />

      {/* Export Options Card */}
      <ExportOptions />
    </div>
  );
};

export default ReportsAnalytics;
