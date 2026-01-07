import React from 'react';
import { CheckSquare, Clock, ExternalLink } from 'lucide-react';
import { SOURCE_APPS } from '../../../data/connectedApps';

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white/80 backdrop-blur-lg rounded-[2rem] p-6 shadow-sm border border-white/50 ${className}`}
  >
    {children}
  </div>
);

const LessonApprovalCenter = () => {
    const list = [
        { title: 'Thermodynamics Unit 4', sub: 'Physics • Grade 11', status: 'Pending', statusColor: 'bg-amber-100 text-amber-700', source: SOURCE_APPS.TATA },
        { title: 'Shakespeare: Macbeth', sub: 'English • Grade 10', status: 'Approved', statusColor: 'bg-emerald-100 text-emerald-700', source: SOURCE_APPS.Skolaro },
        { title: 'Algebra: Quadratics', sub: 'Math • Grade 9', status: 'Revision', statusColor: 'bg-rose-100 text-rose-700', source: SOURCE_APPS.EXTRAMARKS }
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-800">Lesson & Assessment Approval Center</h1>
            <p className="text-slate-600">Review and approve academic submissions from teachers.</p>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                         <div className="p-3 rounded-2xl bg-amber-50 text-amber-600"><Clock className="h-6 w-6" /></div>
                    </div>
                    <div className="mt-4"><h3 className="text-3xl font-bold text-slate-800">5</h3><p className="text-slate-500 font-medium">Pending Review</p></div>
                </Card>
                 <Card className="flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                         <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600"><CheckSquare className="h-6 w-6" /></div>
                    </div>
                    <div className="mt-4"><h3 className="text-3xl font-bold text-slate-800">128</h3><p className="text-slate-500 font-medium">Approved</p></div>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                {list.map((item, i) => (
                    <div key={i} className="bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-sm border border-white/50 flex items-center justify-between group hover:border-blue-200 hover:shadow-md transition-all">
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold ${item.source.bg} ${item.source.color}`}>
                                {item.source.name[0]}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800">{item.title}</h4>
                                <p className="text-sm text-slate-500 flex items-center gap-1">{item.sub}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-1 ${item.statusColor}`}>{item.status}</span>
                            <button className="text-xs text-blue-700 font-semibold hover:underline flex items-center justify-end gap-1 w-full">View in App <ExternalLink className="h-3 w-3" /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LessonApprovalCenter;
