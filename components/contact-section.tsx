"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send, Mail, MessageCircle, CheckCircle } from "lucide-react";

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

// ── Custom Dropdown ──────────────────────────────────────────────
const PROJECT_OPTIONS = [
  {
    group: "Web & Design",
    items: [
      { value: "website", label: "Website / Landing Page" },
      { value: "ecommerce", label: "E-Commerce Store" },
      { value: "webapp", label: "Web Application" },
      { value: "redesign", label: "Redesign / Rebrand" },
    ],
  },
  {
    group: "Marketing & Advertising",
    items: [
      { value: "seo", label: "SEO Optimization" },
      { value: "google-ads", label: "Google Ads Management" },
      { value: "meta-ads", label: "Meta (Facebook/Instagram) Ads" },
      { value: "performance-marketing", label: "Digital & Performance Marketing" },
      { value: "social-media", label: "Social Media Management" },
    ],
  },
  {
    group: "AI & Automation",
    items: [
      { value: "ai-agent", label: "AI Agent Development" },
      { value: "ai-caller", label: "AI Caller / Voice Agent" },
      { value: "web-chat", label: "Web Chat Integration" },
      { value: "dm-automation", label: "Social Media DM Automation" },
    ],
  },
  {
    group: null,
    items: [{ value: "other", label: "Other" }],
  },
];

function ProjectDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);

  const selectedLabel =
    PROJECT_OPTIONS.flatMap((g) => g.items).find((i) => i.value === value)
      ?.label ?? null;

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        id="contact-project"
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-200 text-left
          ${open
            ? "border-violet-500/50 bg-white/[0.08] ring-1 ring-violet-500/20"
            : "border-white/[0.08] bg-white/[0.05] hover:border-violet-500/30 hover:bg-white/[0.07]"
          }`}
      >
        <span className={selectedLabel ? "text-white font-medium" : "text-white/30"}>
          {selectedLabel ?? "Select project type…"}
        </span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-4 h-4 text-white/40 flex-shrink-0 ml-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </motion.svg>
      </button>

      {/* Panel */}
      {open && (
        <>
          {/* Invisible overlay to close on outside click */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute z-20 mt-2 w-full rounded-2xl border border-white/[0.1] bg-[#12112a] shadow-2xl shadow-black/60 backdrop-blur-xl overflow-hidden"
          >
            <div className="max-h-72 overflow-y-auto py-2 custom-scrollbar">
              {PROJECT_OPTIONS.map((group, gi) => (
                <div key={gi}>
                  {group.group && (
                    <p className="px-4 pt-3 pb-1 text-[10px] font-bold uppercase tracking-widest text-violet-400/70">
                      {group.group}
                    </p>
                  )}
                  {group.items.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => {
                        onChange(item.value);
                        setOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-all duration-150 flex items-center gap-2
                        ${value === item.value
                          ? "text-violet-300 bg-violet-500/15 font-semibold"
                          : "text-white/70 hover:text-white hover:bg-white/[0.06]"
                        }`}
                    >
                      {value === item.value && (
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                      )}
                      <span className={value === item.value ? "" : "ml-3.5"}>
                        {item.label}
                      </span>
                    </button>
                  ))}
                  {gi < PROJECT_OPTIONS.length - 1 && (
                    <div className="mx-4 my-1.5 border-t border-white/[0.05]" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}
// ─────────────────────────────────────────────────────────────────

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const json = await res.json();
    setSending(false);

    if (!res.ok) {
      setError(json.error || "Something went wrong. Please try again.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-transparent overflow-hidden">
      {/* Gradient bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-6">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight mb-6">
              Let&apos;s Build
              <br />
              <span className="bg-gradient-to-r from-violet-500 to-indigo-500 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Something Great
              </span>
            </h2>
            <p className="text-foreground/50 text-lg leading-relaxed mb-8">
              Have a project in mind? We&apos;d love to hear about it. Tell us what you need and
              we&apos;ll get back to you within 24 hours.
            </p>

            {/* Contact details */}
            <div className="space-y-4 mb-8">
              <a
                href="mailto:vriddhiai55@gmail.com"
                className="flex items-center gap-3 text-foreground/60 hover:text-foreground transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-violet-500 dark:text-violet-400" />
                </div>
                vriddhiai55@gmail.com
              </a>
              <a
                href="https://wa.me/918250273145"
                className="flex items-center gap-3 text-foreground/60 hover:text-foreground transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <MessageCircle className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                </div>
                WhatsApp Us
              </a>
            </div>

            {/* Social links */}
            {/* <div className="flex gap-3">
              {[
                { icon: <LinkedinIcon />, label: "LinkedIn", href: "#" },
                { icon: <TwitterIcon />, label: "Twitter", href: "#" },
                { icon: <GithubIcon />, label: "GitHub", href: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground/50 hover:text-foreground hover:border-foreground/20 hover:bg-foreground/10 dark:border-white/10 dark:bg-white/5 dark:text-white/50 dark:hover:text-white dark:hover:border-white/20 dark:hover:bg-white/10 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div> */}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center rounded-3xl border border-emerald-500/20 bg-emerald-500/5">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="w-16 h-16 text-emerald-500 mb-6" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-foreground/50">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="rounded-3xl border border-foreground/[0.08] bg-foreground/[0.03] dark:border-white/[0.08] dark:bg-white/[0.03] backdrop-blur-sm p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-foreground/60 text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-foreground/[0.05] border border-foreground/[0.08] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-violet-500/50 focus:bg-foreground/[0.08] dark:bg-white/[0.05] dark:border-white/[0.08] dark:text-white dark:placeholder:text-white/20 dark:focus:bg-white/[0.08] transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-foreground/60 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-foreground/[0.05] border border-foreground/[0.08] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-violet-500/50 focus:bg-foreground/[0.08] dark:bg-white/[0.05] dark:border-white/[0.08] dark:text-white dark:placeholder:text-white/20 dark:focus:bg-white/[0.08] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-project" className="block text-foreground/60 text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <ProjectDropdown
                    value={form.project}
                    onChange={(v) => setForm({ ...form, project: v })}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-foreground/60 text-sm font-medium mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your project, goals, timeline, and budget..."
                    className="w-full px-4 py-3 rounded-xl bg-foreground/[0.05] border border-foreground/[0.08] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-violet-500/50 focus:bg-foreground/[0.08] dark:bg-white/[0.05] dark:border-white/[0.08] dark:text-white dark:placeholder:text-white/20 dark:focus:bg-white/[0.08] transition-all resize-none"
                  />
                </div>

                {error && (
                  <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    <span className="mt-0.5">⚠</span>
                    <span>{error}</span>
                  </div>
                )}

                <button
                  id="contact-submit"
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold hover:from-violet-500 hover:to-indigo-500 transition-all duration-200 shadow-lg shadow-violet-500/20 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5"
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
