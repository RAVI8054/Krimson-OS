import React from "react";
import {
  AlertCircle,
  FileText,
  Image as ImageIcon,
  Link as LinkIcon,
  Paperclip,
  Download,
  ExternalLink,
  Eye,
  Bookmark,
} from "lucide-react";

const NoticeCard = ({ notice }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-600 border-red-200";
      case "medium":
        return "bg-amber-100 text-amber-600 border-amber-200";
      case "low":
        return "bg-blue-100 text-blue-600 border-blue-200";
      default:
        return "bg-slate-100 text-slate-600 border-slate-200";
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Admin":
        return "text-purple-600 bg-purple-50";
      case "Academic":
        return "text-blue-600 bg-blue-50";
      case "Sports":
        return "text-green-600 bg-green-50";
      case "Discipline":
        return "text-red-600 bg-red-50";
      default:
        return "text-slate-600 bg-slate-50";
    }
  };

  const getAttachmentIcon = (type) => {
    switch (type) {
      case "pdf":
        return <FileText size={14} className="text-red-500" />;
      case "image":
        return <ImageIcon size={14} className="text-blue-500" />;
      case "link":
        return <LinkIcon size={14} className="text-cyan-500" />;
      default:
        return <Paperclip size={14} className="text-slate-500" />;
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row gap-4 md:gap-8 group">
      {/* Date Column (Desktop) */}
      <div className="hidden md:flex flex-col items-end w-28 flex-shrink-0 pt-1">
        <span className="text-xl font-bold text-slate-800">
          {new Date(notice.date).getDate()}
        </span>
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
          {new Date(notice.date).toLocaleString("default", { month: "long" })}
        </span>
        <span className="text-[10px] text-slate-400">
          {new Date(notice.date).getFullYear()}
        </span>
      </div>

      {/* Timeline Node */}
      <div className="absolute left-5 md:left-[8.5rem] -translate-x-1/2 mt-1.5 w-4 h-4 rounded-full border-2 border-white shadow-md z-10 transition-transform group-hover:scale-125 bg-gradient-to-br from-cyan-400 to-blue-500"></div>

      {/* Content Card */}
      <div className="flex-1 ml-10 md:ml-0">
        {/* Mobile Date */}
        <div className="md:hidden flex items-center gap-2 mb-2">
          <span className="text-sm font-bold text-slate-800">
            {new Date(notice.date).getDate()}{" "}
            {new Date(notice.date).toLocaleString("default", {
              month: "short",
            })}
          </span>
          <span className="text-xs text-slate-400">
            {new Date(notice.date).getFullYear()}
          </span>
        </div>

        <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-cyan-100 transition-all duration-300 group-hover:-translate-y-1">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <span
                className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${getPriorityColor(notice.priority)} uppercase tracking-wider flex items-center gap-1`}
              >
                {notice.priority === "high" && <AlertCircle size={10} />}
                {notice.priority} Priority
              </span>
              <span
                className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${getCategoryColor(notice.category)}`}
              >
                {notice.category}
              </span>
            </div>
            {!notice.read && (
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
            )}
          </div>

          {/* Title & Description */}
          <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight group-hover:text-cyan-600 transition-colors">
            {notice.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            {notice.description}
          </p>

          {/* Attachments */}
          {notice.attachments.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {notice.attachments.map((file, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg pl-3 pr-1 py-1.5 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer group/file"
                >
                  {getAttachmentIcon(file.type)}
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-slate-700 max-w-[150px] truncate">
                      {file.name}
                    </span>
                    {file.size && (
                      <span className="text-[9px] text-slate-400">
                        {file.size}
                      </span>
                    )}
                  </div>
                  <button className="p-1.5 hover:bg-white rounded-md text-slate-400 hover:text-cyan-600 transition-colors ml-1">
                    {file.type === "link" ? (
                      <ExternalLink size={14} />
                    ) : (
                      <Download size={14} />
                    )}
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-50">
            <div className="flex items-center gap-4">
              <button className="text-xs font-bold text-slate-500 hover:text-cyan-600 flex items-center gap-1 transition-colors">
                <Eye size={14} /> View
              </button>
              <button className="text-xs font-bold text-slate-500 hover:text-pink-600 flex items-center gap-1 transition-colors">
                <Bookmark size={14} /> Save
              </button>
            </div>

            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all">
              <div className="flex flex-col items-center">
                <span className="text-xs font-bold">Details</span>
                <span className="text-[8px] opacity-80">get in app</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeCard;
