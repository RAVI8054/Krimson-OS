import React from "react";
import { HelpCircle, MessageCircle } from "lucide-react";

const HelpOptions = ({ options }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {options.map((option) => {
        const Icon = { HelpCircle, MessageCircle }[option.icon] || HelpCircle;
        const colors =
          option.color === "blue"
            ? {
                bg: "bg-blue-50",
                text: "text-blue-600",
                hoverBg: "group-hover:bg-blue-600",
                border: "hover:border-blue-200",
              }
            : {
                bg: "bg-purple-50",
                text: "text-purple-600",
                hoverBg: "group-hover:bg-purple-600",
                border: "hover:border-purple-200",
              };

        return (
          <div
            key={option.id}
            className={`bg-white p-6 rounded-3xl shadow-sm border border-slate-100 ${colors.border} transition-colors cursor-pointer group`}
          >
            <div
              className={`w-12 h-12 ${colors.bg} ${colors.text} rounded-xl flex items-center justify-center mb-4 ${colors.hoverBg} group-hover:text-white transition-colors`}
            >
              <Icon size={24} />
            </div>
            <h3 className="font-bold text-slate-800 text-lg">{option.title}</h3>
            <p className="text-sm text-slate-500 mt-2">{option.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HelpOptions;
