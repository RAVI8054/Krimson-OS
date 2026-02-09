import React from "react";
import { Shield, CheckCircle } from "lucide-react";

const RolePermissions = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 animate-fade-in relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400"></div>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-100 text-blue-600">
          <Shield size={24} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-800">
            Role & Permissions
          </h2>
          <p className="text-slate-500 text-sm">
            You are logged in as{" "}
            <span className="font-bold text-slate-700">Student</span>
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm font-bold uppercase text-blue-600">
          Granted Capabilities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            "View Grades",
            "View Timetable",
            "Submit Assignments",
            "View Attendance",
            "Access Library",
          ].map((perm, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl text-sm font-medium text-slate-700"
            >
              <CheckCircle size={16} className="flex-shrink-0 text-blue-600" />
              {perm}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RolePermissions;
