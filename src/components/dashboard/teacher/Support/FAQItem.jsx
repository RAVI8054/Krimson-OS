import React from "react";

const FAQItem = ({ question, category, answer }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all cursor-pointer group">
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-bold text-lg text-slate-800 group-hover:text-blue-600 transition-colors">
          {question}
        </h4>
        <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2.5 py-1 rounded-md uppercase tracking-wider">
          {category}
        </span>
      </div>
      <p className="text-slate-500 leading-relaxed font-medium">{answer}</p>
    </div>
  );
};

export default FAQItem;
