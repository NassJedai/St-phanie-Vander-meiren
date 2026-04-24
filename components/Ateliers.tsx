"use client";

import { motion } from "framer-motion";
import { ateliers, images } from "@/lib/data";
import PlaceholderImage from "./PlaceholderImage";
import { ArrowRight } from "lucide-react";

export default function Ateliers() {
  return (
    <section
      id="ateliers"
      className="relative bg-cream-200 py-32 px-6 text-ink-900 overflow-hidden"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-5"
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl">
            <PlaceholderImage
              src={images.atelierSculpture2}
              alt="Atelier créatif animé par Stéphanie"
              label="Atelier créatif"
              gradient="linear-gradient(160deg, #789a7d 0%, #2a3a2c 100%)"
              sizes="(max-width: 1024px) 80vw, 35vw"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-6 -right-6 rounded-2xl bg-sage-500 p-5 text-cream-50 shadow-xl"
          >
            <div className="font-display text-3xl">+</div>
            <p className="text-xs leading-tight">
              Ateliers tous
              <br />
              âges &amp; publics
            </p>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="lg:col-span-7"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-terra-500">
            Transmission &amp; Partage
          </p>
          <h2 className="mt-5 font-display text-display-2 font-medium text-balance">
            Ateliers
            <br />
            <span className="italic text-terra-500">artistiques</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-ink-900/75 leading-relaxed text-pretty">
            Stéphanie anime des ateliers qui transmettent sa passion pour les
            arts plastiques, la marionnette et la narration visuelle — auprès
            des enfants, des adultes, des familles et des structures
            culturelles.
          </p>

          <ul className="mt-8 space-y-2">
            {ateliers.map((a, i) => (
              <motion.li
                key={a}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-center gap-3 rounded-xl bg-cream-50/60 px-4 py-3 text-[15px] text-ink-900 transition hover:translate-x-1 hover:bg-cream-50"
              >
                <span className="block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terra-500" />
                {a}
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-ink-950 px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.12em] text-cream-50 transition hover:bg-terra-500"
          >
            Organiser un atelier
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
