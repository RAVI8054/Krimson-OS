import React from "react";
import {
  Download,
  ShieldCheck,
  FileText,
  CheckCircle,
  Eye,
} from "lucide-react";

const DownloadableReports = ({ reportCards, onDownload }) => {
  if (!reportCards) return null;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-pink-100 text-pink-600 rounded-xl">
          <Download size={22} />
        </div>
        <div>
          <h3 className="font-bold text-slate-800">Report Cards</h3>
          <p className="text-xs text-slate-500">Official digital copies</p>
        </div>
      </div>

      <div className="space-y-4">
        {reportCards.map((card) => (
          <div
            key={card.id}
            className="group p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <ShieldCheck size={16} className="text-blue-500" />
            </div>

            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:border-blue-100 group-hover:scale-105 transition-transform">
                <FileText
                  className="text-slate-400 group-hover:text-blue-500"
                  size={24}
                />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm mb-1 line-clamp-1">
                  {card.title}
                </h4>
                <p className="text-xs text-slate-500">{card.date}</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 mb-4 px-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle size={12} className="text-green-500" />
                {card.status}
              </div>
              <span>{card.size}</span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => onDownload(card.title)}
                className="flex-1 py-1.5 bg-slate-200 text-slate-600 rounded-xl text-xs font-semibold hover:bg-slate-300 transition-colors flex flex-col items-center justify-center gap-0.5"
              >
                <div className="flex items-center gap-1">
                  <Eye size={12} />
                  Preview
                </div>
                <span className="text-[9px] opacity-80 font-normal">
                  get in app
                </span>
              </button>
              <button
                onClick={() => onDownload(card.title)}
                className="flex-1 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl text-xs font-semibold hover:shadow-lg hover:shadow-blue-200 transition-all flex flex-col items-center justify-center gap-0.5"
              >
                <div className="flex items-center gap-1">
                  <Download size={12} />
                  Download
                </div>
                <span className="text-[9px] opacity-80 font-normal">
                  get in app
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 rounded-xl bg-blue-50 border border-blue-100">
        <div className="flex items-start gap-3">
          <ShieldCheck
            className="text-blue-500 flex-shrink-0 mt-0.5"
            size={18}
          />
          <div>
            <h4 className="text-xs font-bold text-blue-700 mb-1">
              Authenticity Verified
            </h4>
            <p className="text-[10px] text-blue-600/80 leading-relaxed">
              All report cards are digitally signed and timestamped for
              authenticity. Version history is tracked for compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadableReports;
