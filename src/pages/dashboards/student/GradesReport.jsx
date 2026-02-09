import React from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import ReportHeader from "../../../components/dashboard/student/GradesReport/ReportHeader";
import PerformanceOverview from "../../../components/dashboard/student/GradesReport/PerformanceOverview";
import SubjectPerformanceTable from "../../../components/dashboard/student/GradesReport/SubjectPerformanceTable";
import PerformanceComparisonChart from "../../../components/dashboard/student/GradesReport/PerformanceComparisonChart";
import TeacherInsights from "../../../components/dashboard/student/GradesReport/TeacherInsights";
import ReportFooter from "../../../components/dashboard/student/GradesReport/ReportFooter";

const GradesReport = () => {
  const { grades, gradesTeacherInsights } = STUDENT_DATA;
  const user = STUDENT_DATA.user;
  const teacherInsights = gradesTeacherInsights;

  const handleDownload = () => {
    window.print();
  };

  const term1Avg = Math.round(
    grades.reduce((acc, curr) => acc + curr.term1, 0) / grades.length,
  );
  const term2Avg = Math.round(
    grades.reduce((acc, curr) => acc + curr.term2, 0) / grades.length,
  );

  return (
    <div className="space-y-8 print:space-y-6 animate-fade-in-up">
      <style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            .print-area, .print-area * {
              visibility: visible;
            }
            .print-area {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
            }
            .no-print {
              display: none !important;
            }
          }
        `}
      </style>

      <ReportHeader user={user} handleDownload={handleDownload} />

      <div className="print-area space-y-8">
        <PerformanceOverview term1Avg={term1Avg} term2Avg={term2Avg} />

        <SubjectPerformanceTable grades={grades} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 break-inside-avoid">
          <PerformanceComparisonChart grades={grades} />
          <TeacherInsights teacherInsights={teacherInsights} />
        </div>
      </div>

      <ReportFooter />
    </div>
  );
};

export default GradesReport;
