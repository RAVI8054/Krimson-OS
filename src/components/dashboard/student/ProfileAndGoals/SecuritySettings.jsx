import React, { useState } from "react";
import { Lock, Shield, CheckCircle, AlertCircle } from "lucide-react";

const SecuritySettings = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 animate-fade-in relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400"></div>
      <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <Lock className="text-blue-500" size={24} /> Security & Password
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-blue-600">
              Current Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-blue-600">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-blue-600">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>
          <button className="px-6 py-3 text-white rounded-xl font-bold text-sm shadow-lg transition-all bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-cyan-500/30 hover:scale-[1.02]">
            Update Password
          </button>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h3 className="text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
              <Shield size={18} className="text-green-500" /> Two-Factor
              Authentication
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              Add an extra layer of security to your account.
            </p>
            <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <CheckCircle size={16} />
                </div>
                <span className="font-bold text-slate-700 text-sm">
                  Enabled
                </span>
              </div>
              <button className="text-xs font-bold text-slate-500 border px-3 py-1 rounded-lg hover:bg-slate-50">
                Configure
              </button>
            </div>
          </div>

          <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-amber-500 flex-shrink-0" size={20} />
              <div>
                <h3 className="text-sm font-bold text-amber-800 mb-1">
                  Login Alerts
                </h3>
                <p className="text-xs text-amber-700">
                  Get notified of unrecognized login attempts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
