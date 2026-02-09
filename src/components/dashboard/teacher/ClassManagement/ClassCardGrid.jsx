import React from "react";
import ClassCard from "./ClassCard";

const ClassCardGrid = ({ filteredClasses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredClasses.map((cls) => (
        <ClassCard key={cls.id} cls={cls} />
      ))}
    </div>
  );
};

export default ClassCardGrid;
