import React from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { Search, FileText, Video, Download } from 'lucide-react';

const LessonResources = () => {
  const { resources } = STUDENT_DATA;

  return (
    <div className="space-y-8">
      <div className="bg-indigo-600 rounded-3xl p-8 text-white shadow-lg flex flex-col md:flex-row justify-between items-center gap-6">
         <div>
            <h2 className="text-2xl font-bold">Resouce Library</h2>
            <p className="opacity-80 text-sm">Curated study materials for your subjects.</p>
         </div>
         <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-200" size={20} />
            <input type="text" placeholder="Search topics (e.g. Gravity)..." className="w-full pl-12 pr-4 py-3 bg-indigo-500/50 rounded-2xl border border-indigo-400 placeholder-indigo-200 text-white outline-none focus:bg-indigo-500" />
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {resources.map(res => (
            <div key={res.id} className="bg-white p-6 rounded-3xl shadow-sm hover:translate-y-1 transition-transform border border-slate-100 group cursor-pointer">
               <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl ${res.type === 'Video' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                     {res.type === 'Video' ? <Video size={24}/> : <FileText size={24}/>}
                  </div>
                  <button className="text-slate-300 hover:text-indigo-600"><Download size={20}/></button>
               </div>
               
               <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{res.subject}</p>
               <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">{res.title}</h3>
               <div className="flex gap-2">
                  <span className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-md">Chapter 4</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-md">NCERT</span>
               </div>
            </div>
         ))}
      </div>
    </div>
  );
};

export default LessonResources;
