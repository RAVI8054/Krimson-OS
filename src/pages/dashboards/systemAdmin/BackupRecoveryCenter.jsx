import React from 'react';
import { SYSTEM_ADMIN_DATA } from '../../../data/systemAdminData';
import { Database, Cloud, RefreshCw, CheckCircle } from 'lucide-react';

const BackupRecoveryCenter = () => {
  const { backups } = SYSTEM_ADMIN_DATA;

  return (
    <div className="space-y-8">
      {/* Backup Status Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl shadow-sm border-l-4 border-blue-500">
           <p className="text-xs font-bold text-slate-400 uppercase">Last Backup</p>
           <h3 className="text-lg font-bold text-slate-800 mt-1">{backups.lastBackup}</h3>
           <p className="text-xs text-green-500 flex items-center gap-1 mt-2"><CheckCircle size={12}/> Successful</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border-l-4 border-purple-500">
           <p className="text-xs font-bold text-slate-400 uppercase">Next Scheduled</p>
           <h3 className="text-lg font-bold text-slate-800 mt-1">{backups.nextBackup}</h3>
           <p className="text-xs text-purple-500 mt-2">Automated Daily Cycle</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border-l-4 border-green-500">
           <p className="text-xs font-bold text-slate-400 uppercase">Data Integrity</p>
           <h3 className="text-lg font-bold text-slate-800 mt-1">{backups.integrityScore}</h3>
           <p className="text-xs text-slate-400 mt-2">Verified via Checksum</p>
        </div>
      </div>

      {/* Main Action Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         
         {/* Backup History Table */}
         <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Database className="text-blue-500"/> Restore Points
            </h3>
            <div className="space-y-4">
              {backups.history.map((backup) => (
                <div key={backup.id} className="p-4 border border-slate-100 rounded-2xl flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div>
                    <p className="font-bold text-slate-700 text-sm">{backup.id}</p>
                    <p className="text-xs text-slate-400">{backup.type} • {backup.size} • {backup.location}</p>
                  </div>
                  <button className="px-4 py-2 bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-slate-900 flex items-center gap-2">
                    <RefreshCw size={12} /> Restore
                  </button>
                </div>
              ))}
            </div>
         </div>

         {/* Manual Actions */}
         <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 text-white shadow-lg">
               <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Cloud size={20}/> Cloud Backup Config</h3>
               <p className="text-indigo-100 text-sm mb-6">Current Target: AWS S3 (ap-southeast-1). Encryption: AES-256.</p>
               <button className="w-full py-3 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
                 Trigger Manual Backup
               </button>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-2">Disaster Recovery</h3>
              <p className="text-xs text-slate-500 mb-4">Rollback system to previous stable state. This action is logged.</p>
              <button className="w-full py-3 border border-red-200 text-red-600 rounded-xl font-bold hover:bg-red-50 transition-colors">
                 Initiate Emergency Rollback
              </button>
            </div>
         </div>

      </div>
    </div>
  );
};

export default BackupRecoveryCenter;
