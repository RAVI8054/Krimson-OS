import React, { useState } from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import ActivityHeader from "../../../components/dashboard/student/CoCurricularActivities/ActivityHeader";
import CategoryCards from "../../../components/dashboard/student/CoCurricularActivities/CategoryCards";
import FilterTabs from "../../../components/dashboard/student/CoCurricularActivities/FilterTabs";
import ActivityLog from "../../../components/dashboard/student/CoCurricularActivities/ActivityLog";
import AchievementTimeline from "../../../components/dashboard/student/CoCurricularActivities/AchievementTimeline";
import DigitalPortfolio from "../../../components/dashboard/student/CoCurricularActivities/DigitalPortfolio";

/**
 * Co-Curricular Activities & Achievements - Screen 14
 * Purpose: Capture holistic student progress beyond academics
 * Future: Replace static data with CCA Module + Award Management System APIs
 */
const CoCurricularActivities = () => {
  const { cocurricularActivities } = STUDENT_DATA;
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter activities by category
  const filteredActivities =
    selectedCategory === "All"
      ? cocurricularActivities.activities
      : cocurricularActivities.activities.filter(
          (a) => a.category === selectedCategory,
        );

  return (
    <div className="space-y-6">
      {/* Header - Overall Stats */}
      <ActivityHeader
        totalPoints={cocurricularActivities.totalPoints}
        totalActivities={cocurricularActivities.totalActivities}
        certificatesEarned={cocurricularActivities.certificatesEarned}
      />

      {/* Category Cards */}
      <CategoryCards
        categories={cocurricularActivities.categories}
        onCategoryClick={setSelectedCategory}
      />

      {/* Filter Tabs */}
      <FilterTabs
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Activity Log */}
      <ActivityLog filteredActivities={filteredActivities} />

      {/* Achievement Timeline */}
      <AchievementTimeline timeline={cocurricularActivities.timeline} />

      {/* Digital Portfolio / Certificate Upload */}
      <DigitalPortfolio />
    </div>
  );
};

export default CoCurricularActivities;
