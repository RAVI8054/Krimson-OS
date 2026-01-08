import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import PrincipalSidebar from "../components/navigation/principal/Sidebar";
import { authService } from "../services/authService";
import { Menu } from "lucide-react";

const PrincipalLayout = () => {
  const [user, setUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
  }, []);

  const displayName = user?.name || "User";
  const userRole = user?.role || "Principal";
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <div className="flex min-h-screen bg-slate-50">
      <PrincipalSidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <div className="flex-1 md:ml-80 transition-all duration-300">
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200 px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 bg-white/50 backdrop-blur border border-white/50 rounded-xl shadow-sm hover:shadow-md transition-all text-slate-600"
            >
              <Menu size={20} />
            </button>
          <h2 className="text-xl font-semibold text-slate-800">
            {userRole} Dashboard
          </h2>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-500">Welcome, {displayName}</span>
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-300 via-blue-300 to-pink-300 flex items-center justify-center text-white font-bold shadow-md ring-2 ring-white">
              {initial}
            </div>
          </div>
        </header>
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PrincipalLayout;
