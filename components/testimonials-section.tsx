"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { InfiniteScrollingCards } from "@/components/ui/infinite-scrolling-cards";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Owner, Stotra Apparels",
    text: "VriddhiAI transformed our online presence completely. Our sales jumped 3x within two months of the new website launch. Absolutely exceptional work!",
    rating: 5,
    avatar: "RS",
  },
  {
    name: "Priya Mehta",
    role: "Founder, Sansaptak",
    text: "The team at VriddhiAI understood our vision perfectly. The animations and user experience they delivered are beyond what we imagined possible.",
    rating: 5,
    avatar: "PM",
  },
  {
    name: "Arjun Bose",
    role: "Director, The Rhino Marketing",
    text: "Professional, responsive, and incredibly talented. They delivered our marketing website on time and it's been generating leads from day one.",
    rating: 5,
    avatar: "AB",
  },
  {
    name: "Kavya Nair",
    role: "Photographer, Lens of Light",
    text: "My portfolio website is stunning — clients always compliment it. VriddhiAI brought my photography work to life in a way I couldn't have done myself.",
    rating: 5,
    avatar: "KN",
  },
  {
    name: "Suresh Kumar",
    role: "Manager, Lakeview Homestay",
    text: "Bookings increased dramatically after the website redesign. The VriddhiAI team was patient, creative, and delivered exactly what we needed.",
    rating: 5,
    avatar: "SK",
  },
  {
    name: "Ritika Dey",
    role: "CEO, Deys Investment",
    text: "The financial dashboard and trust signals they built into our site have made a huge difference. Clients feel confident from the first visit.",
    rating: 5,
    avatar: "RD",
  },
  {
    name: "Marcus Thompson",
    role: "Owner, Apex Summit Roofing",
    text: "We've tried three agencies before VriddhiAI. Nobody else came close to their quality, speed, or communication. Highly recommend!",
    rating: 5,
    avatar: "MT",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="w-80 p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm flex flex-col gap-4 hover:border-violet-500/20 transition-colors duration-300">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <Quote className="w-6 h-6 text-violet-500/40" />
      </div>
      <p className="text-white/70 text-sm leading-relaxed">{testimonial.text}</p>
      <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/[0.06]">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">
          {testimonial.avatar}
        </div>
        <div>
          <div className="text-white text-sm font-semibold">{testimonial.name}</div>
          <div className="text-white/40 text-xs">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-[#05051a] overflow-hidden">
      {/* Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-violet-600/8 blur-[100px]" />
      </div>

      <div className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 px-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-6">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Real stories from real businesses we&apos;ve helped grow with exceptional digital
            experiences.
          </p>
        </motion.div>

        {/* Infinite scroll — row 1 */}
        <InfiniteScrollingCards
          items={testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
          direction="left"
          speed="normal"
          className="mb-4"
        />

        {/* Infinite scroll — row 2 reversed */}
        <InfiniteScrollingCards
          items={[...testimonials].reverse().map((t) => (
            <TestimonialCard key={t.name + "_r"} testimonial={t} />
          ))}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}
