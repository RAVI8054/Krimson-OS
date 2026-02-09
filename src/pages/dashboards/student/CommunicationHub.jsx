import React, { useState } from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import CommunicationHeader from "../../../components/dashboard/student/CommunicationHub/CommunicationHeader";
import CategoryTabs from "../../../components/dashboard/student/CommunicationHub/CategoryTabs";
import MessagesList from "../../../components/dashboard/student/CommunicationHub/MessagesList";

/**
 * Student Communication Hub - Screen 8
 * Read-only message viewer with categorized sections
 * Future: Replace static data with backend API calls
 */
const CommunicationHub = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedMessage, setExpandedMessage] = useState(null);
  const [acknowledgedMessages, setAcknowledgedMessages] = useState(new Set());
  const { communicationMessages, communicationCategories } = STUDENT_DATA;

  // Filter messages based on selection
  const filteredMessages =
    selectedCategory === "all"
      ? communicationMessages
      : communicationMessages.filter(
          (msg) => msg.category === selectedCategory,
        );

  const unreadCount = communicationMessages.filter((msg) => msg.unread).length;

  const handleAcknowledge = (messageId) => {
    setAcknowledgedMessages((prev) => new Set([...prev, messageId]));
    // Future: API call to backend
    console.log("Message acknowledged:", messageId);
  };

  const handleToggleExpand = (messageId) => {
    setExpandedMessage(expandedMessage === messageId ? null : messageId);
  };

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col gap-6">
      {/* Header */}
      <CommunicationHeader unreadCount={unreadCount} />

      {/* Category Tabs */}
      <CategoryTabs
        categories={communicationCategories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        messages={communicationMessages}
      />

      {/* Messages Grid */}
      <MessagesList
        messages={filteredMessages}
        expandedMessageId={expandedMessage}
        acknowledgedMessages={acknowledgedMessages}
        onToggleExpand={handleToggleExpand}
        onAcknowledge={handleAcknowledge}
      />
    </div>
  );
};

export default CommunicationHub;
