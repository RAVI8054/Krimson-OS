import React from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { Database, Cloud, RefreshCw, CheckCircle, Lock } from 'lucide-react';

const BackupSettings = () => {
  const { backups } = ADMIN_DATA;

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-3xl p-8 text-white shadow-xl flex items-center justify-between">
         <div>
            <h2 className="text-2xl font-bold flex items-center gap-3"><Database className="text-blue-400"/> Data Recovery Center</h2>
            <p className="text-slate-400 text-sm mt-1 flex items-center gap-1"><Lock size={12}/> AES-256 Encrypted Backups</p>
         </div>
         <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl flex items-center gap-2 transition-colors">
            <RefreshCw size={18} className="animate-spin-slow"/> Trigger Manual Backup
         </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center gap-2"><Cloud size={20} className="text-blue-500"/> Cloud Backup History</h3>
            <div className="space-y-4">
               {backups.map((bk, i) => (
                  <div key={i} className="flex justify-between items-center p-4 border border-slate-100 rounded-xl">
                     <div>
                        <p className="font-bold text-slate-700 text-sm">{bk.date}</p>
                        <p className="text-xs text-slate-500">Size: {bk.size}</p>
                     </div>
                     <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <CheckCircle size={12}/> {bk.status}
                     </span>
                  </div>
               ))}
            </div>
         </div>

         <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-lg text-slate-800 mb-6">Backup Schedule</h3>
            <div className="space-y-4">
               <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                   <div className="text-sm font-bold text-slate-700">Daily Incremental</div>
                   <div className="w-12 h-6 bg-green-500 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div></div>
               </div>
               <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                   <div className="text-sm font-bold text-slate-700">Weekly Full Backup</div>
                   <div className="w-12 h-6 bg-green-500 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div></div>
               </div>
               <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                   <div className="text-sm font-bold text-slate-700">Mirror to Secondary Server</div>
                   <div className="w-12 h-6 bg-slate-300 rounded-full relative cursor-pointer"><div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div></div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default BackupSettings;
