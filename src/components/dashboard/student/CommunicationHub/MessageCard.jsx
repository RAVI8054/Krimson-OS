import React from "react";
import {
  MessageCircle,
  Building2,
  BookOpen,
  User,
  Clock,
  Eye,
  CheckCircle,
} from "lucide-react";

const iconMap = {
  MessageCircle,
  Building2,
  BookOpen,
  User,
};

const MessageCard = ({
  message,
  isExpanded,
  isAcknowledged,
  onToggleExpand,
  onAcknowledge,
}) => {
  const Icon = iconMap[message.icon] || MessageCircle; // Fallback icon

  const handleToggle = () => {
    onToggleExpand(message.id);
    if (!isExpanded && message.requiresAck && !isAcknowledged) {
      onAcknowledge(message.id);
    }
  };

  return (
    <div
      className={`bg-white rounded-2xl p-5 shadow-sm border-2 transition-all duration-300 hover:shadow-xl ${
        message.unread
          ? "border-cyan-200 bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-pink-50/50"
          : "border-slate-100 hover:border-slate-200"
      } ${isExpanded ? "lg:col-span-2 shadow-xl" : ""}`}
    >
      {/* Message Header */}
      <div className="flex items-start gap-4 mb-3">
        {/* Icon/Avatar */}
        <div
          className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
            message.category === "school"
              ? "bg-gradient-to-br from-cyan-400 to-blue-400"
              : message.category === "teacher"
                ? "bg-gradient-to-br from-blue-400 to-purple-400"
                : "bg-gradient-to-br from-purple-400 to-pink-400"
          } text-white shadow-lg`}
        >
          {message.avatar ? (
            <img
              src={message.avatar}
              alt={message.from}
              className="w-full h-full rounded-xl object-cover"
            />
          ) : (
            <Icon size={24} />
          )}
        </div>

        {/* Message Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-bold text-slate-800 text-base">
              {message.from}
            </h3>
            {message.unread && (
              <span className="flex-shrink-0 w-2.5 h-2.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse shadow-lg"></span>
            )}
          </div>

          {message.subject && (
            <p className="text-sm font-semibold text-slate-700 mb-1">
              {message.subject}
            </p>
          )}

          {message.subjectCode && (
            <span className="inline-block text-xs font-medium bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-lg mb-2">
              {message.subjectCode}
            </span>
          )}

          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <Clock size={12} />
            <span>{message.time}</span>
            {message.priority === "high" && (
              <span className="ml-auto bg-red-100 text-red-700 px-2 py-0.5 rounded-lg font-semibold">
                Important
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Message Content */}
      <div
        className={`text-sm text-slate-600 leading-relaxed mb-3 ${
          !isExpanded && "line-clamp-2"
        }`}
      >
        {message.content}
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-3 border-t border-slate-100">
        <button
          onClick={handleToggle}
          className="flex-1 flex items-center justify-center gap-2 text-xs font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-2 py-2 rounded-lg hover:shadow-lg transition-all hover:scale-105"
        >
          <Eye size={14} />
          {isExpanded ? "Show Less" : "View Message"}
        </button>

        <button
          onClick={() =>
            console.log("Future: Open messaging app to reply:", message.id)
          }
          className="flex-1 flex flex-col items-center justify-center gap-0.5 text-xs font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1.5 rounded-lg hover:shadow-lg transition-all hover:scale-105"
        >
          <div className="flex items-center gap-2">
            <MessageCircle size={14} />
            <span>Reply</span>
          </div>
          <span className="text-[9px] font-normal opacity-80 whitespace-nowrap">
            Go to App
          </span>
        </button>

        {isAcknowledged && (
          <div className="flex-1 flex items-center justify-center gap-2 text-xs font-semibold text-green-600 bg-green-50 px-2 py-2 rounded-lg border border-green-200">
            <CheckCircle size={14} />
            Acknowledged
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageCard;
