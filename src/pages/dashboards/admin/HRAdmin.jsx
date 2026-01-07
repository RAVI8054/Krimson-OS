import React from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { Phone, Mail, Award } from 'lucide-react';

const HRAdmin = () => {
  const { staff } = ADMIN_DATA;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm">
         <h2 className="text-2xl font-bold text-slate-800">Staff Administration</h2>
         <button className="border border-slate-200 text-slate-600 px-6 py-2 rounded-xl font-bold hover:bg-slate-50">
            Export Records
         </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {staff.map(member => (
            <div key={member.id} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
               <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">{member.name[0]}</div>
                  <div>
                     <h3 className="font-bold text-slate-800">{member.name}</h3>
                     <p className="text-xs text-slate-500 uppercase font-bold">{member.role}</p>
                  </div>
               </div>
               
               <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                     <span className="text-slate-500">Employee ID</span>
                     <span className="font-bold text-slate-700">{member.id}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                     <span className="text-slate-500">Status</span>
                     <span className={`px-2 py-0.5 rounded textxs font-bold ${member.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{member.status}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                     <span className="text-slate-500">Attendance</span>
                     <span className="font-bold text-slate-700">{member.attendance} Today</span>
                  </div>
               </div>

               <div className="flex gap-2 border-t border-slate-50 pt-4">
                  <button className="flex-1 py-2 bg-slate-50 text-slate-600 font-bold rounded-lg text-xs hover:bg-slate-100"><Mail size={16} className="mx-auto"/></button>
                  <button className="flex-1 py-2 bg-slate-50 text-slate-600 font-bold rounded-lg text-xs hover:bg-slate-100"><Phone size={16} className="mx-auto"/></button>
                  <button className="flex-1 py-2 bg-slate-50 text-slate-600 font-bold rounded-lg text-xs hover:bg-slate-100"><Award size={16} className="mx-auto"/></button>
               </div>
            </div>
         ))}
      </div>
    </div>
  );
};

export default HRAdmin;
