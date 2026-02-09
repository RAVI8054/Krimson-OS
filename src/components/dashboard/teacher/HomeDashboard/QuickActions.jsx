import React from "react";
import {
  TrendingUp,
  UserCheck,
  Upload,
  Send,
  BookOpen,
  Calendar,
} from "lucide-react";

// Map icon strings to components
const iconMap = {
  UserCheck,
  Upload,
  Send,
  BookOpen,
  Calendar,
  TrendingUp,
};

const QuickActions = ({ actions }) => {
  return (
    <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-6 md:p-8 border border-blue-100">
      <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2 text-lg">
        <TrendingUp className="text-blue-500" size={20} />
        Quick Actions
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {actions.map((action, index) => {
          const IconComponent = iconMap[action.icon] || TrendingUp;
          // Determine color classes based on the color string from data
          // This maps the simple color name to the complex gradient used in original
          const colorClasses = {
            cyan: {
              bg: "from-cyan-400 to-blue-400",
              border: "border-cyan-100",
              hover: "hover:border-cyan-300",
            },
            blue: {
              bg: "from-blue-400 to-purple-400",
              border: "border-blue-100",
              hover: "hover:border-blue-300",
            },
            purple: {
              bg: "from-purple-400 to-pink-400",
              border: "border-purple-100",
              hover: "hover:border-purple-300",
            },
            pink: {
              bg: "from-pink-400 to-red-400",
              border: "border-pink-100",
              hover: "hover:border-pink-300",
            },
            orange: {
              bg: "from-orange-400 to-red-400",
              border: "border-orange-100",
              hover: "hover:border-orange-300",
            },
            green: {
              bg: "from-green-400 to-teal-400",
              border: "border-green-100",
              hover: "hover:border-green-300",
            },
          };

          const style = colorClasses[action.color] || colorClasses.blue;

          return (
            <button
              key={action.id || index}
              className={`p-4 bg-white border-2 ${style.border} rounded-2xl font-bold text-xs hover:shadow-lg transition-all flex flex-col items-center gap-3 group ${style.hover} hover:-translate-y-1`}
              onClick={() => console.log(`Clicked ${action.label}`)}
            >
              <div
                className={`p-3 bg-gradient-to-br ${style.bg} rounded-xl shadow-md group-hover:scale-110 transition-transform`}
              >
                <IconComponent size={20} className="text-white" />
              </div>
              <span className="text-slate-700">{action.label}</span>
              <span className="text-[10px] text-slate-400 font-normal">
                get in app
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
