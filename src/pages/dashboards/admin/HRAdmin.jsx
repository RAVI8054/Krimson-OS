/**
 * @component HRAdmin
 * @description HR & Staff Administration Dashboard - Premium UI
 */
import React from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { 
  Phone, 
  Mail, 
  Award, 
  Search, 
  Filter, 
  Download, 
  UserPlus,
  Briefcase,
  Clock,
  MoreHorizontal
} from 'lucide-react';

const HRAdmin = () => {
  const { staff } = ADMIN_DATA;

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      
      {/* ========================================
          HEADER SECTION WITH GRADIENT THEME
          ======================================== */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        {/* Background Gradient (Cyan -> Blue -> Pink) */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500" />
        
        {/* Decorative Glass/Blur Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                  Department: Human Resources
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-white/90 bg-black/10 px-2 py-1 rounded-md">
                   {staff.length} Active Records
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white drop-shadow-sm">
                Staff Administration
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                Manage employee directories, track attendance, and oversee performance metrics.
              </p>
            </div>
            
            <div className="flex gap-3">
               <button className="flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl font-bold transition-all border border-white/20 shadow-lg group">
                  <Download size={20} />
                  <span>Export</span>
               </button>
               <button className="flex items-center gap-2 px-5 py-3 bg-white text-blue-600 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                  <UserPlus size={20} />
                  <span>Add Employee</span>
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          TOOLBAR & FILTERS
          ======================================== */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-2 rounded-2xl border border-slate-100 shadow-sm">
         <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
               type="text" 
               placeholder="Search employees by name, ID, or role..." 
               className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-100 text-slate-700 font-medium placeholder:text-slate-400"
            />
         </div>
         
         <div className="flex items-center gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 bg-slate-50 text-slate-600 font-bold rounded-xl hover:bg-slate-100 transition-colors">
               <Filter size={18} />
               <span>Filters</span>
            </button>
            <div className="h-8 w-px bg-slate-200 mx-2 hidden md:block"></div>
            <span className="text-sm font-bold text-slate-500 hidden md:block">Sort by:</span>
            <select className="bg-transparent font-bold text-slate-700 border-none focus:ring-0 cursor-pointer">
               <option>Newest First</option>
               <option>Alphabetical</option>
               <option>Department</option>
            </select>
         </div>
      </div>

      {/* ========================================
          STAFF GRID
          ======================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {staff.map((member) => (
            <div 
               key={member.id} 
               className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group relative overflow-hidden"
            >
               {/* Top Decoration */}
               <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-br from-slate-50 to-slate-100 opacity-50" />
               
               <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                     <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                        {member.name.charAt(0)}
                     </div>
                     <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                        <MoreHorizontal size={20} />
                     </button>
                  </div>

                  <div className="mb-6">
                     <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                     <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                        <Briefcase size={14} />
                        {member.role}
                     </div>
                  </div>

                  <div className="space-y-3 mb-6 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                     <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500 font-medium">ID Number</span>
                        <span className="font-bold text-slate-700 bg-white px-2 py-1 rounded-md border border-slate-100">{member.id}</span>
                     </div>
                     <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500 font-medium">Status</span>
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                           member.status === 'Active' 
                              ? 'bg-emerald-100 text-emerald-700' 
                              : 'bg-red-100 text-red-700'
                        }`}>
                           <div className={`w-1.5 h-1.5 rounded-full ${member.status === 'Active' ? 'bg-emerald-500' : 'bg-red-500'}`} />
                           {member.status}
                        </span>
                     </div>
                     <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500 font-medium flex items-center gap-1.5">
                           <Clock size={14} />
                           Today
                        </span>
                        <span className="font-bold text-slate-700">{member.attendance}</span>
                     </div>
                  </div>

                  <div className="flex gap-3">
                     <button className="flex-1 py-2.5 bg-blue-50 text-blue-600 font-bold rounded-xl text-sm hover:bg-blue-100 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group/btn">
                        <Mail size={16} className="group-hover/btn:scale-110 transition-transform"/>
                        <span>Message</span>
                     </button>
                     <button className="flex-1 py-2.5 bg-slate-50 text-slate-600 font-bold rounded-xl text-sm hover:bg-slate-100 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group/btn">
                        <Phone size={16} className="group-hover/btn:scale-110 transition-transform"/>
                        <span>Call</span>
                     </button>
                     <button className="p-2.5 bg-purple-50 text-purple-600 rounded-xl hover:bg-purple-100 transition-colors" title="Performance">
                        <Award size={18} />
                     </button>
                  </div>
               </div>
            </div>
         ))}
      </div>
      
      <div className="text-center py-6">
         <p className="text-xs text-slate-400 font-medium">
            Showing all {staff.length} staff records • Confidential Information
         </p>
      </div>

    </div>
  );
};

export default HRAdmin;
