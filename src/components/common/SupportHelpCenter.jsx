import React, { useState } from 'react';
import { Search, MessageSquare, PlayCircle, FileText, Plus, AlertCircle, CheckCircle, Clock } from 'lucide-react';

/**
 * Common Screen 12: Support & Help Center
 * Roles: All Roles
 * 
 * Used in:
 * - src/pages/dashboards/teacher/Support.jsx (Wrapper)
 * - src/pages/dashboards/student/Support.jsx (Wrapper)
 * - src/pages/dashboards/admin/Support.jsx (Wrapper)
 * 
 * Logic:
 * - Knowledge base (FAQs, Videos).
 * - Ticket creation and management.
 * - Categorized resources.
 */

const SupportHelpCenter = ({ role, userTickets = [] }) => {
  const [activeTab, setActiveTab] = useState('Knowledge Base'); // Knowledge Base | My Tickets
  const [searchQuery, setSearchQuery] = useState('');

  // Mock Knowledge Base Data
  const faqs = [
    { id: 1, question: "How do I reset my password?", category: "Account", answer: "Go to Profile > Settings > Security to update your password." },
    { id: 2, question: "Where can I view my attendance?", category: "Academic", answer: "Attendance reports are available in the 'Reports' section of your dashboard." },
    { id: 3, question: "How to upload an assignment?", category: "Academic", answer: "Navigate to the Assignment Manager, select the assignment, and click 'Upload Submission'." },
    { id: 4, question: "System requirements for exams?", category: "Technical", answer: "A stable internet connection and Chrome browser version 90+ are required." },
  ];

  const tutorials = [
    { id: 1, title: "Dashboard Tour", duration: "2:30", thumbColor: "bg-blue-100" },
    { id: 2, title: "Submitting Grades", duration: "4:15", thumbColor: "bg-pink-100" },
    { id: 3, title: "Managing Profile", duration: "1:45", thumbColor: "bg-cyan-100" },
  ];

  // Mock Tickets if none provided
  const tickets = userTickets.length > 0 ? userTickets : [
      { id: 'TKT-1001', subject: "Login Issue on Mobile", category: "Technical", status: "Open", date: "2024-01-05", priority: "High" },
      { id: 'TKT-0998', subject: "Incorrect Grade Display", category: "Academic", status: "Resolved", date: "2023-12-28", priority: "Medium" },
  ];

  const getPriorityColor = (p) => {
      switch(p) {
          case 'High': return 'text-red-600 bg-red-50 border-red-100';
          case 'Medium': return 'text-orange-600 bg-orange-50 border-orange-100';
          default: return 'text-blue-600 bg-blue-50 border-blue-100';
      }
  };

  const filteredFaqs = faqs.filter(f => f.question.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="h-full space-y-6">
       
       {/* Header */}
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-8 rounded-3xl shadow-sm">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Support Center</h1>
            <p className="text-slate-500">How can we help you today?</p>
          </div>
          <div className="flex bg-slate-100 p-1 rounded-xl">
             {['Knowledge Base', 'My Tickets', 'Contact Support'].map(t => (
                <button 
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === t ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                   {t}
                </button>
             ))}
          </div>
       </div>

       {activeTab === 'Knowledge Base' && (
           <div className="space-y-8">
               {/* Search Banner */}
               <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 rounded-3xl p-10 text-center text-white shadow-lg">
                   <h2 className="text-2xl font-bold mb-4">Search for answers</h2>
                   <div className="max-w-xl mx-auto relative">
                       <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                       <input 
                        type="text" 
                        placeholder="e.g. How to change email..." 
                        className="w-full pl-12 pr-4 py-4 rounded-2xl text-slate-800 outline-none focus:ring-4 focus:ring-white/30 transition-all font-medium"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                       />
                   </div>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                   {/* FAQs */}
                   <div className="lg:col-span-2 space-y-4">
                       <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2"><FileText size={20} className="text-blue-500"/> Frequently Asked</h3>
                       <div className="space-y-3">
                           {filteredFaqs.map(faq => (
                               <div key={faq.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-100 transition-all cursor-pointer group">
                                   <div className="flex justify-between items-start mb-2">
                                       <h4 className="font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{faq.question}</h4>
                                       <span className="text-[10px] font-bold bg-slate-50 text-slate-400 px-2 py-1 rounded uppercase tracking-wider">{faq.category}</span>
                                   </div>
                                   <p className="text-sm text-slate-500 leading-relaxed">{faq.answer}</p>
                               </div>
                           ))}
                           {filteredFaqs.length === 0 && <p className="text-slate-400 text-center py-8">No results found.</p>}
                       </div>
                   </div>

                   {/* Tutorials */}
                   <div>
                       <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2 mb-4"><PlayCircle size={20} className="text-pink-500"/> Video Tutorials</h3>
                       <div className="bg-white p-6 rounded-3xl shadow-sm space-y-4">
                           {tutorials.map(vid => (
                               <div key={vid.id} className="flex gap-4 items-center group cursor-pointer">
                                   <div className={`w-16 h-12 rounded-lg ${vid.thumbColor} flex items-center justify-center text-slate-600 group-hover:scale-105 transition-transform`}>
                                       <PlayCircle size={20} className="opacity-50"/>
                                   </div>
                                   <div>
                                       <h4 className="font-bold text-sm text-slate-700 group-hover:text-blue-600">{vid.title}</h4>
                                       <p className="text-xs text-slate-400">{vid.duration} • MP4</p>
                                   </div>
                               </div>
                           ))}
                           <button className="w-full mt-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50">View All Videos</button>
                       </div>
                   </div>
               </div>
           </div>
       )}

       {activeTab === 'My Tickets' && (
           <div className="bg-white rounded-3xl p-8 shadow-sm">
               <div className="flex justify-between items-center mb-6">
                   <h3 className="font-bold text-slate-800 text-lg">My Support Tickets</h3>
                   <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 shadow-md transition-transform active:scale-95">
                       <Plus size={16}/> Create New Ticket
                   </button>
               </div>
               
               <div className="space-y-4">
                   {tickets.map(ticket => (
                       <div key={ticket.id} className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
                           <div className="flex gap-4 items-start mb-4 md:mb-0">
                               <div className={`p-3 rounded-full ${ticket.status === 'Resolved' ? 'bg-green-100 text-green-600' : 'bg-blue-50 text-blue-600'}`}>
                                   {ticket.status === 'Resolved' ? <CheckCircle size={20}/> : <Clock size={20}/>}
                               </div>
                               <div>
                                   <h4 className="font-bold text-slate-800 text-lg">{ticket.subject}</h4>
                                   <div className="flex gap-3 text-xs text-slate-500 mt-1">
                                       <span className="font-mono">{ticket.id}</span>
                                       <span>•</span>
                                       <span>{ticket.date}</span>
                                       <span>•</span>
                                       <span className="font-bold text-slate-600">{ticket.category}</span>
                                   </div>
                               </div>
                           </div>
                           
                           <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                               <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${getPriorityColor(ticket.priority)}`}>
                                   {ticket.priority} Priority
                               </span>
                               <span className={`px-3 py-1 rounded-lg text-xs font-bold ${ticket.status === 'Resolved' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                                   {ticket.status}
                               </span>
                               <button className="text-xs font-bold text-blue-600 hover:underline">View Details</button>
                           </div>
                       </div>
                   ))}
               </div>
           </div>
       )}

       {activeTab === 'Contact Support' && (
           <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-sm text-center">
               <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
                   <MessageSquare size={32} />
               </div>
               <h2 className="text-2xl font-bold text-slate-800 mb-2">Still need help?</h2>
               <p className="text-slate-500 mb-8">Our support team is available Mon-Fri, 9am - 6pm EST.</p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <button className="p-4 border border-slate-200 rounded-2xl hover:border-blue-400 hover:bg-blue-50 group transition-all">
                       <h4 className="font-bold text-slate-700 group-hover:text-blue-600">Live Chat</h4>
                       <p className="text-xs text-slate-400">Average wait: 2 mins</p>
                   </button>
                   <button className="p-4 border border-slate-200 rounded-2xl hover:border-pink-400 hover:bg-pink-50 group transition-all">
                       <h4 className="font-bold text-slate-700 group-hover:text-pink-600">Email Support</h4>
                       <p className="text-xs text-slate-400">Response in 24 hrs</p>
                   </button>
               </div>
           </div>
       )}

    </div>
  );
};

export default SupportHelpCenter;
