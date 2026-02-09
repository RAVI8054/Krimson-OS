import React from "react";
import { FileText, Video, ChevronRight, HelpCircle } from "lucide-react";
import FAQItem from "./FAQItem";
import TutorialCard from "./TutorialCard";

const KnowledgeBaseTab = ({ faqs, tutorials, searchQuery }) => {
  return (
    <div className="space-y-8 animate-slideDown">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* FAQs */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="font-bold text-slate-800 text-xl flex items-center gap-2">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
              <FileText size={20} />
            </div>
            Common Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.id} {...faq} />
            ))}
            {faqs.length === 0 && (
              <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-3xl">
                <p className="text-slate-400 font-bold">
                  No results found for "{searchQuery}"
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Tutorials */}
        <div>
          <h3 className="font-bold text-slate-800 text-xl flex items-center gap-2 mb-6">
            <div className="p-2 bg-pink-100 text-pink-600 rounded-lg">
              <Video size={20} />
            </div>
            Video Tutorials
          </h3>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 space-y-4">
            {tutorials.map((vid) => (
              <TutorialCard key={vid.id} {...vid} />
            ))}
            <button className="w-full mt-2 py-3 border-2 border-slate-100 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-200 transition-all flex items-center justify-center gap-2">
              View All Videos <ChevronRight size={14} />
            </button>
          </div>

          {/* Quick Help Card */}
          <div className="mt-6 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <HelpCircle size={32} className="mb-4 text-purple-200" />
            <h4 className="font-bold text-lg mb-1">Need quick help?</h4>
            <p className="text-sm text-purple-100 mb-4 font-medium">
              Chat with our AI assistant for instant answers.
            </p>
            <button className="w-full py-2 bg-white text-indigo-600 text-xs font-bold rounded-xl hover:bg-purple-50 transition-colors">
              Start Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBaseTab;
