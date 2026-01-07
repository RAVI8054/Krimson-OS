import React from 'react';
import UnifiedCommunicationHub from '../../../components/common/UnifiedCommunicationHub';
import { TEACHER_DATA } from '../../../data/teacherData';

/**
 * Teacher Communication Hub
 * Uses: src/pages/common/UnifiedCommunicationHub.jsx
 * Screen 7: Communication Hub / Messaging
 */
const CommunicationHub = () => {
  return (
    <UnifiedCommunicationHub 
      role="teacher" 
      data={TEACHER_DATA} 
    />
  );
};

export default CommunicationHub;
