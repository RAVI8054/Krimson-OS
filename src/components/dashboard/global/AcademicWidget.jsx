import React from 'react';
import { Calendar, BookOpen, Clock } from 'lucide-react';

const AcademicWidget = () => {
    const events = [
        { title: "Mid-Term Physics Exam", time: "10:00 AM", type: "exam" },
        { title: "Science Fair Submission", time: "2:00 PM", type: "assignment" },
        { title: "Staff Meeting", time: "4:30 PM", type: "meeting" },
    ];

    return (
        <div className="h-full w-full bg-gradient-to-br from-slate-800 to-slate-900 p-5 rounded-xl border border-slate-700 shadow-sm flex flex-col text-white cursor-grab active:cursor-grabbing">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg text-white">Academic Overview</h3>
                <Calendar className="h-5 w-5 text-slate-400" />
            </div>

            <div className="flex-1 overflow-auto space-y-3 custom-scrollbar">
                {events.map((event, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:bg-slate-700/50 transition-colors">
                        <div className={`p-2 rounded-lg ${event.type === 'exam' ? 'bg-red-500/20 text-red-400' :
                                event.type === 'assignment' ? 'bg-blue-500/20 text-blue-400' :
                                    'bg-purple-500/20 text-purple-400'
                            }`}>
                            {event.type === 'exam' ? <Clock className="h-4 w-4" /> :
                                event.type === 'assignment' ? <BookOpen className="h-4 w-4" /> :
                                    <Users className="h-4 w-4" />}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-slate-200 truncate">{event.title}</p>
                            <div className="flex items-center gap-2 mt-0.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                                <span className="text-xs text-slate-400">{event.time}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-3 pt-3 border-t border-slate-700 text-center">
                <span className="text-xs text-slate-400">View Full Timetable</span>
            </div>

            {/* API Integration Comment */}
            {/* TODO: Connect to GET /api/academic/daily-overview */}
        </div>
    );
};

// Start of helper component
import { Users } from 'lucide-react'; // Needed for the 'meeting' type icon

export default AcademicWidget;
