import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/navigation/registrar/Sidebar";
import { authService } from "../services/authService";
import { Menu } from "lucide-react";

const RegistrarLayout = () => {
  const [user, setUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
  }, []);

  const displayName = user?.name || "Registrar";
  const userRole = user?.role || "Registrar";
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <div className="flex-1 md:ml-[280px] transition-all duration-300 flex flex-col min-h-screen">
         {/* Top Decoration similar to monolithic file */}
         <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-100/50 to-transparent pointer-events-none z-0"></div>

        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200 px-8 py-4 flex justify-between items-center relative">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 bg-white/50 backdrop-blur border border-white/50 rounded-xl shadow-sm hover:shadow-md transition-all text-slate-600"
            >
              <Menu size={20} />
            </button>
          <h2 className="text-xl font-semibold text-slate-800">
            {userRole} Workspace
          </h2>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-500">Welcome, {displayName}</span>
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg">
              {initial}
            </div>
          </div>
        </header>

        <main className="p-8 relative z-10 flex-1 overflow-y-auto pb-24">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RegistrarLayout;
