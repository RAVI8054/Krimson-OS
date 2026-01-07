import React from 'react';
import { FINANCE_DATA } from '../../../data/financeData';
import { Plus, Edit2, Trash2 } from 'lucide-react';

const FeeStructureSetup = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-800">Fee Structure Configuration</h2>
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-bold shadow-lg shadow-blue-500/20 hover:from-cyan-600 hover:to-blue-600 transition-all">
          <Plus size={16} /> Add Fee Head
        </button>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <div className="grid grid-cols-1 gap-4">
          {FINANCE_DATA.feeHeads.map((fee) => (
            <div key={fee.id} className="border border-slate-100 rounded-2xl p-4 flex items-center justify-between hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg
                  ${fee.type === 'Academic' ? 'bg-cyan-50 text-cyan-600' : 
                    fee.type === 'Facility' ? 'bg-pink-50 text-pink-600' : 'bg-blue-50 text-blue-600'}`}>
                  {fee.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{fee.name}</h4>
                  <p className="text-xs text-slate-500">{fee.type} • {fee.frequency}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xl font-bold text-slate-800">SGD {fee.amount}</span>
                <div className="flex gap-2">
                  <button className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg"><Edit2 size={16} /></button>
                  <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={16} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeeStructureSetup;
