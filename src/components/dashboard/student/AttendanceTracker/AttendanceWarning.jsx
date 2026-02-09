import React from "react";
import { XCircle } from "lucide-react";

const AttendanceWarning = ({ percentage }) => {
  if (percentage >= 90) return null;

  return (
    <div className="bg-orange-50 border border-orange-100 p-6 rounded-3xl flex gap-4">
      <div className="p-3 bg-orange-200 text-orange-700 rounded-full">
        <XCircle />
      </div>
      <div>
        <h4 className="font-bold text-orange-800 text-lg">
          Attendance Warning
        </h4>
        <p className="text-sm text-orange-700 mt-1">
          Your attendance is below 90%. Please attend upcoming classes to avoid
          disciplinary action.
        </p>
      </div>
    </div>
  );
};

export default AttendanceWarning;
