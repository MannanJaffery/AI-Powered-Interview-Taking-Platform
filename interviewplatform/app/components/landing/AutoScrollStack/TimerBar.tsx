"use client";

import React from "react";

interface TimerBarProps {
  /** 0 → 1 progress value */
  progress: number;
  /** Gradient color for the bar fill */
  color?: string;
}

const TimerBar: React.FC<TimerBarProps> = ({
  progress,
  color = "from-orange-400 to-red-500",
}) => {
  return (
    <div className="w-full h-[2px] mt-2 bg-white/[0.06] overflow-hidden">
      <div
        className={`h-full bg-gradient-to-r ${color}`}
        style={{
          width: `${Math.min(progress * 100, 100)}%`,
          willChange: "width",
          transition: "none",
        }}
      />
    </div>
  );
};

export default React.memo(TimerBar);
