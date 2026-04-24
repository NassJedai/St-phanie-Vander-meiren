"use client";

import { motion } from "framer-motion";
import { spectacles } from "@/lib/data";
import PlaceholderImage from "./PlaceholderImage";

export default function Spectacles() {
  return (
    <section
      id="spectacles"
      className="relative bg-ink-900 py-32 px-6 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-terra-400"
          >
            Scène &amp; Rue
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mt-5 font-display text-display-2 font-medium text-cream-50 text-balance"
          >
            Spectacles &amp;{" "}
            <span className="italic text-terra-400">scénographie</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-cream-50/65 text-pretty"
          >
            Des théâtres aux places publiques, Oscar, Mia et leurs complices
            habitent tous les espaces — avec cette même capacité à suspendre
            le temps.
          </motion.p>
        </div>

        {/* Apple-style asymmetric grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
          {spectacles.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.9,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative overflow-hidden rounded-3xl bg-ink-800 transition-all duration-500 hover:bg-ink-700 hover:-translate-y-1 ${
                s.featured ? "md:col-span-4 md:row-span-2" : "md:col-span-2"
              }`}
            >
              {/* Image */}
              <div
                className={`relative w-full overflow-hidden ${
                  s.featured ? "aspect-[16/10]" : "aspect-[4/3]"
                }`}
              >
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                  <PlaceholderImage
                    src={s.image}
                    alt={s.title}
                    label={s.title}
                    gradient={
                      s.featured
                        ? "linear-gradient(160deg, #1a1a30 0%, #050510 100%)"
                        : "linear-gradient(160deg, #2a3020 0%, #0a0a10 100%)"
                    }
                    sizes={
                      s.featured
                        ? "(max-width: 768px) 100vw, 66vw"
                        : "(max-width: 768px) 100vw, 33vw"
                    }
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-moon-400">
                  {s.type}
                </p>
                <h3
                  className={`mt-3 font-display font-medium text-cream-50 text-balance ${
                    s.featured ? "text-3xl sm:text-4xl" : "text-2xl"
                  }`}
                >
                  {s.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-cream-50/60 text-pretty">
                  {s.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
