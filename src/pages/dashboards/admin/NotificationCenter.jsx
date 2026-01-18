/**
 * @component NotificationCenter
 * @description Broadcast messaging and communication hub
 */
import React from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { 
  Send, 
  Bell, 
  Smartphone, 
  Mail, 
  Target, 
  Calendar, 
  CheckCircle, 
  Clock,
  Radio
} from 'lucide-react';

const NotificationCenter = () => {
  const { notifications } = ADMIN_DATA;

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      
      {/* ========================================
          HEADER SECTION WITH GRADIENT THEME
          ======================================== */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                  Communications
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                   <Radio size={12} className="text-green-300 animate-pulse" />
                   System Ready
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Notification Center
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Send broadasts, announcements, and emergency alerts to students, parents, and staff.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
         
         {/* ========================================
             COMPOSE AREA (Left - 7 cols)
             ======================================== */}
         <div className="md:col-span-7 flex flex-col">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex-1">
               <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-xl text-slate-800 flex items-center gap-2">
                     <div className="p-2.5 bg-blue-100 text-blue-600 rounded-xl">
                        <Send size={20}/>
                     </div>
                     Compose Broadcast
                  </h3>
               </div>
               
               <div className="space-y-6">
                  <div>
                     <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Broadcast Title</label>
                     <input 
                        type="text" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-800 font-bold placeholder:font-normal" 
                        placeholder="e.g. Annual Sports Day Announcement" 
                     />
                  </div>
                  
                  <div>
                     <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Target Audience</label>
                     <div className="relative">
                        <Target className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <select className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-700 font-bold appearance-none cursor-pointer">
                           <option>All Users (Global)</option>
                           <option>Parents & Guardians Only</option>
                           <option>Teaching Staff Only</option>
                           <option>Students (Grade 10-12)</option>
                        </select>
                     </div>
                  </div>
                  
                  <div>
                     <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message Content</label>
                     <textarea 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 outline-none h-48 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-700 font-medium resize-none" 
                        placeholder="Type your message here..."
                     ></textarea>
                     <p className="text-right text-xs text-slate-400 mt-1 font-bold">0 / 500 characters</p>
                  </div>
                  
                  <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                     <label className="block text-xs font-bold text-blue-800 uppercase tracking-wider mb-3">Delivery Channels</label>
                     <div className="flex gap-6">
                        <label className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg border border-blue-100 shadow-sm cursor-pointer hover:border-blue-300 transition-all select-none">
                           <div className="relative flex items-center justify-center">
                              <input type="checkbox" className="peer w-5 h-5 appearance-none border-2 border-slate-300 rounded checked:bg-blue-500 checked:border-blue-500 transition-colors" defaultChecked />
                              <CheckCircle size={12} className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                           </div>
                           <span className="text-sm font-bold text-slate-700 flex items-center gap-2">
                              <Mail size={16} className="text-blue-500"/> Email
                           </span>
                        </label>
                        
                        <label className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg border border-blue-100 shadow-sm cursor-pointer hover:border-blue-300 transition-all select-none">
                           <div className="relative flex items-center justify-center">
                              <input type="checkbox" className="peer w-5 h-5 appearance-none border-2 border-slate-300 rounded checked:bg-blue-500 checked:border-blue-500 transition-colors" defaultChecked />
                              <CheckCircle size={12} className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                           </div>
                           <span className="text-sm font-bold text-slate-700 flex items-center gap-2">
                              <Smartphone size={16} className="text-blue-500"/> SMS
                           </span>
                        </label>
                     </div>
                  </div>
                  
                  <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                     <Send size={20} />
                     Send Broadcast Message
                  </button>
               </div>
            </div>
         </div>

         {/* ========================================
             HISTORY (Right - 5 cols)
             ======================================== */}
         <div className="md:col-span-5 flex flex-col h-full">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex-1 flex flex-col relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full opacity-50 pointer-events-none" />

               <div className="flex justify-between items-center mb-6 relative z-10">
                  <h3 className="font-bold text-xl text-slate-800 flex items-center gap-2">
                     <div className="p-2.5 bg-purple-100 text-purple-600 rounded-xl">
                        <Bell size={20}/>
                     </div>
                     Recent Broadcasts
                  </h3>
               </div>
               
               <div className="space-y-4 overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
                  {notifications.map(notif => (
                     <div key={notif.id} className="p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-purple-200 hover:shadow-sm transition-all group cursor-pointer">
                        <div className="flex justify-between items-start mb-2">
                           <h4 className="font-bold text-slate-800 text-sm group-hover:text-purple-700 transition-colors">{notif.title}</h4>
                           <span className={`text-[10px] px-2 py-0.5 rounded-md font-extrabold uppercase tracking-wide border ${
                              notif.status === 'Sent' ? 'bg-green-100 text-green-700 border-green-200' : 'bg-yellow-100 text-yellow-700 border-yellow-200'
                           }`}>
                              {notif.status}
                           </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                           <Target size={12} />
                           <span className="font-semibold">{notif.groups.join(', ')}</span>
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-slate-200/50">
                           <span className="text-[10px] text-slate-400 font-bold flex items-center gap-1">
                              <Calendar size={10} /> {notif.date}
                           </span>
                           <div className="flex gap-2">
                              {/* Mock Delivery Channels Icons */}
                              <Mail size={12} className="text-slate-400" />
                              <Smartphone size={12} className="text-slate-400" />
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               <button className="mt-6 w-full py-3 bg-white border-2 border-slate-100 text-slate-600 text-sm font-bold rounded-xl hover:bg-slate-50 hover:border-slate-200 transition-all">
                  View Full History
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default NotificationCenter;
