import React from "react";
import { MessageSquare, Plus } from "lucide-react";
import TicketItem from "./TicketItem";

const MyTicketsTab = ({ tickets }) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 animate-slideDown">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-800 text-xl flex items-center gap-2">
          <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
            <MessageSquare size={20} />
          </div>
          My Support Tickets
        </h3>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all transform active:scale-95">
          <Plus size={18} /> Create New Ticket
        </button>
      </div>

      <div className="space-y-4">
        {tickets.map((ticket) => (
          <TicketItem key={ticket.id} {...ticket} />
        ))}
        {tickets.length === 0 && (
          <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-3xl">
            <p className="text-slate-400 font-bold">
              You have no support tickets.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTicketsTab;
