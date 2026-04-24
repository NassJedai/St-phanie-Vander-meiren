"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const moonY   = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const nameY   = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-ink-950"
    >
      {/* Stars */}
      <div className="absolute inset-0 atmosphere-stars" />
      <div className="absolute inset-0 atmosphere-glow" />

      {/* Moon */}
      <motion.div
        style={{ y: moonY }}
        className="pointer-events-none absolute right-[6%] top-[8%] z-[1]"
      >
        <div className="relative animate-moon-float">
          <div
            className="h-[clamp(180px,22vw,340px)] w-[clamp(180px,22vw,340px)] rounded-full animate-moon-glow"
            style={{
              background:
                "radial-gradient(ellipse at 38% 32%, #fff8ea 0%, #f5e0a0 20%, #d4a84c 55%, #9b7a2a 80%, #6e551a 100%)",
              boxShadow:
                "inset -20px -20px 50px rgba(110,85,26,0.4), 0 0 60px rgba(212,168,76,0.25)",
            }}
          >
            {/* craters */}
            <div className="absolute left-[18%] top-[22%] h-[18%] w-[18%] rounded-full bg-[#6e551a]/30 shadow-[inset_2px_2px_5px_rgba(0,0,0,.2)]" />
            <div className="absolute left-[60%] top-[50%] h-[10%] w-[10%] rounded-full bg-[#6e551a]/30 shadow-[inset_2px_2px_5px_rgba(0,0,0,.2)]" />
            <div className="absolute left-[52%] top-[30%] h-[8%] w-[8%] rounded-full bg-[#6e551a]/30 shadow-[inset_2px_2px_5px_rgba(0,0,0,.2)]" />
          </div>
        </div>
      </motion.div>

      {/* Subtle bottom vignette */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink-950 to-transparent z-[1]" />

      {/* Content */}
      <motion.div
        style={{ y: nameY, opacity }}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="mb-6 font-mono text-[11px] uppercase tracking-[0.32em] text-moon-400"
        >
          Compagnie des Vieux Luneux · Bruxelles
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="font-display text-display-1 font-medium text-cream-50 text-balance"
        >
          Stéphanie
          <br />
          <span className="italic text-moon-400">Vander Meiren</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
          className="mt-8 max-w-xl text-lg text-cream-50/65 sm:text-xl"
        >
          Marionnettes. Illustration. Spectacle vivant.
          <br />
          <span className="text-cream-50/45">Un univers sculpté à la main.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.1 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#marionnettes"
            className="group rounded-full bg-moon-500 px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.12em] text-ink-950 transition-all duration-300 hover:bg-moon-400 hover:shadow-[0_0_40px_rgba(212,168,76,0.4)]"
          >
            Découvrir l'univers
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="rounded-full border border-cream-50/20 px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.12em] text-cream-50 transition-all hover:border-cream-50/60 hover:bg-cream-50/5"
          >
            Me contacter
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Défiler"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-50/40"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Défiler
        </span>
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-moon-500 to-transparent"
        />
      </motion.a>
    </section>
  );
}
