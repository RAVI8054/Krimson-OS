import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegistrarLayout from "../layouts/RegistrarLayout";
import RegistrarDashboard from "../pages/dashboards/registrar/RegistrarDashboard";
import AdmissionsView from "../pages/dashboards/registrar/AdmissionsView";
import RecordsView from "../pages/dashboards/registrar/RecordsView";
import ComplianceView from "../pages/dashboards/registrar/ComplianceView";
import WithdrawalView from "../pages/dashboards/registrar/WithdrawalView";
import ProfilePage from '../pages/common/ProfilePage';

const RegistrarRoutes = () => {
  return (
    <Routes>
        <Route element={<RegistrarLayout />}>
             <Route index element={<RegistrarDashboard />} />
             <Route path="admissions" element={<AdmissionsView />} />
             <Route path="records" element={<RecordsView />} />
             <Route path="compliance" element={<ComplianceView />} />
             <Route path="withdrawals" element={<WithdrawalView />} />
             <Route path="profile" element={<ProfilePage />} />
        </Route>
    </Routes>
  );
};

export default RegistrarRoutes;
