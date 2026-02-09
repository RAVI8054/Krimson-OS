import React from "react";
import { PlayCircle, Clock } from "lucide-react";

const TutorialCard = ({ title, duration, thumbColor, iconColor }) => {
  return (
    <div className="flex gap-4 items-center group cursor-pointer p-2 rounded-xl hover:bg-slate-50 transition-colors">
      <div
        className={`w-20 h-14 rounded-xl ${thumbColor} flex items-center justify-center text-slate-600 group-hover:scale-105 transition-transform shadow-inner`}
      >
        <PlayCircle
          size={24}
          className={`${iconColor} opacity-80 group-hover:opacity-100`}
        />
      </div>
      <div>
        <h4 className="font-bold text-sm text-slate-700 group-hover:text-blue-600 transition-colors line-clamp-1">
          {title}
        </h4>
        <p className="text-xs text-slate-400 font-bold mt-1 flex items-center gap-1">
          <Clock size={10} /> {duration}
        </p>
      </div>
    </div>
  );
};

export default TutorialCard;
