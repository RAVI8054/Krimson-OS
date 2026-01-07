import React from 'react';
import { TEACHER_DATA } from '../../../data/teacherData';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';

const AcademicCalendar = () => {
  const { calendarEvents } = TEACHER_DATA;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Calendar View Mock */}
         <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
               <CalendarIcon className="text-rose-500" /> Academic Schedule
            </h3>
            {/* Simple Grid for visual */}
            <div className="grid grid-cols-7 gap-4 mb-4 text-center">
               {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                  <div key={d} className="text-xs font-bold text-slate-400 uppercase">{d}</div>
               ))}
            </div>
            <div className="grid grid-cols-7 gap-4">
              {[...Array(35)].map((_, i) => (
                 <div key={i} className={`h-24 border border-slate-50 rounded-xl p-2 hover:bg-slate-50 transition-colors relative ${i === 15 ? 'bg-rose-50 border-rose-200' : ''}`}>
                    <span className={`text-xs font-bold ${i===15 ? 'text-rose-600': 'text-slate-600'}`}>{i+1 > 31 ? i-30 : i+1}</span>
                    {i === 10 && <div className="mt-2 text-[8px] bg-blue-100 text-blue-700 p-1 rounded font-bold truncate">Science Fair</div>}
                    {i === 15 && <div className="mt-1 text-[8px] bg-red-100 text-red-700 p-1 rounded font-bold truncate">Exam Start</div>}
                 </div>
              ))}
            </div>
         </div>

         {/* Upcoming List */}
         <div className="space-y-6">
            <div className="bg-rose-600 text-white rounded-3xl p-8 shadow-lg">
               <h3 className="font-bold text-lg mb-4">Plan Ahead</h3>
               <div className="mb-6">
                  <div className="flex justify-between text-xs mb-1 opacity-90">
                     <span>Syllabus Completion</span>
                     <span>65%</span>
                  </div>
                  <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                     <div className="bg-white h-full rounded-full" style={{ width: '65%' }}></div>
                  </div>
               </div>
               <p className="text-sm opacity-90">You are on track! Unit 4 needs to be completed by next Friday.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
               <h3 className="font-bold text-slate-800 mb-4">Upcoming Events</h3>
               <div className="space-y-4">
                  {calendarEvents.map((evt) => (
                     <div key={evt.id} className="flex gap-4 items-start">
                        <div className="flex flex-col items-center bg-slate-50 px-3 py-2 rounded-xl min-w-[60px]">
                           <span className="text-xs font-bold text-slate-400">{new Date(evt.date).toLocaleString('default', { month: 'short' })}</span>
                           <span className="text-lg font-bold text-slate-800">{new Date(evt.date).getDate()}</span>
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-700 text-sm">{evt.title}</h4>
                           <div className="flex items-center gap-3 mt-1">
                              <span className="text-xs text-slate-400 flex items-center gap-1"><Clock size={10}/> 10:00 AM</span>
                              <span className="text-xs text-slate-400 flex items-center gap-1"><MapPin size={10}/> Hall A</span>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;
