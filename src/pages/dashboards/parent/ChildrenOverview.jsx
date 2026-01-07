import React from 'react';
import { PARENT_DATA } from '../../../data/parentData';
import { User, TrendingUp, Award, ArrowRight } from 'lucide-react';

const ChildrenOverview = () => {
  const { children } = PARENT_DATA;

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-8 rounded-3xl text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold">My Children</h1>
          <p className="opacity-90">Overview of enrolled students linked to your account.</p>
        </div>
        <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {children.map((child, index) => (
          <div key={index} className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <img src={child.photo} alt={child.name} className="w-20 h-20 rounded-2xl object-cover shadow-sm" />
              <div>
                <h2 className="text-xl font-bold text-slate-800">{child.name}</h2>
                <p className="text-slate-500">{child.class}</p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full mt-2">Active Student</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-2xl">
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <TrendingUp size={18} />
                  <span className="text-xs font-bold uppercase">Growth</span>
                </div>
                <span className="text-2xl font-bold text-slate-800">{child.academicGrowth}%</span>
              </div>
              <div className="bg-purple-50 p-4 rounded-2xl">
                <div className="flex items-center gap-2 text-purple-600 mb-2">
                  <User size={18} />
                  <span className="text-xs font-bold uppercase">Attendance</span>
                </div>
                <span className="text-2xl font-bold text-slate-800">{child.attendance}%</span>
              </div>
            </div>

            <button className="w-full py-3 rounded-xl border-2 border-slate-100 text-slate-600 font-semibold hover:border-blue-500 hover:text-blue-500 transition-colors flex justify-center items-center gap-2">
              View Full Profile <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChildrenOverview;
