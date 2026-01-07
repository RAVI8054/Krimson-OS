import React from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { Server, Monitor, AlertTriangle } from 'lucide-react';

const Infrastructure = () => {
  const { infrastructure } = ADMIN_DATA;

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-slate-800">Infrastructure & Asset Management</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {infrastructure.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between h-48">
               <div className="flex justify-between items-start">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                     {item.item === 'Laptops' ? <Monitor size={24}/> : <Server size={24}/>}
                  </div>
                  <span className="text-3xl font-bold text-slate-800">{item.total}</span>
               </div>
               
               <div>
                  <h3 className="font-bold text-slate-700 text-lg mb-4">{item.item}</h3>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-2">
                     <div className="bg-green-500 h-full rounded-full" style={{ width: `${(item.inUse / item.total) * 100}%` }}></div>
                  </div>
                  <div className="flex justify-between text-xs font-bold text-slate-500">
                     <span>In Use: {item.inUse}</span>
                     <span className="text-orange-500">Maintenance: {item.maintenance}</span>
                  </div>
               </div>
            </div>
         ))}

         {/* Maintenance Alert */}
         <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100 flex flex-col justify-center items-center text-center">
            <AlertTriangle className="text-orange-500 mb-2" size={32}/>
            <h3 className="font-bold text-orange-800">Scheduled Maintenance</h3>
            <p className="text-xs text-orange-700 mt-1">Server Room B AC unit requires servicing.</p>
            <button className="mt-4 px-4 py-2 bg-white text-orange-600 text-xs font-bold rounded-lg hover:bg-orange-100">Log Ticket</button>
         </div>
      </div>
    </div>
  );
};

export default Infrastructure;
