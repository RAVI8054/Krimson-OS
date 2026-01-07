import React from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { Send, Bell, Smartphone, Mail } from 'lucide-react';

const NotificationCenter = () => {
  const { notifications } = ADMIN_DATA;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {/* Compose Area */}
         <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center gap-2"><Send size={20}/> Send Announcement</h3>
            <div className="space-y-4">
               <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Title</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-100" placeholder="e.g. Sports Day Update" />
               </div>
               <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Target Audience</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 outline-none">
                     <option>All Users</option>
                     <option>Parents Only</option>
                     <option>Staff Only</option>
                  </select>
               </div>
               <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Message</label>
                  <textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 outline-none h-32" placeholder="Type your message here..."></textarea>
               </div>
               
               <div className="flex gap-4 py-2">
                  <label className="flex items-center gap-2 text-sm text-slate-600 font-bold cursor-pointer">
                     <input type="checkbox" className="w-4 h-4 rounded text-blue-600" defaultChecked />
                     <Mail size={16}/> Email
                  </label>
                  <label className="flex items-center gap-2 text-sm text-slate-600 font-bold cursor-pointer">
                     <input type="checkbox" className="w-4 h-4 rounded text-blue-600" defaultChecked />
                     <Smartphone size={16}/> SMS
                  </label>
               </div>
               
               <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700">Broadcast Message</button>
            </div>
         </div>

         {/* History */}
         <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center gap-2"><Bell size={20}/> Recent Broadcasts</h3>
            <div className="space-y-4">
               {notifications.map(notif => (
                  <div key={notif.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                     <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-slate-800">{notif.title}</h4>
                        <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold uppercase">{notif.status}</span>
                     </div>
                     <p className="text-xs text-slate-500 mb-2">Target: {notif.groups.join(', ')}</p>
                     <p className="text-[10px] text-slate-400 font-bold">{notif.date}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default NotificationCenter;
