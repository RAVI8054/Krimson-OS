import React from "react";
import { Phone } from "lucide-react";

const WellnessBanner = ({ concerns }) => {
  return (
    <div className="bg-green-50 rounded-3xl p-8 flex items-center gap-6 border border-green-100">
      <div className="p-4 bg-white rounded-full text-green-600 shadow-sm">
        <Phone size={32} />
      </div>
      <div>
        <h3 className="font-bold text-green-800 text-xl">{concerns.title}</h3>
        <p className="text-sm text-green-700 mt-1 mb-3">
          {concerns.description}
        </p>
        <button className="px-6 py-2 bg-green-600 text-white font-bold rounded-xl text-sm hover:bg-green-700">
          {concerns.action}
        </button>
      </div>
    </div>
  );
};

export default WellnessBanner;
