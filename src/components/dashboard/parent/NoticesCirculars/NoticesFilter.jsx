import React from "react";

const NoticesFilter = ({
  activeTab,
  setActiveTab,
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  return (
    <div className="mb-6 relative z-10 flex flex-col gap-4">
      <div className="flex gap-2 p-1 bg-white/50 backdrop-blur-sm rounded-xl w-fit">
        {["all", "urgent", "saved"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
              activeTab === tab
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md"
                : "text-slate-600 hover:bg-white/50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex-shrink-0 border ${
              selectedCategory === category.id
                ? "bg-slate-800 text-white border-slate-800"
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NoticesFilter;
