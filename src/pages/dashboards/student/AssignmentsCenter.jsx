import React, { useState } from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import AssignmentsHeader from "../../../components/dashboard/student/AssignmentsCenter/AssignmentsHeader";
import AssignmentCard from "../../../components/dashboard/student/AssignmentsCenter/AssignmentCard";
import ReattemptHistoryModal from "../../../components/dashboard/student/AssignmentsCenter/ReattemptHistoryModal";

const AssignmentsCenter = () => {
  const [tab, setTab] = useState("Pending");
  const [scanningId, setScanningId] = useState(null);
  const [scanResults, setScanResults] = useState({}); // { id: { score: 12, flagged: true } }
  const [expandedDecisions, setExpandedDecisions] = useState({});
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const { assignments, masteryData, assignmentHistory } = STUDENT_DATA;

  // Get unique subjects for filter
  const uniqueSubjects = ["All", ...new Set(assignments.map((a) => a.subject))];

  // Filter logic - by status and subject
  const displayedAssignments = assignments.filter((a) => {
    const statusMatch =
      tab === "Pending"
        ? a.status === "Pending" || a.status === "In Progress"
        : a.status === tab;

    const subjectMatch =
      selectedSubject === "All" || a.subject === selectedSubject;

    return statusMatch && subjectMatch;
  });

  const handleScan = (id) => {
    setScanningId(id);
    setTimeout(() => {
      setScanningId(null);
      setScanResults((prev) => ({
        ...prev,
        [id]: { score: Math.floor(Math.random() * 15), flagged: true },
      }));
    }, 2000);
  };

  const toggleDecisionExplanation = (id) => {
    setExpandedDecisions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <AssignmentsHeader
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
        uniqueSubjects={uniqueSubjects}
        tab={tab}
        setTab={setTab}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {displayedAssignments.map((assign) => (
          <AssignmentCard
            key={assign.id}
            assign={assign}
            tab={tab}
            scanningId={scanningId}
            scanResults={scanResults}
            handleScan={handleScan}
            expandedDecisions={expandedDecisions}
            toggleDecisionExplanation={toggleDecisionExplanation}
            masteryData={masteryData}
            setSelectedAssignment={setSelectedAssignment}
            setShowHistoryModal={setShowHistoryModal}
          />
        ))}
      </div>

      {/* Assignment History Modal */}
      <ReattemptHistoryModal
        selectedAssignment={selectedAssignment}
        setShowHistoryModal={setShowHistoryModal}
        assignmentHistory={assignmentHistory}
      />
    </div>
  );
};

export default AssignmentsCenter;
