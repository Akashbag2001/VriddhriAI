"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-600/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/8 rounded-full blur-[160px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Background beams */}
      <BackgroundBeams className="opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4" />
          Freelance Web Agency — Crafting Digital Excellence
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground leading-[1.05] mb-6"
        >
          We Build
          <br />
          <span className="relative">
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Digital Experiences
            </span>
            {/* Underline glow */}
            <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent opacity-60" />
          </span>
          <br />
          <span className="text-foreground/80">That Grow</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl text-foreground/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          VriddhiAI is a premium freelance agency crafting high-performance websites,
          e-commerce stores, and digital products that captivate and convert.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#work"
            id="hero-cta-work"
            className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-lg hover:from-violet-500 hover:to-indigo-500 transition-all duration-200 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-0.5"
          >
            View Our Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            id="hero-cta-contact"
            className="group flex items-center gap-2 px-8 py-4 rounded-2xl border border-foreground/10 bg-foreground/5 text-foreground font-semibold text-lg hover:bg-foreground/10 hover:border-foreground/20 transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5"
          >
            <Play className="w-4 h-4 text-violet-500 dark:text-violet-400" />
            Start a Project
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-foreground/30 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-foreground/30 to-transparent" />
        </motion.div>

        {/* Floating tech logos/badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 text-foreground/20 text-sm"
        >
          {["Next.js", "React", "TypeScript", "Tailwind", "Figma", "Webflow"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/3 hover:text-foreground/40 hover:border-foreground/20 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
