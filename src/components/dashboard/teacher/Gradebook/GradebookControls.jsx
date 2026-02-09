import React from "react";
import { Search, Filter, ChevronDown } from "lucide-react";

const GradebookControls = ({
  searchQuery,
  setSearchQuery,
  showFilters,
  setShowFilters,
  filterMode,
  setFilterMode,
}) => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search by name, roll number, or ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none transition-colors"
          />
        </div>

        {/* Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-6 py-3 bg-slate-100 text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
        >
          <Filter size={18} />
          <span>Filters</span>
          <ChevronDown
            size={16}
            className={`transition-transform ${showFilters ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="mt-4 p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-blue-100">
          <div className="flex flex-wrap gap-3">
            {[
              { id: "all", label: "All Students", color: "blue" },
              { id: "atRisk", label: "At Risk Only", color: "red" },
              { id: "improving", label: "Improving", color: "green" },
              { id: "declining", label: "Declining", color: "orange" },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setFilterMode(filter.id)}
                className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                  filterMode === filter.id
                    ? `bg-${filter.color}-500 text-white shadow-md`
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GradebookControls;
