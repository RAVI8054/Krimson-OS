import React from 'react';
import { MANAGEMENT_DATA } from '../../../data/managementData';
import { Target, Lightbulb, ArrowRight } from 'lucide-react';

const StrategicPlanning = () => {
  const { strategy } = MANAGEMENT_DATA;

  return (
    <div className="space-y-8">
      {/* Vision Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-10 text-white shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-2">Vision 2028 Alignment</h2>
          <p className="opacity-90 max-w-2xl">Ensuring measurable progress towards becoming a Tier-1 EduTrust certified institution in Singapore.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* KPI Targets */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2"><Target className="text-red-500"/> Annual Targets</h3>
          <div className="space-y-8">
             {strategy.targets.map((t, i) => (
               <div key={i}>
                 <div className="flex justify-between mb-2">
                   <span className="font-bold text-slate-700">{t.goal}</span>
                   <span className="text-sm font-semibold text-slate-500">{t.actual} / {t.target}</span>
                 </div>
                 <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden">
                   <div className="bg-red-500 h-full rounded-full" style={{ width: `${(t.actual / t.target) * 100}%` }}></div>
                 </div>
               </div>
             ))}
             {/* Mock 3rd target */}
             <div>
                 <div className="flex justify-between mb-2">
                   <span className="font-bold text-slate-700">Campus Expansion Fund</span>
                   <span className="text-sm font-semibold text-slate-500">60% Funded</span>
                 </div>
                 <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden">
                   <div className="bg-red-500 h-full rounded-full" style={{ width: '60%' }}></div>
                 </div>
             </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-blue-100">
           <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2"><Lightbulb className="text-yellow-500"/> AI Strategic Insights</h3>
           <div className="space-y-4">
             {strategy.insights.map((insight, i) => (
               <div key={i} className="p-4 bg-blue-50/50 rounded-2xl flex gap-4 items-start">
                 <div className="min-w-[4px] h-full bg-blue-400 rounded-full"></div>
                 <p className="text-slate-700 text-sm font-medium leading-relaxed">{insight}</p>
               </div>
             ))}
             <button className="w-full py-3 mt-4 text-blue-600 font-bold text-sm bg-blue-50 rounded-xl hover:bg-blue-100 flex items-center justify-center gap-2">
               Generate Full Report <ArrowRight size={16}/>
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicPlanning;
