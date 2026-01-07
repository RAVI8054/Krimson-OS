import React from 'react';
import { BarChart2, Book, AlertTriangle, Search } from 'lucide-react';

const AcademicMonitor = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Academic Performance Monitor</h1>
          <p className="text-slate-500">Analyze academic outcomes across grades and subjects</p>
        </div>
        <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Export Report</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Heatmap Placeholder */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
           <h3 className="font-semibold text-lg mb-4">School-wide Performance Heatmap</h3>
           <div className="h-80 bg-slate-50 rounded border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400">
              Subject vs Grade Average Score Visualization
           </div>
        </div>

        {/* Outliers */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
           <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
             <AlertTriangle className="text-amber-500" size={20}/>
             Performance Outliers
           </h3>
           <div className="space-y-3">
              <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                 <p className="font-bold">Grade 8 - Mathematics</p>
                 <p>Average dropped by 15% this term.</p>
                 <button className="text-xs text-red-800 underline mt-1">Request Review</button>
              </div>
              <div className="p-3 bg-green-50 text-green-700 rounded-lg text-sm">
                 <p className="font-bold">Grade 5 - Science</p>
                 <p>Top performing cohort (92% avg).</p>
              </div>
           </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
           <div className="flex justify-between items-center mb-4">
             <h3 className="font-semibold text-lg">Detailed Department Analysis</h3>
             <div className="relative">
                <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
                <input type="text" placeholder="Search class or subject..." className="pl-9 pr-4 py-2 border rounded-lg text-sm w-64" />
             </div>
           </div>
           <div className="overflow-x-auto">
             <table className="w-full text-sm text-left text-slate-600">
               <thead className="bg-slate-50 text-slate-700 font-semibold uppercase">
                 <tr>
                   <th className="px-4 py-3">Subject</th>
                   <th className="px-4 py-3">Dept Head</th>
                   <th className="px-4 py-3">Avg Score</th>
                   <th className="px-4 py-3">Pass %</th>
                   <th className="px-4 py-3">Status</th>
                 </tr>
               </thead>
               <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Mathematics</td>
                    <td className="px-4 py-3">Mr. Anderson</td>
                    <td className="px-4 py-3">76%</td>
                    <td className="px-4 py-3">88%</td>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">Review Needed</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">English Literature</td>
                    <td className="px-4 py-3">Ms. Roberts</td>
                    <td className="px-4 py-3">84%</td>
                    <td className="px-4 py-3">95%</td>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">Excellent</span></td>
                  </tr>
               </tbody>
             </table>
           </div>
      </div>
    </div>
  );
};

export default AcademicMonitor;
