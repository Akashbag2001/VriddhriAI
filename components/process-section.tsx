"use client";

import { motion } from "motion/react";
import { MessageSquare, FileText, Code2, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We start with a deep-dive conversation to understand your business, goals, target audience, and vision for the project.",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "from-violet-500 to-purple-600",
  },
  {
    number: "02",
    title: "Strategy & Design",
    description:
      "Our designers craft wireframes and high-fidelity mockups, iterating until the design perfectly represents your brand.",
    icon: <FileText className="w-6 h-6" />,
    color: "from-indigo-500 to-blue-600",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Our engineers build your project with clean code, modern frameworks, and performance-first architecture.",
    icon: <Code2 className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-600",
  },
  {
    number: "04",
    title: "Launch & Growth",
    description:
      "After rigorous testing and your approval, we deploy to production and support you through launch and beyond.",
    icon: <Rocket className="w-6 h-6" />,
    color: "from-amber-500 to-orange-600",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="relative py-24 lg:py-32 bg-[#06061e] overflow-hidden">
      {/* Decorative line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/6 blur-[100px]" />
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
            How We Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A streamlined 4-step process that takes your idea from concept to a live, high-performing
            product — typically within 2–6 weeks.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px">
            <div className="mx-auto max-w-4xl h-full bg-gradient-to-r from-violet-500/30 via-indigo-500/30 to-amber-500/30" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative group"
              >
                {/* Number */}
                <div className="relative flex items-center justify-center mb-6">
                  <div
                    className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 shadow-lg`}
                  >
                    <div className="w-full h-full rounded-[14px] bg-[#06061e] flex flex-col items-center justify-center gap-1">
                      <div className="text-white opacity-90">{step.icon}</div>
                      <div className={`text-xs font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                        {step.number}
                      </div>
                    </div>
                  </div>
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                  />
                </div>

                <h3 className="text-white font-bold text-xl mb-3 text-center">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed text-center">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 relative rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-600/10 to-indigo-600/10 p-10 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-indigo-600/5" />
          <div className="relative">
            <h3 className="text-3xl font-black text-white mb-3">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/50 mb-6 text-lg">
              Let&apos;s build something incredible together.
            </p>
            <div className="flex flex-wrap gap-3 items-center justify-center mb-6">
              {["Free consultation", "Fast delivery", "Satisfaction guaranteed"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/60 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  {item}
                </div>
              ))}
            </div>
            <a
              href="#contact"
              id="process-cta"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-lg hover:from-violet-500 hover:to-indigo-500 transition-all duration-200 shadow-lg shadow-violet-500/30 hover:-translate-y-0.5"
            >
              Let&apos;s Talk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
