import React from "react";

const SubjectStrengthRadar = ({ data }) => {
  // --- SVG Radar Chart Helpers ---
  const radarRadius = 100;
  const radarCenter = 120;
  const angleSlice = (Math.PI * 2) / data.length;

  const getCoordinates = (value, index) => {
    const angle = index * angleSlice - Math.PI / 2;
    const r = (value / 100) * radarRadius;
    return {
      x: radarCenter + r * Math.cos(angle),
      y: radarCenter + r * Math.sin(angle),
    };
  };

  const radarPoints = data
    .map((s, i) => {
      const { x, y } = getCoordinates(s.score, i);
      return `${x},${y}`;
    })
    .join(" ");

  const bgRadarPoints = data
    .map((s, i) => {
      const { x, y } = getCoordinates(100, i); // Full scale for background
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col items-center">
      <h3 className="font-bold text-slate-800 mb-2 self-start">
        Subject Strength Radar
      </h3>
      <div className="relative w-64 h-64 my-4">
        <svg viewBox="0 0 240 240" className="w-full h-full">
          {/* Background Polygon */}
          <polygon
            points={bgRadarPoints}
            fill="#f8fafc"
            stroke="#e2e8f0"
            strokeWidth="1"
          />
          {/* Grid Levels */}
          {[0.25, 0.5, 0.75].map((scale) => (
            <polygon
              key={scale}
              points={data
                .map((s, i) => {
                  const { x, y } = getCoordinates(100 * scale, i);
                  return `${x},${y}`;
                })
                .join(" ")}
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="0.5"
              strokeDasharray="4"
            />
          ))}

          {/* Data Polygon */}
          <polygon
            points={radarPoints}
            fill="rgba(99, 102, 241, 0.2)"
            stroke="#6366f1"
            strokeWidth="2"
          />

          {/* Labels */}
          {data.map((s, i) => {
            const { x, y } = getCoordinates(115, i);
            return (
              <text
                key={s.subject}
                x={x}
                y={y}
                textAnchor="middle"
                alignmentBaseline="middle"
                fontSize="10"
                fontWeight="bold"
                fill="#64748b"
              >
                {s.subject}
              </text>
            );
          })}
        </svg>
      </div>
      <p className="text-xs text-slate-500 text-center italic">
        Visualization of performance across core disciplines.
      </p>
    </div>
  );
};

export default SubjectStrengthRadar;
