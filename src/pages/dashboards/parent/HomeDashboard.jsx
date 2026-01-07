import React from 'react';
import { PARENT_DATA } from '../../../data/parentData';
import { Calendar, Clock, AlertCircle, CheckCircle2, ArrowRight, Activity } from 'lucide-react';

const HomeDashboard = () => {
  const { user, children, connectedApps, widgets } = PARENT_DATA;
  const activeChild = children[0]; // Defaulting to first child for summary view

  return (
    <div className="space-y-6">
      
      {/* 1. Welcome Banner - Visual Match to Screenshot */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-8 shadow-sm relative overflow-hidden text-white">
        {/* Soft Background Gradient Blob */}
        <div className="absolute top-0 right-0 w-[500px] h-full bg-white opacity-10 blur-3xl rounded-full translate-x-1/2"></div>
        
        <div className="relative z-10 max-w-2xl">
          <span className="bg-white/20 border border-white/30 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            Singapore Campus
          </span>
          <h1 className="text-4xl font-extrabold text-white mt-4 mb-2">
            Parent Dashboard
          </h1>
          <p className="text-white/90 text-lg">
            Welcome, {user.name}. Here is your consolidated daily summary for <span className="font-bold text-white">{activeChild.name}</span>.
          </p>
        </div>
      </div>

      {/* 2. Connected Applications (From Screenshot) */}
      <div>
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Connected Applications</h3>
        <div className="grid grid-cols-6 gap-4">
          {connectedApps.map((app, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center justify-center gap-3 hover:-translate-y-1 transition-transform cursor-pointer">
              <div className={`w-12 h-12 rounded-xl ${app.bg} ${app.color} flex items-center justify-center font-bold text-xl`}>
                {app.icon}
              </div>
              <span className="text-xs font-semibold text-slate-600">{app.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Screen 1 Widgets Area */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Widget: Attendance (Screen 1 Requirement) */}
        <div className="col-span-4 bg-white rounded-3xl p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-slate-700 text-lg">Attendance</h3>
              <p className="text-slate-400 text-xs">Current Month</p>
            </div>
            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
              <CheckCircle2 size={20} />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-4xl font-extrabold text-slate-800">{activeChild.attendance}%</span>
            <span className="text-sm text-green-500 ml-2 font-medium">Excellent</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full mt-4 overflow-hidden">
            <div className="bg-green-500 h-full rounded-full" style={{ width: `${activeChild.attendance}%` }}></div>
          </div>
          <button className="mt-6 text-sm text-blue-500 font-semibold hover:underline flex items-center gap-1">
            View Record <ArrowRight size={14} />
          </button>
        </div>

        {/* Widget: Fee Status (Screen 1 & 8 Requirement) */}
        <div className="col-span-4 bg-white rounded-3xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="absolute right-0 top-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-4 -mt-4"></div>
          <div className="relative z-10">
            <h3 className="font-bold text-slate-700 text-lg">Fee Status</h3>
            <p className="text-slate-400 text-xs">Next Due: {widgets.fees.dueDate}</p>
          </div>
          <div className="mt-4 relative z-10">
            <span className="text-3xl font-bold text-slate-800">{widgets.fees.amount}</span>
            <span className="block text-xs text-red-500 font-semibold bg-red-50 inline-block px-2 py-1 rounded mt-1">
              {widgets.fees.status}
            </span>
          </div>
          <button className="mt-6 w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-500/20 hover:from-cyan-600 hover:to-blue-600 transition-all relative z-10">
            Pay Now
          </button>
        </div>

        {/* Widget: Upcoming Exams (Screen 1 & 5 Requirement) */}
        <div className="col-span-4 bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-700 text-lg">Upcoming Exams</h3>
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <Calendar size={20} />
            </div>
          </div>
          <div className="space-y-3">
            {widgets.exams.map((exam, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="bg-white p-2 rounded-lg shadow-sm text-center min-w-[50px]">
                  <span className="block text-xs text-slate-400 font-bold uppercase">{exam.date.split('-')[1]}</span>
                  <span className="block text-lg font-bold text-slate-800">{exam.date.split('-')[2]}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 text-sm">{exam.subject}</h4>
                  <p className="text-xs text-slate-500">{exam.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Bottom Row: Remarks & Quick Stats */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Synced Data Card (Matching Screenshot style) */}
        <div className="col-span-4 bg-white rounded-3xl p-6 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-teal-50 text-teal-500 rounded-2xl">
            <Activity size={24} />
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-800">Synced</h4>
            <p className="text-sm text-slate-500">Data Integrity</p>
          </div>
        </div>

        {/* Teacher Remarks (Screen 1 Requirement) */}
        <div className="col-span-8 bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-700">Teacher Remarks</h3>
            <span className="text-xs text-slate-400">Last 7 Days</span>
          </div>
          <div className="space-y-3">
            {widgets.remarks.map((remark, i) => (
              <div key={i} className="flex gap-4 items-start border-b border-slate-50 last:border-0 pb-3 last:pb-0">
                <div className="min-w-[4px] h-4 mt-1 bg-blue-400 rounded-full"></div>
                <div>
                  <p className="text-sm text-slate-700 leading-relaxed">"{remark.text}"</p>
                  <p className="text-xs text-slate-400 mt-1 font-medium">— {remark.teacher} • {remark.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeDashboard;
