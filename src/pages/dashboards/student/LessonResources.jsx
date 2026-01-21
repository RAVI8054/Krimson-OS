import React, { useState } from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { Search, FileText, Video, Beaker, Download, BookOpen, Clock, Filter, X, Bookmark, BookmarkCheck, Wifi, WifiOff, ExternalLink } from 'lucide-react';

const LessonResources = () => {
  const { resources } = STUDENT_DATA;
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedWeek, setSelectedWeek] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const [resourceStates, setResourceStates] = useState(resources);

  // Extract unique values for filters
  const subjects = ['All', ...new Set(resources.map(r => r.subject))];
  const topics = ['All', ...new Set(resources.map(r => r.topic))];
  const weeks = ['All', ...new Set(resources.map(r => r.week))];
  const types = ['All', ...new Set(resources.map(r => r.type))];

  const toggleSaved = (id) => {
    setResourceStates(prev => prev.map(r => r.id === id ? {...r, saved: !r.saved} : r));
  };

  const toggleRead = (id) => {
    setResourceStates(prev => prev.map(r => r.id === id ? {...r, read: !r.read} : r));
  };

  const filteredResources = resourceStates.filter(res => {
    const matchSubject = selectedSubject === 'All' || res.subject === selectedSubject;
    const matchTopic = selectedTopic === 'All' || res.topic === selectedTopic;
    const matchWeek = selectedWeek === 'All' || res.week === selectedWeek;
    const matchType = selectedType === 'All' || res.type === selectedType;
    return matchSubject && matchTopic && matchWeek && matchType;
  });

  const getIcon = (type) => {
    switch(type) {
      case 'Video': return <Video size={24}/>;
      case 'Experiment': return <Beaker size={24}/>;
      default: return <FileText size={24}/>;
    }
  };

  const getIconColor = (type) => {
    switch(type) {
      case 'Video': return 'bg-gradient-to-br from-red-100 to-pink-100 text-red-600';
      case 'Experiment': return 'bg-gradient-to-br from-purple-100 to-indigo-100 text-purple-600';
      default: return 'bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600';
    }
  };

  // Recommended resources
  const recommended = [
    { title: 'Advanced Calculus Guide', subject: 'MATH', icon: '📐' },
    { title: 'Periodic Table Study', subject: 'CHEMISTRY', icon: '⚗️' },
    { title: 'World History Timeline', subject: 'HISTORY', icon: '📜' },
  ];

  return (
    <div className="space-y-8">
      {/* Premium Gradient Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-8 text-white shadow-xl">
        {/* Decorative Blobs */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 -left-10 w-32 h-32 bg-pink-300 opacity-20 rounded-full blur-xl"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Resource Library</h2>
              <p className="text-white/90 text-sm">Curated study materials for your subjects.</p>
            </div>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" size={20} />
              <input 
                type="text" 
                placeholder="Search topics (e.g. Gravity)..." 
                className="w-full pl-12 pr-4 py-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 placeholder-white/70 text-white outline-none focus:bg-white/30 transition-all" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
                <Filter size={20} className="text-blue-600" />
                <h3 className="font-bold text-slate-800">Filters</h3>
            </div>
            {(selectedSubject !== 'All' || selectedTopic !== 'All' || selectedWeek !== 'All' || selectedType !== 'All') && (
                <button 
                    onClick={() => {
                        setSelectedSubject('All');
                        setSelectedTopic('All');
                        setSelectedWeek('All');
                        setSelectedType('All');
                    }}
                    className="flex items-center gap-1 text-xs font-bold text-red-500 hover:text-red-600"
                >
                    <X size={14}/> Clear Filters
                </button>
            )}
        </div>
        
        <div className="space-y-6">
          {/* Subject Filter */}
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase mb-2">Subject</p>
            <div className="flex flex-wrap gap-2">
              {subjects.map(subject => (
                <button
                  key={subject}
                  onClick={() => setSelectedSubject(subject)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    selectedSubject === subject 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-md' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* Topic Filter */}
               <div>
                  <p className="text-xs font-bold text-slate-400 uppercase mb-2">Topic</p>
                  <select 
                     value={selectedTopic}
                     onChange={(e) => setSelectedTopic(e.target.value)}
                     className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 outline-none focus:border-blue-400 transition-all"
                  >
                     {topics.map(topic => (
                        <option key={topic} value={topic}>{topic}</option>
                     ))}
                  </select>
               </div>

               {/* Week Filter */}
               <div>
                  <p className="text-xs font-bold text-slate-400 uppercase mb-2">Week</p>
                  <select 
                     value={selectedWeek}
                     onChange={(e) => setSelectedWeek(e.target.value)}
                     className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 outline-none focus:border-blue-400 transition-all"
                  >
                     {weeks.map(week => (
                        <option key={week} value={week}>{week}</option>
                     ))}
                  </select>
               </div>
          </div>

          {/* Type Filter */}
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase mb-2">Resource Type</p>
            <div className="flex flex-wrap gap-2">
              {types.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                    selectedType === type 
                      ? 'bg-gradient-to-r from-pink-400 to-rose-500 text-white shadow-md' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {type === 'Video' && <Video size={14} />}
                  {type === 'Experiment' && <Beaker size={14} />}
                  {type === 'Document' && <FileText size={14} />}
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map(res => (
          <div 
            key={res.id} 
            className="group relative bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-slate-100 hover:border-blue-200 cursor-pointer overflow-hidden"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10">
              {/* Header with Icon and Actions */}
              <div className="flex justify-between items-start mb-4">
                <div className={`p-4 rounded-2xl ${getIconColor(res.type)} shadow-md`}>
                  {getIcon(res.type)}
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => toggleSaved(res.id)}
                    className={`p-2 rounded-lg transition-all ${res.saved ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400 hover:bg-blue-50'}`}
                    title={res.saved ? 'Saved Offline' : 'Save for Offline'}
                  >
                    {res.saved ? <WifiOff size={18}/> : <Wifi size={18}/>}
                  </button>
                  <button 
                    onClick={() => toggleRead(res.id)}
                    className={`p-2 rounded-lg transition-all ${res.read ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400 hover:bg-green-50'}`}
                    title={res.read ? 'Marked as Read' : 'Mark as Read'}
                  >
                    {res.read ? <BookmarkCheck size={18}/> : <Bookmark size={18}/>}
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1">{res.subject}</p>
              <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">{res.title}</h3>
              
              {/* Badges */}
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg">{res.chapter}</span>
                <span className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-blue-700 text-xs font-bold rounded-lg">{res.source}</span>
              </div>

              {/* Download Button */}
              <button className="w-full py-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-all">
                <Download size={16} />
                Download
              </button>
              
              {/* View in App Link */}
              <a href="#" className="mt-2 flex items-center justify-center gap-1 text-[10px] font-bold text-slate-400 hover:text-blue-600 transition-colors group">
                <span>View in app</span>
                <ExternalLink size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Recommended Reading */}
      <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-8 rounded-3xl border-2 border-pink-200 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl shadow-md">
            <BookOpen className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-xl">Recommended Reading</h3>
            <p className="text-sm text-slate-600">Curated for you based on your subjects</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recommended.map((rec, idx) => (
            <div 
              key={idx} 
              className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border-2 border-pink-100 hover:border-pink-300 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{rec.icon}</span>
                <div className="flex-1">
                  <p className="text-xs font-bold text-pink-600 uppercase">{rec.subject}</p>
                  <h4 className="font-bold text-slate-800 text-sm group-hover:text-pink-600 transition-colors">{rec.title}</h4>
                </div>
              </div>
              <button className="text-xs font-bold text-pink-600 flex items-center gap-1 hover:gap-2 transition-all">
                Read Now <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonResources;
