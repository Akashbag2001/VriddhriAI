"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface InfiniteScrollingCardsProps {
  items: React.ReactNode[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export function InfiniteScrollingCards({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: InfiniteScrollingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;
    const scroller = scrollerRef.current;
    // Clone items for seamless loop
    const children = Array.from(scroller.children);
    children.forEach((child) => {
      const clone = child.cloneNode(true);
      scroller.appendChild(clone);
    });

    const durationMap = { fast: "20s", normal: "40s", slow: "80s" };
    const animDir = direction === "left" ? "forwards" : "reverse";

    scroller.style.animation = `scroll ${durationMap[speed]} linear infinite ${animDir}`;

    if (pauseOnHover) {
      containerRef.current.addEventListener("mouseenter", () => {
        scroller.style.animationPlayState = "paused";
      });
      containerRef.current.addEventListener("mouseleave", () => {
        scroller.style.animationPlayState = "running";
      });
    }
  }, [direction, speed, pauseOnHover]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className="flex w-max gap-4 py-4"
        style={{ animation: "scroll 40s linear infinite" }}
      >
        {items.map((item, i) => (
          <li key={i} className="flex-shrink-0">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
