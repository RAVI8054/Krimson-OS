import React, { useState } from 'react';
import { ADMIN_DATA } from '../../../data/adminData';
import { 
  Users, Edit, Lock, CheckCircle, AlertTriangle, XCircle, 
  Plus, Download, RefreshCw, Building, UserCheck, Calendar,
  ChevronRight, FileText, Info, Filter, Search, X
} from 'lucide-react';

/**
 * ClassConfig Component - ADMIN SCREEN 4
 * Comprehensive Class & Section Configuration Management
 * 
 * Features:
 * - Top Summary with key metrics
 * - Grade List with status indicators
 * - Section Table with comprehensive details
 * - Class Teacher Assignment
 * - Student Allocation View
 * - Warnings & Alerts system
 * - Action Buttons for operations
 * - Status & Lock indicators
 * - Audit information
 * - Filters for grade, section, teacher, status
 * 
 * Theme: Matches Admin Sidebar (Cyan → Blue → Pink gradient)
 * 
 * TODO: API Integration
 * - GET /api/admin/classes/overview - Top summary stats
 * - GET /api/admin/classes/grades - Grades list
 * - GET /api/admin/classes/sections/:gradeId - Section details
 * - POST /api/admin/classes/sections - Add section
 * - PUT /api/admin/classes/sections/:id - Update section
 * - POST /api/admin/classes/students/auto-assign - Auto-distribute students
 */

const ClassConfig = () => {
  const [selectedGrade, setSelectedGrade] = useState(ADMIN_DATA.grades[0]);
  const [selectedSection, setSelectedSection] = useState(null);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({ status: 'all', teacher: 'all', search: '' });

  // Calculate summary statistics
  const totalGrades = ADMIN_DATA.grades.length;
  const totalSections = ADMIN_DATA.grades.reduce((sum, grade) => sum + grade.sections, 0);
  const totalStudentsAllocated = ADMIN_DATA.grades.reduce((sum, grade) => sum + grade.totalStudents, 0);
  const unassignedStudents = ADMIN_DATA.unassignedStudents?.length || 0;
  const activeAcademicYear = ADMIN_DATA.academicYears?.find(y => y.isActive)?.label || '2025-2026';

  // Identify warnings
  const warnings = [];
  ADMIN_DATA.grades.forEach(grade => {
    grade.sectionsData.forEach(section => {
      if (section.students > section.capacity) {
        warnings.push({ type: 'capacity', section: section.id, message: `Section ${section.id} capacity exceeded (${section.students}/${section.capacity})` });
      }
      if (!section.teacher) {
        warnings.push({ type: 'teacher', section: section.id, message: `Section ${section.id} has no class teacher assigned` });
      }
      if (!section.timetableLinked) {
        warnings.push({ type: 'timetable', section: section.id, message: `Section ${section.id} timetable not linked` });
      }
    });
  });

  if (unassignedStudents > 0) {
    warnings.push({ type: 'students', message: `${unassignedStudents} students unassigned` });
  }

  // Filter sections based on active filters
  const filteredSections = selectedGrade.sectionsData.filter(section => {
    if (filters.status !== 'all' && section.status.toLowerCase() !== filters.status.toLowerCase()) return false;
    if (filters.teacher !== 'all' && section.teacherId !== filters.teacher) return false;
    if (filters.search && !section.section.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'text-green-600 bg-green-50';
      case 'Locked': return 'text-red-600 bg-red-50';
      case 'Draft': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Active': return <CheckCircle size={16} />;
      case 'Locked': return <Lock size={16} />;
      case 'Draft': return <AlertTriangle size={16} />;
      default: return <Info size={16} />;
    }
  };

  return (
    <div className="space-y-6">
      {/* 🔹 1. TOP SUMMARY HEADER */}
      <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 rounded-3xl p-8 text-white shadow-lg">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Class & Section Configuration</h2>
            <p className="text-white/80 text-sm">Manage grade structure, sections, and student allocation</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span className="text-sm font-semibold">{activeAcademicYear}</span>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <Building size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold">{totalGrades}</p>
                <p className="text-xs text-white/80">Total Grades</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <FileText size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold">{totalSections}</p>
                <p className="text-xs text-white/80">Total Sections</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <Users size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold">{totalStudentsAllocated}</p>
                <p className="text-xs text-white/80">Students Allocated</p>
              </div>
            </div>
          </div>

          <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 border ${unassignedStudents > 0 ? 'border-yellow-300 ring-2 ring-yellow-300/50' : 'border-white/20'}`}>
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${unassignedStudents > 0 ? 'bg-yellow-500' : 'bg-white/20'}`}>
                <AlertTriangle size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold">{unassignedStudents}</p>
                <p className="text-xs text-white/80">Unassigned Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 6. WARNINGS & ALERTS */}
      {warnings.length > 0 && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
            <div className="flex-1">
              <h3 className="font-bold text-yellow-800 mb-2">Attention Required</h3>
              <div className="space-y-1">
                {warnings.slice(0, 5).map((warning, idx) => (
                  <p key={idx} className="text-sm text-yellow-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-600"></span>
                    {warning.message}
                  </p>
                ))}
                {warnings.length > 5 && (
                  <p className="text-xs text-yellow-600 mt-2">+ {warnings.length - 5} more alerts</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🔹 7. ACTION BUTTONS */}
      <div className="flex flex-wrap gap-3 items-center justify-between">
        <div className="flex flex-wrap gap-3">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2">
            <Plus size={18} />
            Add Grade
          </button>
          <button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2">
            <Plus size={18} />
            Add Section
          </button>
          <button className="bg-white border-2 border-blue-500 text-blue-600 px-5 py-2.5 rounded-xl font-semibold hover:bg-blue-50 transition-all flex items-center gap-2">
            <RefreshCw size={18} />
            Auto-Assign Students
          </button>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={`px-4 py-2.5 rounded-xl font-semibold transition-all flex items-center gap-2 ${showFilters ? 'bg-blue-500 text-white' : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'}`}
          >
            <Filter size={18} />
            Filters
          </button>
          <button className="bg-white border border-slate-300 text-slate-700 px-4 py-2.5 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center gap-2">
            <Download size={18} />
            Export
          </button>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Status</label>
              <select 
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="locked">Locked</option>
                <option value="draft">Draft</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Search Section</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="text"
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                  placeholder="Search by section..."
                  className="w-full border border-slate-300 rounded-lg pl-10 pr-3 py-2 text-sm"
                />
              </div>
            </div>
            <div className="flex items-end">
              <button 
                onClick={() => setFilters({ status: 'all', teacher: 'all', search: '' })}
                className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-200 transition-colors w-full"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* 🔹 2. GRADE LIST (Left Panel) */}
        <div className="lg:col-span-1 space-y-3">
          <h3 className="font-bold text-slate-800 text-lg mb-4">Grades</h3>
          {ADMIN_DATA.grades.map(grade => (
            <div 
              key={grade.id}
              onClick={() => setSelectedGrade(grade)}
              className={`p-4 rounded-xl cursor-pointer transition-all border-2 ${
                selectedGrade.id === grade.id 
                  ? 'bg-gradient-to-br from-cyan-50 to-blue-50 border-blue-400 shadow-md' 
                  : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-sm'
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-bold text-slate-800">{grade.name}</h4>
                  <p className="text-xs text-slate-500 mt-1">{grade.sections} sections</p>
                </div>
                <div className={`px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 ${getStatusColor(grade.status)}`}>
                  {getStatusIcon(grade.status)}
                  {grade.status}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 flex items-center gap-1">
                    <Users size={14} />
                    Students
                  </span>
                  <span className="font-bold text-slate-800">{grade.totalStudents} / {grade.capacity}</span>
                </div>
                
                {/* Capacity Progress Bar */}
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all ${
                      grade.totalStudents > grade.capacity ? 'bg-red-500' : 'bg-gradient-to-r from-cyan-500 to-blue-500'
                    }`}
                    style={{ width: `${Math.min((grade.totalStudents / grade.capacity) * 100, 100)}%` }}
                  />
                </div>
              </div>

              <button className="mt-3 w-full bg-blue-500 text-white px-3 py-2 rounded-lg text-xs font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-1">
                <Plus size={14} />
                Add Section
              </button>
            </div>
          ))}
        </div>

        {/* 🔹 3. SECTION TABLE (Main Area) */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-6 py-4 border-b border-slate-200">
              <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                {selectedGrade.name} - Sections
                <span className="text-sm font-normal text-slate-500">({filteredSections.length} sections)</span>
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Section</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Class Teacher</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Students</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Room</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Timetable</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredSections.map(section => (
                    <tr key={section.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 text-white font-bold flex items-center justify-center">
                            {section.section}
                          </div>
                          <span className="font-semibold text-slate-800">{section.id}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {section.teacher ? (
                          <div>
                            <div className="flex items-center gap-2">
                              <UserCheck size={16} className="text-green-600" />
                              <span className="font-semibold text-slate-800">{section.teacher}</span>
                            </div>
                            {section.assignedSince && (
                              <p className="text-xs text-slate-500 mt-1">Since: {section.assignedSince}</p>
                            )}
                          </div>
                        ) : (
                          <span className="text-red-500 text-sm font-semibold flex items-center gap-1">
                            <XCircle size={16} />
                            Not Assigned
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className={`font-bold ${section.students > section.capacity ? 'text-red-600' : 'text-slate-800'}`}>
                            {section.students} / {section.capacity}
                          </span>
                          <button 
                            onClick={() => {
                              setSelectedSection(section);
                              setShowStudentModal(true);
                            }}
                            className="text-blue-600 hover:text-blue-700 text-xs underline"
                          >
                            View
                          </button>
                        </div>
                        {section.students > section.capacity && (
                          <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                            <AlertTriangle size={12} />
                            Capacity exceeded
                          </p>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-slate-700 font-medium">{section.room}</span>
                      </td>
                      <td className="px-6 py-4">
                        {section.timetableLinked ? (
                          <span className="text-green-600 font-semibold text-sm flex items-center gap-1">
                            <CheckCircle size={16} />
                            Linked
                          </span>
                        ) : (
                          <span className="text-red-500 font-semibold text-sm flex items-center gap-1">
                            <XCircle size={16} />
                            Not Linked
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit ${getStatusColor(section.status)}`}>
                          {getStatusIcon(section.status)}
                          {section.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button 
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit Section"
                          >
                            <Edit size={16} />
                          </button>
                          {section.status !== 'Locked' ? (
                            <button 
                              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                              title="Lock Section"
                            >
                              <Lock size={16} />
                            </button>
                          ) : (
                            <div className="p-2 text-red-600" title="Section Locked">
                              <Lock size={16} />
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredSections.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-slate-500">No sections found matching your filters.</p>
                </div>
              )}
            </div>

            {/* 🔹 9. AUDIT INFO (Footer) */}
            {filteredSections.length > 0 && (
              <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span>Last updated by: <strong className="text-slate-700">{selectedGrade.sectionsData[0].lastUpdatedBy}</strong></span>
                  <span>On: <strong className="text-slate-700">{selectedGrade.sectionsData[0].lastUpdatedOn}</strong></span>
                </div>
                <div className="flex items-center gap-1 text-blue-600 hover:text-blue-700 cursor-pointer">
                  <Info size={14} />
                  <span>View Full Audit Trail</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 🔹 5. STUDENT ALLOCATION MODAL */}
      {showStudentModal && selectedSection && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-4 rounded-t-2xl flex justify-between items-center">
              <div>
                <h3 className="font-bold text-xl">Student Allocation - {selectedSection.id}</h3>
                <p className="text-sm text-white/80 mt-1">Class Teacher: {selectedSection.teacher || 'Not Assigned'}</p>
              </div>
              <button 
                onClick={() => {
                  setShowStudentModal(false);
                  setSelectedSection(null);
                }}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Capacity Indicator */}
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-700">Capacity</span>
                <span className={`font-bold ${selectedSection.students > selectedSection.capacity ? 'text-red-600' : 'text-green-600'}`}>
                  {selectedSection.students} / {selectedSection.capacity}
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all ${
                    selectedSection.students > selectedSection.capacity ? 'bg-red-500' : 'bg-gradient-to-r from-cyan-500 to-blue-500'
                  }`}
                  style={{ width: `${Math.min((selectedSection.students / selectedSection.capacity) * 100, 100)}%` }}
                />
              </div>
              {selectedSection.students > selectedSection.capacity && (
                <p className="text-xs text-red-600 mt-2 flex items-center gap-1">
                  <AlertTriangle size={12} />
                  Section capacity exceeded by {selectedSection.students - selectedSection.capacity} students
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="px-6 py-3 bg-white border-b border-slate-200 flex gap-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors flex items-center gap-2">
                <Plus size={16} />
                Add Student
              </button>
              <button className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2">
                <RefreshCw size={16} />
                Auto-Distribute
              </button>
            </div>

            {/* Student List */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-2">
                {(ADMIN_DATA.studentsAllocation?.[selectedSection.id] || []).map(student => (
                  <div key={student.id} className="flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white font-bold flex items-center justify-center text-sm">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{student.name}</p>
                        <p className="text-xs text-slate-500">ID: {student.admissionId} • {student.gender}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        student.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {student.status}
                      </span>
                      <button className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors" title="Remove Student">
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                ))}

                {(!ADMIN_DATA.studentsAllocation?.[selectedSection.id] || ADMIN_DATA.studentsAllocation[selectedSection.id].length === 0) && (
                  <div className="text-center py-8">
                    <Users size={48} className="mx-auto text-slate-300 mb-3" />
                    <p className="text-slate-500">No students allocated to this section yet.</p>
                    <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">
                      Add Students
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassConfig;
