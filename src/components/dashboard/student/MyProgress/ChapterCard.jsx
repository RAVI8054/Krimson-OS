import React from "react";
import {
  Lock,
  Clock,
  Calendar,
  Star,
  AlertCircle,
  ChevronRight,
} from "lucide-react";

// Get mastery badge color
const getMasteryColor = (mastery) => {
  switch (mastery) {
    case "mastered":
      return "bg-gradient-to-r from-yellow-400 to-orange-500";
    case "advanced":
      return "bg-gradient-to-r from-purple-400 to-pink-500";
    case "intermediate":
      return "bg-gradient-to-r from-blue-400 to-cyan-500";
    default:
      return "bg-slate-400";
  }
};

// Get subject color for progress bar
const getSubjectColor = (subject) => {
  const colors = {
    Mathematics: "from-blue-400 to-blue-600",
    Physics: "from-purple-400 to-purple-600",
    Chemistry: "from-green-400 to-green-600",
    Biology: "from-teal-400 to-teal-600",
    English: "from-pink-400 to-pink-600",
    History: "from-orange-400 to-orange-600",
  };
  return colors[subject] || "from-blue-400 to-blue-600";
};

const ChapterCard = ({ chapter, unlocked, onSelect, allChapters }) => {
  return (
    <div
      className={`relative bg-white border-2 rounded-2xl p-6 transition-all cursor-pointer ${
        unlocked
          ? "border-slate-200 hover:border-blue-300 hover:shadow-lg"
          : "border-slate-200 bg-slate-50 opacity-75"
      }`}
      onClick={() => unlocked && onSelect(chapter)}
    >
      {/* Chapter Number Badge */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg ${
              unlocked
                ? "bg-gradient-to-br from-blue-500 to-purple-600"
                : "bg-slate-400"
            }`}
          >
            {chapter.chapterNumber}
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-slate-800 text-lg">
              {chapter.title}
            </h3>
            <p className="text-sm text-slate-500">{chapter.subject}</p>
          </div>
        </div>

        {/* Mastery/Lock Badge */}
        {unlocked ? (
          <span
            className={`${getMasteryColor(
              chapter.mastery,
            )} text-white px-3 py-1 rounded-full text-xs font-bold uppercase`}
          >
            {chapter.mastery}
          </span>
        ) : (
          <div className="p-2 bg-slate-300 rounded-lg">
            <Lock size={18} className="text-slate-600" />
          </div>
        )}
      </div>

      {/* Stats Row */}
      {unlocked && (
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Clock size={14} className="text-blue-500" />
            </div>
            <p className="text-xs text-slate-600 font-medium">
              {chapter.timeSpent}
            </p>
            <p className="text-[10px] text-slate-400">Time Spent</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Calendar size={14} className="text-purple-500" />
            </div>
            <p className="text-xs text-slate-600 font-medium">
              {chapter.lastAccessed
                ? new Date(chapter.lastAccessed).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                : "Not started"}
            </p>
            <p className="text-[10px] text-slate-400">Last Access</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Star size={14} className="text-yellow-500" />
            </div>
            <p className="text-xs text-slate-600 font-medium">
              {chapter.quiz_score > 0 ? `${chapter.quiz_score}%` : "--"}
            </p>
            <p className="text-[10px] text-slate-400">Quiz Score</p>
          </div>
        </div>
      )}

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-slate-600">Progress</span>
          <span className="text-sm font-bold text-slate-800">
            {unlocked ? chapter.progress : 0}%
          </span>
        </div>
        <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${getSubjectColor(
              chapter.subject,
            )} rounded-full transition-all duration-500`}
            style={{ width: `${unlocked ? chapter.progress : 0}%` }}
          ></div>
        </div>
      </div>

      {/* Topics Pills */}
      {unlocked && (
        <div className="flex flex-wrap gap-1 mb-4">
          {chapter.topics.slice(0, 3).map((topic, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-[10px] font-medium"
            >
              {topic}
            </span>
          ))}
          {chapter.topics.length > 3 && (
            <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded-md text-[10px] font-medium">
              +{chapter.topics.length - 3} more
            </span>
          )}
        </div>
      )}

      {/* Locked Info */}
      {!unlocked && (
        <div className="mt-3">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle size={14} className="text-slate-500" />
            <p className="text-xs text-slate-600 font-medium">
              Complete 70% of required chapters to unlock
            </p>
          </div>
          <div className="flex flex-wrap gap-1">
            {chapter.prerequisites.map((prereqId) => {
              const prereqChapter = allChapters.find(
                (ch) => ch.id === prereqId,
              );
              return prereqChapter ? (
                <span
                  key={prereqId}
                  className="px-2 py-1 bg-slate-200 rounded-md text-xs font-medium text-slate-600"
                >
                  Ch {prereqChapter.chapterNumber}: {prereqChapter.progress}%
                </span>
              ) : null;
            })}
          </div>
        </div>
      )}

      {/* Action Button */}
      {unlocked && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(chapter);
          }}
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
        >
          {chapter.progress === 0
            ? "Start Chapter"
            : chapter.progress === 100
              ? "Review"
              : "Continue Learning"}
          <ChevronRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      )}
    </div>
  );
};

export default ChapterCard;
