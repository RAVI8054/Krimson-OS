import React from "react";
import { Shield, History, Smartphone } from "lucide-react";

const SecurityTab = ({ loginHistory }) => {
  const theme = {
    gradient: "from-cyan-400 via-blue-400 to-pink-400",
    text: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 animate-fade-in relative overflow-hidden">
      <div
        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${theme.gradient}`}
      ></div>
      <h2 className="text-lg font-bold text-slate-800 mb-6">
        Security & Login
      </h2>

      <div className="space-y-6">
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-full text-green-600">
              <Shield size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-sm">
                Two-Factor Authentication
              </h3>
              <p className="text-xs text-slate-500">
                Secure your account with 2FA
              </p>
            </div>
          </div>
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-lg">
            Active
          </span>
        </div>

        <div className="space-y-4 max-w-md">
          <h3 className="text-sm font-bold text-slate-700 border-b border-slate-100 pb-2">
            Change Password
          </h3>
          <div className="space-y-2">
            <label className={`text-xs font-bold uppercase ${theme.text}`}>
              Current Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <label className={`text-xs font-bold uppercase ${theme.text}`}>
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>
          <button
            className={`px-6 py-2.5 text-white rounded-xl font-bold text-sm shadow-lg transition-all bg-gradient-to-r ${theme.gradient}`}
          >
            Update Password
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100">
          <h3 className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
            <History size={16} /> Recent Login Activity
          </h3>
          <div className="space-y-2">
            {loginHistory.map((login, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 text-sm"
              >
                <div className="flex items-center gap-3">
                  <Smartphone size={16} className="text-slate-400" />
                  <div>
                    <p className="font-bold text-slate-700">{login.device}</p>
                    <p className="text-xs text-slate-500">
                      {login.location} • {login.ip}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-medium text-slate-500">
                  {login.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityTab;
