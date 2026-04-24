"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { images } from "@/lib/data";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 5000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Papier peint background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src={images.papierPeint1}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Darken overlay to keep form readable while preserving texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-ink-950/75"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(8,8,12,0.4) 60%, rgba(8,8,12,0.85) 100%)",
        }}
      />

      {/* Soft gold glow top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(212,168,76,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[11px] uppercase tracking-[0.32em] text-moon-400"
          >
            Entrons en contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mt-5 font-display text-display-2 font-medium text-cream-50 text-balance"
          >
            Un projet, une collaboration,
            <br />
            <span className="italic text-moon-400">une question ?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mx-auto mt-6 max-w-lg text-lg text-cream-50/70"
          >
            Demandes de spectacles, d'ateliers, d'illustrations — ou
            simplement pour en savoir plus.
          </motion.p>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mt-16 space-y-5 rounded-3xl border border-cream-50/10 bg-ink-950/60 p-8 backdrop-blur-xl sm:p-10"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field id="name" label="Nom" type="text" placeholder="Votre nom" />
            <Field
              id="email"
              label="Email"
              type="email"
              placeholder="vous@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-2 block font-mono text-[10px] uppercase tracking-[0.22em] text-moon-400"
            >
              Type de demande
            </label>
            <select
              id="subject"
              name="subject"
              defaultValue=""
              className="w-full rounded-xl border border-cream-50/15 bg-cream-50/[0.03] px-4 py-3.5 text-[15px] text-cream-50 outline-none transition focus:border-moon-500 focus:bg-cream-50/[0.06]"
            >
              <option value="" disabled>Sélectionnez une option…</option>
              <option value="spectacle">Demande de spectacle</option>
              <option value="atelier">Organisation d'atelier</option>
              <option value="illustration">Illustration / Livre</option>
              <option value="presse">Presse / Médias</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block font-mono text-[10px] uppercase tracking-[0.22em] text-moon-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Décrivez votre projet ou votre question…"
              className="w-full resize-none rounded-xl border border-cream-50/15 bg-cream-50/[0.03] px-4 py-3.5 text-[15px] text-cream-50 outline-none transition placeholder:text-cream-50/30 focus:border-moon-500 focus:bg-cream-50/[0.06]"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-moon-500 px-7 py-4 text-[13px] font-medium uppercase tracking-[0.12em] text-ink-950 transition-all hover:bg-moon-400 hover:shadow-[0_0_40px_rgba(212,168,76,0.4)] disabled:opacity-60"
          >
            {status === "loading" && "Envoi en cours…"}
            {status === "success" && (
              <>
                <Check size={16} /> Message envoyé
              </>
            )}
            {status === "idle" && (
              <>
                Envoyer le message
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </>
            )}
          </button>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm text-sage-400"
            >
              Merci ! Votre message a bien été envoyé. Je vous répondrai dans
              les meilleurs délais.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-mono text-[10px] uppercase tracking-[0.22em] text-moon-400"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        autoComplete={id === "email" ? "email" : "name"}
        className="w-full rounded-xl border border-cream-50/15 bg-cream-50/[0.03] px-4 py-3.5 text-[15px] text-cream-50 outline-none transition placeholder:text-cream-50/30 focus:border-moon-500 focus:bg-cream-50/[0.06]"
      />
    </div>
  );
}
