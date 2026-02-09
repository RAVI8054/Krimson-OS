import React from "react";
import { FileText, CheckCircle, Clock, MessageCircle } from "lucide-react";
import { PARENT_DATA } from "../../../../data/parentData";

const TicketList = () => {
  const { myTickets } = PARENT_DATA.supportCenter;

  const getStatusBadge = (status) => {
    switch (status) {
      case "resolved":
        return (
          <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold flex items-center gap-1">
            <CheckCircle size={12} /> Resolved
          </span>
        );
      case "in-progress":
        return (
          <span className="px-2.5 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-bold flex items-center gap-1">
            <Clock size={12} /> In Progress
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold flex items-center gap-1">
            <Clock size={12} /> Pending
          </span>
        );
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
        <FileText className="text-purple-600" size={24} />
        My Tickets
      </h2>

      {myTickets.map((ticket) => (
        <div
          key={ticket.id}
          className="bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-lg border border-white/60 hover:shadow-xl transition-all"
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-slate-500">
                  #{ticket.id}
                </span>
                {getStatusBadge(ticket.status)}
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-1">
                {ticket.subject}
              </h3>
              <span
                className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                  ticket.category === "Academic"
                    ? "bg-blue-100 text-blue-700"
                    : ticket.category === "Finance"
                      ? "bg-green-100 text-green-700"
                      : ticket.category === "Transport"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-purple-100 text-purple-700"
                }`}
              >
                {ticket.category}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
            <span>
              Created: {new Date(ticket.createdAt).toLocaleDateString("en-SG")}
            </span>
            <span>
              Updated: {new Date(ticket.lastUpdate).toLocaleDateString("en-SG")}
            </span>
          </div>

          <button className="w-full bg-slate-100 text-slate-700 py-2 rounded-lg text-sm font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
            <MessageCircle size={16} />
            <div className="flex flex-col items-center">
              <span>View Details</span>
              <span className="text-[8px]">get in app</span>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};
export default TicketList;
