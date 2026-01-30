import React from 'react';
import SupportHelpCenter from '../../../components/common/SupportHelpCenter';
import { TEACHER_DATA } from '../../../data/teacherData';

/**
 * Teacher Support Wrapper
 * Screen 12: Support & Help Center
 */
const Support = () => {
  const { support } = TEACHER_DATA;
  return (
    <SupportHelpCenter 
      role="teacher" 
      userTickets={support.tickets}
      faqs={support.faqs}
      tutorials={support.tutorials}
    />
  );
};

export default Support;
