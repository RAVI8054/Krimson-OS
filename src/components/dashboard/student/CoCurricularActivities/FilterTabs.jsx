import React from "react";
import { Filter } from "lucide-react";

const FilterTabs = ({ selectedCategory, onSelectCategory }) => {
  const categories = ["All", "Sports", "Arts", "Debate"];

  return (
    <div className="bg-white rounded-3xl p-2 shadow-sm">
      <div className="flex gap-2 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 whitespace-nowrap ${
              selectedCategory === category
                ? "bg-gradient-to-r from-cyan-400 to-blue-400 text-white shadow-lg"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <Filter size={16} />
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTabs;
