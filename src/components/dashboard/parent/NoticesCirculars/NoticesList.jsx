import React from "react";
import { Search } from "lucide-react";
import NoticeCard from "./NoticeCard";

const NoticesList = ({ notices, onClearFilters }) => {
  return (
    <div className="relative z-10 max-w-4xl">
      <div className="space-y-6 md:space-y-8 relative before:absolute before:inset-0 before:ml-5 md:before:ml-[8.5rem] before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-300 before:via-purple-300 before:to-transparent before:opacity-30">
        {notices.map((notice) => (
          <NoticeCard key={notice.id} notice={notice} />
        ))}

        {notices.length === 0 && (
          <div className="ml-10 md:ml-[8.5rem] bg-white rounded-2xl p-8 border border-dashed border-slate-300 text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-3">
              <Search size={24} className="text-slate-400" />
            </div>
            <p className="text-slate-500 font-medium">
              No circulars found matching your criteria
            </p>
            <button
              onClick={onClearFilters}
              className="mt-2 text-sm text-cyan-600 font-bold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticesList;
