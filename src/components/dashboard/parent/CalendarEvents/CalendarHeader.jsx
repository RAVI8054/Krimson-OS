import React from "react";
import { Calendar as CalendarIcon, Share2 } from "lucide-react";

const CalendarHeader = ({ handleSyncCalendar }) => {
  return (
    <div className="mb-4 md:mb-6 relative z-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 mb-3 md:mb-4">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="p-2.5 md:p-3 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-xl md:rounded-2xl shadow-lg shadow-blue-500/30 animate-gradient">
            <CalendarIcon size={24} className="md:hidden text-white" />
            <CalendarIcon size={28} className="hidden md:block text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Calendar & Events
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm font-medium hidden sm:block">
              Academic, sports, enrichment, and parent events
            </p>
          </div>
        </div>

        {/* Calendar Sync Buttons */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <button
            onClick={() => handleSyncCalendar("google")}
            className="flex-1 md:flex-initial bg-white border-2 border-slate-200 text-slate-700 px-3 md:px-4 py-2 rounded-xl hover:border-cyan-300 hover:bg-cyan-50 transition-all flex items-center justify-center gap-2"
          >
            <Share2 size={16} />
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold">Sync Google</span>
              <span className="text-[8px] text-slate-500">get in app</span>
            </div>
          </button>
          <button
            onClick={() => handleSyncCalendar("apple")}
            className="flex-1 md:flex-initial bg-white border-2 border-slate-200 text-slate-700 px-3 md:px-4 py-2 rounded-xl hover:border-pink-300 hover:bg-pink-50 transition-all flex items-center justify-center gap-2"
          >
            <Share2 size={16} />
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold">Sync Apple</span>
              <span className="text-[8px] text-slate-500">get in app</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;
