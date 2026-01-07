import React from 'react';
import {
  Users, FolderOpen, Database, Plus, FileText, Download, History, AlertTriangle
} from 'lucide-react';
import { Card, StatCard } from './SharedComponents';

const RECORDS_DATA = {
  title: 'Student Records & Repository',
  description: 'Centralized document management and profiles.',
  stats: [
    { label: 'Total Students', value: '1,240', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Missing Docs', value: '34', icon: AlertTriangle, color: 'text-rose-600', bg: 'bg-rose-50' },
  ],
  students: [
    { id: 'S-2024-001', name: 'Aaliyah Tan', class: '10-A', guardian: 'Mr. Tan', lastUpdated: '2025-01-04', user: 'Admin' },
    { id: 'S-2024-002', name: 'Ben Lim', class: '09-B', guardian: 'Mrs. Lim', lastUpdated: '2025-01-03', user: 'Registrar' },
  ]
};

const RecordsView = () => {
  const data = RECORDS_DATA;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header Area with Title & Actions */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-2 gap-4">
          <div>
             <h2 className="text-3xl font-bold text-slate-800 leading-tight">{data.title}</h2>
             <p className="text-slate-500 mt-1 font-medium">{data.description}</p>
          </div>
      </div>

       {/* KPI Stats Row (If applicable, though RecordsView had stats in DATA_STORE, it wasn't rendered originally in RecordsView code block but in SmartScreen) 
           Originally SmartScreen rendered stats for ALL views. RecordsView only had table logic. 
           I should include stats here.
       */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {data.stats.map((stat, i) => <StatCard key={i} {...stat} />)}
      </div>

      {/* Main Content */}
      <div className="flex justify-between items-center bg-white/50 p-4 rounded-[2rem] border border-white/50 backdrop-blur-sm">
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl shadow-sm text-slate-700 font-bold text-sm">
            <FolderOpen className="w-4 h-4 text-blue-500" /> Active Records
          </button>
          <button className="flex items-center gap-2 px-4 py-3 hover:bg-white/50 rounded-xl text-slate-500 font-bold text-sm transition-colors">
            <Database className="w-4 h-4" /> Archived
          </button>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-200 font-bold text-sm hover:bg-blue-700 transition-all hover:scale-105">
          <Plus className="w-4 h-4" /> Add Student
        </button>
      </div>

      <Card className="p-0 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
            <tr>
              <th className="p-4">Student ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Class</th>
              <th className="p-4">Guardian</th>
              <th className="p-4">Last Updated</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.students.map((student) => (
              <tr key={student.id} className="hover:bg-slate-50/50 group">
                <td className="p-4 font-mono text-slate-400 text-xs">{student.id}</td>
                <td className="p-4 font-bold text-slate-700">{student.name}</td>
                <td className="p-4 text-slate-600">{student.class}</td>
                <td className="p-4 text-slate-600">{student.guardian}</td>
                <td className="p-4 text-slate-500 text-xs">
                  {student.lastUpdated}<br/><span className="text-[10px] opacity-70">by {student.user}</span>
                </td>
                <td className="p-4 flex gap-2 opacity-100">
                  <button className="p-2 hover:bg-blue-50 rounded-lg text-blue-600 transition-colors" title="Upload Docs"><FileText className="w-4 h-4" /></button>
                  <button className="p-2 hover:bg-purple-50 rounded-lg text-purple-600 transition-colors" title="Export PDF"><Download className="w-4 h-4" /></button>
                  <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 transition-colors" title="History"><History className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default RecordsView;
