import React from 'react';
import { ShieldCheck, Upload, AlertCircle, CheckSquare } from 'lucide-react';

const ComplianceCenter = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">School Compliance & Audit Center</h1>
        <p className="text-slate-500">Inspection readiness and regulatory tracking</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm border-l-4 border-l-green-500">
              <h3 className="text-slate-500 font-medium">Audit Readiness</h3>
              <p className="text-3xl font-bold text-slate-800 mt-2">88%</p>
              <p className="text-xs text-green-600 font-bold mt-1">GOOD STANDING</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-slate-500 font-medium">Documents Pending</h3>
              <p className="text-3xl font-bold text-slate-800 mt-2">14</p>
              <p className="text-xs text-slate-400 mt-1">Teacher certifications, Safety logs</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-slate-500 font-medium">Next Inspection</h3>
              <p className="text-3xl font-bold text-slate-800 mt-2">12d</p>
              <p className="text-xs text-blue-500 mt-1">Fire Safety Audit</p>
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold mb-4 flex items-center gap-2"><CheckSquare size={18}/> Compliance Checklist</h3>
              <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg opacity-50">
                      <input type="checkbox" checked readOnly className="w-5 h-5 text-green-600 rounded" />
                      <span className="line-through text-slate-500">Submit Enrollment Data to Ministry</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                      <span className="text-slate-700">Update Teacher Qualification Records</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                      <input type="checkbox" className="w-5 h-5 text-red-600 rounded" />
                      <div className="flex-1">
                          <span className="text-red-700 font-medium">Fire Drill Log Submission</span>
                          <p className="text-xs text-red-500">Overdue by 2 days</p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold mb-4 flex items-center gap-2"><Upload size={18}/> Document Upload</h3>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition cursor-pointer">
                      <Upload size={32} className="text-slate-400 mb-2" />
                      <p className="text-sm font-medium text-slate-600">Drag files here or click to upload</p>
                      <p className="text-xs text-slate-400 mt-1">Supports PDF, DOCX (Max 25MB)</p>
                  </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold mb-4 text-red-600 flex items-center gap-2"><AlertCircle size={18}/> Open Issues</h3>
                  <ul className="list-disc list-inside text-sm space-y-2 text-slate-700">
                      <li>Lab safety certificate expired (Chemistry Lab 2).</li>
                      <li>3 Staff members missing background check renewal.</li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ComplianceCenter;
