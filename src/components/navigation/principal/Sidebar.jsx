import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  BookOpen,
  User,
  TrendingUp,
  MessageSquare,
  Monitor,
  DollarSign,
  Users,
  Heart,
  Calendar,
  FileText,
  CheckCircle,
  Mic,
  Target,
  Shield,
  LogOut,
  Scan
} from "lucide-react";

const PrincipalSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { title: "Dashboard", path: "/dashboard/principal", icon: Home },
    { title: "Academic Monitor", path: "/dashboard/principal/academic", icon: BookOpen },
    { title: "Teacher Performance", path: "/dashboard/principal/teachers", icon: User },
    { title: "Student Trends", path: "/dashboard/principal/students", icon: TrendingUp },
    { title: "Communication", path: "/dashboard/principal/communication", icon: MessageSquare },
    { title: "Exam Oversight", path: "/dashboard/principal/exams", icon: Monitor },
    { title: "Finances", path: "/dashboard/principal/finance", icon: DollarSign },
    { title: "Staff management", path: "/dashboard/principal/staff", icon: Users },
    { title: "Welfare Dashboard", path: "/dashboard/principal/welfare", icon: Heart },
    { title: "Calendar & Events", path: "/dashboard/principal/events", icon: Calendar },
    { title: "Reports", path: "/dashboard/principal/reports", icon: FileText },
    { title: "Compliance", path: "/dashboard/principal/compliance", icon: CheckCircle },
    { title: "Meetings", path: "/dashboard/principal/meetings", icon: Mic },
    { title: "Strategy", path: "/dashboard/principal/strategy", icon: Target },
    { title: "Profile", path: "/dashboard/principal/profile", icon: Shield },
  ];

  const isActive = (path) => {
      if (path === "/dashboard/principal" && location.pathname === "/dashboard/principal") return true;
      if (path !== "/dashboard/principal" && location.pathname.startsWith(path)) return true;
      return false;
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <aside className="fixed inset-y-4 left-4 z-50 w-[280px] flex flex-col overflow-hidden rounded-[2.5rem] shadow-2xl shadow-blue-900/10 transition-all duration-300">
      {/* Glossy Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-300 via-blue-300 to-pink-300 opacity-100"></div>
      
      <div className="relative z-10 flex-1 flex flex-col p-6 overflow-hidden">
        {/* Top Logo Area */}
        <div className="flex items-center gap-4 mb-8 shrink-0">
          <div className="w-10 h-10 bg-white/40 backdrop-blur rounded-xl flex items-center justify-center shadow-sm">
             <Shield className="h-6 w-6 text-slate-800" />
          </div>
          <div>
            <h1 className="font-bold text-xl tracking-tight leading-none text-slate-800">Krimson OS</h1>
            <p className="text-xs text-slate-700 mt-1 font-medium">Principal Console</p>
          </div>
        </div>

        {/* Menu List */}
        <nav className="flex-1 overflow-y-auto space-y-1 custom-scrollbar py-2 min-h-0 pr-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all duration-200 group relative ${
                  active 
                    ? 'bg-white/40 backdrop-blur text-slate-900 font-bold shadow-sm' 
                    : 'text-slate-700 hover:text-slate-900 hover:bg-white/20'
                }`}
              >
                <Icon className={`h-5 w-5 ${active ? 'text-slate-900' : 'group-hover:text-slate-900'}`} />
                <span className="tracking-wide text-sm truncate">{item.title}</span>
                {active && <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-slate-800"></div>}
              </Link>
            );
          })}
        </nav>

        {/* Profile / Logout Section */}
        <div className="mt-auto pt-4 border-t border-white/30 shrink-0">
            <div className="bg-white/30 backdrop-blur rounded-2xl p-3 flex items-center gap-3 border border-white/20 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-blue-600 font-bold text-xs shadow-sm">
                  P
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-slate-800 truncate">Dr. Principal</p>
                  <div className="flex items-center gap-1 text-[10px] text-slate-700 font-medium">
                    <Scan className="h-2 w-2" />
                    <span>Verified</span>
                  </div>
                </div>
                <button 
                  onClick={handleLogout} 
                  className="text-slate-600 hover:text-red-600 transition-colors p-1 rounded-lg hover:bg-white/20"
                >
                  <LogOut className="h-4 w-4" />
                </button>
            </div>
        </div>
      </div>
    </aside>
  );
};

export default PrincipalSidebar;
