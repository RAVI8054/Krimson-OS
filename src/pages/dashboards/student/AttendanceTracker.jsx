import React from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { Download, CheckCircle, XCircle } from 'lucide-react';

const AttendanceTracker = () => {
  const { attendance } = STUDENT_DATA;

  // Mock Calendar Grid Generation
  const daysInMonth = 31;
  const calendarGrid = Array.from({ length: daysInMonth }, (_, i) => {
     const dateStr = `2026-01-${String(i+1).padStart(2, '0')}`;
     let status = 'neutral';
     if (attendance.heatmap.present.includes(dateStr)) status = 'present';
     if (attendance.heatmap.absent.includes(dateStr)) status = 'absent';
     return { date: i + 1, status };
  });

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {/* Summary Card */}
         <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-[8px] border-green-500 mb-4 bg-green-50">
               <span className="text-3xl font-extrabold text-green-700">{attendance.percentage}%</span>
            </div>
            <h3 className="font-bold text-slate-800">Overall Attendance</h3>
            <p className="text-xs text-slate-500 mt-2">Total Days: {attendance.totalDays} • Present: {attendance.presentDays}</p>
            <button className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 border border-slate-200 rounded-xl text-slate-600 font-bold text-sm hover:bg-slate-50">
               <Download size={16} /> Download Certificate
            </button>
         </div>

         {/* Heatmap */}
         <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
               <h3 className="font-bold text-slate-800">January 2026</h3>
               <div className="flex gap-4 text-xs font-bold text-slate-500">
                  <span className="flex items-center gap-1"><div className="w-3 h-3 bg-green-500 rounded-sm"></div> Present</span>
                  <span className="flex items-center gap-1"><div className="w-3 h-3 bg-red-400 rounded-sm"></div> Absent</span>
               </div>
            </div>
            
            <div className="grid grid-cols-7 gap-3">
               {['S','M','T','W','T','F','S'].map(d => <div key={d} className="text-center text-xs font-bold text-slate-300 mb-2">{d}</div>)}
               {calendarGrid.map((day) => (
                  <div key={day.date} className={`
                     h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all
                     ${day.status === 'present' ? 'bg-green-100 text-green-700' : 
                       day.status === 'absent' ? 'bg-red-100 text-red-700' : 'bg-slate-50 text-slate-400'}
                  `}>
                     {day.date}
                  </div>
               ))}
            </div>
         </div>
      </div>
      
      {/* Warning Area */}
      {attendance.percentage < 95 && (
         <div className="bg-orange-50 border border-orange-100 p-6 rounded-3xl flex items-start gap-4">
            <div className="p-3 bg-orange-200 text-orange-700 rounded-full"><XCircle /></div>
            <div>
               <h4 className="font-bold text-orange-800 text-lg">Attendance Warning</h4>
               <p className="text-sm text-orange-700 mt-1">Your attendance has dropped below 95%. Please ensure you attend all upcoming classes to avoid disciplinary action.</p>
            </div>
         </div>
      )}
    </div>
  );
};

export default AttendanceTracker;
