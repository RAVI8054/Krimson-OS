import React, { useState } from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import {
  TrendingUp,
  Target,
  Award,
  Lightbulb,
  FileText,
  Filter,
  X,
} from "lucide-react";

const PerformanceAnalytics = () => {
  const { analytics, analyticsFocusArea } = STUDENT_DATA;

  // State for anecdotal reports filtering and modal
  const [reportFilter, setReportFilter] = useState("all");
  const [selectedReport, setSelectedReport] = useState(null);

  // --- SVG Radar Chart Helpers ---
  const radarRadius = 100;
  const radarCenter = 120;
  const angleSlice = (Math.PI * 2) / analytics.subjectStrengths.length;

  const getCoordinates = (value, index) => {
    const angle = index * angleSlice - Math.PI / 2;
    const r = (value / 100) * radarRadius;
    return {
      x: radarCenter + r * Math.cos(angle),
      y: radarCenter + r * Math.sin(angle),
    };
  };

  const radarPoints = analytics.subjectStrengths
    .map((s, i) => {
      const { x, y } = getCoordinates(s.score, i);
      return `${x},${y}`;
    })
    .join(" ");

  const bgRadarPoints = analytics.subjectStrengths
    .map((s, i) => {
      const { x, y } = getCoordinates(100, i); // Full scale for background
      return `${x},${y}`;
    })
    .join(" ");

  // Filter anecdotal reports by category (subject-wise)
  const filteredReports =
    reportFilter === "all"
      ? analytics.anecdotalReports
      : analytics.anecdotalReports.filter(
          (report) => report.category === reportFilter,
        );

  // Get unique categories for filter options
  const categories = [
    "all",
    ...new Set(analytics.anecdotalReports.map((r) => r.category)),
  ];

  // --- SVG Line Chart Helpers ---
  const chartHeight = 200;
  const chartWidth = 500;
  const chartPadding = 40;

  // Scales
  const getX = (index) =>
    chartPadding +
    (index / (analytics.academicGrowth.length - 1)) *
      (chartWidth - 2 * chartPadding);
  const getY = (value) =>
    chartHeight -
    chartPadding -
    (value / 100) * (chartHeight - 2 * chartPadding);

  const createPath = (key) => {
    return analytics.academicGrowth
      .map((d, i) => {
        return `${i === 0 ? "M" : "L"} ${getX(i)} ${getY(d[key])}`;
      })
      .join(" ");
  };

  return (
    <div className="space-y-8">
      {/* 1. Academic Growth & Rank Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Class Rank Card */}
        <div className="bg-white p-6 rounded-3xl shadow-sm text-center flex flex-col items-center justify-center">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full border-4 border-indigo-100 flex items-center justify-center">
              <div className="text-4xl font-extrabold text-indigo-600">
                {analytics.grade}
              </div>
            </div>
            <div className="absolute -bottom-2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              {analytics.percentile}
            </div>
          </div>
          <p className="text-slate-500 font-bold">Overall Grade</p>
          <p className="text-xs text-slate-400 mt-1">GPA: {analytics.gpa}</p>
        </div>

        {/* Academic Growth Line Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800">
                Academic Growth
              </h3>
              <p className="text-xs text-slate-500">
                Subject-wise performance over terms
              </p>
            </div>
            <div className="flex gap-4 text-xs font-bold">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span> Math
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>{" "}
                Science
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>{" "}
                English
              </div>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className="w-full min-w-[500px]"
            >
              {/* Grid Lines */}
              {[20, 40, 60, 80, 100].map((val) => (
                <line
                  key={val}
                  x1={chartPadding}
                  y1={getY(val)}
                  x2={chartWidth - chartPadding}
                  y2={getY(val)}
                  stroke="#e2e8f0"
                  strokeDasharray="4"
                />
              ))}

              {/* Lines */}
              <path
                d={createPath("math")}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d={createPath("science")}
                fill="none"
                stroke="#22c55e"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d={createPath("english")}
                fill="none"
                stroke="#a855f7"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Dots */}
              {analytics.academicGrowth.map((d, i) => (
                <g key={i}>
                  <circle
                    cx={getX(i)}
                    cy={getY(d.math)}
                    r="4"
                    fill="white"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <circle
                    cx={getX(i)}
                    cy={getY(d.science)}
                    r="4"
                    fill="white"
                    stroke="#22c55e"
                    strokeWidth="2"
                  />
                  <circle
                    cx={getX(i)}
                    cy={getY(d.english)}
                    r="4"
                    fill="white"
                    stroke="#a855f7"
                    strokeWidth="2"
                  />
                  {/* X-Axis Labels */}
                  <text
                    x={getX(i)}
                    y={chartHeight - 10}
                    textAnchor="middle"
                    fontSize="10"
                    fill="#64748b"
                    fontWeight="bold"
                  >
                    {d.term}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 2. Strength & Weakness Radar Chart */}
        <div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col items-center">
          <h3 className="font-bold text-slate-800 mb-2 self-start">
            Subject Strength Radar
          </h3>
          <div className="relative w-64 h-64 my-4">
            <svg viewBox="0 0 240 240" className="w-full h-full">
              {/* Background Polygon */}
              <polygon
                points={bgRadarPoints}
                fill="#f8fafc"
                stroke="#e2e8f0"
                strokeWidth="1"
              />
              {/* Grid Levels */}
              {[0.25, 0.5, 0.75].map((scale) => (
                <polygon
                  key={scale}
                  points={analytics.subjectStrengths
                    .map((s, i) => {
                      const { x, y } = getCoordinates(100 * scale, i);
                      return `${x},${y}`;
                    })
                    .join(" ")}
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="0.5"
                  strokeDasharray="4"
                />
              ))}

              {/* Data Polygon */}
              <polygon
                points={radarPoints}
                fill="rgba(99, 102, 241, 0.2)"
                stroke="#6366f1"
                strokeWidth="2"
              />

              {/* Labels */}
              {analytics.subjectStrengths.map((s, i) => {
                const { x, y } = getCoordinates(115, i);
                return (
                  <text
                    key={s.subject}
                    x={x}
                    y={y}
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fontSize="10"
                    fontWeight="bold"
                    fill="#64748b"
                  >
                    {s.subject}
                  </text>
                );
              })}
            </svg>
          </div>
          <p className="text-xs text-slate-500 text-center italic">
            Visualization of performance across core disciplines.
          </p>
        </div>

        {/* 3. AI Study Tips */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-3xl p-6 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                <Lightbulb size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">AI Study Companion</h3>
                <p className="text-xs opacity-80">
                  Personalized insights based on your gaps
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {analytics.aiStudyTips.map((tip) => (
                <div
                  key={tip.id}
                  className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10"
                >
                  <div className="flex justify-between items-start mb-1">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-lg bg-white/20 text-white`}
                    >
                      {tip.subject} • {tip.topic}
                    </span>
                  </div>
                  <p className="text-sm font-medium mb-3 leading-relaxed">
                    "{tip.tip}"
                  </p>
                  <button className="w-full py-2 bg-white text-violet-600 font-bold rounded-lg text-xs hover:bg-slate-50 transition-colors shadow-sm">
                    {tip.action} →
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`bg-${analyticsFocusArea.color}-50 border border-${analyticsFocusArea.color}-100 p-6 rounded-3xl`}
          >
            <h4
              className={`font-bold text-${analyticsFocusArea.color}-800 mb-2`}
            >
              Focus Area
            </h4>
            <p className={`text-sm text-${analyticsFocusArea.color}-700`}>
              {analyticsFocusArea.message}
            </p>
          </div>
        </div>
      </div>

      {/* 4. Enhanced Anecdotal Reports Section */}
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-3xl shadow-lg border border-indigo-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-2xl shadow-lg">
                <FileText className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Anecdotal Reports
                </h3>
                <p className="text-sm text-slate-600 font-medium">
                  Teacher observations & insights
                </p>
              </div>
            </div>
          </div>

          {/* Subject-wise Filter Dropdown */}
          <div className="relative">
            <div className="flex items-center gap-2 bg-white rounded-2xl px-5 py-3 shadow-md border border-indigo-200 hover:border-violet-400 transition-colors">
              <Filter size={18} className="text-violet-600" />
              <select
                value={reportFilter}
                onChange={(e) => setReportFilter(e.target.value)}
                className="bg-transparent text-sm font-bold text-slate-800 outline-none cursor-pointer pr-2"
              >
                <option value="all">
                  All Subjects ({analytics.anecdotalReports.length})
                </option>
                {categories
                  .filter((c) => c !== "all")
                  .map((category) => (
                    <option key={category} value={category}>
                      {category} (
                      {
                        analytics.anecdotalReports.filter(
                          (r) => r.category === category,
                        ).length
                      }
                      )
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>

        {/* Compact Reports Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredReports.map((report) => {
            const typeColors = {
              subject: "from-blue-500 to-cyan-500",
              lab: "from-purple-500 to-pink-500",
              behavior: "from-indigo-500 to-violet-500",
            };

            return (
              <div
                key={report.id}
                className="group bg-white rounded-2xl p-5 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 hover:border-violet-200"
              >
                {/* Report Title */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className={`h-1 w-12 rounded-full bg-gradient-to-r ${typeColors[report.type]}`}
                    ></div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {report.type}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-800 text-base leading-tight mb-2 line-clamp-2 group-hover:text-violet-600 transition-colors">
                    {report.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-semibold">
                    {report.category}
                  </p>
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => setSelectedReport(report)}
                  className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white font-bold py-3 px-4 rounded-xl hover:from-violet-600 hover:to-fuchsia-700 transition-all shadow-md hover:shadow-lg relative overflow-hidden group"
                >
                  <div className="relative z-10">
                    <div className="text-sm">View Details</div>
                  </div>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredReports.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl">
            <div className="w-20 h-20 bg-gradient-to-br from-violet-100 to-fuchsia-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText size={40} className="text-violet-400" />
            </div>
            <p className="text-slate-600 font-bold text-lg">No reports found</p>
            <p className="text-sm text-slate-400 mt-2">
              Try selecting a different subject
            </p>
          </div>
        )}
      </div>

      {/* Details Modal */}
      {selectedReport && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-br from-violet-500 to-fuchsia-600 p-6 rounded-t-3xl">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg bg-white/20 text-white backdrop-blur-sm">
                      {selectedReport.type}
                    </span>
                    <span className="text-xs font-bold px-3 py-1 rounded-lg bg-white/20 text-white backdrop-blur-sm">
                      {selectedReport.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {selectedReport.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedReport(null)}
                  className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                >
                  <X className="text-white" size={24} />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Observation */}
              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Observation
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  {selectedReport.observation}
                </p>
              </div>

              {/* Tags */}
              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Key Points
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedReport.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-700 px-3 py-1.5 rounded-full border border-violet-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Meta Info */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Teacher
                  </h4>
                  <p className="text-slate-800 font-semibold">
                    {selectedReport.teacher}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Date
                  </h4>
                  <p className="text-slate-800 font-semibold">
                    {new Date(selectedReport.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              {/* Sentiment Badge */}
              <div className="flex items-center justify-center pt-2">
                <div
                  className={`px-4 py-2 rounded-full text-sm font-bold ${
                    selectedReport.sentiment === "positive"
                      ? "bg-green-100 text-green-700"
                      : selectedReport.sentiment === "neutral"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {selectedReport.sentiment.charAt(0).toUpperCase() +
                    selectedReport.sentiment.slice(1)}{" "}
                  Feedback
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceAnalytics;
