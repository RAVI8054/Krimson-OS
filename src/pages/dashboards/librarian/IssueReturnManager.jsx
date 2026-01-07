import React from 'react';
import { LIBRARIAN_DATA } from '../../../data/librarianData';
import { Scan, ArrowRight, UserCheck, Calendar, CheckCircle, Clock } from 'lucide-react';

const IssueReturnManager = () => {
  const { transactions } = LIBRARIAN_DATA;

  return (
    <div className="space-y-8">
      {/* 1. Action Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Issue Section */}
        <div className="bg-white rounded-3xl p-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-blue-50 w-32 h-32 rounded-bl-full -mr-10 -mt-10"></div>
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2 relative z-10">
            <ArrowRight className="text-blue-500" /> Issue Book
          </h3>
          
          <div className="space-y-4 relative z-10">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase mb-1 block">Scan Barcode / ISBN</label>
              <div className="flex gap-2">
                <input type="text" placeholder="Scan Book ID..." className="flex-1 bg-slate-50 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-100" />
                <button className="bg-slate-800 text-white p-3 rounded-xl hover:bg-slate-900"><Scan size={20} /></button>
              </div>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase mb-1 block">Student ID</label>
              <div className="flex gap-2">
                <input type="text" placeholder="Enter Student ID..." className="flex-1 bg-slate-50 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-100" />
                <button className="bg-blue-50 text-blue-600 p-3 rounded-xl hover:bg-blue-100"><UserCheck size={20} /></button>
              </div>
            </div>
            <div className="pt-4">
              <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors">
                Confirm Issue
              </button>
            </div>
          </div>
        </div>

        {/* Return Section */}
        <div className="bg-white rounded-3xl p-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-green-50 w-32 h-32 rounded-bl-full -mr-10 -mt-10"></div>
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2 relative z-10">
            <CheckCircle className="text-green-500" /> Return Book
          </h3>
          
          <div className="space-y-4 relative z-10">
            <div>
               <label className="text-xs font-bold text-slate-400 uppercase mb-1 block">Scan Book for Return</label>
               <div className="flex gap-2">
                 <input type="text" placeholder="Scan Book ID..." className="flex-1 bg-slate-50 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-100" />
                 <button className="bg-slate-800 text-white p-3 rounded-xl hover:bg-slate-900"><Scan size={20} /></button>
               </div>
            </div>
            
            {/* Mock Return Info */}
            <div className="bg-red-50 p-4 rounded-xl border border-red-100">
               <div className="flex justify-between items-center mb-2">
                 <span className="text-sm font-bold text-red-700 flex items-center gap-2"><Clock size={16}/> Overdue: 3 Days</span>
                 <span className="text-xs font-bold bg-white text-red-600 px-2 py-1 rounded">Late</span>
               </div>
               <div className="flex justify-between items-center">
                 <span className="text-xs text-red-500 uppercase font-bold">Fine Calculated</span>
                 <span className="text-xl font-extrabold text-red-800">SGD 1.50</span>
               </div>
            </div>

            <div className="pt-2">
              <button className="w-full bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 hover:bg-green-700 transition-colors">
                Confirm Return
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Transaction Log */}
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-6">Recent Transactions</h3>
        <table className="w-full text-left">
           <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
             <tr>
               <th className="p-4 rounded-l-xl">Trans ID</th>
               <th className="p-4">Student</th>
               <th className="p-4">Book</th>
               <th className="p-4">Due Date</th>
               <th className="p-4">Fine</th>
               <th className="p-4 rounded-r-xl">Status</th>
             </tr>
           </thead>
           <tbody className="divide-y divide-slate-50">
             {transactions.map((tx) => (
               <tr key={tx.id} className="hover:bg-slate-50 transition-colors">
                 <td className="p-4 font-mono text-xs text-slate-500">{tx.id}</td>
                 <td className="p-4">
                   <p className="font-bold text-slate-700 text-sm">{tx.studentName}</p>
                   <p className="text-xs text-slate-400">{tx.studentId}</p>
                 </td>
                 <td className="p-4 text-sm text-slate-700 font-medium">{tx.book}</td>
                 <td className="p-4 text-sm text-slate-500 flex items-center gap-2">
                   <Calendar size={14}/> {tx.dueDate}
                 </td>
                 <td className="p-4 text-sm font-bold text-slate-700">{tx.fine}</td>
                 <td className="p-4">
                   <span className={`px-2 py-1 rounded text-xs font-bold ${
                     tx.status === 'Overdue' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
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
  );
};

export default IssueReturnManager;
