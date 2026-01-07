import React from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const AttendanceOversight = () => {
  const { attendanceLog } = ADMIN_DATA;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm">
         <h2 className="text-2xl font-bold text-slate-800">Daily Attendance Oversight</h2>
         <div className="flex gap-4">
            <div className="flex items-center gap-2">
               <div className="w-3 h-3 bg-green-500 rounded-full"></div>
               <span className="text-sm font-bold text-slate-600">Present</span>
            </div>
            <div className="flex items-center gap-2">
               <div className="w-3 h-3 bg-red-500 rounded-full"></div>
               <span className="text-sm font-bold text-slate-600">Absent</span>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {attendanceLog.map((log, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
               <h3 className="text-xl font-bold text-slate-800 ml-4">Class {log.class}</h3>
               <p className="text-sm text-slate-500 ml-4 mb-4">Teacher Status: <span className="font-bold text-green-600">{log.teacher}</span></p>
               
               <div className="flex gap-4 ml-4">
                  <div className="bg-green-50 p-3 rounded-xl flex-1 text-center">
                     <p className="text-xs font-bold text-green-600 uppercase">Present</p>
                     <p className="text-2xl font-bold text-green-700">{log.present}</p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-xl flex-1 text-center">
                     <p className="text-xs font-bold text-red-600 uppercase">Absent</p>
                     <p className="text-2xl font-bold text-red-700">{log.absent}</p>
                  </div>
               </div>
            </div>
         ))}
         
         {/* Alert Card Mock */}
         <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100 flex flex-col justify-center items-center text-center">
            <AlertTriangle className="text-orange-500 mb-2" size={32}/>
            <h3 className="font-bold text-orange-800">Low Attendance Alert</h3>
            <p className="text-xs text-orange-700 mt-1">Grade 8B has reported 15% absentees today.</p>
            <button className="mt-4 px-4 py-2 bg-white text-orange-600 text-xs font-bold rounded-lg hover:bg-orange-100">Investigate</button>
         </div>
      </div>
    </div>
  );
};

export default AttendanceOversight;
