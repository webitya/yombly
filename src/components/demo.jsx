import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function CompactGlowPills() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        justifyContent: "start",
      }}
    >
      {/* Pill 1 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          padding: "4px 8px",
          borderRadius: "9999px",
          fontSize: "11.5px",
          fontWeight: 500,
          color: "#1f2937",
          background: "linear-gradient(135deg, #f3e8ff, #faf5ff)",
          border: "1px solid #d8b4fe",
          boxShadow: "0 0 6px rgba(216, 180, 254, 0.4)",
          animation: "glow1 3s ease-in-out infinite",
        }}
      >
        <span style={{ color: "#a855f7", fontSize: "15px", lineHeight: 1 }}>
          <GroupsIcon fontSize="inherit" />
        </span>
        Revenue Team Building
      </div>

      {/* Pill 2 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          padding: "4px 8px",
          borderRadius: "9999px",
          fontSize: "11.5px",
          fontWeight: 500,
          color: "#1f2937",
          background: "linear-gradient(135deg, #dbeafe, #eff6ff)",
          border: "1px solid #93c5fd",
          boxShadow: "0 0 6px rgba(147, 197, 253, 0.4)",
          animation: "glow2 3s ease-in-out infinite 0.3s",
        }}
      >
        <span style={{ color: "#3b82f6", fontSize: "15px", lineHeight: 1 }}>
          <SchoolIcon fontSize="inherit" />
        </span>
        Training & Mentoring
      </div>

      {/* Pill 3 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          padding: "4px 8px",
          borderRadius: "9999px",
          fontSize: "11.5px",
          fontWeight: 500,
          color: "#1f2937",
          background: "linear-gradient(135deg, #fef3c7, #fff8e1)",
          border: "1px solid #fde68a",
          boxShadow: "0 0 6px rgba(253, 230, 138, 0.4)",
          animation: "glow3 3s ease-in-out infinite 0.6s",
        }}
      >
        <span style={{ color: "#fbbf24", fontSize: "15px", lineHeight: 1 }}>
          <TrendingUpIcon fontSize="inherit" />
        </span>
        Performance Optimization
      </div>

      {/* Keyframes for glow only */}
      <style>
        {`
          @keyframes glow1 {
            0%, 100% { box-shadow: 0 0 6px rgba(216, 180, 254, 0.4); }
            50% { box-shadow: 0 0 12px rgba(168, 85, 247, 0.7); }
          }
          @keyframes glow2 {
            0%, 100% { box-shadow: 0 0 6px rgba(147, 197, 253, 0.4); }
            50% { box-shadow: 0 0 12px rgba(59, 130, 246, 0.7); }
          }
          @keyframes glow3 {
            0%, 100% { box-shadow: 0 0 6px rgba(253, 230, 138, 0.4); }
            50% { box-shadow: 0 0 12px rgba(251, 191, 36, 0.7); }
          }
        `}
      </style>
    </div>
  );
}
