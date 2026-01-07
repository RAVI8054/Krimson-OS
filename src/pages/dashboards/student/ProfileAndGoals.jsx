import React from 'react';
import { STUDENT_DATA } from '../../../data/studentData';
import { Edit2, Badge, Trophy, Heart } from 'lucide-react';

const ProfileAndGoals = () => {
  const { user, profile } = STUDENT_DATA;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Profile Header */}
      <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center relative overflow-visible mt-12">
         <div className="absolute -top-12 w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden bg-slate-200">
            <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
         </div>
         <button className="absolute top-4 right-4 p-2 text-slate-400 hover:text-indigo-600"><Edit2 size={16}/></button>

         <div className="mt-12 text-center">
            <h1 className="text-2xl font-bold text-slate-800">{user.name}</h1>
            <p className="text-slate-500 text-sm font-medium">{user.role} • {user.section}</p>
            <div className="mt-4 flex gap-2 justify-center">
               <span className="px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full">{user.house}</span>
               <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">Scholar Badge</span>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {/* Goals */}
         <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="flex justify-between items-center mb-6">
               <h3 className="font-bold text-slate-800 flex items-center gap-2"><TargetIcon className="text-indigo-500"/> My Goals</h3>
               <button className="text-xs font-bold text-indigo-600">+ Add</button>
            </div>
            <ul className="space-y-3">
               {profile.goals.map((g, i) => (
                  <li key={i} className="flex items-center gap-3 p-3 border border-slate-100 rounded-xl">
                     <div className="w-5 h-5 rounded-full border-2 border-slate-200 cursor-pointer hover:border-indigo-500"></div>
                     <span className="text-sm text-slate-700 font-medium">{g}</span>
                  </li>
               ))}
            </ul>
         </div>

         {/* Interests */}
         <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2"><Heart className="text-pink-500"/> Interests & Clubs</h3>
            <div className="flex flex-wrap gap-2 mb-6">
               {profile.interests.map(int => (
                  <span key={int} className="px-3 py-1.5 bg-pink-50 text-pink-600 text-xs font-bold rounded-lg border border-pink-100">{int}</span>
               ))}
            </div>
            <h4 className="text-xs font-bold text-slate-400 uppercase mb-3">Active Clubs</h4>
            <div className="space-y-2">
               {profile.clubs.map(club => (
                  <div key={club} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                     <div className="w-2 h-2 bg-indigo-500 rounded-full"></div> {club}
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

// Helper Icon
const TargetIcon = ({ className }) => (
   <svg className={`w-5 h-5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
);

export default ProfileAndGoals;
