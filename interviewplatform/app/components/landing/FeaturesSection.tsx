"use client";

import { useState } from "react";
import { AutoScrollStack } from "./AutoScrollStack";
import type { AutoScrollStackItem } from "./AutoScrollStack";
import FeatureVisualizer from "./AutoScrollStack/FeatureVisualizer";
import type { FeatureVisual } from "./AutoScrollStack/FeatureVisualizer";
import {
  BrainElectricity,
  GraphUp,
  BookStack,
  PathArrow,
  VideoCamera,
  Trophy,
} from "iconoir-react";

/* ------------------------------------------------------------------ */
/*  Icon wrapper – adds a glow ring + label around each Iconoir icon   */
/* ------------------------------------------------------------------ */

function IconVisual({
  icon: Icon,
  color,
  label,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  color: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Outer glow rings */}
      <div className="relative">
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-20"
          style={{ background: color }}
        />
        <div
          className="relative w-28 h-28 rounded-full flex items-center justify-center"
          style={{
            border: `2px solid ${color}30`,
            background: `${color}08`,
            boxShadow: `0 0 60px ${color}15, inset 0 0 30px ${color}05`,
          }}
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              border: `1.5px solid ${color}20`,
              background: `${color}0a`,
              color,
            }}
          >
            <Icon
              className="w-10 h-10"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </div>
      <span
        className="text-xs font-mono tracking-[0.25em] uppercase opacity-40"
        style={{ color }}
      >
        {label}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature data                                                       */
/* ------------------------------------------------------------------ */

const features: AutoScrollStackItem[] = [
  {
    id: "ai-tech",
    title: "Advanced AI Technology",
    timerColor: "from-blue-400 to-blue-600",
    content: (
      <p className="text-gray-400 leading-relaxed text-base md:text-lg font-light tracking-wide">
        Our cutting-edge AI interviewer adapts to your response style, providing
        real-world interview scenarios that match your target positions.
      </p>
    ),
  },
  {
    id: "analytics",
    title: "Real-time Analytics",
    timerColor: "from-purple-400 to-purple-600",
    content: (
      <p className="text-gray-400 leading-relaxed text-base md:text-lg font-light tracking-wide">
        Get comprehensive performance metrics including speaking pace, confidence
        level, technical accuracy, and communication effectiveness.
      </p>
    ),
  },
  {
    id: "questions",
    title: "Extensive Question Library",
    timerColor: "from-pink-400 to-pink-600",
    content: (
      <p className="text-gray-400 leading-relaxed text-base md:text-lg font-light tracking-wide">
        Access 1000+ questions across 50+ industries and roles. Questions updated
        monthly based on actual hiring trends.
      </p>
    ),
  },
  {
    id: "learning-path",
    title: "Personalized Learning Path",
    timerColor: "from-cyan-400 to-cyan-600",
    content: (
      <p className="text-gray-400 leading-relaxed text-base md:text-lg font-light tracking-wide">
        AI-powered recommendations create a customized learning journey based on
        your strengths and weaknesses.
      </p>
    ),
  },
  {
    id: "video",
    title: "Video Recording & Playback",
    timerColor: "from-orange-400 to-red-500",
    content: (
      <p className="text-gray-400 leading-relaxed text-base md:text-lg font-light tracking-wide">
        Record your interviews, review your performance, and track improvements
        over time with side-by-side comparisons.
      </p>
    ),
  },
  {
    id: "badges",
    title: "Achievement Badges",
    timerColor: "from-green-400 to-emerald-600",
    content: (
      <p className="text-gray-400 leading-relaxed text-base md:text-lg font-light tracking-wide">
        Unlock badges and milestones as you progress. Share your achievements
        with your network.
      </p>
    ),
  },
];

/* Visual data keyed to the same order as features */
const featureVisuals: FeatureVisual[] = [
  {
    gradient: "from-blue-500/20 to-blue-700/10",
    glowColor: "rgba(59,130,246,0.15)",
    illustration: <IconVisual icon={BrainElectricity} color="#60a5fa" label="AI Engine" />,
  },
  {
    gradient: "from-purple-500/20 to-purple-700/10",
    glowColor: "rgba(139,92,246,0.15)",
    illustration: <IconVisual icon={GraphUp} color="#a78bfa" label="Analytics" />,
  },
  {
    gradient: "from-pink-500/20 to-pink-700/10",
    glowColor: "rgba(244,114,182,0.15)",
    illustration: <IconVisual icon={BookStack} color="#f472b6" label="Library" />,
  },
  {
    gradient: "from-cyan-500/20 to-cyan-700/10",
    glowColor: "rgba(34,211,238,0.15)",
    illustration: <IconVisual icon={PathArrow} color="#22d3ee" label="Learning Path" />,
  },
  {
    gradient: "from-orange-500/20 to-red-700/10",
    glowColor: "rgba(251,146,60,0.15)",
    illustration: <IconVisual icon={VideoCamera} color="#fb923c" label="Recording" />,
  },
  {
    gradient: "from-green-500/20 to-emerald-700/10",
    glowColor: "rgba(52,211,153,0.15)",
    illustration: <IconVisual icon={Trophy} color="#34d399" label="Achievements" />,
  },
];

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export default function FeaturesSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="relative w-full bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold mb-4 leading-tight">
            <span className="text-white">Powerful</span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Features Built for You
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to master your interview skills with advanced AI
            technology and comprehensive analytics
          </p>
        </div>

        {/* Split layout: accordion left, visualizer right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Accordion */}
          <div>
            <AutoScrollStack
              items={features}
              duration={10_000}
              onActiveChange={setActiveIdx}
            />
          </div>

          {/* Right — Sticky visualizer */}
          <div className="hidden lg:block sticky top-[20vh] self-start">
            <FeatureVisualizer
              visuals={featureVisuals}
              activeIndex={activeIdx}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
