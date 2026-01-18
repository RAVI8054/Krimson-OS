import React from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { 
  UserPlus, 
  Filter, 
  Download, 
  CheckCircle, 
  Search, 
  ArrowUpRight, 
  MoreHorizontal,
  FileText
} from 'lucide-react';

const AdmissionsConsole = () => {
  const { admissions, overview } = ADMIN_DATA;

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      
      {/* ========================================
          HEADER SECTION WITH GRADIENT THEME
          ======================================== */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                  Admissions Department
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                   Latest Application Cycle
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Admissions Console
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Track student applications, manage inquiries, and oversee enrollment processes.
              </p>
            </div>
            
            <button className="flex items-center gap-2 px-5 py-3 bg-white text-blue-600 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
               <UserPlus size={20} />
               <span>New Entry</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================
          PIPELINE SUMMARY
          ======================================== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {/* Inquiries */}
         <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-110" />
            <div className="relative z-10">
               <p className="text-blue-100 text-xs font-bold uppercase tracking-wider mb-1">Total Inquiries</p>
               <h3 className="text-4xl font-extrabold mb-4">{overview.pipeline.inquiries}</h3>
               <div className="flex items-center gap-2 bg-white/20 w-fit px-3 py-1.5 rounded-lg backdrop-blur-sm">
                  <span className="text-xs font-bold">+12% vs last month</span>
               </div>
            </div>
         </div>

         {/* Verified Applications */}
         <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all group">
            <div className="flex justify-between items-start mb-4">
               <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Verified Applications</p>
                  <h3 className="text-4xl font-extrabold text-slate-800">{overview.pipeline.verified}</h3>
               </div>
               <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform">
                  <FileText size={24} />
               </div>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2">
               <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
            <p className="text-xs text-slate-400 mt-2 font-medium">65% Conversion Rate</p>
         </div>

         {/* Enrolled */}
         <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all group">
            <div className="flex justify-between items-start mb-4">
               <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Enrolled This Month</p>
                  <h3 className="text-4xl font-extrabold text-green-600">{overview.pipeline.enrolled}</h3>
               </div>
               <div className="p-3 bg-green-50 text-green-600 rounded-2xl group-hover:scale-110 transition-transform">
                  <CheckCircle size={24} />
               </div>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2">
               <div className="bg-green-500 h-2 rounded-full" style={{ width: '42%' }}></div>
            </div>
            <p className="text-xs text-slate-400 mt-2 font-medium">On track with targets</p>
         </div>
      </div>

      {/* ========================================
          APPLICATION TRACKER CARD
          ======================================== */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
         {/* Card Header */}
         <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
               <h2 className="font-bold text-xl text-slate-800">Application Tracker</h2>
               <p className="text-sm text-slate-500">Manage recent applications and their stages</p>
            </div>
            <div className="flex gap-2">
               <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input 
                     type="text" 
                     placeholder="Search..." 
                     className="pl-9 pr-4 py-2 bg-slate-50 border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-100 w-48"
                  />
               </div>
               <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><Filter size={20}/></button>
               <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><Download size={20}/></button>
            </div>
         </div>

         {/* Table */}
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Applicant ID</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Name</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Grade Target</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Submission Date</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider">Current Stage</th>
                     <th className="p-5 text-xs font-extrabold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                  {admissions.map(app => (
                     <tr key={app.id} className="hover:bg-blue-50/30 transition-colors group">
                        <td className="p-5">
                           <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                              #{app.id}
                           </span>
                        </td>
                        <td className="p-5">
                           <div className="font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{app.name}</div>
                        </td>
                        <td className="p-5">
                           <span className="text-sm font-medium text-slate-600 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">Grade {app.grade}</span>
                        </td>
                        <td className="p-5 text-sm text-slate-500 font-medium">{app.date}</td>
                        <td className="p-5">
                           <span className={`px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1.5 ${
                              app.stage === 'Enrolled' ? 'bg-green-100 text-green-700' :
                              app.stage === 'Verified' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                           }`}>
                              <div className={`w-1.5 h-1.5 rounded-full ${
                                 app.stage === 'Enrolled' ? 'bg-green-500' :
                                 app.stage === 'Verified' ? 'bg-blue-500' : 'bg-amber-500'
                              }`} />
                              {app.stage}
                           </span>
                        </td>
                        <td className="p-5 text-right">
                           <button className="text-slate-400 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-lg transition-all">
                              <MoreHorizontal size={18} />
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         
         <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-center">
            <button className="text-xs font-bold text-slate-500 hover:text-blue-600 flex items-center gap-1 transition-colors">
               View All Applications <ArrowUpRight size={14} />
            </button>
         </div>
      </div>
    </div>
  );
};

export default AdmissionsConsole;
