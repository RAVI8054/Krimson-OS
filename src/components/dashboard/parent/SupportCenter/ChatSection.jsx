import React from "react";
import { Bot, User, Paperclip, Send } from "lucide-react";

const ChatSection = ({
  chatMessages,
  setChatMessages,
  chatInput,
  setChatInput,
  handleSendMessage,
}) => {
  return (
    <div className="relative z-10 max-w-4xl mx-auto">
      <div
        className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl border border-white/60 overflow-hidden flex flex-col"
        style={{ height: "calc(100vh - 280px)", minHeight: "500px" }}
      >
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Bot size={20} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-bold">Support Chat</h3>
            <p className="text-white/80 text-xs">
              Typically responds in 5 minutes
            </p>
          </div>
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {chatMessages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === "user"
                    ? "bg-gradient-to-br from-cyan-500 to-blue-500"
                    : "bg-gradient-to-br from-purple-500 to-pink-500"
                }`}
              >
                {message.sender === "user" ? (
                  <User size={16} className="text-white" />
                ) : (
                  <Bot size={16} className="text-white" />
                )}
              </div>
              <div
                className={`flex-1 ${message.sender === "user" ? "flex justify-end" : ""}`}
              >
                <div
                  className={`max-w-md px-4 py-3 rounded-2xl ${
                    message.sender === "user"
                      ? "bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-tr-sm"
                      : "bg-slate-100 text-slate-800 rounded-tl-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <span
                    className={`text-[10px] mt-1 block ${
                      message.sender === "user"
                        ? "text-white/70"
                        : "text-slate-500"
                    }`}
                  >
                    {message.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-slate-200 bg-slate-50/50">
          <div className="flex items-center gap-2">
            <button className="p-2.5 hover:bg-slate-200 rounded-lg transition-colors">
              <Paperclip size={20} className="text-slate-500" />
            </button>
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 bg-white border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all"
            />
            <button
              onClick={handleSendMessage}
              disabled={!chatInput.trim()}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-2 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-2"
            >
              <Send size={18} />
              <div className="flex flex-col items-center">
                <span className="text-xs font-bold">Send</span>
                <span className="text-[8px] opacity-80">get in app</span>
              </div>
            </button>
          </div>
          <p className="text-[10px] text-slate-500 mt-2 text-center">
            Live chat is available during school hours (8 AM - 5 PM)
          </p>
        </div>
      </div>
    </div>
  );
};
export default ChatSection;
