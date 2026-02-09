import React from "react";
import { Camera, User, Mail, Phone } from "lucide-react";
import Modal from "./Modal";

const EditProfileModal = ({ userData, onClose, onUpdate }) => {
  return (
    <Modal title="Edit Personal Profile" onClose={onClose}>
      <form onSubmit={onUpdate} className="space-y-6">
        <div className="flex justify-center">
          <div className="relative group cursor-pointer">
            <img
              src={userData.avatar}
              alt="Avatar"
              className="w-24 h-24 rounded-full object-cover border-4 border-slate-100"
            />
            <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="text-white" size={24} />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">
              Full Name
            </label>
            <div className="relative">
              <User
                className="absolute left-3 top-3 text-slate-400"
                size={18}
              />
              <input
                type="text"
                name="name"
                defaultValue={userData.name}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-semibold text-slate-700"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-3 text-slate-400"
                size={18}
              />
              <input
                type="email"
                name="email"
                defaultValue={userData.email || "student@school.edu"}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-semibold text-slate-700"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">
              Phone Number
            </label>
            <div className="relative">
              <Phone
                className="absolute left-3 top-3 text-slate-400"
                size={18}
              />
              <input
                type="tel"
                name="phone"
                defaultValue={userData.phone || "+1 234 567 890"}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-semibold text-slate-700"
              />
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl font-bold text-slate-500 hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 rounded-xl font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            Save Changes
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditProfileModal;
