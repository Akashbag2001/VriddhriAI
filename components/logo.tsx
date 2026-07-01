/**
 * VriddhiAI Logo Components
 *
 * Usage:
 *   <LogoIcon />           — Square icon mark only (for favicons, avatars)
 *   <LogoWordmark />       — Icon + "VriddhiAI" text wordmark (for navbar)
 */

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
}

/**
 * The icon mark only — a growth chart with glowing violet nodes.
 * Renders as an inline SVG, scales with `size` prop (default 36px).
 */
export function LogoIcon({ className, size = 36 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("flex-shrink-0", className)}
      aria-label="VriddhiAI logo icon"
    >
      <defs>
        <linearGradient id="vai-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d0b2a" />
          <stop offset="100%" stopColor="#09071f" />
        </linearGradient>
        <linearGradient id="vai-line" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
        <filter id="vai-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Background rounded square */}
      <rect width="100" height="100" rx="22" fill="url(#vai-bg)" />
      {/* Subtle glowing border */}
      <rect
        width="100"
        height="100"
        rx="22"
        fill="none"
        stroke="#8B5CF6"
        strokeWidth="1"
        strokeOpacity="0.35"
      />

      {/* Ambient inner glow */}
      <circle cx="50" cy="58" r="36" fill="#8B5CF6" fillOpacity="0.07" />

      {/* Growth chart line */}
      <polyline
        filter="url(#vai-glow)"
        points="18,74 36,55 50,63 65,38 82,20"
        stroke="url(#vai-line)"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Arrow head */}
      <polyline
        points="69,14 82,20 76,31"
        stroke="url(#vai-line)"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Glowing node 1 */}
      <circle cx="18" cy="74" r="5" fill="#8B5CF6" filter="url(#vai-glow)" />
      <circle cx="18" cy="74" r="3.2" fill="#a78bfa" />

      {/* Glowing node 2 */}
      <circle cx="36" cy="55" r="5" fill="#8B5CF6" filter="url(#vai-glow)" />
      <circle cx="36" cy="55" r="3.2" fill="#a78bfa" />

      {/* Glowing node 3 (dip) */}
      <circle cx="50" cy="63" r="5" fill="#7C3AED" filter="url(#vai-glow)" />
      <circle cx="50" cy="63" r="3.2" fill="#8B5CF6" />

      {/* Glowing node 4 (peak) */}
      <circle cx="65" cy="38" r="5" fill="#6D28D9" filter="url(#vai-glow)" />
      <circle cx="65" cy="38" r="3.2" fill="#8B5CF6" />
    </svg>
  );
}

/**
 * Full horizontal wordmark — icon + "Vriddhi" + "AI" text.
 * Use in the navbar / header.
 */
export function LogoWordmark({ className, size = 36 }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5 select-none", className)}>
      <LogoIcon size={size} />
      <span
        className="font-black tracking-tight leading-none"
        style={{ fontSize: size * 0.58 }}
      >
        <span className="text-white">Vriddhi</span>
        <span
          style={{
            background: "linear-gradient(135deg, #a78bfa, #818cf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          AI
        </span>
      </span>
    </div>
  );
}
