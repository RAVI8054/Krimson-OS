import React from "react";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

const TicketItem = ({ id, subject, category, status, date, priority }) => {
  const getPriorityColor = (p) => {
    switch (p) {
      case "High":
        return "text-red-600 bg-red-50 border-red-100";
      case "Medium":
        return "text-orange-600 bg-orange-50 border-orange-100";
      default:
        return "text-blue-600 bg-blue-50 border-blue-100";
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-md transition-all cursor-pointer group">
      <div className="flex gap-5 items-start mb-4 md:mb-0">
        <div
          className={`mt-1 p-3 rounded-full ${status === "Resolved" ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"}`}
        >
          {status === "Resolved" ? (
            <CheckCircle size={24} />
          ) : (
            <Clock size={24} />
          )}
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs font-bold text-slate-400 bg-white px-1.5 py-0.5 rounded border border-slate-200">
              {id}
            </span>
            <span className="text-xs text-slate-400 font-bold">• {date}</span>
          </div>
          <h4 className="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors">
            {subject}
          </h4>
          <p className="text-sm font-bold text-slate-500 mt-1">{category}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
        <span
          className={`px-4 py-1.5 rounded-xl text-xs font-bold border flex items-center gap-1.5 ${getPriorityColor(priority)}`}
        >
          <AlertCircle size={12} /> {priority}
        </span>
        <span
          className={`px-4 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 ${status === "Resolved" ? "bg-green-100 text-green-700" : "bg-slate-200 text-slate-600"}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default TicketItem;
