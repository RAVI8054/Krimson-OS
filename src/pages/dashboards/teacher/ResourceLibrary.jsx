import React from 'react';
import { Search, Upload, FileText, Video, Mic } from 'lucide-react';

const ResourceLibrary = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-3xl shadow-sm flex flex-col md:flex-row gap-6 items-center justify-between">
         <div className="flex-1 w-full relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input type="text" placeholder="Search approved materials..." className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-100 transition-all font-medium text-slate-700" />
         </div>
         <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-blue-700 flex items-center gap-3 transition-transform hover:scale-105 active:scale-95">
            <Upload size={20} /> Upload Resource
         </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {['Physics', 'Chemistry', 'Biology', 'Math'].map((subj, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all cursor-pointer group">
               <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl transition-colors ${
                     i===0 ? 'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-100' :
                     i===1 ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-100' :
                     i===2 ? 'bg-purple-50 text-purple-600 group-hover:bg-purple-100' : 'bg-pink-50 text-pink-600 group-hover:bg-pink-100'
                  }`}>
                     <FileText size={24} />
                  </div>
                  <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-1 rounded">24 Files</span>
               </div>
               <h4 className="font-bold text-slate-800 text-xl group-hover:text-blue-600 transition-colors">{subj}</h4>
               <p className="text-xs text-slate-400 mt-1">Last updated 2 days ago</p>
            </div>
         ))}
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm">
         <h3 className="font-bold text-slate-800 mb-6">Recent Uploads</h3>
         <div className="space-y-4">
            {[1, 2, 3].map(i => (
               <div key={i} className="flex items-center justify-between p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-pink-50 text-pink-600 rounded-xl group-hover:bg-pink-100 transition-colors">
                        {i===2 ? <Video size={20}/> : <FileText size={20}/>}
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-700 text-sm">Newton's Laws Worksheet {i}</h4>
                        <p className="text-xs text-slate-400">PDF • 2.4 MB</p>
                     </div>
                  </div>
                  <button className="text-xs font-bold text-blue-600 hover:underline">Download</button>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default ResourceLibrary;
