import React from "react";
import { Plus, Trash2 } from "lucide-react";
import Modal from "./Modal";

const ManageListModal = ({
  title,
  items,
  newItemText,
  setNewItemText,
  onAdd,
  onRemove,
  onClose,
  color = "blue",
}) => {
  const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-600 focus:ring-blue-500/20 focus:border-blue-500",
    pink: "bg-pink-500 hover:bg-pink-600 focus:ring-pink-500/20 focus:border-pink-500",
    cyan: "bg-cyan-500 hover:bg-cyan-600 focus:ring-cyan-500/20 focus:border-cyan-500",
  };

  const btnColor = colorClasses[color] || colorClasses.blue;

  return (
    <Modal title={title} onClose={onClose}>
      <div className="space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder={`Add new...`}
            value={newItemText}
            onChange={(e) => setNewItemText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onAdd()}
            className={`flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 transition-all font-semibold text-slate-700 ${
              color === "pink"
                ? "focus:ring-pink-500/20 focus:border-pink-500"
                : color === "cyan"
                  ? "focus:ring-cyan-500/20 focus:border-cyan-500"
                  : "focus:ring-blue-500/20 focus:border-blue-500"
            }`}
          />
          <button
            onClick={onAdd}
            className={`${
              color === "pink"
                ? "bg-pink-500 hover:bg-pink-600"
                : color === "cyan"
                  ? "bg-cyan-500 hover:bg-cyan-600"
                  : "bg-blue-500 hover:bg-blue-600"
            } text-white p-2 rounded-xl transition-colors`}
          >
            <Plus size={24} />
          </button>
        </div>
        <ul className="space-y-2 max-h-60 overflow-y-auto">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100 group"
            >
              <span className="font-semibold text-slate-700">{item}</span>
              <button
                onClick={() => onRemove(idx)}
                className="text-slate-400 hover:text-red-500 transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </li>
          ))}
          {items.length === 0 && (
            <p className="text-center text-slate-400 text-sm py-4">
              No items added yet.
            </p>
          )}
        </ul>
        <div className="pt-4 flex justify-end">
          <button
            onClick={onClose}
            className={`px-5 py-2 rounded-xl font-bold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all ${
              color === "pink"
                ? "bg-pink-500"
                : color === "cyan"
                  ? "bg-cyan-500"
                  : "bg-blue-500"
            }`}
          >
            Done
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ManageListModal;
