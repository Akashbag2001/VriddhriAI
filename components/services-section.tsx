"use client";

import { motion } from "motion/react";
import {
  Code2,
  Palette,
  ShoppingCart,
  TrendingUp,
  Layers,
  Zap,
  Globe,
  Smartphone,
} from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const services = [
  {
    title: "Web Development",
    description:
      "High-performance websites built with Next.js, React, and modern web technologies. Fast, scalable, and SEO-ready.",
    icon: <Code2 className="w-5 h-5" />,
    className: "md:col-span-1",
    gradient: "from-violet-500/20 to-purple-600/20",
  },
  {
    title: "UI/UX Design",
    description:
      "Stunning interfaces that convert. We create pixel-perfect designs that delight users and drive results.",
    icon: <Palette className="w-5 h-5" />,
    className: "md:col-span-2",
    gradient: "from-indigo-500/20 to-blue-600/20",
    featured: true,
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Complete online stores with seamless payment, inventory, and customer experience — built to grow your revenue.",
    icon: <ShoppingCart className="w-5 h-5" />,
    className: "md:col-span-2",
    gradient: "from-emerald-500/20 to-teal-600/20",
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies and landing pages that attract, engage, and convert your ideal customers.",
    icon: <TrendingUp className="w-5 h-5" />,
    className: "md:col-span-1",
    gradient: "from-rose-500/20 to-pink-600/20",
  },
  {
    title: "Brand Identity",
    description:
      "Logo, color systems, and visual identity that make your brand unforgettable across every touchpoint.",
    icon: <Layers className="w-5 h-5" />,
    className: "md:col-span-1",
    gradient: "from-amber-500/20 to-orange-600/20",
  },
  {
    title: "Performance Optimization",
    description:
      "Lighthouse 100 scores, blazing load times, and Core Web Vitals that put you ahead of the competition.",
    icon: <Zap className="w-5 h-5" />,
    className: "md:col-span-1",
    gradient: "from-cyan-500/20 to-sky-600/20",
  },
  {
    title: "Global Reach",
    description:
      "Multi-language, multi-currency, and CDN-optimized websites ready to serve customers worldwide.",
    icon: <Globe className="w-5 h-5" />,
    className: "md:col-span-1",
    gradient: "from-violet-500/20 to-indigo-600/20",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#06061e] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/8 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-6">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Services That{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Deliver
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            From concept to launch, we provide end-to-end digital solutions tailored to your
            business goals.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <BentoGrid>
            {services.map((service, i) => (
              <BentoGridItem
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                className={service.className}
              />
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
