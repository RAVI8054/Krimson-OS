import React from "react";
import { Ticket, Send } from "lucide-react";

const TicketForm = ({ ticketForm, setTicketForm, handleSubmitTicket }) => {
  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-xl border border-white/60">
      <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Ticket className="text-cyan-600" size={24} />
        Create Support Ticket
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">
            Category
          </label>
          <select
            value={ticketForm.category}
            onChange={(e) =>
              setTicketForm({ ...ticketForm, category: e.target.value })
            }
            className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all"
          >
            <option value="Academic">Academic</option>
            <option value="Finance">Finance</option>
            <option value="Transport">Transport</option>
            <option value="Technical">Technical</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">
            Subject
          </label>
          <input
            type="text"
            value={ticketForm.subject}
            onChange={(e) =>
              setTicketForm({ ...ticketForm, subject: e.target.value })
            }
            placeholder="Brief description of your issue"
            className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">
            Priority
          </label>
          <div className="flex gap-2">
            {["low", "medium", "high"].map((priority) => (
              <button
                key={priority}
                onClick={() => setTicketForm({ ...ticketForm, priority })}
                className={`flex-1 py-2 rounded-lg text-sm font-bold capitalize transition-all ${
                  ticketForm.priority === priority
                    ? priority === "high"
                      ? "bg-red-500 text-white"
                      : priority === "medium"
                        ? "bg-amber-500 text-white"
                        : "bg-blue-500 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {priority}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">
            Description
          </label>
          <textarea
            value={ticketForm.description}
            onChange={(e) =>
              setTicketForm({ ...ticketForm, description: e.target.value })
            }
            placeholder="Please provide detailed information about your issue..."
            className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all resize-none"
            rows={5}
          />
        </div>

        <button
          onClick={handleSubmitTicket}
          disabled={!ticketForm.subject || !ticketForm.description}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
        >
          <Send size={18} />
          <div className="flex flex-col items-center">
            <span>Submit Ticket</span>
            <span className="text-[8px] opacity-80">get in app</span>
          </div>
        </button>
      </div>
    </div>
  );
};
export default TicketForm;
