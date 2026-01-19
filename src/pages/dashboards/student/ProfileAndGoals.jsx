import React from 'react';
import UserProfile from '../../../components/common/UserProfile';
import { STUDENT_DATA } from '../../../data/studentData';

/**
 * Student Profile & Goals
 * Uses: src/pages/common/UserProfile.jsx
 * Screen 10: Profile & Access Management
 */
import { authService } from '../../../services/authService';

const ProfileAndGoals = () => {
  const { profile } = STUDENT_DATA;
  const user = authService.getCurrentUser() || STUDENT_DATA.user;

  return (
    <UserProfile 
      role="student" 
      user={user}
      detailedInfo={profile}
    />
  );
};

export default ProfileAndGoals;
