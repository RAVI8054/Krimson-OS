import React from 'react';
import { FINANCE_DATA } from '../../../data/financeData';
import { DollarSign, TrendingUp, AlertCircle, RefreshCw, ArrowRight } from 'lucide-react';

const FinanceDashboard = () => {
  const { summary, transactions } = FINANCE_DATA;

  return (
    <div className="space-y-8">
      {/* 1. Key Financial Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl shadow-sm border-l-4 border-green-500">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Collected (YTD)</p>
              <h3 className="text-3xl font-extrabold text-slate-800 mt-1">{summary.totalCollected}</h3>
            </div>
            <div className="p-3 bg-green-50 text-green-600 rounded-xl"><DollarSign size={24} /></div>
          </div>
          <p className="text-xs text-green-600 font-semibold flex items-center gap-1">
            <TrendingUp size={14} /> +12% from last term
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border-l-4 border-red-500">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Outstanding Dues</p>
              <h3 className="text-3xl font-extrabold text-slate-800 mt-1">{summary.outstanding}</h3>
            </div>
            <div className="p-3 bg-red-50 text-red-600 rounded-xl"><AlertCircle size={24} /></div>
          </div>
          <p className="text-xs text-red-500 font-semibold">Critical Action Required</p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border-l-4 border-blue-500">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Refunds & Adjustments</p>
              <h3 className="text-3xl font-extrabold text-slate-800 mt-1">{summary.refunds}</h3>
            </div>
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><RefreshCw size={24} /></div>
          </div>
          <p className="text-xs text-slate-500">Processed this month</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* 2. Recent Transactions Feed */}
        <div className="col-span-8 bg-white rounded-3xl p-8 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-slate-800">Recent Transactions</h3>
            <button className="text-sm text-blue-500 font-semibold hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
                <tr>
                  <th className="p-4 rounded-l-xl">Transaction ID</th>
                  <th className="p-4">Student</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Mode</th>
                  <th className="p-4 rounded-r-xl">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {transactions.map((tx, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-mono text-xs text-slate-500">{tx.id}</td>
                    <td className="p-4 font-semibold text-slate-700">{tx.student} <span className="text-slate-400 text-xs font-normal">({tx.class})</span></td>
                    <td className="p-4 font-bold text-slate-800">{tx.amount}</td>
                    <td className="p-4 text-sm text-slate-600">{tx.mode}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        tx.status === 'Paid' ? 'bg-green-100 text-green-700' : 
                        tx.status === 'Pending' ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Quick Actions */}
        <div className="col-span-4 space-y-6">
           <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
             <h3 className="font-bold text-lg mb-4 relative z-10">Quick Actions</h3>
             <div className="space-y-3 relative z-10">
               <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-between px-4 transition-colors backdrop-blur-sm border border-white/10">
                 <span className="text-sm font-bold">Generate Invoice</span>
                 <ArrowRight size={16} />
               </button>
               <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-between px-4 transition-colors backdrop-blur-sm border border-white/10">
                 <span className="text-sm font-bold">Record Offline Payment</span>
                 <ArrowRight size={16} />
               </button>
               <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-between px-4 transition-colors backdrop-blur-sm border border-white/10">
                 <span className="text-sm font-bold">Download Ledger</span>
                 <ArrowRight size={16} />
               </button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceDashboard;
