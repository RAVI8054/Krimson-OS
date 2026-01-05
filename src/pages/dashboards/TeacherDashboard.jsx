import React, { useState } from 'react';
import {
   Calendar, Activity, 
    Search, Bell, Filter, RefreshCw, ExternalLink, Shield,
    FileText, Database,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Sidebar, { TEACHER_MENU_ITEMS } from '../../components/navigation/teacher/Sidebar';

// --- 1. CONFIGURATION & DATA ---

// Source Apps Config [cite: 3]
const SOURCE_APPS = {
    Skolaro: { name: 'Skolaro', color: 'text-blue-600', bg: 'bg-blue-50' },
    EXTRAMARKS: { name: 'Extramarks', color: 'text-orange-600', bg: 'bg-orange-50' },
    GPT: { name: 'GPT Tutor', color: 'text-emerald-600', bg: 'bg-emerald-50' },
    WORDSWORTH: { name: 'Wordsworth', color: 'text-red-600', bg: 'bg-red-50' },
    XPERIMENTOR: { name: 'Xperimentor', color: 'text-purple-600', bg: 'bg-purple-50' },
    MOODULE: { name: 'Moodule', color: 'text-amber-600', bg: 'bg-amber-50' },
    TATA: { name: 'Tata ClassEdge', color: 'text-sky-600', bg: 'bg-sky-50' },
};

// TEACHER MOCK DATA ENGINE
const TEACHER_DATA = {
    // Lesson Planning [Screen 354]
    't3': {
        list: [
            {
                title: 'Derivatives (Calculus)',
                sub: 'Tata ClassEdge • Grade 10B • Week 4',
                status: 'Approved',
                statusColor: 'bg-emerald-100 text-emerald-700',
                source: SOURCE_APPS.TATA
            },
            {
                title: 'Optics Lab Simulation',
                sub: 'Xperimentor • Grade 9A • Week 5',
                status: 'Pending',
                statusColor: 'bg-amber-100 text-amber-700',
                source: SOURCE_APPS.XPERIMENTOR
            }
        ]
    },
    // Assignment Manager [Screen 356]
    't5': {
        stats: [
            { label: 'To Grade', value: '15', icon: FileText, color: 'text-amber-600', bg: 'bg-amber-50' }
        ],
        table: {
            headers: ['Assignment', 'Class', 'Platform', 'Status', 'Link'],
            rows: [
                ['Math Quiz 3', '10B', 'Extramarks', '15/30 Graded', 'Open App'],
                ['History Essay', '9A', 'Moodule', 'Pending', 'Open App']
            ]
        }
    },
    // Test Manager [Screen 361]
    't10': {
        stats: [
            { label: 'Total Records', value: '4', icon: Database, color: 'text-blue-600', bg: 'bg-blue-50' }
        ],
        list: [
            { title: 'Mid-Term Mathematics', sub: 'Skolaro • Hall A', status: 'Synced', statusColor: 'bg-slate-100 text-slate-600', source: SOURCE_APPS.Skolaro },
            { title: 'Physics Practical', sub: 'Skolaro • Lab 2', status: 'Synced', statusColor: 'bg-slate-100 text-slate-600', source: SOURCE_APPS.Skolaro },
            { title: 'English Literature Final', sub: 'Skolaro • Hall B', status: 'Synced', statusColor: 'bg-slate-100 text-slate-600', source: SOURCE_APPS.Skolaro },
            { title: 'Hindi Language Test', sub: 'Skolaro • Classroom 4', status: 'Synced', statusColor: 'bg-slate-100 text-slate-600', source: SOURCE_APPS.Skolaro },
        ]
    }
};

// GENERIC FALLBACK DATA (For Class Mgmt, Attendance, Gradebook, etc.)
// Matches the "2 Total Records" view seen in Screens 353, 355, 357, 358, 359, 360
const GENERIC_TEACHER_DATA = {
    stats: [
        { label: 'Total Records', value: '2', icon: Database, color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: 'Last Sync', value: 'Just now', icon: RefreshCw, color: 'text-blue-600', bg: 'bg-blue-50' }
    ],
    list: [
        { title: 'System Sync Log', sub: 'Skolaro • Data refreshed', status: 'Synced', statusColor: 'bg-slate-100 text-slate-600', source: SOURCE_APPS.Skolaro },
        { title: 'User Policy Update', sub: 'Skolaro • v2.4 Released', status: 'Synced', statusColor: 'bg-slate-100 text-slate-600', source: SOURCE_APPS.Skolaro }
    ]
};

// --- 2. COMPONENTS ---

const Card = ({ children, className = "" }) => (
    <div className={`bg-white/80 backdrop-blur-lg rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-white/50 ${className}`}>{children}</div>
);

const StatCard = ({ icon: Icon, value, label, color, bg }) => (
    <Card className="flex flex-col justify-between h-full min-h-[160px] border-white/50">
        <div className="flex justify-between items-start">
            <div className={`p-3 rounded-2xl ${bg}`}><Icon className={`h-6 w-6 ${color}`} /></div>
        </div>
        <div className="mt-4"><h3 className="text-3xl font-bold text-slate-800">{value}</h3><p className="text-slate-500 font-medium">{label}</p></div>
    </Card>
);

const DataTable = ({ headers, rows }) => (
    <Card className="overflow-hidden p-0 mt-6">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-lg text-slate-800">Records</h3>
            <div className="flex items-center gap-2 text-xs text-slate-400"><Shield className="h-3 w-3" /> Data is managed in source apps</div>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead><tr>{headers.map((h, i) => <th key={i} className="p-4 text-xs font-bold uppercase text-slate-500 border-b border-slate-100">{h}</th>)}</tr></thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50/50 transition-colors border-b border-slate-50 last:border-0">
                            {row.map((cell, j) => (
                                <td key={j} className="p-4 text-sm font-medium text-slate-700">
                                    {['View', 'Launch', 'Download', 'Open App'].includes(cell) ? (
                                        <button className="text-blue-700 font-bold hover:underline flex items-center gap-1">{cell} <ExternalLink className="h-3 w-3" /></button>
                                    ) : cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </Card>
);

const DataList = ({ items }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {items.map((item, i) => (
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
);

// --- 3. TEACHER DASHBOARD APP ---

export default function TeacherDashboard() {
    const [activeScreenId, setActiveScreenId] = useState('t1');
    const activeScreen = TEACHER_MENU_ITEMS.find(i => i.id === activeScreenId) || TEACHER_MENU_ITEMS[0];
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    // Logic: Use specific mock data if available, otherwise use the generic fallback
    const screenData = activeScreenId === 't1' ? null : (TEACHER_DATA[activeScreenId] || GENERIC_TEACHER_DATA);

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-purple-100 to-rose-100 flex font-sans text-slate-900 overflow-hidden">

            {/* --- TEACHER SIDEBAR --- */}
            <Sidebar activeScreenId={activeScreenId} setActiveScreenId={setActiveScreenId} onLogout={handleLogout} />

            {/* --- MAIN CONTENT AREA --- */}
            <div className="flex-1 md:ml-[310px] flex flex-col h-screen overflow-hidden relative">
                <header className="h-24 flex items-center justify-between px-8 md:px-12 z-10 sticky top-0">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">{activeScreen.id === 't1' ? 'Dashboard' : activeScreen.title}</h2>
                        <p className="text-slate-500 text-sm">Aggregated Data View</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="hidden md:flex items-center gap-3 bg-white/60 backdrop-blur-md px-5 py-3 rounded-full shadow-sm border border-white/50 min-w-[300px]">
                            <Search className="h-5 w-5 text-slate-400" />
                            <input type="text" placeholder="Search across all apps..." className="bg-transparent border-none focus:outline-none text-slate-600 text-sm w-full placeholder-slate-400" />
                        </div>
                        <button className="w-12 h-12 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm border border-white/50 relative hover:shadow-md transition-shadow">
                            <Bell className="h-5 w-5 text-slate-600" /><span className="absolute top-3 right-3 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
                        </button>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-4 md:p-12 pb-24">

                    {/* 1. TEACHER HOME DASHBOARD [Screen 352] */}
                    {activeScreenId === 't1' ? (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-8 text-slate-800 relative overflow-hidden shadow-xl shadow-blue-900/5 mb-8 border border-white/50">
                                <div className="relative z-10 max-w-2xl">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-semibold tracking-wide mb-6 text-blue-700">Singapore Campus</span>
                                    <h1 className="text-4xl font-bold mb-4 text-black">Teacher Dashboard</h1>
                                    <p className="text-slate-600 text-lg">Welcome, Ms. Wei Lin. Here is your consolidated daily summary.</p>
                                </div>
                            </div>
                            <div className="mb-2"><h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 ml-2">Connected Applications</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
                                    {Object.values(SOURCE_APPS).map((app, idx) => (
                                        <a key={idx} href="#" className="flex flex-col items-center gap-2 p-4 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm border border-white/50 hover:shadow-md hover:border-blue-200 transition-all group">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${app.bg} ${app.color} font-bold text-lg group-hover:scale-110 transition-transform`}>{app.name[0]}</div>
                                            <span className="text-xs font-semibold text-slate-700 text-center truncate w-full">{app.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <StatCard icon={Activity} value="Synced" label="Data Integrity" color="text-emerald-600" bg="bg-emerald-50" />
                                <StatCard icon={Activity} value="7 Apps" label="Connected Sources" color="text-blue-600" bg="bg-blue-50" />
                                <StatCard icon={Calendar} value="2 Jan" label="Singapore Time" color="text-purple-600" bg="bg-purple-50" />
                            </div>
                        </div>
                    ) : (
                        // 2. TEACHER INNER VIEWS [Screens 353-361]
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-2">
                                <div>
                                    <h2 className="text-3xl font-bold text-slate-800">{activeScreen.title}</h2>
                                    <p className="text-slate-500 mt-1">Consolidated view from external sources.</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-2 bg-white/80 border border-slate-200 rounded-lg text-slate-600 hover:bg-white" title="Filter Source"><Filter className="h-5 w-5" /></button>
                                    <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/30 flex items-center gap-2"><RefreshCw className="h-4 w-4" /> Sync Data</button>
                                </div>
                            </div>

                            {/* Dynamic Stats Row */}
                            {screenData?.stats && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {screenData.stats.map((stat, i) => (
                                        <StatCard key={i} {...stat} />
                                    ))}
                                </div>
                            )}

                            {/* Content Area (Table or List) */}
                            {screenData?.table && <DataTable headers={screenData.table.headers} rows={screenData.table.rows} />}
                            {screenData?.list && <DataList items={screenData.list} />}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
