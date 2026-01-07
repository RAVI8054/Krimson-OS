import React, { useState } from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { Search, Bell, Send, User } from 'lucide-react';

const CommunicationHub = () => {
  const [activeTab, setActiveTab] = useState('Notices'); // Notices, Messages
  const { messages } = STUDENT_DATA;

  return (
    <div className="h-[calc(100vh-140px)] flex gap-8">
       {/* Sidebar */}
       <div className="w-80 flex flex-col gap-6">
          <div className="bg-white p-2 rounded-2xl shadow-sm flex">
             {['Notices', 'Messages'].map(t => (
                <button 
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === t ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                   {t}
                </button>
             ))}
          </div>

          <div className="flex-1 overflow-y-auto space-y-3">
             {activeTab === 'Messages' ? messages.map(msg => (
                <div key={msg.id} className="bg-white p-4 rounded-2xl shadow-sm cursor-pointer border border-transparent hover:border-indigo-100 transition-all">
                   <div className="flex justify-between items-start mb-2">
                      <div className="font-bold text-slate-700 text-sm truncate w-32">{msg.from}</div>
                      <span className="text-[10px] text-slate-400">{msg.time}</span>
                   </div>
                   <p className="text-xs text-slate-500 line-clamp-2">{msg.content}</p>
                   {msg.unread && <div className="mt-2 w-2 h-2 bg-red-500 rounded-full"></div>}
                </div>
             )) : (
                [1,2].map(i => (
                   <div key={i} className="bg-yellow-50 p-4 rounded-2xl border border-yellow-100 cursor-pointer">
                      <div className="flex items-center gap-2 mb-2">
                         <Bell size={14} className="text-yellow-600"/>
                         <span className="text-xs font-bold text-yellow-800">School Admin</span>
                      </div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">Winter Break Announcement</h4>
                      <p className="text-xs text-slate-600">School will remain closed from Dec 24 to Jan 2...</p>
                   </div>
                ))
             )}
          </div>
       </div>

       {/* Reading Pane */}
       <div className="flex-1 bg-white rounded-3xl shadow-sm flex flex-col overflow-hidden">
          {activeTab === 'Messages' ? (
             <>
               <div className="p-6 border-b border-slate-100 flex items-center gap-4 bg-slate-50">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                     <User size={20} />
                  </div>
                  <div>
                     <h3 className="font-bold text-slate-800">Mrs. Davis (English)</h3>
                     <p className="text-xs text-green-500 font-bold">Online</p>
                  </div>
               </div>
               
               <div className="flex-1 p-6 bg-[#f8fafc] overflow-y-auto space-y-4">
                  <div className="flex justify-start">
                     <div className="bg-white border border-slate-100 text-slate-700 p-4 rounded-2xl rounded-tl-none max-w-md shadow-sm text-sm">
                        Keep up the good work on your assignments, Alex!
                     </div>
                  </div>
                  <div className="flex justify-end">
                     <div className="bg-indigo-600 text-white p-4 rounded-2xl rounded-tr-none max-w-md shadow-sm text-sm">
                        Thank you Ma'am! I had a doubt regarding the next chapter...
                     </div>
                  </div>
               </div>

               <div className="p-4 bg-white border-t border-slate-100">
                  <div className="flex gap-2 bg-slate-50 p-2 rounded-2xl border border-slate-200">
                     <input type="text" placeholder="Type a message..." className="flex-1 bg-transparent px-2 outline-none text-sm" />
                     <button className="p-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 shadow-md"><Send size={18}/></button>
                  </div>
               </div>
             </>
          ) : (
             <div className="flex-1 flex flex-col items-center justify-center text-slate-400">
                <FileText size={48} className="mb-4 opacity-20"/>
                <p>Select a notice to view details</p>
             </div>
          )}
       </div>
    </div>
  );
};

export default CommunicationHub;
