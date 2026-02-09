import React from "react";
import { Calendar } from "lucide-react";
import ClassSlotItem from "./ClassSlotItem";

const DailyScheduleCard = ({ day, slots }) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm">
      <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
        <Calendar className="text-blue-500" size={20} /> {day}
      </h3>

      <div className="space-y-4">
        {slots && slots.length > 0 ? (
          slots.map((slot, idx) => <ClassSlotItem key={idx} slot={slot} />)
        ) : (
          <p className="text-slate-400 italic text-sm">No classes scheduled.</p>
        )}
      </div>
    </div>
  );
};

export default DailyScheduleCard;
