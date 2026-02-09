import React from "react";
import { Zap, Award, Medal } from "lucide-react";

const TrackerStats = ({
  totalPoints,
  totalAchievements,
  certificatesEarned,
}) => {
  return (
    <div className="grid grid-cols-3 gap-3 md:gap-4 mb-4 relative z-10">
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl md:rounded-2xl p-3 md:p-4 border border-cyan-200">
        <div className="flex items-center gap-2 mb-1">
          <Zap size={16} className="text-cyan-600" />
          <span className="text-xs font-medium text-cyan-600">
            Total Points
          </span>
        </div>
        <p className="text-2xl md:text-3xl font-bold text-cyan-700">
          {totalPoints}
        </p>
      </div>
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl md:rounded-2xl p-3 md:p-4 border border-purple-200">
        <div className="flex items-center gap-2 mb-1">
          <Award size={16} className="text-purple-600" />
          <span className="text-xs font-medium text-purple-600">
            Achievements
          </span>
        </div>
        <p className="text-2xl md:text-3xl font-bold text-purple-700">
          {totalAchievements}
        </p>
      </div>
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl md:rounded-2xl p-3 md:p-4 border border-amber-200">
        <div className="flex items-center gap-2 mb-1">
          <Medal size={16} className="text-amber-600" />
          <span className="text-xs font-medium text-amber-600">
            Certificates
          </span>
        </div>
        <p className="text-2xl md:text-3xl font-bold text-amber-700">
          {certificatesEarned}
        </p>
      </div>
    </div>
  );
};

export default TrackerStats;
