import React from "react";
import { User, Clock, Book, Heart, ChevronRight } from "lucide-react";

const WellbeingSection = ({ articles }) => {
  return (
    <div className="animate-slideDown space-y-8">
      <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-lg">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">
              Your Mental Health Matters
            </h2>
            <p className="text-pink-100 text-lg mb-6 leading-relaxed">
              School can be stressful, but you don't have to go through it
              alone. Our counselors are here to listen, support, and guide you.
            </p>
            <button className="bg-white text-pink-600 px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-pink-50 transition-all transform active:scale-95 flex items-center gap-2">
              <User size={20} /> Chat with School Counselor
            </button>
          </div>
          <div className="w-full md:w-1/3 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Clock size={20} /> Counselor Availability
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="opacity-80">Monday - Friday</span>
                <span className="font-bold">9:00 AM - 3:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-80">Walk-in Hours</span>
                <span className="font-bold">12:00 PM - 1:00 PM</span>
              </div>
              <div className="pt-2 border-t border-white/20 mt-2">
                <p className="text-xs opacity-75">Dr. Emily Stone (Room 104)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, idx) => {
          const Icon = { Book, Heart, User }[article.icon] || Book;
          const colors = {
            green: {
              bg: "bg-green-100",
              text: "text-green-600",
              hover: "hover:border-green-200",
            },
            blue: {
              bg: "bg-blue-100",
              text: "text-blue-600",
              hover: "hover:border-blue-200",
            },
            purple: {
              bg: "bg-purple-100",
              text: "text-purple-600",
              hover: "hover:border-purple-200",
            },
          }[article.color] || {
            bg: "bg-gray-100",
            text: "text-gray-600",
            hover: "hover:border-gray-200",
          };

          return (
            <div
              key={idx}
              className={`bg-white p-6 rounded-3xl shadow-sm border border-slate-100 ${colors.hover} transition-all`}
            >
              <div
                className={`w-12 h-12 ${colors.bg} ${colors.text} rounded-xl flex items-center justify-center mb-4`}
              >
                <Icon size={24} />
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-slate-500 mb-4">{article.desc}</p>
              <button
                className={`${colors.text} text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all`}
              >
                {article.action} <ChevronRight size={16} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WellbeingSection;
