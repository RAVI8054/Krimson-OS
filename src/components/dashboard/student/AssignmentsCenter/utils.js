export const getDeadlineColor = (days) => {
  if (days <= 1) return "text-red-500 bg-red-50 border-red-100";
  if (days <= 3) return "text-orange-500 bg-orange-50 border-orange-100";
  return "text-green-600 bg-green-50 border-green-100";
};

export const getMasteryColor = (score) => {
  if (score >= 90) return "text-emerald-600 bg-emerald-50 border-emerald-200";
  if (score >= 75) return "text-green-600 bg-green-50 border-green-200";
  if (score >= 60) return "text-blue-600 bg-blue-50 border-blue-200";
  if (score >= 40) return "text-orange-600 bg-orange-50 border-orange-200";
  return "text-red-600 bg-red-50 border-red-200";
};

export const getMasteryBadge = (status) => {
  const badges = {
    Mastered: "bg-emerald-500 text-white",
    "Strong Pass": "bg-green-500 text-white",
    Pass: "bg-blue-500 text-white",
    Weak: "bg-orange-500 text-white",
    "Not Mastered": "bg-red-500 text-white",
  };
  return badges[status] || "bg-gray-500 text-white";
};

export const getConceptTagColor = (strength) => {
  const colors = {
    strong: "bg-green-100 text-green-700 border-green-300",
    partial: "bg-yellow-100 text-yellow-700 border-yellow-300",
    weak: "bg-red-100 text-red-700 border-red-300",
  };
  return colors[strength] || "bg-gray-100 text-gray-700 border-gray-300";
};
