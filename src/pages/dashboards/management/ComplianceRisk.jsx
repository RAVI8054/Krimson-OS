import React from 'react';
import { MANAGEMENT_DATA } from '../../../data/managementData';
import { ShieldCheck, FileCheck, Server, AlertTriangle, Download } from 'lucide-react';

const ComplianceRisk = () => {
  const { compliance } = MANAGEMENT_DATA;

  return (
    <div className="space-y-8">
       {/* Risk Header */}
       <div className="bg-white rounded-3xl p-8 shadow-sm border-l-8 border-green-500 flex justify-between items-center">
         <div>
           <h2 className="text-2xl font-bold text-slate-800">Risk Index: {compliance.riskIndex}</h2>
           <p className="text-slate-500 mt-1">Institutional compliance is currently within safe parameters.</p>
         </div>
         <div className="text-right">
           <p className="text-sm font-bold text-slate-400 uppercase">Audit Readiness</p>
           <p className="text-4xl font-extrabold text-green-600">{compliance.auditReadiness}%</p>
         </div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* Checklist */}
         <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
              <ShieldCheck className="text-blue-500"/> Regulatory Checklist
            </h3>
            <div className="space-y-4">
              {compliance.checklist.map((item, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                  <span className="font-semibold text-slate-700">{item.item}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.status === 'Valid' || item.status === 'Verified' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                 <span className="font-semibold text-slate-700">SSG Ledger Submission</span>
                 <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700">Pending Review</span>
              </div>
            </div>
         </div>

         {/* Technical Logs */}
         <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
               <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                 <Server className="text-purple-500"/> Data & Security
               </h3>
               <div className="space-y-3">
                 <div className="flex items-center gap-3 text-sm text-slate-600">
                   <div className="w-2 h-2 rounded-full bg-green-500"></div> Last Backup: Today, 02:00 AM
                 </div>
                 <div className="flex items-center gap-3 text-sm text-slate-600">
                   <div className="w-2 h-2 rounded-full bg-green-500"></div> Encryption: AES-256 Enabled
                 </div>
                 <div className="flex items-center gap-3 text-sm text-slate-600">
                   <div className="w-2 h-2 rounded-full bg-green-500"></div> Firewall Status: Active
                 </div>
               </div>
            </div>

            <button className="w-full py-4 bg-slate-800 text-white rounded-3xl font-bold flex justify-center items-center gap-2 hover:bg-slate-900 transition-colors shadow-lg">
              <Download size={20} /> Download Quarterly Audit Report
            </button>
         </div>
       </div>
    </div>
  );
};

export default ComplianceRisk;
