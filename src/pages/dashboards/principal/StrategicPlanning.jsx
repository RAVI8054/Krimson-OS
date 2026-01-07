import React from 'react';
import { Target, TrendingUp, Zap } from 'lucide-react';

const StrategicPlanning = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between overflow-hidden relative">
        <div className="relative z-10">
            <h1 className="text-2xl font-bold text-slate-800">Strategic Planning & Targets</h1>
            <p className="text-slate-500 mt-1">Align school goals and measurable targets</p>
        </div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-pink-50 to-transparent"></div>
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-2xl flex items-center justify-center text-white shadow-inner">
            <Target size={24} />
        </div>
      </div>

      {/* Goal List */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold mb-6 flex items-center gap-2 text-lg"><Target className="text-red-500"/> Annual Objectives (2026)</h3>
          
          <div className="space-y-8">
              <div>
                  <div className="flex justify-between mb-1">
                      <span className="font-bold text-slate-700">Increase Student Enrollment</span>
                      <span className="font-bold text-blue-600">85% Achieved</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3">
                      <div className="bg-blue-500 h-3 rounded-full w-[85%] relative group">
                          <span className="absolute right-0 -top-8 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">Target: 1,500</span>
                      </div>
                  </div>
              </div>

              <div>
                  <div className="flex justify-between mb-1">
                      <span className="font-bold text-slate-700">Improve Science Audit Rating</span>
                      <span className="font-bold text-amber-600">60% Achieved</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3">
                      <div className="bg-amber-500 h-3 rounded-full w-[60%]"></div>
                  </div>
              </div>

               <div>
                  <div className="flex justify-between mb-1">
                      <span className="font-bold text-slate-700">Reduce Staff Turnout</span>
                      <span className="font-bold text-green-600">92% Achieved</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full w-[92%]"></div>
                  </div>
              </div>
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold mb-4 flex items-center gap-2"><TrendingUp size={20}/> KPI Tracker</h3>
              <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg text-center">
                      <p className="text-xs text-slate-500 uppercase">Avg Grade GPA</p>
                      <p className="text-2xl font-bold text-slate-800">3.4</p>
                      <p className="text-xs text-green-500">Target: 3.5</p>
                  </div>
                   <div className="p-4 bg-slate-50 rounded-lg text-center">
                      <p className="text-xs text-slate-500 uppercase">Parent Satisfaction</p>
                      <p className="text-2xl font-bold text-slate-800">4.2/5</p>
                      <p className="text-xs text-green-500">Target: 4.5</p>
                  </div>
              </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-6 rounded-xl text-white shadow-lg relative overflow-hidden">
               <div className="relative z-10">
                   <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Zap size={20} className="text-yellow-300"/> AI Recommendation</h3>
                   <p className="text-purple-100 mb-4 text-sm leading-relaxed">
                       Based on current academic trends, focusing resources on <strong>Grade 8 English</strong> intervention classes will yield the highest impact on overall school ranking this term.
                   </p>
                   <button className="bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-bold shadow hover:bg-purple-50 transition">View Action Plan</button>
               </div>
               <div className="absolute -bottom-10 -right-10 opacity-20">
                   <Target size={150} />
               </div>
          </div>
      </div>
    </div>
  );
};

export default StrategicPlanning;
