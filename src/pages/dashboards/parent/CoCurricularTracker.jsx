import React from 'react';
import { Trophy, Medal, Star } from 'lucide-react';

const CoCurricularTracker = () => {
  return (
    <div className="space-y-6">
       <div className="grid grid-cols-12 gap-6">
         {/* Profile Card */}
         <div className="col-span-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-6 text-white shadow-lg">
            <Trophy className="w-16 h-16 mb-4 opacity-80" />
            <h2 className="text-2xl font-bold">CCA Points</h2>
            <p className="text-white/80 text-sm mb-6">Total accumulated this year</p>
            <span className="text-6xl font-extrabold">125</span>
            <div className="mt-4 text-xs font-bold bg-white/20 inline-block px-3 py-1 rounded-full">Level: Gold Achiever</div>
         </div>

         {/* Activities List */}
         <div className="col-span-8 bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6">Activity Log</h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start relative">
                 <div className="z-10 bg-blue-100 text-blue-600 p-2 rounded-full border-4 border-white shadow-sm">
                   <Medal size={20} />
                 </div>
                 <div className="flex-1 pb-6 border-b border-slate-50">
                   <h4 className="font-bold text-slate-700">Inter-School Chess Tournament</h4>
                   <p className="text-sm text-slate-500 mt-1">Participated and secured 3rd position.</p>
                   <span className="text-xs font-bold text-blue-500 mt-2 inline-block">+ 50 Points</span>
                 </div>
              </div>
              
              <div className="flex gap-4 items-start relative">
                 <div className="z-10 bg-purple-100 text-purple-600 p-2 rounded-full border-4 border-white shadow-sm">
                   <Star size={20} />
                 </div>
                 <div className="flex-1">
                   <h4 className="font-bold text-slate-700">Music Club Attendance</h4>
                   <p className="text-sm text-slate-500 mt-1">Regular participation in weekly sessions.</p>
                   <span className="text-xs font-bold text-purple-500 mt-2 inline-block">+ 10 Points</span>
                 </div>
              </div>
            </div>
         </div>
       </div>
    </div>
  );
};

export default CoCurricularTracker;
