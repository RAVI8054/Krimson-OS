/**
 * @component FinanceControl
 * @description Financial overview and transaction monitoring dashboard
 */
import React from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { 
  TrendingUp, 
  RefreshCcw, 
  DollarSign, 
  CreditCard, 
  Wallet, 
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Download,
  MoreHorizontal
} from 'lucide-react';

const FinanceControl = () => {
  const { finance, overview } = ADMIN_DATA;

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      
      {/* ========================================
          HEADER SECTION WITH GRADIENT THEME
          ======================================== */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                  Financial Integrity
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                   <RefreshCcw size={12} className="text-cyan-300" />
                   Real-time Sync
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Finance Control
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Monitor revenue streams, outstanding dues, and daily transaction flows.
              </p>
            </div>
            
            <div className="flex gap-3">
               <button className="flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl font-bold border border-white/20 transition-all shadow-lg">
                  <Filter size={20} />
                  <span>Filter</span>
               </button>
               <button className="flex items-center gap-2 px-5 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all">
                  <Download size={20} />
                  <span>Report</span>
               </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         
         {/* Total Collected Card */}
         <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-all">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
               <Wallet size={120} className="text-blue-600" />
            </div>
            
            <div className="flex justify-between items-start mb-6">
               <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                  <DollarSign size={24} />
               </div>
               <span className="px-2 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-lg flex items-center gap-1">
                  <ArrowUpRight size={14} /> +12.5%
               </span>
            </div>

            <h3 className="text-lg font-bold text-slate-500 uppercase tracking-wide">Total Collected</h3>
            <p className="text-5xl font-extrabold text-slate-800 mt-2 tracking-tight">
               ${overview.finance.collected.toLocaleString()}
            </p>
            <p className="text-sm text-slate-400 mt-2 font-medium">Updated 2 minutes ago</p>
         </div>

         {/* Outstanding Dues Card */}
         <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-all">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
               <CreditCard size={120} className="text-red-500" />
            </div>

            <div className="flex justify-between items-start mb-6">
               <div className="p-3 bg-red-50 text-red-500 rounded-2xl">
                  <DollarSign size={24} />
               </div>
               <button className="px-4 py-1.5 bg-red-600 text-white text-xs font-bold rounded-lg hover:bg-red-700 transition-colors shadow-md shadow-red-500/20">
                  Send Reminders
               </button>
            </div>

            <h3 className="text-lg font-bold text-slate-500 uppercase tracking-wide">Outstanding Dues</h3>
            <p className="text-5xl font-extrabold text-slate-800 mt-2 tracking-tight">
               ${overview.finance.due.toLocaleString()}
            </p>
            <p className="text-sm text-red-500 mt-2 font-bold flex items-center gap-1">
               <ArrowUpRight size={14} /> Needs attention
            </p>
         </div>
      </div>

      {/* ========================================
          TRANSACTION TABLE
          ======================================== */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
         <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 className="font-bold text-xl text-slate-800 flex items-center gap-3">
               Live Transaction Feed
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            </h3>
            <button className="p-2 text-slate-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
               <MoreHorizontal size={20} />
            </button>
         </div>

         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                     <th className="p-6 text-xs font-extrabold text-slate-500 uppercase tracking-wider">TXN ID</th>
                     <th className="p-6 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Date & Time</th>
                     <th className="p-6 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Category</th>
                     <th className="p-6 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Amount</th>
                     <th className="p-6 text-xs font-extrabold text-slate-500 uppercase tracking-wider text-right">Status</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-50">
                  {finance.transactions.map(tx => (
                     <tr key={tx.id} className="hover:bg-blue-50/20 transition-colors group">
                        <td className="p-6">
                           <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md group-hover:bg-white group-hover:text-blue-600 border border-transparent group-hover:border-blue-100 transition-all">
                              {tx.id}
                           </span>
                        </td>
                        <td className="p-6 text-sm font-semibold text-slate-600">
                           {tx.date}
                        </td>
                        <td className="p-6">
                           <span className="text-sm font-bold text-slate-700 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">
                              {tx.type}
                           </span>
                        </td>
                        <td className="p-6 text-sm font-bold text-slate-800">
                           ${tx.amount.toLocaleString()}
                        </td>
                        <td className="p-6 text-right">
                           <span className={`px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1.5 ${
                              tx.status === 'Completed' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-yellow-50 text-yellow-600 border border-yellow-100'
                           }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${tx.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                              {tx.status}
                           </span>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         
         <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
            <button className="text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline">View All Transactions</button>
         </div>
      </div>
    </div>
  );
};

export default FinanceControl;
