"use client";

import { useRef, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  rotateIntensity?: number;
}

export function ThreeDCard({
  children,
  className,
  containerClassName,
  rotateIntensity = 15,
}: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -rotateIntensity;
    const rotateY = ((x - cx) / cx) * rotateIntensity;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)";
  };

  return (
    <div
      className={cn("group", containerClassName)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className={cn(
          "transition-transform duration-200 ease-out will-change-transform",
          className
        )}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </div>
  );
}
