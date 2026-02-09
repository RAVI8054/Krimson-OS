import React from "react";
import { Shield, Gavel, CheckCircle, Lock, Globe, Heart } from "lucide-react";

const GovtRegulationsSection = () => {
  return (
    <div className="animate-slideDown space-y-6">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl">
            <Shield size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Student Rights & Regulations
            </h2>
            <p className="text-slate-500">
              Essential information about legal frameworks and student welfare
              in Singapore.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Compulsory Education Act */}
          <div className="p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group bg-gradient-to-br from-slate-50 to-white">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm text-indigo-600 border border-slate-100">
                  <Gavel size={24} />
                </div>
                <h3 className="font-bold text-slate-800 text-lg">
                  Compulsory Education Act
                </h3>
              </div>
              <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-lg border border-indigo-200">
                MOE Singapore
              </span>
            </div>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              Under the Compulsory Education Act, all Singaporean children
              residing in Singapore are required to attend school regularly.
              This ensures every child has the opportunity to receive a core
              education.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle size={14} className="text-green-500" />
                <span>Mandatory primary education</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle size={14} className="text-green-500" />
                <span>Regular attendance checks</span>
              </div>
            </div>
            <button className="w-full py-2 bg-white border border-slate-300 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
              Read Full Act
            </button>
          </div>

          {/* PDPA Compliance */}
          <div className="p-6 rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all group bg-gradient-to-br from-slate-50 to-white">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm text-purple-600 border border-slate-100">
                  <Lock size={24} />
                </div>
                <h3 className="font-bold text-slate-800 text-lg">
                  PDPA & Data Privacy
                </h3>
              </div>
              <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-lg border border-purple-200">
                Data Protection
              </span>
            </div>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              Your personal data is protected under the Personal Data Protection
              Act (PDPA). Schools collect data only for educational purposes and
              ensure strict confidentiality.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle size={14} className="text-green-500" />
                <span>Consent required for data use</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle size={14} className="text-green-500" />
                <span>Right to access your records</span>
              </div>
            </div>
            <button className="w-full py-2 bg-white border border-slate-300 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
              View Privacy Policy
            </button>
          </div>

          {/* Cyber Wellness */}
          <div className="p-6 rounded-2xl border border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all group bg-gradient-to-br from-slate-50 to-white">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm text-cyan-600 border border-slate-100">
                  <Globe size={24} />
                </div>
                <h3 className="font-bold text-slate-800 text-lg">
                  Cyber Wellness
                </h3>
              </div>
              <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs font-bold rounded-lg border border-cyan-200">
                Digital Safety
              </span>
            </div>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              Guidelines to ensure safe and responsible use of technology.
              Includes topics on cyberbullying, netiquette, and managing screen
              time effectively.
            </p>
            <button className="w-full py-2 bg-white border border-slate-300 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
              Cyber Wellness Tips
            </button>
          </div>

          {/* Student Welfare */}
          <div className="p-6 rounded-2xl border border-slate-200 hover:border-rose-300 hover:shadow-md transition-all group bg-gradient-to-br from-slate-50 to-white">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm text-rose-600 border border-slate-100">
                  <Heart size={24} />
                </div>
                <h3 className="font-bold text-slate-800 text-lg">
                  Student Welfare
                </h3>
              </div>
              <span className="px-2 py-1 bg-rose-100 text-rose-700 text-xs font-bold rounded-lg border border-rose-200">
                Support
              </span>
            </div>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              Information on financial assistance schemes (FAS), bursaries, and
              counseling support available for students in need.
            </p>
            <button className="w-full py-2 bg-white border border-slate-300 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
              Check Eligibility
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovtRegulationsSection;
