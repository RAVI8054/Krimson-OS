import React, { useState, useEffect } from "react";
import { TEACHER_DATA } from "../../../data/teacherData";
import CommunicationHubHeader from "../../../components/dashboard/teacher/CommunicationHub/CommunicationHubHeader";
import QuickStats from "../../../components/dashboard/teacher/CommunicationHub/QuickStats";
import MessageTemplatesBanner from "../../../components/dashboard/teacher/CommunicationHub/MessageTemplatesBanner";
import MessageActionFilterBar from "../../../components/dashboard/teacher/CommunicationHub/MessageActionFilterBar";
import MessageList from "../../../components/dashboard/teacher/CommunicationHub/MessageList";
import MessageDetailModal from "../../../components/dashboard/teacher/CommunicationHub/MessageDetailModal";
import ComplianceNotice from "../../../components/dashboard/teacher/CommunicationHub/ComplianceNotice";
import EmptyState from "../../../components/dashboard/teacher/CommunicationHub/EmptyState";

const CommunicationHub = () => {
  // Sample message data mapped from TEACHER_DATA
  const [messages] = useState(
    TEACHER_DATA.messages.map((msg) => ({
      id: msg.id,
      type: msg.from === "You" ? "broadcast" : "direct",
      from: msg.from,
      studentName: msg.from.includes("Parent of")
        ? msg.from.replace("Parent of ", "")
        : null,
      subject: msg.content.substring(0, 30) + "...", // Generate subject from content if missing
      preview: msg.content.substring(0, 50) + "...",
      content: msg.content,
      timestamp: new Date().toISOString(), // Mock timestamp as it's relative in data
      read: !msg.unread,
      replied: false,
      tag: "Academic", // Default tag
      archived: false,
    })),
  );

  // Message templates mapped from TEACHER_DATA
  const templates = TEACHER_DATA.communicationTemplates.map((t) => ({
    id: t.id,
    name: t.title,
    category: "General", // Default category
    content: t.content,
  }));

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [filterType, setFilterType] = useState("all"); // 'all', 'direct', 'broadcast', 'unread'
  const [filterTag, setFilterTag] = useState("all"); // 'all', 'Academic', 'Attendance', 'Behavior'
  const [searchQuery, setSearchQuery] = useState("");
  const [showTemplates, setShowTemplates] = useState(false);
  const [showCompose, setShowCompose] = useState(false);

  // Filter messages
  const filteredMessages = messages.filter((msg) => {
    // Filter by type
    if (filterType !== "all") {
      if (filterType === "direct" && msg.type !== "direct") return false;
      if (filterType === "broadcast" && msg.type !== "broadcast") return false;
      if (filterType === "unread" && msg.read) return false;
    }

    // Filter by tag
    if (filterTag !== "all" && msg.tag !== filterTag) return false;

    // Filter by search
    if (searchQuery) {
      return (
        msg.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
        msg.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (msg.studentName &&
          msg.studentName.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return true;
  });

  // Calculate statistics
  const stats = {
    total: messages.length,
    unread: messages.filter((m) => !m.read).length,
    direct: messages.filter((m) => m.type === "direct").length,
    broadcast: messages.filter((m) => m.type === "broadcast").length,
  };

  // Mock API call
  useEffect(() => {
    console.log("Communication Hub loaded - Ready for API integration");
  }, []);

  // Get tag color
  const getTagColor = (tag) => {
    switch (tag) {
      case "Academic":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Attendance":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "Behavior":
        return "bg-purple-100 text-purple-700 border-purple-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  // Format timestamp
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    const hours = Math.floor(diff / (1000 * 60 * 60));

    if (hours < 1) return "Just now";
    if (hours < 24) return `${hours}h ago`;
    if (hours < 48) return "Yesterday";
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section */}
      <CommunicationHubHeader stats={stats} setShowCompose={setShowCompose} />

      {/* Quick Stats */}
      <QuickStats
        stats={stats}
        filterType={filterType}
        setFilterType={setFilterType}
      />

      {/* Message Templates Banner */}
      <MessageTemplatesBanner
        templates={templates}
        showTemplates={showTemplates}
        setShowTemplates={setShowTemplates}
      />

      {/* Action Bar */}
      <MessageActionFilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterTag={filterTag}
        setFilterTag={setFilterTag}
      />

      {/* Messages List */}
      {filteredMessages.length > 0 ? (
        <MessageList
          filteredMessages={filteredMessages}
          setSelectedMessage={setSelectedMessage}
          getTagColor={getTagColor}
          formatTime={formatTime}
        />
      ) : (
        <EmptyState
          searchQuery={searchQuery}
          filterType={filterType}
          filterTag={filterTag}
        />
      )}

      {/* PDPA Compliance Notice */}
      <ComplianceNotice />

      {/* Message Detail Modal */}
      <MessageDetailModal
        selectedMessage={selectedMessage}
        setSelectedMessage={setSelectedMessage}
        getTagColor={getTagColor}
        formatTime={formatTime}
      />
    </div>
  );
};

export default CommunicationHub;
