import React, { useState } from 'react';
import {
   Calendar, CheckSquare,  BookOpen,
    Activity,
    Bell, Search,
    Menu, Lock, Filter, RefreshCw, Database,
    Globe, ExternalLink, Clock, AlertTriangle
} from 'lucide-react';
import Sidebar, { STUDENT_MENU_ITEMS } from '../../components/navigation/student/Sidebar';
import { useNavigate } from 'react-router-dom';

// --- 1. CONFIGURATION & MOCK DATA ---
// Defines external application sources and their visual themes
const SOURCE_APPS = {
    Skolaro: { name: 'Skolaro', color: 'text-blue-600', bg: 'bg-blue-50' },
    EXTRAMARKS: { name: 'Extramarks', color: 'text-orange-600', bg: 'bg-orange-50' },
    GPT: { name: 'GPT Tutor', color: 'text-emerald-600', bg: 'bg-emerald-50' },
    WORDSWORTH: { name: 'Wordsworth', color: 'text-red-600', bg: 'bg-red-50' },
    XPERIMENTOR: { name: 'Xperimentor', color: 'text-purple-600', bg: 'bg-purple-50' },
    MOODULE: { name: 'Moodule', color: 'text-amber-600', bg: 'bg-amber-50' },
    TATA: { name: 'Tata ClassEdge', color: 'text-sky-600', bg: 'bg-sky-50' },
};

// NAV_ITEMS are imported from Sidebar to ensure consistency
// The DATA_STORE maps 'id' from Sidebar items to the content displayed here.

const DATA_STORE = {
    // Screen: Home Dashboard
    dashboard: {
        type: 'dashboard',
        stats: [
            { label: 'Data Integrity', value: 'Synced', icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { label: 'Connected Sources', value: '7 Apps', icon: Globe, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Singapore Time', value: '5 Jan', icon: Calendar, color: 'text-purple-600', bg: 'bg-purple-50' }
        ]
    },
    // Screen: Timetable (Matches Screenshot 369)
    timetable: {
        title: 'Timetable',
        type: 'table',
        stats: [
            { label: 'Classes', value: '6', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Free', value: '1', icon: Clock, color: 'text-purple-600', bg: 'bg-purple-50' }
        ],
        table: {
            headers: ['Time', 'Subject', 'Teacher', 'Source App', 'Action'],
            rows: [
                ['08:30', 'Mathematics', 'Mr. R. Sharma', 'Skolaro', 'View'],
                ['09:30', 'Physics', 'Ms. Priya K.', 'Tata ClassEdge', 'View'],
                ['10:30', 'AI Elective', 'AI Bot', 'GPT Tutor', 'Launch']
            ]
        }
    },
    // Screen: Attendance (Matches Screenshot 370)
    attendance: {
        title: 'Attendance Tracker',
        type: 'chart_table',
        stats: [
            { label: 'Attd %', value: '94%', icon: CheckSquare, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Absent', value: '3', icon: AlertTriangle, color: 'text-rose-600', bg: 'bg-rose-50' }
        ],
        table: {
            headers: ['Date', 'Status', 'Source', 'Details'],
            rows: [
                ['Nov 29', 'Present', 'Skolaro', 'View Log'],
                ['Nov 28', 'Present', 'Skolaro', 'View Log']
            ]
        }
    },
    // Screen: Assignments (Matches Screenshot 371)
    assignments: {
        title: 'Assignments',
        type: 'list',
        list: [
            { title: 'Calculus Set 4', sub: 'Due Tomorrow • Math', status: 'Pending', statusColor: 'bg-amber-100 text-amber-700', source: SOURCE_APPS.EXTRAMARKS },
            { title: 'Hindi Poem Analysis', sub: 'Due Nov 30 • Hindi', status: 'Submitted', statusColor: 'bg-blue-100 text-blue-700', source: SOURCE_APPS.TATA },
            { title: 'Physics Lab Report', sub: 'Submitted Nov 25', status: 'Graded', statusColor: 'bg-emerald-100 text-emerald-700', source: SOURCE_APPS.XPERIMENTOR }
        ]
    },
    // Screen: Exam Dashboard (Matches Screenshot 373)
    exams: {
        title: 'Exam Dashboard',
        type: 'table',
        stats: [
            { label: 'Next Exam', value: '4 Days', icon: Clock, color: 'text-rose-600', bg: 'bg-rose-50' }
        ],
        table: {
            headers: ['Subject', 'Date', 'Time', 'Platform', 'Ticket'],
            rows: [
                ['Math', 'Dec 02', '09:00', 'Skolaro', 'Download'],
                ['Physics', 'Dec 05', '10:00', 'Skolaro', 'Download']
            ]
        }
    },
    // Screen: Lesson Resources (Matches Screenshot 372)
    resources: {
        title: 'Lesson Resources',
        type: 'generic_sync',
        stats: [
            { label: 'Total Records', value: '2', icon: Database, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Last Sync', value: 'Just now', icon: RefreshCw, color: 'text-blue-600', bg: 'bg-blue-50' }
        ],
        syncLogs: [
            { title: 'System Sync Log', sub: 'Skolaro • Data refreshed' },
            { title: 'User Policy Update', sub: 'Skolaro • v2.4 Released' }
        ]
    },
    // Screen: Grades (Matches Screenshot 374)
    grades: {
        title: 'Grades & Reports',
        type: 'generic_sync',
        stats: [
            { label: 'Total Records', value: '2', icon: Database, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Last Sync', value: 'Just now', icon: RefreshCw, color: 'text-blue-600', bg: 'bg-blue-50' }
        ],
        syncLogs: [
            { title: 'System Sync Log', sub: 'Skolaro • Data refreshed' },
            { title: 'User Policy Update', sub: 'Skolaro • v2.4 Released' }
        ]
    },
    // Screen: Communication (Matches Screenshot 375)
    communication: {
        title: 'Communication Hub',
        type: 'generic_sync',
        stats: [
            { label: 'Total Records', value: '2', icon: Database, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Last Sync', value: 'Just now', icon: RefreshCw, color: 'text-blue-600', bg: 'bg-blue-50' }
        ],
        syncLogs: [
            { title: 'System Sync Log', sub: 'Skolaro • Data refreshed' },
            { title: 'User Policy Update', sub: 'Skolaro • v2.4 Released' }
        ]
    },
    // Screen: Performance Analytics (Matches Screenshot 376)
    analytics: {
        title: 'Performance Analytics',
        type: 'generic_sync',
        stats: [
            { label: 'Total Records', value: '2', icon: Database, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Last Sync', value: 'Just now', icon: RefreshCw, color: 'text-blue-600', bg: 'bg-blue-50' }
        ],
        syncLogs: [
            { title: 'System Sync Log', sub: 'Skolaro • Data refreshed' },
            { title: 'User Policy Update', sub: 'Skolaro • v2.4 Released' }
        ]
    }
};

// --- 2. COMPONENT: UI CARDS ---
// Reusable card components for consistent UI design throughout the dashboard

const Card = ({ children, className = "" }) => (
    <div className={`bg-white/80 backdrop-blur-lg rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-white/50 ${className}`}>
        {children}
    </div>
);

const StatCard = ({ icon: Icon, value, label, color, bg }) => (
    <Card className="h-full min-h-[160px] flex flex-col justify-between">
        <div className={`w-12 h-12 rounded-2xl ${bg} flex items-center justify-center`}>
            <Icon className={`h-6 w-6 ${color}`} />
        </div>
        <div>
            <h3 className="text-3xl font-bold text-slate-800">{value}</h3>
            <p className="text-slate-500 font-medium text-sm">{label}</p>
        </div>
    </Card>
);

const AppLauncher = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
        {Object.values(SOURCE_APPS).map((app, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 p-4 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm border border-white/50 hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${app.bg} ${app.color} font-bold text-lg group-hover:scale-110 transition-transform`}>
                    {app.name[0]}
                </div>
                <span className="text-xs font-semibold text-slate-700 text-center truncate w-full">{app.name}</span>
            </div>
        ))}
    </div>
);

const DataTable = ({ headers, rows }) => (
    <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr>
                    {headers.map((h, i) => <th key={i} className="p-4 text-xs font-bold uppercase text-slate-500 border-b border-slate-100">{h}</th>)}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors border-b border-slate-50 last:border-0">
                        {row.map((cell, j) => (
                            <td key={j} className="p-4 text-sm font-medium text-slate-700">
                                {['View', 'Launch', 'Download', 'View Log', 'Open App'].includes(cell) ? (
                                    <button className="text-blue-700 font-bold hover:underline flex items-center gap-1">
                                        {cell} <ExternalLink className="h-3 w-3" />
                                    </button>
                                ) : cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

// --- 3. COMPONENT: DYNAMIC SCREEN RENDERER ---
// Renders different views based on the 'activeTab' selected in the sidebar

const SmartScreen = ({ activeTab }) => {
    const data = DATA_STORE[activeTab];

    if (!data) return <div className="p-10 text-slate-400">Module coming soon...</div>;

    if (data.type === 'dashboard') {
        return (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                {/* Hero Card */}
                <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-8 mb-8 border border-white/50 shadow-sm relative overflow-hidden">
                    <div className="relative z-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-semibold tracking-wide mb-6 text-blue-700">Singapore Campus</span>
                        <h1 className="text-4xl font-bold mb-4 text-slate-900">Student Dashboard</h1>
                        <p className="text-slate-600 text-lg">Welcome, Aarav. Here is your consolidated daily summary.</p>
                    </div>
                </div>

                <div className="mb-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 ml-2">Connected Applications</h3>
                    <AppLauncher />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {data.stats.map((stat, i) => <StatCard key={i} {...stat} />)}
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-2">
                <div>
                    <h2 className="text-3xl font-bold text-slate-800">{data.title}</h2>
                    <p className="text-slate-500 mt-1">Consolidated view from external sources.</p>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 bg-white/80 border border-slate-200 rounded-lg text-slate-600 hover:bg-white"><Filter className="h-5 w-5" /></button>
                    <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/30 flex items-center gap-2">
                        <RefreshCw className="h-4 w-4" /> Sync Data
                    </button>
                </div>
            </div>

            {/* Stats Row */}
            {data.stats && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.stats.map((stat, i) => <StatCard key={i} {...stat} />)}
                </div>
            )}

            {/* Tables */}
            {(data.type === 'table' || data.type === 'chart_table') && (
                <Card className="overflow-hidden p-0">
                    <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                        <h3 className="font-bold text-lg text-slate-800">Records</h3>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                            <Lock className="h-3 w-3" /> Data is managed in source apps
                        </div>
                    </div>
                    <DataTable headers={data.table.headers} rows={data.table.rows} />
                </Card>
            )}

            {/* Lists (Assignments) */}
            {data.type === 'list' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {data.list.map((item, i) => (
                        <div key={i} className="bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-sm border border-white/50 flex items-center justify-between group hover:border-blue-200 hover:shadow-md transition-all">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold ${item.source.bg} ${item.source.color}`}>
                                    {item.source.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                                    <p className="text-sm text-slate-500 flex items-center gap-1">
                                        {item.source.name} • {item.sub}
                                    </p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-1 ${item.statusColor}`}>
                                    {item.status}
                                </span>
                                <button className="text-xs text-blue-700 font-semibold hover:underline flex items-center justify-end gap-1 w-full">
                                    View in App <ExternalLink className="h-3 w-3" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Generic Sync Logs (Lesson Resources, etc) */}
            {data.type === 'generic_sync' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.syncLogs.map((log, i) => (
                        <div key={i} className="bg-white/80 p-4 rounded-2xl flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">S</div>
                                <div>
                                    <h4 className="font-bold text-sm text-slate-800">{log.title}</h4>
                                    <p className="text-xs text-slate-500">{log.sub}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">Synced</span>
                                <p className="text-[10px] text-blue-600 flex items-center gap-1 mt-1 cursor-pointer">View in App <ExternalLink className="h-2 w-2" /></p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

// --- 4. MAIN LAYOUT COMPONENT ---
// Main StudentDashboard layout containing Sidebar and Content Area

export default function StudentDashboard() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-purple-100 to-rose-100 flex font-sans text-slate-900 overflow-hidden">

            {/* SIDEBAR */}
            <Sidebar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                isOpen={isMobileMenuOpen}
                setIsOpen={setIsMobileMenuOpen}
                onLogout={handleLogout}
            />

            {/* MAIN CONTENT AREA */}
            <div className="flex-1 md:ml-[310px] flex flex-col h-screen overflow-hidden relative">
                {/* Header */}
                <header className="h-24 flex items-center justify-between px-8 md:px-12 z-10 sticky top-0">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 bg-white/50 backdrop-blur rounded-xl shadow-sm"><Menu className="h-6 w-6 text-slate-700" /></button>
                        <div className="hidden md:block">
                            <h2 className="text-2xl font-bold text-slate-800">
                                {STUDENT_MENU_ITEMS.find(n => n.id === activeTab)?.title || 'Dashboard'}
                            </h2>
                            <p className="text-slate-500 text-sm">Aggregated Data View</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="hidden md:flex items-center gap-3 bg-white/60 backdrop-blur-md px-5 py-3 rounded-full shadow-sm border border-white/50 min-w-[300px]">
                            <Search className="h-5 w-5 text-slate-400" />
                            <input type="text" placeholder="Search across all apps..." className="bg-transparent border-none focus:outline-none text-slate-600 text-sm w-full placeholder-slate-400" />
                        </div>
                        <button className="w-12 h-12 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm border border-white/50 relative hover:shadow-md transition-shadow">
                            <Bell className="h-5 w-5 text-slate-600" />
                            <span className="absolute top-3 right-3 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
                        </button>
                    </div>
                </header>

                {/* Content Body */}
                <main className="flex-1 overflow-y-auto p-4 md:p-12 pb-24">
                    <SmartScreen activeTab={activeTab} />
                </main>
            </div>
        </div>
    );
}
