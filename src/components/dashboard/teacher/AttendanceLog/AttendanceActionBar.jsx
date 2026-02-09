import React from "react";
import { Search, CheckCircle, TrendingUp, ChevronDown } from "lucide-react";

const AttendanceActionBar = ({
  searchQuery,
  setSearchQuery,
  markAllPresent,
  showSummary,
  setShowSummary,
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

        {/* Quick Actions */}
        <div className="flex gap-3">
          <button
            onClick={markAllPresent}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold hover:from-green-600 hover:to-emerald-600 shadow-md transition-all flex items-center gap-2 active:scale-95"
          >
            <CheckCircle size={18} />
            <span className="hidden md:inline">Mark All Present</span>
            <span className="md:hidden">All Present</span>
          </button>
          <button
            onClick={() => setShowSummary(!showSummary)}
            className="px-6 py-3 bg-slate-100 text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center gap-2"
          >
            <TrendingUp size={18} />
            <span className="hidden md:inline">Summary</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${showSummary ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceActionBar;
