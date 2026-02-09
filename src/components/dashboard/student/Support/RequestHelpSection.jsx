import React, { useState } from "react";
import { Plus, CheckCircle, Clock } from "lucide-react";

const RequestHelpSection = () => {
  const [ticketForm, setTicketForm] = useState({
    subject: "",
    category: "Academic",
    description: "",
    priority: "Medium",
  });
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    setTicketSubmitted(true);
    setTimeout(() => {
      setTicketSubmitted(false);
      setTicketForm({
        subject: "",
        category: "Academic",
        description: "",
        priority: "Medium",
      });
    }, 3000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-slideDown">
      <div className="lg:col-span-2">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Plus className="text-indigo-600" size={24} /> Submit a Request
          </h2>

          {ticketSubmitted ? (
            <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center animate-fade-in">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">
                Ticket Submitted!
              </h3>
              <p className="text-green-700">
                Your request has been received. Ticket ID: #TKT-
                {Math.floor(Math.random() * 10000)}
              </p>
            </div>
          ) : (
            <form onSubmit={handleTicketSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Issue Category
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-semibold text-slate-700"
                    value={ticketForm.category}
                    onChange={(e) =>
                      setTicketForm({ ...ticketForm, category: e.target.value })
                    }
                  >
                    <option>Academic</option>
                    <option>Technical</option>
                    <option>Facility</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Priority Level
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-semibold text-slate-700"
                    value={ticketForm.priority}
                    onChange={(e) =>
                      setTicketForm({ ...ticketForm, priority: e.target.value })
                    }
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Critical</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Brief summary of the issue..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-semibold text-slate-700"
                  required
                  value={ticketForm.subject}
                  onChange={(e) =>
                    setTicketForm({ ...ticketForm, subject: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Description
                </label>
                <textarea
                  rows="4"
                  placeholder="Please describe the issue in detail..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-semibold text-slate-700 resize-none"
                  required
                  value={ticketForm.description}
                  onChange={(e) =>
                    setTicketForm({
                      ...ticketForm,
                      description: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-all transform active:scale-95"
                >
                  Submit Ticket
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Recent Tickets Sidebar */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 h-fit">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Clock size={20} className="text-slate-400" /> Recent Activity
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-[10px] font-bold bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-500">
                #TKT-1024
              </span>
              <span className="text-[10px] font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                Resolved
              </span>
            </div>
            <h4 className="text-sm font-bold text-slate-700">
              Library Access Issue
            </h4>
            <p className="text-xs text-slate-500 mt-1">2 days ago</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-[10px] font-bold bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-500">
                #TKT-1035
              </span>
              <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                Open
              </span>
            </div>
            <h4 className="text-sm font-bold text-slate-700">
              Grade Discrepancy in Math
            </h4>
            <p className="text-xs text-slate-500 mt-1">Today</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestHelpSection;
