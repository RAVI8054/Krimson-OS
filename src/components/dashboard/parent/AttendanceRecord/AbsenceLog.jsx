import React from "react";
import { FileText, CheckCircle } from "lucide-react";

const AbsenceLog = ({ absenceReasons }) => {
  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-xl border border-white/60">
      <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        <FileText className="text-orange-600" size={20} />
        Absence Reason Log
      </h2>

      <div className="space-y-3">
        {absenceReasons.length > 0 ? (
          absenceReasons.map((absence, index) => (
            <div
              key={index}
              className="p-4 bg-slate-50 border-l-4 border-red-400 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <span className="text-sm font-bold text-slate-800">
                  {new Date(absence.date).toLocaleDateString("en-SG", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded-full font-medium w-fit">
                  Auto-filled by {absence.submittedBy}
                </span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {absence.reason}
              </p>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <CheckCircle size={40} className="text-emerald-500 mx-auto mb-3" />
            <p className="text-slate-500 font-medium">
              Perfect attendance! No absences recorded.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AbsenceLog;
