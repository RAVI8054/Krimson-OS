import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrincipalLayout from "../layouts/PrincipalLayout";
import PrincipalDashboard from "../pages/dashboards/principal/PrincipalDashboard";
import AcademicMonitor from "../pages/dashboards/principal/AcademicMonitor";
import TeacherPerformance from "../pages/dashboards/principal/TeacherPerformance";
import StudentTrends from "../pages/dashboards/principal/StudentTrends";
import CommunicationConsole from "../pages/dashboards/principal/CommunicationConsole";
import ExamOversight from "../pages/dashboards/principal/ExamOversight";
import FinanceSnapshot from "../pages/dashboards/principal/FinanceSnapshot";
import StaffManagement from "../pages/dashboards/principal/StaffManagement";
import WelfareDashboard from "../pages/dashboards/principal/WelfareDashboard";
import EventControl from "../pages/dashboards/principal/EventControl";
import ReportsGenerator from "../pages/dashboards/principal/ReportsGenerator";
import ComplianceCenter from "../pages/dashboards/principal/ComplianceCenter";
import MeetingHub from "../pages/dashboards/principal/MeetingHub";
import StrategicPlanning from "../pages/dashboards/principal/StrategicPlanning";
import PrincipalProfile from "../pages/dashboards/principal/PrincipalProfile";

const PrincipalRoutes = () => {
  return (
    <Routes>
        <Route element={<PrincipalLayout />}>
          <Route index element={<PrincipalDashboard />} />
          <Route path="academic" element={<AcademicMonitor />} />
          <Route path="teachers" element={<TeacherPerformance />} />
          <Route path="students" element={<StudentTrends />} />
          <Route path="communication" element={<CommunicationConsole />} />
          <Route path="exams" element={<ExamOversight />} />
          <Route path="finance" element={<FinanceSnapshot />} />
          <Route path="staff" element={<StaffManagement />} />
          <Route path="welfare" element={<WelfareDashboard />} />
          <Route path="events" element={<EventControl />} />
          <Route path="reports" element={<ReportsGenerator />} />
          <Route path="compliance" element={<ComplianceCenter />} />
          <Route path="meetings" element={<MeetingHub />} />
          <Route path="strategy" element={<StrategicPlanning />} />
          <Route path="profile" element={<PrincipalProfile />} />
        </Route>
    </Routes>
  );
};

export default PrincipalRoutes;
