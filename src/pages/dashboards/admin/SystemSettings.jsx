import React from 'react';
import { Settings, Globe, Lock, Palette } from 'lucide-react';

const SystemSettings = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-800">System Configuration</h2>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
         <div className="p-8 border-b border-slate-100 flex gap-6">
             <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                <Globe size={32}/>
             </div>
             <div>
                <h3 className="font-bold text-lg text-slate-800">General Settings</h3>
                <p className="text-slate-500 text-sm mt-1">Configure academic year, timezones, and localization.</p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                   <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Academic Year</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 text-sm"><option>2025-2026</option></select>
                   </div>
                   <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Currency</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 text-sm"><option>USD ($)</option></select>
                   </div>
                </div>
             </div>
         </div>

         <div className="p-8 border-b border-slate-100 flex gap-6">
             <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600">
                <Palette size={32}/>
             </div>
             <div>
                <h3 className="font-bold text-lg text-slate-800">Branding & Theme</h3>
                <p className="text-slate-500 text-sm mt-1">Upload school logo and set primary dashboard colors.</p>
                <button className="mt-4 px-4 py-2 bg-slate-100 text-slate-600 font-bold rounded-lg text-xs hover:bg-slate-200">Upload Logo</button>
             </div>
         </div>

         <div className="p-8 flex gap-6">
             <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-600">
                <Lock size={32}/>
             </div>
             <div>
                <h3 className="font-bold text-lg text-slate-800">Security Policies</h3>
                <p className="text-slate-500 text-sm mt-1">Manage password strength and session timeouts.</p>
                <label className="flex items-center gap-2 mt-4 text-sm font-bold text-slate-700">
                   <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" defaultChecked /> Require 2FA for Admin Access
                </label>
             </div>
         </div>
      </div>
      
      <div className="flex justify-end gap-3">
         <button className="px-6 py-3 text-slate-500 font-bold hover:bg-slate-100 rounded-xl">Cancel</button>
         <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700">Save Changes</button>
      </div>
    </div>
  );
};

export default SystemSettings;
