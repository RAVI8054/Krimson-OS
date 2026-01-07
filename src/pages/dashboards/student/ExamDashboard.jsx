import React from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { Calendar, Clock, FileText, TrendingUp, AlertTriangle } from 'lucide-react';

const ExamDashboard = () => {
  const { exams } = STUDENT_DATA;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Upcoming Exams List */}
         <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Exam Schedule</h2>
            {exams.map(exam => (
               <div key={exam.id} className="bg-white p-6 rounded-3xl shadow-sm border-l-4 border-red-500 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-6">
                     <div className="bg-red-50 text-red-600 px-4 py-3 rounded-2xl text-center min-w-[80px]">
                        <span className="block text-xs font-bold uppercase">{new Date(exam.date).toLocaleString('default', { month: 'short' })}</span>
                        <span className="block text-2xl font-bold">{new Date(exam.date).getDate()}</span>
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-slate-800">{exam.title}</h3>
                        <div className="flex gap-4 text-xs text-slate-500 mt-2 font-medium">
                           <span className="flex items-center gap-1"><Clock size={14}/> {exam.time}</span>
                           <span className="flex items-center gap-1"><FileText size={14}/> Syllabus: {exam.syllabus}</span>
                        </div>
                     </div>
                  </div>
                  <button className="px-6 py-3 bg-slate-800 text-white font-bold rounded-xl text-xs hover:bg-slate-900 shadow-lg whitespace-nowrap">
                     Download Ticket
                  </button>
               </div>
            ))}
         </div>

         {/* Quick Stats */}
         <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm">
               <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><TrendingUp className="text-blue-500" /> Performance Overview</h3>
               <div className="space-y-4">
                  <div>
                     <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
                        <span>Average Score</span>
                        <span>82%</span>
                     </div>
                     <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full rounded-full" style={{ width: '82%' }}></div>
                     </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                     <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                     <div>
                        <p className="text-xs font-bold text-green-700">Strongest Subject</p>
                        <p className="text-sm font-bold text-slate-700">Mathematics</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-xl">
                     <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                     <div>
                        <p className="text-xs font-bold text-red-700">Needs Improvement</p>
                        <p className="text-sm font-bold text-slate-700">History</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-3xl border border-yellow-200">
               <div className="flex gap-3">
                  <AlertTriangle className="text-yellow-600 flex-shrink-0" />
                  <div>
                     <h4 className="font-bold text-yellow-800">Exam Rules</h4>
                     <p className="text-xs text-yellow-700 mt-1">Please bring your Hall Ticket and ID Card. Electronic gadgets are strictly prohibited inside the hall.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ExamDashboard;
