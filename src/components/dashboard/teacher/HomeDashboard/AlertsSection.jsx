import React from "react";
import PendingAssignments from "./PendingAssignments";
import PerformanceAlerts from "./PerformanceAlerts";

const AlertsSection = ({ pendingCount, alerts }) => {
  return (
    <div className="space-y-6">
      <PendingAssignments count={pendingCount} />
      <PerformanceAlerts alerts={alerts} />
    </div>
  );
};

export default AlertsSection;
