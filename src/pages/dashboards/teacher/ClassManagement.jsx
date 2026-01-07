import React from 'react';
import { TEACHER_DATA } from '../../../data/teacherData';
import { Users, BookOpen, Filter, MoreHorizontal, UserCheck } from 'lucide-react';

const ClassManagement = () => {
  const { classes } = TEACHER_DATA;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm">
        <h3 className="text-xl font-bold text-slate-800">My Classes</h3>
        <div className="flex gap-3">
           <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-slate-600 text-sm font-bold hover:bg-slate-50">
             <Filter size={16} /> Filter
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((cls) => (
          <div key={cls.id} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
             <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-red-50 text-red-600 rounded-xl">
                   <Users size={24} />
                </div>
                <button className="text-slate-300 hover:text-slate-500"><MoreHorizontal /></button>
             </div>
             <div>
                <h4 className="text-xl font-bold text-slate-800">{cls.grade}</h4>
                <p className="text-sm font-semibold text-rose-500 mb-2">{cls.subject}</p>
                <p className="text-xs text-slate-400">Current Topic: {cls.topic}</p>
             </div>
             
             <div className="mt-6 pt-6 border-t border-slate-50 flex justify-between items-center">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                   <UserCheck size={14} /> {cls.students} Students
                </div>
                <div className="flex gap-2">
                   <button className="p-2 bg-slate-50 text-slate-600 rounded-lg hover:bg-blue-50 hover:text-blue-600" title="Timetable">
                      <BookOpen size={16} />
                   </button>
                </div>
             </div>
          </div>
        ))}
        {/* Real-time sub alert mock */}
        <div className="border-2 border-dashed border-orange-200 bg-orange-50 p-6 rounded-3xl flex flex-col justify-center items-center text-center">
           <div className="bg-white p-3 rounded-full text-orange-500 mb-3 shadow-sm">!</div>
           <h4 className="font-bold text-orange-800">Substitution Alert</h4>
           <p className="text-xs text-orange-600 mt-1">Please cover Grade 8-B (Math) Period 4 today.</p>
           <button className="mt-4 px-4 py-2 bg-white text-orange-600 text-xs font-bold rounded-xl hover:shadow-sm">Acknowledge</button>
        </div>
      </div>
    </div>
  );
};

export default ClassManagement;
