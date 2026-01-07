import React from 'react';
import { BookOpen, ExternalLink, Filter } from 'lucide-react';

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white/80 backdrop-blur-lg rounded-[2rem] p-6 shadow-sm border border-white/50 ${className}`}
  >
    {children}
  </div>
);

const CurriculumPlanner = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-800">Curriculum Planner & Progress Map</h1>
            <p className="text-slate-600">Define curriculum and monitor lesson coverage across grades.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <Card>
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-blue-500" /> Syllabus Progress
                    </h3>
                    <div className="space-y-4">
                        <div>
                             <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium text-slate-700">Grade 10 Mathematics</span>
                                <span className="text-xs font-bold text-cyan-600">65%</span>
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-2">
                                <div className="bg-cyan-400 h-2 rounded-full" style={{width: '65%'}}></div>
                            </div>
                        </div>
                         <div>
                             <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium text-slate-700">Grade 9 Physics</span>
                                <span className="text-xs font-bold text-pink-500">42%</span>
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-2">
                                <div className="bg-pink-400 h-2 rounded-full" style={{width: '42%'}}></div>
                            </div>
                        </div>
                    </div>
                </Card>
                 <Card>
                    <div className="flex justify-between items-center mb-4">
                         <h3 className="font-bold text-lg">Curriculum Heatmap</h3>
                         <Filter className="h-4 w-4 text-slate-400" />
                    </div>
                    <div className="h-40 bg-slate-50 rounded-xl flex items-center justify-center border border-dashed border-slate-200 text-slate-400 text-sm">
                        Heatmap Visualization Component
                    </div>
                </Card>
            </div>

            <Card>
                <h3 className="font-bold text-lg mb-4">Yearly Syllabus Editor</h3>
                <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                            <span className="text-sm font-medium text-slate-700">Unit {i}: Advanced Algebra</span>
                             <button className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 text-xs font-bold hover:opacity-80 transition-opacity">Edit Plan</button>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default CurriculumPlanner;
