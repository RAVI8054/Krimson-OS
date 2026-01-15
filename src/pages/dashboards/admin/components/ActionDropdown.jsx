import React, { useState, useRef, useEffect } from "react";
import {
  UserPlus,
  ChevronDown,
  Edit3,
  UserX
} from "lucide-react";

const ActionDropdown = ({
  mainLabel,
  MainIcon,
  onMainAction,
  actionMode,
  onSwitchMode,
  disabled = false,
  mainBtnClass = "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-blue-500/20",
  toggleBtnClass = "bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 shadow-purple-500/20"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionClick = (mode) => {
    onSwitchMode(mode);
    setIsOpen(false);
  };

  return (
    <div className="flex gap-0 relative" ref={dropdownRef}>
      <button
        onClick={onMainAction}
        disabled={disabled}
        className={`flex-1 p-2.5 text-white rounded-l-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${mainBtnClass}`}
      >
        {MainIcon && <MainIcon className="h-4 w-4" />} {mainLabel}
      </button>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2.5 text-white rounded-r-xl font-bold text-sm transition-all flex items-center justify-center shadow-lg border-l border-white/30 ${toggleBtnClass}`}
      >
        <ChevronDown className="h-4 w-4" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-2 space-y-1">
            {/* Add User Option */}
            <button
              onClick={() => handleOptionClick("add")}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-semibold rounded-lg transition-all group ${
                actionMode === "add"
                  ? "bg-cyan-50 text-cyan-700"
                  : "text-slate-700 hover:bg-cyan-50 hover:text-cyan-700"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  actionMode === "add"
                    ? "bg-cyan-200"
                    : "bg-cyan-100 group-hover:bg-cyan-200"
                }`}
              >
                <UserPlus className="h-4 w-4 text-cyan-600" />
              </div>
              <div>
                <p className="font-bold">Add User</p>
                <p className="text-xs text-slate-500">Create new user</p>
              </div>
            </button>

            {/* Edit User Option */}
            <button
              onClick={() => handleOptionClick("edit")}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-semibold rounded-lg transition-all group ${
                actionMode === "edit"
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  actionMode === "edit"
                    ? "bg-blue-200"
                    : "bg-blue-100 group-hover:bg-blue-200"
                }`}
              >
                <Edit3 className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="font-bold">Edit User</p>
                <p className="text-xs text-slate-500">Update user details</p>
              </div>
            </button>

            {/* Suspend User Option */}
            <button
              onClick={() => handleOptionClick("suspend")}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-semibold rounded-lg transition-all group ${
                actionMode === "suspend"
                  ? "bg-red-50 text-red-700"
                  : "text-slate-700 hover:bg-red-50 hover:text-red-700"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  actionMode === "suspend"
                    ? "bg-red-200"
                    : "bg-red-100 group-hover:bg-red-200"
                }`}
              >
                <UserX className="h-4 w-4 text-red-600" />
              </div>
              <div>
                <p className="font-bold">Suspend User</p>
                <p className="text-xs text-slate-500">Deactivate user access</p>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionDropdown;
