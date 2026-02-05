"use client";

import { motion } from "framer-motion";
import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ label, onClick, className = "" }: ButtonProps) {
  return (
<motion.button className={`button ${className}`} onClick={onClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{type:"spring" , stiffness:300}}>
      <span className="label">{label}</span>
      <span className="gradient-container">
        <span className="gradient"></span>
      </span>
    </motion.button>
  );
}
