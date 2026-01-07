import React from 'react';
import { COUNSELOR_DATA } from '../../../data/counselorData';
import { Lock, Clock, CheckCircle, MoreHorizontal, AlertTriangle } from 'lucide-react';

const InterventionCaseDashboard = () => {
  const { cases } = COUNSELOR_DATA;

  const CaseCard = ({ data }) => (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all relative overflow-hidden group">
      {data.severity === 'High' && (
        <div className="absolute top-0 right-0 bg-red-500 w-16 h-16 transform translate-x-8 -translate-y-8 rotate-45"></div>
      )}
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${
             data.status === 'Resolved' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
          }`}>
            {data.status}
          </span>
          <h3 className="text-lg font-bold text-slate-800 mt-2">{data.student}</h3>
          <p className="text-xs text-slate-400">ID: {data.id}</p>
        </div>
        <button className="text-slate-300 hover:text-slate-500"><MoreHorizontal size={20} /></button>
      </div>

      <div className="mb-4">
        <p className="text-sm font-semibold text-slate-700 flex items-center gap-2">
           {data.severity === 'High' && <AlertTriangle size={14} className="text-red-500" />}
           {data.issue}
        </p>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-xs mb-1 text-slate-500">
          <span>Progress</span>
          <span>{data.progress}%</span>
        </div>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div className={`h-full rounded-full ${data.progress === 100 ? 'bg-green-500' : 'bg-blue-500'}`} style={{ width: `${data.progress}%` }}></div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
        <div className="flex items-center gap-1 text-xs text-slate-400">
          <Lock size={12} /> Confidential
        </div>
        <button className="text-xs font-bold text-slate-600 hover:text-blue-600">View Notes</button>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Workflow Stats */}
      <div className="grid grid-cols-3 gap-4">
         <div className="bg-blue-600 text-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold">5</h3>
            <p className="text-sm opacity-80">Active Cases</p>
         </div>
         <div className="bg-white text-slate-800 p-6 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold">12</h3>
            <p className="text-sm text-slate-400">Follow-ups Due</p>
         </div>
         <div className="bg-white text-slate-800 p-6 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold">28</h3>
            <p className="text-sm text-slate-400">Resolved YTD</p>
         </div>
      </div>

      {/* Case Grid */}
      <div>
        <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Clock className="text-orange-500" size={20} /> Ongoing Interventions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {cases.map((c) => <CaseCard key={c.id} data={c} />)}
           {/* Placeholder for Add New */}
           <div className="border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center p-6 text-slate-400 hover:border-blue-300 hover:text-blue-500 cursor-pointer transition-colors min-h-[200px]">
              <div className="bg-slate-50 p-4 rounded-full mb-2 group-hover:bg-blue-50">
                 <Lock size={24} />
              </div>
              <span className="font-bold text-sm">Open New Case File</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default InterventionCaseDashboard;
