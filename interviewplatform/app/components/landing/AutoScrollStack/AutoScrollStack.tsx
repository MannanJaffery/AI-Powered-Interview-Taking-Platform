"use client";

import React, {
  useRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import StackCard from "./StackCard";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface AutoScrollStackItem {
  /** Unique key */
  id: string;
  /** Title displayed in the header row */
  title: string;
  /** Body content rendered when the item is active */
  content: React.ReactNode;
  /** Optional gradient for the timer bar */
  timerColor?: string;
}

export interface AutoScrollStackProps {
  /** Cards to render */
  items: AutoScrollStackItem[];
  /** Autoplay duration per card in ms (default 15 000) */
  duration?: number;
  /** Called whenever the active card changes */
  onActiveChange?: (index: number) => void;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function AutoScrollStack({
  items,
  duration = 15_000,
  onActiveChange,
}: AutoScrollStackProps) {
  /* ---- refs ---- */
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timerRef = useRef<number | null>(null);
  const timerStartRef = useRef<number>(0);
  const elapsedBeforePauseRef = useRef<number>(0);

  /* ---- state ---- */
  const [activeIndex, setActiveIndexRaw] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /** Wrap setActiveIndex to also fire the callback */
  const setActiveIndex = useCallback(
    (idx: number | ((prev: number) => number)) => {
      setActiveIndexRaw((prev) => {
        const next = typeof idx === "function" ? idx(prev) : idx;
        return next;
      });
    },
    []
  );

  /* Fire onActiveChange whenever activeIndex actually changes */
  useEffect(() => {
    onActiveChange?.(activeIndex);
  }, [activeIndex, onActiveChange]);

  /* ---------------------------------------------------------------- */
  /*  Timer tick (rAF-based, no React re-render per frame)             */
  /* ---------------------------------------------------------------- */

  const tick = useCallback(() => {
    if (isPaused) return;

    const elapsed =
      elapsedBeforePauseRef.current +
      (performance.now() - timerStartRef.current);
    const p = Math.min(elapsed / duration, 1);
    setProgress(p);

    if (p >= 1) {
      // Advance to next card (loop back to 0)
      const nextIdx = (activeIndex + 1) % items.length;
      setActiveIndex(nextIdx);
      elapsedBeforePauseRef.current = 0;
      timerStartRef.current = performance.now();
      setProgress(0);
      return;
    }

    timerRef.current = requestAnimationFrame(tick);
  }, [isPaused, duration, activeIndex, items.length]);

  /* Start / restart timer whenever activeIndex or pause state changes */
  useEffect(() => {
    if (timerRef.current) cancelAnimationFrame(timerRef.current);

    if (!isPaused) {
      timerStartRef.current = performance.now();
      timerRef.current = requestAnimationFrame(tick);
    }

    return () => {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
    };
  }, [activeIndex, isPaused, tick]);

  /* ---------------------------------------------------------------- */
  /*  Interaction handlers                                             */
  /* ---------------------------------------------------------------- */

  /** Clicking / hovering a different card activates it */
  const handleActivate = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setActiveIndex(index);
      elapsedBeforePauseRef.current = 0;
      timerStartRef.current = performance.now();
      setProgress(0);
    },
    [activeIndex]
  );

  /** Pause timer while hovering the container */
  const handleContainerEnter = useCallback(() => {
    setIsPaused(true);
    elapsedBeforePauseRef.current +=
      performance.now() - timerStartRef.current;
    if (timerRef.current) cancelAnimationFrame(timerRef.current);
  }, []);

  /** Resume timer when mouse leaves */
  const handleContainerLeave = useCallback(() => {
    setIsPaused(false);
    timerStartRef.current = performance.now();
  }, []);

  /* ---------------------------------------------------------------- */
  /*  Render                                                           */
  /* ---------------------------------------------------------------- */

  return (
    <div
      ref={containerRef}
      className="auto-scroll-stack"
      onPointerEnter={handleContainerEnter}
      onPointerLeave={handleContainerLeave}
    >
      {items.map((item, i) => (
        <StackCard
          key={item.id}
          ref={(el) => {
            cardRefs.current[i] = el;
          }}
          index={i}
          isActive={i === activeIndex}
          activeProgress={i === activeIndex ? progress : 0}
          title={item.title}
          timerColor={item.timerColor}
          onActivate={handleActivate}
        >
          {item.content}
        </StackCard>
      ))}

      {/* Bottom separator */}
      <div className="h-px bg-white/[0.08]" />
    </div>
  );
}
