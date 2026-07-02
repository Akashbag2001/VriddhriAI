"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, X, Minus, MessageCircle } from "lucide-react";

// ── Types ────────────────────────────────────────────────────────
interface Message {
  id: string;
  role: "bot" | "user";
  text: string;
  time: string;
}

// ── Quick-reply chips ────────────────────────────────────────────
const QUICK_REPLIES = [
  { label: "💻 Web Development", key: "web" },
  { label: "🤖 AI & Automation", key: "ai" },
  { label: "📈 Digital Marketing", key: "marketing" },
  { label: "💰 Pricing & Plans", key: "pricing" },
  { label: "📞 Book a Call", key: "call" },
  { label: "📋 Get a Proposal", key: "proposal" },
  { label: "⏱ Turnaround Time", key: "turnaround" },
  { label: "🌍 Do you work globally?", key: "global" },
];

// ── Bot response logic ───────────────────────────────────────────
function getResponse(input: string): string {
  const q = input.toLowerCase();

  if (/web|website|landing|ecommerce|e-comm|redesign|webapp|application/.test(q))
    return "We craft high-performance websites, landing pages, e-commerce stores, and full-stack web apps — all powered by Next.js and modern AI tooling. Typical timelines run 1–2 weeks for landing pages and 4–8 weeks for web apps. Prices start from ₹15,000.\n\nWant a free quote? Just say Get a Proposal! 🚀";

  if (/ai|automation|agent|voice|caller|chatbot|chat bot|dm|whatsapp|bot/.test(q))
    return "We build custom AI agents, voice callers, web chat bots, and social media DM automation — all trained around your business.\n\n✅ AI Customer Support Agents\n✅ AI Voice Callers for lead follow-up\n✅ WhatsApp & Instagram DM Automation\n✅ Web Chat Integration\n\nReady to automate? Let's talk! 🤖";

  if (/marketing|seo|ads|google|meta|facebook|instagram|social|performance/.test(q))
    return "Our data-driven marketing team handles:\n\n📊 SEO Optimization\n🎯 Google Ads Management\n📱 Meta (Facebook/Instagram) Ads\n🚀 Digital & Performance Marketing\n📣 Social Media Management\n\nAll campaigns are ROI-focused. Want us to audit your current marketing? Say Book a Call!";

  if (/pric|cost|budget|fee|rate|plan|afford|cheap|how much/.test(q))
    return "Our pricing (approximate):\n\n💻 Landing Page — ₹15,000–₹40,000\n🛒 E-Commerce Store — ₹35,000–₹80,000\n⚙️ Web App — ₹50,000+\n🤖 AI Agent — ₹30,000+\n📈 Marketing Retainer — ₹20,000/month\n\nEvery project is custom-quoted. Want an exact number? Say Get a Proposal and we'll send one for free!";

  if (/call|consult|meet|talk|schedule|zoom|book/.test(q))
    return "Book a free 30-min strategy call — no strings attached!\n\n📞 WhatsApp: +91 82502 73145\n📧 Email: vriddhiai55@gmail.com\n\nJust reach out and we'll set up a time that works for you. Looking forward to it! 🙌";

  if (/proposal|quote|estimate|scope|project/.test(q))
    return "We'd love to send you a free proposal! Here's how:\n\n1️⃣ Head to our Contact page\n2️⃣ Fill out the form with your project details\n3️⃣ We'll get back within 24 hours with a custom plan\n\nOr message us directly on WhatsApp at +91 82502 73145. Let's build something great! 🎯";

  if (/turnaround|time|timeline|deadline|fast|quick|urgent/.test(q))
    return "Our typical timelines:\n\n⚡ Landing Page — 1–2 weeks\n🛒 E-Commerce — 3–5 weeks\n⚙️ Web App — 4–8 weeks\n🤖 AI Agent — 2–4 weeks\n📣 Marketing Setup — 1 week\n\nNeed something urgent? Let us know and we'll see what we can do!";

  if (/global|international|us|uk|canada|australia|outside india|overseas/.test(q))
    return "Yes! We work with clients globally 🌍\n\nWe've served clients across the US, UK, Australia, and Southeast Asia. All communication happens over email, WhatsApp, Zoom, or Slack — whatever works best for you.\n\nTimezone differences are no problem — we're available async!";

  if (/hello|hi|hey|start|help|what can/.test(q))
    return "Hi there! 👋 I'm Vridhi, your VriddhiAI guide.\n\nI can help you with:\n• Web development & design\n• AI agents & automation\n• Digital marketing\n• Pricing & proposals\n• Booking a strategy call\n\nWhat are you working on?";

  return "Great question! I'm not 100% sure I have the right info for that one. 😊\n\nFor the best answer, reach us directly:\n📞 WhatsApp: +91 82502 73145\n📧 Email: vriddhiai55@gmail.com\n\nOr try one of the quick options below!";
}

// ── Timestamp helper ─────────────────────────────────────────────
function getTime(): string {
  return new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}


// ── Typing indicator ─────────────────────────────────────────────
function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
        V
      </div>
      <div className="bg-white/[0.06] border border-white/[0.08] rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 items-center">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-violet-400"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────────
export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: "welcome",
      role: "bot" as const,
      text: "Hi — I'm Vridhi, VriddhiAI's AI guide. Whether you're building a website, scaling with AI, or growing with digital marketing, I can connect you with exactly the right solution. What are you working on?",
      time: getTime(),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open && !minimized) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open, minimized]);

  function sendMessage(text: string) {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: text.trim(),
      time: getTime(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        text: getResponse(text),
        time: getTime(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);
      if (!open) setUnread((u) => u + 1);
    }, 900 + Math.random() * 500);
  }

  function handleOpen() {
    setOpen(true);
    setMinimized(false);
    setUnread(0);
  }

  const showQuickReplies = messages.length <= 2 && !typing;

  return (
    <>
      {/* Floating bubble */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="bubble"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={handleOpen}
            aria-label="Open chat"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 shadow-2xl shadow-violet-500/40 flex items-center justify-center hover:scale-110 transition-transform duration-200"
          >
            <MessageCircle className="w-6 h-6 text-white" />
            {unread > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
                {unread}
              </span>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="window"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 280, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-3xl overflow-hidden shadow-2xl shadow-black/60 border border-white/[0.1] flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0e0d20] to-[#12112a] border-b border-white/[0.07] px-4 py-3 flex items-center gap-3 flex-shrink-0">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-black text-base shadow-lg shadow-violet-500/30">
                  V
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0e0d20]" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-sm tracking-tight">Vridhi</span>
                  <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[9px] font-bold uppercase tracking-widest">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                </div>
                <p className="text-white/40 text-[11px] truncate">
                  VriddhiAI · Web · AI · Marketing
                </p>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setMinimized((m) => !m)}
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all"
                  aria-label="Minimize"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all"
                  aria-label="Close"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {!minimized && (
                <motion.div
                  key="body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="flex flex-col overflow-hidden bg-[#0b0b1a]"
                >
                  {/* Messages */}
                  <div className="overflow-y-auto px-4 py-4 space-y-4" style={{ maxHeight: "340px" }}>
                    {messages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`flex items-end gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                      >
                        {msg.role === "bot" && (
                          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mb-5">
                            V
                          </div>
                        )}
                        <div className={`flex flex-col gap-1 max-w-[80%] ${msg.role === "user" ? "items-end" : "items-start"}`}>
                          <div
                            className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                              msg.role === "bot"
                                ? "bg-white/[0.06] border border-white/[0.08] text-white/90 rounded-bl-sm"
                                : "bg-gradient-to-br from-violet-600 to-indigo-600 text-white rounded-br-sm shadow-lg shadow-violet-500/20"
                            }`}
                          >
                            {msg.text}
                          </div>
                          <span className="text-white/25 text-[10px] px-1">{msg.time}</span>
                        </div>
                      </motion.div>
                    ))}
                    {typing && <TypingIndicator />}
                    <div ref={bottomRef} />
                  </div>

                  {/* Quick replies */}
                  {showQuickReplies && (
                    <div className="px-4 pb-3 flex flex-wrap gap-2">
                      {QUICK_REPLIES.map((qr) => (
                        <button
                          key={qr.key}
                          onClick={() => sendMessage(qr.label)}
                          className="px-3 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] text-white/70 text-[12px] hover:bg-violet-500/15 hover:border-violet-500/40 hover:text-violet-300 transition-all duration-150"
                        >
                          {qr.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Input */}
                  <div className="px-4 pb-4 pt-2 border-t border-white/[0.05]">
                    <div className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] rounded-2xl px-4 py-2.5 focus-within:border-violet-500/40 focus-within:bg-white/[0.07] transition-all">
                      <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                        placeholder="Ask anything…"
                        className="flex-1 bg-transparent text-white/90 text-sm placeholder:text-white/30 focus:outline-none"
                      />
                      <button
                        onClick={() => sendMessage(input)}
                        disabled={!input.trim()}
                        className="w-7 h-7 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center flex-shrink-0 disabled:opacity-30 hover:scale-105 transition-all shadow-lg shadow-violet-500/20"
                        aria-label="Send"
                      >
                        <Send className="w-3 h-3 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pb-3 text-center">
                    <p className="text-white/20 text-[10px]">
                      Powered by VriddhiAI · vriddhiai55@gmail.com
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
