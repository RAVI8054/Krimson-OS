import React from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  BookOpen,
  DollarSign,
  Bus,
  Laptop,
} from "lucide-react";
import { PARENT_DATA } from "../../../../data/parentData";

const iconMap = {
  HelpCircle: HelpCircle,
  BookOpen: BookOpen,
  DollarSign: DollarSign,
  Bus: Bus,
  Laptop: Laptop,
};

const FAQSection = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  expandedFaq,
  setExpandedFaq,
}) => {
  const { faqs, categories } = PARENT_DATA.supportCenter;

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative z-10">
      {/* Search & Category Filters */}
      <div className="mb-6">
        <div className="relative mb-4">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search frequently asked questions..."
            className="w-full pl-10 pr-4 py-3 bg-white/95 backdrop-blur-sm border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];
            const count =
              category.id === "all"
                ? faqs.length
                : faqs.filter((f) => f.category === category.id).length;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm transition-all flex-shrink-0 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-white/80 text-slate-600 hover:bg-white"
                }`}
              >
                <Icon size={16} />
                <span>{category.name}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-xs ${
                    selectedCategory === category.id
                      ? "bg-white/30"
                      : "bg-slate-100"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* FAQ List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg border border-white/60 overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <button
              onClick={() =>
                setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
              }
              className="w-full p-4 md:p-5 flex items-start justify-between gap-3 text-left hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                      faq.category === "Academic"
                        ? "bg-blue-100 text-blue-700"
                        : faq.category === "Finance"
                          ? "bg-green-100 text-green-700"
                          : faq.category === "Transport"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {faq.category}
                  </span>
                </div>
                <h3 className="text-sm md:text-base font-bold text-slate-800">
                  {faq.question}
                </h3>
              </div>
              {expandedFaq === faq.id ? (
                <ChevronUp size={20} className="text-cyan-600 flex-shrink-0" />
              ) : (
                <ChevronDown
                  size={20}
                  className="text-slate-400 flex-shrink-0"
                />
              )}
            </button>

            {expandedFaq === faq.id && (
              <div className="px-4 md:px-5 pb-4 md:pb-5 border-t border-slate-100">
                <p className="text-sm text-slate-600 leading-relaxed pt-4">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}

        {filteredFaqs.length === 0 && (
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 text-center shadow-lg">
            <Search size={40} className="text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500 font-medium">
              No FAQs found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQSection;
