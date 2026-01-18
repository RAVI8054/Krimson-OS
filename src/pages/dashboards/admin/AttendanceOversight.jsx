/**
 * @component AttendanceOversight
 * @description Real-time attendance monitoring and alert system
 */
import React from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { 
  AlertTriangle, 
  CheckCircle, 
  Users, 
  Clock, 
  Calendar,
  MoreHorizontal,
  XCircle,
  Filter
} from 'lucide-react';

const AttendanceOversight = () => {
  const { attendanceLog } = ADMIN_DATA;

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      
      {/* ========================================
          HEADER SECTION WITH GRADIENT THEME
          ======================================== */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        
        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                  Daily Monitoring
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                   <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                   Live Capture
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Attendance Oversight
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Monitor student and staff presence, track patterns, and maximize engagement.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 flex gap-6">
                <div className="text-center">
                   <p className="text-xs text-white/70 uppercase font-bold tracking-wider">Overall</p>
                   <p className="text-2xl font-bold text-white">94.8%</p>
                </div>
                <div className="w-px bg-white/20"></div>
                <div className="text-center">
                   <p className="text-xs text-white/70 uppercase font-bold tracking-wider">Absentees</p>
                   <p className="text-2xl font-bold text-pink-200">58</p>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          TOOLBAR
          ======================================== */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
         <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-slate-800 ml-2">Class Reports</h2>
            <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-lg">{attendanceLog.length} Classes</span>
         </div>
         <div className="flex gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold rounded-xl transition-colors">
               <Calendar size={18} />
               <span>{new Date().toLocaleDateString()}</span>
            </button>
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold rounded-xl transition-colors">
               <Filter size={18} />
               <span>Filter</span>
            </button>
         </div>
      </div>

      {/* ========================================
          CLASS CARDS GRID
          ======================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {/* Alert Card First */}
         <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-3xl border border-orange-200 hover:shadow-lg transition-all group flex flex-col justify-between">
            <div>
               <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-orange-100 text-orange-600 rounded-2xl">
                     <AlertTriangle size={24} />
                  </div>
                  <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs font-bold rounded-lg border border-orange-200">
                     Action Required
                  </span>
               </div>
               <h3 className="text-xl font-bold text-orange-900 mb-1">Low Attendance Alert</h3>
               <p className="text-sm text-orange-700/80 font-medium leading-snug">
                  Grade 8B has reported <span className="font-bold underline">15% absentees</span> today. Threshold exceeded.
               </p>
            </div>
            
            <button className="mt-6 w-full py-3 bg-white text-orange-600 text-sm font-bold rounded-xl shadow-sm hover:bg-orange-50 transition-colors border border-orange-100">
               Investigate Issue
            </button>
         </div>

         {/* Class Cards */}
         {attendanceLog.map((log, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all group relative overflow-hidden">
               {/* Decorative Side Bar */}
               <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />

               <div className="flex justify-between items-center mb-6 pl-2">
                  <div>
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Class Section</p>
                     <h3 className="text-2xl font-extrabold text-slate-800">Grade {log.class}</h3>
                  </div>
                  <div className={`
                     px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-2
                     ${log.teacher ? 'bg-green-50 text-green-700' : 'bg-slate-50 text-slate-500'}
                  `}>
                     <div className={`w-2 h-2 rounded-full ${log.teacher ? 'bg-green-500 animate-pulse' : 'bg-slate-400'}`} />
                     {log.teacher || "Unassigned"}
                  </div>
               </div>

               <div className="flex gap-4 mb-6 pl-2">
                  <div className="flex-1 bg-green-50/50 p-3 rounded-2xl border border-green-100 flex flex-col items-center group-hover:bg-green-50 transition-colors">
                     <CheckCircle size={18} className="text-green-500 mb-1" />
                     <span className="text-2xl font-bold text-green-700">{log.present}</span>
                     <span className="text-[10px] font-bold text-green-600 uppercase">Present</span>
                  </div>
                  <div className="flex-1 bg-red-50/50 p-3 rounded-2xl border border-red-100 flex flex-col items-center group-hover:bg-red-50 transition-colors">
                     <XCircle size={18} className="text-red-500 mb-1" />
                     <span className="text-2xl font-bold text-red-700">{log.absent}</span>
                     <span className="text-[10px] font-bold text-red-600 uppercase">Absent</span>
                  </div>
               </div>

               <div className="pl-2">
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                     <div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full"
                        style={{ width: `${(log.present / (log.present + log.absent)) * 100}%` }} 
                     />
                  </div>
                  <div className="flex justify-between text-xs font-bold text-slate-400 mt-2">
                     <span>Attendance Rate</span>
                     <span>{Math.round((log.present / (log.present + log.absent)) * 100)}%</span>
                  </div>
               </div>
            </div>
         ))}
      </div>
    </div>
  );
};

export default AttendanceOversight;
