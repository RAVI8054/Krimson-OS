import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  Activity, Shield, Database, FileText, 
  Server, LogOut 
} from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const menuItems = [
    { name: "System Health", path: "/dashboard/it-admin/health", icon: <Activity size={20} /> }, // Screen 1
    { name: "Access Control", path: "/dashboard/it-admin/security", icon: <Shield size={20} /> }, // Screen 2
    { name: "Backup Center", path: "/dashboard/it-admin/backup", icon: <Database size={20} /> }, // Screen 3
    { name: "Audit Logs", path: "/dashboard/it-admin/audit", icon: <FileText size={20} /> }, // Screen 4
  ];

  return (
    <div className="h-screen w-72 p-4 flex flex-col fixed left-0 top-0 z-50">
      {/* Gradient Container */}
      <div className="h-full w-full rounded-3xl bg-gradient-to-b from-cyan-400 via-blue-400 to-pink-400 p-4 flex flex-col text-white shadow-2xl relative overflow-hidden">
        
        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-8 pl-2 relative z-10">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <Server size={24} className="text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-wide">Krimson OS</h1>
            <p className="text-xs text-white/80">System Admin</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto space-y-1 relative z-10 custom-scrollbar">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? "bg-white text-blue-600 shadow-md font-bold" 
                    : "text-white/90 hover:bg-white/10 hover:translate-x-1"
                }`
              }
            >
              <span className={({ isActive }) => isActive ? "text-blue-500" : "text-white"}>{item.icon}</span>
              <span className="text-sm">{item.name}</span>
            </NavLink>
          ))}
        </div>

        {/* Profile Footer */}
        <div className="mt-4 pt-4 border-t border-white/20 relative z-10">
          <div 
             onClick={handleLogout}
             className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-md cursor-pointer hover:bg-white/20 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-white text-blue-500 flex items-center justify-center font-bold text-xs">IT</div>
            <div className="flex-1">
              <p className="text-sm font-semibold">IT Admin</p>
              <p className="text-[10px] opacity-80">:: Root Access</p>
            </div>
            <LogOut size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
