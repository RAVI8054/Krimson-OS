import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Users, FileText, CheckCircle, Plus, Search, Filter, Eye, XCircle, UserCheck
} from 'lucide-react';
import { Card, StatCard, Badge } from './SharedComponents';

const ADMISSIONS_DATA = {
  title: 'Admissions Workflow',
  description: 'Monitor inquiries, applications, and enrollments.',
  stats: [
    { label: 'New Inquiries', value: '18', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Pending Docs', value: '12', icon: FileText, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Ready to Enroll', value: '7', icon: CheckCircle, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  ],
  funnel: [
    { step: 'Inquiry', count: 45, color: 'bg-blue-500' },
    { step: 'Application', count: 32, color: 'bg-indigo-500' },
    { step: 'Verification', count: 12, color: 'bg-purple-500' },
    { step: 'Enrolled', count: 8, color: 'bg-emerald-500' },
  ],
  applicants: [
    { id: 'A-101', name: 'Tan Wei Ming', grade: 'G1', nationality: 'Singaporean', status: 'Verification', date: '2025-01-02' },
    { id: 'A-102', name: 'Sarah Jones', grade: 'G4', nationality: 'American', status: 'Pending', date: '2025-01-03' },
    { id: 'A-103', name: 'Ravi Patel', grade: 'G9', nationality: 'Indian', status: 'Approved', date: '2025-01-04' },
  ]
};

const AdmissionsView = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    const data = ADMISSIONS_DATA;

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header Area with Title & Actions */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-2 gap-4">
                <div>
                   <h2 className="text-3xl font-bold text-slate-800 leading-tight">{data.title}</h2>
                   <p className="text-slate-500 mt-1 font-medium">{data.description}</p>
                </div>
                <div className="flex items-center gap-3">
                     <button 
                       onClick={() => setShowAddModal(true)}
                       className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl shadow-md shadow-blue-200 font-bold text-sm hover:bg-blue-700 transition-all"
                     >
                       <Plus className="w-5 h-5" /> <span className="hidden md:inline">Add Inquiry</span>
                     </button>
                </div>
            </div>

            {/* KPI Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                {data.stats.map((stat, i) => <StatCard key={i} {...stat} />)}
            </div>

            {/* Content */}
            
            {/* Add Inquiry Modal */}
            {showAddModal && createPortal(
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
                   <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200 lg:max-w-2xl">
                     <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                       <div className="flex items-center gap-3">
                         <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"><Plus className="w-6 h-6"/></div>
                         <div>
                            <h3 className="font-bold text-lg text-slate-800">New Student Inquiry</h3>
                            <p className="text-xs text-slate-500">Enter prospective student details below.</p>
                         </div>
                       </div>
                       <button onClick={() => setShowAddModal(false)} className="p-2 hover:bg-slate-200 rounded-full text-slate-500 transition-colors"><XCircle className="w-6 h-6" /></button>
                     </div>
                     
                     <div className="p-8 space-y-6">
                       <div className="grid grid-cols-2 gap-6">
                         <div className="space-y-2">
                           <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Student Name</label>
                           <div className="relative">
                             <Users className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                             <input type="text" placeholder="Full Name" className="w-full pl-10 pr-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500 transition-all font-bold text-slate-700" />
                           </div>
                         </div>
                         <div className="space-y-2">
                           <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Grade Level</label>
                           <select className="w-full p-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500 transition-all font-bold text-slate-700 cursor-pointer">
                             <option>Select Grade...</option>
                             <option>Grade 1</option>
                             <option>Grade 2</option>
                             <option>Grade 3</option>
                             <option>Grade 4</option>
                             <option>Grade 5</option>
                             <option>Grade 6</option>
                             <option>Grade 7</option>
                             <option>Grade 8</option>
                             <option>Grade 9</option>
                             <option>Grade 10</option>
                             <option>Grade 11</option>
                             <option>Grade 12</option>
                           </select>
                         </div>
                       </div>
        
                       <div className="space-y-2">
                         <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nationality & Status</label>
                         <input type="text" placeholder="e.g. Singaporean • PR" className="w-full p-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500 transition-all font-bold text-slate-700" />
                       </div>
                       
                       <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                         <h4 className="font-bold text-sm text-slate-800 mb-4 flex items-center gap-2"><UserCheck className="w-4 h-4 text-slate-400"/> Guardian Contact</h4>
                         <div className="grid grid-cols-2 gap-4">
                           <div className="space-y-2">
                             <label className="text-[10px] font-bold text-slate-400 uppercase">Guardian Name</label>
                             <input type="text" className="w-full p-2.5 bg-white rounded-lg border border-slate-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-sm font-semibold" />
                           </div>
                           <div className="space-y-2">
                             <label className="text-[10px] font-bold text-slate-400 uppercase">Phone Number</label>
                             <input type="text" className="w-full p-2.5 bg-white rounded-lg border border-slate-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-sm font-semibold" />
                           </div>
                         </div>
                         <div className="space-y-2 mt-4">
                             <label className="text-[10px] font-bold text-slate-400 uppercase">Email Address</label>
                             <input type="email" className="w-full p-2.5 bg-white rounded-lg border border-slate-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-sm font-semibold" />
                         </div>
                       </div>
        
                       <div className="flex gap-3 pt-2">
                         <button onClick={() => setShowAddModal(false)} className="flex-1 py-3 text-slate-600 font-bold hover:bg-slate-100 rounded-xl transition-colors">Cancel</button>
                         <button className="flex-[2] py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2 transform active:scale-95">
                           <Plus className="w-5 h-5" /> Create Inquiry Record
                         </button>
                       </div>
                     </div>
                   </div>
                </div>,
                document.body
            )}
        
            {/* Funnel Widget */}
            <Card>
                <h3 className="font-bold text-slate-800 mb-6">Admissions Pipeline</h3>
                <div className="flex items-center justify-between gap-2">
                  {data.funnel.map((step, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center relative group">
                      <div className={`w-full h-4 rounded-full ${step.color} opacity-20 group-hover:opacity-100 transition-all mb-3`}></div>
                      <div className={`absolute top-0 w-full h-4 rounded-full ${step.color} scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
                      <span className="text-2xl font-bold text-slate-700">{step.count}</span>
                      <span className="text-xs uppercase font-bold text-slate-400">{step.step}</span>
                    </div>
                  ))}
                </div>
            </Card>
        
            {/* Search & List */}
            <Card className="p-0 overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="font-bold text-lg text-slate-800">Recent Applications</h3>
                  <div className="flex gap-2">
                    <div className="relative">
                       <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                       <input placeholder="Search Name..." className="bg-slate-50 border-none rounded-xl pl-10 pr-4 py-2 text-sm w-56 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all" />
                    </div>
                    <button className="p-2 bg-slate-100 rounded-xl text-slate-600 hover:bg-slate-200"><Filter className="w-4 h-4" /></button>
                  </div>
                </div>
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
                    <tr>
                      <th className="p-4">ID</th>
                      <th className="p-4">Applicant</th>
                      <th className="p-4">Grade</th>
                      <th className="p-4">Nationality</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Est. Date</th>
                      <th className="p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm md:text-base">
                    {data.applicants.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50/50">
                        <td className="p-4 font-mono text-slate-400 text-xs">{item.id}</td>
                        <td className="p-4 font-bold text-slate-700">{item.name}</td>
                        <td className="p-4 text-slate-600">{item.grade}</td>
                        <td className="p-4 text-slate-600">{item.nationality}</td>
                        <td className="p-4">
                          <Badge color={item.status === 'Approved' ? 'green' : item.status === 'Verification' ? 'purple' : 'amber'}>
                            {item.status}
                          </Badge>
                        </td>
                        <td className="p-4 text-slate-500">{item.date}</td>
                        <td className="p-4 flex gap-2">
                          <button className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg hover:bg-blue-100 flex items-center gap-1">
                            <Eye className="w-3 h-3"/> Review
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </Card>
        </div>
    );
};

export default AdmissionsView;
