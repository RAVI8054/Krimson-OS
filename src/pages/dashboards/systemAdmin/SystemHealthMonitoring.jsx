import React from 'react';
import { SYSTEM_ADMIN_DATA } from '../../../data/systemAdminData';
import { Activity, Server, Cpu, Wifi, AlertTriangle, CheckCircle } from 'lucide-react';

const SystemHealthMonitoring = () => {
  const { health } = SYSTEM_ADMIN_DATA;

  const StatCard = ({ title, value, icon: Icon, color, subtext }) => (
    <div className="bg-white p-6 rounded-3xl shadow-sm border-b-4 relative overflow-hidden group" style={{ borderColor: color }}>
      <div className="flex justify-between items-start relative z-10">
        <div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">{title}</p>
          <h3 className="text-3xl font-extrabold text-slate-800 mt-2">{value}</h3>
          <p className="text-xs text-slate-400 mt-2">{subtext}</p>
        </div>
        <div className="p-3 rounded-2xl bg-slate-50 text-slate-500 group-hover:bg-slate-100 transition-colors">
          <Icon size={24} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* 1. Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="System Uptime" value={health.uptime} icon={Server} color="#10b981" subtext="Last 30 days" />
        <StatCard title="CPU Usage" value={`${health.cpuUsage}%`} icon={Cpu} color="#3b82f6" subtext="4 Cores Active" />
        <StatCard title="Memory Usage" value={`${health.memoryUsage}%`} icon={Activity} color="#f59e0b" subtext="16GB / 24GB Used" />
        <StatCard title="Active Sessions" value={health.activeSessions} icon={Wifi} color="#8b5cf6" subtext="Concurrent Users" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 2. Real-time Alerts */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
            <AlertTriangle className="text-red-500" /> System Alerts & Notifications
          </h3>
          <div className="space-y-4">
             {health.alerts.map((alert) => (
               <div key={alert.id} className={`p-4 rounded-xl border flex items-center justify-between ${alert.type === 'error' ? 'bg-red-50 border-red-100' : 'bg-orange-50 border-orange-100'}`}>
                 <div className="flex items-center gap-3">
                   <span className={`w-2 h-2 rounded-full ${alert.type === 'error' ? 'bg-red-500' : 'bg-orange-500'}`}></span>
                   <div>
                     <p className={`text-sm font-bold ${alert.type === 'error' ? 'text-red-700' : 'text-orange-700'}`}>{alert.msg}</p>
                     <p className="text-xs text-slate-400">{alert.time}</p>
                   </div>
                 </div>
                 <button className="text-xs font-bold px-3 py-1 bg-white rounded-lg shadow-sm text-slate-500 hover:text-slate-800">Resolve</button>
               </div>
             ))}
             {health.alerts.length === 0 && (
               <div className="p-8 text-center text-slate-400">
                 <CheckCircle className="mx-auto mb-2 text-green-400" size={32} />
                 <p>All systems operational. No active alerts.</p>
               </div>
             )}
          </div>
        </div>

        {/* 3. API Response Heatmap Mock */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-2">API Latency</h3>
          <p className="text-xs text-slate-400 mb-6">Average Response Time: <span className="font-bold text-slate-800">{health.apiResponseTime}ms</span></p>
          
          <div className="grid grid-cols-5 gap-2">
            {[...Array(25)].map((_, i) => {
               // Mock heatmap colors based on random latency
               const latency = Math.random() * 200 + 50; 
               let bgClass = "bg-green-400";
               if (latency > 150) bgClass = "bg-yellow-400";
               if (latency > 220) bgClass = "bg-red-400";
               
               return (
                 <div key={i} className={`h-8 rounded-md ${bgClass} opacity-80 hover:opacity-100 transition-opacity cursor-pointer`} title={`Latency: ${Math.floor(latency)}ms`}></div>
               );
            })}
          </div>
          <div className="flex justify-between mt-4 text-xs text-slate-400">
            <span className="flex items-center gap-1"><div className="w-2 h-2 bg-green-400 rounded-full"></div> &lt;150ms</span>
            <span className="flex items-center gap-1"><div className="w-2 h-2 bg-yellow-400 rounded-full"></div> 150-220ms</span>
            <span className="flex items-center gap-1"><div className="w-2 h-2 bg-red-400 rounded-full"></div> &gt;220ms</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemHealthMonitoring;
