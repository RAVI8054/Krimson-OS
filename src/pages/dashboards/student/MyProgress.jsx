import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { STUDENT_DATA } from "../../../data/studentData";
import ProgressHeader from "../../../components/dashboard/student/MyProgress/ProgressHeader";
import ProgressStats from "../../../components/dashboard/student/MyProgress/ProgressStats";
import ChapterProgressGrid from "../../../components/dashboard/student/MyProgress/ChapterProgressGrid";
import ChapterModal from "../../../components/dashboard/student/MyProgress/ChapterModal";

const MyProgress = () => {
  const navigate = useNavigate();
  const { myProgress, resources, chapterDetails } = STUDENT_DATA;
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedChapter, setSelectedChapter] = useState(null);

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <ProgressHeader />

      {/* Overall Stats Cards */}
      <ProgressStats
        overallStats={myProgress.overallStats}
        learningStreak={myProgress.learningStreak}
      />

      {/* Chapter Progress Section */}
      <ChapterProgressGrid
        chapters={myProgress.chapters}
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
        onSelectChapter={setSelectedChapter}
      />

      {/* Chapter Details Modal */}
      {selectedChapter && (
        <ChapterModal
          chapter={selectedChapter}
          onClose={() => setSelectedChapter(null)}
          chapterDetails={chapterDetails}
          resources={resources}
          navigate={navigate}
        />
      )}
    </div>
  );
};

export default MyProgress;
