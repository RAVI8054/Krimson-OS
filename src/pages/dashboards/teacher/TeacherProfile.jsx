import React from 'react';
import { TEACHER_DATA } from '../../../data/teacherData';
import { Award, Briefcase, Mail, Phone, MapPin, Share2 } from 'lucide-react';

const TeacherProfile = () => {
  const { user, portfolio } = TEACHER_DATA;

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header Card */}
      <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-rose-500 to-orange-400"></div>
         
         <img src={user.avatar} alt="Profile" className="w-32 h-32 rounded-full border-4 border-white shadow-lg relative z-10 mt-12 bg-white" />
         
         <div className="flex-1 mt-16 text-center md:text-left relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
               <div>
                  <h1 className="text-3xl font-bold text-slate-800">{user.name}</h1>
                  <p className="text-rose-500 font-bold">{user.role}</p>
               </div>
               <button className="mt-4 md:mt-0 px-6 py-2 border border-slate-200 rounded-xl text-slate-600 font-bold text-sm hover:bg-slate-50 flex items-center gap-2">
                  <Share2 size={16} /> Share Portfolio
               </button>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
               <span className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg">
                  <Briefcase size={14}/> {user.experience} Exp.
               </span>
               <span className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg">
                  <Mail size={14}/> sarah.m@school.edu
               </span>
               <span className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg">
                  <MapPin size={14}/> Science Block, Room 204
               </span>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {/* Professional Info */}
         <div className="bg-white rounded-3xl p-8 shadow-sm space-y-6">
            <h3 className="font-bold text-slate-800 text-lg">Professional Details</h3>
            
            <div>
               <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Subjects Taught</h4>
               <div className="flex flex-wrap gap-2">
                  {user.subjects.map(s => (
                     <span key={s} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg">{s}</span>
                  ))}
               </div>
            </div>

            <div>
               <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Qualifications</h4>
               <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                  {user.qualifications.map(q => <li key={q}>{q}</li>)}
               </ul>
            </div>
         </div>

         {/* Portfolio & Achievements */}
         <div className="bg-white rounded-3xl p-8 shadow-sm space-y-6">
            <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2">
               <Award className="text-yellow-500"/> Portfolio Highlights
            </h3>
            
            <div className="space-y-4">
               <div className="p-4 border border-slate-100 rounded-2xl">
                  <h4 className="font-bold text-slate-700 text-sm mb-2">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                     {portfolio.certifications.map(c => (
                        <span key={c} className="px-2 py-1 bg-yellow-50 text-yellow-700 text-[10px] font-bold rounded border border-yellow-100">{c}</span>
                     ))}
                  </div>
               </div>

               <div className="p-4 border border-slate-100 rounded-2xl">
                  <h4 className="font-bold text-slate-700 text-sm mb-2">Workshops Attended</h4>
                  <ul className="space-y-1">
                     {portfolio.workshops.map(w => (
                        <li key={w} className="text-xs text-slate-500 flex items-center gap-2">
                           <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> {w}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
