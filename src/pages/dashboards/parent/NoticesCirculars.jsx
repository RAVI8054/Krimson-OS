import React from 'react';
import { FileText, Download, Bell } from 'lucide-react';

const NoticesCirculars = () => {
  return (
    <div className="space-y-6">
       <div className="bg-white rounded-3xl p-6 shadow-sm">
         <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
           <Bell className="text-yellow-500" /> Official Circulars
         </h2>

         <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center justify-between p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
                 <div className="flex items-center gap-4">
                   <div className="bg-red-50 p-3 rounded-xl text-red-500">
                     <FileText size={24} />
                   </div>
                   <div>
                     <h3 className="font-bold text-slate-700">Revised School Timing - Term 2</h3>
                     <p className="text-xs text-slate-500 mt-1">Uploaded on: 05 Jan 2026 • Category: Admin</p>
                   </div>
                 </div>
                 <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-slate-700">
                   <Download size={14} /> Download PDF
                 </button>
              </div>
            ))}
         </div>
       </div>
    </div>
  );
};

export default NoticesCirculars;
