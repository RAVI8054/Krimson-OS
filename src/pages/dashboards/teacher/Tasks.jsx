import React from 'react';
import TasksAndNotifications from '../../../components/common/TasksAndNotifications';
import { TEACHER_DATA } from '../../../data/teacherData';

/**
 * Teacher Tasks & Notifications
 * Uses: src/pages/common/TasksAndNotifications.jsx
 * Screen 9: Notifications & To-Do Center
 */
const Tasks = () => {
  const { tasks, notifications } = TEACHER_DATA;
  return (
    <TasksAndNotifications 
      role="teacher"
      tasks={tasks} 
      notifications={notifications}
    />
  );
};

export default Tasks;
