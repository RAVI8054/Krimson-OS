import React from 'react';
import { Calendar as CalendarIcon, Filter, Plus, Clock } from 'lucide-react';

const EventControl = () => {
    const events = [
        { title: "Mid-Term Examinations", type: "Exam", date: "Oct 12 - Oct 25", color: "bg-red-100 text-red-700" },
        { title: "Annual Sports Day", type: "Activity", date: "Nov 05", color: "bg-green-100 text-green-700" },
        { title: "Parent-Teacher Meeting", type: "PTA", date: "Nov 12", color: "bg-blue-100 text-blue-700" }
    ];

  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center mb-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
        <div className="relative z-10">
           <h1 className="text-2xl font-bold text-slate-800">Academic Calendar & Events</h1>
           <p className="text-slate-500">Central command for school schedule</p>
        </div>
        <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-cyan-300 via-blue-300 to-pink-300"></div>
        <button className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm font-bold shadow-lg shadow-blue-200 hover:shadow-xl hover:translate-y-px transition-all">
            <Plus size={18} /> New Event
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Calendar View Placeholder */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg">October 2026</h3>
                  <div className="flex gap-2">
                      <button className="p-2 border rounded hover:bg-slate-50"><Filter size={16} /></button>
                      <select className="border rounded p-2 text-sm">
                          <option>Month View</option>
                          <option>Week View</option>
                      </select>
                  </div>
              </div>
              <div className="h-96 bg-slate-50 rounded border border-slate-200 flex items-center justify-center text-slate-400">
                  [Full Interactive Calendar Component]
              </div>
          </div>

          {/* Upcoming & Approval */}
          <div className="space-y-6">
             <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                 <h3 className="font-bold mb-4">Upcoming Milestones</h3>
                 <div className="space-y-3">
                     {events.map((evt, i) => (
                         <div key={i} className="flex gap-3 items-center p-3 border rounded-lg hover:shadow-sm transition">
                             <div className="flex flex-col items-center justify-center w-12 h-12 bg-slate-100 rounded text-slate-600 font-bold text-xs">
                                 <span>{evt.date.split(" ")[0]}</span>
                                 <span className="text-lg">{evt.date.split(" ")[1].replace("-","")}</span>
                             </div>
                             <div>
                                 <h4 className="font-bold text-sm">{evt.title}</h4>
                                 <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase font-bold ${evt.color}`}>{evt.type}</span>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>

             <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                 <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                     <Clock size={18} /> Approval Queue
                 </h3>
                 <div className="bg-white p-3 rounded-lg shadow-sm mb-2">
                     <p className="font-medium text-sm">Science Exhibition</p>
                     <p className="text-xs text-slate-500 mb-2">Requested by Science Dept</p>
                     <div className="flex gap-2 text-xs">
                         <button className="text-green-600 font-bold hover:underline">Approve</button>
                         <button className="text-red-600 font-bold hover:underline">Reject</button>
                     </div>
                 </div>
             </div>
          </div>
      </div>
    </div>
  );
};

export default EventControl;
