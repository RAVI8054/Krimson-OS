import React from 'react';
import { Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';

const CalendarEvents = () => {
  const events = [
    { title: "Science Fair 2026", date: "Jan 20", time: "09:00 AM", type: "Academic", color: "bg-blue-500" },
    { title: "Parent-Teacher Meeting", date: "Jan 25", time: "10:30 AM", type: "Meeting", color: "bg-purple-500" },
    { title: "Sports Day Finals", date: "Feb 02", time: "08:00 AM", type: "Sports", color: "bg-green-500" },
  ];

  return (
    <div className="flex gap-6 h-[calc(100vh-140px)]">
      {/* List View */}
      <div className="w-1/3 space-y-4">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Upcoming Events</h2>
        {events.map((evt, i) => (
          <div key={i} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-50 hover:shadow-md transition-all">
             <div className="flex items-center gap-2 mb-2">
               <span className={`px-2 py-0.5 rounded text-[10px] font-bold text-white ${evt.color}`}>{evt.type}</span>
             </div>
             <h3 className="font-bold text-slate-700 text-lg leading-tight mb-2">{evt.title}</h3>
             <div className="flex items-center gap-4 text-xs text-slate-400">
               <span className="flex items-center gap-1"><CalendarIcon size={12}/> {evt.date}</span>
               <span className="flex items-center gap-1"><Clock size={12}/> {evt.time}</span>
             </div>
          </div>
        ))}
      </div>

      {/* Mock Calendar Grid */}
      <div className="flex-1 bg-white rounded-3xl p-8 shadow-sm">
         <div className="flex justify-between items-center mb-6">
           <h2 className="text-2xl font-bold text-slate-800">January 2026</h2>
           <div className="flex gap-2">
             <button className="p-2 hover:bg-slate-50 rounded-full">{'<'}</button>
             <button className="p-2 hover:bg-slate-50 rounded-full">{'>'}</button>
           </div>
         </div>
         <div className="grid grid-cols-7 gap-4 h-full">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <div key={day} className="text-center font-bold text-slate-400 mb-2">{day}</div>
            ))}
            {/* Generating mock grid cells */}
            {Array.from({length: 31}).map((_, i) => (
              <div key={i} className={`rounded-xl p-2 border border-slate-50 min-h-[80px] hover:bg-slate-50 transition-colors ${i === 19 ? 'bg-blue-50 border-blue-100' : ''}`}>
                 <span className={`text-sm font-semibold ${i===19 ? 'text-blue-600': 'text-slate-600'}`}>{i+1}</span>
                 {i === 19 && <div className="mt-2 text-[10px] bg-blue-100 text-blue-600 px-1 py-0.5 rounded truncate">Science Fair</div>}
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default CalendarEvents;
