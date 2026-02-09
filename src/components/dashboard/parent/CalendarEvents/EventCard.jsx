import React from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Users,
  CheckCircle,
  Plus,
  Download,
} from "lucide-react";

const EventCard = ({
  event,
  getCategoryIcon,
  handleRSVP,
  handleDownloadBrochure,
  formatDate,
}) => {
  const CategoryIcon = getCategoryIcon(event.type);

  return (
    <div className="bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl shadow-2xl border border-white/60 overflow-hidden hover:scale-[1.02] transition-all duration-300">
      {/* Event Header with Gradient */}
      <div className={`bg-gradient-to-r ${event.color} p-4 md:p-5`}>
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
              <CategoryIcon size={20} className="text-white" />
            </div>
            <span className="bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white">
              {event.category}
            </span>
          </div>
          {event.rsvpRequired && (
            <div
              className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                event.rsvpStatus === "confirmed"
                  ? "bg-emerald-100 text-emerald-700"
                  : event.rsvpStatus === "pending"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-white/30 text-white"
              }`}
            >
              {event.rsvpStatus === "confirmed"
                ? "✓ Confirmed"
                : event.rsvpStatus === "pending"
                  ? "RSVP Pending"
                  : "RSVP"}
            </div>
          )}
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">
          {event.title}
        </h3>
        <div className="flex flex-wrap items-center gap-3 text-white/90 text-xs md:text-sm">
          <span className="flex items-center gap-1.5">
            <CalendarIcon size={14} />
            {formatDate(event.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {event.time}
          </span>
        </div>
      </div>

      {/* Event Body */}
      <div className="p-4 md:p-5">
        <div className="flex items-start gap-2 mb-3">
          <MapPin size={16} className="text-cyan-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-slate-600 font-medium">{event.location}</p>
        </div>

        <p className="text-sm md:text-base text-slate-700 mb-4 leading-relaxed line-clamp-3">
          {event.description}
        </p>

        <div className="flex items-center gap-2 mb-4 text-xs text-slate-500">
          <Users size={14} />
          <span className="font-medium">
            {event.attendees} attendees expected
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          {event.rsvpRequired && (
            <button
              onClick={() => handleRSVP(event.id)}
              className={`flex-1 px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
                event.rsvpStatus === "confirmed"
                  ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                  : "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:scale-105 active:scale-95"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                {event.rsvpStatus === "confirmed" ? (
                  <>
                    <CheckCircle size={16} />
                    <span>RSVP Confirmed</span>
                  </>
                ) : (
                  <>
                    <Plus size={16} />
                    <div className="flex flex-col items-center">
                      <span>RSVP Now</span>
                      <span className="text-[8px] opacity-80">get in app</span>
                    </div>
                  </>
                )}
              </div>
            </button>
          )}
          <button
            onClick={() => handleDownloadBrochure(event.id)}
            className="flex-1 bg-white border-2 border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl font-bold text-sm hover:border-cyan-300 hover:bg-cyan-50 transition-all flex items-center justify-center gap-2"
          >
            <Download size={16} />
            <div className="flex flex-col items-center">
              <span>Download Details</span>
              <span className="text-[8px] text-slate-500">get in app</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
