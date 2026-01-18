/**
 * @component BackupSettings
 * @description Data recovery and system backup configuration center
 */
import React from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { 
  Database, 
  Cloud, 
  RefreshCw, 
  CheckCircle, 
  Lock, 
  HardDrive, 
  Clock,
  Server,
  DownloadCloud,
  Settings
} from 'lucide-react';

const BackupSettings = () => {
  const { backups } = ADMIN_DATA;

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
                  System Reliability
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                   <Lock size={12} className="text-green-400" />
                   AES-256 Encrypted
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Data Recovery Center
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Manage automated backups, disaster recovery snapshots, and cloud redundancy.
              </p>
            </div>
            
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 group">
               <RefreshCw size={20} className="group-hover:animate-spin" />
               <span>Trigger Manual Backup</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         
         {/* ========================================
             CLOUD BACKUP HISTORY
             ======================================== */}
         <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
               <h3 className="font-bold text-lg text-slate-800 flex items-center gap-3">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                     <Cloud size={20} />
                  </div>
                  Cloud Backup History
               </h3>
               <button className="p-2 text-slate-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  <DownloadCloud size={20} />
               </button>
            </div>
            
            <div className="p-6 space-y-4 flex-1">
               {backups.map((bk, i) => (
                  <div key={i} className="flex justify-between items-center p-4 border border-slate-100 rounded-2xl hover:border-blue-100 hover:shadow-md transition-all group max-w-full">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                           <Database size={18} />
                        </div>
                        <div>
                           <p className="font-bold text-slate-700 text-sm">{bk.date}</p>
                           <p className="text-xs text-slate-500 flex items-center gap-1">
                              <HardDrive size={10} /> Size: {bk.size}
                           </p>
                        </div>
                     </div>
                     <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-green-100">
                        <CheckCircle size={12}/> {bk.status}
                     </span>
                  </div>
               ))}
               
               <div className="mt-4 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="flex items-start gap-3">
                     <Server className="text-blue-500 mt-1" size={20} />
                     <div>
                        <p className="text-sm font-bold text-blue-800">Storage Usage</p>
                        <p className="text-xs text-blue-600 mb-2">450GB of 1TB used (45%)</p>
                        <div className="w-full bg-blue-200 rounded-full h-1.5">
                           <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '45%' }} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* ========================================
             BACKUP CONFIGURATION
             ======================================== */}
         <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
               <h3 className="font-bold text-lg text-slate-800 flex items-center gap-3">
                  <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                     <Settings size={20} />
                  </div>
                  Backup Schedule
               </h3>
            </div>
            
            <div className="p-6 space-y-4">
               {[
                  { label: "Daily Incremental Snapshot", time: "02:00 AM", active: true },
                  { label: "Weekly Full Backup", time: "Sunday, 00:00 AM", active: true },
                  { label: "Mirror to Disaster Recovery Site", time: "Real-time", active: false }
               ].map((setting, idx) => (
                  <div key={idx} className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
                      <div>
                         <div className="text-sm font-bold text-slate-700">{setting.label}</div>
                         <div className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                            <Clock size={12} /> excutes at {setting.time}
                         </div>
                      </div>
                      <div className={`
                         w-12 h-6 rounded-full relative cursor-pointer transition-colors duration-300
                         ${setting.active ? 'bg-green-500' : 'bg-slate-300'}
                      `}>
                         <div className={`
                            absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300
                            ${setting.active ? 'left-7' : 'left-1'}
                         `} />
                      </div>
                  </div>
               ))}

               <div className="p-4 rounded-xl border border-dashed border-slate-300 text-center cursor-pointer hover:bg-slate-50 transition-colors mt-4">
                  <p className="text-sm font-bold text-slate-500">+ Add New Schedule</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default BackupSettings;
