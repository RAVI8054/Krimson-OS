import React from 'react';
import { COUNSELOR_DATA } from '../../../data/counselorData';
import { Plus, Filter, FileText, Download, Smile, Frown, AlertCircle } from 'lucide-react';

const StudentBehaviorLog = () => {
  const { behaviorLogs } = COUNSELOR_DATA;

  return (
    <div className="space-y-8">
      {/* Action Header */}
      <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm">
        <h3 className="text-xl font-bold text-slate-800">Behavioral Observations</h3>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-slate-600 text-sm font-bold hover:bg-slate-50">
            <Filter size={16} /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-xl text-sm font-bold hover:bg-slate-900 shadow-lg">
            <Plus size={16} /> Log Incident
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-green-50 p-6 rounded-3xl border border-green-100 flex items-center gap-4">
            <div className="p-3 bg-white rounded-full text-green-500 shadow-sm"><Smile size={24}/></div>
            <div>
               <p className="text-2xl font-extrabold text-green-700">12</p>
               <p className="text-xs font-bold text-green-600 uppercase">Positive Merits</p>
            </div>
         </div>
         <div className="bg-red-50 p-6 rounded-3xl border border-red-100 flex items-center gap-4">
            <div className="p-3 bg-white rounded-full text-red-500 shadow-sm"><Frown size={24}/></div>
            <div>
               <p className="text-2xl font-extrabold text-red-700">5</p>
               <p className="text-xs font-bold text-red-600 uppercase">Incidents / Concerns</p>
            </div>
         </div>
         <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex items-center gap-4">
            <div className="p-3 bg-white rounded-full text-blue-500 shadow-sm"><FileText size={24}/></div>
            <div>
               <p className="text-2xl font-extrabold text-blue-700">8</p>
               <p className="text-xs font-bold text-blue-600 uppercase">Parent Reports Generated</p>
            </div>
         </div>
      </div>

      {/* Logs Table */}
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <div className="flex justify-between items-center mb-6">
           <h4 className="font-bold text-slate-700">Recent Logs</h4>
           <button className="text-xs text-blue-500 font-bold flex items-center gap-1 hover:underline">
             <Download size={14}/> Export All
           </button>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-100">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase">Student</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase">Category</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase">Observation</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase">Date</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase">Recorded By</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {behaviorLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50/50">
                  <td className="p-4">
                    <p className="font-bold text-slate-700 text-sm">{log.student}</p>
                    <p className="text-xs text-slate-400">{log.class}</p>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      log.type === 'Positive' ? 'bg-green-100 text-green-700' : 
                      log.type === 'Negative' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {log.category}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-slate-600">{log.description}</td>
                  <td className="p-4 text-xs text-slate-500">{log.date}</td>
                  <td className="p-4 text-xs font-bold text-slate-500">{log.recordedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentBehaviorLog;
