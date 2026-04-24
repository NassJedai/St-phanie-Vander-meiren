"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { puppets, gallery, images, type Puppet } from "@/lib/data";
import PlaceholderImage from "./PlaceholderImage";

export default function Marionnettes() {
  return (
    <section
      id="marionnettes"
      className="relative bg-ink-950 text-cream-50 isolate"
    >
      {/* Background — dessin couverture with heavy darkening */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={images.dessin}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-90"
          style={{ objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-ink-950/90" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(8,8,12,0.5) 50%, rgba(8,8,12,0.95) 100%)",
          }}
        />
      </div>

      {/* Top transition */}
      <div className="h-32 bg-gradient-to-b from-cream-100 to-ink-950/80" />

      {/* Section header */}
      <div className="relative pt-24 pb-16 text-center px-6">
        <div className="mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[11px] uppercase tracking-[0.32em] text-moon-400"
          >
            Création · Scène &amp; Rue
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mt-6 font-display text-display-1 font-medium text-balance"
          >
            <span className="italic text-moon-400">Marionnettes</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-lg text-cream-50/65 sm:text-xl text-pretty"
          >
            Des personnages d'une humanité bouleversante — sculptés, habillés,
            animés avec une précision qui confond le réel.
          </motion.p>
        </div>
      </div>

      {/* Sticky scroll thematic blocks */}
      <div className="relative">
        {puppets.map((p, i) => (
          <PuppetStory key={p.id} puppet={p} index={i} />
        ))}
      </div>

      {/* Marquee gallery */}
      <GalleryMarquee />

      {/* Atelier */}
      <Atelier />
    </section>
  );
}

/* ─────────────────────────────────────────────
   Sticky scroll thematic block
   ───────────────────────────────────────────── */
function PuppetStory({ puppet, index }: { puppet: Puppet; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY     = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.03, 1, 1.03]);
  const textOp   = useTransform(scrollYProgress, [0.1, 0.4, 0.7, 0.9], [0, 1, 1, 0]);
  const textY    = useTransform(scrollYProgress, [0.1, 0.4], [40, 0]);

  const isReversed = index % 2 === 1;

  return (
    <div ref={ref} id={puppet.id} className="relative py-20 sm:py-32">
      {/* Backdrop ambient gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(ellipse at ${
            isReversed ? "20% 50%" : "80% 50%"
          }, ${puppet.color}30 0%, transparent 60%)`,
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-16">
        {/* Image */}
        <div
          className={`relative lg:col-span-7 ${
            isReversed ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div className="sticky top-24 lg:top-32">
            <motion.div
              style={{ y: imgY, scale: imgScale }}
              className="relative aspect-[4/5] w-full max-w-2xl mx-auto rounded-3xl overflow-hidden ring-1 ring-cream-50/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
            >
              {/* Backdrop tinted by puppet color for any letterboxing */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(160deg, ${puppet.color}22 0%, #050508 100%)`,
                }}
              />
              <PlaceholderImage
                src={puppet.imagePortrait}
                alt={`Marionnette — ${puppet.title}`}
                label={puppet.title}
                gradient={`linear-gradient(160deg, ${puppet.color}cc 0%, #0a0a10 100%)`}
                sizes="(max-width: 1024px) 100vw, 60vw"
                fit="contain"
              />
              <div
                className="pointer-events-none absolute -inset-px rounded-3xl"
                style={{ boxShadow: `inset 0 0 100px ${puppet.color}20` }}
              />
            </motion.div>

            {/* Floating secondary thumbnail */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`absolute bottom-6 ${
                isReversed ? "left-6" : "right-6"
              } hidden h-32 w-44 rounded-2xl overflow-hidden ring-1 ring-cream-50/20 shadow-2xl backdrop-blur-sm sm:block`}
            >
              <PlaceholderImage
                src={puppet.imageAction}
                alt=""
                label=""
                gradient={`linear-gradient(160deg, ${puppet.color}99 0%, #050508 100%)`}
                sizes="200px"
              />
            </motion.div>
          </div>
        </div>

        {/* Text */}
        <motion.div
          style={{ opacity: textOp, y: textY }}
          className={`flex items-center lg:col-span-5 ${
            isReversed ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="w-full">
            <h3 className="font-display text-display-2 font-medium text-cream-50 text-balance">
              {puppet.emoji && (
                <span
                  className="mr-3 inline-block align-middle text-[0.75em]"
                  aria-hidden
                >
                  {puppet.emoji}
                </span>
              )}
              <span style={{ color: puppet.color }}>{puppet.title}</span>
            </h3>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-cream-50/75 text-pretty">
              {puppet.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              {puppet.bullets && (
                <ul className="mt-2 space-y-2">
                  {puppet.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-cream-50/85">
                      <span
                        className="mt-2.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ background: puppet.color }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {puppet.outro?.map((p, i) => (
                <p key={`outro-${i}`}>{p}</p>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-cream-50/15" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream-50/40">
                0{index + 1} / 0{puppets.length}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Marquee gallery
   ───────────────────────────────────────────── */
function GalleryMarquee() {
  return (
    <div className="relative py-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink-950 to-transparent" />

      <div className="marquee-track gap-5 px-5">
        {[...gallery, ...gallery].map((item, i) => (
          <div
            key={i}
            className="group relative h-[420px] w-[300px] flex-shrink-0 overflow-hidden rounded-2xl ring-1 ring-cream-50/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500 hover:ring-moon-500/40"
          >
            <PlaceholderImage
              src={item.src}
              alt={item.label}
              label={item.label}
              gradient="linear-gradient(160deg, #2a2a3a 0%, #050508 100%)"
              sizes="300px"
            />
            {/* Caption overlay */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream-50/80">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Atelier (making-of)
   ───────────────────────────────────────────── */
function Atelier() {
  return (
    <div className="relative py-32 px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-moon-400">
            Dans l'atelier
          </p>
          <h3 className="mt-5 font-display text-display-3 font-medium text-cream-50 text-balance">
            La naissance d'un monde,
            <br />
            <span className="italic text-moon-400">geste après geste.</span>
          </h3>
          <div className="mt-8 space-y-6 text-lg text-cream-50/75 leading-relaxed">
            <p>
              Chaque personnage émerge au fil de mois de travail minutieux.
              Stéphanie sculpte, modèle, peint et coud, dans un dialogue
              constant entre la main et la matière.
            </p>
            <p>
              Les corps prennent forme à l'échelle humaine, avec une attention
              extrême portée aux détails. Une ride, une posture, un regard,
              chaque élément participe à faire naître une présence troublante,
              presque vivante.
            </p>
            <p>
              Entre précision artisanale et souffle poétique, ses créations
              donnent le sentiment rare d'être face à quelqu'un, plutôt qu'à
              quelque chose.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-cream-50/10"
        >
          <PlaceholderImage
            src={images.atelierSculpture1}
            alt="Stéphanie en atelier — création d'une marionnette"
            label="Atelier · Création"
            gradient="linear-gradient(160deg, #3a3020 0%, #0a0a10 100%)"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </div>
  );
}
