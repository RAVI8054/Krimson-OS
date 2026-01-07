import React from 'react';
import { TEACHER_DATA } from '../../../data/teacherData';
import { Clock, CheckCircle, AlertTriangle, BookOpen, UserCheck, Calendar } from 'lucide-react';

const HomeDashboard = () => {
  const { dashboard } = TEACHER_DATA;

  return (
    <div className="space-y-8">
      {/* Crimson Header Band */}
      {/* Gradient Header Band */}
      <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-20 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>
        <div className="relative z-10">
          <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-4 backdrop-blur-sm shadow-sm">Academic Overview</div>
          <h1 className="text-3xl font-bold mb-2 tracking-tight">Welcome Back, {TEACHER_DATA.user.name.split(' ')[1]}</h1>
          <p className="opacity-90 font-medium">Here is your schedule and summary for today.</p>
          
          <div className="mt-6 flex gap-3">
             <button className="px-5 py-2 bg-white text-blue-600 rounded-xl text-xs font-bold shadow-md hover:bg-blue-50 transition-colors">View Schedule</button>
             <button className="px-5 py-2 bg-blue-700/50 text-white rounded-xl text-xs font-bold hover:bg-blue-700/70 transition-colors backdrop-blur-sm">Create Task</button>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
         <div className="bg-white p-6 rounded-3xl shadow-sm border-l-4 border-cyan-400 group hover:shadow-md transition-all">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Classes Today</p>
            <h3 className="text-2xl font-bold text-slate-800 mt-2 group-hover:text-cyan-600 transition-colors">{dashboard.classesToday.length}</h3>
         </div>
         <div className="bg-white p-6 rounded-3xl shadow-sm border-l-4 border-blue-400 group hover:shadow-md transition-all">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pending Review</p>
            <h3 className="text-2xl font-bold text-slate-800 mt-2 group-hover:text-blue-600 transition-colors">{dashboard.pendingAssignments}</h3>
         </div>
         <div className="bg-white p-6 rounded-3xl shadow-sm border-l-4 border-purple-400 group hover:shadow-md transition-all">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Attendance</p>
            <h3 className="text-2xl font-bold text-slate-800 mt-2 group-hover:text-purple-600 transition-colors">Marked</h3>
            <p className="text-xs text-green-500 font-bold mt-1">2/3 Classes done</p>
         </div>
         <div className="bg-white p-6 rounded-3xl shadow-sm border-l-4 border-pink-400 group hover:shadow-md transition-all">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Alerts</p>
            <h3 className="text-2xl font-bold text-slate-800 mt-2 group-hover:text-pink-600 transition-colors">{dashboard.alerts.length}</h3>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* Classes Today */}
         {/* Classes Today */}
         <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2 text-lg">
              <Calendar className="text-blue-500" /> Classes Today
            </h3>
            <div className="space-y-4">
               {dashboard.classesToday.map((cls) => (
                 <div key={cls.id} className="p-4 border border-slate-100 rounded-2xl flex items-center justify-between hover:bg-blue-50/50 hover:border-blue-100 transition-all cursor-pointer group">
                    <div className="flex items-center gap-4">
                       <div className="p-3 bg-blue-50 text-blue-600 rounded-xl font-bold text-xs group-hover:bg-blue-100 transition-colors">{cls.time}</div>
                       <div>
                          <h4 className="font-bold text-slate-700">{cls.subject}</h4>
                          <p className="text-xs text-slate-500 font-medium">{cls.grade} • {cls.room}</p>
                       </div>
                    </div>
                    <button className="px-4 py-2 bg-slate-800 text-white text-xs font-bold rounded-xl hover:bg-slate-900 shadow-sm transition-transform active:scale-95">
                       Start Class
                    </button>
                 </div>
               ))}
            </div>
         </div>

         {/* Alerts & Actions */}
         {/* Alerts & Actions */}
         <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm h-fit">
               <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2 text-lg">
                 <AlertTriangle className="text-pink-500" /> Recent Alerts
               </h3>
               <div className="space-y-3">
                  {dashboard.alerts.map((alert) => (
                    <div key={alert.id} className="flex gap-3 items-start p-3 bg-pink-50/50 border border-pink-100 rounded-xl">
                       <div className="w-2 h-2 mt-2 bg-pink-500 rounded-full flex-shrink-0 animate-pulse"></div>
                       <div>
                          <p className="text-sm font-bold text-slate-700">{alert.type}</p>
                          <p className="text-xs text-slate-600 leading-relaxed">{alert.msg}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <button className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 text-blue-600 border border-blue-100 rounded-2xl font-bold text-sm hover:shadow-md transition-all flex flex-col items-center gap-2 group">
                  <div className="p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
                      <UserCheck size={20} className="text-cyan-500" />
                  </div>
                  <span>Take Attendance</span>
               </button>
               <button className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 text-pink-600 border border-pink-100 rounded-2xl font-bold text-sm hover:shadow-md transition-all flex flex-col items-center gap-2 group">
                  <div className="p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
                      <BookOpen size={20} className="text-pink-500" />
                  </div>
                  <span>Upload Lesson</span>
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
