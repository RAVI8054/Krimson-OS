import React from 'react';
import { RefreshCcw, FileText, Check } from 'lucide-react';

const RefundsLedgerControl = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-3xl shadow-sm">
           <h3 className="font-bold text-slate-800 mb-4">Initiate Refund / Adjustment</h3>
           <form className="space-y-4">
             <input type="text" placeholder="Student ID" className="w-full p-3 bg-slate-50 rounded-xl text-sm outline-none" />
             <select className="w-full p-3 bg-slate-50 rounded-xl text-sm outline-none text-slate-500">
               <option>Select Reason</option>
               <option>Withdrawal</option>
               <option>Scholarship Applied Late</option>
               <option>Double Payment</option>
             </select>
             <input type="text" placeholder="Amount (SGD)" className="w-full p-3 bg-slate-50 rounded-xl text-sm outline-none" />
             <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-500/20 hover:from-cyan-600 hover:to-blue-600 transition-all">Submit for Approval</button>
           </form>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm">
           <h3 className="font-bold text-slate-800 mb-4">Approval Queue</h3>
           <div className="space-y-4">
             <div className="flex items-center justify-between p-3 border border-slate-100 rounded-xl">
               <div>
                 <p className="text-sm font-bold text-slate-700">Req #RF-202</p>
                 <p className="text-xs text-slate-400">Security Deposit Refund</p>
               </div>
               <span className="text-sm font-bold text-slate-800">SGD 500</span>
               <button className="p-2 bg-green-50 text-green-600 rounded-lg"><Check size={16} /></button>
             </div>
             {/* More items... */}
           </div>
        </div>
      </div>
    </div>
  );
};

export default RefundsLedgerControl;
