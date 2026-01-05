import React from 'react';
import {
    LayoutDashboard, UserPlus, Users, Settings, Briefcase,
    DollarSign, CheckSquare, Bell, Lock, FileText,
    Shield, Scan, LogOut
} from 'lucide-react';

export const ADMIN_MENU_ITEMS = [
    { id: "ad1", title: "Control Dashboard", icon: LayoutDashboard },
    { id: "ad2", title: "Admissions Console", icon: UserPlus },
    { id: "ad3", title: "User Management", icon: Users },
    { id: "ad4", title: "Class Config", icon: Settings },
    { id: "ad5", title: "HR Admin", icon: Briefcase },
    { id: "ad6", title: "Finance Control", icon: DollarSign },
    { id: "ad7", title: "Attendance Oversight", icon: CheckSquare },
    { id: "ad8", title: "Notification Center", icon: Bell },
    { id: "ad9", title: "Compliance Vault", icon: Lock },
    { id: "ad10", title: "Audit Trail", icon: FileText },

];

const Sidebar = ({ activeScreenId, setActiveScreenId, isMobileMenuOpen, setIsMobileMenuOpen, onLogout }) => {
    return (
        <aside
            className={`fixed inset-y-4 left-4 z-50 w-[280px] flex flex-col overflow-hidden rounded-[2.5rem] shadow-2xl shadow-blue-900/10 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-[120%]"
                } md:translate-x-0`}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-300 via-blue-300 to-pink-300"></div>

            <div className="relative z-10 flex-1 flex flex-col p-6 overflow-hidden">
                <div className="flex items-center gap-4 mb-8 shrink-0">
                    <div className="w-10 h-10 bg-white/40 backdrop-blur rounded-xl flex items-center justify-center shadow-sm">
                        <Shield className="h-6 w-6 text-slate-800" />
                    </div>
                    <div>
                        <h1 className="font-bold text-xl tracking-tight leading-none text-slate-800">
                            Krimson OS
                        </h1>
                        <p className="text-xs text-slate-700 mt-1 font-medium">
                            Singapore
                        </p>
                    </div>
                </div>

                <nav className="flex-1 overflow-y-auto space-y-1 custom-scrollbar py-2 min-h-0 pr-1">
                    {ADMIN_MENU_ITEMS.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeScreenId === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveScreenId(item.id);
                                    if (setIsMobileMenuOpen) setIsMobileMenuOpen(false);
                                }}
                                className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all duration-200 group relative ${isActive
                                    ? "bg-white/40 backdrop-blur text-slate-900 font-bold shadow-sm"
                                    : "text-slate-700 hover:text-slate-900 hover:bg-white/20"
                                    }`}
                            >
                                <Icon
                                    className={`h-5 w-5 ${isActive ? "text-slate-900" : "group-hover:text-slate-900"
                                        }`}
                                />
                                <span className="tracking-wide text-sm truncate">
                                    {item.title}
                                </span>
                                {isActive && (
                                    <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-slate-800"></div>
                                )}
                            </button>
                        );
                    })}
                </nav>

                <div className="mt-auto pt-4 border-t border-white/30 shrink-0">
                    <div className="bg-white/30 backdrop-blur rounded-2xl p-3 flex items-center gap-3 border border-white/20 shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold text-xs shadow-sm">
                            A
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold text-slate-800 truncate">
                                Administrator
                            </p>
                            <div className="flex items-center gap-1 text-[10px] text-slate-700 font-medium">
                                <Scan className="h-2 w-2" />
                                <span>Verified</span>
                            </div>
                        </div>
                        <button
                            onClick={onLogout}
                            className="text-slate-600 hover:text-white transition-colors"
                        >
                            <LogOut className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
