import React from "react";

const TimetableHeader = ({ view, setView }) => {
  return (
    <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm">
      <h2 className="text-2xl font-bold text-slate-800">Class Timetable</h2>
      <div className="flex bg-slate-100 p-1.5 rounded-xl">
        {["Daily", "Weekly"].map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
              view === v
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimetableHeader;
