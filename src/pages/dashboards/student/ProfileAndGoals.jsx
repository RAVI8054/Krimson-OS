import React from 'react';
import UserProfile from '../../../components/common/UserProfile';
import { STUDENT_DATA } from '../../../data/studentData';

/**
 * Student Profile & Goals
 * Uses: src/pages/common/UserProfile.jsx
 * Screen 10: Profile & Access Management
 */
const ProfileAndGoals = () => {
  const { user, profile } = STUDENT_DATA;

  return (
    <UserProfile 
      role="student" 
      user={user}
      detailedInfo={profile}
    />
  );
};

export default ProfileAndGoals;
