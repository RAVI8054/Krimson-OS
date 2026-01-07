import React from 'react';
import { LIBRARIAN_DATA } from '../../../data/librarianData';
import { Clock, Check, X, Bell, BookOpen } from 'lucide-react';

const ReservationRequestCenter = () => {
  const { reservations } = LIBRARIAN_DATA;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Reservation Queue */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm">
           <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
             <Clock className="text-orange-500" /> Active Reservations
           </h3>
           
           <div className="space-y-4">
             {reservations.map((res) => (
               <div key={res.id} className="border border-slate-100 rounded-2xl p-5 flex items-center justify-between hover:shadow-md transition-shadow">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                      {res.student.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-700 text-sm">{res.book}</h4>
                      <p className="text-xs text-slate-400">Reserved by: {res.student} • {res.date}</p>
                    </div>
                 </div>
                 
                 {res.status === 'Pending' ? (
                   <div className="flex gap-2">
                     <button className="p-2 bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition-colors" title="Approve">
                       <Check size={18} />
                     </button>
                     <button className="p-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors" title="Reject">
                       <X size={18} />
                     </button>
                   </div>
                 ) : (
                   <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">
                     {res.status}
                   </span>
                 )}
               </div>
             ))}
           </div>
        </div>

        {/* Most Requested & Alerts */}
        <div className="space-y-6">
           <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-6 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen size={20} className="text-indigo-200" />
                <h3 className="font-bold">Trending Titles</h3>
              </div>
              <ul className="space-y-3">
                 <li className="flex justify-between text-sm items-center border-b border-white/10 pb-2">
                   <span>Harry Potter Series</span>
                   <span className="font-bold bg-white/20 px-2 py-0.5 rounded text-xs">24 Reqs</span>
                 </li>
                 <li className="flex justify-between text-sm items-center border-b border-white/10 pb-2">
                   <span>Diary of a Wimpy Kid</span>
                   <span className="font-bold bg-white/20 px-2 py-0.5 rounded text-xs">18 Reqs</span>
                 </li>
                 <li className="flex justify-between text-sm items-center">
                   <span>Atomic Habits</span>
                   <span className="font-bold bg-white/20 px-2 py-0.5 rounded text-xs">12 Reqs</span>
                 </li>
              </ul>
           </div>

           <div className="bg-white rounded-3xl p-6 shadow-sm border border-orange-100">
             <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-sm">
               <Bell size={16} className="text-orange-500"/> Notify Availability
             </h3>
             <p className="text-xs text-slate-500 mb-4">Send alerts to students for books returned today.</p>
             <button className="w-full py-2 bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-slate-900">
               Trigger Notifications
             </button>
           </div>
        </div>

      </div>
    </div>
  );
};

export default ReservationRequestCenter;
