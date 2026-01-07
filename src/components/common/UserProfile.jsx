import React from 'react';
import { Mail, MapPin, Briefcase, Edit2, Share2, Award, Heart, Target } from 'lucide-react';

/**
 * Common Screen 10: Profile & Access Management
 * Roles: All Roles (Student, Teacher, Admin, Parent, etc.)
 * 
 * Used in:
 * - src/pages/dashboards/teacher/TeacherProfile.jsx
 * - src/pages/dashboards/student/ProfileAndGoals.jsx
 * 
 * Logic:
 * - Displays user profile header with avatar and role info.
 * - Renders specific sections based on role (Professional vs Academic).
 */

const UserProfile = ({ role, user, detailedInfo }) => {
  const isStudent = role === 'student';
  const isTeacher = role === 'teacher';

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Common Header */}
      <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden">
         {/* Background Decoration */}
         <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-r ${isStudent ? 'from-cyan-400 via-blue-400 to-pink-400' : 'from-indigo-500 to-purple-500'}`}></div>
         
         {/* Avatar */}
         <div className="relative z-10 mt-12">
            <img src={user.avatar || "https://via.placeholder.com/150"} alt="Profile" className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-white object-cover" />
         </div>
         
         {/* Info */}
         <div className="flex-1 mt-16 text-center md:text-left relative z-10 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center">
               <div>
                  <h1 className="text-3xl font-bold text-slate-800">{user.name}</h1>
                  <p className="text-indigo-600 font-bold uppercase text-sm tracking-wide mt-1">{user.role} {user.section && `• ${user.section}`}</p>
               </div>
               <button className="mt-4 md:mt-0 px-4 py-2 border border-slate-200 rounded-xl text-slate-600 font-bold text-sm hover:bg-slate-50 flex items-center gap-2 bg-white/80 backdrop-blur-sm">
                  <Edit2 size={16} /> Edit Profile
               </button>
            </div>
            
            {/* Badges / Stats */}
            <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
               {user.house && (
                   <span className="px-3 py-1.5 bg-red-50 text-red-600 text-xs font-bold rounded-lg border border-red-100">
                      House: {user.house}
                   </span>
               )}
               {user.email && (
                   <span className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg">
                      <Mail size={14}/> {user.email}
                   </span>
               )}
               {user.experience && (
                   <span className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg">
                      <Briefcase size={14}/> {user.experience} Exp.
                   </span>
               )}
               {user.location && (
                   <span className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg">
                      <MapPin size={14}/> {user.location}
                   </span>
               )}
            </div>
         </div>
      </div>

      {/* Role Specific Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         
         {/* Left Column */}
         <div className="bg-white rounded-3xl p-8 shadow-sm space-y-6">
            <h3 className="font-bold text-slate-800 text-lg border-b border-slate-100 pb-4 mb-4">
                {isTeacher ? "Professional Details" : "Academic Goals"}
            </h3>
            
            {isTeacher && (
                <>
                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Subjects Taught</h4>
                        <div className="flex flex-wrap gap-2">
                           {user.subjects?.map(s => (
                              <span key={s} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg">{s}</span>
                           ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase mb-2 pt-4">Qualifications</h4>
                        <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                           {user.qualifications?.map(q => <li key={q}>{q}</li>)}
                        </ul>
                    </div>
                </>
            )}

            {isStudent && (
                <ul className="space-y-3">
                   {detailedInfo?.goals?.map((g, i) => (
                      <li key={i} className="flex items-center gap-3 p-3 border border-slate-100 rounded-xl hover:border-indigo-200 transition-colors">
                         <Target size={20} className="text-indigo-500" />
                         <span className="text-sm text-slate-700 font-medium">{g}</span>
                      </li>
                   ))}
                </ul>
            )}
         </div>

         {/* Right Column */}
         <div className="bg-white rounded-3xl p-8 shadow-sm space-y-6">
            <h3 className="font-bold text-slate-800 text-lg border-b border-slate-100 pb-4 mb-4 flex items-center gap-2">
               {isTeacher ? <><Award className="text-yellow-500"/> Portfolio Highlights</> : <><Heart className="text-pink-500"/> Interests & Clubs</>}
            </h3>

            {isTeacher && (
                <div className="space-y-4">
                    <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50/50">
                        <h4 className="font-bold text-slate-700 text-sm mb-2">Certifications</h4>
                        <div className="flex flex-wrap gap-2">
                            {detailedInfo?.certifications?.map(c => (
                                <span key={c} className="px-2 py-1 bg-white text-slate-600 text-[10px] font-bold rounded border border-slate-200 shadow-sm">{c}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <ul className="space-y-2">
                            {detailedInfo?.workshops?.map(w => (
                                <li key={w} className="text-xs text-slate-500 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> {w}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {isStudent && (
                <>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {detailedInfo?.interests?.map(int => (
                            <span key={int} className="px-3 py-1.5 bg-pink-50 text-pink-600 text-xs font-bold rounded-lg border border-pink-100">{int}</span>
                        ))}
                    </div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-3">Active Clubs</h4>
                    <div className="space-y-2">
                        {detailedInfo?.clubs?.map(club => (
                            <div key={club} className="flex items-center gap-3 text-sm font-bold text-slate-600 p-2 hover:bg-slate-50 rounded-lg transition-colors">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div> {club}
                            </div>
                        ))}
                    </div>
                </>
            )}
         </div>

      </div>
    </div>
  );
};

export default UserProfile;
