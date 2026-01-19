/**
 * @component AnalyticsCenter
 * @description Advanced school analytics and data visualization dashboard
 */
import React from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { 
  BarChart2, 
  TrendingUp, 
  Users, 
  DollarSign, 
  PieChart, 
  Activity, 
  ArrowUpRight,
  Calendar,
  Download,
  MoreHorizontal
} from 'lucide-react';

const AnalyticsCenter = () => {
  const { analytics } = ADMIN_DATA;

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      
      {/* ========================================
          HEADER SECTION WITH GRADIENT THEME
          ======================================== */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        
        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                  Business Intelligence
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Analytics Center
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Deep dive into institutional performance, financial trends, and enrollment metrics.
              </p>
            </div>
            
            <div className="flex gap-3">
               <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl font-bold border border-white/20 transition-all">
                  <Calendar size={18} />
                  <span>This Month</span>
               </button>
               <button className="flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all">
                  <Download size={18} />
                  <span>Report</span>
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          KEY METRICS CARDS
          ======================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {/* Conversion Rate */}
         <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all group">
            <div className="flex justify-between items-start mb-4">
               <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform">
                  <TrendingUp size={24} />
               </div>
               <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                  <ArrowUpRight size={12} /> +4.2%
               </span>
            </div>
            <div>
               <h3 className="text-3xl font-extrabold text-slate-800 mb-1">{analytics.conversionRate}%</h3>
               <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Admissions Conv.</p>
            </div>
         </div>

         {/* Staff Utilization */}
         <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all group">
            <div className="flex justify-between items-start mb-4">
               <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl group-hover:scale-110 transition-transform">
                  <Activity size={24} />
               </div>
               <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                  <ArrowUpRight size={12} /> +1.8%
               </span>
            </div>
            <div>
               <h3 className="text-3xl font-extrabold text-slate-800 mb-1">{analytics.staffUtilization}%</h3>
               <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Staff Utilization</p>
            </div>
         </div>

         {/* Retention (Mock) */}
         <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all group">
            <div className="flex justify-between items-start mb-4">
               <div className="p-3 bg-cyan-50 text-cyan-600 rounded-2xl group-hover:scale-110 transition-transform">
                  <Users size={24} />
               </div>
               <span className="flex items-center gap-1 text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-lg">
                  Stable
               </span>
            </div>
            <div>
               <h3 className="text-3xl font-extrabold text-slate-800 mb-1">98.5%</h3>
               <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Student Retention</p>
            </div>
         </div>

         {/* Revenue (Mock) */}
         <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all group">
            <div className="flex justify-between items-start mb-4">
               <div className="p-3 bg-green-50 text-green-600 rounded-2xl group-hover:scale-110 transition-transform">
                  <DollarSign size={24} />
               </div>
               <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                  <ArrowUpRight size={12} /> +12%
               </span>
            </div>
            <div>
               <h3 className="text-3xl font-extrabold text-slate-800 mb-1">2.4M</h3>
               <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Monthly Revenue</p>
            </div>
         </div>
      </div>

      {/* ========================================
          CHARTS SECTION
          ======================================== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {/* Enrollment Growth */}
         <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 min-h-[400px] flex flex-col relative overflow-hidden group">
            <div className="flex justify-between items-center mb-8 relative z-10">
               <div>
                  <h3 className="text-xl font-bold text-slate-800">Enrollment Growth</h3>
                  <p className="text-sm text-slate-500">Year-over-year comparison</p>
               </div>
               <button className="p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors">
                  <MoreHorizontal size={20} />
               </button>
            </div>
            
            {/* Placeholder Visualization */}
            <div className="flex-1 border-2 border-dashed border-slate-100 rounded-2xl bg-slate-50/50 flex flex-col justify-center items-center relative group-hover:border-blue-200 transition-colors">
               <div className="p-4 bg-white rounded-full shadow-sm mb-4 animate-pulse">
                  <BarChart2 size={32} className="text-blue-500"/>
               </div>
               <p className="font-bold text-slate-400">Enrollment Growth Chart</p>
               <p className="text-xs text-slate-400 mt-1">Visualization Component Loading...</p>
               
               {/* Background Grid Decoration */}
               <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
            </div>
         </div>

         {/* Revenue Stream */}
         <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 min-h-[400px] flex flex-col relative overflow-hidden group">
            <div className="flex justify-between items-center mb-8 relative z-10">
               <div>
                  <h3 className="text-xl font-bold text-slate-800">Revenue Split</h3>
                  <p className="text-sm text-slate-500">By source</p>
               </div>
               <button className="p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors">
                  <MoreHorizontal size={20} />
               </button>
            </div>

             {/* Placeholder Visualization */}
             <div className="flex-1 border-2 border-dashed border-slate-100 rounded-2xl bg-slate-50/50 flex flex-col justify-center items-center relative group-hover:border-green-200 transition-colors">
               <div className="p-4 bg-white rounded-full shadow-sm mb-4 animate-pulse">
                  <PieChart size={32} className="text-green-500"/>
               </div>
               <p className="font-bold text-slate-400">Revenue Analysis</p>
               <p className="text-xs text-slate-400 mt-1">Visualization Component Loading...</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default AnalyticsCenter;
