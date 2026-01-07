import React from 'react';
import { Users, Lock } from 'lucide-react';

const ParentLinkDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
       <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-4">
          <Users size={40} />
       </div>
       <h2 className="text-3xl font-bold text-slate-800">Parent Link Active</h2>
       <p className="text-slate-500 max-w-md">Your dashboard data is synced with your guardian's account. This ensures they stay updated on your attendance, grades, and fees.</p>
       
       <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-2xl flex items-center gap-3 text-left max-w-md">
          <Lock className="text-yellow-600" size={20}/>
          <div>
             <h4 className="font-bold text-yellow-800 text-sm">Privacy Notice</h4>
             <p className="text-xs text-yellow-700">Messages between you and your counselor remain private and are NOT shared with parents.</p>
          </div>
       </div>

       <button className="px-8 py-3 bg-slate-200 text-slate-600 font-bold rounded-xl text-sm hover:bg-slate-300">View Synced Data Log</button>
    </div>
  );
};

export default ParentLinkDashboard;
