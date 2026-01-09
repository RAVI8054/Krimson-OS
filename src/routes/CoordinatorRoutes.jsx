import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AcademicCoordinatorLayout from "../layouts/AcademicCoordinatorLayout";
import CoordinatorDashboard from "../pages/dashboards/coordinator/CoordinatorDashboard";
import CurriculumPlanner from "../pages/dashboards/coordinator/CurriculumPlanner";
import TimetableConsole from "../pages/dashboards/coordinator/TimetableConsole";
import LessonApprovalCenter from "../pages/dashboards/coordinator/LessonApprovalCenter";
import AssessmentTracker from "../pages/dashboards/coordinator/AssessmentTracker";
import ProfilePage from '../pages/common/ProfilePage';

const CoordinatorRoutes = () => {
  return (
    <Routes>
        <Route element={<AcademicCoordinatorLayout />}>
          <Route index element={<CoordinatorDashboard />} />
          <Route path="curriculum" element={<CurriculumPlanner />} />
          <Route path="timetable" element={<TimetableConsole />} />
          <Route path="approval" element={<LessonApprovalCenter />} />
          <Route path="assessment" element={<AssessmentTracker />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
    </Routes>
  );
};

export default CoordinatorRoutes;
