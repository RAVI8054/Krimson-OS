import React from 'react';
import { MANAGEMENT_DATA } from '../../../data/managementData';
import { Filter, Users, MapPin } from 'lucide-react';

const AdmissionsGrowth = () => {
  const { admissions } = MANAGEMENT_DATA;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 1. Admission Funnel */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
           <div className="flex justify-between items-center mb-6">
             <h3 className="font-bold text-slate-700 text-lg flex items-center gap-2"><Filter size={20} className="text-blue-500"/> Conversion Funnel</h3>
             <span className="text-xs font-bold bg-blue-50 text-blue-600 px-3 py-1 rounded-full">FY 2025-26</span>
           </div>
           
           <div className="flex flex-col items-center space-y-2">
             {/* Funnel Layers */}
             <div className="w-full bg-blue-100 py-4 rounded-xl text-center relative group">
               <span className="text-blue-900 font-bold">{admissions.funnel.inquiries} Inquiries</span>
               <div className="absolute top-0 right-0 h-full w-2 bg-blue-500 rounded-r-xl"></div>
             </div>
             <div className="w-[85%] bg-blue-200 py-4 rounded-xl text-center relative group">
               <span className="text-blue-900 font-bold">{admissions.funnel.verified} Verified</span>
               <div className="absolute top-0 right-0 h-full w-2 bg-blue-600 rounded-r-xl"></div>
             </div>
             <div className="w-[70%] bg-blue-300 py-4 rounded-xl text-center relative group">
               <span className="text-blue-900 font-bold">{admissions.funnel.tours} Campus Tours</span>
               <div className="absolute top-0 right-0 h-full w-2 bg-blue-700 rounded-r-xl"></div>
             </div>
             <div className="w-[50%] bg-green-400 py-4 rounded-xl text-center shadow-lg transform scale-105">
               <span className="text-white font-bold text-lg">{admissions.funnel.enrolled} Enrolled</span>
             </div>
           </div>
           <p className="text-center text-xs text-slate-400 mt-6">Conversion Rate: 24% (Target: 20%)</p>
        </div>

        {/* 2. Demographics & Capacity */}
        <div className="space-y-6">
           <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="font-bold text-slate-700 mb-6 flex items-center gap-2"><MapPin size={20} /> Demographics</h3>
              <div className="space-y-4">
                {admissions.demographics.map((demo, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600 font-medium">{demo.region}</span>
                      <span className="font-bold text-slate-800">{demo.val}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                      <div className={`h-full ${demo.color}`} style={{ width: `${demo.val}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
           </div>

           <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl p-8 text-white shadow-lg">
             <div className="flex justify-between items-start">
               <div>
                 <p className="text-indigo-200 font-bold text-xs uppercase">Capacity Utilization</p>
                 <h2 className="text-4xl font-extrabold mt-2">89%</h2>
                 <p className="text-sm text-indigo-100 mt-1">Seats Filled</p>
               </div>
               <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                 <Users size={24} />
               </div>
             </div>
             <div className="mt-6 pt-6 border-t border-white/20">
               <p className="text-xs font-semibold flex items-center gap-2">
                 Predictive Insight: <span className="bg-white/20 px-2 py-0.5 rounded">Full Capacity by Q3</span>
               </p>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default AdmissionsGrowth;
