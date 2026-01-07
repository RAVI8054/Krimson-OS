import React from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { BarChart2, TrendingUp, Users, DollarSign } from 'lucide-react';

const AnalyticsCenter = () => {
  const { analytics } = ADMIN_DATA;

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-slate-800">Analytics & Insights Engine</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         <div className="bg-white p-6 rounded-3xl shadow-sm">
            <h3 className="text-sm text-slate-500 font-bold uppercase mb-2">Admissions Conversion</h3>
            <div className="flex items-end gap-2">
               <span className="text-4xl font-extrabold text-blue-600">{analytics.conversionRate}%</span>
               <TrendingUp className="text-green-500 mb-1" size={20}/>
            </div>
         </div>
         <div className="bg-white p-6 rounded-3xl shadow-sm">
            <h3 className="text-sm text-slate-500 font-bold uppercase mb-2">Staff Utilization</h3>
            <div className="flex items-end gap-2">
               <span className="text-4xl font-extrabold text-purple-600">{analytics.staffUtilization}%</span>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-80 flex flex-col justify-center items-center">
             <BarChart2 size={64} className="text-slate-200 mb-4"/>
             <p className="font-bold text-slate-400">Enrollment Growth Chart Placeholder</p>
         </div>
         <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 h-80 flex flex-col justify-center items-center">
             <DollarSign size={64} className="text-slate-200 mb-4"/>
             <p className="font-bold text-slate-400">Revenue Stream Analysis Placeholder</p>
         </div>
      </div>
    </div>
  );
};

export default AnalyticsCenter;
