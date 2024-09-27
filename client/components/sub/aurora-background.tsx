"use client";
import { cn } from "@/lib/utils";
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
          "relative flex flex-col  h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900  text-slate-950 transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
      [--navy-blue:#003060]
      [--power-blue:#055C9D]
      [--blue-grotto:#0E86D4]
      [--baby-blue:#68BBE3]
      [--blue-gradient:repeating-linear-gradient(100deg,var(--navy-blue)_0%,var(--power-blue)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--blue-grotto)_16%)]
      [--dark-gradient:repeating-linear-gradient(100deg,var(--navy-blue)_0%,var(--navy-blue)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--power-blue)_16%)]
      [--aurora:repeating-linear-gradient(100deg,var(--power-blue)_10%,var(--blue-grotto)_20%,var(--baby-blue)_30%,var(--power-blue)_40%,var(--navy-blue)_50%)]
      [background-image:var(--blue-gradient),var(--aurora)]
      dark:[background-image:var(--dark-gradient),var(--aurora)]
      [background-size:300%,_200%]
      [background-position:50%_50%,50%_50%]
      filter blur-[10px]
      after:content-[""] after:absolute after:inset-0 after:[background-image:var(--blue-gradient),var(--aurora)] 
      after:dark:[background-image:var(--dark-gradient),var(--aurora)]
      after:[background-size:200%,_100%] 
      after:animate-aurora after:[background-attachment:fixed] after:mix-blend-overlay
      pointer-events-none
      absolute -inset-[10px] opacity-70 will-change-transform
      `,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,var(--navy-blue)_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
