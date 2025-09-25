"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { cn } from "@/lib/utility";

export function EvervaultHover({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    setRandomString(generateRandomString(1500));
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    setRandomString(generateRandomString(1500));
  }

  const maskImage = useMotionTemplate`radial-gradient(220px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage as any };

  return (
    <div
      onMouseMove={onMouseMove}
      className={cn(
        "group/ev relative overflow-hidden rounded-2xl",
        className
      )}
    >
      {/* Hover gradient effect layer */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-600 opacity-0 transition duration-500 group-hover/ev:opacity-100"
        style={style}
      />
      {/* Code rain overlay (subtle) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-500 group-hover/ev:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 h-full break-words whitespace-pre-wrap text-[10px] leading-[12px] text-white font-mono font-bold">
          {randomString}
        </p>
      </motion.div>
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function generateRandomString(length: number) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
