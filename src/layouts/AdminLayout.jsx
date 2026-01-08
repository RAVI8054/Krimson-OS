/**
 * @component AdminLayout
 * @description Main layout wrapper for admin dashboard.
 * Provides sidebar navigation, header with search, and content area.
 * Uses Redux for state management (sidebar, auth).
 * 
 * @returns {JSX.Element} Admin layout with sidebar and content area
 */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/navigation/admin/Sidebar';
import { Search, Bell, Menu } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setSidebarOpen } from '../store/slices/uiSlice';
import { logoutUser } from '../store/slices/authSlice';

const AdminLayout = () => {
  const dispatch = useAppDispatch();
  
  // Get sidebar state from Redux instead of local state
  const sidebarOpen = useAppSelector(state => state.ui.sidebarOpen);

  /**
   * Handle user logout
   * Dispatches Redux logout action and redirects to login
   */
  const handleLogout = async () => {
    await dispatch(logoutUser());
    window.location.href = '/login';
  };

  /**
   * Open mobile sidebar
   */
  const openSidebar = () => {
    dispatch(setSidebarOpen(true));
  };

  /**
   * Close mobile sidebar
   */
  const closeSidebar = () => {
    dispatch(setSidebarOpen(false));
  };

  return (
    <div className="min-h-screen bg-[#f3f5f9] flex font-sans text-slate-900 overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-purple-50">
      {/* Sidebar with Redux state */}
      <Sidebar 
        isMobileMenuOpen={sidebarOpen} 
        setIsMobileMenuOpen={closeSidebar} 
        onLogout={handleLogout}
      />

      {/* Main Content - Adjusted margin for floating sidebar */}
      <div className="flex-1 md:ml-72 flex flex-col h-screen overflow-hidden relative transition-all duration-300">
        
        {/* Header - Transparent/Glassmorphism */}
        <header className="h-24 flex items-center justify-between px-8 z-10 sticky top-0">
          <div className="flex items-center gap-4">
            {/* Hamburger menu button - opens sidebar via Redux */}
            <button 
              onClick={openSidebar}
              className="md:hidden p-2 bg-white/50 backdrop-blur border border-white/50 rounded-xl shadow-sm hover:shadow-md transition-all text-slate-600"
              aria-label="Open navigation menu"
              type="button"
            >
              <Menu size={20} />
            </button>
            
            <div className="hidden md:block">
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
                Admin Control Room
              </h2>
              <p className="text-xs text-slate-500 font-medium ml-0.5">Global System Overview</p>
            </div>
          </div>
          
          {/* Header actions */}
          <div className="flex items-center gap-5">
             {/* Search bar */}
             <div className="hidden md:flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm border border-slate-100 min-w-[320px] hover:shadow-md transition-all group">
                <Search size={18} className="text-slate-400 group-hover:text-cyan-500 transition-colors"/>
                <input 
                  type="text" 
                  placeholder="Search across all apps..." 
                  className="bg-transparent border-none text-sm outline-none w-full placeholder-slate-400 text-slate-600" 
                />
             </div>
             
             {/* Notification bell */}
             <button 
              className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 hover:shadow-md transition-all hover:bg-slate-50 group"
              aria-label="View notifications"
              type="button"
             >
                <Bell size={20} className="text-slate-500 group-hover:text-cyan-600 transition-colors"/>
                <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
             </button>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
