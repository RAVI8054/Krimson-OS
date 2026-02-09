import React from "react";

const AcademicGrowthChart = ({ data }) => {
  // --- SVG Line Chart Helpers ---
  const chartHeight = 200;
  const chartWidth = 500;
  const chartPadding = 40;

  // Scales
  const getX = (index) =>
    chartPadding +
    (index / (data.length - 1)) * (chartWidth - 2 * chartPadding);
  const getY = (value) =>
    chartHeight -
    chartPadding -
    (value / 100) * (chartHeight - 2 * chartPadding);

  const createPath = (key) => {
    return data
      .map((d, i) => {
        return `${i === 0 ? "M" : "L"} ${getX(i)} ${getY(d[key])}`;
      })
      .join(" ");
  };

  return (
    <div className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800">Academic Growth</h3>
          <p className="text-xs text-slate-500">
            Subject-wise performance over terms
          </p>
        </div>
        <div className="flex gap-4 text-xs font-bold">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span> Math
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500"></span> Science
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span> English
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className="w-full min-w-[500px]"
        >
          {/* Grid Lines */}
          {[20, 40, 60, 80, 100].map((val) => (
            <line
              key={val}
              x1={chartPadding}
              y1={getY(val)}
              x2={chartWidth - chartPadding}
              y2={getY(val)}
              stroke="#e2e8f0"
              strokeDasharray="4"
            />
          ))}

          {/* Lines */}
          <path
            d={createPath("math")}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d={createPath("science")}
            fill="none"
            stroke="#22c55e"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d={createPath("english")}
            fill="none"
            stroke="#a855f7"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Dots */}
          {data.map((d, i) => (
            <g key={i}>
              <circle
                cx={getX(i)}
                cy={getY(d.math)}
                r="4"
                fill="white"
                stroke="#3b82f6"
                strokeWidth="2"
              />
              <circle
                cx={getX(i)}
                cy={getY(d.science)}
                r="4"
                fill="white"
                stroke="#22c55e"
                strokeWidth="2"
              />
              <circle
                cx={getX(i)}
                cy={getY(d.english)}
                r="4"
                fill="white"
                stroke="#a855f7"
                strokeWidth="2"
              />
              {/* X-Axis Labels */}
              <text
                x={getX(i)}
                y={chartHeight - 10}
                textAnchor="middle"
                fontSize="10"
                fill="#64748b"
                fontWeight="bold"
              >
                {d.term}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default AcademicGrowthChart;
