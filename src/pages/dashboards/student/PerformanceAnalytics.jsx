import React from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { TrendingUp, Target, Award, Lightbulb } from 'lucide-react';

const PerformanceAnalytics = () => {
  const { analytics, user } = STUDENT_DATA;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         <div className="bg-white p-6 rounded-3xl shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600"><Target /></div>
            <h3 className="text-3xl font-extrabold text-slate-800">#{analytics.rank}</h3>
            <p className="text-xs text-slate-400 font-bold uppercase mt-1">Class Rank</p>
         </div>
         <div className="bg-white p-6 rounded-3xl shadow-sm text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600"><TrendingUp /></div>
            <h3 className="text-3xl font-extrabold text-slate-800">{analytics.percentile}</h3>
            <p className="text-xs text-slate-400 font-bold uppercase mt-1">Percentile</p>
         </div>
         <div className="col-span-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-8 text-white flex items-center justify-between relative overflow-hidden">
            <div className="relative z-10">
               <h3 className="text-xl font-bold mb-2">Keep Pushing, {user.name.split(' ')[0]}!</h3>
               <p className="opacity-80 text-sm max-w-xs">Your Math scores have improved by 12% since last term. Consistent practice unlocks greatness.</p>
            </div>
            <Award size={80} className="text-white opacity-20 absolute -right-4 -bottom-4"/>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {/* Radar Chart Visual Mock */}
         <div className="bg-white p-8 rounded-3xl shadow-sm flex flex-col items-center">
            <h3 className="font-bold text-slate-800 mb-8 self-start">Subject Strength Analysis</h3>
            <div className="relative w-64 h-64">
               {/* Just a decorative SVG to mimic radar chart */}
               <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-500 opacity-20">
                  <polygon points="50,10 90,40 70,90 30,90 10,40" fill="currentColor" />
               </svg>
               <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-600 absolute top-0 left-0">
                  <polygon points="50,15 85,45 65,85 35,85 15,45" fill="rgba(79, 70, 229, 0.4)" stroke="currentColor" strokeWidth="2" />
               </svg>
               {/* Labels */}
               <span className="absolute top-0 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500">Math</span>
               <span className="absolute bottom-5 right-5 text-xs font-bold text-slate-500">History</span>
               <span className="absolute bottom-5 left-5 text-xs font-bold text-slate-500">English</span>
            </div>
         </div>

         {/* AI Tips */}
         <div>
            <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-3xl p-6 text-white shadow-lg mb-6">
               <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/20 rounded-lg"><Lightbulb size={20}/></div>
                  <h3 className="font-bold">AI Study Companion</h3>
               </div>
               <p className="text-sm opacity-90 mb-4">"Based on your recent tests, focusing on <strong>Organic Chemistry</strong> and <strong>Calculus Limits</strong> will boost your Science grade significantly."</p>
               <button className="w-full py-3 bg-white text-pink-600 font-bold rounded-xl text-xs hover:bg-slate-100">Get Daily Study Plan</button>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm">
               <h4 className="font-bold text-slate-700 mb-4">Recommended Actions</h4>
               <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-slate-600">
                     <span className="w-2 h-2 bg-green-500 rounded-full"></span> Review Chapter 4: Calculus
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-600">
                     <span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Practice History Dates Quiz
                  </li>
               </ul>
            </div>
         </div>
      </div>
    </div>
  );
};

export default PerformanceAnalytics;
