import React from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { TrendingUp, RefreshCcw } from 'lucide-react';

const FinanceControl = () => {
  const { finance, overview } = ADMIN_DATA;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="bg-purple-600 rounded-3xl p-8 text-white shadow-lg">
            <h3 className="text-lg font-bold opacity-80">Total Collected</h3>
            <p className="text-4xl font-extrabold mt-2">${overview.finance.collected.toLocaleString()}</p>
            <div className="mt-4 flex items-center gap-2 text-sm font-medium bg-white/10 p-2 rounded-lg w-fit">
               <TrendingUp size={16}/> +12% from last month
            </div>
         </div>
         <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-500">Outstanding Dues</h3>
            <p className="text-4xl font-extrabold mt-2 text-red-500">${overview.finance.due.toLocaleString()}</p>
            <button className="mt-4 text-blue-600 text-sm font-bold hover:underline">Send Reminders</button>
         </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
         <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-slate-800">Live Transaction Feed</h3>
            <RefreshCcw size={16} className="text-slate-400 cursor-pointer hover:rotate-180 transition-transform"/>
         </div>
         <table className="w-full text-left">
            <thead className="bg-slate-50">
               <tr>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">TXN ID</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Date</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Type</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Amount</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Status</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
               {finance.transactions.map(tx => (
                  <tr key={tx.id}>
                     <td className="p-4 text-sm font-mono text-slate-500">{tx.id}</td>
                     <td className="p-4 text-sm text-slate-600">{tx.date}</td>
                     <td className="p-4 text-sm font-bold text-slate-700">{tx.type}</td>
                     <td className="p-4 text-sm font-bold text-slate-800">${tx.amount}</td>
                     <td className="p-4">
                        <span className="text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded">{tx.status}</span>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
    </div>
  );
};

export default FinanceControl;
