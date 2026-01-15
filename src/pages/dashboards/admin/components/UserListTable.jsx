import React, { useState, useEffect } from "react";
import { CheckSquare, ChevronLeft, ChevronRight, MoreHorizontal, AlertCircle } from "lucide-react";

// Helper component for dynamic real-time updates
const LiveTimestamp = ({ dateString }) => {
  const calculateTimeAgo = (date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) return "Just now";
    if (diffInSeconds < 3600)
      return `${Math.floor(diffInSeconds / 60)} min ago`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 604800)
      return `${Math.floor(diffInSeconds / 86400)} days ago`;
    return null; // Return null if older than a week to fall back to static date
  };

  const [timeAgo, setTimeAgo] = useState(() => {
    if (!dateString) return "N/A";
    return calculateTimeAgo(new Date(dateString));
  });

  useEffect(() => {
    if (!dateString) return;

    // Update every minute
    const interval = setInterval(() => {
      const relative = calculateTimeAgo(new Date(dateString));
      if (relative !== timeAgo) {
        setTimeAgo(relative);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [dateString, timeAgo]);

  if (!dateString) return <span className="text-slate-400">N/A</span>;

  const date = new Date(dateString);
  const relative = calculateTimeAgo(date); // Recalculate for render resilience

  // Format exact date: "Jan 08, 12:30 PM"
  const exactDate = date.toLocaleDateString("en-SG", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex flex-col">
      <span className="text-slate-700 font-medium text-xs">{exactDate}</span>
      {relative && (
        <span className="text-[10px] text-slate-400 font-medium">
          {relative}
        </span>
      )}
    </div>
  );
};

const UserListTable = ({
  users,
  loading,
  error,
  localPage,
  setLocalPage,
  rowsPerPage = 10,
}) => {
  // Helper function to expand users with multiple roles into separate entries
  const expandUsersByRole = (users) => {
    const expanded = [];

    users.forEach((user) => {
      // If user has roles array populated, create entry for each role
      if (user.roles && user.roles.length > 0) {
        // Reverse roles to show the most recently added role (end of array) first
        [...user.roles].reverse().forEach((role) => {
          expanded.push({
            ...user,
            role: role, // Override with specific role
            _isExpanded: true, // Flag to identify expanded entries
          });
        });
      } else {
        // If no roles array, just use the primary role
        expanded.push({
          ...user,
          _isExpanded: false,
        });
      }
    });

    return expanded;
  };

  const expandedRows = expandUsersByRole(users);
  const totalEntries = expandedRows.length;
  const totalPages = Math.ceil(totalEntries / rowsPerPage) || 1;
  const startIndex = (localPage - 1) * rowsPerPage;
  const displayedRows = expandedRows.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden p-0">
      <div className="p-6 border-b border-slate-100">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-lg text-slate-800">
              Existing Users ({totalEntries} total roles)
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Showing page {localPage} of {totalPages}
            </p>
          </div>
          <span className="text-xs text-slate-500 italic">
            Sorted by newest first
          </span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50">
            <tr>
              {[
                "Name",
                "Role",
                "Email",
                "Created",
                "App Access",
                "Status",
              ].map((h, i) => (
                <th
                  key={i}
                  className="p-4 text-xs font-bold uppercase text-slate-500"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Loading State */}
            {loading && users.length === 0 && (
              <tr>
                <td colSpan="6" className="p-8 text-center text-slate-500">
                  Loading data...
                </td>
              </tr>
            )}

            {/* Error State */}
            {error && (
              <tr>
                <td
                  colSpan="6"
                  className="p-8 text-center text-rose-500 flex justify-center items-center gap-2"
                >
                  <AlertCircle className="h-4 w-4" /> {error}
                </td>
              </tr>
            )}

            {/* Data State */}
            {!loading &&
              !error &&
              displayedRows.map((user, i) => (
                <tr
                  key={`${user.user_id}-${user.role}-${i}`}
                  className="hover:bg-slate-50/50 transition-colors border-b border-slate-50 last:border-0"
                >
                  <td className="p-4 text-sm font-bold text-slate-700">
                    <div className="flex items-center gap-2">
                      {user.full_name}
                      {user.roles && user.roles.length > 1 && (
                        <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs rounded-full font-bold">
                          {user.roles.length} roles
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-600">
                    <span
                      className={`px-2 py-1 rounded text-xs font-bold ${
                        user.role === "Administrator"
                          ? "bg-purple-100 text-purple-700"
                          : user.role === "Principal"
                          ? "bg-rose-100 text-rose-700"
                          : user.role === "Teacher"
                          ? "bg-amber-100 text-amber-700"
                          : user.role === "Student"
                          ? "bg-blue-100 text-blue-700"
                          : user.role === "Finance"
                          ? "bg-emerald-100 text-emerald-700"
                          : user.role === "IT/System Admin"
                          ? "bg-slate-800 text-slate-200"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="p-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span
                        className={
                          user.roles && user.roles.length > 1
                            ? "text-indigo-600 font-semibold"
                            : "text-slate-600"
                        }
                      >
                        {user.email}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-600">
                    <LiveTimestamp dateString={user.created_at} />
                  </td>
                  <td className="p-4 text-sm">
                    <span className="text-emerald-600 font-bold text-xs flex items-center gap-1">
                      <CheckSquare className="h-3 w-3" /> Granted
                    </span>
                  </td>
                  <td className="p-4 text-sm">
                    <div className="flex items-center">
                      {user.status === "suspended" ? (
                        <span className="text-red-600 font-bold text-xs flex items-center gap-1 bg-red-50 px-2 py-1 rounded-full border border-red-100">
                          <AlertCircle className="h-3 w-3" /> Suspended
                        </span>
                      ) : user.status === "active" ? (
                        <span className="text-emerald-600 font-bold text-xs flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">
                          <CheckSquare className="h-3 w-3" /> Active
                        </span>
                      ) : (
                        <span className="text-slate-500 font-bold text-xs flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-full border border-slate-200">
                          {user.status ? user.status.charAt(0).toUpperCase() + user.status.slice(1) : "Unknown"}
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="p-4 border-t border-slate-100 flex items-center justify-between">
        <div className="text-xs text-slate-500">
          Showing {Math.min(displayedRows.length, rowsPerPage)} of {totalEntries} entries
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLocalPage((prev) => Math.max(1, prev - 1))}
            disabled={localPage === 1 || loading || users.length === 0}
            className="p-3 rounded-lg bg-blue-50 hover:bg-blue-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="h-6 w-6 text-blue-600 font-bold" />
          </button>

          <div className="flex items-center gap-1">
            {(() => {
              return Array.from(
                { length: Math.min(5, totalPages) },
                (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (localPage <= 3) {
                    pageNum = i + 1;
                  } else if (localPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = localPage - 2 + i;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => setLocalPage(pageNum)}
                      className={`h-8 w-8 rounded-lg text-xs font-bold transition-all ${
                        localPage === pageNum
                          ? "bg-slate-900 text-white"
                          : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                }
              );
            })()}

            {totalPages > 5 && localPage < totalPages - 2 && (
              <span className="text-slate-400 px-1">
                <MoreHorizontal className="h-4 w-4" />
              </span>
            )}
          </div>

          <button
            onClick={() =>
              setLocalPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={
              localPage === totalPages || loading || users.length === 0
            }
            className="p-3 rounded-lg bg-blue-50 hover:bg-blue-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="h-6 w-6 text-blue-600 font-bold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserListTable;
