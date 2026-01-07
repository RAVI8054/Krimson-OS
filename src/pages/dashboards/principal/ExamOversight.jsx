import React from 'react';
import { Eye, CheckCircle, FileText, AlertTriangle } from 'lucide-react';

const ExamOversight = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Examination Oversight</h1>
        <p className="text-slate-500">Supervise exam schedules, question banks, and results</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {/* Status Cards */}
         <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
             <h3 className="text-slate-500 font-medium">Timetables Pending</h3>
             <p className="text-3xl font-bold text-slate-800 mt-2">2</p>
             <button className="text-blue-600 text-sm mt-2 font-medium">View Requests</button>
         </div>
         <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
             <h3 className="text-slate-500 font-medium">Question Papers Vetted</h3>
             <p className="text-3xl font-bold text-slate-800 mt-2">85%</p>
             <p className="text-xs text-green-500 mt-1">Ready for printing</p>
         </div>
         <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
             <h3 className="text-slate-500 font-medium">Results Published</h3>
             <p className="text-3xl font-bold text-slate-800 mt-2">0/12</p>
             <p className="text-xs text-amber-500 mt-1">Awaiting final approval</p>
         </div>
      </div>

      {/* Main Approval Workflow */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="font-bold text-lg mb-6">Pending Approvals</h3>
          
          <div className="space-y-4">
              {/* Item 1 */}
              <div className="border border-slate-200 rounded-lg p-4 flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                          <FileText size={24} />
                      </div>
                      <div>
                          <h4 className="font-bold text-slate-800">Review Final Exam Timetable - Grade 10</h4>
                          <p className="text-sm text-slate-500">Submitted by: Academic Coordinator • 2 hours ago</p>
                      </div>
                  </div>
                  <div className="flex gap-3">
                       <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 text-slate-700">View Draft</button>
                       <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2">
                           <CheckCircle size={16} /> Approve
                       </button>
                  </div>
              </div>

              {/* Item 2 */}
              <div className="border border-slate-200 rounded-lg p-4 flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-4">
                      <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                          <Eye size={24} />
                      </div>
                      <div>
                          <h4 className="font-bold text-slate-800">Random Sample: Physics Question Paper</h4>
                          <p className="text-sm text-slate-500">Validation required for difficulty index.</p>
                      </div>
                  </div>
                  <div className="flex gap-3">
                       <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 text-slate-700">Inspect</button>
                       <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                           <CheckCircle size={16} /> Validate
                       </button>
                  </div>
              </div>
          </div>
      </div>

      {/* Result Publication Section */}
      <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
              <CheckCircle size={100} />
          </div>
          <h3 className="text-xl font-bold mb-2">Publish Term Results</h3>
          <p className="text-slate-400 mb-6 max-w-lg">
              Once verified, results can be published to the Student and Parent portals instantly. 
              Ensure all marks entries are locked before proceeding.
          </p>
          <div className="flex gap-4">
              <button className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-bold flex items-center gap-2 transition">
                  Confirm & Publish All
              </button>
              <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-600">
                  View Summary Preview
              </button>
          </div>
      </div>
    </div>
  );
};

export default ExamOversight;
