import React from 'react';
import {
  CheckCircle, Clock, AlertCircle, FileCheck, Users
} from 'lucide-react';
import { Card, StatCard } from './SharedComponents';

const COMPLIANCE_DATA = {
  title: 'Compliance & Reporting Center',
  description: 'PEI and SSG regulatory monitoring.',
  status: 'Pending', // Overall status
  stats: [
    { label: 'PEI Status', value: 'Compliant', icon: CheckCircle, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Reports Due', value: '2', icon: Clock, color: 'text-rose-600', bg: 'bg-rose-50' },
  ],
  checklist: [
    { item: 'Monthly Attendance Report', due: 'Jan 31', status: 'Pending' },
    { item: 'Student Enrollment Count', due: 'Jan 31', status: 'Completed' },
    { item: 'Fee Protection Scheme Review', due: 'Feb 15', status: 'Pending' },
  ]
};

const ComplianceView = () => {
  const data = COMPLIANCE_DATA;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-2 gap-4">
          <div>
             <h2 className="text-3xl font-bold text-slate-800 leading-tight">{data.title}</h2>
             <p className="text-slate-500 mt-1 font-medium">{data.description}</p>
          </div>
      </div>

       {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {data.stats.map((stat, i) => <StatCard key={i} {...stat} />)}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`p-8 rounded-[2rem] text-white shadow-xl flex flex-col justify-between h-56 ${data.status === 'Pending' ? 'bg-gradient-to-br from-amber-400 to-orange-500' : 'bg-gradient-to-br from-emerald-400 to-teal-500'}`}>
          <div className="flex justify-between items-start">
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md"><AlertCircle className="w-6 h-6" /></div>
            <span className="font-bold text-xs bg-black/10 px-3 py-1 rounded-full backdrop-blur-md uppercase tracking-wide">Monthly Status</span>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">Compliance {data.status === 'Pending' ? 'Alert' : 'Clear'}</h3>
            <p className="opacity-90 text-sm font-medium">Action required for Jan 2025 audit cycle.</p>
          </div>
          <div className="w-full bg-black/10 h-1.5 rounded-full overflow-hidden">
               <div className="bg-white/80 h-full w-[65%] rounded-full"></div>
          </div>
        </div>
  
        <Card className="overflow-hidden p-0 flex flex-col h-56">
          <div className="p-5 border-b border-slate-100 font-bold text-slate-700 flex justify-between items-center bg-slate-50/50">
            <span>Monthly Checklist</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-bold">Jan 2025</span>
          </div>
          <div className="flex-1 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-slate-200">
             {data.checklist.map((task, i) => (
               <div key={i} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group">
                 <div className="flex items-center gap-3">
                   <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${task.status === 'Completed' ? 'bg-emerald-500 border-emerald-500' : 'border-slate-300 group-hover:border-blue-400'}`}>
                     {task.status === 'Completed' && <CheckCircle className="w-3 h-3 text-white" />}
                   </div>
                   <span className={`text-sm font-medium transition-colors ${task.status === 'Completed' ? 'text-slate-400 line-through' : 'text-slate-700 group-hover:text-blue-700'}`}>{task.item}</span>
                 </div>
                 <span className="text-xs font-bold text-rose-500 bg-rose-50 px-2 py-1 rounded-lg">{task.due}</span>
               </div>
             ))}
          </div>
        </Card>
      </div>
  
      <Card>
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-lg text-slate-800">Regulatory Exports</h3>
          <button className="text-xs font-bold text-blue-600 hover:underline">View All History</button>
        </div>
        <div className="flex gap-4">
          <button className="flex-1 flex flex-col items-center justify-center gap-3 p-6 border-2 border-dashed border-slate-200 rounded-2xl hover:border-blue-400 hover:bg-blue-50 transition-all group">
              <FileCheck className="w-10 h-10 text-slate-300 group-hover:text-blue-500 transition-colors" />
              <span className="font-bold text-slate-500 group-hover:text-blue-700 transition-colors">Attendance Audit Report</span>
              <span className="text-xs text-slate-400">PDF • Form 3A</span>
          </button>
          <button className="flex-1 flex flex-col items-center justify-center gap-3 p-6 border-2 border-dashed border-slate-200 rounded-2xl hover:border-blue-400 hover:bg-blue-50 transition-all group">
              <Users className="w-10 h-10 text-slate-300 group-hover:text-blue-500 transition-colors" />
              <span className="font-bold text-slate-500 group-hover:text-blue-700 transition-colors">Enrolment Figures</span>
               <span className="text-xs text-slate-400">CSV • PEI Format</span>
          </button>
        </div>
      </Card>
    </div>
  );
};

export default ComplianceView;
