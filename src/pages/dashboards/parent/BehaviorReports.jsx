import React from "react";
import { PARENT_DATA } from "../../../data/parentData";
import BehaviorHeader from "../../../components/dashboard/parent/BehaviorReports/BehaviorHeader";
import BehaviorStats from "../../../components/dashboard/parent/BehaviorReports/BehaviorStats";
import BehaviorTrends from "../../../components/dashboard/parent/BehaviorReports/BehaviorTrends";
import TeacherFeedback from "../../../components/dashboard/parent/BehaviorReports/TeacherFeedback";
import PeerCollaboration from "../../../components/dashboard/parent/BehaviorReports/PeerCollaboration";
import FlaggedPatterns from "../../../components/dashboard/parent/BehaviorReports/FlaggedPatterns";
import ParentResponse from "../../../components/dashboard/parent/BehaviorReports/ParentResponse";

const BehaviorReports = () => {
  const behaviorData = PARENT_DATA.behavior;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-pink-50/30 p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Page Header */}
      <BehaviorHeader />

      {/* Behavior Stats Cards */}
      <BehaviorStats stats={behaviorData.stats} />

      {/* Behavior Graph */}
      <BehaviorTrends monthlyData={behaviorData.monthlyData} />

      {/* Teacher Feedback & Peer Collaboration */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6 relative z-10">
        <TeacherFeedback feedbacks={behaviorData.teacherFeedback} />
        <PeerCollaboration collaborations={behaviorData.peerCollaboration} />
      </div>

      {/* Flagged Patterns Alert */}
      <FlaggedPatterns flaggedData={behaviorData.flaggedPatterns} />

      {/* Parent Response Section */}
      <ParentResponse />

      {/* Custom CSS for animations */}
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

export default BehaviorReports;
