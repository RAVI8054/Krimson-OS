import React from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import HelpHeader from '../../../components/dashboard/student/HelpAndSupport/HelpHeader';
import HelpOptions from '../../../components/dashboard/student/HelpAndSupport/HelpOptions';
import WellnessBanner from '../../../components/dashboard/student/HelpAndSupport/WellnessBanner';

const HelpAndSupport = () => {
  const { helpAndSupport } = STUDENT_DATA;

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <HelpHeader />

      <HelpOptions options={helpAndSupport.options} />

      <WellnessBanner concerns={helpAndSupport.concerns} />
    </div>
  );
};

export default HelpAndSupport;
