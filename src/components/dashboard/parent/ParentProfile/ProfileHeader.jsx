import React from "react";
import { User, Lock, Bell, Shield, FileText, Camera } from "lucide-react";

const ProfileHeader = ({ user, activeTab, setActiveTab, onLogout }) => {
  const theme = {
    gradient: "from-cyan-400 via-blue-400 to-pink-400",
    text: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  };

  return (
    <div className="w-full lg:w-64 flex-shrink-0">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden sticky top-8">
        {/* Dynamic Gradient Header in Card */}
        <div
          className={`h-32 bg-gradient-to-r ${theme.gradient} relative overflow-hidden`}
        >
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-white opacity-20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 -left-8 w-24 h-24 bg-pink-300 opacity-30 rounded-full blur-xl"></div>
          <div className="absolute top-4 left-1/3 w-16 h-16 bg-blue-200 opacity-25 rounded-full blur-lg"></div>
        </div>
        <div className="px-6 pb-6 -mt-16 flex flex-col items-center text-center relative z-10">
          <div className="relative group cursor-pointer mb-3">
            <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg">
              <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center text-slate-400 overflow-hidden border border-slate-100">
                <img
                  src={user.avatar}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera size={20} className="text-white" />
            </div>
          </div>
          <h3 className="font-bold text-slate-800 text-lg">{user.name}</h3>
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full mt-1 ${theme.bg} ${theme.text} uppercase tracking-wider`}
          >
            {user.role}
          </span>
        </div>
        <nav className="p-3 space-y-1">
          {[
            { id: "profile", label: "Personal Info", icon: <User size={18} /> },
            {
              id: "security",
              label: "Security & Login",
              icon: <Lock size={18} />,
            },
            {
              id: "preferences",
              label: "Preferences",
              icon: <Bell size={18} />,
            },
            {
              id: "permissions",
              label: "Permissions",
              icon: <Shield size={18} />,
            },
            {
              id: "activity",
              label: "Activity Log",
              icon: <FileText size={18} />,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                activeTab === tab.id
                  ? "bg-white text-blue-600 shadow-md font-bold"
                  : "text-slate-500 hover:bg-white/10 hover:text-slate-900"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-red-500 hover:bg-red-50 transition-all mt-4 border-t border-slate-100"
          >
            <Shield size={18} /> Logout
          </button>
        </nav>
      </div>
    </div>
  );
};

export default ProfileHeader;
