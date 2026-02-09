import React from "react";
import {
  Check,
  X,
  Clock,
  Settings,
  AlertCircle,
  CheckCircle,
  BarChart3,
  UserX,
  UserCheck,
  Timer,
} from "lucide-react";

const AttendanceList = ({
  attendance,
  filteredAttendance,
  currentPage,
  itemsPerPage,
  viewMode,
  setViewMode,
  markAttendance,
  updateReason,
  reasonOptions,
  setShowReasonModal,
  setSelectedStudent,
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden">
      <div className="p-4 md:p-6 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-blue-100">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-800 text-lg">
            Student List
            <span className="ml-2 text-sm text-slate-500 font-normal">
              (Showing{" "}
              {Math.min(
                (currentPage - 1) * itemsPerPage + 1,
                filteredAttendance.length,
              )}{" "}
              -{" "}
              {Math.min(currentPage * itemsPerPage, filteredAttendance.length)}{" "}
              of {filteredAttendance.length})
            </span>
          </h3>
          {viewMode !== "all" && (
            <button
              onClick={() => setViewMode("all")}
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
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                Roll
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                Student Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                Reason / Notes
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredAttendance
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage,
              )
              .map((student) => (
                <tr
                  key={student.id}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold shadow-md">
                      {student.roll}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div
                      className="cursor-pointer group"
                      onClick={() => setSelectedStudent(student)}
                    >
                      <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {student.name}
                      </h4>
                      <p className="text-xs text-slate-500">ID: {student.id}</p>
                      <p className="text-xs text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Click for details →
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex bg-slate-100 p-1.5 rounded-xl w-fit gap-1">
                      <button
                        onClick={() => markAttendance(student.id, "Present")}
                        className={`px-4 py-2 rounded-lg transition-all font-bold text-xs flex items-center gap-1 ${
                          student.status === "Present"
                            ? "bg-green-500 text-white shadow-md"
                            : "text-slate-400 hover:text-green-600 hover:bg-green-50"
                        }`}
                      >
                        <Check size={16} />
                        Present
                      </button>
                      <button
                        onClick={() => markAttendance(student.id, "Absent")}
                        className={`px-4 py-2 rounded-lg transition-all font-bold text-xs flex items-center gap-1 ${
                          student.status === "Absent"
                            ? "bg-red-500 text-white shadow-md"
                            : "text-slate-400 hover:text-red-600 hover:bg-red-50"
                        }`}
                      >
                        <X size={16} />
                        Absent
                      </button>
                      <button
                        onClick={() => markAttendance(student.id, "Late")}
                        className={`px-4 py-2 rounded-lg transition-all font-bold text-xs flex items-center gap-1 ${
                          student.status === "Late"
                            ? "bg-orange-500 text-white shadow-md"
                            : "text-slate-400 hover:text-orange-600 hover:bg-orange-50"
                        }`}
                      >
                        <Clock size={16} />
                        Late
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {student.status === "Absent" && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <select
                            value={student.reason || ""}
                            onChange={(e) =>
                              updateReason(student.id, e.target.value)
                            }
                            className="flex-1 px-3 py-2 border-2 border-slate-200 rounded-xl text-sm focus:border-pink-400 focus:outline-none"
                          >
                            <option value="">Select reason...</option>
                            {reasonOptions.map((reason) => (
                              <option key={reason} value={reason}>
                                {reason}
                              </option>
                            ))}
                          </select>
                          <button
                            onClick={() => setShowReasonModal(true)}
                            className="p-2 bg-slate-100 hover:bg-slate-200 border-2 border-slate-200 rounded-xl transition-all"
                            title="Manage custom reasons"
                          >
                            <Settings size={16} className="text-slate-600" />
                          </button>
                        </div>
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
                    {student.status === "Late" && student.arrivalTime && (
                      <div className="text-sm text-slate-600">
                        <span className="font-medium">Arrived:</span>{" "}
                        {student.arrivalTime}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => setSelectedStudent(student)}
                      className="px-3 py-1.5 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg text-xs font-bold hover:bg-blue-100 transition-colors flex items-center gap-1"
                    >
                      <BarChart3 size={12} />
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden divide-y divide-slate-100">
        {filteredAttendance
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((student) => (
            <div key={student.id} className="p-4">
              <div
                className="flex items-start gap-4 mb-4 cursor-pointer"
                onClick={() => setSelectedStudent(student)}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold shadow-md flex-shrink-0">
                  {student.roll}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 mb-1">
                    {student.name}
                  </h4>
                  <p className="text-xs text-slate-500">ID: {student.id}</p>
                  <p className="text-xs text-blue-600 font-medium mt-1">
                    Tap for details →
                  </p>
                </div>
              </div>

              {/* Status Buttons */}
              <div className="flex bg-slate-100 p-1.5 rounded-xl mb-3 gap-1">
                <button
                  onClick={() => markAttendance(student.id, "Present")}
                  className={`flex-1 py-2 rounded-lg transition-all font-bold text-xs flex items-center justify-center gap-1 ${
                    student.status === "Present"
                      ? "bg-green-500 text-white shadow-md"
                      : "text-slate-400"
                  }`}
                >
                  <Check size={14} />
                  Present
                </button>
                <button
                  onClick={() => markAttendance(student.id, "Absent")}
                  className={`flex-1 py-2 rounded-lg transition-all font-bold text-xs flex items-center justify-center gap-1 ${
                    student.status === "Absent"
                      ? "bg-red-500 text-white shadow-md"
                      : "text-slate-400"
                  }`}
                >
                  <X size={14} />
                  Absent
                </button>
                <button
                  onClick={() => markAttendance(student.id, "Late")}
                  className={`flex-1 py-2 rounded-lg transition-all font-bold text-xs flex items-center justify-center gap-1 ${
                    student.status === "Late"
                      ? "bg-orange-500 text-white shadow-md"
                      : "text-slate-400"
                  }`}
                >
                  <Clock size={14} />
                  Late
                </button>
              </div>

              {(student.status === "Absent" || student.status === "Late") && (
                <div className="bg-slate-50 p-3 rounded-xl">
                  {student.status === "Absent" && (
                    <div className="space-y-2">
                      <select
                        value={student.reason || ""}
                        onChange={(e) =>
                          updateReason(student.id, e.target.value)
                        }
                        className="w-full px-3 py-2 border-2 border-slate-200 rounded-xl text-sm focus:border-pink-400 focus:outline-none bg-white"
                      >
                        <option value="">Select reason...</option>
                        {reasonOptions.map((reason) => (
                          <option key={reason} value={reason}>
                            {reason}
                          </option>
                        ))}
                      </select>
                      <div className="flex justify-between items-center">
                        <button
                          onClick={() => setShowReasonModal(true)}
                          className="text-xs text-blue-600 font-bold flex items-center gap-1"
                        >
                          <Settings size={12} /> Configure Reasons
                        </button>
                        {student.notifiedParent ? (
                          <span className="flex items-center gap-1 text-xs text-green-600 font-medium">
                            <CheckCircle size={12} />
                            Notified
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-xs text-orange-600 font-medium">
                            <AlertCircle size={12} />
                            Pending
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  {student.status === "Late" && student.arrivalTime && (
                    <div className="text-sm text-slate-600">
                      <span className="font-medium">Arrived:</span>{" "}
                      {student.arrivalTime}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AttendanceList;
