"use client";

import { motion } from "framer-motion";
import PlaceholderImage from "./PlaceholderImage";
import { images } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-cream-100 py-32 text-ink-900 overflow-hidden noise"
    >
      {/* Subtle parchment grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M0 40 L80 40 M40 0 L40 80' stroke='%231d1d1f' stroke-width='.4'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-terra-500"
        >
          À propos · Portrait
        </motion.p>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                <PlaceholderImage
                  src={images.stephaniePortrait}
                  alt="Stéphanie Vander Meiren"
                  label="Portrait de l'artiste"
                  gradient="linear-gradient(160deg, #b59b6a 0%, #5a4030 100%)"
                  sizes="(max-width: 1024px) 80vw, 30vw"
                  priority
                />
              </div>
              {/* ARBA badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-6 -right-6 rounded-2xl bg-ink-950 p-5 shadow-2xl max-w-[200px]"
              >
                <div className="font-display text-2xl text-moon-400">ARBA</div>
                <p className="mt-1 text-[11px] leading-snug text-cream-50/75">
                  Académie Royale des Beaux-Arts de Bruxelles
                </p>
                <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-moon-400/70">
                  · Sculpture ·
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-display-2 font-medium text-ink-900 text-balance">
              Artiste{" "}
              <span className="italic text-terra-500">pluridisciplinaire</span>.
            </h2>

            <div className="mt-10 max-w-2xl space-y-6 text-lg text-ink-900/75 leading-relaxed">
              <p>
                Artiste visuelle et illustratrice, Stéphanie Vander Meiren
                développe un univers sensible et poétique, à la croisée de
                l'illustration, de la scénographie et des arts plastiques.
              </p>
              <p>
                Ses créations prennent forme à travers le dessin, le volume, le
                textile et la mise en scène, donnant naissance à des œuvres où
                l'imaginaire dialogue avec le réel.
              </p>
              <p>
                Du livre jeunesse aux fresques urbaines, en passant par la
                création de marionnettes et d'univers scénographiques, chaque
                projet est pensé comme une expérience narrative, immersive et
                vivante.
              </p>
              <p>
                À travers son travail, elle explore des thématiques liées à
                l'enfance, à la transmission et à la mémoire collective, tout
                en invitant le public à entrer dans des mondes où se mêlent
                poésie, matière et émotion.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
