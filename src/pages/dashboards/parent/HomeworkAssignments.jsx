import React from 'react';
import { BookOpen, FileText, CheckCircle, Clock } from 'lucide-react';

const HomeworkAssignments = () => {
  const assignments = [
    { subject: "Mathematics", title: "Algebra Worksheet 4", status: "Pending", due: "Tomorrow", color: "bg-blue-50 text-blue-600" },
    { subject: "Science", title: "Plant Life Cycle Report", status: "Submitted", due: "Yesterday", color: "bg-green-50 text-green-600" },
    { subject: "English", title: "Essay: Summer Vacation", status: "Graded", due: "2 days ago", color: "bg-yellow-50 text-yellow-600" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Assignments</h1>
        <div className="flex gap-2">
            <span className="px-3 py-1 bg-white rounded-full text-xs font-bold text-slate-500 border border-slate-200">All</span>
            <span className="px-3 py-1 bg-blue-100 rounded-full text-xs font-bold text-blue-600">Pending</span>
        </div>
      </div>

      <div className="space-y-4">
        {assignments.map((task, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl ${task.color}`}>
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-700">{task.title}</h3>
                <p className="text-xs text-slate-400">{task.subject} • Due: {task.due}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {task.status === "Pending" && (
                <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-bold rounded-full flex items-center gap-1">
                  <Clock size={12} /> Pending
                </span>
              )}
              {task.status === "Submitted" && (
                 <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold rounded-full flex items-center gap-1">
                 <CheckCircle size={12} /> Submitted
               </span>
              )}
              {task.status === "Graded" && (
                 <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-bold rounded-full flex items-center gap-1">
                 <FileText size={12} /> Graded (A)
               </span>
              )}
              
              <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeworkAssignments;
