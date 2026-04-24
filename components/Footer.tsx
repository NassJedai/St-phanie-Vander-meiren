import Image from "next/image";
import { images } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-ink-950 border-t border-cream-50/[0.06]">
      {/* Banner — dessin les vieux */}
      <div className="relative h-64 w-full overflow-hidden sm:h-80">
        <Image
          src={images.dessinLesVieux}
          alt="Dessin — Les Vieux Luneux"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent" />
      </div>

      <div className="px-6 pb-6 pt-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 border-b border-cream-50/[0.06] pb-10 md:grid-cols-2">
            {/* Brand */}
            <div className="flex items-start gap-3">
              <svg viewBox="0 0 40 40" className="h-8 w-8 text-moon-500 flex-shrink-0 mt-1">
                <path
                  d="M22 6C13.163 6 6 13.163 6 22s7.163 16 16 16c2.144 0 4.187-.424 6.048-1.19C24.344 35.496 21 31.126 21 26c0-7.18 5.82-13 13-13 .34 0 .678.013 1.013.038C33.378 9.358 28.024 6 22 6z"
                  fill="currentColor"
                />
              </svg>
              <div>
                <div className="font-display text-base text-cream-50">
                  Stéphanie Vander Meiren
                </div>
              </div>
            </div>

            {/* Nav */}
            <nav
              aria-label="Navigation secondaire"
              className="flex flex-col gap-3 md:items-end"
            >
              {[
                ["Marionnettes", "#marionnettes"],
                ["Spectacles", "#spectacles"],
                ["Livres", "#livres"],
                ["Ateliers", "#ateliers"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-cream-50/55 transition hover:text-moon-400"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-8 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-cream-50/30">
            © {new Date().getFullYear()} Stéphanie Vander Meiren · Tous droits réservés
          </div>
        </div>
      </div>
    </footer>
  );
}
