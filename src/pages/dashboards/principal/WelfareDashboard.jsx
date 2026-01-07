import React from 'react';
import { Heart, Smile, Frown, Award } from 'lucide-react';

const WelfareDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between overflow-hidden relative">
        <div className="relative z-10">
            <h1 className="text-2xl font-bold text-slate-800">Behavior & Welfare Dashboard</h1>
            <p className="text-slate-500 mt-1">Oversee student well-being, discipline, and counseling</p>
        </div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-pink-50 to-transparent"></div>
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-2xl flex items-center justify-center text-white shadow-inner">
            <Heart size={24} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 flex items-center gap-4">
              <div className="p-3 bg-red-100 text-red-600 rounded-lg"><Frown size={24} /></div>
              <div>
                  <h3 className="text-2xl font-bold">12</h3>
                  <p className="text-slate-500 text-xs">Incidents Reported</p>
              </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 flex items-center gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg"><Heart size={24} /></div>
              <div>
                  <h3 className="text-2xl font-bold">5</h3>
                  <p className="text-slate-500 text-xs">Counseling Referrals</p>
              </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 flex items-center gap-4">
              <div className="p-3 bg-green-100 text-green-600 rounded-lg"><Smile size={24} /></div>
              <div>
                  <h3 className="text-2xl font-bold">94%</h3>
                  <p className="text-slate-500 text-xs">Sentiment Score</p>
              </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 flex items-center gap-4">
              <div className="p-3 bg-yellow-100 text-yellow-600 rounded-lg"><Award size={24} /></div>
              <div>
                  <h3 className="text-2xl font-bold">28</h3>
                  <p className="text-slate-500 text-xs">Merits Awarded</p>
              </div>
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           <div className="bg-white p-6 rounded-xl border border-slate-200">
               <h3 className="font-bold mb-4">Behavior Incident Heatmap</h3>
               <div className="h-64 bg-slate-50 rounded flex items-center justify-center text-slate-400 border border-dashed text-sm">
                   [Heatmap: Incident Type vs Grade Level]
               </div>
           </div>

           <div className="bg-white p-6 rounded-xl border border-slate-200">
               <h3 className="font-bold mb-4">Pending Interventions</h3>
               <div className="space-y-4">
                   <div className="bg-red-50 p-4 rounded-lg flex justify-between items-center">
                       <div>
                           <span className="bg-red-200 text-red-800 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Urgent</span>
                           <h4 className="font-bold text-slate-800 mt-1">Bullying Report #3402</h4>
                           <p className="text-sm text-slate-600">Grade 7 • Pending counselor assignment</p>
                       </div>
                       <button className="text-sm bg-white border border-red-200 text-red-600 px-3 py-1 rounded shadow-sm">Assign</button>
                   </div>
                   <div className="bg-slate-50 p-4 rounded-lg flex justify-between items-center">
                       <div>
                           <h4 className="font-bold text-slate-800">Parent Meeting Request</h4>
                           <p className="text-sm text-slate-600">Regarding: Academic Probation</p>
                       </div>
                       <button className="text-sm bg-white border border-slate-200 text-slate-600 px-3 py-1 rounded shadow-sm">Schedule</button>
                   </div>
               </div>
           </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-100">
          <h3 className="font-bold text-yellow-800 mb-4 flex items-center gap-2"><Award size={20}/> Positive Recognition Board</h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
              {[1,2,3].map(i => (
                  <div key={i} className="min-w-[200px] bg-white p-4 rounded-lg shadow-sm border border-yellow-100">
                      <div className="font-bold text-slate-800">Student Name</div>
                      <div className="text-xs text-slate-500 mt-1">Grade 10 • Science Fair Winner</div>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default WelfareDashboard;
