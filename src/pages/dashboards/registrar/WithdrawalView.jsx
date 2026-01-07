import React from 'react';
import {
  LogOut, FileCheck
} from 'lucide-react';
import { Card, StatCard, Badge } from './SharedComponents';

const WITHDRAWAL_DATA = {
    title: 'Transfer & Withdrawal Management',
    description: 'Manage student exits and TC generation.',
    stats: [
      { label: 'Pending Exit', value: '3', icon: LogOut, color: 'text-amber-600', bg: 'bg-amber-50' },
      { label: 'TC Generated', value: '15', icon: FileCheck, color: 'text-purple-600', bg: 'bg-purple-50' },
    ],
    requests: [
      { name: 'Eleanor Woo', grade: 'G09', library: 'Cleared', finance: 'Pending', principal: 'Pending', status: 'In Progress' },
      { name: 'Lucas Chen', grade: 'G11', library: 'Cleared', finance: 'Cleared', principal: 'Approved', status: 'Ready to Archive' },
    ]
};

const WithdrawalView = () => {
  const data = WITHDRAWAL_DATA;

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

      <div className="space-y-6">
         <Card className="p-0 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <div>
              <h3 className="font-bold text-lg text-slate-800">Exit Clearance Workflow</h3>
              <p className="text-xs text-slate-500 mt-1">Track clearance from Library, Finance, and Academics.</p>
            </div>
            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl text-xs hover:bg-slate-50 shadow-sm">
                Download Report
            </button>
          </div>
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
              <tr>
                <th className="p-4">Student</th>
                <th className="p-4">Library</th>
                <th className="p-4">Finance</th>
                <th className="p-4">Principal</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
               {data.requests.map((req, i) => (
                 <tr key={i} className="hover:bg-slate-50/50">
                   <td className="p-4 font-bold text-slate-700">{req.name}<div className="text-xs font-normal text-slate-400">{req.grade}</div></td>
                   <td className="p-4"><Badge color={req.library === 'Cleared' ? 'green' : 'amber'}>{req.library}</Badge></td>
                   <td className="p-4"><Badge color={req.finance === 'Cleared' ? 'green' : 'amber'}>{req.finance}</Badge></td>
                   <td className="p-4"><Badge color={req.principal === 'Approved' ? 'green' : 'amber'}>{req.principal}</Badge></td>
                   <td className="p-4 font-bold text-slate-500">{req.status}</td>
                   <td className="p-4 text-right">
                     {req.status === 'Ready to Archive' ? (
                       <button className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-lg shadow-sm hover:bg-purple-700 flex items-center gap-1 ml-auto shadow-purple-200">
                         <FileCheck className="w-3 h-3" /> Gen. TC
                       </button>
                     ) : (
                        <button className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-50 ml-auto">
                         Details
                       </button>
                     )}
                   </td>
                 </tr>
               ))}
            </tbody>
          </table>
         </Card>
      </div>
    </div>
  );
};

export default WithdrawalView;
