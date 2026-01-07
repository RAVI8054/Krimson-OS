import React from 'react';
import { Calendar, User, MessageCircle, Clock } from 'lucide-react';

const MeetingHub = () => {
    const meetings = [
        { title: "Staff Sync", time: "09:00 AM", location: "Conf Room A", type: "Internal" },
        { title: "Parent: Mr. & Mrs. Lee", time: "11:30 AM", location: "Principal Office", type: "External" }
    ];

  return (
    <div className="space-y-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
           <h1 className="text-2xl font-bold text-slate-800">Meeting & Feedback Hub</h1>
           <p className="text-slate-500">Track meetings and departmental feedback</p>
        </div>
        <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium">Schedule Meeting</button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-200px)]">
          {/* Left Pane: Meetings */}
          <div className="lg:w-1/2 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col">
              <div className="p-6 border-b border-slate-100 bg-slate-50 rounded-t-xl">
                  <h3 className="font-bold flex items-center gap-2"><Calendar size={18}/> Today's Schedule</h3>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {meetings.map((m, i) => (
                      <div key={i} className="flex gap-4 p-4 border border-slate-100 rounded-lg hover:shadow-md transition bg-white">
                          <div className="flex flex-col items-center justify-center p-2 bg-blue-50 rounded-lg text-blue-600 w-20">
                              <Clock size={18} className="mb-1"/>
                              <span className="text-xs font-bold text-center">{m.time}</span>
                          </div>
                          <div className="flex-1">
                              <h4 className="font-bold text-slate-800">{m.title}</h4>
                              <p className="text-sm text-slate-500 flex items-center gap-2">
                                  <span>📍 {m.location}</span>
                                  <span className="mx-1">•</span>
                                  <span className="bg-slate-100 px-2 rounded text-xs">{m.type}</span>
                              </p>
                              <div className="mt-3 flex gap-2">
                                  <button className="text-xs border px-2 py-1 rounded">View Agenda</button>
                                  <button className="text-xs border px-2 py-1 rounded">Record MoM</button>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          {/* Right Pane: Feedback */}
          <div className="lg:w-1/2 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col">
              <div className="p-6 border-b border-slate-100 bg-slate-50 rounded-t-xl">
                  <h3 className="font-bold flex items-center gap-2"><MessageCircle size={18}/> Recent Feedback</h3>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                      <div className="flex justify-between items-start mb-2">
                           <span className="font-bold text-yellow-800 text-sm">Parent Feedback</span>
                           <span className="text-xs text-yellow-600">Yesterday</span>
                      </div>
                      <p className="text-sm text-yellow-900 italic">"The new bus route timing is causing delays for Grade 4 students..."</p>
                      <button className="mt-2 text-xs font-bold text-yellow-700 underline">Acknowledge</button>
                  </div>
                  <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                      <div className="flex justify-between items-start mb-2">
                           <span className="font-bold text-indigo-800 text-sm">Teacher Request</span>
                           <span className="text-xs text-indigo-600">2h ago</span>
                      </div>
                      <p className="text-sm text-indigo-900 italic">"Can we upgrade the projector in Lab 3?"</p>
                      <button className="mt-2 text-xs font-bold text-indigo-700 underline">Acknowledge</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default MeetingHub;
