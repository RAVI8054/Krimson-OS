import React from "react";
import { AlertCircle } from "lucide-react";

const EmptyState = ({ resetFilters }) => {
  return (
    <div className="bg-white p-12 rounded-3xl shadow-md text-center">
      <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <AlertCircle className="text-slate-400" size={32} />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">
        No Classes Found
      </h3>
      <p className="text-sm text-slate-500 mb-6">
        Try adjusting your filters or search query to find what you're looking
        for.
      </p>
      <button
        onClick={resetFilters}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold rounded-xl hover:from-blue-600 hover:to-purple-600 shadow-md transition-all"
      >
        Reset All Filters
      </button>
    </div>
  );
};

export default EmptyState;
