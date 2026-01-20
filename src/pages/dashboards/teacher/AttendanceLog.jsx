import React, { useState, useEffect } from 'react';
import { TEACHER_DATA } from '../../../data/teacherData';
import { 
  Check, X, Save, User, Clock, AlertCircle, Send, 
  CheckCircle, Calendar, Filter, Search, Users,
  FileText, TrendingUp, Bell, ChevronDown, MessageSquare,
  UserX, UserCheck, Timer, ChevronLeft, ChevronRight
} from 'lucide-react';

const AttendanceLog = () => {
  const { attendance: initialAttendance } = TEACHER_DATA;
  
  // State management
  const [attendance, setAttendance] = useState(initialAttendance);
  const [selectedClass, setSelectedClass] = useState('Grade 9-A');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [viewMode, setViewMode] = useState('all'); // 'all', 'present', 'absent', 'late'
  const [searchQuery, setSearchQuery] = useState('');
  const [showSummary, setShowSummary] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter attendance based on view mode and search
  const filteredAttendance = attendance.filter(student => {
    // Filter by view mode
    if (viewMode !== 'all') {
      if (viewMode === 'present' && student.status !== 'Present') return false;
      if (viewMode === 'absent' && student.status !== 'Absent') return false;
      if (viewMode === 'late' && student.status !== 'Late') return false;
    }
    
    // Filter by search query
    if (searchQuery) {
      return student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             student.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
             student.roll.toString().includes(searchQuery);
    }
    
    return true;
  });

  // Calculate statistics
  const stats = {
    total: attendance.length,
    present: attendance.filter(s => s.status === 'Present').length,
    absent: attendance.filter(s => s.status === 'Absent').length,
    late: attendance.filter(s => s.status === 'Late').length,
    percentage: Math.round((attendance.filter(s => s.status === 'Present').length / attendance.length) * 100)
  };

  // Mark individual attendance
  const markAttendance = (studentId, status) => {
    setAttendance(prev => prev.map(student => 
      student.id === studentId ? { ...student, status, reason: status === 'Absent' ? student.reason : undefined } : student
    ));
  };

  // Mark all present
  const markAllPresent = () => {
    setAttendance(prev => prev.map(student => ({ ...student, status: 'Present', reason: undefined })));
  };

  // Update absence reason
  const updateReason = (studentId, reason) => {
    setAttendance(prev => prev.map(student => 
      student.id === studentId ? { ...student, reason } : student
    ));
  };

  // Mock API call
  useEffect(() => {
    // TODO: Replace with actual API call
    // fetch('/api/teacher/attendance')
    //   .then(res => res.json())
    //   .then(data => setAttendance(data));
    console.log('Attendance Log loaded - Ready for API integration');
  }, []);

  // Absence reason options
  const reasonOptions = [
    'Sick Leave',
    'Family Emergency',
    'Medical Appointment',
    'Personal Leave',
    'School Event',
    'Other'
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header Section with Gradient */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>
        
        <div className="relative z-10">
          <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3 backdrop-blur-sm shadow-sm">
            Attendance & Class Log
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                Daily Attendance Register
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-sm md:text-base opacity-90 font-medium">
                <span className="flex items-center gap-2">
                  <Users size={18} />
                  {selectedClass}
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <Calendar size={18} />
                  {new Date(selectedDate).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl text-center">
                <p className="text-xs opacity-80">Attendance Rate</p>
                <p className="text-2xl font-bold">{stats.percentage}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div 
          className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer hover:scale-105 hover:shadow-lg duration-300 ${
            viewMode === 'all' 
              ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white border-blue-500 shadow-lg' 
              : 'bg-white border-blue-200 hover:border-blue-300'
          }`}
          onClick={() => setViewMode('all')}
        >
          <div className="flex items-center justify-between mb-2">
            <p className={`text-xs font-bold uppercase tracking-wider ${viewMode === 'all' ? 'text-white/80' : 'text-slate-400'}`}>
              Total Students
            </p>
            <Users className={viewMode === 'all' ? 'text-white opacity-60' : 'text-blue-400 opacity-60'} size={20} />
          </div>
          <h3 className={`text-2xl md:text-3xl font-bold ${viewMode === 'all' ? 'text-white' : 'text-slate-800'}`}>
            {stats.total}
          </h3>
        </div>

        <div 
          className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer hover:scale-105 hover:shadow-lg duration-300 ${
            viewMode === 'present' 
              ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white border-green-500 shadow-lg' 
              : 'bg-white border-green-200 hover:border-green-300'
          }`}
          onClick={() => setViewMode('present')}
        >
          <div className="flex items-center justify-between mb-2">
            <p className={`text-xs font-bold uppercase tracking-wider ${viewMode === 'present' ? 'text-white/80' : 'text-slate-400'}`}>
              Present
            </p>
            <UserCheck className={viewMode === 'present' ? 'text-white opacity-60' : 'text-green-400 opacity-60'} size={20} />
          </div>
          <h3 className={`text-2xl md:text-3xl font-bold ${viewMode === 'present' ? 'text-white' : 'text-green-600'}`}>
            {stats.present}
          </h3>
        </div>

        <div 
          className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer hover:scale-105 hover:shadow-lg duration-300 ${
            viewMode === 'absent' 
              ? 'bg-gradient-to-br from-red-500 to-pink-500 text-white border-red-500 shadow-lg' 
              : 'bg-white border-red-200 hover:border-red-300'
          }`}
          onClick={() => setViewMode('absent')}
        >
          <div className="flex items-center justify-between mb-2">
            <p className={`text-xs font-bold uppercase tracking-wider ${viewMode === 'absent' ? 'text-white/80' : 'text-slate-400'}`}>
              Absent
            </p>
            <UserX className={viewMode === 'absent' ? 'text-white opacity-60' : 'text-red-400 opacity-60'} size={20} />
          </div>
          <h3 className={`text-2xl md:text-3xl font-bold ${viewMode === 'absent' ? 'text-white' : 'text-red-600'}`}>
            {stats.absent}
          </h3>
        </div>

        <div 
          className={`p-4 md:p-6 rounded-3xl shadow-sm border-2 transition-all cursor-pointer hover:scale-105 hover:shadow-lg duration-300 ${
            viewMode === 'late' 
              ? 'bg-gradient-to-br from-orange-500 to-amber-500 text-white border-orange-500 shadow-lg' 
              : 'bg-white border-orange-200 hover:border-orange-300'
          }`}
          onClick={() => setViewMode('late')}
        >
          <div className="flex items-center justify-between mb-2">
            <p className={`text-xs font-bold uppercase tracking-wider ${viewMode === 'late' ? 'text-white/80' : 'text-slate-400'}`}>
              Late
            </p>
            <Timer className={viewMode === 'late' ? 'text-white opacity-60' : 'text-orange-400 opacity-60'} size={20} />
          </div>
          <h3 className={`text-2xl md:text-3xl font-bold ${viewMode === 'late' ? 'text-white' : 'text-orange-600'}`}>
            {stats.late}
          </h3>
        </div>
      </div>

      {/* Action Bar */}
      <div className="bg-white p-4 md:p-6 rounded-3xl shadow-md">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search by name, roll number, or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-sm font-medium focus:border-blue-400 focus:outline-none transition-colors"
            />
          </div>

          {/* Quick Actions */}
          <div className="flex gap-3">
            <button
              onClick={markAllPresent}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold hover:from-green-600 hover:to-emerald-600 shadow-md transition-all flex items-center gap-2 active:scale-95"
            >
              <CheckCircle size={18} />
              <span className="hidden md:inline">Mark All Present</span>
              <span className="md:hidden">All Present</span>
            </button>
            <button
              onClick={() => setShowSummary(!showSummary)}
              className="px-6 py-3 bg-slate-100 text-slate-700 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center gap-2"
            >
              <TrendingUp size={18} />
              <span className="hidden md:inline">Summary</span>
              <ChevronDown size={16} className={`transition-transform ${showSummary ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Summary Panel */}
        {showSummary && (
          <div className="mt-4 p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-blue-100">
            <h3 className="font-bold text-slate-800 mb-3 text-sm">Attendance Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="text-center">
                <p className="text-xs text-slate-500 mb-1">Attendance Rate</p>
                <p className="text-lg font-bold text-blue-600">{stats.percentage}%</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-500 mb-1">Present</p>
                <p className="text-lg font-bold text-green-600">{stats.present}/{stats.total}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-500 mb-1">Absent</p>
                <p className="text-lg font-bold text-red-600">{stats.absent}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-500 mb-1">Late Arrivals</p>
                <p className="text-lg font-bold text-orange-600">{stats.late}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Attendance List */}
      <div className="bg-white rounded-3xl shadow-md overflow-hidden">
        <div className="p-4 md:p-6 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-blue-100">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-800 text-lg">
              Student List 
              <span className="ml-2 text-sm text-slate-500 font-normal">
                (Showing {Math.min((currentPage - 1) * itemsPerPage + 1, filteredAttendance.length)} - {Math.min(currentPage * itemsPerPage, filteredAttendance.length)} of {filteredAttendance.length})
              </span>
            </h3>
            {viewMode !== 'all' && (
              <button
                onClick={() => setViewMode('all')}
                className="text-xs text-blue-600 font-bold hover:text-blue-700"
              >
                Clear Filter
              </button>
            )}
          </div>
        </div>

        {/* Desktop/Tablet View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Roll</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Student Name</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Reason / Notes</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredAttendance.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((student) => (
                <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold shadow-md">
                      {student.roll}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <h4 className="font-bold text-slate-800">{student.name}</h4>
                      <p className="text-xs text-slate-500">ID: {student.id}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex bg-slate-100 p-1.5 rounded-xl w-fit gap-1">
                      <button
                        onClick={() => markAttendance(student.id, 'Present')}
                        className={`px-4 py-2 rounded-lg transition-all font-bold text-xs flex items-center gap-1 ${
                          student.status === 'Present'
                            ? 'bg-green-500 text-white shadow-md'
                            : 'text-slate-400 hover:text-green-600 hover:bg-green-50'
                        }`}
                      >
                        <Check size={16} />
                        Present
                      </button>
                      <button
                        onClick={() => markAttendance(student.id, 'Absent')}
                        className={`px-4 py-2 rounded-lg transition-all font-bold text-xs flex items-center gap-1 ${
                          student.status === 'Absent'
                            ? 'bg-red-500 text-white shadow-md'
                            : 'text-slate-400 hover:text-red-600 hover:bg-red-50'
                        }`}
                      >
                        <X size={16} />
                        Absent
                      </button>
                      <button
                        onClick={() => markAttendance(student.id, 'Late')}
                        className={`px-4 py-2 rounded-lg transition-all font-bold text-xs flex items-center gap-1 ${
                          student.status === 'Late'
                            ? 'bg-orange-500 text-white shadow-md'
                            : 'text-slate-400 hover:text-orange-600 hover:bg-orange-50'
                        }`}
                      >
                        <Clock size={16} />
                        Late
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {student.status === 'Absent' && (
                      <div className="space-y-2">
                        <select
                          value={student.reason || ''}
                          onChange={(e) => updateReason(student.id, e.target.value)}
                          className="w-full px-3 py-2 border-2 border-slate-200 rounded-xl text-sm focus:border-pink-400 focus:outline-none"
                        >
                          <option value="">Select reason...</option>
                          {reasonOptions.map(reason => (
                            <option key={reason} value={reason}>{reason}</option>
                          ))}
                        </select>
                        {student.notifiedParent ? (
                          <span className="flex items-center gap-1 text-xs text-green-600 font-medium">
                            <CheckCircle size={12} />
                            Parent Notified
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-xs text-orange-600 font-medium">
                            <AlertCircle size={12} />
                            Pending Notification
                          </span>
                        )}
                      </div>
                    )}
                    {student.status === 'Late' && student.arrivalTime && (
                      <div className="text-sm text-slate-600">
                        <span className="font-medium">Arrived:</span> {student.arrivalTime}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {student.status === 'Absent' && (
                      <button className="px-3 py-1.5 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg text-xs font-bold hover:bg-blue-100 transition-colors flex items-center gap-1">
                        <MessageSquare size={12} />
                        Note
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="md:hidden divide-y divide-slate-100">
          {filteredAttendance.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((student) => (
            <div key={student.id} className="p-4">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold shadow-md flex-shrink-0">
                  {student.roll}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 mb-1">{student.name}</h4>
                  <p className="text-xs text-slate-500">ID: {student.id}</p>
                </div>
              </div>

              {/* Status Buttons */}
              <div className="flex bg-slate-100 p-1.5 rounded-xl mb-3 gap-1">
                <button
                  onClick={() => markAttendance(student.id, 'Present')}
                  className={`flex-1 py-2 rounded-lg transition-all font-bold text-xs flex items-center justify-center gap-1 ${
                    student.status === 'Present'
                      ? 'bg-green-500 text-white shadow-md'
                      : 'text-slate-400'
                  }`}
                >
                  <Check size={14} />
                  Present
                </button>
                <button
                  onClick={() => markAttendance(student.id, 'Absent')}
                  className={`flex-1 py-2 rounded-lg transition-all font-bold text-xs flex items-center justify-center gap-1 ${
                    student.status === 'Absent'
                      ? 'bg-red-500 text-white shadow-md'
                      : 'text-slate-400'
                  }`}
                >
                  <X size={14} />
                  Absent
                </button>
                <button
                  onClick={() => markAttendance(student.id, 'Late')}
                  className={`flex-1 py-2 rounded-lg transition-all font-bold text-xs flex items-center justify-center gap-1 ${
                    student.status === 'Late'
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'text-slate-400'
                  }`}
                >
                  <Clock size={14} />
                  Late
                </button>
              </div>

              {/* Reason/Notes */}
              {student.status === 'Absent' && (
                <div className="space-y-2">
                  <select
                    value={student.reason || ''}
                    onChange={(e) => updateReason(student.id, e.target.value)}
                    className="w-full px-3 py-2 border-2 border-slate-200 rounded-xl text-sm focus:border-pink-400 focus:outline-none"
                  >
                    <option value="">Select reason...</option>
                    {reasonOptions.map(reason => (
                      <option key={reason} value={reason}>{reason}</option>
                    ))}
                  </select>
                  {student.notifiedParent ? (
                    <span className="flex items-center gap-1 text-xs text-green-600 font-medium">
                      <CheckCircle size={12} />
                      Parent Notified
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs text-orange-600 font-medium">
                      <AlertCircle size={12} />
                      Pending Notification
                    </span>
                  )}
                </div>
              )}
              {student.status === 'Late' && student.arrivalTime && (
                <div className="text-sm text-slate-600 bg-orange-50 p-2 rounded-lg">
                  <span className="font-medium">Arrived:</span> {student.arrivalTime}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAttendance.length === 0 && (
          <div className="p-12 text-center">
            <UserX className="mx-auto text-slate-300 mb-3" size={48} />
            <h3 className="text-lg font-bold text-slate-800 mb-2">No Students Found</h3>
            <p className="text-sm text-slate-500 mb-4">
              {searchQuery ? 'Try adjusting your search query' : 'No students match the selected filter'}
            </p>
            {(searchQuery || viewMode !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setViewMode('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 shadow-md transition-all"
              >
                Clear All Filters
              </button>
            )}
          </div>
        )}

        {/* Pagination Controls */}
        {filteredAttendance.length > itemsPerPage && (
          <div className="p-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-sm text-slate-500 hidden md:inline">
              Page {currentPage} of {Math.ceil(filteredAttendance.length / itemsPerPage)}
            </span>
            <div className="flex gap-2 ml-auto">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 border border-slate-200 rounded-lg disabled:opacity-50 hover:bg-slate-50"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredAttendance.length / itemsPerPage)))}
                disabled={currentPage === Math.ceil(filteredAttendance.length / itemsPerPage)}
                className="p-2 border border-slate-200 rounded-lg disabled:opacity-50 hover:bg-slate-50"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Submit Section */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
            <Bell size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Ready to Submit?</h3>
            <p className="text-sm opacity-90">
              Submitting this attendance log will automatically notify parents of absent students via SMS and app notifications.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium">
                {stats.absent} parent{stats.absent !== 1 ? 's' : ''} to notify
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium">
                Auto-saved draft
              </span>
            </div>
          </div>
          <button className="w-full md:w-auto px-8 py-4 bg-white text-purple-600 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95">
            <Send size={20} />
            <div className="text-left">
              <div className="font-bold">Submit Log</div>
              <div className="text-[10px] opacity-70">get in app</div>
            </div>
          </button>
        </div>
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-3xl border border-blue-100">
          <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <FileText className="text-blue-500" size={20} />
            Attendance Guidelines
          </h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
              <span>Mark attendance within first 15 minutes of class</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
              <span>Add reasons for all absent students</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
              <span>Parents are auto-notified upon submission</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-3xl border border-pink-100">
          <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <TrendingUp className="text-pink-500" size={20} />
            Class Performance
          </h3>
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Weekly Average</span>
                <span className="text-sm font-bold text-slate-800">94%</span>
              </div>
              <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Monthly Average</span>
                <span className="text-sm font-bold text-slate-800">92%</span>
              </div>
              <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceLog;
