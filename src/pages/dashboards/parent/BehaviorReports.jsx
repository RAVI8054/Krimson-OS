import React from 'react';
import { Smile, Frown, MessageCircle } from 'lucide-react';

const BehaviorReports = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 rounded-3xl p-6 border border-green-100 flex items-center justify-between">
           <div>
             <h3 className="text-green-800 font-bold text-lg">Positive Merits</h3>
             <p className="text-green-600 text-sm">Total this term</p>
           </div>
           <span className="text-4xl font-extrabold text-green-600">24</span>
        </div>
        <div className="bg-red-50 rounded-3xl p-6 border border-red-100 flex items-center justify-between">
           <div>
             <h3 className="text-red-800 font-bold text-lg">Areas of Concern</h3>
             <p className="text-red-600 text-sm">Incidents logged</p>
           </div>
           <span className="text-4xl font-extrabold text-red-600">01</span>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-6">Recent Observations</h3>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="bg-green-100 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
              <Smile className="text-green-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-700">Helping Peers</h4>
              <p className="text-sm text-slate-500">Aravind helped a classmate organize their desk without being asked.</p>
              <p className="text-xs text-slate-400 mt-1">Recorded by Mrs. Tan • 2 days ago</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-red-100 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
              <Frown className="text-red-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-700">Late Submission</h4>
              <p className="text-sm text-slate-500">Failed to submit Math homework on time.</p>
              <p className="text-xs text-slate-400 mt-1">Recorded by Mr. Lee • 1 week ago</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-slate-100">
           <label className="block text-sm font-bold text-slate-700 mb-2">Parent Response / Acknowledgment</label>
           <div className="flex gap-2">
             <input type="text" placeholder="Add a comment for the teacher..." className="flex-1 bg-slate-50 border-none rounded-xl px-4 py-2 text-sm" />
             <button className="bg-slate-800 text-white px-6 py-2 rounded-xl text-sm font-bold">Send</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BehaviorReports;
