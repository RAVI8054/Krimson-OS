import React from 'react';
import { ShieldCheck, Upload, FileText } from 'lucide-react';
import { FINANCE_DATA } from '../../../data/financeData';

const AuditComplianceCenter = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-teal-500 to-green-500 rounded-3xl p-8 text-white shadow-lg">
        <div className="flex justify-between items-start">
           <div>
             <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><ShieldCheck /> SSG Audit Readiness</h2>
             <p className="opacity-90">Current Status: <span className="font-bold bg-white/20 px-2 py-0.5 rounded">Compliant</span></p>
           </div>
           <button className="bg-white text-teal-600 px-6 py-2 rounded-xl font-bold text-sm">Generate Certificate</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Document Repository */}
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <h3 className="font-bold text-slate-800 mb-4">Regulatory Documents (PEI Format)</h3>
          <div className="space-y-3">
            {['Bank Reconciliation (Dec)', 'SSG Ledger Export', 'Fee Protection Scheme (FPS) Log'].map((doc, i) => (
              <div key={i} className="flex justify-between items-center p-3 border border-slate-100 rounded-xl">
                 <div className="flex items-center gap-3">
                   <FileText size={18} className="text-slate-400" />
                   <span className="text-sm font-semibold text-slate-700">{doc}</span>
                 </div>
                 <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">Verified</span>
              </div>
            ))}
            <button className="w-full mt-4 border border-dashed border-slate-300 py-3 rounded-xl text-slate-500 text-sm flex justify-center items-center gap-2 hover:bg-slate-50">
              <Upload size={16} /> Upload Supporting Document
            </button>
          </div>
        </div>

        {/* Audit Log */}
        <div className="bg-white p-6 rounded-3xl shadow-sm">
           <h3 className="font-bold text-slate-800 mb-4">System Audit Trail</h3>
           <div className="space-y-4">
             {FINANCE_DATA.auditLog.map((log) => (
               <div key={log.id} className="flex gap-4">
                 <div className="flex flex-col items-center">
                   <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                   <div className="w-0.5 h-full bg-slate-100 my-1"></div>
                 </div>
                 <div>
                   <p className="text-sm font-bold text-slate-700">{log.action}</p>
                   <p className="text-xs text-slate-500">{log.details}</p>
                   <p className="text-[10px] text-slate-400 mt-1">{log.user} • {log.time}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default AuditComplianceCenter;
