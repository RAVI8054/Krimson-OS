import React, { useState } from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { UserPlus, Filter, Download, CheckCircle } from 'lucide-react';

const AdmissionsConsole = () => {
  const { admissions, overview } = ADMIN_DATA;
  const [filter, setFilter] = useState('All');

  return (
    <div className="space-y-8">
      {/* Pipeline Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-2xl p-6 text-white shadow-lg">
            <p className="text-white/80 text-xs font-bold uppercase">Inquiries</p>
            <h3 className="text-3xl font-bold mt-1">{overview.pipeline.inquiries}</h3>
         </div>
         <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <p className="text-slate-400 text-xs font-bold uppercase">Verified Applications</p>
            <h3 className="text-3xl font-bold mt-1 text-slate-800">{overview.pipeline.verified}</h3>
         </div>
         <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
            <p className="text-green-600 text-xs font-bold uppercase">Enrolled This Month</p>
            <h3 className="text-3xl font-bold mt-1 text-green-700">{overview.pipeline.enrolled}</h3>
         </div>
      </div>

      {/* Main Console */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
         <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h2 className="font-bold text-lg text-slate-800">Application Tracker</h2>
            <div className="flex gap-3">
               <button className="p-2 text-slate-400 hover:text-blue-600"><Filter size={20}/></button>
               <button className="p-2 text-slate-400 hover:text-blue-600"><Download size={20}/></button>
               <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold rounded-lg flex items-center gap-2 hover:from-cyan-600 hover:to-blue-600 transition-all shadow-md shadow-blue-500/20">
                  <UserPlus size={16}/> New Entry
               </button>
            </div>
         </div>
         <table className="w-full text-left">
            <thead className="bg-slate-50">
               <tr>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Applicant ID</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Name</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Grade</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Date</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Stage</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Action</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
               {admissions.map(app => (
                  <tr key={app.id} className="hover:bg-slate-50/50">
                     <td className="p-4 text-sm font-mono text-slate-400">APP-{app.id}</td>
                     <td className="p-4 text-sm font-bold text-slate-700">{app.name}</td>
                     <td className="p-4 text-sm text-slate-600">Grade {app.grade}</td>
                     <td className="p-4 text-sm text-slate-500">{app.date}</td>
                     <td className="p-4">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${
                           app.stage === 'Enrolled' ? 'bg-green-100 text-green-700' :
                           app.stage === 'Verified' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                           {app.stage}
                        </span>
                     </td>
                     <td className="p-4">
                        <button className="text-blue-600 font-bold text-xs hover:underline">View</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
    </div>
  );
};

export default AdmissionsConsole;
