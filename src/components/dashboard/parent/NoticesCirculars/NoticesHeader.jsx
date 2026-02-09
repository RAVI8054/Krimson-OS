import React from "react";
import { Bell, Mail, Search, Calendar, Filter } from "lucide-react";

const NoticesHeader = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="mb-4 md:mb-6 relative z-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 mb-3 md:mb-4">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="p-2.5 md:p-3 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-xl md:rounded-2xl shadow-lg shadow-blue-500/30 animate-gradient">
            <Bell size={24} className="md:hidden text-white" />
            <Bell size={28} className="hidden md:block text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Notices & Circulars
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm font-medium hidden sm:block">
              Official school announcements and updates
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto p-2 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50">
          <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
            <Mail size={16} className="text-white" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-slate-700">Weekly Digest</p>
            <p className="text-[10px] text-slate-500">
              Auto-emailed every Friday
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search circulars by title, content, or ID..."
            className="w-full pl-10 pr-4 py-2.5 bg-white/95 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all"
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-initial px-4 py-2.5 bg-white border-2 border-slate-200 text-slate-600 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
            <Calendar size={16} />
            <span className="hidden sm:inline">Date</span>
          </button>
          <button className="flex-1 sm:flex-initial px-4 py-2.5 bg-white border-2 border-slate-200 text-slate-600 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
            <Filter size={16} />
            <span className="hidden sm:inline">Filter</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticesHeader;
