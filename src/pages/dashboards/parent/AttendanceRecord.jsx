import React from 'react';
import { CalendarCheck, AlertCircle, Clock } from 'lucide-react';

const AttendanceRecord = () => {
  // Mock Data for Calendar
  const days = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    status: Math.random() > 0.1 ? 'present' : (Math.random() > 0.5 ? 'absent' : 'holiday')
  }));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-800">January 2026</h2>
            <div className="flex gap-4 text-xs font-medium">
              <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-green-500"></div> Present</span>
              <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-red-500"></div> Absent</span>
              <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-yellow-400"></div> Holiday</span>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-3">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
              <div key={d} className="text-center text-slate-400 text-sm font-bold py-2">{d}</div>
            ))}
            {days.map((d, i) => (
              <div key={i} className={`
                h-14 rounded-xl flex items-center justify-center font-bold text-sm
                ${d.status === 'present' ? 'bg-green-50 text-green-600' : ''}
                ${d.status === 'absent' ? 'bg-red-50 text-red-500 border border-red-100' : ''}
                ${d.status === 'holiday' ? 'bg-yellow-50 text-yellow-600' : ''}
              `}>
                {d.day}
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-4 space-y-6">
           <div className="bg-white rounded-3xl p-6 shadow-sm">
             <h3 className="font-bold text-slate-700 mb-4">Summary</h3>
             <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500 text-sm">Total Days</span>
                  <span className="font-bold text-slate-800">22</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-xl">
                   <span className="text-green-600 text-sm">Present</span>
                   <span className="font-bold text-green-700">20</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-xl">
                   <span className="text-red-500 text-sm">Absent</span>
                   <span className="font-bold text-red-700">2</span>
                </div>
             </div>
           </div>

           <div className="bg-red-50 rounded-3xl p-6 border border-red-100">
             <div className="flex items-start gap-3">
               <AlertCircle className="text-red-500 shrink-0" />
               <div>
                 <h4 className="font-bold text-red-700 text-sm">Low Attendance Alert</h4>
                 <p className="text-red-500 text-xs mt-1">Attendance fell below 85% last week. Please ensure regular presence.</p>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceRecord;
