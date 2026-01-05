import React from 'react';
import {
    LayoutDashboard, Users, BookOpen, CheckSquare, FileText,
    BarChart, MessageSquare, Calendar, Activity, ClipboardList,
    Shield, Scan, LogOut
} from 'lucide-react';

export const TEACHER_MENU_ITEMS = [
    { id: 't1', title: 'Home Dashboard', icon: LayoutDashboard, type: 'dashboard' },
    { id: 't2', title: 'Class Management', icon: Users, type: 'list' },
    { id: 't3', title: 'Lesson Planning', icon: BookOpen, type: 'list' },
    { id: 't4', title: 'Attendance Log', icon: CheckSquare, type: 'list' },
    { id: 't5', title: 'Assignment Manager', icon: FileText, type: 'table' },
    { id: 't6', title: 'Gradebook', icon: BarChart, type: 'list' },
    { id: 't7', title: 'Communication Hub', icon: MessageSquare, type: 'list' },
    { id: 't8', title: 'Academic Calendar', icon: Calendar, type: 'list' },
    { id: 't9', title: 'Student Insights', icon: Activity, type: 'list' },
    { id: 't10', title: 'Test Manager', icon: ClipboardList, type: 'list' },
];

const Sidebar = ({ activeScreenId, setActiveScreenId, onLogout }) => {
    return (
        <aside className="fixed inset-y-4 left-4 z-50 w-[280px] flex flex-col overflow-hidden rounded-[2.5rem] shadow-2xl shadow-blue-900/10">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-300 via-blue-300 to-pink-300"></div>
            <div className="relative z-10 flex-1 flex flex-col p-6 overflow-hidden">
                {/* Top Logo Area */}
                <div className="flex items-center gap-4 mb-8 shrink-0">
                    <div className="w-10 h-10 bg-white/40 backdrop-blur rounded-xl flex items-center justify-center shadow-sm"><Shield className="h-6 w-6 text-slate-800" /></div>
                    <div><h1 className="font-bold text-xl tracking-tight leading-none text-slate-800">Krimson OS</h1><p className="text-xs text-slate-700 mt-1 font-medium">Singapore</p></div>
                </div>

                {/* Teacher Menu List */}
                <nav className="flex-1 overflow-y-auto space-y-1 custom-scrollbar py-2 min-h-0 pr-2">
                    {TEACHER_MENU_ITEMS.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeScreenId === item.id;
                        return (
                            <button key={item.id} onClick={() => setActiveScreenId(item.id)} className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all duration-200 group relative ${isActive ? 'bg-white/40 backdrop-blur text-slate-900 font-bold shadow-sm' : 'text-slate-700 hover:text-slate-900 hover:bg-white/20'}`}>
                                <Icon className={`h-5 w-5 ${isActive ? 'text-slate-900' : 'group-hover:text-slate-900'}`} />
                                <span className="tracking-wide text-sm truncate">{item.title}</span>
                                {isActive && <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-slate-800"></div>}
                            </button>
                        )
                    })}
                </nav>

                {/* Teacher Profile */}
                <div className="mt-auto pt-4 border-t border-white/30 shrink-0">
                    <div className="bg-white/30 backdrop-blur rounded-2xl p-3 flex items-center gap-3 border border-white/20 shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-purple-600 font-bold text-xs shadow-sm">T</div>
                        <div className="flex-1 min-w-0"><p className="text-xs font-bold text-slate-800 truncate">Teacher</p><div className="flex items-center gap-1 text-[10px] text-slate-700 font-medium"><Scan className="h-2 w-2" /><span>Verified</span></div></div>
                        <button onClick={onLogout} className="text-slate-600 hover:text-white transition-colors"><LogOut className="h-4 w-4" /></button>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
