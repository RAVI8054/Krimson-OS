import React from 'react';
import { TEACHER_DATA } from '../../../data/teacherData';
import { Calendar, Plus, Paperclip, CheckCircle, Clock } from 'lucide-react';

const LessonPlanning = () => {
  const { lessons } = TEACHER_DATA;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-6">
        <div>
           <h2 className="text-2xl font-bold text-slate-800">Lesson Planner</h2>
           <p className="text-slate-500 text-sm">Weekly Academic Schedule</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-blue-700 flex items-center gap-2 transition-transform active:scale-95">
           <Plus size={18} /> New Lesson Plan
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
         {/* Simple Day Columns */}
         {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
           <div key={day} className="bg-white rounded-3xl p-4 shadow-sm min-h-[400px]">
              <h3 className="text-center font-bold text-slate-400 uppercase text-xs mb-4 tracking-wider">{day}</h3>
              <div className="space-y-3">
                 {lessons[day.toLowerCase()]?.map((lesson) => (
                   <div key={lesson.id} className={`p-4 rounded-2xl border-l-4 shadow-sm hover:shadow-md transition-all cursor-pointer ${
                      lesson.status === 'Completed' ? 'bg-green-50 border-green-500' : 'bg-white border-blue-500'
                   }`}>
                      <p className="text-xs font-bold text-slate-400 mb-1">{lesson.class}</p>
                      <h4 className="font-bold text-slate-700 text-sm mb-2">{lesson.title}</h4>
                      <div className="flex justify-between items-center">
                         <span className={`text-[10px] font-bold px-2 py-1 rounded ${
                            lesson.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                         }`}>
                            {lesson.status}
                         </span>
                         <Paperclip size={12} className="text-slate-400" />
                      </div>
                   </div>
                 ))}
                 {!lessons[day.toLowerCase()] && (
                    <div className="text-center py-8 text-slate-300 text-xs italic">No lessons planned</div>
                 )}
              </div>
           </div>
         ))}
      </div>
      
      {/* AI Suggestion */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-6 text-white flex justify-between items-center shadow-lg">
         <div className="flex items-center gap-4">
             <div className="p-3 bg-white/20 rounded-full"><Clock size={24} /></div>
             <div>
                <h4 className="font-bold">AI Lesson Assistant</h4>
                <p className="text-xs opacity-80">Based on "Newton's Laws", we suggest attaching "Video: Inertia Experiments".</p>
             </div>
         </div>
         <button className="px-4 py-2 bg-white text-blue-600 font-bold rounded-xl text-xs hover:bg-blue-50 transition-colors">View Suggestion</button>
      </div>
    </div>
  );
};

export default LessonPlanning;
