"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function BackgroundBeams({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const beams = Array.from({ length: 6 }, (_, i) => ({
      x: (canvas.width / 7) * (i + 1),
      speed: 0.3 + Math.random() * 0.4,
      phase: (i * Math.PI) / 3,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.005;

      beams.forEach((beam) => {
        const y = canvas.height * (0.5 + 0.4 * Math.sin(t * beam.speed + beam.phase));
        const grad = ctx.createLinearGradient(beam.x - 1, 0, beam.x + 1, canvas.height);
        grad.addColorStop(0, "rgba(99,102,241,0)");
        grad.addColorStop(0.3, "rgba(99,102,241,0.15)");
        grad.addColorStop(0.5, "rgba(139,92,246,0.3)");
        grad.addColorStop(0.7, "rgba(99,102,241,0.15)");
        grad.addColorStop(1, "rgba(99,102,241,0)");

        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 20;
        ctx.shadowColor = "rgba(139,92,246,0.5)";
        ctx.moveTo(beam.x, 0);
        ctx.lineTo(beam.x, canvas.height);
        ctx.stroke();

        // Glow dot at intersection
        const dotGrad = ctx.createRadialGradient(beam.x, y, 0, beam.x, y, 40);
        dotGrad.addColorStop(0, "rgba(139,92,246,0.6)");
        dotGrad.addColorStop(1, "rgba(139,92,246,0)");
        ctx.beginPath();
        ctx.fillStyle = dotGrad;
        ctx.arc(beam.x, y, 40, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}
    />
  );
}
