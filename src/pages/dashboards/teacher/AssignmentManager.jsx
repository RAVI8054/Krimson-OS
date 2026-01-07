import React from 'react';
import { TEACHER_DATA } from '../../../data/teacherData';
import { FilePlus, Download, CheckSquare, Clock } from 'lucide-react';

const AssignmentManager = () => {
  const { assignments } = TEACHER_DATA;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Assignments & Evaluation</h2>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-blue-700 flex items-center gap-2 transition-transform active:scale-95">
           <FilePlus size={18} /> Create New
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {assignments.map((assign) => (
           <div key={assign.id} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:border-blue-100 group">
              <div className="flex justify-between items-start mb-4">
                 <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl group-hover:bg-cyan-100 transition-colors"><CheckSquare size={24}/></div>
                 <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                    assign.due === 'Today' ? 'bg-pink-100 text-pink-600' : 'bg-green-100 text-green-600'
                 }`}>Due {assign.due}</span>
              </div>
              <h4 className="font-bold text-slate-800 text-lg mb-1">{assign.title}</h4>
              <p className="text-xs font-bold text-slate-400 mb-6">{assign.class}</p>

              <div>
                 <div className="flex justify-between text-xs mb-2 font-semibold text-slate-500">
                    <span>Submissions</span>
                    <span>{assign.submitted} / {assign.total}</span>
                 </div>
                 <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full" style={{ width: `${(assign.submitted/assign.total)*100}%` }}></div>
                 </div>
              </div>

              <div className="flex gap-2 mt-4">
                 <button className="flex-1 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50">View All</button>
                 <button className="flex-1 py-2 bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-slate-900 shadow-sm">Grade Now</button>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
};

export default AssignmentManager;
