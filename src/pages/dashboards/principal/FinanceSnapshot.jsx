import React from 'react';
import { DollarSign, PieChart, Download, AlertOctagon } from 'lucide-react';

const FinanceSnapshot = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Fee & Finance Snapshot</h1>
          <p className="text-slate-500">High-level view of financial health</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 text-sm font-medium">
            <Download size={16} /> Download Monthly PDF
        </button>
      </div>

      {/* Hero Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
         <div className="lg:col-span-3 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
             <div className="flex justify-between mb-4">
                 <h3 className="font-bold text-lg">Monthly Collection vs Target</h3>
                 <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">+5% vs last year</span>
             </div>
             <div className="h-64 bg-slate-50 rounded flex items-center justify-center text-slate-400 border border-dashed text-sm">
                 [Bar Chart: Projected vs Actual Collection]
             </div>
         </div>
         <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center">
             <div className="mb-6">
                 <p className="text-sm text-slate-500 mb-1">Total Outstanding</p>
                 <h2 className="text-3xl font-bold text-red-600">$42,500</h2>
                 <p className="text-xs text-red-400 mt-1">Across 45 students</p>
             </div>
             <div className="mb-0">
                 <p className="text-sm text-slate-500 mb-1">Cash on Hand</p>
                 <h2 className="text-3xl font-bold text-green-600">$128,000</h2>
             </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Outstanding by Class */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold mb-4">Outstanding Fees by Grade</h3>
              <div className="space-y-3">
                  <div className="flex items-center gap-4">
                      <span className="w-16 font-medium text-sm">Grade 10</span>
                      <div className="flex-1 h-3 bg-slate-100 rounded-full">
                          <div className="w-[60%] h-3 bg-red-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-bold text-slate-700">$12k</span>
                  </div>
                  <div className="flex items-center gap-4">
                      <span className="w-16 font-medium text-sm">Grade 9</span>
                      <div className="flex-1 h-3 bg-slate-100 rounded-full">
                          <div className="w-[40%] h-3 bg-orange-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-bold text-slate-700">$8.5k</span>
                  </div>
              </div>
          </div>

          {/* Top Defaulters */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                  <AlertOctagon size={18} className="text-red-500" /> Top Defaulters
              </h3>
              <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                      <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                          <tr>
                              <th className="px-4 py-2 rounded-l">Student</th>
                              <th className="px-4 py-2">Grade</th>
                              <th className="px-4 py-2 rounded-r">Amount</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                          <tr>
                              <td className="px-4 py-3 font-medium">Alex Johnson</td>
                              <td className="px-4 py-3">10-B</td>
                              <td className="px-4 py-3 text-red-600 font-bold">$2,400</td>
                          </tr>
                          <tr>
                              <td className="px-4 py-3 font-medium">Maria Garcia</td>
                              <td className="px-4 py-3">12-A</td>
                              <td className="px-4 py-3 text-red-600 font-bold">$1,850</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
    </div>
  );
};

export default FinanceSnapshot;
