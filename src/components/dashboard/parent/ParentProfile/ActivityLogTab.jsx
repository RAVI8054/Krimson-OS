import React from "react";
import { Download } from "lucide-react";

const ActivityLogTab = ({ activityLogs }) => {
  const theme = {
    gradient: "from-cyan-400 via-blue-400 to-pink-400",
    text: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 animate-fade-in relative overflow-hidden">
      <div
        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${theme.gradient}`}
      ></div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-slate-800">Activity History</h2>
        <button className="px-4 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-2">
          <Download size={16} /> Export CSV
        </button>
      </div>

      <div className="overflow-hidden bg-slate-50 rounded-xl border border-slate-100">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-100 text-slate-500 font-bold uppercase text-xs">
            <tr>
              <th className="px-6 py-4">Action</th>
              <th className="px-6 py-4">Date & Time</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {activityLogs.map((log, i) => (
              <tr key={i} className="hover:bg-white transition-colors">
                <td className="px-6 py-4 font-medium text-slate-800">
                  {log.action}
                </td>
                <td className="px-6 py-4 text-slate-500">{log.time}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>{" "}
                    {log.status}
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

export default ActivityLogTab;
