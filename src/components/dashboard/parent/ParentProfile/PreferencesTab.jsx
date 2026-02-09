import React from "react";
import { Mail, Smartphone, Bell } from "lucide-react";

const PreferencesTab = ({ notificationPrefs, toggleNotification }) => {
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
        Notification Preferences
      </h2>

      <div className="space-y-6">
        {[
          {
            id: "email",
            label: "Email Alerts",
            icon: Mail,
            desc: "Receive updates via email",
          },
          {
            id: "sms",
            label: "SMS Notifications",
            icon: Smartphone,
            desc: "Get urgent updates via SMS",
          },
          {
            id: "push",
            label: "Push Notifications",
            icon: Bell,
            desc: "In-app alerts and updates",
          },
        ].map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div
                className={`p-2 rounded-xl ${notificationPrefs[item.id] ? "bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-400"}`}
              >
                <item.icon size={20} />
              </div>
              <div>
                <p className="font-bold text-slate-700">{item.label}</p>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
            </div>
            {/* Toggle Switch */}
            <button
              onClick={() => toggleNotification(item.id)}
              className={`w-12 h-7 rounded-full transition-colors relative ${
                notificationPrefs[item.id] ? "bg-cyan-500" : "bg-slate-200"
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  notificationPrefs[item.id] ? "left-6" : "left-1"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreferencesTab;
