import React from "react";
import { Search } from "lucide-react";

/**
 * SearchAndFilter Component
 * Search input and filter buttons for student list
 *
 * @param {Object} props
 * @param {string} props.searchQuery - Current search value
 * @param {Function} props.onSearchChange - Callback for search changes
 * @param {string} props.filterRisk - Current filter value ('all', 'atRisk', 'onTrack')
 * @param {Function} props.onFilterChange - Callback for filter changes
 */
const SearchAndFilter = ({
  searchQuery,
  onSearchChange,
  filterRisk,
  onFilterChange,
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
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none transition-colors"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => onFilterChange("all")}
            className={`px-4 py-2 rounded-xl font-bold text-xs transition-all ${
              filterRisk === "all"
                ? "bg-blue-500 text-white shadow-md"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All Students
          </button>
          <button
            onClick={() => onFilterChange("atRisk")}
            className={`px-4 py-2 rounded-xl font-bold text-xs transition-all ${
              filterRisk === "atRisk"
                ? "bg-red-500 text-white shadow-md"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            At Risk Only
          </button>
          <button
            onClick={() => onFilterChange("onTrack")}
            className={`px-4 py-2 rounded-xl font-bold text-xs transition-all ${
              filterRisk === "onTrack"
                ? "bg-green-500 text-white shadow-md"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            On Track
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
