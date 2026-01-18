import React from 'react';
import { MANAGEMENT_DATA } from '../../../data/managementData';
import { Users, GraduationCap, Calendar, DollarSign, TrendingUp, AlertTriangle } from 'lucide-react';

const KPICard = ({ title, value, subtext, icon, color, trend }) => {
  const Icon = icon;
  return (
  <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
    <div className={`absolute top-0 right-0 w-24 h-24 bg-${color}-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110`}></div>
    <div className="relative z-10 flex justify-between items-start mb-4">
      <div>
         <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider">{title}</h3>
         <h2 className="text-3xl font-extrabold text-slate-800 mt-2">{value}</h2>
      </div>
      <div className={`p-3 bg-${color}-50 text-${color}-500 rounded-2xl`}>
        <Icon size={24} />
      </div>
    </div>
    <div className="relative z-10 flex items-center gap-2">
      <span className={`text-xs font-bold px-2 py-1 rounded-full ${trend.includes('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
        {trend}
      </span>
      <span className="text-xs text-slate-400">{subtext}</span>
    </div>
  </div>
);
};

const InstitutionalOverview = () => {
  const { overview } = MANAGEMENT_DATA;

  return (
    <div className="space-y-8">
      {/* 1. High-Level KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard 
          title="Student Strength" 
          value={`${overview.studentStrength.current}`} 
          subtext={`Target: ${overview.studentStrength.target}`}
          icon={Users} 
          color="blue" 
          trend="+5.2%" 
        />
        <KPICard 
          title="Academic Index" 
          value={`${overview.academicIndex}%`} 
          subtext="Average Performance"
          icon={GraduationCap} 
          color="purple" 
          trend="+1.8%" 
        />
        <KPICard 
          title="Avg Attendance" 
          value={`${overview.avgAttendance}%`} 
          subtext="Term-to-Date"
          icon={Calendar} 
          color="green" 
          trend="-0.5%" 
        />
        <KPICard 
          title="Fee Efficiency" 
          value={`${overview.feeEfficiency}%`} 
          subtext="Collected vs Expected"
          icon={DollarSign} 
          color="teal" 
          trend="+2.4%" 
        />
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* 2. Real-Time Alerts */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-3xl p-8 shadow-sm">
           <div className="flex items-center justify-between mb-6">
             <h3 className="text-xl font-bold text-slate-800">Executive Alerts</h3>
             <span className="animate-pulse w-3 h-3 bg-red-500 rounded-full"></span>
           </div>
           <div className="space-y-4">
             {overview.alerts.map((alert, i) => (
               <div key={i} className={`p-4 rounded-2xl border-l-4 flex items-center gap-4 ${
                 alert.type === 'critical' ? 'bg-red-50 border-red-500 text-red-800' : 'bg-amber-50 border-amber-500 text-amber-800'
               }`}>
                 <AlertTriangle size={20} />
                 <div>
                   <p className="font-bold text-sm">{alert.type === 'critical' ? 'Critical Action Required' : 'Attention Needed'}</p>
                   <p className="text-sm opacity-90">{alert.msg}</p>
                 </div>
                 <button className="ml-auto text-xs font-bold bg-white/50 px-3 py-1.5 rounded-lg hover:bg-white/80 transition-colors">
                   Review
                 </button>
               </div>
             ))}
             {/* Safe state example */}
             <div className="p-4 rounded-2xl border-l-4 border-green-500 bg-green-50 text-green-800 flex items-center gap-4">
                <TrendingUp size={20} />
                <div>
                   <p className="font-bold text-sm">Operationally Stable</p>
                   <p className="text-sm opacity-90">Transport and Canteen modules running within budget.</p>
                </div>
             </div>
           </div>
        </div>

        {/* 3. Quick Faculty Stats */}
        <div className="col-span-12 lg:col-span-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 text-white shadow-lg">
           <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
             <Users size={20} className="text-blue-400" /> Human Capital
           </h3>
           <div className="space-y-6">
             <div>
               <div className="flex justify-between mb-2">
                 <span className="text-sm text-slate-400">Faculty Strength</span>
                 <span className="font-bold">{overview.facultyStrength}</span>
               </div>
               <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                 <div className="bg-blue-400 h-full w-full" style={{ width: '95%' }}></div>
               </div>
             </div>
             <div>
               <div className="flex justify-between mb-2">
                 <span className="text-sm text-slate-400">Retention Rate</span>
                 <span className="font-bold text-green-400">{overview.retentionRate}%</span>
               </div>
               <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                 <div className="bg-green-400 h-full w-full" style={{ width: `${overview.retentionRate}%` }}></div>
               </div>
             </div>
             <button className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-semibold transition-colors mt-4">
               View HR Dashboard
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutionalOverview;
