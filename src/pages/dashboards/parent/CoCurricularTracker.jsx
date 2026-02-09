import React, { useState } from "react";
import { PARENT_DATA } from "../../../data/parentData";
import TrackerHeader from "../../../components/dashboard/parent/CoCurricularTracker/TrackerHeader";
import TrackerStats from "../../../components/dashboard/parent/CoCurricularTracker/TrackerStats";
import ActivityFilters from "../../../components/dashboard/parent/CoCurricularTracker/ActivityFilters";
import ActivityTimeline from "../../../components/dashboard/parent/CoCurricularTracker/ActivityTimeline";
import EmptyState from "../../../components/dashboard/parent/CoCurricularTracker/EmptyState";

const CoCurricularTracker = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const { activities, categories } = PARENT_DATA.coCurricular;

  const filteredActivities = activities.filter((activity) => {
    const matchesCategory =
      selectedCategory === "all" || activity.category === selectedCategory;
    const matchesSearch =
      activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPoints = activities.reduce(
    (sum, activity) => sum + activity.points,
    0,
  );
  const totalAchievements = activities.length;
  const certificatesEarned = activities.filter((a) => a.certificate).length;

  const handleDownloadCertificate = (activityId) => {
    console.log("Download certificate for activity:", activityId);
    // API call will be added here
  };

  const handleViewPhoto = (photoId) => {
    console.log("View photo:", photoId);
    // API call will be added here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-pink-50/30 p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Page Header */}
      <TrackerHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Stats Summary */}
      <TrackerStats
        totalPoints={totalPoints}
        totalAchievements={totalAchievements}
        certificatesEarned={certificatesEarned}
      />

      {/* Category Filters */}
      <ActivityFilters
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        activities={activities}
        filteredActivities={filteredActivities}
      />

      {/* Timeline Layout */}
      <ActivityTimeline
        activities={filteredActivities}
        handleViewPhoto={handleViewPhoto}
        handleDownloadCertificate={handleDownloadCertificate}
      />

      {/* Empty State */}
      {filteredActivities.length === 0 && (
        <EmptyState
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setSearchQuery={setSearchQuery}
        />
      )}

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
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CoCurricularTracker;
