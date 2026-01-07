import React, { useState, useEffect } from 'react';
import { Users, CheckSquare, DollarSign, AlertCircle, ArrowRight } from 'lucide-react';
import { adminService } from '../../../services/adminService';

const AdminOverview = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await adminService.getDashboardStats();
        if (response.success) {
          setStats(response.data);
        } else {
          setError("Failed to load dashboard data");
        }
      } catch (err) {
        console.error(err);
        setError("Error connecting to server");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const StatCard = ({ title, value, sub, icon: Icon, color }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
       <div className={`p-4 rounded-xl ${color === 'blue' ? 'bg-blue-50 text-blue-600' : color === 'green' ? 'bg-green-50 text-green-600' : color === 'purple' ? 'bg-purple-50 text-purple-600' : 'bg-orange-50 text-orange-600'}`}>
          <Icon size={24} />
       </div>
       <div>
          <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{title}</p>
          {sub && <p className="text-xs text-slate-400 mt-1">{sub}</p>}
       </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="text-slate-500 flex flex-col items-center gap-2">
           <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
           <p className="text-sm font-medium">Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-rose-500 bg-rose-50 rounded-2xl border border-rose-100">
        <AlertCircle className="mx-auto mb-2 h-8 w-8" />
        <p className="font-bold">{error}</p>
        <button onClick={() => window.location.reload()} className="mt-4 text-xs bg-rose-100 px-3 py-1.5 rounded-lg hover:bg-rose-200 transition-colors">Retry</button>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header Banner */}
      <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
         <div className="relative z-10">
            <span className="bg-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 inline-block">System Status: Nominal</span>
            <h1 className="text-3xl font-bold">Admin Control Center</h1>
            <p className="text-slate-400 mt-2 max-w-lg">Welcome back. You have {stats.alerts.length} pending alerts requiring your attention today.</p>
         </div>
         <div className="flex gap-3 relative z-10">
            <button className="px-6 py-3 bg-white text-slate-900 font-bold rounded-xl text-sm hover:bg-slate-100 transition-colors">View Reports</button>
            <button className="px-6 py-3 bg-slate-800 text-white font-bold rounded-xl text-sm hover:bg-slate-700 transition-colors border border-slate-700">System Logs</button>
         </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         <StatCard 
            title="Total Users" 
            value={stats.users.total} 
            sub={`Staff: ${stats.users.staff} | Students: ${stats.users.students}`} 
            icon={Users} 
            color="blue" 
         />
         <StatCard 
            title="Attendance Today" 
            value={`${stats.attendance.students}%`} 
            sub={`Staff: ${stats.attendance.staff}%`} 
            icon={CheckSquare} 
            color="green" 
         />
         <StatCard 
            title="Fee Collection" 
            value={`$${(stats.finance.collected / 1000).toFixed(1)}k`} 
            sub={`Due: $${(stats.finance.due / 1000).toFixed(1)}k`} 
            icon={DollarSign} 
            color="purple" 
         />
         <StatCard 
            title="Active Alerts" 
            value={stats.alerts.length} 
            sub={`${stats.alerts.filter(a => a.type === 'Urgent').length} Urgent`} 
            icon={AlertCircle} 
            color="orange" 
         />
      </div>

      {/* Alerts Section */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
         <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
               <AlertCircle className="text-red-500" size={20}/> Compliance & System Alerts
            </h3>
            <button className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">View All <ArrowRight size={14}/></button>
         </div>
         <div className="space-y-4">
            {stats.alerts.map(alert => (
               <div key={alert.id} className="flex items-center gap-4 p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                  <div className={`w-2 h-2 rounded-full ${alert.type === 'Urgent' ? 'bg-red-500' : 'bg-yellow-500'}`}></div>
                  <p className="flex-1 text-sm font-medium text-slate-700">{alert.text}</p>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${alert.type === 'Urgent' ? 'bg-red-50 text-red-600' : 'bg-yellow-50 text-yellow-600'}`}>{alert.type}</span>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default AdminOverview;
