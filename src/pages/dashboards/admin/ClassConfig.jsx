import React from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { Users, Edit, Trash2 } from 'lucide-react';

const ClassConfig = () => {
  const { classes } = ADMIN_DATA;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
         <h2 className="text-2xl font-bold text-slate-800">Class & Section Configuration</h2>
         <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-700 transition-colors">
            + Create Class
         </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {classes.map(cls => (
            <div key={cls.id} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all border border-slate-100 group">
               <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl font-bold text-lg">{cls.id}</div>
                  <div className="hidden group-hover:flex gap-2">
                     <button className="p-2 text-slate-400 hover:text-blue-500"><Edit size={16}/></button>
                     <button className="p-2 text-slate-400 hover:text-red-500"><Trash2 size={16}/></button>
                  </div>
               </div>
               <h3 className="font-bold text-slate-800">Grade {cls.grade} - Section {cls.section}</h3>
               <p className="text-sm text-slate-500 mt-1">Teacher: {cls.teacher}</p>
               
               <div className="mt-6 flex items-center gap-2 text-sm font-bold text-slate-600 bg-slate-50 p-3 rounded-xl">
                  <Users size={16} /> {cls.students} Students Enrolled
               </div>
            </div>
         ))}
      </div>
    </div>
  );
};

export default ClassConfig;
