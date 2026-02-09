import React from "react";
import { Bell, Layout } from "lucide-react";

const SystemPreferences = ({ preferences, setPreferences }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 animate-fade-in relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400"></div>
      <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <Bell className="text-blue-500" size={24} /> System Preferences
      </h2>

      <div className="max-w-2xl space-y-6">
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
          <div>
            <p className="font-bold text-slate-700">Email Notifications</p>
            <p className="text-sm text-slate-500">
              Receive weekly digests and critical alerts
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.emailNotifications}
              onChange={() =>
                setPreferences((p) => ({
                  ...p,
                  emailNotifications: !p.emailNotifications,
                }))
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
          <div>
            <p className="font-bold text-slate-700">SMS Alerts</p>
            <p className="text-sm text-slate-500">
              Receive urgent security notifications
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.smsNotifications}
              onChange={() =>
                setPreferences((p) => ({
                  ...p,
                  smsNotifications: !p.smsNotifications,
                }))
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
          </label>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
            <Layout size={18} /> Dashboard Layout
          </h3>
          <div className="grid grid-cols-2 gap-4 max-w-md">
            <button
              onClick={() =>
                setPreferences({ ...preferences, dashboardLayout: "grid" })
              }
              className={`p-4 border rounded-xl flex flex-col items-center gap-2 transition-all ${
                preferences.dashboardLayout === "grid"
                  ? "border-blue-500 bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-500"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <Layout size={24} className="opacity-50" />
              <span className="text-sm font-bold">Grid View</span>
            </button>

            <button
              onClick={() =>
                setPreferences({ ...preferences, dashboardLayout: "list" })
              }
              className={`p-4 border rounded-xl flex flex-col items-center gap-2 transition-all ${
                preferences.dashboardLayout === "list"
                  ? "border-blue-500 bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-500"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="flex flex-col gap-1 w-6 h-6 justify-center opacity-50">
                <div className="w-full h-1 bg-current rounded"></div>
                <div className="w-full h-1 bg-current rounded"></div>
                <div className="w-full h-1 bg-current rounded"></div>
              </div>
              <span className="text-sm font-bold">List View</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemPreferences;
