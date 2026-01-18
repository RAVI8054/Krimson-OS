/**
 * @component ComplianceVault
 * @description Secure document storage and compliance tracking for the institution
 */
import React from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { 
  Folder, 
  FileText, 
  AlertCircle, 
  Upload, 
  ShieldCheck, 
  Clock,
  MoreVertical,
  CheckCircle,
  Search
} from 'lucide-react';

const ComplianceVault = () => {
  const { documents } = ADMIN_DATA;

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
                  Legal & Regulatory
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                   <ShieldCheck size={12} className="text-green-400" />
                   Audit Ready
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Compliance Vault
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Centralized repository for licenses, certifications, and mandatory regulatory filings.
              </p>
            </div>
            
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
               <Upload size={20} />
               <span>Upload Documents</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         
         {/* ========================================
             DOCUMENT REPOSITORY
             ======================================== */}
         <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full relative overflow-hidden">
             {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-50 pointer-events-none" />

            <h3 className="font-bold text-xl text-slate-800 mb-6 flex items-center gap-3 relative z-10">
               <div className="p-2.5 bg-blue-100 text-blue-600 rounded-xl">
                  <Folder size={22} />
               </div>
               Document Repository
            </h3>

            <div className="relative mb-6">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
               <input 
                  type="text" 
                  placeholder="Search folders..." 
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-100 font-medium text-slate-600"
               />
            </div>

            <div className="space-y-3 flex-1">
               {['MOE Compliance', 'Safety Certs', 'Staff Credentials', 'Financial Audits', 'Health Inspections'].map(folder => (
                  <div key={folder} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between cursor-pointer hover:bg-blue-50 hover:border-blue-200 hover:shadow-sm transition-all group">
                     <div className="flex items-center gap-4">
                        <Folder size={24} className="text-blue-300 group-hover:text-blue-500 transition-colors fill-current"/>
                        <span className="font-bold text-slate-700 text-sm group-hover:text-blue-700 transition-colors">{folder}</span>
                     </div>
                     <span className="text-xs font-bold text-slate-400 bg-white px-2 py-1 rounded-lg border border-slate-100 group-hover:border-blue-100 group-hover:text-blue-500 transition-colors">
                        12 Files
                     </span>
                  </div>
               ))}
            </div>
         </div>

         {/* ========================================
             EXPIRY TRACKER
             ======================================== */}
         <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full relative overflow-hidden">
             {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full opacity-50 pointer-events-none" />
            
            <div className="flex justify-between items-center mb-6 relative z-10">
               <h3 className="font-bold text-xl text-slate-800 flex items-center gap-3">
                  <div className="p-2.5 bg-red-100 text-red-600 rounded-xl">
                     <AlertCircle size={22} />
                  </div>
                  Expiry Tracker
               </h3>
               <span className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100">
                  2 Items Critical
               </span>
            </div>

            <div className="space-y-4 flex-1">
               {documents.map((doc, i) => (
                  <div key={i} className={`
                     flex justify-between items-center p-5 border rounded-2xl hover:shadow-md transition-all group
                     ${doc.status === 'Expired' || doc.status === 'Expiring Soon' ? 'bg-red-50/30 border-red-100' : 'bg-white border-slate-100'}
                  `}>
                     <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${doc.status === 'Valid' ? 'bg-slate-100 text-slate-500' : 'bg-red-100 text-red-500'}`}>
                           <FileText size={20} />
                        </div>
                        <div>
                           <p className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{doc.name}</p>
                           <p className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-1">
                              <Clock size={12} /> Expires: {doc.expiry}
                           </p>
                        </div>
                     </div>
                     <div className="flex flex-col items-end gap-2">
                        <span className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wide flex items-center gap-1 border ${
                           doc.status === 'Valid' ? 'bg-green-50 text-green-600 border-green-100' : 
                           doc.status === 'Expiring Soon' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                           'bg-red-50 text-red-600 border-red-100'
                        }`}>
                           {doc.status === 'Valid' ? <CheckCircle size={10} /> : <AlertCircle size={10} />}
                           {doc.status}
                        </span>
                        <button className="text-slate-400 hover:text-blue-600 transition-colors">
                           <MoreVertical size={16} />
                        </button>
                     </div>
                  </div>
               ))}
               
               <button className="w-full py-3 bg-slate-50 text-slate-500 text-sm font-bold rounded-2xl hover:bg-slate-100 transition-colors border border-dashed border-slate-300 mt-2">
                  View Full Expiry Calendar
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ComplianceVault;
