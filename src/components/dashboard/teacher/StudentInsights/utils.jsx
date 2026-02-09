import React from "react";
import {
  TrendingUp,
  TrendingDown,
  ThumbsUp,
  AlertTriangle,
  Heart,
  FileText,
} from "lucide-react";

/**
 * Get color class for performance trend
 * @param {string} trend - 'improving' or 'declining'
 * @returns {string} Tailwind color class
 */
export const getTrendColor = (trend) => {
  return trend === "improving" ? "text-green-600" : "text-red-600";
};

/**
 * Get icon component for performance trend
 * @param {string} trend - 'improving' or 'declining'
 * @returns {JSX.Element} Icon component
 */
export const getTrendIcon = (trend) => {
  return trend === "improving" ? (
    <TrendingUp size={16} />
  ) : (
    <TrendingDown size={16} />
  );
};

/**
 * Get color classes for behavior type
 * @param {string} type - behavior type ('commendation', 'warning', 'mentorship', etc.)
 * @returns {string} Tailwind color classes
 */
export const getBehaviorColor = (type) => {
  switch (type) {
    case "commendation":
      return "bg-green-100 text-green-700 border-green-200";
    case "warning":
      return "bg-orange-100 text-orange-700 border-orange-200";
    case "mentorship":
      return "bg-purple-100 text-purple-700 border-purple-200";
    default:
      return "bg-slate-100 text-slate-700 border-slate-200";
  }
};

/**
 * Get icon component for behavior type
 * @param {string} type - behavior type ('commendation', 'warning', 'mentorship', etc.)
 * @returns {JSX.Element} Icon component
 */
export const getBehaviorIcon = (type) => {
  switch (type) {
    case "commendation":
      return <ThumbsUp size={16} />;
    case "warning":
      return <AlertTriangle size={16} />;
    case "mentorship":
      return <Heart size={16} />;
    default:
      return <FileText size={16} />;
  }
};
