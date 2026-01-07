import React from 'react';
import UnifiedCalendar from '../../../components/common/UnifiedCalendar';
import { TEACHER_DATA } from '../../../data/teacherData';

/**
 * Teacher Academic Calendar
 * Uses: src/pages/common/UnifiedCalendar.jsx
 * Screen 6: Events & Calendar Planner
 */
const AcademicCalendar = () => {
  const { calendarEvents } = TEACHER_DATA;

  const handleCreateEvent = () => {
      console.log("Create Event Clicked - Role restricted");
  };

  return (
    <UnifiedCalendar 
      role="teacher" 
      events={calendarEvents}
      onCreateEvent={handleCreateEvent}
    />
  );
};

export default AcademicCalendar;
