import React, { useState } from 'react';
import { Send, Bell, Check, X, FileText } from 'lucide-react';

const CommunicationConsole = () => {
    const [activeTab, setActiveTab] = useState('compose');

  return (
    <div className="space-y-6">
      <div className="mb-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between overflow-hidden relative">
        <div className="relative z-10">
            <h1 className="text-2xl font-bold text-slate-800">Communication Console</h1>
            <p className="text-slate-500 mt-1">Broadcast messages and manage school-wide announcements</p>
        </div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-pink-50 to-transparent"></div>
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-2xl flex items-center justify-center text-white shadow-inner">
            <Send size={24} />
        </div>
      </div>

      <div className="flex gap-4 border-b border-slate-200 pb-2">
         <button className={`pb-2 px-4 font-medium transition-colors ${activeTab === 'compose' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-700'}`} onClick={() => setActiveTab('compose')}>Compose New</button>
         <button className={`pb-2 px-4 font-medium transition-colors ${activeTab === 'approvals' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-700'}`} onClick={() => setActiveTab('approvals')}>Approvals (3)</button>
         <button className={`pb-2 px-4 font-medium transition-colors ${activeTab === 'history' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-700'}`} onClick={() => setActiveTab('history')}>History</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Main Action Area */}
         <div className="lg:col-span-2 space-y-6">
             {activeTab === 'compose' && (
                 <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                     <h3 className="font-semibold mb-4">Create Global Announcement</h3>
                     <div className="space-y-4">
                         <div>
                             <label className="block text-sm font-medium mb-1 text-slate-700">Audience</label>
                             <div className="flex gap-4">
                                 <label className="flex items-center gap-2"><input type="checkbox" className="rounded text-blue-600" defaultChecked /> Students</label>
                                 <label className="flex items-center gap-2"><input type="checkbox" className="rounded text-blue-600" defaultChecked /> Teachers</label>
                                 <label className="flex items-center gap-2"><input type="checkbox" className="rounded text-blue-600" /> Parents</label>
                             </div>
                         </div>
                         <div>
                             <label className="block text-sm font-medium mb-1 text-slate-700">Subject</label>
                             <input type="text" className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-100 outline-none" placeholder="e.g. School Holiday Notification" />
                         </div>
                         <div>
                             <label className="block text-sm font-medium mb-1 text-slate-700">Message</label>
                             <textarea className="w-full border rounded-lg p-2 h-32 focus:ring-2 focus:ring-blue-100 outline-none" placeholder="Type your message here..."></textarea>
                         </div>
                         <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg text-xs text-slate-500">
                             <span>PDPA Compliance: Message will be digitally signed and archived.</span>
                         </div>
                         <button className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-6 py-2.5 rounded-xl hover:shadow-lg transition-all flex items-center gap-2 font-bold shadow-md">
                             <Send size={18} /> Broadcast Now
                         </button>
                     </div>
                 </div>
             )}

             {activeTab === 'approvals' && (
                 <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                     <h3 className="font-semibold mb-4">Pending Approvals</h3>
                     <div className="space-y-4">
                        <div className="border p-4 rounded-lg flex justify-between items-start">
                            <div>
                                <h4 className="font-bold">Sports Day Schedule Change</h4>
                                <p className="text-sm text-slate-500 mb-2">Requested by: Mr. Gym (PE Dept)</p>
                                <p className="text-sm bg-slate-50 p-2 rounded">"Due to rain forecast, events shifted to..."</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200"><Check size={18}/></button>
                                <button className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200"><X size={18}/></button>
                            </div>
                        </div>
                     </div>
                 </div>
             )}
         </div>

         {/* Sidebar Templates & Metrics */}
         <div className="space-y-6">
             <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                 <h3 className="font-semibold mb-4">Engagement Metrics</h3>
                 <div className="space-y-3">
                     <div className="flex justify-between text-sm">
                         <span className="text-slate-600">Last Broadcast Read Rate</span>
                         <span className="font-bold text-green-600">88%</span>
                     </div>
                     <div className="w-full bg-slate-100 rounded-full h-2">
                         <div className="bg-green-500 h-2 rounded-full w-[88%]"></div>
                     </div>
                     <p className="text-xs text-slate-400">Campaign: Annual Day Invite</p>
                 </div>
             </div>

             <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                 <h3 className="font-semibold mb-4">Quick Templates</h3>
                 <ul className="space-y-2">
                     <li className="p-2 border rounded hover:bg-slate-50 cursor-pointer text-sm flex items-center gap-2">
                         <Bell size={16} className="text-amber-500" /> Emergency Alert
                     </li>
                     <li className="p-2 border rounded hover:bg-slate-50 cursor-pointer text-sm flex items-center gap-2">
                         <FileText size={16} className="text-blue-500" /> Holiday Announcement
                     </li>
                     <li className="p-2 border rounded hover:bg-slate-50 cursor-pointer text-sm flex items-center gap-2">
                         <FileText size={16} className="text-purple-500" /> Exam Schedule Release
                     </li>
                 </ul>
             </div>
         </div>
      </div>
    </div>
  );
};

export default CommunicationConsole;
