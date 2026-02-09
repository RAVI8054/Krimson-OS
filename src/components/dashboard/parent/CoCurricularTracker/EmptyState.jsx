import React from "react";
import { Star } from "lucide-react";

const EmptyState = ({
  searchQuery,
  selectedCategory,
  setSelectedCategory,
  setSearchQuery,
}) => {
  return (
    <div className="relative z-10 max-w-5xl">
      <div className="ml-10 md:ml-[9rem] bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60 text-center">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-cyan-100 via-blue-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
          <Star size={40} className="text-cyan-500" />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-slate-700 mb-2">
          No Activities Found
        </h3>
        <p className="text-sm text-slate-500 max-w-md mx-auto mb-4">
          {searchQuery
            ? `No activities match your search "${searchQuery}"`
            : `No ${selectedCategory} activities recorded yet`}
        </p>
        <button
          onClick={() => {
            setSelectedCategory("all");
            setSearchQuery("");
          }}
          className="text-sm text-cyan-600 font-bold hover:underline"
        >
          Clear filters
        </button>
      </div>
    </div>
  );
};

export default EmptyState;
