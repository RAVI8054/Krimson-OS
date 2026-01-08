// src/components/navigation/admin/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, Users, UserPlus, Settings, Briefcase, 
  DollarSign, CheckSquare, Bell, FileText, Activity, 
  Server, BarChart, LifeBuoy, Shield, Database, LogOut,
  Building, X 
} from 'lucide-react';

export const ADMIN_MENU_ITEMS = [
  { id: 'ad1', name: "Control Dashboard", path: "/dashboard/admin", icon: <LayoutDashboard size={20} /> },
  { id: 'ad2', name: "Admissions Console", path: "/dashboard/admin/admissions", icon: <UserPlus size={20} /> },
  { id: 'ad3', name: "User Management", path: "/dashboard/admin/users", icon: <Users size={20} /> },
  { id: 'ad4', name: "Class Config", path: "/dashboard/admin/classes", icon: <Building size={20} /> },
  { id: 'ad5', name: "HR Admin", path: "/dashboard/admin/hr", icon: <Briefcase size={20} /> },
  { id: 'ad6', name: "Finance Control", path: "/dashboard/admin/finance", icon: <DollarSign size={20} /> },
  { id: 'ad7', name: "Attendance Oversight", path: "/dashboard/admin/attendance", icon: <CheckSquare size={20} /> },
  { id: 'ad8', name: "Notification Center", path: "/dashboard/admin/notifications", icon: <Bell size={20} /> },
  { id: 'ad9', name: "Compliance Vault", path: "/dashboard/admin/compliance", icon: <FileText size={20} /> },
  { id: 'ad10', name: "Audit Trail", path: "/dashboard/admin/audit", icon: <Activity size={20} /> },
  { id: 'ad11', name: "Infrastructure", path: "/dashboard/admin/infrastructure", icon: <Server size={20} /> },
  { id: 'ad12', name: "Data Recovery", path: "/dashboard/admin/backup", icon: <Database size={20} /> },
  { id: 'ad13', name: "Analytics Engine", path: "/dashboard/admin/analytics", icon: <BarChart size={20} /> },
  { id: 'ad14', name: "System Config", path: "/dashboard/admin/settings", icon: <Settings size={20} /> },
  { id: 'ad15', name: "Support Tickets", path: "/dashboard/admin/helpdesk", icon: <LifeBuoy size={20} /> },
];

const Sidebar = ({ isMobileMenuOpen, setIsMobileMenuOpen, onLogout }) => {

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen && setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-72 p-4 flex flex-col transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
         {/* Gradient Box - Updated to match Screenshot (Cyan -> Blue -> Pink) */}
         <div className="h-full w-full rounded-3xl bg-gradient-to-b from-cyan-400 via-blue-400 to-pink-400 p-4 flex flex-col text-white shadow-2xl relative overflow-hidden">
            
            {/* Glass Effects */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>

            {/* Close Button for Mobile */}
            <button 
               onClick={() => setIsMobileMenuOpen && setIsMobileMenuOpen(false)}
               className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50 md:hidden"
            >
               <X size={20} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-8 pl-2 relative z-10">
               <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm shadow-sm">
                  <Shield size={24} className="text-white" />
               </div>
               <div>
                  <h1 className="font-bold text-lg tracking-wide">Krimson OS</h1>
                  <p className="text-xs text-white/80">Singapore</p>
               </div>
            </div>

            {/* Navigation List */}
            <div className="flex-1 overflow-y-auto space-y-1 relative z-10 custom-scrollbar pr-1">
               {ADMIN_MENU_ITEMS.map((item) => (
                  <NavLink
                     key={item.id}
                     to={item.path}
                     end={item.path === '/dashboard/admin'} 
                     onClick={() => setIsMobileMenuOpen && setIsMobileMenuOpen(false)}
                     className={({ isActive }) => `
                        flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                        ${isActive 
                           ? "bg-white text-blue-600 shadow-md font-bold" 
                           : "text-white/90 hover:bg-white/10 hover:translate-x-1"
                        }
                     `}
                  >
                     <span className={({ isActive }) => isActive ? "text-blue-500" : "text-white"}>{item.icon}</span>
                     <span className="text-sm">{item.name}</span>
                  </NavLink>
               ))}
            </div>

            {/* Footer Profile */}
            <div className="mt-4 pt-4 border-t border-white/20 relative z-10">
               <div 
                onClick={onLogout}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors cursor-pointer"
               >
                  <div className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold text-xs shadow-sm">A</div>
                  <div className="flex-1">
                     <p className="text-sm font-semibold">Administrator</p>
                     <p className="text-[10px] opacity-80">:: Verified</p>
                  </div>
                  <LogOut size={16} className="text-white hover:text-red-200" />
               </div>
            </div>
         </div>
      </div>
    </>
  );
};

export default Sidebar;