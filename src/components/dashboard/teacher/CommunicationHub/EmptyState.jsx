import React from "react";
import { MessageSquare } from "lucide-react";

const EmptyState = ({ searchQuery, filterType, filterTag }) => {
  return (
    <div className="bg-white p-12 rounded-3xl shadow-md text-center">
      <MessageSquare className="mx-auto text-slate-300 mb-3" size={48} />
      <h3 className="text-lg font-bold text-slate-800 mb-2">
        No Messages Found
      </h3>
      <p className="text-sm text-slate-500">
        {searchQuery || filterType !== "all" || filterTag !== "all"
          ? "Try adjusting your filters"
          : "No messages yet"}
      </p>
    </div>
  );
};

export default EmptyState;
