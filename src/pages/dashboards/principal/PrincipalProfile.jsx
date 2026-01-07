import React from 'react';
import { User, Shield, PenTool, Lock } from 'lucide-react';

const PrincipalProfile = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Principal Profile & Credentials</h1>
        <p className="text-slate-500">Manage profile, access, and digital signatures</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="h-32 bg-slate-800 relative">
              <div className="absolute -bottom-12 left-8">
                  <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg">
                      <div className="w-full h-full rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
                          <User size={40} />
                      </div>
                  </div>
              </div>
          </div>
          <div className="pt-14 px-8 pb-8">
              <div className="flex justify-between items-start">
                  <div>
                      <h2 className="text-2xl font-bold text-slate-800">Dr. Robert Principal</h2>
                      <p className="text-slate-500">Head of Institution • Since 2018</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">Edit Profile</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="space-y-4">
                      <h3 className="font-bold text-slate-700 border-b pb-2">Professional Details</h3>
                      <div className="grid grid-cols-3 gap-y-4 text-sm">
                          <span className="text-slate-500">Employee ID</span>
                          <span className="col-span-2 font-medium">P-1001</span>
                          
                          <span className="text-slate-500">Email</span>
                          <span className="col-span-2 font-medium">principal@school.edu</span>
                          
                          <span className="text-slate-500">Qualification</span>
                          <span className="col-span-2 font-medium">PhD in Educational Leadership</span>
                      </div>
                  </div>

                  <div className="space-y-4">
                      <h3 className="font-bold text-slate-700 border-b pb-2">Security & Access</h3>
                      <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                              <div className="flex items-center gap-3">
                                  <Shield size={20} className="text-green-600"/>
                                  <div>
                                      <p className="font-bold text-sm">Admin Access Level</p>
                                      <p className="text-xs text-slate-500">Full System Control</p>
                                  </div>
                              </div>
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Active</span>
                          </div>
                          
                          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                              <div className="flex items-center gap-3">
                                  <PenTool size={20} className="text-blue-600"/>
                                  <div>
                                      <p className="font-bold text-sm">Digital Signature</p>
                                      <p className="text-xs text-slate-500">Valid until Dec 2026</p>
                                  </div>
                              </div>
                              <button className="text-xs text-blue-600 font-bold hover:underline">Manage</button>
                          </div>

                           <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
                              <div className="flex items-center gap-3">
                                  <Lock size={20} className="text-red-600"/>
                                  <div>
                                      <p className="font-bold text-sm">Proxy Access</p>
                                      <p className="text-xs text-slate-500">Vice Principal (Temp)</p>
                                  </div>
                              </div>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600"></div>
                              </label>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default PrincipalProfile;
