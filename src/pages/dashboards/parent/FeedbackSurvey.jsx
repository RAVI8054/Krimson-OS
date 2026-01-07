import React from 'react';
import { MessageCircle, Check } from 'lucide-react';

const FeedbackSurvey = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
             <MessageCircle size={32} />
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Term 1 Parent Satisfaction Survey</h1>
          <p className="text-slate-500 mt-2 text-sm">Your feedback helps us improve the learning experience.</p>
        </div>

        <form className="space-y-6">
          <div>
             <label className="block text-sm font-bold text-slate-700 mb-3">1. How satisfied are you with the communication from teachers?</label>
             <div className="flex gap-2">
               {[1, 2, 3, 4, 5].map(num => (
                 <button key={num} type="button" className="w-12 h-12 rounded-xl border border-slate-200 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600 font-bold transition-all focus:ring-2 focus:ring-blue-200">
                   {num}
                 </button>
               ))}
             </div>
          </div>

          <div>
             <label className="block text-sm font-bold text-slate-700 mb-3">2. Additional Comments or Suggestions</label>
             <textarea className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-blue-100 h-32" placeholder="Type here..."></textarea>
          </div>

          <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackSurvey;
