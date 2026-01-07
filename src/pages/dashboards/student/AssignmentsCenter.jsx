import React, { useState } from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { Upload, FileText, CheckCircle, Clock } from 'lucide-react';

const AssignmentsCenter = () => {
  const [tab, setTab] = useState('Pending');
  const { assignments } = STUDENT_DATA;
  
  // Filter logic could go here
  const displayedAssignments = assignments; 

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-6 rounded-3xl shadow-sm">
         <h2 className="text-2xl font-bold text-slate-800">Homework & Assignments</h2>
         <div className="flex bg-slate-100 p-1 rounded-xl w-full md:w-auto">
            {['Pending', 'Submitted', 'Graded'].map(t => (
               <button 
                  key={t} 
                  onClick={() => setTab(t)}
                  className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-bold transition-all ${tab === t ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
               >
                  {t}
               </button>
            ))}
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {displayedAssignments.map(assign => (
            <div key={assign.id} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all border border-slate-100">
               <div className="flex justify-between items-start mb-4">
                  <div className={`px-3 py-1 rounded-lg text-xs font-bold uppercase ${
                     assign.status === 'Pending' ? 'bg-orange-100 text-orange-600' :
                     assign.status === 'Submitted' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                  }`}>
                     {assign.status}
                  </div>
                  {assign.grade && <span className="text-2xl font-bold text-indigo-600">{assign.grade}</span>}
               </div>

               <h3 className="text-xl font-bold text-slate-800 mb-1">{assign.title}</h3>
               <p className="text-sm font-semibold text-slate-500 mb-6">{assign.subject} • Due: {assign.dueDate}</p>

               {assign.status === 'Pending' || assign.status === 'In Progress' ? (
                  <div>
                     <div className="w-full bg-slate-100 h-2 rounded-full mb-4 overflow-hidden">
                        <div className="bg-indigo-500 h-full rounded-full transition-all duration-500" style={{ width: `${assign.progress}%` }}></div>
                     </div>
                     <div className="flex gap-3">
                        <button className="flex-1 py-3 bg-indigo-600 text-white font-bold rounded-xl text-xs hover:bg-indigo-700 flex items-center justify-center gap-2">
                           <Upload size={16}/> Upload File
                        </button>
                        <button className="px-4 py-3 border border-slate-200 rounded-xl text-slate-600 font-bold hover:bg-slate-50">Details</button>
                     </div>
                  </div>
               ) : (
                  <div className="p-4 bg-slate-50 rounded-xl flex items-center gap-3">
                     <CheckCircle className="text-green-500" />
                     <p className="text-xs font-bold text-slate-600">Submitted on Jan 10, 10:00 AM</p>
                  </div>
               )}
            </div>
         ))}
      </div>
    </div>
  );
};

export default AssignmentsCenter;
