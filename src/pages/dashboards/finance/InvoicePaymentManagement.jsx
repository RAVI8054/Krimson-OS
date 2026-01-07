import React from 'react';
import { FileText, CreditCard, Download, Mail } from 'lucide-react';

const InvoicePaymentManagement = () => {
  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select className="px-4 py-2 rounded-xl bg-white border-none shadow-sm text-sm text-slate-600 font-medium">
          <option>All Classes</option>
          <option>Grade 5</option>
          <option>Grade 6</option>
        </select>
        <select className="px-4 py-2 rounded-xl bg-white border-none shadow-sm text-sm text-slate-600 font-medium">
          <option>Status: All</option>
          <option>Paid</option>
          <option>Pending</option>
        </select>
      </div>

      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="p-6 text-xs font-bold text-slate-500 uppercase">Invoice #</th>
              <th className="p-6 text-xs font-bold text-slate-500 uppercase">Student</th>
              <th className="p-6 text-xs font-bold text-slate-500 uppercase">Due Date</th>
              <th className="p-6 text-xs font-bold text-slate-500 uppercase">Amount</th>
              <th className="p-6 text-xs font-bold text-slate-500 uppercase">Gateway</th>
              <th className="p-6 text-xs font-bold text-slate-500 uppercase text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[1, 2, 3].map((i) => (
              <tr key={i} className="hover:bg-slate-50/50">
                <td className="p-6 font-mono text-xs text-blue-600 font-bold">INV-2025-00{i}</td>
                <td className="p-6 font-semibold text-slate-700">Student Name {i}</td>
                <td className="p-6 text-sm text-slate-500">15 Jan 2026</td>
                <td className="p-6 font-bold text-slate-800">SGD 1,200</td>
                <td className="p-6">
                  <span className="flex items-center gap-1 text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded w-fit">
                    <CreditCard size={12} /> Stripe
                  </span>
                </td>
                <td className="p-6 flex justify-end gap-2">
                  <button className="p-2 text-slate-400 hover:text-blue-500 bg-slate-50 rounded-lg"><Download size={16}/></button>
                  <button className="p-2 text-slate-400 hover:text-green-500 bg-slate-50 rounded-lg"><Mail size={16}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoicePaymentManagement;
