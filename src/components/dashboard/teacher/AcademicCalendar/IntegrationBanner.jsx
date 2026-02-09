import React from "react";
import { Globe, Share2, Settings } from "lucide-react";

const IntegrationBanner = () => (
  <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
    <div className="absolute right-0 top-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
      <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
        <Globe size={32} className="text-white" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-xl font-bold">Calendar Integration</h3>
          <span className="px-2 py-1 bg-white/30 backdrop-blur-sm rounded-lg text-xs font-bold">
            SYNCED
          </span>
        </div>
        <p className="text-sm opacity-90 mb-3">
          Auto-sync enabled with school calendar. Personal events can be
          exported to Google Calendar and Outlook.
        </p>
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-sm font-bold hover:bg-white/30 transition-colors border border-white/30 flex items-center gap-2">
            <Share2 size={14} />
            Export to Google
          </button>
          <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-sm font-bold hover:bg-white/30 transition-colors border border-white/30 flex items-center gap-2">
            <Share2 size={14} />
            Export to Outlook
          </button>
          <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-sm font-bold hover:bg-white/30 transition-colors border border-white/30 flex items-center gap-2">
            <Settings size={14} />
            Sync Settings
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default IntegrationBanner;
