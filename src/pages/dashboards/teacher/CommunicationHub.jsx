import React from 'react';
import { TEACHER_DATA } from '../../../data/teacherData';
import { Send, Search, Paperclip, Mic } from 'lucide-react';

const CommunicationHub = () => {
  const { messages } = TEACHER_DATA;

  return (
    <div className="h-[calc(100vh-140px)] flex gap-6">
       {/* Sidebar List */}
       <div className="w-80 bg-white rounded-3xl p-6 shadow-sm flex flex-col">
          <div className="mb-6 relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
             <input type="text" placeholder="Search chats..." className="w-full bg-slate-50 pl-10 pr-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-rose-100" />
          </div>
          
          <div className="flex-1 overflow-y-auto space-y-2">
             {messages.map((msg) => (
               <div key={msg.id} className={`p-4 rounded-xl cursor-pointer transition-colors ${msg.unread ? 'bg-rose-50 border border-rose-100' : 'hover:bg-slate-50'}`}>
                  <div className="flex justify-between items-start mb-1">
                     <h4 className={`text-sm ${msg.unread ? 'font-bold text-rose-800' : 'font-semibold text-slate-700'}`}>{msg.from}</h4>
                     <span className="text-[10px] text-slate-400">{msg.time}</span>
                  </div>
                  <p className={`text-xs truncate ${msg.unread ? 'text-rose-600 font-medium' : 'text-slate-500'}`}>{msg.content}</p>
               </div>
             ))}
             {/* Mock more chats */}
             {[1,2,3].map(i => (
                <div key={i} className="p-4 rounded-xl hover:bg-slate-50 cursor-pointer">
                   <div className="flex justify-between items-start mb-1">
                      <h4 className="text-sm font-semibold text-slate-700">Student Name {i}</h4>
                      <span className="text-[10px] text-slate-400">Yesterday</span>
                   </div>
                   <p className="text-xs text-slate-500 truncate">Submission query regarding assignment...</p>
                </div>
             ))}
          </div>
       </div>

       {/* Chat Area */}
       <div className="flex-1 bg-white rounded-3xl shadow-sm flex flex-col overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
             <div>
                <h3 className="font-bold text-slate-800">Parent of Aarav</h3>
                <p className="text-xs text-green-500 font-medium flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Online</p>
             </div>
          </div>
          
          <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-[#f8fafc]">
             {/* Bubble Right */}
             <div className="flex justify-end">
                <div className="bg-rose-500 text-white p-4 rounded-2xl rounded-tr-none max-w-md shadow-sm text-sm">
                   Hello Mr. Singh, I noticed Aarav has been absent for 2 days. Is everything alright?
                </div>
             </div>
             {/* Bubble Left */}
             <div className="flex justify-start">
                <div className="bg-white text-slate-700 border border-slate-100 p-4 rounded-2xl rounded-tl-none max-w-md shadow-sm text-sm">
                   Hi Ma'am, yes he is down with viral fever. Will send the medical certificate tomorrow.
                </div>
             </div>
          </div>

          <div className="p-4 bg-white border-t border-slate-100">
             <div className="flex gap-2 items-center bg-slate-50 p-2 rounded-2xl border border-slate-200">
                <button className="p-2 text-slate-400 hover:text-slate-600 rounded-xl"><Paperclip size={20}/></button>
                <input type="text" placeholder="Type your message..." className="flex-1 bg-transparent outline-none text-sm text-slate-700" />
                <button className="p-2 text-slate-400 hover:text-slate-600 rounded-xl"><Mic size={20}/></button>
                <button className="p-2 bg-rose-600 text-white rounded-xl hover:bg-rose-700 shadow-md transform transition-transform active:scale-95"><Send size={18}/></button>
             </div>
             <p className="text-[10px] text-center text-slate-400 mt-2">Messages are archived for school audit purposes.</p>
          </div>
       </div>
    </div>
  );
};

export default CommunicationHub;
