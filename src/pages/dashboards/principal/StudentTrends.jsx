import React from 'react';
import { Users, TrendingDown, AlertCircle } from 'lucide-react';

const StudentTrends = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between overflow-hidden relative">
        <div className="relative z-10">
            <h1 className="text-2xl font-bold text-slate-800">Attendance & Student Trends</h1>
            <p className="text-slate-500 mt-1">Monitor student attendance and behavior patterns</p>
        </div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-pink-50 to-transparent"></div>
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-2xl flex items-center justify-center text-white shadow-inner">
            <Users size={24} />
        </div>
      </div>

      {/* Heatmap Section */}
      <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg text-slate-700">Attendance Heatmap (Grade vs Gender)</h3>
              <select className="border rounded p-2 text-sm bg-slate-50">
                  <option>This Month</option>
                  <option>Last Month</option>
                  <option>Year to Date</option>
              </select>
          </div>
          <div className="h-64 bg-slate-50 rounded border border-dashed border-slate-200 flex items-center justify-center">
              [Matrix Visualization: Grades 1-12 vs Male/Female Attendance %]
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top/Bottom Classes */}
          <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-semibold mb-4">Class Attendance Leaderboard</h3>
              <div className="space-y-4">
                  <div>
                      <p className="text-xs font-bold text-green-600 uppercase mb-2">Top Performing</p>
                      <div className="space-y-2">
                          <div className="flex justify-between text-sm p-3 bg-green-50 rounded">
                             <span>Grade 12-A</span>
                             <span className="font-bold">98.5%</span>
                          </div>
                          <div className="flex justify-between text-sm p-3 bg-green-50 rounded">
                             <span>Grade 10-Science</span>
                             <span className="font-bold">97.2%</span>
                          </div>
                      </div>
                  </div>
                  <div>
                      <p className="text-xs font-bold text-red-600 uppercase mb-2">Needs Improvement</p>
                      <div className="space-y-2">
                          <div className="flex justify-between text-sm p-3 bg-red-50 rounded">
                             <span>Grade 8-B</span>
                             <span className="font-bold">82.1%</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Chronic Absenteeism */}
          <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <AlertCircle className="text-red-500" size={18} /> Chronic Absenteeism Alerts
              </h3>
              <ul className="space-y-3">
                  <li className="flex items-center gap-3 p-3 border-b border-slate-50 hover:bg-slate-50 transition">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold">JM</div>
                      <div className="flex-1">
                          <p className="text-sm font-medium">John Miller (9-B)</p>
                          <p className="text-xs text-slate-500">Absent 4 days consecutively</p>
                      </div>
                      <button className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full">Flag</button>
                  </li>
                  <li className="flex items-center gap-3 p-3 border-b border-slate-50 hover:bg-slate-50 transition">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold">SL</div>
                      <div className="flex-1">
                          <p className="text-sm font-medium">Sarah Lee (11-A)</p>
                          <p className="text-xs text-slate-500">Attendance dropped below 85%</p>
                      </div>
                      <button className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full">Flag</button>
                  </li>
              </ul>
              <button className="w-full mt-4 text-center text-sm text-blue-600 font-medium">View All Alerts</button>
          </div>
      </div>
    </div>
  );
};

export default StudentTrends;
