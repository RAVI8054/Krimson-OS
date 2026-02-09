import React, { useState, useEffect } from "react";
import { PARENT_DATA } from "../../../data/parentData";
import ExamHeader from "../../../components/dashboard/parent/ExamPerformance/ExamHeader";
import PerformanceChart from "../../../components/dashboard/parent/ExamPerformance/PerformanceChart";
import TeacherComments from "../../../components/dashboard/parent/ExamPerformance/TeacherComments";
import NextExamCountdown from "../../../components/dashboard/parent/ExamPerformance/NextExamCountdown";
import TopSubjects from "../../../components/dashboard/parent/ExamPerformance/TopSubjects";
import AreasForImprovement from "../../../components/dashboard/parent/ExamPerformance/AreasForImprovement";
import ExamSchedule from "../../../components/dashboard/parent/ExamPerformance/ExamSchedule";

const ExamPerformance = () => {
  const [selectedTerm, setSelectedTerm] = useState("current");
  const [countdown, setCountdown] = useState({});

  // Destructure data from PARENT_DATA
  const { examSchedule, performanceData, teacherComments } =
    PARENT_DATA.examPerformance;

  // Top 3 subjects and areas for improvement
  const topSubjects = performanceData[selectedTerm]
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const areasForImprovement = performanceData[selectedTerm]
    .filter((item) => item.score < 85)
    .sort((a, b) => a.score - b.score);

  // Calculate countdown for next exam
  useEffect(() => {
    const calculateCountdown = () => {
      const nextExam = examSchedule[0];
      if (!nextExam) return;

      const examDateTime = new Date(nextExam.date + " " + nextExam.time);
      const now = new Date();
      const difference = examDateTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );

        setCountdown({ days, hours, minutes });
      }
    };

    calculateCountdown();
    const timer = setInterval(calculateCountdown, 60000); // Update every minute

    return () => clearInterval(timer);
  }, [examSchedule]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-pink-50 p-4 md:p-6">
      {/* Header Section */}
      <ExamHeader
        selectedTerm={selectedTerm}
        setSelectedTerm={setSelectedTerm}
      />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
        {/* Left Column - Performance Chart & Comments (8 columns) */}
        <div className="lg:col-span-8 space-y-4 md:space-y-6">
          <PerformanceChart
            performanceData={performanceData}
            selectedTerm={selectedTerm}
          />
          <TeacherComments teacherComments={teacherComments} />
        </div>

        {/* Right Column - Stats and Schedule (4 columns) */}
        <div className="lg:col-span-4 space-y-4 md:space-y-6">
          <NextExamCountdown countdown={countdown} nextExam={examSchedule[0]} />
          <TopSubjects topSubjects={topSubjects} />
          <AreasForImprovement areasForImprovement={areasForImprovement} />
          <ExamSchedule examSchedule={examSchedule} />
        </div>
      </div>
    </div>
  );
};

export default ExamPerformance;
