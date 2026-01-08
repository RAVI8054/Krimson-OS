/**
 * @component AdminOverview
 * @description Main dashboard view for system administrators.
 * Displays real-time statistics, system alerts, and quick action buttons.
 * Uses Redux for state management - fetches data via dashboardSlice
 * 
 * Features:
 * - Live stats cards (users, attendance, finance, alerts)
 * - System alerts with priority levels
 * - Loading and error states  
 * - Responsive grid layout
 * - Redux integration for centralized state
 * 
 * @returns {JSX.Element} Admin dashboard interface
 * 
 * @example
 * <AdminOverview />
 */
import React, { useEffect } from 'react';
import { Users, CheckSquare, DollarSign, AlertCircle, ArrowRight } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchAdminDashboard } from '../../../store/slices/dashboardSlice';
import { addNotification } from '../../../store/slices/uiSlice';
import StatCard from '../../../components/common/StatCard';
import LoadingSpinner from '../../../components/common/LoadingSpinner';
import clsx from 'clsx';

const AdminOverview = () => {
  const dispatch = useAppDispatch();
  
  // Get dashboard state from Redux store
  const { admin, loading, error } = useAppSelector(state => state.dashboard);
  const stats = admin.stats;

  /**
   * Fetch dashboard statistics on component mount
   * Uses Redux thunk action for async data fetching
   * Shows toast notifications on success/error
   */
  useEffect(() => {
    // Only fetch if we don't have data or it's stale (older than 5 minutes)
    const shouldFetch = !stats || !admin.lastFetch || 
      (Date.now() - admin.lastFetch > 5 * 60 * 1000);
    
    if (shouldFetch) {
      dispatch(fetchAdminDashboard())
        .unwrap()
        .then(() => {
          // Success notification
          dispatch(addNotification({
            type: 'success',
            message: 'Dashboard data loaded successfully!'
          }));
        })
        .catch((err) => {
          // Error notification
          dispatch(addNotification({
            type: 'error',
            message: err || 'Failed to load dashboard data'
          }));
        });
    }
  }, [dispatch, stats, admin.lastFetch]);

  // Loading state with spinner
  if (loading) {
    return <LoadingSpinner text="Loading Dashboard..." />;
  }

  // Error state with retry option
  if (error) {
    return (
      <div className="p-8 text-center text-rose-500 bg-rose-50 rounded-2xl border border-rose-100">
        <AlertCircle className="mx-auto mb-2 h-8 w-8" />
        <p className="font-bold mb-1">{error}</p>
        <p className="text-xs text-rose-400 mb-4">Please check your connection and try again</p>
        <button 
          onClick={() => dispatch(fetchAdminDashboard())} 
          className="btn-secondary text-xs px-4 py-2"
          type="button"
        >
          Retry
        </button>
      </div>
    );
  }

  // No data state (shouldn't happen, but handle gracefully)
  if (!stats) {
    return <LoadingSpinner text="Initializing..." />;
  }

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="gradient-primary rounded-3xl p-8 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Decorative blur elements */}
        <div className="decorative-circle decorative-circle-top" aria-hidden="true" />
        <div className="decorative-circle decorative-circle-bottom" aria-hidden="true" />
        
        <div className="relative z-10">
          <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 inline-block">
            System Status: Nominal
          </span>
          <h1 className="text-3xl font-bold">Admin Control Center</h1>
          <p className="text-white/90 mt-2 max-w-lg">
            Welcome back. You have {stats.alerts.length} pending alert{stats.alerts.length !== 1 ? 's' : ''} requiring your attention today.
          </p>
        </div>
        
        {/* Quick action buttons */}
        <div className="flex gap-3 relative z-10">
          <button 
            className="btn-base px-6 py-3 bg-white text-blue-600 font-bold rounded-xl text-sm hover:bg-white/90 shadow-sm"
            type="button"
          >
            View Reports
          </button>
          <button 
            className="btn-base px-6 py-3 bg-blue-600 text-white font-bold rounded-xl text-sm hover:bg-blue-700 border border-white/20 shadow-sm"
            type="button"
          >
            System Logs
          </button>
        </div>
      </div>

      {/* Quick Stats Grid - Using extracted StatCard component */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Users" 
          value={stats.users.total} 
          subtitle={`Staff: ${stats.users.staff} | Students: ${stats.users.students}`} 
          icon={Users} 
          color="blue" 
        />
        <StatCard 
          title="Attendance Today" 
          value={`${stats.attendance.students}%`} 
          subtitle={`Staff: ${stats.attendance.staff}%`} 
          icon={CheckSquare} 
          color="green" 
        />
        <StatCard 
          title="Fee Collection" 
          value={`$${(stats.finance.collected / 1000).toFixed(1)}k`} 
          subtitle={`Due: $${(stats.finance.due / 1000).toFixed(1)}k`} 
          icon={DollarSign} 
          color="purple" 
        />
        <StatCard 
          title="Active Alerts" 
          value={stats.alerts.length} 
          subtitle={`${stats.alerts.filter(a => a.type === 'Urgent').length} Urgent`} 
          icon={AlertCircle} 
          color="orange" 
        />
      </div>

      {/* Alerts Section */}
      <div className="card-base">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
            <AlertCircle className="text-red-500" size={20} aria-hidden="true" />
            Compliance & System Alerts
          </h3>
          <button 
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
            type="button"
          >
            View All <ArrowRight size={14} />
          </button>
        </div>

        {/* Alerts list */}
        <div className="space-y-4">
          {stats.alerts.length === 0 ? (
            <div className="text-center py-8 text-slate-400">
              <CheckSquare className="mx-auto mb-2" size={32} />
              <p className="text-sm">No active alerts. All systems nominal.</p>
            </div>
          ) : (
            stats.alerts.map(alert => (
              <div 
                key={alert.id} 
                className={clsx(
                  "flex items-center gap-4 p-4 rounded-xl transition-all cursor-pointer",
                  "border hover:bg-slate-50",
                  alert.type === 'Urgent' ? 'border-red-100' : 'border-slate-100'
                )}
                role="button"
                tabIndex={0}
              >
                {/* Priority indicator dot */}
                <div 
                  className={clsx(
                    "w-2 h-2 rounded-full shrink-0",
                    alert.type === 'Urgent' ? 'bg-red-500 animate-pulse' : 'bg-yellow-500'
                  )}
                  aria-label={`${alert.type} priority`}
                />
                
                {/* Alert text */}
                <p className="flex-1 text-sm font-medium text-slate-700">
                  {alert.text}
                </p>
                
                {/* Priority badge */}
                <span 
                  className={clsx(
                    "px-3 py-1 rounded-full text-xs font-bold shrink-0",
                    alert.type === 'Urgent' 
                      ? 'bg-red-50 text-red-600' 
                      : 'bg-yellow-50 text-yellow-600'
                  )}
                >
                  {alert.type}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
