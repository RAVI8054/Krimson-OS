/**
 * @component AdminOverview
 * @description Admin Control Dashboard - Central operational hub for school system
 * 
 * Screen 1: Admin Control Dashboard
 * Purpose: Central operational hub providing a live overview of the entire school system
 * 
 * Key Widgets:
 * - Total Students / Staff / Classes / Courses
 * - Current-day Attendance (students vs staff)
 * - Admissions Pipeline (inquiry → enrolled)
 * - Fee Collection and Due Summary
 * - Compliance Alerts and System Notifications
 * - Quick Actions (Add Student, Create User, View Reports)
 * 
 * Integration: Core Aggregation API + Admission + Attendance + Finance Modules
 * Design: Dark header dashboard with quick stats, alert bar, and shortcut widgets
 * 
 * @returns {JSX.Element} Admin dashboard interface
 * 
 * @example
 * <AdminOverview />
 */
import React from 'react';
import { 
  Users, 
  UserCheck, 
  BookOpen, 
  GraduationCap, 
  CheckCircle, 
  XCircle,
  UserPlus,
  FileText,
  TrendingUp,
  AlertTriangle,
  DollarSign,
  Calendar,
  Eye,
  Settings
} from 'lucide-react';
import clsx from 'clsx';

// ========================================
// MOCK DATA - Replace with API calls in future
// ========================================
const mockData = {
  // Top Summary Cards
  summary: {
    totalStudents: 1247,
    totalStaff: 89,
    totalClasses: 42,
    totalCourses: 156
  },
  
  // Today's Attendance
  attendance: {
    students: {
      present: 1189,
      absent: 58,
      total: 1247,
      percentage: 95.3
    },
    staff: {
      present: 84,
      absent: 5,
      total: 89,
      percentage: 94.4
    }
  },
  
  // Admissions Funnel
  admissions: {
    inquiry: 234,
    applied: 187,
    verified: 142,
    enrolled: 98
  },
  
  // Finance Snapshot
  finance: {
    todayCollection: 45680,
    totalDue: 234500
  },
  
  // Alerts & Notifications
  alerts: [
    { id: 1, type: 'compliance', severity: 'high', message: 'Accreditation renewal due in 15 days', timestamp: '2 hours ago' },
    { id: 2, type: 'system', severity: 'medium', message: 'Server backup completed successfully', timestamp: '3 hours ago' },
    { id: 3, type: 'compliance', severity: 'high', message: '12 student medical records need update', timestamp: '5 hours ago' },
    { id: 4, type: 'system', severity: 'low', message: 'System maintenance scheduled for weekend', timestamp: '1 day ago' }
  ]
};
// ========================================

const AdminOverview = () => {
  // TODO: Replace with actual API calls
  // const dispatch = useAppDispatch();
  // const { admin, loading, error } = useAppSelector(state => state.dashboard);
  
  // Calculate admission funnel percentages
  const totalInquiries = mockData.admissions.inquiry;
  const calculatePercentage = (value) => Math.round((value / totalInquiries) * 100);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* ========================================
          DARK HEADER - Admin Control Dashboard
          ======================================== */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="bg-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-400/30">
                Live Dashboard
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Admin Control Dashboard
          </h1>
          <p className="text-blue-100 text-sm max-w-2xl">
            Central operational hub providing real-time overview of the entire school system
          </p>
        </div>
      </div>

      {/* ========================================
          TOP SUMMARY CARDS
          Total Students | Total Staff | Classes | Courses
          ======================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Students */}
        <div className="card-base bg-gradient-to-br from-blue-50 to-white border-blue-100 hover:shadow-lg transition-all group">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-600 mb-1">Total Students</p>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">{mockData.summary.totalStudents.toLocaleString()}</h3>
              <p className="text-xs text-slate-500">Active enrollment</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Total Staff */}
        <div className="card-base bg-gradient-to-br from-purple-50 to-white border-purple-100 hover:shadow-lg transition-all group">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-600 mb-1">Total Staff</p>
              <h3 className="text-3xl font-bold text-purple-600 mb-2">{mockData.summary.totalStaff}</h3>
              <p className="text-xs text-slate-500">Teaching & support staff</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <UserCheck className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Total Classes */}
        <div className="card-base bg-gradient-to-br from-green-50 to-white border-green-100 hover:shadow-lg transition-all group">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-600 mb-1">Classes</p>
              <h3 className="text-3xl font-bold text-green-600 mb-2">{mockData.summary.totalClasses}</h3>
              <p className="text-xs text-slate-500">Active sections</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        {/* Total Courses */}
        <div className="card-base bg-gradient-to-br from-orange-50 to-white border-orange-100 hover:shadow-lg transition-all group">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-600 mb-1">Courses</p>
              <h3 className="text-3xl font-bold text-orange-600 mb-2">{mockData.summary.totalCourses}</h3>
              <p className="text-xs text-slate-500">Curriculum programs</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
          TWO COLUMN LAYOUT
          Left: Attendance + Admissions
          Right: Finance + Quick Actions
          ======================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          {/* ========================================
              TODAY'S ATTENDANCE PANEL
              Students Present/Absent | Staff Present/Absent
              ======================================== */}
          <div className="card-base">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-800">Today's Attendance</h2>
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                Live
              </span>
            </div>

            {/* Students Attendance */}
            <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-slate-700">Students</h3>
                <span className="text-2xl font-bold text-blue-600">
                  {mockData.attendance.students.percentage}%
                </span>
              </div>
              
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-2 flex-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <div>
                    <p className="text-xs text-slate-600">Present</p>
                    <p className="text-lg font-bold text-green-700">{mockData.attendance.students.present}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <XCircle className="w-4 h-4 text-red-600" />
                  <div>
                    <p className="text-xs text-slate-600">Absent</p>
                    <p className="text-lg font-bold text-red-700">{mockData.attendance.students.absent}</p>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div 
                  className="bg-gradient-to-r from-green-500 to-green-600 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${mockData.attendance.students.percentage}%` }}
                />
              </div>
            </div>

            {/* Staff Attendance */}
            <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-slate-700">Staff</h3>
                <span className="text-2xl font-bold text-purple-600">
                  {mockData.attendance.staff.percentage}%
                </span>
              </div>
              
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-2 flex-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <div>
                    <p className="text-xs text-slate-600">Present</p>
                    <p className="text-lg font-bold text-green-700">{mockData.attendance.staff.present}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <XCircle className="w-4 h-4 text-red-600" />
                  <div>
                    <p className="text-xs text-slate-600">Absent</p>
                    <p className="text-lg font-bold text-red-700">{mockData.attendance.staff.absent}</p>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-purple-600 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${mockData.attendance.staff.percentage}%` }}
                />
              </div>
            </div>
          </div>

          {/* ========================================
              ADMISSIONS FUNNEL WIDGET
              Inquiry → Applied → Verified → Enrolled
              ======================================== */}
          <div className="card-base">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-800">Admissions Pipeline</h2>
              <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                <Eye className="w-4 h-4" />
                View All
              </button>
            </div>

            <div className="space-y-4">
              {/* Inquiry Stage */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">1</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-700">Inquiry</span>
                  </div>
                  <span className="text-lg font-bold text-blue-600">{mockData.admissions.inquiry}</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: '100%' }} />
                </div>
                <p className="text-xs text-slate-500 mt-1">100% - Initial contact</p>
              </div>

              {/* Applied Stage */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <span className="text-indigo-600 font-bold text-sm">2</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-700">Applied</span>
                  </div>
                  <span className="text-lg font-bold text-indigo-600">{mockData.admissions.applied}</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-2 rounded-full" style={{ width: `${calculatePercentage(mockData.admissions.applied)}%` }} />
                </div>
                <p className="text-xs text-slate-500 mt-1">{calculatePercentage(mockData.admissions.applied)}% - Application submitted</p>
              </div>

              {/* Verified Stage */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-sm">3</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-700">Verified</span>
                  </div>
                  <span className="text-lg font-bold text-purple-600">{mockData.admissions.verified}</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full" style={{ width: `${calculatePercentage(mockData.admissions.verified)}%` }} />
                </div>
                <p className="text-xs text-slate-500 mt-1">{calculatePercentage(mockData.admissions.verified)}% - Documents verified</p>
              </div>

              {/* Enrolled Stage */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">Enrolled</span>
                  </div>
                  <span className="text-lg font-bold text-green-600">{mockData.admissions.enrolled}</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{ width: `${calculatePercentage(mockData.admissions.enrolled)}%` }} />
                </div>
                <p className="text-xs text-slate-500 mt-1">{calculatePercentage(mockData.admissions.enrolled)}% - Successfully enrolled</p>
              </div>
            </div>

            {/* Conversion Summary */}
            <div className="mt-6 pt-4 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-700">Conversion Rate</span>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-lg font-bold text-green-600">
                    {Math.round((mockData.admissions.enrolled / mockData.admissions.inquiry) * 100)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          {/* ========================================
              FINANCE SNAPSHOT
              Today's Collection | Total Due Amount
              ======================================== */}
          <div className="card-base">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-800">Finance Snapshot</h2>
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>

            {/* Today's Collection */}
            <div className="mb-4 p-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-green-700 uppercase tracking-wide">Today's Collection</p>
                  <h3 className="text-3xl font-bold text-green-700">
                    ₹{mockData.finance.todayCollection.toLocaleString()}
                  </h3>
                </div>
              </div>
              <p className="text-xs text-green-600 mt-2">Last updated: {new Date().toLocaleTimeString()}</p>
            </div>

            {/* Total Due Amount */}
            <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-orange-700 uppercase tracking-wide">Total Due Amount</p>
                  <h3 className="text-3xl font-bold text-orange-700">
                    ₹{mockData.finance.totalDue.toLocaleString()}
                  </h3>
                </div>
              </div>
              <p className="text-xs text-orange-600 mt-2">Requires follow-up</p>
            </div>
          </div>

          {/* ========================================
              QUICK ACTIONS
              Add Student | Create User | View Reports
              ======================================== */}
          <div className="card-base">
            <h2 className="text-lg font-bold text-slate-800 mb-6">Quick Actions</h2>
            
            <div className="space-y-3">
              {/* Add Student */}
              <button className="w-full btn-base bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 py-4 rounded-xl flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <UserPlus className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-sm">Add Student</p>
                    <p className="text-xs text-blue-100">Enroll new student</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <span className="text-white font-bold">→</span>
                </div>
              </button>

              {/* Create User */}
              <button className="w-full btn-base bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 py-4 rounded-xl flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-sm">Create User</p>
                    <p className="text-xs text-purple-100">Add staff or admin</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <span className="text-white font-bold">→</span>
                </div>
              </button>

              {/* View Reports */}
              <button className="w-full btn-base bg-gradient-to-r from-slate-600 to-slate-700 text-white hover:from-slate-700 hover:to-slate-800 py-4 rounded-xl flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-sm">View Reports</p>
                    <p className="text-xs text-slate-100">Analytics & insights</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <span className="text-white font-bold">→</span>
                </div>
              </button>
            </div>
          </div>

          {/* ========================================
              ALERT & NOTIFICATION BAR
              Compliance Alerts | System Issues
              ======================================== */}
          <div className="card-base">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-800">Alerts & Notifications</h2>
              <span className="text-xs font-semibold bg-red-100 text-red-600 px-3 py-1 rounded-full">
                {mockData.alerts.filter(a => a.severity === 'high').length} High Priority
              </span>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
              {mockData.alerts.map((alert) => (
                <div 
                  key={alert.id}
                  className={clsx(
                    "p-4 rounded-xl border-l-4 transition-all hover:shadow-md cursor-pointer",
                    alert.severity === 'high' && "bg-red-50 border-red-500",
                    alert.severity === 'medium' && "bg-yellow-50 border-yellow-500",
                    alert.severity === 'low' && "bg-blue-50 border-blue-500"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className={clsx(
                      "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                      alert.severity === 'high' && "bg-red-100",
                      alert.severity === 'medium' && "bg-yellow-100",
                      alert.severity === 'low' && "bg-blue-100"
                    )}>
                      <AlertTriangle className={clsx(
                        "w-4 h-4",
                        alert.severity === 'high' && "text-red-600",
                        alert.severity === 'medium' && "text-yellow-600",
                        alert.severity === 'low' && "text-blue-600"
                      )} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className="text-sm font-semibold text-slate-800">{alert.message}</p>
                        <span className={clsx(
                          "text-xs font-bold px-2 py-1 rounded-full flex-shrink-0",
                          alert.type === 'compliance' && "bg-purple-100 text-purple-700",
                          alert.type === 'system' && "bg-blue-100 text-blue-700"
                        )}>
                          {alert.type}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">{alert.timestamp}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center py-4">
        <p className="text-xs text-slate-400">
          <span className="font-semibold">Note:</span> All data displayed is currently mock data. 
          API integration pending for real-time statistics.
        </p>
      </div>
    </div>
  );
};

export default AdminOverview;
