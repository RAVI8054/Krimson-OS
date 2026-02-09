import React, { useState } from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import BehaviorHeader from "../../../components/dashboard/student/BehaviorLog/BehaviorHeader";
import AttendanceTrends from "../../../components/dashboard/student/BehaviorLog/AttendanceTrends";
import AchievementLog from "../../../components/dashboard/student/BehaviorLog/AchievementLog";
import BehaviorWarnings from "../../../components/dashboard/student/BehaviorLog/BehaviorWarnings";

/**
 * Student Behavior Log - Screen 11
 * Purpose: Feedback on punctuality, conduct, participation, and achievements
 * Future: Replace static data with Admin + Student Affairs APIs
 */
const BehaviorLog = () => {
  const { behavior } = STUDENT_DATA;
  const [expandedWarning, setExpandedWarning] = useState(null);

  // Note: expandedWarning functions are not currently used in the subcomponents but kept if needed for future interactive features
  // Only BehaviorWarnings might need it if we add interactivity back, but the current implementation doesn't use it.

  return (
    <div className="space-y-6">
      {/* Header - Overall Stats */}
      <BehaviorHeader
        totalPoints={behavior.totalPoints}
        rank={behavior.rank}
        percentile={behavior.percentile}
      />

      {/* Attendance Trend Chart + Punctuality Stats */}
      <AttendanceTrends
        trends={behavior.attendanceTrends}
        punctuality={behavior.punctuality}
      />

      {/* Positive Behavior Log - Achievements + Participation Points */}
      <AchievementLog
        achievements={behavior.achievements}
        participationPoints={behavior.participationPoints}
      />

      {/* Warnings Section */}
      <BehaviorWarnings warnings={behavior.warnings} />
    </div>
  );
};

export default BehaviorLog;
