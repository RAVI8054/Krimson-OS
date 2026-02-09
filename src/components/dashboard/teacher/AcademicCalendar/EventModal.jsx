import React from "react";
import { X, Calendar, Clock, MapPin, Edit, Trash2 } from "lucide-react";

const EventModal = ({ selectedDate, onClose, getEventColor }) => {
  if (!selectedDate) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-start justify-between mb-6 pb-6 border-b border-slate-200">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`px-3 py-1 rounded-lg text-xs font-bold border ${getEventColor(selectedDate.color)}`}
              >
                {selectedDate.type.toUpperCase()}
              </span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold">
                {selectedDate.source === "school"
                  ? "🏫 School Event"
                  : "👤 Personal Event"}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              {selectedDate.title}
            </h2>
            <p className="text-slate-600">{selectedDate.description}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Event Details */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3 text-slate-700">
            <Calendar size={20} className="text-blue-500" />
            <span className="font-bold">
              {new Date(selectedDate.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          {selectedDate.time && (
            <div className="flex items-center gap-3 text-slate-700">
              <Clock size={20} className="text-purple-500" />
              <span>
                {selectedDate.time}{" "}
                {selectedDate.duration && `• ${selectedDate.duration}`}
              </span>
            </div>
          )}
          {selectedDate.location && (
            <div className="flex items-center gap-3 text-slate-700">
              <MapPin size={20} className="text-green-500" />
              <span>{selectedDate.location}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button className="px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 shadow-md transition-all flex items-center justify-center gap-2">
            <Edit size={18} />
            <div className="text-left">
              <div>Edit Event</div>
              <div className="text-[10px] opacity-80">get in app</div>
            </div>
          </button>
          <button className="px-6 py-4 bg-white text-red-600 border-2 border-red-200 rounded-xl font-bold hover:bg-red-50 transition-all flex items-center justify-center gap-2">
            <Trash2 size={18} />
            <div className="text-left">
              <div>Delete</div>
              <div className="text-[10px] text-red-400">get in app</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
