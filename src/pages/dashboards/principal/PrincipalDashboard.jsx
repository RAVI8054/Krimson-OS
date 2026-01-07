import React from 'react';
import { Users, CheckCircle, TrendingUp, AlertCircle } from 'lucide-react';

const StatCard = ({ title, value, subtext, icon, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <h3 className="text-2xl font-bold text-slate-800 mt-1">{value}</h3>
        {subtext && <p className={`text-xs mt-2 ${subtext.includes('+') ? 'text-green-500' : 'text-slate-400'}`}>{subtext}</p>}
      </div>
      <div className={`p-3 rounded-lg ${color} text-white`}>
        {icon}
      </div>
    </div>
  </div>
);

const PrincipalDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-cyan-300 via-blue-300 to-pink-300 rounded-[2.5rem] p-8 text-slate-900 relative overflow-hidden shadow-xl shadow-blue-900/5 mb-8 border border-white/50">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/30 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">School Overview</h1>
          <p className="text-slate-800 font-medium opacity-90">Real-time school operations snapshot</p>
        </div>
      </div>

      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Students" 
          value="1,248" 
          subtext="+12 this month" 
          icon={<Users size={24} />} 
          color="bg-blue-500" 
        />
        <StatCard 
          title="Teachers Present" 
          value="96%" 
          subtext="4 absent today" 
          icon={<CheckCircle size={24} />} 
          color="bg-green-500" 
        />
        <StatCard 
          title="Avg Attendance" 
          value="92.4%" 
          subtext="Trending up" 
          icon={<TrendingUp size={24} />} 
          color="bg-purple-500" 
        />
        <StatCard 
          title="Fee Collection" 
          value="85%" 
          subtext="15% overdue" 
          icon={<AlertCircle size={24} />} 
          color="bg-orange-500" 
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Academic Progress */}
        <div className="col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-lg text-slate-800 mb-4">Academic Progress Index</h3>
          <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 bg-center bg-cover border-2 border-dashed border-slate-200">
            <span className="bg-white/80 p-2 rounded px-4 backdrop-blur">Chart Visualization Placeholder</span>
          </div>
        </div>

        {/* Quick Alerts */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-lg text-slate-800 mb-4">Quick Alerts</h3>
          <div className="space-y-4">
            <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded-r text-sm">
              <span className="font-bold text-red-700">Attendance Alert:</span>
              <p className="text-slate-600">3 classes currently unmarked for today.</p>
            </div>
            <div className="p-3 bg-orange-50 border-l-4 border-orange-500 rounded-r text-sm">
              <span className="font-bold text-orange-700">Finance:</span>
              <p className="text-slate-600">2 significant fee anomalies detected in Grade 10.</p>
            </div>
            <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r text-sm">
              <span className="font-bold text-blue-700">System:</span>
              <p className="text-slate-600">Report generation scheduled for 4 PM.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalDashboard;
