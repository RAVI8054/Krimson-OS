import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

// Import your pages
import Login from "./components/auth/Login";
import AdminDashboard from "./components/dashboard/AdminDashboard";

// --- Helper Component ---
// This wrapper ensures the dashboard can access the router to log out
const DashboardWrapper = () => {
  const navigate = useNavigate();

  // This function runs when you click the logout button in the Dashboard sidebar
  const handleLogout = () => {
    navigate("/login");
  };

  return <AdminDashboard onLogout={handleLogout} />;
};

export default function App() {
  return (
    <Routes>
      {/* Redirect root URL to /login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* The Login Page */}
      <Route path="/login" element={<Login />} />

      {/* The Administrator Dashboard Route */}
      <Route path="/dashboard/admin" element={<DashboardWrapper />} />

      {/* Fallback for other dashboard routes not yet built */}
      <Route
        path="/dashboard/*"
        element={
          <div className="p-10 text-center text-slate-500">
            Other dashboards coming soon...
          </div>
        }
      />
    </Routes>
  );
}
