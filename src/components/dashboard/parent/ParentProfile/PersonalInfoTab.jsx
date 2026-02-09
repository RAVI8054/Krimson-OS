import React, { useState } from "react";
import { Save, Mail, Phone, MapPin, Plus, ChevronRight } from "lucide-react";

const PersonalInfoTab = ({ user, children }) => {
  const [preferredCommMode, setPreferredCommMode] = useState("Email");

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
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-slate-800">
          Personal Information
        </h2>
        <button
          className={`px-4 py-2 text-white rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-md active:scale-95 bg-gradient-to-r ${theme.gradient}`}
        >
          <Save size={16} /> Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className={`text-xs font-bold uppercase ${theme.text}`}>
            Full Name
          </label>
          <input
            type="text"
            defaultValue={user.name}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 outline-none transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className={`text-xs font-bold uppercase ${theme.text}`}>
            Email Address
          </label>
          <div className="flex items-center gap-2 w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl">
            <Mail size={16} className="text-slate-400" />
            <span className="text-slate-600">admin.parent@krimson.edu</span>
          </div>
        </div>
        <div className="space-y-2">
          <label className={`text-xs font-bold uppercase ${theme.text}`}>
            Phone Number
          </label>
          <div className="flex items-center gap-2 w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl">
            <Phone size={16} className="text-slate-400" />
            <span className="text-slate-600">+65 9123 4567</span>
          </div>
        </div>
        <div className="space-y-2">
          <label className={`text-xs font-bold uppercase ${theme.text}`}>
            Address
          </label>
          <div className="flex items-center gap-2 w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl">
            <MapPin size={16} className="text-slate-400" />
            <span className="text-slate-600">12, Orchard Road, Singapore</span>
          </div>
        </div>

        {/* Preferred Communication */}
        <div className="col-span-1 md:col-span-2 space-y-2">
          <label className={`text-xs font-bold uppercase ${theme.text}`}>
            Preferred Communication Mode
          </label>
          <div className="flex gap-2">
            {["Email", "SMS", "App"].map((mode) => (
              <button
                key={mode}
                onClick={() => setPreferredCommMode(mode)}
                className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${
                  preferredCommMode === mode
                    ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                    : "bg-white text-slate-500 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Linked Students moved here */}
        <div className="col-span-1 md:col-span-2 mt-4 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <label className={`text-xs font-bold uppercase ${theme.text}`}>
              Linked Students
            </label>
            <button
              className={`px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm flex items-center gap-1.5 transition-all hover:shadow-md hover:scale-105 active:scale-95 bg-gradient-to-r ${theme.gradient}`}
            >
              <Plus size={14} /> Add Student
            </button>
          </div>
          <div className="space-y-3">
            {children.map((child) => (
              <div
                key={child.id}
                className="flex items-center gap-4 p-3 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors bg-white group cursor-pointer hover:border-blue-200 hover:shadow-sm"
              >
                <div className="relative">
                  <img
                    src={child.photo}
                    alt={child.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-100"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 text-sm group-hover:text-blue-600 transition-colors">
                    {child.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {child.class} • ID: {child.id}
                  </p>
                </div>
                <ChevronRight
                  className="text-slate-300 group-hover:text-blue-500 transition-colors"
                  size={18}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoTab;
