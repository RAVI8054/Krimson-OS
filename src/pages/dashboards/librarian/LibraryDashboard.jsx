import React from 'react';
import { LIBRARIAN_DATA } from '../../../data/librarianData';
import { Book, Users, Clock, AlertTriangle, Search, Plus, Edit, Trash2 } from 'lucide-react';

const StatCard = ({ title, value, icon, color, subtext }) => {
  const Icon = icon;
  return (
  <div className="bg-white p-6 rounded-3xl shadow-sm border-b-4 relative overflow-hidden group" style={{ borderColor: color }}>
    <div className="flex justify-between items-start relative z-10">
      <div>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">{title}</p>
        <h3 className="text-3xl font-extrabold text-slate-800 mt-2">{value}</h3>
        <p className="text-xs text-slate-400 mt-2">{subtext}</p>
      </div>
      <div className="p-3 rounded-2xl bg-slate-50 text-slate-500 group-hover:bg-slate-100 transition-colors">
        <Icon size={24} />
      </div>
    </div>
  </div>
);
};

const LibraryDashboard = () => {
  const { stats, catalog } = LIBRARIAN_DATA;

  return (
    <div className="space-y-8">
      {/* 1. Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total Resources" value={stats.totalBooks} icon={Book} color="#3b82f6" subtext="Books & Digital Media" />
        <StatCard title="Issued" value={stats.issued} icon={Users} color="#10b981" subtext="Currently with students" />
        <StatCard title="Reserved" value={stats.reserved} icon={Clock} color="#f59e0b" subtext="Awaiting pickup" />
        <StatCard title="Overdue" value={stats.overdue} icon={AlertTriangle} color="#ef4444" subtext="Requires attention" />
      </div>

      {/* 2. Catalog Management */}
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h3 className="text-xl font-bold text-slate-800">Library Catalog</h3>
          <div className="flex gap-4 w-full md:w-auto">
             <div className="relative flex-1 md:flex-none">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
               <input type="text" placeholder="Title, Author, ISBN..." className="pl-10 pr-4 py-2 bg-slate-50 rounded-xl text-sm w-full md:w-64 outline-none focus:ring-2 focus:ring-blue-100" />
             </div>
             <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors">
               <Plus size={16} /> Add Resource
             </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 text-xs uppercase">
                <th className="p-4 font-bold">Book Details</th>
                <th className="p-4 font-bold">Category</th>
                <th className="p-4 font-bold">ISBN</th>
                <th className="p-4 font-bold">Stock</th>
                <th className="p-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {catalog.map((book) => (
                <tr key={book.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="p-4">
                    <p className="font-bold text-slate-700">{book.title}</p>
                    <p className="text-xs text-slate-400">{book.author}</p>
                  </td>
                  <td className="p-4">
                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">{book.category}</span>
                  </td>
                  <td className="p-4 text-sm text-slate-500 font-mono">{book.isbn}</td>
                  <td className="p-4">
                     <div className="flex items-center gap-2">
                       <span className="font-bold text-slate-800">{book.available}</span>
                       <span className="text-xs text-slate-400">/ {book.stock}</span>
                       <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden ml-2">
                         <div className={`h-full rounded-full ${book.available < 3 ? 'bg-red-400' : 'bg-green-400'}`} style={{ width: `${(book.available / book.stock) * 100}%` }}></div>
                       </div>
                     </div>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg"><Edit size={16} /></button>
                      <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LibraryDashboard;
