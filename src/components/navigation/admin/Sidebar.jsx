import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Users, UserPlus, Settings, Briefcase, 
  DollarSign, CheckSquare, Bell, FileText, Activity, 
  Server, BarChart, LifeBuoy, Shield, Database, LogOut,
  Building, Menu 
} from 'lucide-react';

export const ADMIN_MENU_ITEMS = [
  { id: 'ad1', name: "Dashboard", path: "/dashboard/admin/", icon: <LayoutDashboard size={20} />, title: "Admin Overview" },
  { id: 'ad2', name: "Admissions", path: "/dashboard/admin/admissions", icon: <UserPlus size={20} />, title: "Admissions Console" },
  { id: 'ad3', name: "Users", path: "/dashboard/admin/users", icon: <Users size={20} />, title: "User Management" },
  { id: 'ad4', name: "Classes", path: "/dashboard/admin/classes", icon: <Building size={20} />, title: "Class Configuration" },
  { id: 'ad5', name: "HR & Staff", path: "/dashboard/admin/hr", icon: <Briefcase size={20} />, title: "HR Administration" },
  { id: 'ad6', name: "Finance", path: "/dashboard/admin/finance", icon: <DollarSign size={20} />, title: "Finance Control" },
  { id: 'ad7', name: "Attendance", path: "/dashboard/admin/attendance", icon: <CheckSquare size={20} />, title: "Attendance Oversight" },
  { id: 'ad8', name: "Notifications", path: "/dashboard/admin/notifications", icon: <Bell size={20} />, title: "Communication Center" },
  { id: 'ad9', name: "Compliance", path: "/dashboard/admin/compliance", icon: <FileText size={20} />, title: "Compliance Vault" },
  { id: 'ad10', name: "Audit Log", path: "/dashboard/admin/audit", icon: <Activity size={20} />, title: "System Audit Trail" },
  { id: 'ad11', name: "Infrastructure", path: "/dashboard/admin/infrastructure", icon: <Server size={20} />, title: "Asset Management" },
  { id: 'ad12', name: "Backups", path: "/dashboard/admin/backup", icon: <Database size={20} />, title: "Data Recovery" },
  { id: 'ad13', name: "Analytics", path: "/dashboard/admin/analytics", icon: <BarChart size={20} />, title: "Analytics Engine" },
  { id: 'ad14', name: "Settings", path: "/dashboard/admin/settings", icon: <Settings size={20} />, title: "System Configuration" },
  { id: 'ad15', name: "Helpdesk", path: "/dashboard/admin/helpdesk", icon: <LifeBuoy size={20} />, title: "Support Tickets" },
];

const Sidebar = ({ isMobileMenuOpen, setIsMobileMenuOpen, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
       onLogout();
    } else {
       navigate('/login');
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen && setIsMobileMenuOpen(false)}
        />
      )}

      {/* Floating Sidebar Container */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-72 p-4 flex flex-col transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
         {/* Gradient Box */}
         <div className="h-full w-full rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-4 flex flex-col text-white shadow-2xl relative overflow-hidden">
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 -left-10 w-40 h-40 bg-purple-400 opacity-20 rounded-full blur-2xl"></div>

            {/* Header */}
            <div className="flex items-center gap-3 mb-6 pl-2 relative z-10">
               <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm shadow-md">
                  <Shield size={24} className="text-white" />
               </div>
               <div>
                  <h1 className="font-bold text-lg tracking-wide">Krimson OS</h1>
                  <p className="text-xs text-white/80">Admin Console</p>
               </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto space-y-1 relative z-10 custom-scrollbar pr-1">
               {ADMIN_MENU_ITEMS.map((item) => (
                  <NavLink
                     key={item.id}
                     to={item.path}
                     end={item.path === '/dashboard/admin/'}
                     onClick={() => setIsMobileMenuOpen && setIsMobileMenuOpen(false)}
                     className={({ isActive }) => `
                        flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200
                        ${isActive 
                           ? "bg-white text-blue-600 shadow-lg font-bold" 
                           : "text-white/90 hover:bg-white/10 hover:translate-x-1"
                        }
                     `}
                  >
                     <span className={({ isActive }) => isActive ? "text-blue-500" : "text-white"}>{item.icon}</span>
                     <span className="text-xs font-medium">{item.name}</span>
                  </NavLink>
               ))}
            </div>

            {/* Footer */}
            <div className="mt-4 pt-4 border-t border-white/20 relative z-10">
               <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors">
                  <div className="flex items-center gap-3 flex-1">
                     <div className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold text-xs shadow-sm">A</div>
                     <div className="flex-1">
                        <p className="text-sm font-semibold">Administrator</p>
                        <p className="text-[10px] opacity-80">:: Verified</p>
                     </div>
                  </div>
                  <button onClick={handleLogout} className="text-white hover:text-red-200 p-1 transition-colors">
                     <LogOut size={16} />
                  </button>
               </div>
            </div>
         </div>
      </div>
    </>
  );
};

export default Sidebar;
