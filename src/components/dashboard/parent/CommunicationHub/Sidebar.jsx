import React from "react";
import {
  MessageSquare,
  Megaphone,
  Radio,
  Lock,
  Search,
  Filter,
} from "lucide-react";
import MessageList from "./MessageList";

const Sidebar = ({
  showMobileList,
  activeTab,
  setActiveTab,
  setSelectedThread,
  setShowMobileList,
  searchQuery,
  setSearchQuery,
  filteredData,
  selectedThread,
  getTabIcon,
  getTabGradient,
}) => {
  return (
    <div
      className={`${showMobileList ? "flex" : "hidden lg:flex"} w-full lg:w-[400px] xl:w-[420px] flex-col gap-3 md:gap-4 lg:gap-5 transition-all duration-300`}
    >
      {/* Tabs */}
      <div className="bg-white/90 backdrop-blur-2xl p-2 md:p-3 rounded-2xl md:rounded-3xl shadow-2xl border border-white/60 hover:shadow-cyan-500/20 transition-all duration-300">
        <div className="grid grid-cols-2 gap-1.5 md:gap-2 p-1 md:p-1.5 bg-gradient-to-br from-slate-100 via-slate-50 to-white rounded-xl md:rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-400/5 to-pink-400/5 animate-shimmer"></div>
          <button
            onClick={() => {
              setActiveTab("messages");
              setSelectedThread(null);
              setShowMobileList(true);
            }}
            className={`relative flex flex-col items-center justify-center py-2.5 md:py-3.5 px-2 md:px-3 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold transition-all duration-300 z-10 ${
              activeTab === "messages"
                ? "bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 text-white shadow-xl shadow-blue-500/40 scale-[1.03] hover:scale-[1.05]"
                : "text-slate-600 hover:text-slate-800 hover:bg-white/70 hover:scale-[1.02]"
            }`}
          >
            <MessageSquare size={18} className="md:w-5 md:h-5 mb-1 md:mb-1.5" />
            <span className="hidden sm:inline">Messages</span>
            <span className="sm:hidden">Msgs</span>
          </button>
          <button
            onClick={() => {
              setActiveTab("announcements");
              setSelectedThread(null);
              setShowMobileList(true);
            }}
            className={`relative flex flex-col items-center justify-center py-2.5 md:py-3.5 px-2 md:px-3 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold transition-all duration-300 z-10 ${
              activeTab === "announcements"
                ? "bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-xl shadow-emerald-500/40 scale-[1.03] hover:scale-[1.05]"
                : "text-slate-600 hover:text-slate-800 hover:bg-white/70 hover:scale-[1.02]"
            }`}
          >
            <Megaphone size={18} className="md:w-5 md:h-5 mb-1 md:mb-1.5" />
            <span className="hidden sm:inline">Announcements</span>
            <span className="sm:hidden">News</span>
          </button>
          <button
            onClick={() => {
              setActiveTab("broadcasts");
              setSelectedThread(null);
              setShowMobileList(true);
            }}
            className={`relative flex flex-col items-center justify-center py-2.5 md:py-3.5 px-2 md:px-3 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold transition-all duration-300 z-10 ${
              activeTab === "broadcasts"
                ? "bg-gradient-to-br from-orange-400 to-red-500 text-white shadow-xl shadow-orange-500/40 scale-[1.03] hover:scale-[1.05]"
                : "text-slate-600 hover:text-slate-800 hover:bg-white/70 hover:scale-[1.02]"
            }`}
          >
            <Radio size={18} className="md:w-5 md:h-5 mb-1 md:mb-1.5" />
            <span className="hidden sm:inline">Broadcasts</span>
            <span className="sm:hidden">Live</span>
          </button>
          <button
            onClick={() => {
              setActiveTab("counselor");
              setSelectedThread(null);
              setShowMobileList(true);
            }}
            className={`relative flex flex-col items-center justify-center py-2.5 md:py-3.5 px-2 md:px-3 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold transition-all duration-300 z-10 ${
              activeTab === "counselor"
                ? "bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-xl shadow-purple-500/40 scale-[1.03] hover:scale-[1.05]"
                : "text-slate-600 hover:text-slate-800 hover:bg-white/70 hover:scale-[1.02]"
            }`}
          >
            <Lock size={18} className="md:w-5 md:h-5 mb-1 md:mb-1.5" />
            <span className="hidden sm:inline">Counselor</span>
            <span className="sm:hidden">Private</span>
          </button>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={16}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search conversations..."
            className="w-full pl-9 md:pl-11 pr-3 md:pr-4 py-2.5 md:py-3.5 bg-white/90 backdrop-blur-2xl border border-slate-200/60 rounded-xl md:rounded-2xl text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 shadow-lg hover:shadow-xl transition-all duration-300 font-medium placeholder:text-slate-400"
          />
        </div>
        <button className="p-2.5 md:p-3.5 bg-white/90 backdrop-blur-2xl border border-slate-200/60 rounded-xl md:rounded-2xl hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 hover:border-cyan-200 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
          <Filter
            size={16}
            className="md:w-[18px] md:h-[18px] text-slate-600"
          />
        </button>
      </div>

      {/* Scrollable List */}
      <div className="flex-1 overflow-y-auto pr-1 md:pr-2 custom-scrollbar">
        <MessageList
          filteredData={filteredData}
          selectedThread={selectedThread}
          setSelectedThread={setSelectedThread}
          activeTab={activeTab}
          getTabIcon={getTabIcon}
          getTabGradient={getTabGradient}
        />
      </div>
    </div>
  );
};

export default Sidebar;
