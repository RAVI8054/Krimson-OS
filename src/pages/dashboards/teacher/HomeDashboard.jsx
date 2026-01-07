import React from 'react';
import { TEACHER_DATA } from '../../../data/teacherData';
import { Clock, CheckCircle, AlertTriangle, BookOpen, UserCheck, Calendar } from 'lucide-react';

const HomeDashboard = () => {
  const { dashboard } = TEACHER_DATA;

  return (
    <div className="space-y-8">
      {/* Crimson Header Band */}
      <div className="bg-gradient-to-r from-rose-600 to-red-500 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Welcome Back, {TEACHER_DATA.user.name.split(' ')[1]}</h1>
          <p className="opacity-90">Here is your academic summary for today.</p>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
         <div className="bg-white p-6 rounded-3xl shadow-sm border-l-4 border-blue-500">
            <p className="text-xs font-bold text-slate-400 uppercase">Classes Today</p>
            <h3 className="text-2xl font-bold text-slate-800 mt-2">{dashboard.classesToday.length}</h3>
         </div>
         <div className="bg-white p-6 rounded-3xl shadow-sm border-l-4 border-orange-500">
            <p className="text-xs font-bold text-slate-400 uppercase">Pending Review</p>
            <h3 className="text-2xl font-bold text-slate-800 mt-2">{dashboard.pendingAssignments}</h3>
         </div>
         <div className="bg-white p-6 rounded-3xl shadow-sm border-l-4 border-green-500">
            <p className="text-xs font-bold text-slate-400 uppercase">Attendance</p>
            <h3 className="text-2xl font-bold text-slate-800 mt-2">Marked</h3>
            <p className="text-xs text-green-500">2/3 Classes done</p>
         </div>
         <div className="bg-white p-6 rounded-3xl shadow-sm border-l-4 border-red-500">
            <p className="text-xs font-bold text-slate-400 uppercase">Alerts</p>
            <h3 className="text-2xl font-bold text-slate-800 mt-2">{dashboard.alerts.length}</h3>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* Classes Today */}
         <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Calendar className="text-rose-500" /> Classes Today
            </h3>
            <div className="space-y-4">
               {dashboard.classesToday.map((cls) => (
                 <div key={cls.id} className="p-4 border border-slate-100 rounded-2xl flex items-center justify-between hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-4">
                       <div className="p-3 bg-rose-50 text-rose-600 rounded-xl font-bold text-xs">{cls.time}</div>
                       <div>
                          <h4 className="font-bold text-slate-700">{cls.subject}</h4>
                          <p className="text-xs text-slate-500">{cls.grade} • {cls.room}</p>
                       </div>
                    </div>
                    <button className="px-4 py-2 bg-slate-800 text-white text-xs font-bold rounded-xl hover:bg-slate-900">
                       Start Class
                    </button>
                 </div>
               ))}
            </div>
         </div>

         {/* Alerts & Actions */}
         <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
               <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                 <AlertTriangle className="text-orange-500" /> Performance Alerts
               </h3>
               <div className="space-y-3">
                  {dashboard.alerts.map((alert) => (
                    <div key={alert.id} className="flex gap-3 items-start p-3 bg-orange-50 rounded-xl">
                       <div className="w-2 h-2 mt-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                       <div>
                          <p className="text-sm font-bold text-slate-700">{alert.type}</p>
                          <p className="text-xs text-slate-600">{alert.msg}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <button className="p-4 bg-blue-50 text-blue-600 rounded-2xl font-bold text-sm hover:bg-blue-100 flex flex-col items-center gap-2">
                  <UserCheck size={24} /> Take Attendance
               </button>
               <button className="p-4 bg-purple-50 text-purple-600 rounded-2xl font-bold text-sm hover:bg-purple-100 flex flex-col items-center gap-2">
                  <BookOpen size={24} /> Upload Lesson
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
