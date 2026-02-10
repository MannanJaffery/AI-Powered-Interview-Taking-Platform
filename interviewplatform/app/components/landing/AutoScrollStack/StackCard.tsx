"use client";

import React, { forwardRef, useRef, useEffect } from "react";
import TimerBar from "./TimerBar";

export interface StackCardProps {
  /** Index in the items array */
  index: number;
  /** 0→1 autoplay progress for the timer bar */
  activeProgress: number;
  /** Whether this card is the active (expanded) card */
  isActive: boolean;
  /** Card title */
  title: string;
  /** Card body content shown when active */
  children: React.ReactNode;
  /** Gradient color for the timer bar */
  timerColor?: string;
  /** Callback when this card is clicked / hovered */
  onActivate?: (index: number) => void;
}

const StackCard = forwardRef<HTMLDivElement, StackCardProps>(
  (
    {
      index,
      activeProgress,
      isActive,
      title,
      children,
      timerColor,
      onActivate,
    },
    ref
  ) => {
    const bodyRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    /* Animate max-height for the expand/collapse */
    useEffect(() => {
      const body = bodyRef.current;
      const inner = innerRef.current;
      if (!body || !inner) return;

      if (isActive) {
        body.style.maxHeight = inner.scrollHeight + "px";
        body.style.opacity = "1";
      } else {
        body.style.maxHeight = "0px";
        body.style.opacity = "0";
      }
    }, [isActive]);

    const padded = String(index + 1).padStart(2, "0");

    return (
      <div ref={ref} data-card-index={index}>
        {/* Top separator line */}
        <div className="h-px bg-white/[0.08]" />

        <div
          className="py-6 cursor-pointer group"
          onClick={() => onActivate?.(index)}
          onPointerEnter={() => onActivate?.(index)}
        >
          {/* Header row: number badge + title */}
          <div className="flex items-center gap-5">
            {/* Number badge */}
            <span
              className={`
                shrink-0 w-10 h-10 rounded-full flex items-center justify-center
                text-sm font-semibold transition-colors duration-300
                ${
                  isActive
                    ? "bg-white text-black"
                    : "bg-white/10 text-white/50"
                }
              `}
            >
              {padded}
            </span>

            <h3
              className={`
                text-xl md:text-2xl font-semibold transition-colors duration-300
                ${isActive ? "text-white" : "text-white/40"}
              `}
            >
              {title}
            </h3>
          </div>

          {/* Expandable body */}
          <div
            ref={bodyRef}
            className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
            style={{ maxHeight: 0, opacity: 0 }}
          >
            <div ref={innerRef} className="pt-4 pl-[60px]">
              {children}
            </div>
          </div>

          {/* Timer progress bar — only for active card */}
          {isActive && (
            <div className="mt-4 pl-[60px]">
              <TimerBar progress={activeProgress} color={timerColor} />
            </div>
          )}
        </div>

        {/* Bottom separator for the last item */}
      </div>
    );
  }
);

StackCard.displayName = "StackCard";
export default React.memo(StackCard);
