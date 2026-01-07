import React from 'react';
import { CreditCard, Download, Clock } from 'lucide-react';

const FeePayments = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-6 text-white shadow-lg col-span-2 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-slate-400 text-sm mb-1">Total Outstanding</p>
            <h1 className="text-4xl font-bold mb-6">SGD 450.00</h1>
            <button className="bg-white text-slate-900 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors">Pay Now via Stripe</button>
          </div>
           <CreditCard className="absolute right-6 bottom-6 text-white opacity-10 w-32 h-32" />
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-red-100">
           <h3 className="font-bold text-slate-700 mb-2">Payment Due</h3>
           <div className="flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-xl mb-4">
             <Clock size={18} />
             <span className="font-bold text-sm">15 Jan 2026</span>
           </div>
           <p className="text-xs text-slate-400">Late fees apply after the due date.</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4">Transaction History</h3>
        <table className="w-full text-left">
          <thead className="text-xs text-slate-400 uppercase border-b border-slate-100">
            <tr>
              <th className="py-3">Description</th>
              <th className="py-3">Date</th>
              <th className="py-3">Amount</th>
              <th className="py-3">Status</th>
              <th className="py-3 text-right">Receipt</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 text-sm">
             <tr>
               <td className="py-4 font-medium text-slate-700">Term 1 Tuition Fee</td>
               <td className="py-4 text-slate-500">01 Dec 2025</td>
               <td className="py-4 text-slate-800 font-bold">$1200.00</td>
               <td className="py-4"><span className="text-green-600 bg-green-50 px-2 py-1 rounded-md text-xs font-bold">Paid</span></td>
               <td className="py-4 text-right"><button className="text-blue-500 hover:bg-blue-50 p-2 rounded"><Download size={16}/></button></td>
             </tr>
             <tr>
               <td className="py-4 font-medium text-slate-700">Transport Fee (Dec)</td>
               <td className="py-4 text-slate-500">01 Dec 2025</td>
               <td className="py-4 text-slate-800 font-bold">$150.00</td>
               <td className="py-4"><span className="text-green-600 bg-green-50 px-2 py-1 rounded-md text-xs font-bold">Paid</span></td>
               <td className="py-4 text-right"><button className="text-blue-500 hover:bg-blue-50 p-2 rounded"><Download size={16}/></button></td>
             </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeePayments;
