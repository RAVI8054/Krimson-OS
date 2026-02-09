import React from "react";
import ChapterCard from "./ChapterCard";

const ChapterProgressGrid = ({
  chapters,
  selectedSubject,
  setSelectedSubject,
  onSelectChapter,
}) => {
  // Check if chapter should be unlocked (70% threshold)
  const isChapterUnlocked = (chapter) => {
    if (chapter.prerequisites.length === 0) return true;

    return chapter.prerequisites.every((prereqId) => {
      const prereqChapter = chapters.find((ch) => ch.id === prereqId);
      return prereqChapter && prereqChapter.progress >= 70;
    });
  };

  const filteredChapters =
    selectedSubject === "All"
      ? chapters
      : chapters.filter((ch) => ch.subject === selectedSubject);

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-1">
            Chapter Progress
          </h2>
          <p className="text-sm text-slate-500">
            Detailed view of your learning journey
          </p>
        </div>

        {/* Subject Filter */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setSelectedSubject("All")}
            className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
              selectedSubject === "All"
                ? "bg-blue-500 text-white shadow-md"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All Subjects
          </button>
          {[
            "Mathematics",
            "Physics",
            "Chemistry",
            "Biology",
            "English",
            "History",
          ].map((subj) => (
            <button
              key={subj}
              onClick={() => setSelectedSubject(subj)}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                selectedSubject === subj
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {subj}
            </button>
          ))}
        </div>
      </div>

      {/* Chapters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredChapters.map((chapter) => (
          <ChapterCard
            key={chapter.id}
            chapter={chapter}
            unlocked={isChapterUnlocked(chapter)}
            onSelect={onSelectChapter}
            allChapters={chapters}
          />
        ))}
      </div>
    </div>
  );
};

export default ChapterProgressGrid;
