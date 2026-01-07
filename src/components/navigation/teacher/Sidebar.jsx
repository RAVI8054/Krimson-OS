import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  Users, BookOpen, CalendarCheck, FileText, 
  BarChart2, MessageSquare, Calendar, Activity, 
  CheckSquare, Book, FileBarChart, PenTool, PieChart, LogOut,
  LayoutDashboard
} from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const menuItems = [
    { name: "Dashboard", path: "/dashboard/teacher/home", icon: <LayoutDashboard size={20} /> }, // Screen 1
    { name: "My Classes & subjects", path: "/dashboard/teacher/classes", icon: <Users size={20} /> }, // Screen 2
    { name: "Lesson Plans", path: "/dashboard/teacher/lessons", icon: <BookOpen size={20} /> }, // Screen 3
    { name: "Attendance & class log", path: "/dashboard/teacher/attendance", icon: <CalendarCheck size={20} /> }, // Screen 4
    { name: "Assignments", path: "/dashboard/teacher/assignments", icon: <FileText size={20} /> }, // Screen 5
    { name: "Gradebook", path: "/dashboard/teacher/grades", icon: <BarChart2 size={20} /> }, // Screen 6
    { name: "Messages Hub", path: "/dashboard/teacher/communication", icon: <MessageSquare size={20} /> }, // Screen 7
    { name: "Calendar & Planner", path: "/dashboard/teacher/calendar", icon: <Calendar size={20} /> }, // Screen 8
    { name: "Student Insights", path: "/dashboard/teacher/insights", icon: <Activity size={20} /> }, // Screen 9
    { name: "Exams & Tests", path: "/dashboard/teacher/tests", icon: <CheckSquare size={20} /> }, // Screen 10
    { name: "Reports & Analytics", path: "/dashboard/teacher/reports", icon: <FileBarChart size={20} /> }, // Screen 11
    { name: "Resources Library", path: "/dashboard/teacher/resources", icon: <Book size={20} /> }, // Screen 12
    { name: "Feedback & Reflections", path: "/dashboard/teacher/reflection", icon: <PenTool size={20} /> }, // Screen 13
    { name: "Attendance Summary", path: "/dashboard/teacher/attendance-summary", icon: <PieChart size={20} /> }, // Screen 14
    { name: "Support Center", path: "/dashboard/teacher/support", icon: <MessageSquare size={20} /> }, // Screen 12 (New)
    // Screen 15 is accessed via profile at bottom
  ];

  return (
    <div className="h-screen w-72 p-4 flex flex-col fixed left-0 top-0 z-50">
      {/* Gradient Container - Updated to Cyan-Blue-Pink */}
      <div className="h-full w-full rounded-3xl bg-gradient-to-b from-cyan-400 via-blue-400 to-pink-400 p-4 flex flex-col text-white shadow-2xl relative overflow-hidden">
        
        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 -left-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-6 pl-2 relative z-10">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm shadow-sm">
            <BookOpen size={24} className="text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-wide">Krimson OS</h1>
            <p className="text-xs text-white/80">Teacher Portal</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto space-y-1 relative z-10 custom-scrollbar pr-1">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
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
            <NavLink to="/dashboard/teacher/profile" className="flex items-center gap-3 flex-1">
                <div className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold text-xs shadow-sm">T</div>
                <div className="flex-1">
                <p className="text-sm font-semibold">Teacher</p>
                <p className="text-[10px] opacity-80">:: Faculty</p>
                </div>
            </NavLink>
            <button onClick={handleLogout} className="text-white hover:text-red-200 p-1 transition-colors">
                <LogOut size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;