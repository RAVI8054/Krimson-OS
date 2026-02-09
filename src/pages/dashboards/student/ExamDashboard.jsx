import React from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import ExamHeader from "../../../components/dashboard/student/ExamDashboard/ExamHeader";
import UpcomingExams from "../../../components/dashboard/student/ExamDashboard/UpcomingExams";
import PerformanceOverview from "../../../components/dashboard/student/ExamDashboard/PerformanceOverview";
import TermComparison from "../../../components/dashboard/student/ExamDashboard/TermComparison";
import ExamRules from "../../../components/dashboard/student/ExamDashboard/ExamRules";

const ExamDashboard = () => {
  const { exams, examPerformance } = STUDENT_DATA;

  return (
    <div className="space-y-8">
      <ExamHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <UpcomingExams exams={exams} />

        <div className="space-y-6">
          <PerformanceOverview data={examPerformance} />
          <TermComparison data={examPerformance} />
          <ExamRules />
        </div>
      </div>
    </div>
  );
};

export default ExamDashboard;
