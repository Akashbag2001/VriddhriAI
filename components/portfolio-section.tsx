"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Globe, ShoppingCart, Camera, Home, TrendingUp, Building } from "lucide-react";
import Image from "next/image";
import { ThreeDCard } from "@/components/ui/3d-card";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "stotra",
    title: "Stotra Apparels",
    url: "https://stotraapparels.com/",
    category: "E-Commerce",
    tags: ["Shopify", "E-Commerce", "Fashion"],
    description:
      "Premium apparel brand with a conversion-optimized storefront, stunning product photography integration, and seamless checkout experience.",
    icon: <ShoppingCart className="w-5 h-5" />,
    color: "from-rose-500 to-pink-600",
    accentColor: "rose",
    preview: "#1a0a10",
  },
  {
    id: "sansaptak",
    title: "Sansaptak",
    url: "https://sansaptak.vercel.app/",
    category: "Web App",
    tags: ["Next.js", "React", "Animation"],
    description:
      "A beautifully crafted web application featuring immersive animations and a modern, elegant user interface built with cutting-edge technologies.",
    icon: <Globe className="w-5 h-5" />,
    color: "from-violet-500 to-purple-600",
    accentColor: "violet",
    preview: "#0d0a1a",
    thumbnail: "/thumbnails/sansaptak.png",
  },
  {
    id: "rhino",
    title: "The Rhino Marketing",
    url: "https://therhinomarketing.com/",
    category: "Marketing",
    tags: ["Marketing", "Landing Page", "Lead Gen"],
    description:
      "Bold marketing agency website with powerful lead capture flows, compelling copywriting, and high-converting call-to-action sections.",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "from-amber-500 to-orange-600",
    accentColor: "amber",
    preview: "#1a0e00",
  },
  {
    id: "lensoflight",
    title: "Lens of Light",
    url: "https://lensoflight.framer.website",
    category: "Photography",
    tags: ["Framer", "Photography", "Portfolio"],
    description:
      "A visually stunning photography portfolio with immersive gallery layouts, smooth transitions, and an editorial-grade design aesthetic.",
    icon: <Camera className="w-5 h-5" />,
    color: "from-slate-400 to-zinc-600",
    accentColor: "slate",
    preview: "#0a0a0a",
  },
  {
    id: "lakeview",
    title: "Lakeview Homestay",
    url: "https://lakeviewhomestay-in-177903.hostingersite.com/",
    category: "Hospitality",
    tags: ["Hospitality", "Booking", "Travel"],
    description:
      "Serene homestay website with integrated booking functionality, photo galleries, and local experience showcasing that drives direct reservations.",
    icon: <Home className="w-5 h-5" />,
    color: "from-teal-500 to-emerald-600",
    accentColor: "teal",
    preview: "#001a15",
  },
  {
    id: "deys",
    title: "Deys Investment",
    url: "https://deys-investment.vercel.app/",
    category: "Finance",
    tags: ["Finance", "Investment", "Dashboard"],
    description:
      "Professional investment platform with a clean, trust-instilling design, financial data visualization, and secure user experience.",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "from-blue-500 to-indigo-600",
    accentColor: "blue",
    preview: "#050a1a",
    thumbnail: "/thumbnails/deys.png",
  },
  {
    id: "apex",
    title: "Apex Summit Roofing",
    url: "https://apex-summit-roofing.vercel.app/",
    category: "Construction",
    tags: ["Construction", "Local Business", "Services"],
    description:
      "Strong, professional roofing company website with service showcases, before/after galleries, and streamlined quote request funnels.",
    icon: <Building className="w-5 h-5" />,
    color: "from-orange-500 to-red-600",
    accentColor: "orange",
    preview: "#1a0800",
    thumbnail: "/thumbnails/apex.png",
  },
];

const categories = ["All", "E-Commerce", "Web App", "Marketing", "Photography", "Hospitality", "Finance", "Construction"];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative py-24 lg:py-32 bg-transparent overflow-hidden">
      {/* Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-indigo-600/8 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-6">
            Our Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Work That{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Speaks
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A curated selection of our finest projects across industries — each one crafted with
            purpose and precision.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                activeCategory === cat
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20"
                  : "border border-white/10 text-white/50 hover:text-white hover:border-white/20 bg-white/3"
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <ThreeDCard
                  containerClassName="h-full"
                  className="h-full"
                  rotateIntensity={8}
                >
                  <div
                    className={cn(
                      "relative h-full rounded-2xl border border-white/[0.08] overflow-hidden",
                      "bg-white/[0.03] backdrop-blur-sm",
                      "transition-all duration-300",
                      hoveredId === project.id && "border-white/20"
                    )}
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Preview area - static thumbnail or live iframe */}
                    <div
                      className="relative h-48 overflow-hidden"
                      style={{ background: project.preview }}
                    >
                      {/* Gradient tint overlay */}
                      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-10 z-10", project.color)} />

                      {project.thumbnail ? (
                        /* Static screenshot thumbnail (used for sites blocking iframes) */
                        <Image
                          src={project.thumbnail}
                          alt={`${project.title} screenshot`}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 100vw, 33vw"
                          priority={false}
                        />
                      ) : (
                        /* Live iframe for sites that allow embedding */
                        <div className="absolute inset-0 overflow-hidden rounded-t-2xl">
                          <iframe
                            src={project.url}
                            className="w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none"
                            title={project.title}
                            loading="lazy"
                            sandbox="allow-same-origin"
                          />
                        </div>
                      )}

                      {/* Overlay on hover */}
                      <div
                        className={cn(
                          "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                          hoveredId === project.id ? "opacity-100" : "opacity-0",
                          "bg-black/60 backdrop-blur-sm"
                        )}
                      >
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          id={`visit-${project.id}`}
                          className={cn(
                            "flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-sm",
                            "bg-gradient-to-r",
                            project.color,
                            "shadow-lg hover:scale-105 transition-transform"
                          )}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Visit Site
                        </a>
                      </div>

                      {/* Category badge */}
                      <div className="absolute top-3 left-3">
                        <span
                          className={cn(
                            "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white/90",
                            "bg-black/40 backdrop-blur-md border border-white/10"
                          )}
                        >
                          <span className={cn("w-1.5 h-1.5 rounded-full bg-gradient-to-r", project.color)} />
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-white font-bold text-lg leading-tight">
                            {project.title}
                          </h3>
                        </div>
                        <div
                          className={cn(
                            "flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-white",
                            "bg-gradient-to-br",
                            project.color,
                            "shadow-lg"
                          )}
                        >
                          {project.icon}
                        </div>
                      </div>

                      <p className="text-white/50 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium border border-white/[0.08] text-white/40 bg-white/[0.03]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ThreeDCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
