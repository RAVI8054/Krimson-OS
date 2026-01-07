import React from 'react';
import { Activity, FileText } from 'lucide-react';

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white/80 backdrop-blur-lg rounded-[2rem] p-6 shadow-sm border border-white/50 ${className}`}
  >
    {children}
  </div>
);

const AssessmentTracker = () => {
    const rows = [
        ['Mid-Term Exam', '10-A', 'Math', 'Dec 10', '78%', 'Published'], 
        ['Unit Test 3', '09-B', 'Physics', 'Dec 12', '72%', 'Published'],
        ['Lab Practical', '11-A', 'Chemistry', 'Jan 04', '-', 'Grading']
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-800">Assessment Calendar & Performance Tracker</h1>
            <p className="text-slate-600">Oversee assessment timelines and performance consistency.</p>
            
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                         <div className="p-3 rounded-2xl bg-cyan-50 text-cyan-600"><Activity className="h-6 w-6" /></div>
                    </div>
                    <div className="mt-4"><h3 className="text-3xl font-bold text-slate-800">76%</h3><p className="text-slate-500 font-medium">Avg Performance</p></div>
                </Card>
                 <Card className="flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                         <div className="p-3 rounded-2xl bg-pink-50 text-pink-600"><FileText className="h-6 w-6" /></div>
                    </div>
                    <div className="mt-4"><h3 className="text-3xl font-bold text-slate-800">3</h3><p className="text-slate-500 font-medium">Grading Due</p></div>
                </Card>
            </div>

            <Card className="overflow-hidden p-0">
                 <div className="p-6 border-b border-slate-100">
                    <h3 className="font-bold text-lg text-slate-800">Upcoming Assessments</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                {['Assessment Name', 'Class', 'Subject', 'Date', 'Avg Score', 'Status'].map(h => (
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

export default AssessmentTracker;
