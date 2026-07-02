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
  Search,
  Megaphone,
  Phone,
  MessageSquare,
  Bot,
  BarChart3,
  Share2,
  Target,
} from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const webServices = [
  {
    title: "Web Development",
    description:
      "High-performance websites built with Next.js, React, and modern web technologies. Fast, scalable, and SEO-ready.",
    icon: <Code2 className="w-5 h-5" />,
    className: "md:col-span-1",
  },
  {
    title: "UI/UX Design",
    description:
      "Stunning interfaces that convert. Pixel-perfect designs that delight users and drive measurable results.",
    icon: <Palette className="w-5 h-5" />,
    className: "md:col-span-2",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Complete online stores with seamless payment, inventory management, and customer experience built to grow revenue.",
    icon: <ShoppingCart className="w-5 h-5" />,
    className: "md:col-span-2",
  },
  {
    title: "Brand Identity",
    description:
      "Logo, color systems, and visual identity that make your brand unforgettable across every touchpoint.",
    icon: <Layers className="w-5 h-5" />,
    className: "md:col-span-1",
  },
  {
    title: "Performance Optimization",
    description:
      "Lighthouse 100 scores, blazing load times, and Core Web Vitals that put you ahead of the competition.",
    icon: <Zap className="w-5 h-5" />,
    className: "md:col-span-1",
  },
  {
    title: "Global Reach",
    description:
      "Multi-language, multi-currency, and CDN-optimized websites ready to serve customers worldwide.",
    icon: <Globe className="w-5 h-5" />,
    className: "md:col-span-2",
  },
];

const marketingServices = [
  {
    title: "SEO Optimization",
    description:
      "Rank higher on Google with technical SEO, keyword research, on-page optimization, and link-building strategies that drive organic growth.",
    icon: <Search className="w-5 h-5" />,
    className: "md:col-span-2",
  },
  {
    title: "Meta & Google Ads",
    description:
      "Targeted paid ad campaigns on Google, Facebook, and Instagram that maximize ROI and minimize wasted spend.",
    icon: <Target className="w-5 h-5" />,
    className: "md:col-span-1",
  },
  {
    title: "Digital & Performance Marketing",
    description:
      "Full-funnel marketing strategy — from awareness to conversion — powered by data, A/B testing, and continuous optimization.",
    icon: <TrendingUp className="w-5 h-5" />,
    className: "md:col-span-1",
  },
  {
    title: "Social Media Management",
    description:
      "Consistent, on-brand content calendars, community management, and growth strategies across Instagram, LinkedIn, X, and more.",
    icon: <Share2 className="w-5 h-5" />,
    className: "md:col-span-2",
  },
];

const aiServices = [
  {
    title: "AI Agents",
    description:
      "Custom autonomous AI agents that automate workflows, handle decisions, and execute tasks — so your team can focus on what matters.",
    icon: <Bot className="w-5 h-5" />,
    className: "md:col-span-2",
  },
  {
    title: "Web Chat & Live Chat",
    description:
      "Intelligent chat widgets that engage visitors 24/7, qualify leads, and hand off seamlessly to your team.",
    icon: <MessageSquare className="w-5 h-5" />,
    className: "md:col-span-1",
  },
  {
    title: "AI Caller (Voice Agents)",
    description:
      "AI-powered voice agents that handle inbound and outbound calls — appointment booking, FAQs, and lead qualification at scale.",
    icon: <Phone className="w-5 h-5" />,
    className: "md:col-span-1",
  },
  {
    title: "Social Media DM Automation",
    description:
      "Automated, personalised DM flows on Instagram, Facebook, and WhatsApp that nurture leads and book calls on autopilot.",
    icon: <Megaphone className="w-5 h-5" />,
    className: "md:col-span-2",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Real-time dashboards and monthly reports that turn raw data into clear insights and actionable growth decisions.",
    icon: <BarChart3 className="w-5 h-5" />,
    className: "md:col-span-3",
  },
];

const categories = [
  {
    label: "Web & Design",
    badge: "Build",
    color: "violet",
    services: webServices,
  },
  {
    label: "Marketing & Advertising",
    badge: "Grow",
    color: "rose",
    services: marketingServices,
  },
  {
    label: "AI & Automation",
    badge: "Automate",
    color: "cyan",
    services: aiServices,
  },
];

const badgeColors: Record<string, string> = {
  violet: "border-violet-500/30 bg-violet-500/10 text-violet-300",
  rose: "border-rose-500/30 bg-rose-500/10 text-rose-300",
  cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
};

const glowColors: Record<string, string> = {
  violet: "bg-violet-600/8",
  rose: "bg-rose-600/8",
  cyan: "bg-cyan-600/8",
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 bg-transparent overflow-hidden"
    >
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
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-6">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight mb-4">
            Services That{" "}
            <span className="bg-gradient-to-r from-violet-500 to-indigo-500 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Deliver
            </span>
          </h2>
          <p className="text-foreground/50 text-lg max-w-2xl mx-auto">
            From concept to launch and beyond — we provide end-to-end web, marketing, and AI
            solutions tailored to your business goals.
          </p>
        </motion.div>

        {/* Category Sections */}
        <div className="flex flex-col gap-20">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: catIdx * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-semibold tracking-widest uppercase ${badgeColors[cat.color]}`}
                >
                  {cat.badge}
                </span>
                <h3 className="text-2xl font-bold text-foreground/90">{cat.label}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-foreground/10 to-transparent" />
              </div>

              {/* Bento Grid */}
              <BentoGrid>
                {cat.services.map((service) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
