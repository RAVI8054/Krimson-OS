import React from 'react';
import { BarChart3, Download, PieChart, FileText } from 'lucide-react';
import { FINANCE_DATA } from '../../../data/financeData';

const FinancialReports = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-8 rounded-3xl shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-slate-800">Collection Trends (Term 1)</h2>
          <button className="flex items-center gap-2 text-sm font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-xl">
            <Download size={16} /> Export CSV
          </button>
        </div>
        
        {/* Simple Visual Bar Chart */}
        <div className="flex items-end justify-between h-64 gap-2">
           {FINANCE_DATA.summary.monthlyTrend.map((val, i) => (
             <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
               <div 
                 className="w-full bg-blue-100 rounded-t-xl hover:bg-blue-400 transition-colors relative" 
                 style={{ height: `${val}%` }}
               >
                 <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                   {val}%
                 </span>
               </div>
               <span className="text-[10px] font-bold text-slate-400">M{i+1}</span>
             </div>
           ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {['Fee Dues Report', 'Gateway Settlement', 'Expense Tracker'].map((report, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow-sm flex items-center justify-between cursor-pointer hover:bg-slate-50">
             <div className="flex items-center gap-4">
               <div className="bg-purple-50 text-purple-600 p-3 rounded-xl"><FileText size={20} /></div>
               <span className="font-bold text-slate-700">{report}</span>
             </div>
             <Download size={16} className="text-slate-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialReports;
