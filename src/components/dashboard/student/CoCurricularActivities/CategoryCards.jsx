import React from "react";
import { getCategoryColor, getCategoryIcon } from "./utils";

const CategoryCards = ({ categories, onCategoryClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {categories.map((cat, index) => {
        const Icon = getCategoryIcon(cat.name);
        return (
          <div
            key={index}
            className={`bg-gradient-to-br ${getCategoryColor(
              cat.name,
            )} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer`}
            onClick={() => onCategoryClick(cat.name)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <Icon size={28} />
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">+{cat.points}</div>
                <div className="text-xs opacity-90">points</div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1">{cat.name}</h3>
            <p className="text-sm opacity-90">{cat.count} Activities</p>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryCards;
