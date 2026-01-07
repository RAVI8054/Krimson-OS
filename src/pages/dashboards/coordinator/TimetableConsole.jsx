import React from 'react';
import { Calendar, AlertTriangle, BookOpen } from 'lucide-react';

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white/80 backdrop-blur-lg rounded-[2rem] p-6 shadow-sm border border-white/50 ${className}`}
  >
    {children}
  </div>
);

const TimetableConsole = () => {
    const stats = [
        { label: 'Total Classes', value: '42', icon: BookOpen, color: 'text-cyan-600', bg: 'bg-cyan-50' }, 
        { label: 'Conflicts', value: '0', icon: AlertTriangle, color: 'text-pink-500', bg: 'bg-pink-50' }
    ];

    const rows = [
        ['10-A', 'Mon', '1', 'Mathematics', 'Mr. R. Sharma', 'Active'],
        ['10-B', 'Mon', '1', 'Physics', 'Ms. Wei Lin', 'Active'],
        ['09-A', 'Mon', '2', 'Chemistry', 'Dr. Alok', 'Substituted'],
        ['11-C', 'Tue', '1', 'English Lit', 'Mrs. Davis', 'Active'],
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-800">Timetable & Faculty Allocation Console</h1>
            <p className="text-slate-600">Design and manage timetable structures.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {stats.map((stat, i) => (
                    <Card key={i} className="flex flex-col justify-between h-full min-h-[160px]">
                        <div className="flex justify-between items-start">
                             <div className={`p-3 rounded-2xl ${stat.bg}`}><stat.icon className={`h-6 w-6 ${stat.color}`} /></div>
                        </div>
                        <div className="mt-4"><h3 className="text-3xl font-bold text-slate-800">{stat.value}</h3><p className="text-slate-500 font-medium">{stat.label}</p></div>
                    </Card>
                ))}
            </div>

            <Card className="overflow-hidden p-0">
                <div className="p-6 border-b border-slate-100">
                    <h3 className="font-bold text-lg text-slate-800">Weekly Schedule</h3>
                </div>
                 <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                {['Class', 'Day', 'Period', 'Subject', 'Teacher', 'Status'].map(h => (
                                    <th key={h} className="p-4 text-xs font-bold uppercase text-slate-500 border-b border-slate-100">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, i) => (
                                <tr key={i} className="hover:bg-slate-50/50 transition-colors border-b border-slate-50 last:border-0">
                                    {row.map((cell, j) => (
                                        <td key={j} className="p-4 text-sm font-medium text-slate-700">{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default TimetableConsole;
