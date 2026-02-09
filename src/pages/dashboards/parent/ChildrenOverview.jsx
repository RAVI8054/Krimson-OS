import React from "react";
import { useOutletContext } from "react-router-dom";
import { PARENT_DATA } from "../../../data/parentData";
import OverviewHeader from "../../../components/dashboard/parent/ChildrenOverview/OverviewHeader";
import ChildSelector from "../../../components/dashboard/parent/ChildrenOverview/ChildSelector";
import ChildProfileCard from "../../../components/dashboard/parent/ChildrenOverview/ChildProfileCard";

/**
 * Children Overview - Screen 2
 * Purpose: For parents with multiple children enrolled
 * Features: Child cards, quick switching, academic comparison graph
 * Future: Replace static data with Multi-Student Mapping API
 */
const ChildrenOverview = () => {
  const { children, childrenOverview } = PARENT_DATA;
  const { selectedChildIndex, setSelectedChildIndex } = useOutletContext();
  const activeChild = children[selectedChildIndex];
  const classAverages = childrenOverview.classAverages;

  // Future API: Fetch children data via parent ID
  const fetchChildrenData = () => {
    console.log("Future API: GET /api/parent/children");
  };

  return (
    <div className="space-y-6">
      {/* Header with Parent Gradient */}
      <OverviewHeader />

      {/* Quick Switch - Child Selector */}
      <ChildSelector
        children={children}
        selectedChildIndex={selectedChildIndex}
        setSelectedChildIndex={setSelectedChildIndex}
      />

      {/* Active Child Profile Card */}
      <ChildProfileCard
        activeChild={activeChild}
        classAverage={classAverages[activeChild.class]}
      />
    </div>
  );
};

export default ChildrenOverview;
