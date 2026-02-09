import React from "react";

const ClassManagementHeader = ({ user, classesCount, totalStudents }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
      <div className="absolute right-0 top-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-pink-300 opacity-20 rounded-full blur-3xl -ml-10 -mb-10"></div>

      <div className="relative z-10">
        <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3 backdrop-blur-sm shadow-sm">
          Class & Subject Management
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
              My Classes & Subjects
            </h1>
            <p className="opacity-90 font-medium text-sm md:text-base">
              Manage {classesCount} assigned classes •{" "}
              {user.subjects.join(", ")}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl">
              <p className="text-xs opacity-80">Total Students</p>
              <p className="text-2xl font-bold">{totalStudents}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassManagementHeader;
