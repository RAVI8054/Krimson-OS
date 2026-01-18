/**
 * @component Infrastructure
 * @description IT Infrastructure and Asset Management Dashboard
 */
import React from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { 
  Server, 
  Monitor, 
  AlertTriangle, 
  Cpu, 
  Wifi, 
  HardDrive,
  Activity,
  Zap,
  CheckCircle,
  MoreVertical
} from 'lucide-react';

const Infrastructure = () => {
  const { infrastructure } = ADMIN_DATA;

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      
      {/* ========================================
          HEADER SECTION WITH GRADIENT THEME
          ======================================== */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                  IT & Assets
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                   <Zap size={12} className="text-yellow-300" />
                   System Optimal
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Infrastructure
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Monitor hardware assets, network status, and scheduled maintenance.
              </p>
            </div>
            
            <div className="flex gap-4">
               {/* Quick Status Pills */}
               <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-lg text-green-300">
                     <Wifi size={20} />
                  </div>
                  <div>
                     <p className="text-xs text-white/70 uppercase font-bold">Network</p>
                     <p className="text-sm font-bold text-white">Online (1Gbps)</p>
                  </div>
               </div>
               
               <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-300">
                     <Cpu size={20} />
                  </div>
                  <div>
                     <p className="text-xs text-white/70 uppercase font-bold">Server Load</p>
                     <p className="text-sm font-bold text-white">34% <span className="text-white/50 fontsize-xs">Avg</span></p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {infrastructure.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between h-56 hover:shadow-xl hover:border-blue-100 transition-all group relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform duration-500">
                  {item.item === 'Laptops' ? <Monitor size={80} /> : <Server size={80}/>}
               </div>

               <div className="flex justify-between items-start relative z-10">
                  <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 rounded-2xl shadow-sm border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                     {item.item === 'Laptops' ? <Monitor size={24}/> : <Server size={24}/>}
                  </div>
                  <button className="text-slate-300 hover:text-blue-600 transition-colors">
                     <MoreVertical size={20} />
                  </button>
               </div>
               
               <div className="relative z-10">
                  <div className="flex items-end gap-2 mb-1">
                     <span className="text-4xl font-extrabold text-slate-800 tracking-tight">{item.total}</span>
                     <span className="text-sm text-slate-500 font-bold mb-1.5 uppercase tracking-wide">{item.item}</span>
                  </div>
                  
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mb-3">
                     <div 
                        className={`h-full rounded-full transition-all duration-1000 ${
                           (item.inUse / item.total) > 0.9 ? 'bg-red-500' : 'bg-gradient-to-r from-blue-400 to-indigo-500'
                        }`} 
                        style={{ width: `${(item.inUse / item.total) * 100}%` }}
                     ></div>
                  </div>
                  
                  <div className="flex justify-between text-xs font-bold text-slate-500">
                     <span className="flex items-center gap-1 text-slate-700">
                        <CheckCircle size={12} className="text-green-500"/> In Use: {item.inUse}
                     </span>
                     <span className={`flex items-center gap-1 ${item.maintenance > 0 ? 'text-orange-500' : 'text-slate-400'}`}>
                        <AlertTriangle size={12} /> Maintenance: {item.maintenance}
                     </span>
                  </div>
               </div>
            </div>
         ))}

         {/* Maintenance Alert Card */}
         <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-3xl border border-orange-200 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:shadow-lg transition-all">
            <div className="absolute inset-0 bg-white/40"></div>
            <div className="relative z-10 flex flex-col items-center">
               <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4 shadow-sm animate-pulse">
                  <Activity size={32}/>
               </div>
               <h3 className="font-bold text-lg text-orange-900 mb-1">Scheduled Maintenance</h3>
               <p className="text-sm text-orange-800/80 mb-4 px-2">
                  Server Room B AC unit requires servicing on <span className="font-bold">Oct 15th</span>.
               </p>
               <button className="px-5 py-2.5 bg-white text-orange-700 text-sm font-bold rounded-xl hover:bg-orange-100 transition-colors shadow-sm border border-orange-100">
                  View Service Ticket
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Infrastructure;
