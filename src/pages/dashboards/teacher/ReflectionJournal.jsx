import React from 'react';
import { PenTool, Share2 } from 'lucide-react';

const ReflectionJournal = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 rounded-3xl p-8 text-white shadow-lg">
         <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <PenTool /> Daily Reflection
         </h2>
         <p className="opacity-90">"We do not learn from experience... we learn from reflecting on experience."</p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm">
         <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Today's Entry</h3>
            <span className="text-xs font-bold text-slate-400">{new Date().toLocaleDateString()}</span>
         </div>
         
         <div className="space-y-6">
            <div>
               <label className="block text-xs font-bold text-slate-500 uppercase mb-2">What went well today?</label>
               <textarea className="w-full h-32 bg-slate-50 rounded-2xl p-4 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-inner" placeholder="Student engagement was high during the practical demo..."></textarea>
            </div>
            <div>
               <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Areas for Improvement</label>
               <textarea className="w-full h-32 bg-slate-50 rounded-2xl p-4 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-inner" placeholder="Could manage time better for the Q&A session..."></textarea>
            </div>
         </div>

         <div className="flex justify-end gap-4 mt-8">
            <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-600 font-bold rounded-xl text-sm hover:bg-slate-50 transition-colors">
               <Share2 size={16}/> Share Anonymously
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl text-sm hover:shadow-lg transition-all transform hover:-translate-y-0.5">
               Save Entry
            </button>
         </div>
      </div>
    </div>
  );
};

export default ReflectionJournal;
