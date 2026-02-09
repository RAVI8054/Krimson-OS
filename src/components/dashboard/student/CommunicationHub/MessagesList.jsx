import React from "react";
import MessageCard from "./MessageCard";
import { MessageCircle } from "lucide-react";

const MessagesList = ({
  messages,
  expandedMessageId,
  acknowledgedMessages,
  onToggleExpand,
  onAcknowledge,
}) => {
  if (messages.length === 0) {
    return (
      <div className="flex-1 overflow-y-auto">
        <div className="col-span-full flex flex-col items-center justify-center py-20 text-slate-400">
          <MessageCircle size={64} className="opacity-20 mb-4" />
          <p className="text-lg font-medium">No messages in this category</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {messages.map((message) => (
          <MessageCard
            key={message.id}
            message={message}
            isExpanded={expandedMessageId === message.id}
            isAcknowledged={acknowledgedMessages.has(message.id)}
            onToggleExpand={onToggleExpand}
            onAcknowledge={onAcknowledge}
          />
        ))}
      </div>
    </div>
  );
};

export default MessagesList;
