import React from 'react';
import { FINANCE_DATA } from '../../../data/financeData';
import { AlertTriangle, Phone, MessageSquare, CheckCircle } from 'lucide-react';

const FeeCollectionTracker = () => {
  const { defaulters } = FINANCE_DATA;

  return (
    <div className="space-y-6">
      <div className="bg-red-50 border border-red-100 rounded-3xl p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-red-100 p-3 rounded-full text-red-600">
            <AlertTriangle size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-red-700">Action Required: {defaulters.length} Defaulters</h3>
            <p className="text-sm text-red-500">Total Outstanding: SGD 2,100</p>
          </div>
        </div>
        <button className="bg-red-600 text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg shadow-red-200 hover:bg-red-700">
          Send Bulk Reminder
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {defaulters.map((student) => (
          <div key={student.id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-bold text-slate-800">{student.name}</h4>
                <p className="text-xs text-slate-500">{student.class} • ID: {student.id}</p>
              </div>
              <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">Overdue</span>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-4 mb-6">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-500">Amount Due</span>
                <span className="font-bold text-slate-800">{student.amount}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Days Late</span>
                <span className="font-bold text-red-500">{student.daysOverdue} Days</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 py-2 border border-slate-200 rounded-lg flex justify-center items-center gap-2 text-slate-600 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600">
                <Phone size={14} /> Call
              </button>
              <button className="flex-1 py-2 border border-slate-200 rounded-lg flex justify-center items-center gap-2 text-slate-600 text-sm font-semibold hover:bg-green-50 hover:text-green-600">
                <MessageSquare size={14} /> WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeeCollectionTracker;
