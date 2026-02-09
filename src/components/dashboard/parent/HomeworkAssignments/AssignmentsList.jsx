import React from "react";
import { FileText } from "lucide-react";
import AssignmentCard from "./AssignmentCard";

const AssignmentsList = ({
  assignments,
  acknowledgments,
  toggleAcknowledgment,
}) => {
  if (assignments.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
        <FileText className="mx-auto mb-4 text-slate-300" size={64} />
        <h3 className="text-xl font-bold text-slate-600 mb-2">
          No assignments found
        </h3>
        <p className="text-slate-400">
          Try adjusting your filters or search query
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {assignments.map((assignment) => (
        <AssignmentCard
          key={assignment.id}
          assignment={assignment}
          isAcknowledged={
            acknowledgments[assignment.id] || assignment.acknowledged
          }
          onToggleAcknowledgment={toggleAcknowledgment}
        />
      ))}
    </div>
  );
};

export default AssignmentsList;
