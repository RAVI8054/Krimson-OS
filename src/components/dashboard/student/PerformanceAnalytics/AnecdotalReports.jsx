import React, { useState } from "react";
import { FileText, Filter } from "lucide-react";
import ReportModal from "./ReportModal";

const AnecdotalReports = ({ reports }) => {
  const [reportFilter, setReportFilter] = useState("all");
  const [selectedReport, setSelectedReport] = useState(null);

  // Filter anecdotal reports by category (subject-wise)
  const filteredReports =
    reportFilter === "all"
      ? reports
      : reports.filter((report) => report.category === reportFilter);

  // Get unique categories for filter options
  const categories = ["all", ...new Set(reports.map((r) => r.category))];

  return (
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
              <option value="all">All Subjects ({reports.length})</option>
              {categories
                .filter((c) => c !== "all")
                .map((category) => (
                  <option key={category} value={category}>
                    {category} (
                    {reports.filter((r) => r.category === category).length})
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
                    className={`h-1 w-12 rounded-full bg-gradient-to-r ${
                      typeColors[report.type]
                    }`}
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
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-1 transition-opacity"></div>
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

      {/* Details Modal */}
      {selectedReport && (
        <ReportModal
          report={selectedReport}
          onClose={() => setSelectedReport(null)}
        />
      )}
    </div>
  );
};

export default AnecdotalReports;
