import React from 'react';
import { FileText, Download, Mail, Filter } from 'lucide-react';

const ReportsGenerator = () => {
    const reportTypes = [
        { name: "Academic Performance Summary", desc: "Grade-wise analysis & trends", format: "PDF/Excel" },
        { name: "Fee Collection Report", desc: "Daily vs Monthly collections", format: "PDF/Excel" },
        { name: "Attendance Log", desc: "Student & Staff attendance records", format: "CSV" },
        { name: "Incident & Discipline", desc: "Behavioral summary report", format: "PDF" }
    ];

  return (
    <div className="space-y-6">
      <div className="mb-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between overflow-hidden relative">
        <div className="relative z-10">
            <h1 className="text-2xl font-bold text-slate-800">Reports & Insights</h1>
            <p className="text-slate-500 mt-1">Generate real-time analytical and compliance reports</p>
        </div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-pink-50 to-transparent"></div>
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-2xl flex items-center justify-center text-white shadow-inner">
            <FileText size={24} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Report Selection */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold mb-4">Available Reports</h3>
              <div className="space-y-4">
                  {reportTypes.map((rpt, i) => (
                      <div key={i} className="flex justify-between items-center p-4 border rounded-lg hover:border-blue-400 transition group cursor-pointer">
                          <div className="flex items-center gap-4">
                              <div className="p-3 bg-slate-100 rounded-lg text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition">
                                  <FileText size={24} />
                              </div>
                              <div>
                                  <h4 className="font-bold text-slate-700">{rpt.name}</h4>
                                  <p className="text-sm text-slate-500">{rpt.desc}</p>
                              </div>
                          </div>
                          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                              <button className="p-2 text-slate-400 hover:text-blue-600"><Download size={20}/></button>
                              <button className="p-2 text-slate-400 hover:text-green-600"><Mail size={20}/></button>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          {/* Configuration & Schedule */}
          <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold mb-4 flex items-center gap-2"><Filter size={18}/> Custom Report Builder</h3>
                  <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                          <div>
                              <label className="text-sm font-medium text-slate-600 block mb-1">Date Range</label>
                              <select className="w-full border rounded p-2 text-sm bg-slate-50">
                                  <option>Last 30 Days</option>
                                  <option>Current Term</option>
                              </select>
                          </div>
                          <div>
                              <label className="text-sm font-medium text-slate-600 block mb-1">Department</label>
                              <select className="w-full border rounded p-2 text-sm bg-slate-50">
                                  <option>All Departments</option>
                                  <option>Science</option>
                              </select>
                          </div>
                      </div>
                      <button className="w-full bg-slate-800 text-white py-2 rounded-lg font-medium hover:bg-slate-900">Generate Preview</button>
                  </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                   <h3 className="font-bold text-blue-900 mb-2">Automated Schedules</h3>
                   <ul className="text-sm space-y-2 text-blue-800">
                       <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span> Weekly Performance (Sent to Board on Fri 5 PM)</li>
                       <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span> Monthly Finance (Sent to Accounts on 1st)</li>
                   </ul>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ReportsGenerator;
