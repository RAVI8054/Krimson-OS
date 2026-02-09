import React from "react";
import { Calendar, Zap, CheckCircle, Edit, Clock } from "lucide-react";

export const getStatusColor = (status) => {
  switch (status) {
    case "scheduled":
      return "bg-blue-100 text-blue-700 border-blue-200";
    case "live":
      return "bg-green-100 text-green-700 border-green-200";
    case "completed":
      return "bg-slate-100 text-slate-700 border-slate-200";
    case "grading":
      return "bg-orange-100 text-orange-700 border-orange-200";
    default:
      return "bg-slate-100 text-slate-700 border-slate-200";
  }
};

export const getStatusIcon = (status) => {
  switch (status) {
    case "scheduled":
      return <Calendar size={14} />;
    case "live":
      return <Zap size={14} />;
    case "completed":
      return <CheckCircle size={14} />;
    case "grading":
      return <Edit size={14} />;
    default:
      return <Clock size={14} />;
  }
};

export const getTypeColor = (type) => {
  switch (type) {
    case "exam":
      return "bg-red-100 text-red-700";
    case "test":
      return "bg-purple-100 text-purple-700";
    case "quiz":
      return "bg-cyan-100 text-cyan-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
};
