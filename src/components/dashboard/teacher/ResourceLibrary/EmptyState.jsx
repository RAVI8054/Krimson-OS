import React from "react";
import { BookOpen } from "lucide-react";

const EmptyState = ({ message, subMessage }) => {
  return (
    <div className="bg-white p-12 rounded-3xl shadow-md text-center">
      <BookOpen className="mx-auto text-slate-300 mb-3" size={48} />
      <h3 className="text-lg font-bold text-slate-800 mb-2">{message}</h3>
      <p className="text-sm text-slate-500">{subMessage}</p>
    </div>
  );
};

export default EmptyState;
