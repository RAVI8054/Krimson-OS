import React from "react";

const ProgressHeader = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          My Learning Progress
        </h1>
        <p className="text-white/90 text-sm md:text-base">
          Track your journey to mastery across all subjects
        </p>
      </div>
    </div>
  );
};

export default ProgressHeader;
