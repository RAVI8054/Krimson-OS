import React from 'react';
import UserProfile from '../../../components/common/UserProfile';
import { TEACHER_DATA } from '../../../data/teacherData';

/**
 * Teacher Profile
 * Uses: src/pages/common/UserProfile.jsx
 * Screen 10: Profile & Access Management
 */
const TeacherProfile = () => {
  const { user, portfolio } = TEACHER_DATA;
  
  // Normalize data if needed
  const normalizedUser = {
      ...user,
      email: "sarah.m@school.edu", // Adding missing data found in original component mock
      location: "Science Block, Room 204"
  };

  return (
    <UserProfile 
      role="teacher" 
      user={normalizedUser}
      detailedInfo={portfolio}
    />
  );
};

export default TeacherProfile;

