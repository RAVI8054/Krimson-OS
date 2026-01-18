import React from 'react';
import { Activity, Database, Calendar } from 'lucide-react';
import ConnectedAppsScanner from '../../../components/common/ConnectedAppsScanner';

const StatCard = ({ icon, value, label, color, bg }) => {
    const Icon = icon;
    return (
    <div className="bg-white/80 backdrop-blur-lg rounded-[2rem] p-6 shadow-sm border border-white/50 flex flex-col justify-between h-full min-h-[160px]">
        <div className="flex justify-between items-start">
            <div className={`p-3 rounded-2xl ${bg}`}><Icon className={`h-6 w-6 ${color}`} /></div>
        </div>
        <div className="mt-4"><h3 className="text-3xl font-bold text-slate-800">{value}</h3><p className="text-slate-500 font-medium">{label}</p></div>
    </div>
);
};

const CoordinatorDashboard = () => {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
             <div className="bg-gradient-to-r from-cyan-300 via-blue-300 to-pink-300 rounded-[2.5rem] p-8 text-slate-900 relative overflow-hidden shadow-xl shadow-blue-900/5 mb-8 border border-white/50">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/30 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="relative z-10 max-w-2xl">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/40 border border-white/50 text-xs font-bold tracking-wide mb-6 text-slate-800 backdrop-blur-md">Singapore Campus</span>
                  <h1 className="text-4xl font-bold mb-4 text-slate-900">Academic Coordinator Dashboard</h1>
                  <p className="text-slate-800 text-lg font-medium opacity-90">Welcome, Academic Coordinator. Here is your consolidated daily summary.</p>
                </div>
              </div>
              <div className="mb-2"><h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 ml-2">Connected Applications</h3><ConnectedAppsScanner variant="grid" /></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard icon={Activity} value="Synced" label="Data Integrity" color="text-emerald-600" bg="bg-emerald-50" />
                <StatCard icon={Database} value="7 Apps" label="Connected Sources" color="text-blue-600" bg="bg-blue-50" />
                <StatCard icon={Calendar} value={new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} label="Singapore Time" color="text-purple-600" bg="bg-purple-50" />
             </div>
        </div>
    );
};

export default CoordinatorDashboard;
