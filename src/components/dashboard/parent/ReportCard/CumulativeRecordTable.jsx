import React from "react";

const CumulativeRecordTable = ({ cumulativeRecord }) => {
  if (!cumulativeRecord) return null;

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h3 className="text-xl font-bold text-slate-800">
          Cumulative Academic Record
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="p-4 pl-6 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Subject
              </th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
                Term 1
              </th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
                Term 2
              </th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
                Term 3
              </th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
                Final
              </th>
              <th className="p-4 pr-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
                Credits
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {cumulativeRecord.map((record, i) => (
              <tr
                key={i}
                className="hover:bg-blue-50/30 transition-colors group"
              >
                <td className="p-4 pl-6 font-semibold text-slate-700">
                  {record.subject}
                </td>
                <td className="p-4 text-center text-sm font-medium text-slate-600">
                  {record.t1}
                </td>
                <td className="p-4 text-center text-sm font-medium text-slate-600">
                  {record.t2}
                </td>
                <td className="p-4 text-center text-sm font-medium text-slate-600">
                  {record.t3}
                </td>
                <td className="p-4 text-center">
                  <span className="inline-block w-8 py-1 rounded-md bg-green-100 text-green-700 text-xs font-bold">
                    {record.final}
                  </span>
                </td>
                <td className="p-4 pr-6 text-center text-sm text-slate-500">
                  {record.credits}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CumulativeRecordTable;
