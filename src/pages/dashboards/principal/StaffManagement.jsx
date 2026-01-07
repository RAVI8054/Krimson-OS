import React from 'react';
import { Users, Clock, Briefcase, Mail } from 'lucide-react';

const StaffManagement = () => {
    const staff = [
        { name: "John Smith", role: "Math Dept Head", status: "Present", load: "High" },
        { name: "Sarah Connor", role: "Science Teacher", status: "In Class", load: "Normal" },
        { name: "Michael Doe", role: "English Teacher", status: "Absent", load: "Low" }
    ];

  return (
    <div className="space-y-6">
      <div className="mb-6 flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
        <div className="relative z-10">
           <h1 className="text-2xl font-bold text-slate-800">Staff & Department Management</h1>
           <p className="text-slate-500">Oversight of staff allocation and efficiency</p>
        </div>
        <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-cyan-300 via-blue-300 to-pink-300"></div>
        <button className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm font-bold shadow-lg shadow-blue-200 hover:shadow-xl hover:translate-y-px transition-all">
            <Mail size={16} /> Send Circular
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200">
              <span className="text-slate-500 text-sm">Total Staff</span>
              <p className="text-2xl font-bold">142</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200">
              <span className="text-slate-500 text-sm">On Leave</span>
              <p className="text-2xl font-bold text-orange-500">8</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200">
              <span className="text-slate-500 text-sm">Substitutions</span>
              <p className="text-2xl font-bold text-blue-500">5</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200">
              <span className="text-slate-500 text-sm">Late Arrivals</span>
              <p className="text-2xl font-bold text-red-500">3</p>
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Staff List */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
             <div className="p-6 border-b border-slate-100 mb-0">
                 <h3 className="font-bold">Staff Directory & Status</h3>
             </div>
             <table className="w-full text-left text-sm">
                 <thead className="bg-slate-50 text-slate-500 uppercase">
                     <tr>
                         <th className="px-6 py-3">Name</th>
                         <th className="px-6 py-3">Role</th>
                         <th className="px-6 py-3">Status</th>
                         <th className="px-6 py-3">Workload</th>
                         <th className="px-6 py-3">Action</th>
                     </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100">
                     {staff.map((s, i) => (
                         <tr key={i} className="hover:bg-slate-50 transition">
                             <td className="px-6 py-4 font-medium">{s.name}</td>
                             <td className="px-6 py-4 text-slate-500">{s.role}</td>
                             <td className="px-6 py-4">
                                 <span className={`px-2 py-1 rounded-full text-xs font-medium 
                                    ${s.status === 'Absent' ? 'bg-red-100 text-red-600' : 
                                      s.status === 'In Class' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                                     {s.status}
                                 </span>
                             </td>
                             <td className="px-6 py-4">
                                 <div className="w-20 bg-slate-200 rounded-full h-1.5 mt-1">
                                     <div className={`h-1.5 rounded-full ${s.load === 'High' ? 'bg-red-500 w-full' : 'bg-green-500 w-1/2'}`}></div>
                                 </div>
                                 <span className="text-xs text-slate-400">{s.load}</span>
                             </td>
                             <td className="px-6 py-4">
                                 <button className="text-blue-600 hover:underline">View</button>
                             </td>
                         </tr>
                     ))}
                 </tbody>
             </table>
          </div>

          {/* Sidebar Actions */}
          <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                  <h3 className="font-bold mb-4">Substitution Approvals</h3>
                  <div className="space-y-4">
                      <div className="text-sm border-l-4 border-orange-400 pl-3 py-1">
                          <p className="font-semibold">Mrs. Green (Physics)</p>
                          <p className="text-slate-500 text-xs">Requesting leave tomorrow.</p>
                          <div className="flex gap-2 mt-2">
                              <button className="bg-slate-100 px-3 py-1 rounded text-xs hover:bg-slate-200">Reject</button>
                              <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700">Approve</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default StaffManagement;
