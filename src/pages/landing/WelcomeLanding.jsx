import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DateTime } from "luxon";
import {
    LayoutDashboard,
    Bell,
    CheckSquare,
    FileText,
    User,
    LogOut,
    Calendar,
    School
} from "lucide-react";
import { authService } from "../../services/authService";
import RoleSwitcher from "../../components/common/RoleSwitcher";
import { useAppDispatch } from "../../store/hooks";
import { addNotification } from "../../store/slices/uiSlice";
import { getDashboardPath } from "../../utils/roleNavigation";

const WelcomeLanding = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [user, setUser] = useState(null);
    const [time, setTime] = useState(DateTime.now().setZone("Asia/Singapore"));

    useEffect(() => {
        const currentUser = authService.getCurrentUser();
        if (!currentUser) {
            navigate("/login");
            return;
        }
        setUser(currentUser);

        // Clock ticker
        const timer = setInterval(() => {
            setTime(DateTime.now().setZone("Asia/Singapore"));
        }, 1000);

        return () => clearInterval(timer);
    }, [navigate]);

    const handleLogout = () => {
        authService.logout();
        dispatch(addNotification({ type: 'info', message: 'Logged out successfully' }));
        navigate("/login");
    };

    if (!user) return null;

    // Use shared utility for dashboard link
    const dashboardPath = getDashboardPath(user.active_role || user.role);

    // Mock Announcements
    const announcements = [
        { id: 1, text: "Annual Sports Day on 15th Jan", date: "2 days ago" },
        { id: 2, text: "Parent-Teacher meeting scheduled", date: "5 hours ago" },
        { id: 3, text: "New Library books available", date: "Just now" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-pink-50 font-sans text-slate-800">
            {/* Navbar / Header */}
            <nav className="px-6 py-4 bg-white/80 backdrop-blur border-b border-white/50 shadow-sm flex items-center justify-between sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-pink-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                        <School className="h-6 w-6" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-slate-800">
                        Krimson OS
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <RoleSwitcher currentUser={user} />
                    <div className="h-8 w-[1px] bg-slate-200"></div>
                    <button
                        onClick={handleLogout}
                        className="text-slate-500 hover:text-rose-600 transition-colors flex items-center gap-2 text-sm font-medium"
                    >
                        <LogOut className="h-4 w-4" />
                        Logout
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto p-6 sm:p-10">

                {/* Welcome Section */}
                <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400 text-white shadow-2xl shadow-blue-900/20 p-8 sm:p-12 mb-10">
                    {/* Background Decorations */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-500/20 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center text-xl font-bold">
                                    {user.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-white/80 font-medium text-lg">Welcome back,</p>
                                    <h1 className="text-3xl sm:text-4xl font-bold">{user.name}</h1>
                                </div>
                            </div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur border border-white/10 text-sm font-medium">
                                <User className="h-4 w-4" />
                                Logged in as {user.active_role || user.role}
                            </div>
                        </div>

                        {/* Clock Widget */}
                        <div className="text-right">
                            <p className="text-white/80 text-sm font-medium uppercase tracking-wider mb-1">Singapore Standard Time</p>
                            <div className="text-4xl sm:text-6xl font-mono font-bold leading-none tracking-tight">
                                {time.toFormat("HH:mm")}
                            </div>
                            <p className="text-white/90 text-lg mt-1">{time.toFormat("EEEE, d MMMM yyyy")}</p>
                        </div>
                    </div>
                </div>

                {/* Quick Actions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <Link to={dashboardPath} className="group p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 hover:border-cyan-200 transition-all">
                        <div className="w-12 h-12 bg-cyan-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <LayoutDashboard className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-800 mb-1">Dashboard</h3>
                        <p className="text-slate-500 text-sm">Go to your main workspace</p>
                    </Link>

                    <div className="group p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 hover:border-cyan-200 transition-all cursor-pointer">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Bell className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-800 mb-1">Notifications</h3>
                        <p className="text-slate-500 text-sm">3 New alerts</p>
                    </div>

                    <div className="group p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 hover:border-cyan-200 transition-all cursor-pointer">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <CheckSquare className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-800 mb-1">My Tasks</h3>
                        <p className="text-slate-500 text-sm">12 Pending items</p>
                    </div>

                    <div className="group p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 hover:border-cyan-200 transition-all cursor-pointer">
                        <div className="w-12 h-12 bg-cyan-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <FileText className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-lg text-slate-800 mb-1">Reports</h3>
                        <p className="text-slate-500 text-sm">View analytics</p>
                    </div>
                </div>

                {/* Announcements Section */}
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></span>
                        Announcements
                    </h3>
                    <div className="space-y-4">
                        {announcements.map(item => (
                            <div key={item.id} className="flex gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-md border border-transparent hover:border-slate-100 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-white flex-shrink-0 flex items-center justify-center text-slate-400 font-bold border border-slate-200">
                                    <Calendar className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-slate-800">{item.text}</p>
                                    <p className="text-sm text-slate-500 mt-1">{item.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default WelcomeLanding;
