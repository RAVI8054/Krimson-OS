import React, { useState } from "react";
import { STUDENT_DATA } from "../../../data/studentData";
import ParentHeader from "../../../components/dashboard/student/ParentLinkDashboard/ParentHeader";
import ParentInfoCard from "../../../components/dashboard/student/ParentLinkDashboard/ParentInfoCard";
import StudentMirrorCard from "../../../components/dashboard/student/ParentLinkDashboard/StudentMirrorCard";
import CommunicationFeed from "../../../components/dashboard/student/ParentLinkDashboard/CommunicationFeed";
import TeacherComments from "../../../components/dashboard/student/ParentLinkDashboard/TeacherComments";
import JointActivities from "../../../components/dashboard/student/ParentLinkDashboard/JointActivities";

/**
 * Parent Link Dashboard - Screen 13
 * Purpose: Synchronization between student and parent accounts
 * Future: Replace static data with Parent Module + Communication Sync API
 */
const ParentLinkDashboard = () => {
  const { parentLinkData } = STUDENT_DATA;
  const [acknowledgedItems, setAcknowledgedItems] = useState(new Set());

  // Future API: Acknowledge message or activity
  const handleAcknowledge = (itemId, type) => {
    console.log(`Future API: POST /api/student/parentlink/acknowledge`, {
      itemId,
      type,
    });
    setAcknowledgedItems((prev) => new Set([...prev, itemId]));
  };

  // Count unread items
  const unreadMessages = parentLinkData.parentalMessages.filter(
    (m) => !m.read,
  ).length;
  const unreadComments = parentLinkData.teacherComments.filter(
    (c) => !c.read,
  ).length;

  return (
    <div className="space-y-6">
      {/* Header - Parent Sync Status */}
      <ParentHeader unreadCount={unreadMessages + unreadComments} />

      {/* Parent Info Card */}
      <ParentInfoCard parentInfo={parentLinkData.parentInfo} />

      {/* Data Mirror Section */}
      <StudentMirrorCard mirrorData={parentLinkData.mirrorData} />

      {/* Parental Messages */}
      <CommunicationFeed
        messages={parentLinkData.parentalMessages}
        unreadCount={unreadMessages}
        onAcknowledge={handleAcknowledge}
        acknowledgedItems={acknowledgedItems}
      />

      {/* Teacher Comments */}
      <TeacherComments
        comments={parentLinkData.teacherComments}
        unreadCount={unreadComments}
      />

      {/* Joint Activities */}
      <JointActivities
        activities={parentLinkData.jointActivities}
        onAcknowledge={handleAcknowledge}
        acknowledgedItems={acknowledgedItems}
      />
    </div>
  );
};

export default ParentLinkDashboard;
