import React from 'react';
import UnifiedCommunicationHub from '../../../components/common/UnifiedCommunicationHub';
import { STUDENT_DATA } from '../../../data/studentData';

/**
 * Student Communication Hub
 * Uses: src/pages/common/UnifiedCommunicationHub.jsx
 * Screen 7: Communication Hub / Messaging
 */
const CommunicationHub = () => {
  return (
    <UnifiedCommunicationHub 
      role="student" 
      data={STUDENT_DATA} 
    />
  );
};

export default CommunicationHub;

