import React from 'react';
import { TEACHER_DATA } from '../../../data/teacherData';
import { Check, X, Save, User } from 'lucide-react';

const AttendanceLog = () => {
  const { attendance } = TEACHER_DATA;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
           <h2 className="text-2xl font-bold text-slate-800">Attendance Register</h2>
           <p className="text-slate-500 text-sm">Class: Grade 9-A • {new Date().toLocaleDateString()}</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
           <button className="flex-1 md:flex-none px-6 py-3 bg-green-50 text-green-600 font-bold rounded-xl hover:bg-green-100 text-sm">
             Mark All Present
           </button>
           <button className="flex-1 md:flex-none px-6 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-900 text-sm flex items-center gap-2 justify-center shadow-sm">
             <Save size={16}/> Submit Log
           </button>
        </div>
      </div>

      {/* List */}
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
         {attendance.map((student) => (
           <div key={student.id} className="p-4 border-b border-slate-100 flex items-center justify-between hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold">
                    {student.roll}
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-700">{student.name}</h4>
                    <p className="text-xs text-slate-400">ID: {student.id}</p>
                 </div>
              </div>
              
              <div className="flex items-center gap-2">
                  {student.status === 'Absent' && (
                     <input type="text" placeholder="Reason (e.g. Sick)" className="hidden md:block border border-slate-200 rounded-lg px-3 py-1.5 text-xs outline-none focus:border-pink-300 focus:ring-1 focus:ring-pink-100" defaultValue={student.reason} />
                  )}
                  <div className="flex bg-slate-100 p-1 rounded-xl">
                     <button className={`p-2 rounded-lg transition-colors ${student.status === 'Present' ? 'bg-green-500 text-white shadow-sm' : 'text-slate-400 hover:text-green-600'}`}>
                        <Check size={20} />
                     </button>
                     <button className={`p-2 rounded-lg transition-colors ${student.status === 'Absent' ? 'bg-pink-500 text-white shadow-sm' : 'text-slate-400 hover:text-pink-600'}`}>
                        <X size={20} />
                     </button>
                  </div>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
};

export default AttendanceLog;
