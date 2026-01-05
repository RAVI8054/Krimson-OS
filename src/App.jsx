import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import your pages
import LoginPage from "./pages/auth/LoginPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import WelcomeLanding from "./pages/landing/WelcomeLanding";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import StudentDashboard from "./pages/dashboards/StudentDashboard";
import TeacherDashboard from "./pages/dashboards/TeacherDashboard";


// --- Helper Component ---
import { toast } from 'react-toastify';

// ... (imports)

// This wrapper ensures the dashboard can access the router to log out
const AdminDashboardWrapper = () => {
  const navigate = useNavigate();

  // This function runs when you click the logout button in the Dashboard sidebar
  const handleLogout = () => {
    toast.info("Logged out successfully");
    navigate("/login");
  };

  return <AdminDashboard onLogout={handleLogout} />;
};

export default function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
      <Routes>
        {/* Redirect root URL to /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* The Login Page */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
        <Route path="/welcome" element={<WelcomeLanding />} />

        {/* The Administrator Dashboard Route */}
        <Route path="/dashboard/admin" element={<AdminDashboardWrapper />} />

        {/* The Student Dashboard Route */}
        <Route path="/dashboard/student" element={<StudentDashboard />} />

        {/* The Teacher Dashboard Route */}
        <Route path="/dashboard/teacherdashboard" element={<TeacherDashboard />} />

        {/* The Global Overview Dashboard Route */}


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
    </>
  );
}
