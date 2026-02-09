import React from "react";
import { Award } from "lucide-react";

const BehaviorHeader = () => {
  return (
    <div className="mb-4 md:mb-6 relative z-10">
      <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
        <div className="p-2.5 md:p-3 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-xl md:rounded-2xl shadow-lg shadow-blue-500/30 animate-gradient">
          <Award size={24} className="md:hidden text-white" />
          <Award size={28} className="hidden md:block text-white" />
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Behavior & Feedback Reports
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm font-medium hidden sm:block">
            Track conduct, discipline, and participation insights
          </p>
        </div>
      </div>
      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default BehaviorHeader;
