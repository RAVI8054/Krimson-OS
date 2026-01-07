import React from 'react';
import { MANAGEMENT_DATA } from '../../../data/managementData';
import { DollarSign, PieChart, ArrowUpRight, ArrowDownRight, FileText } from 'lucide-react';

const FinancialHealth = () => {
  const { finance } = MANAGEMENT_DATA;

  return (
    <div className="space-y-8">
      {/* Revenue Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl shadow-sm border-b-4 border-green-500">
          <p className="text-slate-400 text-xs font-bold uppercase">Annual Revenue</p>
          <h2 className="text-2xl font-extrabold text-slate-800 mt-2">{finance.revenue.annual}</h2>
          <span className="text-xs text-green-600 font-bold flex items-center mt-2"><ArrowUpRight size={12}/> {finance.surplus} Surplus</span>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border-b-4 border-blue-500">
          <p className="text-slate-400 text-xs font-bold uppercase">Receivables</p>
          <h2 className="text-2xl font-extrabold text-slate-800 mt-2">{finance.receivables}</h2>
          <span className="text-xs text-blue-500 font-bold mt-2 block">Outstanding Dues</span>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border-b-4 border-purple-500">
          <p className="text-slate-400 text-xs font-bold uppercase">Term Revenue</p>
          <h2 className="text-2xl font-extrabold text-slate-800 mt-2">{finance.revenue.term}</h2>
          <span className="text-xs text-slate-400 mt-2 block">Current Academic Term</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Settlement Report */}
        <div className="col-span-8 bg-white rounded-3xl p-8 shadow-sm">
           <div className="flex justify-between items-center mb-8">
             <h3 className="font-bold text-slate-700 text-lg">Gateway Settlements</h3>
             <button className="text-sm text-blue-600 font-bold bg-blue-50 px-4 py-2 rounded-xl">View Detailed Ledger</button>
           </div>
           
           <div className="space-y-4">
             {['Stripe', 'Razorpay', 'Bank Transfer'].map((gateway, i) => (
               <div key={i} className="flex items-center justify-between p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                     {gateway[0]}
                   </div>
                   <div>
                     <p className="font-bold text-slate-700">{gateway}</p>
                     <p className="text-xs text-slate-400">Last settlement: Today, 09:00 AM</p>
                   </div>
                 </div>
                 <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Reconciled</span>
               </div>
             ))}
           </div>
        </div>

        {/* Expense Tracker Link */}
        <div className="col-span-4 bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl p-8 text-white shadow-lg flex flex-col justify-between">
           <div>
             <h3 className="font-bold text-lg mb-2">Expense Tracker</h3>
             <p className="text-slate-400 text-sm">Monitor operational expenditures against the budget.</p>
           </div>
           
           <div className="space-y-4 my-6">
             <div>
               <div className="flex justify-between text-xs mb-1">
                 <span>Salaries</span>
                 <span>65%</span>
               </div>
               <div className="w-full bg-slate-700 h-1.5 rounded-full"><div className="w-[65%] bg-blue-400 h-full rounded-full"></div></div>
             </div>
             <div>
               <div className="flex justify-between text-xs mb-1">
                 <span>Infrastructure</span>
                 <span>20%</span>
               </div>
               <div className="w-full bg-slate-700 h-1.5 rounded-full"><div className="w-[20%] bg-purple-400 h-full rounded-full"></div></div>
             </div>
           </div>

           <button className="w-full py-3 bg-white text-slate-900 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors flex justify-center gap-2">
             <FileText size={16} /> Open HR & Payroll
           </button>
        </div>
      </div>
    </div>
  );
};

export default FinancialHealth;
