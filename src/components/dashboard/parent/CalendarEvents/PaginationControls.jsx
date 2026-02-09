import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PaginationControls = ({
  filteredEventsLength,
  itemsPerPage,
  indexOfFirstItem,
  indexOfLastItem,
  currentPage,
  handlePageChange,
}) => {
  const totalPages = Math.ceil(filteredEventsLength / itemsPerPage);

  if (filteredEventsLength <= itemsPerPage) return null;

  return (
    <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 px-2 pb-8">
      <div className="text-sm text-slate-500 font-medium order-2 sm:order-1">
        Showing{" "}
        <span className="font-bold text-slate-800">{indexOfFirstItem + 1}</span>{" "}
        to{" "}
        <span className="font-bold text-slate-800">
          {Math.min(indexOfLastItem, filteredEventsLength)}
        </span>{" "}
        of{" "}
        <span className="font-bold text-slate-800">{filteredEventsLength}</span>{" "}
        events
      </div>

      <div className="flex items-center gap-2 order-1 sm:order-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`p-2 rounded-xl transition-all ${
            currentPage === 1
              ? "text-slate-300 cursor-not-allowed bg-white/50"
              : "text-slate-600 hover:bg-white hover:shadow-sm hover:text-cyan-600 bg-white/50 border border-slate-200"
          }`}
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center gap-1.5">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`w-8 h-8 rounded-lg text-sm font-bold flex items-center justify-center transition-all ${
                currentPage === index + 1
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md"
                  : "bg-white/50 text-slate-600 hover:bg-white hover:shadow-sm border border-slate-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-xl transition-all ${
            currentPage === totalPages
              ? "text-slate-300 cursor-not-allowed bg-white/50"
              : "text-slate-600 hover:bg-white hover:shadow-sm hover:text-cyan-600 bg-white/50 border border-slate-200"
          }`}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PaginationControls;
