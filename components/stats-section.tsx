"use client";

import { motion } from "motion/react";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const stats = [
  {
    id: "projects",
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
    description: "From startups to enterprises",
  },
  {
    id: "clients",
    value: 40,
    suffix: "+",
    label: "Happy Clients",
    description: "Across 8+ industries",
  },
  {
    id: "satisfaction",
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
    description: "We don't stop until you're delighted",
  },
  {
    id: "experience",
    value: 3,
    suffix: "+",
    label: "Years Experience",
    description: "Building cutting-edge digital products",
  },
];

export function StatsSection() {
  return (
    <section className="relative py-20 bg-[#06061e] overflow-hidden">
      {/* Gradient line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center group"
            >
              <div
                id={`stat-${stat.id}`}
                className="text-5xl sm:text-6xl font-black tracking-tight bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-2"
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2000} />
              </div>
              <div className="text-white font-semibold text-lg mb-1">{stat.label}</div>
              <div className="text-white/40 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
