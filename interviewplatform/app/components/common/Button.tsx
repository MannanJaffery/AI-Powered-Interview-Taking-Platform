"use client";

import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ label, onClick, className = "" }: ButtonProps) {
  return (
<button className={`button ${className}`} onClick={onClick}>
      <span className="label">{label}</span>
      <span className="gradient-container">
        <span className="gradient"></span>
      </span>
    </button>
  );
}
