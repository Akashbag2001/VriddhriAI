"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export function Spotlight({ className, fill = "white" }: SpotlightProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const el = divRef.current?.parentElement;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMounted, handleMouseMove, handleMouseLeave]);

  return (
    <div
      ref={divRef}
      className={cn(
        "pointer-events-none absolute inset-0 z-10 transition-opacity duration-300",
        className
      )}
      style={{ opacity }}
    >
      <div
        className="absolute rounded-full"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${fill}18, transparent 40%)`,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}
      />
    </div>
  );
}

export function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("group relative overflow-hidden rounded-2xl", className)}>
      <Spotlight fill="rgb(99,102,241)" />
      {children}
    </div>
  );
}
