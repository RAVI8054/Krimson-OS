import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Calendar, CalendarCheck, FileText, BookOpen, 
  CheckSquare, Award, MessageSquare, BarChart2, CreditCard, 
  Activity, UserCircle, Users, Trophy, HelpCircle, LogOut, X 
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const menuItems = [
    { name: "Dashboard", path: "/dashboard/student/", icon: <LayoutDashboard size={20} /> }, // Screen 1
    { name: "Timetable", path: "/dashboard/student/timetable", icon: <Calendar size={20} /> }, // Screen 2
    { name: "Attendance", path: "/dashboard/student/attendance", icon: <CalendarCheck size={20} /> }, // Screen 3
    { name: "Assignments", path: "/dashboard/student/assignments", icon: <FileText size={20} /> }, // Screen 4
    { name: "Resources", path: "/dashboard/student/resources", icon: <BookOpen size={20} /> }, // Screen 5
    { name: "Exams", path: "/dashboard/student/exams", icon: <CheckSquare size={20} /> }, // Screen 6
    { name: "Grades", path: "/dashboard/student/grades", icon: <Award size={20} /> }, // Screen 7
    { name: "Messages", path: "/dashboard/student/communication", icon: <MessageSquare size={20} /> }, // Screen 8
    { name: "Analytics", path: "/dashboard/student/analytics", icon: <BarChart2 size={20} /> }, // Screen 9
    { name: "Fees", path: "/dashboard/student/fees", icon: <CreditCard size={20} /> }, // Screen 10
    { name: "Behavior", path: "/dashboard/student/behavior", icon: <Activity size={20} /> }, // Screen 11
    { name: "Profile", path: "/dashboard/student/profile", icon: <UserCircle size={20} /> }, // Screen 12
    { name: "Parent Link", path: "/dashboard/student/parentlink", icon: <Users size={20} /> }, // Screen 13
    { name: "Activities", path: "/dashboard/student/activities", icon: <Trophy size={20} /> }, // Screen 14
    { name: "Support", path: "/dashboard/student/support", icon: <HelpCircle size={20} /> }, // Screen 15
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <div className={`h-screen w-72 p-4 flex flex-col fixed left-0 top-0 z-50 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
      {/* Gradient Container - Updated to Cyan-Blue-Pink to match previous sidebars */}
      <div className="h-full w-full rounded-3xl bg-gradient-to-b from-cyan-400 via-blue-400 to-pink-400 p-4 flex flex-col text-white shadow-2xl relative overflow-hidden">
        
        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>

        {/* Close Button for Mobile */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50 md:hidden"
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-6 pl-2 relative z-10">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm shadow-sm">
             <Trophy size={24} className="text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-wide">Krimson OS</h1>
            <p className="text-xs text-white/80">Student Portal</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto space-y-1 relative z-10 custom-scrollbar pr-1">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              end={item.path === '/dashboard/student/'} // Only exact match for root
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? "bg-white text-blue-600 shadow-md font-bold" 
                    : "text-white/90 hover:bg-white/10 hover:translate-x-1"
                }`
              }
            >
              <span className={({ isActive }) => isActive ? "text-blue-500" : "text-white"}>{item.icon}</span>
              <span className="text-xs font-medium">{item.name}</span>
            </NavLink>
          ))}
        </div>

        {/* Profile Footer */}
        <div className="mt-4 pt-4 border-t border-white/20 relative z-10">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors">
            <NavLink to="/dashboard/student/profile" className="flex items-center gap-3 flex-1">
                <div className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold text-xs shadow-sm">S</div>
                <div className="flex-1">
                <p className="text-sm font-semibold">Student</p>
                <p className="text-[10px] opacity-80">:: Scholar</p>
                </div>
            </NavLink>
            <button onClick={handleLogout} className="text-white hover:text-blue-100 p-1 transition-colors">
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