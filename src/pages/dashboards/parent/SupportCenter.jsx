import React from 'react';
import { HelpCircle, ChevronDown, Mail, Phone } from 'lucide-react';

const SupportCenter = () => {
  return (
    <div className="space-y-6">
       <div className="grid grid-cols-2 gap-6">
         {/* FAQ Section */}
         <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <HelpCircle className="text-blue-500" /> FAQs
            </h2>
            <div className="space-y-3">
              {[
                "How do I reset my password?",
                "Where can I download the fee receipt?",
                "How to apply for leave?",
                "Who to contact for bus route change?"
              ].map((q, i) => (
                <div key={i} className="border border-slate-100 rounded-xl p-4 flex justify-between items-center cursor-pointer hover:bg-slate-50">
                  <span className="text-sm font-semibold text-slate-700">{q}</span>
                  <ChevronDown size={16} className="text-slate-400" />
                </div>
              ))}
            </div>
         </div>

         {/* Contact Section */}
         <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-6">Create Support Ticket</h2>
            <form className="space-y-4">
               <div>
                 <label className="text-xs font-bold text-slate-500 uppercase">Issue Type</label>
                 <select className="w-full mt-1 p-3 bg-slate-50 rounded-xl border-none text-sm font-semibold">
                   <option>Technical Issue</option>
                   <option>Transport</option>
                   <option>Fees / Finance</option>
                 </select>
               </div>
               <div>
                 <label className="text-xs font-bold text-slate-500 uppercase">Description</label>
                 <textarea className="w-full mt-1 p-3 bg-slate-50 rounded-xl border-none text-sm h-24"></textarea>
               </div>
               <button className="w-full bg-slate-800 text-white font-bold py-3 rounded-xl hover:bg-slate-900">
                 Submit Ticket
               </button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl text-slate-600 text-sm font-bold hover:bg-slate-50">
                <Mail size={16} /> Email Us
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl text-slate-600 text-sm font-bold hover:bg-slate-50">
                <Phone size={16} /> Call Admin
              </button>
            </div>
         </div>
       </div>
    </div>
  );
};

export default SupportCenter;
