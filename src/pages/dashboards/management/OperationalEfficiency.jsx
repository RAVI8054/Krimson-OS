import React from 'react';
import { MANAGEMENT_DATA } from '../../../data/managementData';
import { Clock, Users, BookOpen, MessageSquare } from 'lucide-react';

const OperationalEfficiency = () => {
  const { operations } = MANAGEMENT_DATA;

  return (
    <div className="space-y-6">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {/* Metric Cards */}
         <div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col items-center text-center">
            <div className="p-4 bg-blue-50 text-blue-600 rounded-full mb-4"><Users size={24}/></div>
            <h3 className="text-3xl font-extrabold text-slate-800">{operations.ratio.actual}</h3>
            <p className="text-xs font-bold text-slate-400 uppercase mt-2">Teacher-Student Ratio</p>
            <span className="text-xs text-green-500 mt-1">Target: {operations.ratio.target}</span>
         </div>
         <div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col items-center text-center">
            <div className="p-4 bg-purple-50 text-purple-600 rounded-full mb-4"><BookOpen size={24}/></div>
            <h3 className="text-3xl font-extrabold text-slate-800">{operations.lessonSubmission}%</h3>
            <p className="text-xs font-bold text-slate-400 uppercase mt-2">Plan Submission Rate</p>
         </div>
         <div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col items-center text-center">
            <div className="p-4 bg-orange-50 text-orange-600 rounded-full mb-4"><Clock size={24}/></div>
            <h3 className="text-3xl font-extrabold text-slate-800">{operations.feedbackTime} Days</h3>
            <p className="text-xs font-bold text-slate-400 uppercase mt-2">Avg Feedback Time</p>
         </div>
         <div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col items-center text-center">
            <div className="p-4 bg-teal-50 text-teal-600 rounded-full mb-4"><MessageSquare size={24}/></div>
            <h3 className="text-3xl font-extrabold text-slate-800">{operations.responseLag} Hrs</h3>
            <p className="text-xs font-bold text-slate-400 uppercase mt-2">Parent Comms Lag</p>
         </div>
       </div>

       <div className="bg-white rounded-3xl p-8 shadow-sm">
         <h3 className="font-bold text-slate-800 mb-6">Resource Utilization</h3>
         <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2 font-semibold text-slate-700">
                <span>Science Labs</span>
                <span>85% Utilized</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <div className="bg-blue-500 w-[85%] h-full rounded-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2 font-semibold text-slate-700">
                <span>Computer Labs</span>
                <span>92% Utilized</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <div className="bg-purple-500 w-[92%] h-full rounded-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2 font-semibold text-slate-700">
                <span>Library</span>
                <span>60% Utilized</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <div className="bg-orange-400 w-[60%] h-full rounded-full"></div>
              </div>
            </div>
         </div>
       </div>
    </div>
  );
};

export default OperationalEfficiency;
