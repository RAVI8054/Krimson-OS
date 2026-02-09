import { Trophy, Award, Palette, MessageSquare } from "lucide-react";

// Category colors
export const getCategoryColor = (category) => {
  switch (category) {
    case "Sports":
      return "from-orange-400 to-red-500";
    case "Arts":
      return "from-purple-400 to-pink-500";
    case "Debate":
      return "from-blue-400 to-indigo-500";
    default:
      return "from-slate-400 to-slate-600";
  }
};

// Category icons
export const getCategoryIcon = (category) => {
  switch (category) {
    case "Sports":
      return Trophy;
    case "Arts":
      return Palette;
    case "Debate":
      return MessageSquare;
    default:
      return Award;
  }
};
