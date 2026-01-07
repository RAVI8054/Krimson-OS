import React from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { Trophy, Award, Upload } from 'lucide-react';

const CoCurricularActivities = () => {
  const { activities } = STUDENT_DATA;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm">
         <div>
            <h2 className="text-2xl font-bold text-slate-800">CCA Portfolio</h2>
            <p className="text-slate-500 text-sm">Sports, Arts, and Leadership</p>
         </div>
         <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 shadow-lg flex items-center gap-2">
            <Upload size={18} /> Upload Certificate
         </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
         {activities.map(act => (
            <div key={act.id} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-center gap-6 border border-slate-100">
               <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-white shadow-md">
                  <Trophy size={32} />
               </div>
               
               <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-slate-800">{act.name}</h3>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-2 text-sm text-slate-500">
                     <span className="flex items-center gap-1 font-bold"><Award size={14}/> {act.achievement}</span>
                     <span>•</span>
                     <span>{act.date}</span>
                     <span>•</span>
                     <span className="bg-slate-100 px-2 py-0.5 rounded text-xs uppercase font-bold tracking-wider">{act.role}</span>
                  </div>
               </div>

               <div className="px-4 py-2 bg-green-50 text-green-700 font-bold rounded-xl text-sm border border-green-100">
                  Verified
               </div>
            </div>
         ))}
      </div>
    </div>
  );
};

export default CoCurricularActivities;
