import React from "react";
import { HelpCircle, Ticket, MessageCircle } from "lucide-react";

const SupportHeader = ({ activeTab, setActiveTab }) => {
  return (
    <div className="mb-4 md:mb-6 relative z-10">
      <div className="flex items-center gap-3 md:gap-4 mb-4">
        <div className="p-2.5 md:p-3 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-xl md:rounded-2xl shadow-lg shadow-blue-500/30 animate-gradient">
          <HelpCircle size={24} className="md:hidden text-white" />
          <HelpCircle size={28} className="hidden md:block text-white" />
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Support & Help Center
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm font-medium hidden sm:block">
            Get help, submit tickets, or chat with our team
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-1 bg-white/70 backdrop-blur-sm rounded-xl w-fit">
        {[
          { id: "faq", label: "FAQs", icon: HelpCircle },
          { id: "tickets", label: "My Tickets", icon: Ticket },
          { id: "chat", label: "Live Chat", icon: MessageCircle },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md"
                  : "text-slate-600 hover:bg-white/50"
              }`}
            >
              <Icon size={16} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SupportHeader;
