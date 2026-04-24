export default function Footer() {
  return (
    <footer className="border-t border-cream-50/[0.06] bg-ink-950 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 border-b border-cream-50/[0.06] pb-10 md:grid-cols-3">
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
              <p className="mt-1 text-[13px] text-cream-50/45 leading-relaxed">
                Artiste pluridisciplinaire · Bruxelles
                <br />
                Compagnie des Vieux Luneux
              </p>
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Navigation secondaire" className="flex flex-col gap-3">
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

          {/* Credits */}
          <div className="text-[13px] text-cream-50/40 leading-loose">
            <p>Photographies © Julie Palot Photography</p>
            <p>Compagnie des Vieux Luneux · Bruxelles</p>
          </div>
        </div>

        <div className="mt-8 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-cream-50/30">
          © {new Date().getFullYear()} Stéphanie Vander Meiren · Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
