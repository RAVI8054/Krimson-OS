import React from "react";
import { MessageCircle, Building2, BookOpen, User } from "lucide-react";

const iconMap = {
  MessageCircle,
  Building2,
  BookOpen,
  User,
};

const CategoryTabs = ({
  categories,
  selectedCategory,
  onSelectCategory,
  messages,
}) => {
  return (
    <div className="bg-white rounded-3xl p-2 shadow-sm">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon] || MessageCircle;
          const isActive = selectedCategory === cat.id;
          const categoryCount =
            cat.id === "all"
              ? messages.length
              : messages.filter((m) => m.category === cat.id).length;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center justify-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 text-white shadow-lg scale-105"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:scale-102"
              }`}
            >
              <Icon size={18} />
              <span className="text-sm font-semibold hidden sm:inline">
                {cat.label}
              </span>
              <span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded-full">
                {categoryCount}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTabs;
