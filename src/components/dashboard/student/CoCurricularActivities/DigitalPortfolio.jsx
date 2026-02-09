import React from "react";
import { Upload } from "lucide-react";

const DigitalPortfolio = () => {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border-2 border-dashed border-blue-200">
      <div className="text-center">
        <div className="inline-flex p-4 bg-blue-50 rounded-full mb-4">
          <Upload className="text-blue-500" size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">
          Digital Portfolio
        </h3>
        <p className="text-slate-600 text-sm mb-4">
          Upload certificates to build your achievement portfolio
        </p>
        <button
          onClick={() => console.log("Future: Open certificate upload modal")}
          className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2 mx-auto"
        >
          <Upload size={18} />
          Upload Certificate
        </button>
        <p className="text-xs text-slate-400 mt-4">
          Supported formats: PDF, JPG, PNG (Max 5MB)
        </p>
      </div>
    </div>
  );
};

export default DigitalPortfolio;
