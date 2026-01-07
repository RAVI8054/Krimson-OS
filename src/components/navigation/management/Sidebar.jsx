import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, GraduationCap, TrendingUp, DollarSign, 
  Activity, ShieldAlert, Target, LogOut, Building2 
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { name: "Institutional Overview", path: "/dashboard/management/overview", icon: <LayoutDashboard size={20} /> }, // Screen 1
    { name: "Academic Outcomes", path: "/dashboard/management/academics", icon: <GraduationCap size={20} /> }, // Screen 2
    { name: "Admissions Growth", path: "/dashboard/management/admissions", icon: <TrendingUp size={20} /> }, // Screen 3
    { name: "Financial Health", path: "/dashboard/management/finance", icon: <DollarSign size={20} /> }, // Screen 4
    { name: "Operational Ops", path: "/dashboard/management/operations", icon: <Activity size={20} /> }, // Screen 5
    { name: "Compliance & Risk", path: "/dashboard/management/compliance", icon: <ShieldAlert size={20} /> }, // Screen 6
    { name: "Strategic Planning", path: "/dashboard/management/strategy", icon: <Target size={20} /> }, // Screen 7
  ];

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="h-screen w-72 p-4 flex flex-col fixed left-0 top-0 z-50">
      {/* Gradient Container matching Screenshot */}
      <div className="h-full w-full rounded-3xl bg-gradient-to-b from-cyan-400 via-blue-400 to-pink-400 p-4 flex flex-col text-white shadow-2xl relative overflow-hidden">
        
        {/* Decorative Blur Elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>

        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-8 pl-2 relative z-10">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <Building2 size={24} className="text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-wide">Krimson OS</h1>
            <p className="text-xs text-white/80">Executive Suite</p>
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
              {({ isActive }) => (
                <>
                  <span className={isActive ? "text-blue-500" : "text-white"}>{item.icon}</span>
                  <span className="text-sm">{item.name}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Profile Footer */}
        <div className="mt-4 pt-4 border-t border-white/20 relative z-10">
          <div 
            onClick={handleLogout}
            className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-md cursor-pointer hover:bg-white/20 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-white text-blue-500 flex items-center justify-center font-bold text-xs">M</div>
            <div className="flex-1">
              <p className="text-sm font-semibold">Management</p>
              <p className="text-[10px] opacity-80">:: Director</p>
            </div>
            <LogOut size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
