import React from 'react';
import { SYSTEM_ADMIN_DATA } from '../../../data/systemAdminData';
import { FileText, Download, GitCommit, AlertCircle } from 'lucide-react';

const AuditMaintenanceLog = () => {
  const { logs } = SYSTEM_ADMIN_DATA;

  return (
    <div className="space-y-8">
      {/* Version Header */}
      <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm">
        <div className="flex items-center gap-4">
          <div className="bg-blue-50 p-3 rounded-full text-blue-600">
            <GitCommit size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-800">Current System Version</h3>
            <p className="text-slate-500 text-sm">{logs.version}</p>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-900">
          <Download size={16} /> Export Audit Report
        </button>
      </div>

      {/* Audit Log Table */}
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
          <FileText className="text-orange-500"/> System Activity Log
        </h3>
        
        <div className="overflow-hidden rounded-2xl border border-slate-100">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase">Log ID</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase">Action</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase">User / Initiator</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase">Date</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {logs.maintenance.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50/50">
                  <td className="p-4 font-mono text-xs text-slate-500">{log.id}</td>
                  <td className="p-4 font-bold text-slate-700">{log.action}</td>
                  <td className="p-4 text-sm text-slate-600">{log.user}</td>
                  <td className="p-4 text-xs text-slate-400">{log.date}</td>
                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold flex items-center gap-1 w-fit">
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
              {/* Mock Incident Example */}
              <tr className="bg-red-50/30">
                <td className="p-4 font-mono text-xs text-red-500">INC-990</td>
                <td className="p-4 font-bold text-red-700 flex items-center gap-2"><AlertCircle size={14}/> Failed Login Attempt (5x)</td>
                <td className="p-4 text-sm text-red-600">IP: 192.168.1.105</td>
                <td className="p-4 text-xs text-red-400">2026-01-02</td>
                <td className="p-4">
                   <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">Flagged</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AuditMaintenanceLog;
