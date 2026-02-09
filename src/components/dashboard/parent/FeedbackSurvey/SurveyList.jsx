import React from "react";
import {
  MessageCircle,
  BarChart3,
  Search,
  Clock,
  Eye,
  FileText,
  CheckCircle,
  AlertCircle,
  BookOpen,
  Building2,
  Trophy,
} from "lucide-react";

const iconMap = {
  BookOpen,
  MessageCircle,
  Building2,
  Trophy,
};

const SurveyList = ({
  surveys,
  searchQuery,
  setSearchQuery,
  onSelectSurvey,
}) => {
  const filteredSurveys = surveys.filter(
    (survey) =>
      survey.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      survey.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const getStatusBadge = (status, completed) => {
    if (completed) {
      return (
        <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold flex items-center gap-1">
          <CheckCircle size={12} /> Completed
        </span>
      );
    }
    if (status === "active") {
      return (
        <span className="px-2.5 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-bold flex items-center gap-1">
          <Clock size={12} /> Active
        </span>
      );
    }
    return (
      <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-bold flex items-center gap-1">
        <AlertCircle size={12} /> Upcoming
      </span>
    );
  };

  const getDaysRemaining = (deadline) => {
    const days = Math.ceil(
      (new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24),
    );
    return days;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-pink-50/30 p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Header */}
      <div className="mb-4 md:mb-6 relative z-10">
        <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
          <div className="p-2.5 md:p-3 bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 rounded-xl md:rounded-2xl shadow-lg shadow-blue-500/30 animate-gradient">
            <MessageCircle size={24} className="md:hidden text-white" />
            <MessageCircle size={28} className="hidden md:block text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Feedback & Survey Center
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm font-medium hidden sm:block">
              Share your thoughts to help us improve
            </p>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-cyan-100 mb-4">
          <div className="flex items-start gap-3">
            <BarChart3
              size={20}
              className="text-cyan-600 flex-shrink-0 mt-0.5"
            />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-slate-800 mb-1">
                Survey Analytics Integration
              </h3>
              <p className="text-xs text-slate-600">
                Your anonymous feedback is analyzed and shared with the
                Principal's dashboard to drive continuous improvement in
                academics, communication, and infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search surveys..."
            className="w-full pl-10 pr-4 py-2.5 bg-white/95 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all"
          />
        </div>
      </div>

      {/* Survey Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative z-10">
        {filteredSurveys.map((survey) => {
          const SurveyIcon = iconMap[survey.icon] || BookOpen;
          const daysLeft = getDaysRemaining(survey.deadline);

          return (
            <div
              key={survey.id}
              className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-xl border border-white/60 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${survey.color} p-5`}>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <SurveyIcon size={24} className="text-white" />
                  </div>
                  {getStatusBadge(survey.status, survey.completed)}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                  {survey.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold">
                    {survey.category}
                  </span>
                  <span className="text-xs text-slate-500">
                    {survey.questions.length} questions
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                  <Clock size={14} />
                  {survey.completed ? (
                    <span className="text-emerald-600 font-medium">
                      Completed
                    </span>
                  ) : daysLeft > 0 ? (
                    <span>{daysLeft} days remaining</span>
                  ) : (
                    <span className="text-red-600 font-medium">
                      Deadline passed
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-2">
                  {survey.completed ? (
                    <button className="bg-slate-100 text-slate-600 px-6 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-200 transition-all">
                      <Eye size={16} />
                      <div className="flex flex-col items-center">
                        <span>View Responses</span>
                        <span className="text-[8px]">get in app</span>
                      </div>
                    </button>
                  ) : (
                    <button
                      onClick={() => onSelectSurvey(survey)}
                      className={`bg-gradient-to-r ${survey.color} text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2`}
                    >
                      <FileText size={16} />
                      <span>Take Survey</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredSurveys.length === 0 && (
        <div className="relative z-10 bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60 text-center">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-cyan-100 via-blue-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
            <Search size={40} className="text-cyan-500" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-slate-700 mb-2">
            No Surveys Found
          </h3>
          <p className="text-sm text-slate-500">
            No surveys match your search "{searchQuery}"
          </p>
        </div>
      )}

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default SurveyList;
