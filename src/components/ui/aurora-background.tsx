"use client";
import { cn } from "@/lib/utility";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex h-[100vh] flex-col items-center justify-center bg-zinc-50 text-slate-950",
          className,
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              "absolute -inset-[10px] opacity-50 blur-[10px]",
              showRadialGradient &&
                "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]",
            )}
            style={{
              backgroundImage: `
                repeating-linear-gradient(100deg, #fff 0%, #fff 7%, transparent 10%, transparent 12%, #fff 16%),
                repeating-linear-gradient(100deg, #3b82f6 10%, #a5b4fc 15%, #93c5fd 20%, #ddd6fe 25%, #60a5fa 30%)
              `,
              backgroundSize: '300%, 200%',
              backgroundPosition: '50% 50%, 50% 50%',
              animation: 'var(--animate-aurora)',
            }}
          />
        </div>
        {children}
      </div>
    </main>
  );
};
