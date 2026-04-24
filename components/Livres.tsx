"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { livres } from "@/lib/data";

export default function Livres() {
  return (
    <section
      id="livres"
      className="relative bg-cream-100 py-32 px-6 text-ink-900 overflow-hidden"
    >
      {/* Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ccircle cx='50' cy='50' r='30' fill='none' stroke='%231d1d1f' stroke-width='.4'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-terra-500"
          >
            Illustration · Jeunesse
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mt-5 font-display text-display-2 font-medium text-balance"
          >
            Livres &amp;{" "}
            <span className="italic text-terra-500">publications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-lg text-ink-900/75 leading-relaxed text-pretty"
          >
            À travers ses illustrations, Stéphanie Vander Meiren donne vie à
            des récits où l'image prolonge et enrichit le texte.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="mx-auto mt-4 max-w-3xl text-lg text-ink-900/70 leading-relaxed text-pretty"
          >
            Son univers graphique, à la fois sensible et narratif, accompagne
            principalement des ouvrages jeunesse, en lien avec l'imaginaire,
            le patrimoine et la transmission. Chaque illustration est pensée
            comme une porte d'entrée dans l'histoire : elle guide le regard,
            suggère des émotions et laisse place à l'interprétation.
          </motion.p>
        </div>

        {/* Books — horizontal scroll on mobile, grid on desktop */}
        <div className="-mx-6 overflow-x-auto px-6 pb-6 sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0">
          <div className="flex gap-6 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-6">
            {livres.map((book, i) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex-shrink-0 w-[180px] sm:w-auto"
              >
                <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-cream-200 shadow-[8px_12px_32px_rgba(29,29,31,0.25)] transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-[-1deg] group-hover:shadow-[12px_18px_40px_rgba(29,29,31,0.35)]">
                  <Image
                    src={book.cover}
                    alt={`Couverture du livre ${book.title}`}
                    fill
                    sizes="(max-width: 640px) 180px, (max-width: 1024px) 33vw, 18vw"
                    className="object-contain"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="font-display text-base text-ink-900 leading-snug">
                    {book.title}
                  </h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-terra-500">
                    {book.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
