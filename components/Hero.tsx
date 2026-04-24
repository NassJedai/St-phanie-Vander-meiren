"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images } from "@/lib/data";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY    = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const nameY  = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-ink-950"
    >
      {/* Background — dessin couverture with parallax */}
      <motion.div
        style={{ y: bgY }}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 scale-110"
      >
        <Image
          src={images.dessin}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Dark overlay for text legibility + warm tint */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-ink-950/70" />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, transparent 0%, rgba(8,8,12,0.4) 40%, rgba(8,8,12,0.9) 100%)",
        }}
      />

      {/* Subtle stars layer for atmospheric continuity */}
      <div className="pointer-events-none absolute inset-0 z-[2] atmosphere-stars opacity-30" />

      {/* Bottom vignette smoothing into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-48 bg-gradient-to-t from-ink-950 to-transparent" />

      {/* Content */}
      <motion.div
        style={{ y: nameY, opacity }}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="font-display text-display-1 font-medium text-cream-50 text-balance"
        >
          Stéphanie
          <br />
          <span className="italic text-moon-400">Vander Meiren</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          className="mt-8 max-w-xl text-lg text-cream-50/70 sm:text-xl"
        >
          Marionnettes. Illustration. Spectacle vivant.
          <br />
          <span className="text-cream-50/50">Un univers sculpté à la main.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
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
            className="rounded-full border border-cream-50/25 bg-cream-50/5 px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.12em] text-cream-50 backdrop-blur-sm transition-all hover:border-cream-50/60 hover:bg-cream-50/10"
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
        transition={{ duration: 1, delay: 1.6 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-50/50"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Défiler
        </span>
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-moon-500 to-transparent"
        />
      </motion.a>
    </section>
  );
}
