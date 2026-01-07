import React from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { CreditCard, Download, Clock, CheckCircle } from 'lucide-react';

const FeeStatus = () => {
  const { fees } = STUDENT_DATA;

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-3xl shadow-sm border-l-4 border-orange-500 flex flex-col md:flex-row justify-between items-center gap-6">
         <div>
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Total Outstanding</h2>
            <div className="text-4xl font-extrabold text-slate-800">${fees.totalDue}</div>
            <p className="text-xs text-orange-600 font-bold mt-2 flex items-center gap-1">
               <Clock size={12}/> Due by {new Date(fees.dueDate).toLocaleDateString()}
            </p>
         </div>
         <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-lg hover:bg-black flex items-center gap-3">
            <CreditCard size={20}/> Pay Now
         </button>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm">
         <h3 className="font-bold text-slate-800 mb-6">Payment History</h3>
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead className="bg-slate-50">
                  <tr>
                     <th className="p-4 rounded-l-xl text-xs font-bold text-slate-500">Date</th>
                     <th className="p-4 text-xs font-bold text-slate-500">Transaction ID</th>
                     <th className="p-4 text-xs font-bold text-slate-500">Amount</th>
                     <th className="p-4 text-xs font-bold text-slate-500">Status</th>
                     <th className="p-4 rounded-r-xl text-xs font-bold text-slate-500 text-right">Receipt</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-50">
                  {fees.history.map(tx => (
                     <tr key={tx.id}>
                        <td className="p-4 text-sm text-slate-600">{tx.date}</td>
                        <td className="p-4 text-sm text-slate-400 font-mono">TXN-{tx.id}</td>
                        <td className="p-4 text-sm font-bold text-slate-700">${tx.amount}</td>
                        <td className="p-4">
                           <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md">
                              <CheckCircle size={12}/> {tx.status}
                           </span>
                        </td>
                        <td className="p-4 text-right">
                           <button className="p-2 text-slate-400 hover:text-indigo-600"><Download size={16}/></button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );
};

export default FeeStatus;
