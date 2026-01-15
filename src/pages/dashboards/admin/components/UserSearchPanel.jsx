import React from "react";
import { Search, RefreshCw, AlertCircle } from "lucide-react";

const UserSearchPanel = ({
  searchEmail,
  setSearchEmail,
  handleSearchUser,
  searching,
  searchError,
  placeholder = "user@example.com",
  theme = "blue",
  children // To render buttons (e.g. ActionDropdown) next to the search box
}) => {
  const themeClasses = {
    blue: {
      focusRing: "focus:ring-blue-500",
      btnBg: "bg-blue-600 hover:bg-blue-700",
      spinner: "text-white"
    },
    red: {
      focusRing: "focus:ring-red-500",
      btnBg: "bg-red-600 hover:bg-red-700",
      spinner: "text-white"
    }
  };

  const currentTheme = themeClasses[theme] || themeClasses.blue;

  return (
    <div>
      <label className="block text-sm font-bold text-slate-700 mb-2">
        Search User by Email or ID
      </label>
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            className={`w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl text-sm bg-slate-50 outline-none transition-shadow ${currentTheme.focusRing}`}
            placeholder={placeholder}
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearchUser()}
          />
        </div>
        <button
          onClick={handleSearchUser}
          disabled={searching}
          className={`px-6 py-3 text-white rounded-xl font-bold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 ${currentTheme.btnBg}`}
        >
          {searching ? (
            <>
              <RefreshCw className="h-4 w-4 animate-spin" />
              Searching...
            </>
          ) : (
            <>
              <Search className="h-4 w-4" />
              Search
            </>
          )}
        </button>

        {/* Extra Actions (e.g. Split Button) */}
        {children}
      </div>
      {searchError && (
        <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-red-700 text-sm">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          {searchError}
        </div>
      )}
    </div>
  );
};

export default UserSearchPanel;
