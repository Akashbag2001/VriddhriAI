"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Palette,
  ShoppingCart,
  Bot,
  Search,
  ExternalLink,
  MessageSquare,
  FileText,
  Rocket,
  Star,
  Quote,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Mini preview: Services
───────────────────────────────────────────── */
function ServicesPreview() {
  const items = [
    { icon: <Code2 className="w-4 h-4" />, label: "Web Development", color: "text-violet-400" },
    { icon: <Palette className="w-4 h-4" />, label: "UI/UX Design", color: "text-pink-400" },
    { icon: <ShoppingCart className="w-4 h-4" />, label: "E-Commerce", color: "text-rose-400" },
    { icon: <Search className="w-4 h-4" />, label: "SEO Optimization", color: "text-cyan-400" },
    { icon: <Bot className="w-4 h-4" />, label: "AI Agents", color: "text-indigo-400" },
    { icon: <MessageSquare className="w-4 h-4" />, label: "Web Chat", color: "text-purple-400" },
  ];
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.07 }}
          className="flex items-center gap-3 p-3 rounded-xl border border-foreground/[0.07] bg-foreground/[0.03] backdrop-blur-sm hover:border-violet-500/20 transition-colors"
        >
          <span className={item.color}>{item.icon}</span>
          <span className="text-foreground/70 text-xs font-medium">{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Mini preview: Work / Portfolio
───────────────────────────────────────────── */
function WorkPreview() {
  const projects = [
    { title: "Stotra Apparels", cat: "E-Commerce", color: "from-rose-500 to-pink-600", dot: "bg-rose-500" },
    { title: "Sansaptak", cat: "Web App", color: "from-violet-500 to-purple-600", dot: "bg-violet-500" },
    { title: "Rhino Marketing", cat: "Marketing", color: "from-amber-500 to-orange-600", dot: "bg-amber-500" },
    { title: "Deys Investment", cat: "Finance", color: "from-blue-500 to-indigo-600", dot: "bg-blue-500" },
  ];
  return (
    <div className="grid grid-cols-2 gap-3">
      {projects.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="rounded-xl border border-white/[0.07] bg-white/[0.03] overflow-hidden hover:border-white/15 transition-colors"
        >
          <div className={`h-16 bg-gradient-to-br ${p.color} opacity-20`} />
          <div className="p-3">
            <div className="flex items-center gap-1.5 mb-1">
              <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
              <span className="text-foreground/40 text-[10px] font-semibold uppercase tracking-wider">{p.cat}</span>
            </div>
            <p className="text-foreground/80 text-xs font-semibold leading-tight">{p.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Mini preview: Process
───────────────────────────────────────────── */
function ProcessPreview() {
  const steps = [
    { num: "01", icon: <MessageSquare className="w-3.5 h-3.5" />, title: "Discovery Call", color: "from-violet-500 to-purple-600" },
    { num: "02", icon: <FileText className="w-3.5 h-3.5" />, title: "Strategy & Design", color: "from-indigo-500 to-blue-600" },
    { num: "03", icon: <Code2 className="w-3.5 h-3.5" />, title: "Development", color: "from-emerald-500 to-teal-600" },
    { num: "04", icon: <Rocket className="w-3.5 h-3.5" />, title: "Launch & Growth", color: "from-amber-500 to-orange-600" },
  ];
  return (
    <div className="flex flex-col gap-3">
      {steps.map((s, i) => (
        <motion.div
          key={s.num}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="flex items-center gap-4 p-3 rounded-xl border border-foreground/[0.07] bg-foreground/[0.03] hover:border-foreground/15 transition-colors"
        >
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center text-white flex-shrink-0`}>
            {s.icon}
          </div>
          <div className="flex-1 min-w-0">
            <span className={`text-[10px] font-black bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>{s.num}</span>
            <p className="text-foreground/70 text-xs font-semibold">{s.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Mini preview: Testimonials
───────────────────────────────────────────── */
function TestimonialsPreview() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Owner, Stotra Apparels",
      text: "VriddhiAI transformed our online presence. Sales jumped 3x within two months!",
      avatar: "RS",
    },
    {
      name: "Priya Mehta",
      role: "Founder, Sansaptak",
      text: "The animations and UX they delivered are beyond what we imagined possible.",
      avatar: "PM",
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      {reviews.map((r, i) => (
        <motion.div
          key={r.name}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.12 }}
          className="p-4 rounded-xl border border-foreground/[0.07] bg-foreground/[0.03] backdrop-blur-sm hover:border-amber-500/20 transition-colors"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, s) => (
                <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <Quote className="w-4 h-4 text-violet-500/40" />
          </div>
          <p className="text-foreground/60 text-xs leading-relaxed mb-3 line-clamp-2">&ldquo;{r.text}&rdquo;</p>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
              {r.avatar}
            </div>
            <div>
              <p className="text-foreground/80 text-xs font-semibold">{r.name}</p>
              <p className="text-foreground/40 text-[10px]">{r.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Section config
───────────────────────────────────────────── */
type SectionConfig = {
  id: string;
  badge: string;
  badgeColor: string;
  glowColor: string;
  href: string;
  title: string;
  titleHighlight: string;
  titleGradient: string;
  description: string;
  preview: React.ReactNode;
  reverse?: boolean;
};

const sections: SectionConfig[] = [
  {
    id: "services",
    badge: "What We Do",
    badgeColor: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    glowColor: "bg-violet-600/10",
    href: "/services",
    title: "Services That",
    titleHighlight: "Deliver",
    titleGradient: "from-violet-500 to-indigo-500 dark:from-violet-400 dark:to-indigo-400",
    description:
      "End-to-end web, marketing, and AI solutions crafted to grow your business — from concept to launch and beyond.",
    preview: <ServicesPreview />,
  },
  {
    id: "work",
    badge: "Our Portfolio",
    badgeColor: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
    glowColor: "bg-indigo-600/10",
    href: "/work",
    title: "Work That",
    titleHighlight: "Speaks",
    titleGradient: "from-indigo-400 to-violet-400",
    description:
      "A curated selection of our finest projects across industries — each one crafted with purpose and precision.",
    preview: <WorkPreview />,
    reverse: true,
  },
  {
    id: "process",
    badge: "How We Work",
    badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    glowColor: "bg-emerald-600/10",
    href: "/process",
    title: "Our",
    titleHighlight: "Process",
    titleGradient: "from-emerald-400 to-teal-400",
    description:
      "A streamlined 4-step approach that takes your idea from concept to a live, high-performing product — typically within 2–6 weeks.",
    preview: <ProcessPreview />,
  },
  {
    id: "testimonials",
    badge: "Client Love",
    badgeColor: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    glowColor: "bg-amber-600/10",
    href: "/testimonials",
    title: "What Our",
    titleHighlight: "Clients Say",
    titleGradient: "from-amber-400 to-orange-400",
    description:
      "Real stories from real businesses we've helped grow with exceptional digital experiences.",
    preview: <TestimonialsPreview />,
    reverse: true,
  },
];

/* ─────────────────────────────────────────────
   Main export
───────────────────────────────────────────── */
export function SectionPreviews() {
  return (
    <section className="relative py-24 lg:py-32 bg-transparent overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-violet-600/5 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-6">
            Everything We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight mb-4">
            Explore{" "}
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              All Sections
            </span>
          </h2>
          <p className="text-foreground/50 text-lg max-w-2xl mx-auto">
            From world-class services to glowing testimonials — get a taste of what makes VriddhiAI different.
          </p>
        </motion.div>

        {/* Alternating cards */}
        <div className="flex flex-col gap-24">
          {sections.map((sec) => (
            <motion.div
              key={sec.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${
                sec.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-12 lg:gap-20`}
            >
              {/* Text side */}
              <div className="flex-1 min-w-0">
                <motion.span
                  initial={{ opacity: 0, x: sec.reverse ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium mb-5 ${sec.badgeColor}`}
                >
                  {sec.badge}
                </motion.span>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="text-3xl sm:text-4xl font-black text-foreground tracking-tight mb-4 leading-tight"
                >
                  {sec.title}{" "}
                  <span
                    className={`bg-gradient-to-r ${sec.titleGradient} bg-clip-text text-transparent`}
                  >
                    {sec.titleHighlight}
                  </span>
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-foreground/50 text-lg leading-relaxed mb-8"
                >
                  {sec.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.28 }}
                >
                  <Link
                    href={sec.href}
                    id={`know-more-${sec.id}`}
                    className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold hover:from-violet-500 hover:to-indigo-500 transition-all duration-200 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5"
                  >
                    Know More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>

              {/* Preview card side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="flex-1 w-full max-w-sm lg:max-w-md"
              >
                <div className="relative rounded-3xl border border-foreground/[0.08] bg-foreground/[0.02] backdrop-blur-sm p-6 shadow-2xl overflow-hidden">
                  {/* Subtle glow behind card */}
                  <div
                    className={`absolute -inset-px rounded-3xl ${sec.glowColor} blur-2xl opacity-60 pointer-events-none`}
                  />
                  <div className="relative">{sec.preview}</div>

                  {/* Footer micro-link */}
                  <div className="relative mt-5 pt-4 border-t border-foreground/[0.06] flex items-center justify-between">
                    <span className="text-foreground/30 text-xs">Preview</span>
                    <Link
                      href={sec.href}
                      className="flex items-center gap-1 text-xs text-violet-400/60 hover:text-violet-400 transition-colors font-medium"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View full section
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
