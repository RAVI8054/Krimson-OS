import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, MapPin, Shield, LogOut } from 'lucide-react';
import { PARENT_DATA } from '../../../data/parentData';

const ParentProfile = () => {
  const { user } = PARENT_DATA;
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-sm">
       <div className="flex items-center gap-6 mb-8 border-b border-slate-100 pb-8">
         <img src={user.avatar} alt="Profile" className="w-24 h-24 rounded-full border-4 border-blue-50" />
         <div>
           <h1 className="text-2xl font-bold text-slate-800">{user.name}</h1>
           <p className="text-slate-500">ID: {user.id} • Role: {user.role}</p>
         </div>
         <button 
           onClick={handleLogout}
           className="ml-auto text-red-500 font-bold text-sm bg-red-50 px-4 py-2 rounded-xl hover:bg-red-100 flex items-center gap-2"
         >
           <LogOut size={16} /> Logout
         </button>
       </div>

       <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Contact Information</h3>
            <div className="space-y-4">
               <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                 <Mail className="text-slate-400" />
                 <div>
                   <p className="text-xs text-slate-400">Email Address</p>
                   <p className="font-semibold text-slate-700">admin.parent@krimson.edu</p>
                 </div>
               </div>
               <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                 <Phone className="text-slate-400" />
                 <div>
                   <p className="text-xs text-slate-400">Phone Number</p>
                   <p className="font-semibold text-slate-700">+65 9123 4567</p>
                 </div>
               </div>
               <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                 <MapPin className="text-slate-400" />
                 <div>
                   <p className="text-xs text-slate-400">Address</p>
                   <p className="font-semibold text-slate-700">12, Orchard Road, Singapore</p>
                 </div>
               </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Security & Settings</h3>
            <div className="space-y-4">
              <div className="p-4 border border-slate-100 rounded-2xl flex justify-between items-center">
                 <div className="flex items-center gap-3">
                   <Shield className="text-green-500" size={20} />
                   <span className="font-semibold text-slate-700 text-sm">Two-Factor Authentication</span>
                 </div>
                 <div className="w-10 h-6 bg-green-500 rounded-full relative cursor-pointer">
                   <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                 </div>
              </div>
              
              <div className="p-4 border border-slate-100 rounded-2xl">
                 <span className="font-semibold text-slate-700 text-sm block mb-2">Notification Preferences</span>
                 <div className="flex gap-2">
                   <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg">Email</span>
                   <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg">SMS</span>
                   <span className="px-3 py-1 bg-slate-100 text-slate-400 text-xs font-bold rounded-lg">Push</span>
                 </div>
              </div>
            </div>
          </div>
       </div>
    </div>
  );
};

export default ParentProfile;
