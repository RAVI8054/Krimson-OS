import React from "react";
import { Search } from "lucide-react";

const HelpHeader = () => {
  return (
    <div className="text-center space-y-4">
      <h2 className="text-3xl font-bold text-slate-800">
        How can we help you?
      </h2>
      <div className="relative max-w-md mx-auto">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          size={20}
        />
        <input
          type="text"
          placeholder="Search for answers..."
          className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl shadow-sm outline-none focus:ring-2 focus:ring-blue-100"
        />
      </div>
    </div>
  );
};

export default HelpHeader;
