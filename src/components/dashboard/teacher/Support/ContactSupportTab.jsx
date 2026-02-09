import React from "react";
import { MessageSquare, CheckCircle } from "lucide-react";

const ContactSupportTab = () => {
  return (
    <div className="max-w-3xl mx-auto animate-slideDown py-8">
      <div className="bg-white rounded-[2rem] p-10 shadow-xl border border-slate-100 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />

        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-8 text-white shadow-xl shadow-blue-500/30">
          <MessageSquare size={40} />
        </div>

        <h2 className="text-3xl font-extrabold text-slate-800 mb-3">
          Still need help?
        </h2>
        <p className="text-slate-500 mb-10 text-lg max-w-md mx-auto">
          Our support team is available Mon-Fri, 9am - 6pm EST to assist you
          with any issues.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button className="p-6 border-2 border-slate-100 rounded-3xl hover:border-blue-500 hover:bg-blue-50 group transition-all text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              <MessageSquare size={64} className="text-blue-600" />
            </div>
            <h4 className="font-bold text-lg text-slate-800 group-hover:text-blue-600 mb-1">
              Live Chat
            </h4>
            <p className="text-sm text-slate-500 font-medium">
              Connect instantly
            </p>
            <div className="mt-4 inline-block px-3 py-1 bg-white rounded-lg text-xs font-bold text-green-600 border border-slate-200">
              Average wait: 2 mins
            </div>
          </button>

          <button className="p-6 border-2 border-slate-100 rounded-3xl hover:border-pink-500 hover:bg-pink-50 group transition-all text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              <CheckCircle size={64} className="text-pink-600" />
            </div>
            <h4 className="font-bold text-lg text-slate-800 group-hover:text-pink-600 mb-1">
              Email Support
            </h4>
            <p className="text-sm text-slate-500 font-medium">
              Send us a detailed query
            </p>
            <div className="mt-4 inline-block px-3 py-1 bg-white rounded-lg text-xs font-bold text-blue-600 border border-slate-200">
              Response in 24 hrs
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSupportTab;
