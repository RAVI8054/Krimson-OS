import React from 'react';
import { PenTool, Share2 } from 'lucide-react';

const ReflectionJournal = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-gradient-to-r from-orange-400 to-rose-500 rounded-3xl p-8 text-white shadow-lg">
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
               <textarea className="w-full h-32 bg-slate-50 rounded-2xl p-4 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-rose-100" placeholder="Student engagement was high during the practical demo..."></textarea>
            </div>
            <div>
               <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Areas for Improvement</label>
               <textarea className="w-full h-32 bg-slate-50 rounded-2xl p-4 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-rose-100" placeholder="Could manage time better for the Q&A session..."></textarea>
            </div>
         </div>

         <div className="flex justify-end gap-4 mt-8">
            <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-600 font-bold rounded-xl text-sm hover:bg-slate-50">
               <Share2 size={16}/> Share Anonymously
            </button>
            <button className="px-8 py-3 bg-slate-800 text-white font-bold rounded-xl text-sm hover:bg-slate-900 shadow-lg">
               Save Entry
            </button>
         </div>
      </div>
    </div>
  );
};

export default ReflectionJournal;
