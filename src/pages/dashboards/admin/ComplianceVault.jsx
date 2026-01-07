import React from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { Folder, FileText, AlertCircle, Upload } from 'lucide-react';

const ComplianceVault = () => {
  const { documents } = ADMIN_DATA;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
         <h2 className="text-2xl font-bold text-slate-800">Compliance Vault</h2>
         <button className="flex items-center gap-2 bg-slate-800 text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-slate-900">
            <Upload size={16}/> Upload Docs
         </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center gap-2"><Folder size={20} className="text-blue-500"/> Document Repository</h3>
            <div className="space-y-4">
               {['MOE Compliance', 'Safety Certs', 'Staff Credentials', 'Financial Audits'].map(folder => (
                  <div key={folder} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4 cursor-pointer hover:bg-blue-50 hover:border-blue-100 transition-colors group">
                     <Folder size={24} className="text-slate-400 group-hover:text-blue-500"/>
                     <span className="font-bold text-slate-700 flex-1">{folder}</span>
                     <span className="text-xs text-slate-400 font-bold">12 Files</span>
                  </div>
               ))}
            </div>
         </div>

         <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center gap-2"><AlertCircle size={20} className="text-red-500"/> Expiry Tracker</h3>
            <div className="space-y-4">
               {documents.map((doc, i) => (
                  <div key={i} className="flex justify-between items-center p-4 border border-slate-100 rounded-xl hover:shadow-sm">
                     <div className="flex items-center gap-3">
                        <FileText size={20} className="text-slate-400"/>
                        <div>
                           <p className="text-sm font-bold text-slate-700">{doc.name}</p>
                           <p className="text-xs text-slate-500">Exp: {doc.expiry}</p>
                        </div>
                     </div>
                     <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${doc.status === 'Valid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {doc.status}
                     </span>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default ComplianceVault;
