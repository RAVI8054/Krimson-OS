import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/navigation/student/Sidebar';
import { Search, Bell } from 'lucide-react';
import { STUDENT_DATA } from '../data/studentData';

const StudentLayout = () => {
  return (
    <div className="min-h-screen bg-[#f3f5f9] flex font-sans">
      <Sidebar />
      <div className="flex-1 ml-72 p-8 overflow-x-hidden">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Student Dashboard</h2>
            <p className="text-slate-500 text-sm mt-1">Welcome back to your learning journey!</p>
          </div>
          <div className="flex items-center gap-5">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search lessons, assignments..." 
                className="pl-10 pr-4 py-3 w-72 rounded-full border-none bg-white shadow-sm focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-shadow"
              />
            </div>
            <button className="p-3 bg-white rounded-full shadow-sm text-slate-600 relative hover:text-blue-500 transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="flex items-center gap-3 bg-white p-1.5 pr-4 rounded-full shadow-sm cursor-pointer hover:shadow-md transition-shadow">
               <img src={STUDENT_DATA.user.avatar} alt="Profile" className="w-9 h-9 rounded-full object-cover" />
               <div className="hidden md:block text-left">
                  <p className="text-xs font-bold text-slate-700">{STUDENT_DATA.user.name}</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">{STUDENT_DATA.user.role}</p>
               </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="animate-in fade-in duration-500">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default StudentLayout;
