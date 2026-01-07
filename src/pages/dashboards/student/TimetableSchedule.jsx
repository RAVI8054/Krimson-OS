import React, { useState } from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { Calendar, Clock, MapPin, User, ChevronRight } from 'lucide-react';

const TimetableSchedule = () => {
  const [view, setView] = useState('Daily'); // Daily or Weekly
  const { timetable } = STUDENT_DATA;

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm">
         <h2 className="text-2xl font-bold text-slate-800">Class Timetable</h2>
         <div className="flex bg-slate-100 p-1.5 rounded-xl">
             {['Daily', 'Weekly'].map(v => (
                <button 
                  key={v}
                  onClick={() => setView(v)}
                  className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${view === v ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                   {v}
                </button>
             ))}
         </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
         {(view === 'Daily' ? ['Monday'] : days).map(day => (
            <div key={day} className="bg-white p-8 rounded-3xl shadow-sm">
               <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Calendar className="text-blue-500" size={20}/> {day}
               </h3>
               
               <div className="space-y-4">
                  {timetable[day.toLowerCase()] ? timetable[day.toLowerCase()].map((slot, idx) => (
                     <div key={idx} className="flex gap-4 p-4 border border-slate-100 rounded-2xl hover:border-blue-200 transition-colors group cursor-pointer relative overflow-hidden">
                        <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${slot.type === 'Lab' ? 'bg-purple-500' : 'bg-blue-500'}`}></div>
                        
                        <div className="flex flex-col items-center justify-center min-w-[80px] bg-slate-50 rounded-xl p-2">
                           <span className="text-xs font-bold text-slate-500">Period {slot.period}</span>
                           <Clock size={16} className="text-slate-400 mt-2 mb-1"/>
                        </div>
                        
                        <div className="flex-1">
                           <div className="flex justify-between items-start">
                              <h4 className="text-lg font-bold text-slate-800">{slot.subject}</h4>
                              <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${slot.type === 'Lab' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                                 {slot.type}
                              </span>
                           </div>
                           <p className="text-sm font-medium text-slate-500 mt-1">{slot.time}</p>
                           <div className="flex gap-4 mt-3 text-xs text-slate-400 font-bold">
                              <span className="flex items-center gap-1"><MapPin size={12}/> Lab 3</span>
                              <span className="flex items-center gap-1"><User size={12}/> Mr. Teacher</span>
                           </div>
                        </div>

                        <div className="hidden group-hover:flex items-center justify-center pr-4">
                           <button className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100"><ChevronRight /></button>
                        </div>
                     </div>
                  )) : (
                     <p className="text-slate-400 italic text-sm">No classes scheduled.</p>
                  )}
               </div>
            </div>
         ))}
      </div>
    </div>
  );
};

export default TimetableSchedule;
