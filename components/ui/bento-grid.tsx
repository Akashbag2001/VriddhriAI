"use client";

import { cn } from "@/lib/utils";

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}

export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
}: BentoGridItemProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 flex flex-col overflow-hidden",
        "hover:border-violet-500/30 hover:bg-white/[0.06] transition-all duration-300",
        "backdrop-blur-sm",
        className
      )}
    >
      {/* Gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-indigo-600/0 group-hover:from-violet-600/5 group-hover:to-indigo-600/5 transition-all duration-500 rounded-2xl" />
      
      {header && <div className="mb-4 flex-shrink-0">{header}</div>}
      <div className="flex flex-col gap-2 z-10">
        {icon && (
          <div className="text-violet-400 group-hover:text-violet-300 transition-colors duration-300 w-10 h-10 flex items-center justify-center rounded-xl bg-violet-500/10 group-hover:bg-violet-500/20">
            {icon}
          </div>
        )}
        <div className="font-semibold text-white/90 text-lg mt-2">{title}</div>
        <div className="text-sm text-white/50 leading-relaxed">{description}</div>
      </div>
    </div>
  );
}
