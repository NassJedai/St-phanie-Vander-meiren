import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#08080c",
          900: "#0e0e14",
          800: "#16161e",
          700: "#1f1f29",
          600: "#2a2a36",
        },
        cream: {
          50: "#fbf8f2",
          100: "#f6f1e6",
          200: "#ede4d0",
          300: "#e0d3b6",
        },
        sand: {
          400: "#cab48a",
          500: "#b59b6a",
          600: "#8d7548",
        },
        moon: {
          400: "#f0d99a",
          500: "#d4a84c",
          600: "#a07f30",
        },
        sage: {
          400: "#9ab89e",
          500: "#789a7d",
          600: "#5a7a5e",
        },
        terra: {
          400: "#c47e5c",
          500: "#a55c3e",
          600: "#7e4528",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      fontSize: {
        "display-1": ["clamp(3.5rem, 9vw, 9rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-2": ["clamp(2.5rem, 6vw, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        "display-3": ["clamp(2rem, 4.5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      animation: {
        "moon-float": "moonFloat 10s ease-in-out infinite",
        "moon-glow": "moonGlow 4s ease-in-out infinite alternate",
        "marquee": "marquee 40s linear infinite",
        "fade-in": "fadeIn 1.2s cubic-bezier(0.16,1,0.3,1) both",
      },
      keyframes: {
        moonFloat: {
          "0%, 100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        moonGlow: {
          "0%": { filter: "drop-shadow(0 0 20px rgba(212,168,76,0.2))" },
          "100%": { filter: "drop-shadow(0 0 50px rgba(212,168,76,0.55))" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
