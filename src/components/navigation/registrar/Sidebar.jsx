import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  Users, FileCheck, Bus, AlertCircle, LayoutGrid, LogOut, FolderOpen
} from 'lucide-react';

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        { id: 'home', title: 'Overview', path: '/dashboard/registrar', icon: LayoutGrid },
        { id: 'admissions', title: 'Admissions', path: '/dashboard/registrar/admissions', icon: Users },
        { id: 'records', title: 'Student Records', path: '/dashboard/registrar/records', icon: FolderOpen },
        { id: 'compliance', title: 'Compliance Center', path: '/dashboard/registrar/compliance', icon: AlertCircle },
        { id: 'withdrawals', title: 'Transfers / Exits', path: '/dashboard/registrar/withdrawals', icon: LogOut },
    ];

    const isActive = (path) => {
        if (path === "/dashboard/registrar" && location.pathname === "/dashboard/registrar") return true;
        if (path !== "/dashboard/registrar" && location.pathname.startsWith(path)) return true;
        return false;
    };

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <aside className="fixed inset-y-4 left-4 z-50 w-[280px] flex flex-col overflow-hidden rounded-[2.5rem] shadow-2xl shadow-blue-900/10">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-blue-500 to-pink-400"></div>
            {/* Decorative Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-white/5 backdrop-blur-[1px]"></div>

            <div className="relative z-10 flex-1 flex flex-col p-6 overflow-hidden">
                {/* Top Logo Area */}
                <div className="flex items-center gap-4 mb-8 shrink-0">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shadow-sm">
                        <span className="font-bold text-lg text-white">K</span>
                    </div>
                    <div>
                        <h1 className="font-bold text-lg leading-tight text-white">Krimson OS</h1>
                        <p className="text-xs text-white/70">Registrar Console</p>
                    </div>
                </div>

                {/* Registrar Menu List */}
                <nav className="flex-1 overflow-y-auto space-y-2 custom-scrollbar py-2 min-h-0 pr-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.path);
                        return (
                            <Link 
                                key={item.id} 
                                to={item.path}
                                className={`w-full flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${active ? 'bg-white/20 shadow-inner text-white font-bold' : 'hover:bg-white/10 text-white/80 hover:text-white'}`}
                            >
                                <Icon className="w-5 h-5" />
                                <span className="text-sm">{item.title}</span>
                            </Link>
                        )
                    })}
                </nav>

                {/* Registrar Profile */}
                <div className="mt-auto relative z-10 pt-6">
                  <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-md border border-white/20 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold text-white">R</div>
                    <div className="overflow-hidden flex-1">
                      <p className="text-sm font-semibold truncate text-white">Registrar</p>
                      <p className="text-[10px] text-white/70">:: Verified</p>
                    </div>
                    <button onClick={handleLogout} className="text-white/70 hover:text-white transition-colors">
                        <LogOut className="h-4 w-4" />
                    </button>
                  </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
