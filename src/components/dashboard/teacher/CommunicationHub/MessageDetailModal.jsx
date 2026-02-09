import React from "react";
import { Tag, X, Send, Archive } from "lucide-react";

const MessageDetailModal = ({
  selectedMessage,
  setSelectedMessage,
  getTagColor,
  formatTime,
}) => {
  if (!selectedMessage) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-start justify-between mb-6 pb-6 border-b border-slate-200">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`px-3 py-1 rounded-lg text-xs font-bold border ${getTagColor(selectedMessage.tag)}`}
              >
                <Tag size={12} className="inline mr-1" />
                {selectedMessage.tag}
              </span>
              <span
                className={`px-3 py-1 rounded-lg text-xs font-bold ${selectedMessage.type === "direct" ? "bg-purple-100 text-purple-700" : "bg-green-100 text-green-700"}`}
              >
                {selectedMessage.type === "direct"
                  ? "Direct Message"
                  : "Broadcast"}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              {selectedMessage.subject}
            </h2>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <span className="font-bold">{selectedMessage.from}</span>
              <span>•</span>
              <span>{formatTime(selectedMessage.timestamp)}</span>
              {selectedMessage.studentName && (
                <>
                  <span>•</span>
                  <span>Re: {selectedMessage.studentName}</span>
                </>
              )}
            </div>
          </div>
          <button
            onClick={() => setSelectedMessage(null)}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Message Content */}
        <div className="mb-6">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-slate-700 whitespace-pre-wrap leading-relaxed">
              {selectedMessage.content}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button className="px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 shadow-md transition-all flex items-center justify-center gap-2">
            <Send size={18} />
            <div className="text-left">
              <div>Reply</div>
              <div className="text-[10px] opacity-80">get in app</div>
            </div>
          </button>
          <button className="px-6 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            <Archive size={18} />
            <div className="text-left">
              <div>Archive</div>
              <div className="text-[10px] text-slate-400">get in app</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageDetailModal;
