import React from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { Star, AlertOctagon, TrendingUp } from 'lucide-react';

const BehaviorLog = () => {
  const { behavior } = STUDENT_DATA;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
             <div className="relative z-10">
                <p className="font-bold opacity-80 uppercase text-xs">Behavior Score</p>
                <div className="text-5xl font-extrabold mt-2 mb-1">{behavior.points}</div>
                <p className="text-sm font-medium">Points Earned</p>
             </div>
             <Star className="absolute right-4 bottom-4 text-white opacity-20 w-32 h-32" />
         </div>

         <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-center">
             <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><TrendingUp className="text-green-500"/> Consistency Streak</h3>
             <div className="flex gap-2">
                {[1,2,3,4,5].map(i => (
                   <div key={i} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${i <= 3 ? 'bg-green-500 text-white' : 'bg-slate-100 text-slate-300'}`}>
                      {i}
                   </div>
                ))}
             </div>
             <p className="text-xs text-slate-400 mt-3">You are on a 3-week streak of zero late arrivals!</p>
         </div>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm">
         <h3 className="font-bold text-slate-800 mb-6">Activity Log</h3>
         <div className="space-y-4">
            {behavior.logs.map((log, idx) => (
               <div key={idx} className={`flex items-start gap-4 p-4 rounded-2xl ${log.type === 'Positive' ? 'bg-green-50' : 'bg-red-50'}`}>
                  <div className={`p-2 rounded-xl mt-1 ${log.type === 'Positive' ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>
                     {log.type === 'Positive' ? <Star size={16}/> : <AlertOctagon size={16}/>}
                  </div>
                  <div>
                     <h4 className={`font-bold text-sm ${log.type === 'Positive' ? 'text-green-800' : 'text-red-800'}`}>{log.type} Note</h4>
                     <p className={`text-xs mt-1 ${log.type === 'Positive' ? 'text-green-600' : 'text-red-600'}`}>{log.note}</p>
                     <p className="text-[10px] text-slate-400 mt-2 font-bold uppercase">{log.date}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default BehaviorLog;
