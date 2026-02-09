import React from "react";
import { X, Plus } from "lucide-react";

const AbsenceReasonModal = ({
  showReasonModal,
  setShowReasonModal,
  customReasons,
  newReason,
  setNewReason,
  addCustomReason,
  removeCustomReason,
}) => {
  if (!showReasonModal) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fadeIn"
        onClick={() => setShowReasonModal(false)}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md pointer-events-auto animate-scaleIn"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold text-lg text-slate-800">
              Manage Absence Reasons
            </h3>
            <button
              onClick={() => setShowReasonModal(false)}
              className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors"
            >
              <X size={20} className="text-slate-500" />
            </button>
          </div>

          <div className="p-6">
            <div className="flex gap-2 mb-6">
              <input
                type="text"
                placeholder="Enter new reason..."
                value={newReason}
                onChange={(e) => setNewReason(e.target.value)}
                className="flex-1 px-4 py-2 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none"
                onKeyPress={(e) => e.key === "Enter" && addCustomReason()}
              />
              <button
                onClick={addCustomReason}
                disabled={!newReason.trim()}
                className="px-4 py-2 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Plus size={20} />
              </button>
            </div>

            <div className="space-y-2 max-h-60 overflow-y-auto">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Custom Reasons
              </p>
              {customReasons.length === 0 ? (
                <p className="text-sm text-slate-500 italic text-center py-4 bg-slate-50 rounded-xl">
                  No custom reasons added yet
                </p>
              ) : (
                customReasons.map((reason, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-slate-50 rounded-xl group hover:bg-slate-100 transition-colors"
                  >
                    <span className="font-medium text-slate-700">{reason}</span>
                    <button
                      onClick={() => removeCustomReason(reason)}
                      className="text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AbsenceReasonModal;
