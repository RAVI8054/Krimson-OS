import React, { useState } from 'react';
import { 
  MessageSquare, 
  Megaphone, 
  Radio, 
  Lock, 
  Search, 
  ExternalLink, 
  ShieldAlert, 
  CheckCheck, 
  Flag,
  User,
  Clock,
  ChevronRight
} from 'lucide-react';

const CommunicationHub = () => {
  const [activeTab, setActiveTab] = useState('messages');
  const [selectedThread, setSelectedThread] = useState(null);

  // Mock Data
  const messages = [
    {
      id: 1,
      sender: 'Mrs. Sarah Tan',
      role: 'Class Teacher (5-A)',
      time: '10:45 AM',
      preview: 'Regarding the upcoming field trip to the Science Museum...',
      read: true,
      urgent: false,
      history: [
        { sender: 'Mrs. Sarah Tan', text: 'Hello, I wanted to remind you about the permission slip for the Science Museum trip next Tuesday.', time: '10:45 AM', isMe: false },
        { sender: 'You', text: 'Hi, yes I will send it with Aravind tomorrow. Thanks for the reminder.', time: '11:00 AM', isMe: true },
        { sender: 'Mrs. Sarah Tan', text: 'Perfect. Also, please pack a lunch for him.', time: '11:05 AM', isMe: false }
      ]
    },
    {
      id: 2,
      sender: 'Mr. David Lee',
      role: 'Math Teacher',
      time: 'Yesterday',
      preview: 'Aravind needs to improve his algebra scores.',
      read: true,
      urgent: true,
      history: [
        { sender: 'Mr. David Lee', text: 'Aravind scored 60% in the last Algebra test. I suggest some extra practice.', time: '2:30 PM', isMe: false }
      ]
    }
  ];

  const announcements = [
    {
      id: 1,
      sender: 'School Administration',
      title: 'Annual Sports Day Postponed',
      time: '2 hours ago',
      content: 'Due to predicted heavy rainfall, the Annual Sports Day scheduled for tomorrow has been postponed to next Friday.',
      read: false
    },
    {
      id: 2,
      sender: 'Principal Office',
      title: 'Parent-Teacher Meeting Schedule',
      time: '1 day ago',
      content: 'The PTM for Term 1 will be held on Saturday, 15th Jan. Slots are available for booking.',
      read: true
    }
  ];

  const broadcasts = [
    {
      id: 1,
      sender: 'Admin (System)',
      title: 'School Bus Route 4 Delay',
      time: '08:00 AM',
      content: 'Bus Route 4 is delayed by 15 minutes due to traffic.',
      urgent: true
    }
  ];

  const counselorMsgs = [
    {
      id: 1,
      sender: 'Ms. Emily White',
      role: 'School Counselor',
      time: '3 days ago',
      preview: 'Follow up on Aravind\'s focus in class.',
      read: true,
      confidential: true,
      history: [
        { sender: 'Ms. Emily White', text: 'Hi, I noticed Aravind was a bit distracted lately. Is everything okay at home?', time: '10:00 AM', isMe: false }
      ]
    }
  ];

  const renderContent = () => {
    let data = [];
    switch (activeTab) {
      case 'messages': data = messages; break;
      case 'announcements': data = announcements; break;
      case 'broadcasts': data = broadcasts; break;
      case 'counselor': data = counselorMsgs; break;
      default: data = messages;
    }

    return (
      <div className="space-y-4">
        {data.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setSelectedThread(item)}
            className={`group p-5 rounded-2xl border transition-all cursor-pointer ${
              selectedThread?.id === item.id 
                ? 'bg-blue-50/50 border-blue-200 shadow-md ring-1 ring-blue-100' 
                : 'bg-white border-slate-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-500/5'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-sm ${
                  activeTab === 'counselor' ? 'bg-gradient-to-br from-purple-500 to-indigo-600' :
                  activeTab === 'broadcasts' ? 'bg-gradient-to-br from-orange-400 to-red-500' :
                  activeTab === 'announcements' ? 'bg-gradient-to-br from-emerald-400 to-teal-600' :
                  'bg-gradient-to-br from-blue-500 to-indigo-600'
                }`}>
                  {activeTab === 'counselor' ? <Lock size={18} /> :
                   activeTab === 'broadcasts' ? <Radio size={18} /> :
                   activeTab === 'announcements' ? <Megaphone size={18} /> :
                   <User size={18} />}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{item.sender}</h4>
                  {(item.role || item.title) && (
                    <p className="text-xs text-slate-500 font-medium">{item.role || item.title}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                  <Clock size={10} /> {item.time}
                </span>
                {item.read && <span className="text-blue-500"><CheckCheck size={14} /></span>}
              </div>
            </div>
            
            <p className="text-sm text-slate-600 line-clamp-2 pl-[52px]">
              {item.preview || item.content}
            </p>

            <div className="pl-[52px] mt-3 flex items-center gap-3">
              {item.urgent && (
                <span className="bg-red-50 text-red-600 text-[10px] px-2 py-1 rounded-full font-bold border border-red-100 flex items-center gap-1">
                  <ShieldAlert size={10} /> Urgent
                </span>
              )}
              {item.confidential && (
                <span className="bg-purple-50 text-purple-600 text-[10px] px-2 py-1 rounded-full font-bold border border-purple-100 flex items-center gap-1">
                  <Lock size={10} /> Confidential
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="h-[calc(100vh-120px)] flex gap-6 p-2">
      {/* Left Panel - Navigation & List */}
      <div className="w-1/3 flex flex-col gap-6">
        {/* Header & Tabs */}
        <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex p-1 bg-slate-50 rounded-xl">
            <button 
              onClick={() => { setActiveTab('messages'); setSelectedThread(null); }}
              className={`flex-1 flex flex-col items-center justify-center py-3 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'messages' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <MessageSquare size={18} className="mb-1" />
              Messages
            </button>
            <button 
              onClick={() => { setActiveTab('announcements'); setSelectedThread(null); }}
              className={`flex-1 flex flex-col items-center justify-center py-3 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'announcements' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <Megaphone size={18} className="mb-1" />
              Notices
            </button>
            <button 
              onClick={() => { setActiveTab('broadcasts'); setSelectedThread(null); }}
              className={`flex-1 flex flex-col items-center justify-center py-3 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'broadcasts' ? 'bg-white text-orange-500 shadow-sm' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <Radio size={18} className="mb-1" />
              Broadcasts
            </button>
            <button 
              onClick={() => { setActiveTab('counselor'); setSelectedThread(null); }}
              className={`flex-1 flex flex-col items-center justify-center py-3 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'counselor' ? 'bg-white text-purple-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <Lock size={18} className="mb-1" />
              Counselor
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search conversations..." 
            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-sm" 
          />
        </div>

        {/* Scrollable List */}
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
          {renderContent()}
        </div>
      </div>

      {/* Right Panel - Detail View */}
      <div className="flex-1 bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col relative content-start">
        {selectedThread ? (
          <>
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-10">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md ${
                  activeTab === 'counselor' ? 'bg-gradient-to-br from-purple-500 to-indigo-600' : 'bg-gradient-to-br from-blue-500 to-indigo-600'
                }`}>
                  <User size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800">{selectedThread.sender}</h2>
                  <p className="text-sm text-slate-500">{selectedThread.role || selectedThread.title}</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                {activeTab !== 'announcements' && activeTab !== 'broadcasts' && (
                  <button className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 font-bold rounded-xl text-xs hover:bg-red-100 transition-colors border border-red-100">
                    <Flag size={14} />
                    Escalate to Principal
                  </button>
                )}
              </div>
            </div>

            {/* Content / Chat History */}
            <div className="flex-1 overflow-y-auto p-8 bg-slate-50">
              {selectedThread.history ? (
                <div className="space-y-6">
                  {/* Date Divider */}
                  <div className="flex justify-center">
                    <span className="bg-slate-200 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Today</span>
                  </div>

                  {selectedThread.history.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[70%] p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${
                        msg.isMe 
                          ? 'bg-blue-600 text-white rounded-tr-none' 
                          : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                      }`}>
                        <p>{msg.text}</p>
                        <p className={`text-[10px] mt-2 text-right ${msg.isMe ? 'text-blue-200' : 'text-slate-400'}`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <h3 className="text-lg font-bold text-slate-800 mb-4">{selectedThread.title || 'Announcement'}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {selectedThread.content}
                  </p>
                  <p className="mt-6 text-xs text-slate-400 font-medium">
                    Sent by {selectedThread.sender} • {selectedThread.time}
                  </p>
                </div>
              )}
            </div>

            {/* Footer Action Area */}
            {(activeTab === 'messages' || activeTab === 'counselor') && (
              <div className="p-6 bg-white border-t border-slate-100">
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center">
                  <div className="mb-4">
                    <h4 className="font-bold text-slate-800 mb-1">Reply via Chat App</h4>
                    <p className="text-xs text-slate-500">
                      Replies are disabled here. Please use our dedicated chat application for seamless communication.
                    </p>
                  </div>
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-500/20 hover:shadow-xl hover:scale-[1.02] transition-all">
                    Open Chat Application
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-slate-400">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
              <MessageSquare size={32} className="text-slate-300" />
            </div>
            <h3 className="text-lg font-bold text-slate-600">Select a conversation</h3>
            <p className="text-sm">Choose a thread from the list to view details</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunicationHub;
