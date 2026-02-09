import React, { useState } from "react";
import {
  X,
  CheckCheck,
  Tag,
  Flag,
  MoreVertical,
  ShieldAlert,
  Paperclip,
  Send,
  Shield,
} from "lucide-react";

const MessageDetail = ({
  selectedThread,
  activeTab,
  getTabIcon,
  getTabGradient,
  setSelectedThread,
  setShowMobileList,
}) => {
  const [replyText, setReplyText] = useState("");

  const handleSendMessage = () => {
    if (replyText.trim()) {
      console.log("Sending message:", replyText);
      setReplyText("");
    }
  };

  return (
    <div className="flex-1 bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl shadow-2xl border border-white/60 overflow-hidden flex flex-col hover:shadow-cyan-500/10 transition-all duration-300 h-full">
      {/* Header */}
      <div className="p-3 md:p-4 lg:p-6 border-b border-slate-200/60 flex justify-between items-center bg-gradient-to-r from-white/95 to-cyan-50/40 backdrop-blur-2xl sticky top-0 z-20 shadow-sm">
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4 flex-1">
          {/* Mobile Back Button */}
          <button
            onClick={() => {
              setSelectedThread(null);
              setShowMobileList(true);
            }}
            className="lg:hidden p-2 hover:bg-slate-100 rounded-xl transition-colors active:scale-95"
          >
            <X size={20} className="text-slate-600" />
          </button>
          <div
            className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-xl bg-gradient-to-br ${getTabGradient(activeTab)} animate-gradient`}
          >
            {getTabIcon(activeTab)}
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-base md:text-lg lg:text-xl font-bold text-slate-800 truncate">
              {selectedThread.sender}
            </h2>
            <p className="text-xs md:text-sm text-slate-500 font-medium truncate">
              {selectedThread.role || selectedThread.title}
            </p>
            {selectedThread.readReceipt && (
              <p className="text-[10px] md:text-xs text-cyan-600 font-medium mt-0.5 md:mt-1 flex items-center gap-1">
                <CheckCheck size={10} className="md:w-3 md:h-3" /> Read at{" "}
                {selectedThread.readReceipt.time}
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-1.5 md:gap-2">
          {(activeTab === "messages" || activeTab === "counselor") && (
            <>
              <button
                className="hidden md:flex items-center gap-2 px-3 lg:px-4 py-2 lg:py-2.5 bg-amber-50 text-amber-700 font-bold rounded-lg lg:rounded-xl text-xs hover:bg-amber-100 hover:shadow-lg transition-all duration-300 border border-amber-200 shadow-sm hover:scale-105 active:scale-95"
                title="Mark for follow-up"
              >
                <Tag size={14} />
                <span className="hidden lg:inline">Follow-up</span>
              </button>
              <button className="md:hidden p-2 bg-amber-50 text-amber-700 rounded-lg border border-amber-200 hover:bg-amber-100 transition-all active:scale-95">
                <Tag size={16} />
              </button>
              <button className="hidden md:flex items-center gap-2 px-3 lg:px-4 py-2 lg:py-2.5 bg-red-50 text-red-600 font-bold rounded-lg lg:rounded-xl text-xs hover:bg-red-100 hover:shadow-lg transition-all duration-300 border border-red-200 shadow-sm hover:scale-105 active:scale-95">
                <Flag size={14} />
                <span className="hidden lg:inline">Escalate</span>
              </button>
              <button className="md:hidden p-2 bg-red-50 text-red-600 rounded-lg border border-red-200 hover:bg-red-100 transition-all active:scale-95">
                <Flag size={16} />
              </button>
            </>
          )}
          <button className="p-2 md:p-2.5 text-slate-600 hover:bg-slate-100 rounded-lg md:rounded-xl transition-all duration-300 hover:scale-110 active:scale-95">
            <MoreVertical size={16} className="md:w-[18px] md:h-[18px]" />
          </button>
        </div>
      </div>

      {/* Content / Chat History */}
      <div className="flex-1 overflow-y-auto p-3 md:p-5 lg:p-8 bg-gradient-to-br from-slate-50/50 to-cyan-50/20 custom-scrollbar">
        {selectedThread.history ? (
          <div className="space-y-3 md:space-y-4 lg:space-y-6 max-w-4xl mx-auto">
            {/* Date Divider */}
            <div className="flex justify-center sticky top-0 z-10 py-2">
              <span className="bg-white/90 backdrop-blur-md text-slate-600 text-[10px] md:text-xs font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full uppercase tracking-wide shadow-lg border border-slate-200/60">
                {selectedThread.date}
              </span>
            </div>

            {selectedThread.history.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.isMe ? "justify-end" : "justify-start"} animate-fadeIn`}
              >
                <div
                  className={`max-w-[85%] md:max-w-[80%] lg:max-w-[75%] p-3 md:p-4 lg:p-5 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-xl text-xs md:text-sm leading-relaxed relative transition-all duration-300 ${
                    msg.isMe
                      ? "bg-gradient-to-br from-cyan-500 via-blue-500 to-pink-500 text-white rounded-tr-sm hover:scale-[1.02]"
                      : "bg-white text-slate-700 border border-slate-200/60 rounded-tl-sm hover:scale-[1.02]"
                  }`}
                >
                  {!msg.isMe && (
                    <p className="text-[10px] md:text-xs font-bold mb-1.5 md:mb-2 opacity-70">
                      {msg.sender}
                    </p>
                  )}
                  <p className="leading-relaxed">{msg.text}</p>
                  <div className="flex items-center justify-between mt-2 md:mt-3 gap-2 md:gap-3">
                    <p
                      className={`text-[9px] md:text-[10px] font-medium ${msg.isMe ? "text-blue-100" : "text-slate-400"}`}
                    >
                      {msg.time}
                    </p>
                    {msg.read && msg.isMe && (
                      <CheckCheck
                        size={12}
                        className="md:w-[14px] md:h-[14px] text-blue-200"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200/60 hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4 mb-4 md:mb-6">
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${getTabGradient(activeTab)} animate-gradient flex-shrink-0`}
                >
                  {getTabIcon(activeTab)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1 md:mb-2">
                    {selectedThread.title || "Announcement"}
                  </h3>
                  <p className="text-[10px] md:text-xs text-slate-500 font-medium">
                    {selectedThread.sender} • {selectedThread.time}
                  </p>
                </div>
                {selectedThread.urgent && (
                  <span className="bg-red-50 text-red-600 text-[10px] md:text-xs px-2.5 md:px-3 py-1 md:py-1.5 rounded-full font-bold border border-red-200 flex items-center gap-1 md:gap-1.5 shadow-sm flex-shrink-0">
                    <ShieldAlert size={10} className="md:w-3 md:h-3" />{" "}
                    <span className="hidden sm:inline">Urgent</span>
                  </span>
                )}
              </div>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                {selectedThread.content}
              </p>
              {selectedThread.tags && (
                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-slate-200/60 flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] md:text-xs text-slate-500 font-medium">
                    Tags:
                  </span>
                  {selectedThread.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-full font-bold border border-cyan-200 hover:scale-105 transition-transform duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer Action Area */}
      {(activeTab === "messages" || activeTab === "counselor") && (
        <div className="p-3 md:p-4 lg:p-6 bg-white/95 backdrop-blur-2xl border-t border-slate-200/60 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-2 md:gap-3">
              <button className="p-2 md:p-3 text-slate-600 hover:bg-slate-100 rounded-lg md:rounded-xl transition-all duration-300 border border-slate-200/60 hover:border-slate-300 hover:scale-110 active:scale-95 flex-shrink-0">
                <Paperclip size={18} className="md:w-5 md:h-5" />
              </button>
              <input
                type="text"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 md:px-5 py-2 md:py-3 bg-slate-50 border border-slate-200/60 rounded-xl md:rounded-2xl text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 font-medium hover:bg-white transition-all duration-300"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 text-white font-bold rounded-xl md:rounded-2xl text-xs md:text-sm shadow-lg shadow-blue-500/30 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-1.5 md:gap-2 flex-shrink-0"
              >
                <Send size={16} className="md:w-[18px] md:h-[18px]" />
                <span className="hidden sm:inline">Send</span>
              </button>
            </div>
            <p className="text-[10px] md:text-xs text-slate-400 mt-2 md:mt-3 text-center font-medium">
              <span className="inline-flex items-center gap-1">
                <Shield size={10} className="md:w-3 md:h-3" />
                <span className="hidden sm:inline">
                  Messages are encrypted and PDPA compliant
                </span>
                <span className="sm:hidden">PDPA Encrypted</span>
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageDetail;
