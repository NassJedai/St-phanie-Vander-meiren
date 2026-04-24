"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#marionnettes", label: "Marionnettes" },
  { href: "#spectacles",   label: "Spectacles" },
  { href: "#livres",       label: "Livres" },
  { href: "#ateliers",     label: "Ateliers" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "glass py-3" : "py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          <a
            href="#top"
            className="flex items-center gap-2.5 text-cream-50 hover:opacity-80 transition"
          >
            <svg viewBox="0 0 40 40" className="h-6 w-6 text-moon-500">
              <path
                d="M22 6C13.163 6 6 13.163 6 22s7.163 16 16 16c2.144 0 4.187-.424 6.048-1.19C24.344 35.496 21 31.126 21 26c0-7.18 5.82-13 13-13 .34 0 .678.013 1.013.038C33.378 9.358 28.024 6 22 6z"
                fill="currentColor"
              />
            </svg>
            <span className="font-display text-[15px] tracking-tight">
              Stéphanie Vander Meiren
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[13px] text-cream-50/70 tracking-wide transition hover:text-cream-50"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="rounded-full border border-moon-500/40 px-4 py-1.5 text-[13px] text-moon-400 transition hover:bg-moon-500 hover:text-ink-950"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile trigger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="md:hidden text-cream-50"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink-950/98 glass md:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="flex h-full flex-col items-center justify-center gap-8"
            >
              {[...links, { href: "#contact", label: "Contact" }].map((l) => (
                <motion.li
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-cream-50 tracking-tight"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
