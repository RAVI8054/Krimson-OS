import React from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { Clock, Book, AlertCircle, ArrowRight, PlayCircle } from 'lucide-react';

const HomeDashboard = () => {
  const { dashboard, user } = STUDENT_DATA;

  return (
    <div className="space-y-8">
      {/* Motivational Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-500 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
         <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
         <div className="relative z-10 max-w-2xl">
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Welcome Back</span>
            <h1 className="text-4xl font-bold mb-2">Hello, {user.name.split(' ')[0]}!</h1>
            <p className="opacity-90 text-lg">You have <span className="font-bold underline">{dashboard.assignmentsDue} assignments</span> due today. Let's get started!</p>
            <div className="mt-6 flex gap-3">
               <button className="px-6 py-2.5 bg-white text-blue-600 font-bold rounded-xl text-sm hover:bg-blue-50">View Assignments</button>
               <button className="px-6 py-2.5 bg-blue-700 text-white font-bold rounded-xl text-sm hover:bg-blue-800">Check Grades</button>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Next Class Card */}
         <div className="bg-white p-6 rounded-3xl shadow-sm border-l-4 border-yellow-400">
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-4 flex items-center gap-2">
               <Clock size={14}/> Next Class
            </h3>
            <div className="flex justify-between items-start">
               <div>
                  <h2 className="text-2xl font-bold text-slate-800">{dashboard.nextClass.subject}</h2>
                  <p className="text-slate-500 text-sm font-medium mt-1">{dashboard.nextClass.time}</p>
                  <p className="text-slate-400 text-xs mt-2">{dashboard.nextClass.room} • {dashboard.nextClass.teacher}</p>
               </div>
               <div className="p-3 bg-yellow-50 text-yellow-600 rounded-2xl">
                  <PlayCircle size={28} />
               </div>
            </div>
            <button className="w-full mt-6 py-2 bg-slate-800 text-white text-xs font-bold rounded-xl hover:bg-slate-900">Join Class Now</button>
         </div>

         {/* Stats Grid */}
         <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm flex items-center gap-4">
               <div className="relative w-20 h-20">
                  <svg className="w-full h-full transform -rotate-90">
                     <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
                     <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="226" strokeDashoffset={226 - (226 * parseFloat(user.attendance))/100} className="text-green-500" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-slate-700">{user.attendance}</span>
               </div>
               <div>
                  <h4 className="font-bold text-slate-700">Attendance</h4>
                  <p className="text-xs text-slate-400">You are doing great!</p>
               </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col justify-center">
               <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-slate-700">Exam Countdown</h4>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-[10px] font-bold uppercase">{dashboard.examCountdown.days} Days Left</span>
               </div>
               <p className="text-sm font-medium text-slate-600 mb-1">{dashboard.examCountdown.subject}</p>
               <div className="text-xs text-blue-500 font-bold cursor-pointer hover:underline flex items-center gap-1">
                  View Syllabus <ArrowRight size={12}/>
               </div>
            </div>
         </div>
      </div>

      {/* Notifications */}
      <div className="bg-white p-8 rounded-3xl shadow-sm">
         <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2"><AlertCircle size={20} className="text-blue-500"/> Recent Alerts</h3>
         <div className="space-y-4">
            {dashboard.notifications.map(notif => (
               <div key={notif.id} className="flex items-center gap-4 p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <p className="text-sm font-medium text-slate-600 flex-1">{notif.text}</p>
                  <button className="text-xs font-bold text-slate-400 hover:text-blue-600">Dismiss</button>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
