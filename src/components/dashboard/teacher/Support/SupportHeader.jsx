import React from "react";
import { Search, ChevronRight } from "lucide-react";

const SupportHeader = ({
  searchQuery,
  setSearchQuery,
  activeTab,
  setActiveTab,
}) => {
  const tabs = ["Knowledge Base", "My Tickets", "Contact Support"];
  const headerGradient = "from-cyan-500 via-blue-500 to-pink-500";

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
      <div className={`absolute inset-0 bg-gradient-to-r ${headerGradient}`} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10 p-8 md:p-10 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                Help Center
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
              How can we help?
            </h1>
            <p className="text-white/90 text-sm md:text-base max-w-xl font-medium leading-relaxed">
              Find answers, watch tutorials, or contact our support team.
            </p>

            <div className="mt-8 relative max-w-lg">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search for answers, articles, or error codes..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl text-slate-800 bg-white shadow-lg outline-none focus:ring-4 focus:ring-white/30 transition-all font-medium placeholder:text-slate-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 min-w-[200px]">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`
                  px-5 py-3 rounded-xl text-sm font-bold transition-all text-left flex items-center justify-between group
                  ${
                    activeTab === t
                      ? "bg-white text-blue-600 shadow-md"
                      : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10"
                  }
                `}
              >
                {t}
                {activeTab === t && <ChevronRight size={16} />}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportHeader;
