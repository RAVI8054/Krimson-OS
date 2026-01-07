import React from 'react';
import { Plus, Clock, Calendar, CheckCircle } from 'lucide-react';

const TestManager = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm">
         <h2 className="text-2xl font-bold text-slate-800">Test & Exam Manager</h2>
         <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 shadow-lg flex items-center gap-2 transition-transform active:scale-95">
            <Plus size={18} /> Create New Test
         </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* Active Tests */}
         <div className="bg-white rounded-3xl p-8 shadow-sm h-full">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Clock className="text-blue-500" /> Upcoming & Live
            </h3>
            <div className="space-y-4">
               {[1, 2].map(i => (
                 <div key={i} className="border border-slate-100 rounded-2xl p-5 hover:bg-slate-50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                       <h4 className="font-bold text-slate-700">Unit Test {i}: Physics</h4>
                       <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded text-[10px] font-bold uppercase">Scheduled</span>
                    </div>
                    <div className="flex gap-4 text-xs text-slate-500 mb-4">
                       <span className="flex items-center gap-1"><Calendar size={12}/> Jan 15, 2026</span>
                       <span className="flex items-center gap-1"><Clock size={12}/> 45 Mins</span>
                    </div>
                    <div className="flex gap-2">
                       <button className="flex-1 py-1.5 border border-slate-200 rounded-lg text-xs font-bold text-slate-600">Edit Questions</button>
                       <button className="flex-1 py-1.5 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">Preview</button>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* Past / Grading */}
         <div className="bg-white rounded-3xl p-8 shadow-sm h-full">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
              <CheckCircle className="text-purple-500" /> Completed & Grading
            </h3>
            <div className="space-y-4">
               <div className="bg-purple-50/50 rounded-2xl p-5 border border-purple-100">
                  <h4 className="font-bold text-slate-700">Pop Quiz: Chemistry</h4>
                  <p className="text-xs text-slate-500 mb-4">Completed yesterday • 28/30 Submitted</p>
                  
                  <div className="mb-4">
                     <div className="flex justify-between text-xs mb-1 font-bold text-slate-500">
                        <span>Auto-Grading Progress</span>
                        <span>100%</span>
                     </div>
                     <div className="w-full bg-white h-2 rounded-full overflow-hidden">
                        <div className="bg-purple-500 h-full rounded-full" style={{ width: '100%' }}></div>
                     </div>
                  </div>
                  <button className="w-full py-2 bg-white text-purple-700 font-bold rounded-xl text-xs hover:shadow-sm transition-colors hover:bg-purple-50">Review & Publish Options</button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default TestManager;
