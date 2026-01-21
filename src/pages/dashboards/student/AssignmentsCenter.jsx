import React, { useState } from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { Upload, FileText, CheckCircle, Clock, XCircle } from 'lucide-react';

const AssignmentsCenter = () => {
  const [tab, setTab] = useState('Pending');
  const [scanningId, setScanningId] = useState(null);
  const [scanResults, setScanResults] = useState({}); // { id: { score: 12, flagged: true } }
  const { assignments } = STUDENT_DATA;
  
  // Filter logic
  const displayedAssignments = assignments.filter(a => {
      if (tab === 'Pending') return a.status === 'Pending' || a.status === 'In Progress';
      return a.status === tab;
  });

  const getDeadlineColor = (days) => {
      if (days <= 1) return 'text-red-500 bg-red-50 border-red-100';
      if (days <= 3) return 'text-orange-500 bg-orange-50 border-orange-100';
      return 'text-green-600 bg-green-50 border-green-100';
  };

  const handleScan = (id) => {
      setScanningId(id);
      setTimeout(() => {
          setScanningId(null);
          setScanResults(prev => ({
              ...prev,
              [id]: { score: Math.floor(Math.random() * 15), flagged: true }
          }));
      }, 2000);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-6 rounded-3xl shadow-sm">
         <div>
            <h2 className="text-2xl font-bold text-slate-800">Homework & Assignments</h2>
            <p className="text-sm text-slate-500 font-medium mt-1">Manage your tasks, track deadlines, and view grades</p>
         </div>
         <div className="flex bg-slate-100 p-1.5 rounded-xl w-full md:w-auto">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
         {displayedAssignments.map(assign => (
            <div key={assign.id} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all border border-slate-100 flex flex-col h-full">
               <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide border ${
                     assign.status.includes('Pending') || assign.status === 'In Progress' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                     assign.status === 'Submitted' ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-green-50 text-green-600 border-green-100'
                  }`}>
                     {assign.type || 'Assignment'}
                  </span>
                  {assign.dueDate !== 'Today' && assign.dueDate !== 'Tomorrow' && (
                       <div className="flex items-center gap-1 text-xs font-bold text-slate-400">
                           <Clock size={12}/> {assign.dueDate}
                       </div>
                  )}
               </div>

               <h3 className="text-xl font-bold text-slate-800 mb-2">{assign.title}</h3>
               <p className="text-sm font-semibold text-slate-500 mb-6 flex-grow">{assign.subject}</p>

               {/* PENDING VIEW */}
               {(tab === 'Pending') && (
                  <div className="space-y-4">
                     <div className={`flex items-center gap-3 p-3 rounded-xl border ${getDeadlineColor(assign.daysLeft)}`}>
                        <Clock size={18} />
                        <div className="flex-1">
                            <p className="text-xs font-bold uppercase opacity-80">Deadline</p>
                            <p className="text-sm font-bold">{assign.dueDate} ({assign.daysLeft <= 0 ? 'Today' : `${assign.daysLeft} days left`})</p>
                        </div>
                     </div>

                     <div>
                        <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                            <span>Progress</span>
                            <span>{assign.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                            <div className="bg-indigo-500 h-full rounded-full transition-all duration-500" style={{ width: `${assign.progress}%` }}></div>
                        </div>
                     </div>
                     
                     {/* AI Plagiarism Check Mockup */}
                     {assign.status === 'In Progress' && (
                         <div className="mt-2">
                             {scanningId === assign.id ? (
                                <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center gap-2 text-indigo-600 font-bold text-xs animate-pulse">
                                    <div className="w-3 h-3 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                                    AI Scanning content...
                                </div>
                             ) : scanResults[assign.id] ? (
                                <div className={`p-3 border rounded-xl flex items-center gap-2 text-xs font-bold ${scanResults[assign.id].score > 10 ? 'bg-red-50 border-red-100 text-red-600' : 'bg-green-50 border-green-100 text-green-600'}`}>
                                    {scanResults[assign.id].score > 10 ? <XCircle size={14}/> : <CheckCircle size={14}/>}
                                    AI Check: {scanResults[assign.id].score}% Plagiarism Deteced
                                </div>
                             ) : (
                                <button 
                                    onClick={() => handleScan(assign.id)}
                                    className="w-full py-2 bg-purple-50 hover:bg-purple-100 text-purple-600 border border-purple-100 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2"
                                >
                                    ✨ Run AI Plagiarism Check
                                </button>
                             )}
                         </div>
                     )}

                     <div className="flex gap-3 pt-2">
                        <button className="flex-1 py-3 bg-indigo-600 text-white font-bold rounded-xl text-xs hover:bg-indigo-700 flex items-center justify-center gap-2 transition-colors">
                           <Upload size={16}/> Upload File
                        </button>
                        <button className="px-5 py-3 border border-slate-200 rounded-xl text-slate-600 font-bold hover:bg-slate-50 transition-colors">Details</button>
                     </div>
                  </div>
               )}

               {/* SUBMITTED VIEW */}
               {tab === 'Submitted' && (
                   <div className="space-y-4">
                       <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-3">
                           <div className="p-2 bg-white rounded-lg border border-slate-100">
                               <FileText size={20} className="text-indigo-500" />
                           </div>
                           <div className="flex-1 overflow-hidden">
                               <p className="text-xs font-bold text-slate-500 uppercase">Submitted File</p>
                               <p className="text-sm font-bold text-slate-700 truncate">{assign.submittedFile || 'assignment.pdf'}</p>
                           </div>
                           <CheckCircle size={20} className="text-green-500" />
                       </div>

                       {assign.plagiarismFlag && (
                           <div className="p-4 bg-red-50 border border-red-100 rounded-2xl">
                               <div className="flex items-center gap-2 text-red-700 font-bold text-sm mb-1">
                                   <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                   Plagiarism Alert
                               </div>
                               <p className="text-xs text-red-600 font-medium">
                                   AI detection flagged potential overlap. Plagiarism Score: {assign.plagiarismScore}%
                               </p>
                           </div>
                       )}

                        <button className="w-full py-3 border border-slate-200 rounded-xl text-slate-600 font-bold text-xs hover:bg-slate-50 transition-colors">
                            View Submission
                        </button>
                   </div>
               )}

               {/* GRADED VIEW */}
               {tab === 'Graded' && (
                   <div className="space-y-4">
                       <div className="flex items-center justify-between p-4 bg-green-50/50 border border-green-100 rounded-2xl">
                           <div>
                               <p className="text-xs font-bold text-green-600 uppercase mb-1">Final Grade</p>
                               <div className="flex items-baseline gap-1">
                                   <span className="text-3xl font-extrabold text-green-700">{assign.grade}</span>
                                   <span className="text-sm font-bold text-green-500">/ {assign.maxGrade || '100'}</span>
                               </div>
                           </div>
                           <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-lg border-4 border-white shadow-sm">
                               {assign.grade}
                           </div>
                       </div>
                       
                       {assign.teacherFeedback && (
                           <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                               <p className="text-xs font-bold text-slate-400 uppercase mb-2">Teacher Feedback</p>
                               <p className="text-sm text-slate-600 italici leading-relaxed">"{assign.teacherFeedback}"</p>
                           </div>
                       )}

                       <button className="w-full py-3 bg-white border border-slate-200 rounded-xl text-slate-600 font-bold text-xs hover:bg-slate-50 transition-colors shadow-sm">
                           Download Graded Paper
                       </button>
                   </div>
               )}

            </div>
         ))}
      </div>
    </div>
  );
};

export default AssignmentsCenter;
