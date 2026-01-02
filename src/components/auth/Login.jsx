import React, { useState } from "react";
import { Shield, Lock, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Role definitions
const ROLES = {
  STUDENT: "Student",
  TEACHER: "Teacher",
  PARENT: "Parent",
  PRINCIPAL: "Principal",
  ADMIN: "Administrator",
  FINANCE: "Finance",
  MANAGEMENT: "Management",
  REGISTRAR: "Registrar",
  COORDINATOR: "Academic Coordinator",
  COUNSELOR: "Counselor",
  LIBRARIAN: "Librarian",
  IT_ADMIN: "IT/System Admin",
};

const Login = () => {
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");

  // Initialize the navigation hook
  const navigate = useNavigate();

  const handleLogin = (role) => {
    console.log(`Attempting login as: ${role}`);

    // Check if the selected role is Administrator
    if (role === ROLES.ADMIN) {
      navigate("/dashboard/admin");
    } else {
      // Placeholder for other roles
      alert(
        `The ${role} dashboard is coming soon! Please select 'Administrator' to see the demo.`
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-300 via-blue-300 to-pink-300 flex items-center justify-center p-2 sm:p-4 font-sans selection:bg-blue-100">
      {/* Main Glass Card Container */}
      <div className="max-w-6xl w-full bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-[3rem] shadow-2xl shadow-purple-900/10 overflow-hidden flex flex-col lg:flex-row min-h-[500px] sm:min-h-[600px] border border-white/50">
        {/* LEFT SIDEBAR: Branding & Info */}
        <div className="lg:w-5/12 flex flex-col justify-between relative overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-300 via-blue-300 to-pink-300"></div>

          {/* Top Branding */}
          <div className="relative z-10 p-6 sm:p-8 lg:p-12 text-slate-800">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/40 backdrop-blur rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-sm">
              <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-slate-800" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 tracking-tight">
              Krimson OS
            </h1>
            <p className="text-slate-700 text-sm sm:text-base lg:text-lg">
              Centralized School Ecosystem
            </p>
          </div>

          {/* Bottom Info */}
          <div className="relative z-10 p-6 sm:p-8 lg:p-12 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-3 text-slate-700">
              <div className="p-1.5 sm:p-2 bg-white/40 rounded-lg shadow-sm">
                <Lock className="h-3 w-3 sm:h-4 sm:w-4 text-slate-800" />
              </div>
              <span className="font-medium text-sm sm:text-base">
                Secure SSO Gateway
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-slate-700">
              <div className="p-1.5 sm:p-2 bg-white/40 rounded-lg shadow-sm">
                <Globe className="h-3 w-3 sm:h-4 sm:w-4 text-slate-800" />
              </div>
              <span className="font-medium text-sm sm:text-base">
                7 Apps Connected
              </span>
            </div>
            <p className="pt-2 text-left text-xs text-slate-600">
              Restricted Access • Krimson OS v2.4 • Singapore
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Login Form */}
        <div className="lg:w-7/12 p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            Authorized Login
          </h2>
          <p className="text-slate-500 mb-6 sm:mb-8 text-sm sm:text-base">
            Access the Singapore Campus Portal. Authentication via SSO.
          </p>

          {/* Simulation of SSO Login Form */}
          <div className="space-y-4 mb-6 sm:mb-8">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email / User ID
              </label>
              <input
                type="text"
                value={authEmail}
                onChange={(e) => setAuthEmail(e.target.value)}
                className="w-full p-3 border border-slate-200 bg-white/50 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm sm:text-base"
                placeholder="e.g. aarav.p@krimson.edu"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={authPassword}
                onChange={(e) => setAuthPassword(e.target.value)}
                className="w-full p-3 border border-slate-200 bg-white/50 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm sm:text-base"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Role Selection Grid */}
          <p className="text-xs text-slate-400 mb-3 sm:mb-4 uppercase font-bold tracking-wider">
            Select Role to Simulate Access:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 max-h-[250px] sm:max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
            {Object.values(ROLES).map((role) => (
              <button
                key={role}
                onClick={() => handleLogin(role)}
                className="p-2.5 sm:p-3 rounded-xl border border-slate-200 bg-white hover:bg-blue-50 hover:border-blue-200 hover:shadow-sm transition-all text-left text-xs sm:text-sm font-semibold text-slate-600 hover:text-blue-700 flex justify-between items-center group"
              >
                <span className="truncate">{role}</span>
                <span className="text-slate-300 group-hover:text-blue-500 transition-colors flex-shrink-0 ml-2">
                  &rarr;
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
