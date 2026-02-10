"use client";

import React, { useState, useEffect } from "react";

/* ------------------------------------------------------------------ */
/*  Visual data for each feature                                       */
/* ------------------------------------------------------------------ */

export interface FeatureVisual {
  /** Gradient background matching the feature's color */
  gradient: string;
  /** SVG illustration rendered inside the card */
  illustration: React.ReactNode;
  /** Accent color for the glow ring */
  glowColor: string;
}

interface FeatureVisualizerProps {
  visuals: FeatureVisual[];
  activeIndex: number;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function FeatureVisualizer({
  visuals,
  activeIndex,
}: FeatureVisualizerProps) {
  /* Track the previous index so we can cross-dissolve */
  const [displayIndex, setDisplayIndex] = useState(activeIndex);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (activeIndex === displayIndex) return;
    setTransitioning(true);
    const timeout = setTimeout(() => {
      setDisplayIndex(activeIndex);
      setTransitioning(false);
    }, 300); // half of the CSS transition duration
    return () => clearTimeout(timeout);
  }, [activeIndex, displayIndex]);

  const current = visuals[displayIndex] ?? visuals[0];
  const next = visuals[activeIndex] ?? visuals[0];

  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center">
      {/* Glow backdrop */}
      <div
        className="absolute inset-0 rounded-3xl opacity-30 blur-3xl transition-all duration-700 ease-out"
        style={{ background: current.glowColor }}
      />

      {/* Card shell */}
      <div className="relative w-full h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm overflow-hidden">
        {/* Outgoing layer (current) */}
        <div
          className="absolute inset-0 flex items-center justify-center p-8 transition-all duration-600 ease-[cubic-bezier(.22,1,.36,1)]"
          style={{
            opacity: transitioning ? 0 : 1,
            transform: transitioning ? "scale(0.92)" : "scale(1)",
          }}
        >
          {/* Gradient bg */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${current.gradient} opacity-20`}
          />
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {current.illustration}
          </div>
        </div>

        {/* Incoming layer (next — only shown during transition) */}
        {transitioning && (
          <div
            className="absolute inset-0 flex items-center justify-center p-8 transition-all duration-600 ease-[cubic-bezier(.22,1,.36,1)]"
            style={{
              opacity: 1,
              transform: "scale(1)",
              animation: "featureVisualIn 0.6s cubic-bezier(.22,1,.36,1) forwards",
            }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${next.gradient} opacity-20`}
            />
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              {next.illustration}
            </div>
          </div>
        )}
      </div>

      {/* Inline keyframe for the cross-dissolve entrance */}
      <style>{`
        @keyframes featureVisualIn {
          0% {
            opacity: 0;
            transform: scale(1.08);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
