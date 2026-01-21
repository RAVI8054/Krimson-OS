import React from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { CreditCard, Download, Clock, CheckCircle } from 'lucide-react';

const FeeStatus = () => {
 const { fees, user } = STUDENT_DATA;
 const [showQR, setShowQR] = React.useState(false);

 return (
   <div className="space-y-8">
     {/* 1. Summary Cards */}
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       {/* Due Card */}
       <div className="bg-white p-6 rounded-3xl shadow-sm border-l-4 border-orange-500 relative overflow-hidden">
         <div className="relative z-10">
           <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Total Due</h2>
           <div className="text-4xl font-extrabold text-slate-800">${fees.totalDue}</div>
           <p className="text-xs text-orange-600 font-bold mt-2 flex items-center gap-1">
             <Clock size={12}/> Due by {new Date(fees.dueDate).toLocaleDateString()}
           </p>
         </div>
       </div>

       {/* Paid Card */}
       <div className="bg-white p-6 rounded-3xl shadow-sm border-l-4 border-green-500">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Total Paid</h2>
          <div className="text-4xl font-extrabold text-slate-800">${fees.totalPaid}</div>
          <p className="text-xs text-green-600 font-bold mt-2 flex items-center gap-1">
             <CheckCircle size={12}/> Updated Today
           </p>
       </div>

       {/* Next Due Reminder */}
       <div className="bg-gradient-to-br from-indigo-500 to-violet-600 p-6 rounded-3xl text-white shadow-lg flex flex-col justify-between">
          <div>
              <h2 className="text-sm font-bold text-white/80 uppercase tracking-wider mb-1">Upcoming</h2>
              <div className="text-xl font-bold">{fees.upcomingDues[0].title}</div>
              <div className="text-sm opacity-90">${fees.upcomingDues[0].amount} • {new Date(fees.upcomingDues[0].date).toLocaleDateString()}</div>
          </div>
          <button onClick={() => setShowQR(!showQR)} className="mt-4 w-full py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl text-xs font-bold transition-all">
              {showQR ? 'Hide QR Code' : 'Pay Now'}
          </button>
       </div>
     </div>

     {/* 2. QR Payment Section */}
     {showQR && (
       <div className="bg-white p-8 rounded-3xl shadow-xl border border-indigo-100 flex flex-col md:flex-row items-center gap-8 animate-in fade-in slide-in-from-top-4 duration-500">
           <div className="w-48 h-48 bg-white p-2 rounded-xl shadow-inner border border-slate-100">
               <img src={fees.qrCode} alt="Payment QR" className="w-full h-full object-contain mix-blend-multiply" />
           </div>
           
           <div className="flex-1 text-center md:text-left">
               <h3 className="text-2xl font-bold text-slate-800 mb-2">Scan to Pay Instantly</h3>
               <p className="text-slate-500 mb-6">Use any UPI app or Banking app to scan automatically. Reference ID: <span className="font-mono bg-slate-100 px-2 py-1 rounded text-slate-700">STD-{user.id}-FEE</span></p>
               
               <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                   <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg">
                       <CreditCard size={18}/> Open Payment App
                   </button>
                   <button className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-100 text-slate-600 font-bold rounded-xl hover:border-slate-200 transition-colors">
                       Copy Payment Link
                   </button>
               </div>
           </div>
       </div>
     )}

     {/* 3. History Table */}
     <div className="bg-white rounded-3xl p-8 shadow-sm">
        <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Transaction History</h3>
            <button className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                View All <Clock size={12}/>
            </button>
        </div>
        
        <div className="overflow-x-auto">
           <table className="w-full text-left">
              <thead className="bg-slate-50">
                 <tr>
                    <th className="p-4 rounded-l-xl text-xs font-bold text-slate-500">Date</th>
                    <th className="p-4 text-xs font-bold text-slate-500">Transaction ID</th>
                    <th className="p-4 text-xs font-bold text-slate-500">Method</th>
                    <th className="p-4 text-xs font-bold text-slate-500">Amount</th>
                    <th className="p-4 text-xs font-bold text-slate-500">Status</th>
                    <th className="p-4 rounded-r-xl text-xs font-bold text-slate-500 text-right">Receipt</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                 {fees.history.map(tx => (
                    <tr key={tx.id} className="group hover:bg-slate-50 transition-colors">
                       <td className="p-4 text-sm text-slate-600">{tx.date}</td>
                       <td className="p-4 text-sm text-slate-400 font-mono">TXN-{tx.id}</td>
                       <td className="p-4 text-sm text-slate-500">{tx.method || 'Online'}</td>
                       <td className="p-4 text-sm font-bold text-slate-700">${tx.amount}</td>
                       <td className="p-4">
                          <span className="flex w-fit items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md border border-green-100">
                             <CheckCircle size={12}/> {tx.status}
                          </span>
                       </td>
                       <td className="p-4 text-right">
                          <button 
                            onClick={() => alert(`Downloading Receipt for TXN-${tx.id}...`)}
                            className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                            title="Download Receipt"
                          >
                            <Download size={16}/>
                          </button>
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
