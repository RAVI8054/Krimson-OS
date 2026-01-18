/**
 * @component SystemSettings
 * @description Global system configuration and policy management
 */
import React from 'react';
import { 
  Settings, 
  Globe, 
  Lock, 
  Palette, 
  Save, 
  Shield, 
  Clock, 
  Database,
  ToggleLeft,
  ToggleRight
} from 'lucide-react';

const SystemSettings = () => {
  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      
      {/* ========================================
          HEADER SECTION WITH GRADIENT THEME
          ======================================== */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                  Administration
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                   <Settings size={12} className="text-cyan-300 animate-spin-slow" />
                   v2.4.0
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                System Configuration
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Manage global settings, security policies, and localization preferences.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         
         {/* ========================================
             LEFT COLUMN - NAVIGATION / STATUS
             ======================================== */}
         <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
               <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
                  <div className="p-2 bg-slate-100 text-slate-600 rounded-lg">
                     <Clock size={20} />
                  </div>
                  System Status
               </h3>
               <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                     <span className="text-sm font-bold text-slate-600">Last Backup</span>
                     <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">2 hrs ago</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                     <span className="text-sm font-bold text-slate-600">DB Version</span>
                     <span className="text-xs font-bold text-slate-500">PostgreSQL 14</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                     <span className="text-sm font-bold text-slate-600">Server Uptime</span>
                     <span className="text-xs font-bold text-blue-600">99.98%</span>
                  </div>
               </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-3xl text-white shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
               <Shield size={40} className="mb-4 text-purple-200" />
               <h3 className="font-bold text-xl mb-2">Security Audit</h3>
               <p className="text-purple-100 text-sm mb-6 font-medium">System security check is recommended after configuration changes.</p>
               <button className="w-full py-3 bg-white text-indigo-600 font-bold rounded-xl hover:bg-purple-50 transition-colors shadow-lg">
                  Run Diagnostics
               </button>
            </div>
         </div>

         {/* ========================================
             RIGHT COLUMN - SETTINGS FORM
             ======================================== */}
         <div className="lg:col-span-2 space-y-8">
            
            {/* General Settings */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-md transition-all">
               <div className="p-8 border-b border-slate-100 flex gap-6 bg-slate-50/30">
                   <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-inner">
                      <Globe size={28}/>
                   </div>
                   <div>
                      <h3 className="font-bold text-xl text-slate-800">General Settings</h3>
                      <p className="text-slate-500 text-sm mt-1 font-medium">Configure academic year, timezones, and regional formats.</p>
                   </div>
               </div>
               <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Academic Year</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer hover:bg-white">
                         <option>2025-2026 (Current)</option>
                         <option>2026-2027 (Next)</option>
                      </select>
                   </div>
                   <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Currency Symbol</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer hover:bg-white">
                         <option>USD ($)</option>
                         <option>EUR (€)</option>
                         <option>GBP (£)</option>
                      </select>
                   </div>
               </div>
            </div>

            {/* Branding Settings */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-md transition-all">
               <div className="p-8 border-b border-slate-100 flex gap-6 bg-slate-50/30">
                   <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center text-purple-600 shadow-inner">
                      <Palette size={28}/>
                   </div>
                   <div>
                      <h3 className="font-bold text-xl text-slate-800">Branding & Theme</h3>
                      <p className="text-slate-500 text-sm mt-1 font-medium">Customize the look and feel of the institution's dashboard.</p>
                   </div>
               </div>
               <div className="p-8">
                   <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 font-bold text-xs uppercase cursor-pointer hover:border-blue-400 hover:text-blue-500 transition-all">
                         Logo
                      </div>
                      <div>
                         <button className="px-5 py-2.5 bg-slate-800 text-white font-bold rounded-xl text-xs hover:bg-slate-900 shadow-lg hover:shadow-xl transition-all">
                            Upload New Logo
                         </button>
                         <p className="text-xs text-slate-400 mt-2 font-medium">Recommended: 512x512px PNG</p>
                      </div>
                   </div>
               </div>
            </div>

            {/* Security Settings */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-md transition-all">
               <div className="p-8 border-b border-slate-100 flex gap-6 bg-slate-50/30">
                   <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl flex items-center justify-center text-red-600 shadow-inner">
                      <Lock size={28}/>
                   </div>
                   <div>
                      <h3 className="font-bold text-xl text-slate-800">Security Policies</h3>
                      <p className="text-slate-500 text-sm mt-1 font-medium">Enforce access controls and session timeouts.</p>
                   </div>
               </div>
               <div className="p-8 space-y-4">
                   <label className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 cursor-pointer hover:border-blue-200 transition-all">
                      <span className="flex items-center gap-3 font-bold text-slate-700">
                         <Shield size={18} className="text-blue-500" /> Require 2FA for Admin Access
                      </span>
                      <ToggleRight size={32} className="text-blue-600" />
                   </label>
                   
                   <label className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 cursor-pointer hover:border-blue-200 transition-all">
                      <span className="flex items-center gap-3 font-bold text-slate-700">
                         <Clock size={18} className="text-slate-400" /> Session Timeout (15 mins)
                      </span>
                      <ToggleRight size={32} className="text-green-600" />
                   </label>
               </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-4">
               <button className="px-8 py-4 text-slate-500 font-bold hover:bg-slate-100 rounded-xl transition-colors">
                  Cancel Changes
               </button>
               <button className="px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center gap-2">
                  <Save size={20} />
                  Save Configuration
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default SystemSettings;
