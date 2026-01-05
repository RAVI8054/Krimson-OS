import React from 'react';
import { DollarSign, AlertCircle, CheckCircle } from 'lucide-react';

const FinanceWidget = () => {
    return (
        <div className="h-full w-full bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col cursor-grab active:cursor-grabbing">
            <div className="flex flex-col mb-4">
                <h3 className="text-gray-800 font-semibold text-lg">Finance Snapshot</h3>
                <span className="text-xs text-gray-400">Transactions for today</span>
            </div>

            <div className="grid grid-cols-2 gap-4 h-full">
                {/* Collected */}
                <div className="bg-emerald-50 rounded-xl p-4 flex flex-col justify-center border border-emerald-100">
                    <div className="flex items-center gap-2 mb-2 text-emerald-700">
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-xs font-semibold uppercase tracking-wider">Collected</span>
                    </div>
                    <span className="text-2xl font-bold text-gray-800">$12,450</span>
                    <span className="text-xs text-emerald-600 mt-1">+8 transactions today</span>
                </div>

                {/* Pending */}
                <div className="bg-amber-50 rounded-xl p-4 flex flex-col justify-center border border-amber-100">
                    <div className="flex items-center gap-2 mb-2 text-amber-700">
                        <AlertCircle className="h-4 w-4" />
                        <span className="text-xs font-semibold uppercase tracking-wider">Pending</span>
                    </div>
                    <span className="text-2xl font-bold text-gray-800">$3,200</span>
                    <span className="text-xs text-amber-600 mt-1">5 invoices overdue</span>
                </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs text-gray-400">Next billing cycle: 15th Jan</span>
                <button className="text-xs text-blue-600 font-medium hover:underline">View Reports →</button>
            </div>

            {/* API Integration Comment */}
            {/* TODO: Connect to GET /api/finance/snapshot */}
        </div>
    );
};

export default FinanceWidget;
