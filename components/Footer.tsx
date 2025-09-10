// components/Footer.tsx
// Minimal, dark, studio-style footer that matches your black/white theme.
// No client hooks required; safe to render on the server.

export default function Footer() {
  const year = new Date().getFullYear();

  // Reusable link styles (white text on black, visible focus)
  const link =
    "text-bg hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-bg rounded-sm";

  return (
    <footer className="bg-ink text-bg border-t border-border/30">
      {/* Top grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-12">
        {/* Brand / blurb */}
        <div className="md:col-span-5 space-y-4">
          <a href="/" className="text-lg font-semibold tracking-tight hover:opacity-80">
            Movira Studio
          </a>

          <p className="text-sm text-bg-muted max-w-sm leading-relaxed">
            Creative studio for film, VFX, CGI, and design. Minimal. Cinematic. Precise.
          </p>

          <div className="text-sm space-y-1">
            <div className="text-bg-muted">Rawalpindi, Pakistan</div>
            <a
              href="mailto:hello@movira.studio"
              className="underline underline-offset-4 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-bg rounded-sm"
            >
              hello@movira.studio
            </a>
          </div>
        </div>

        {/* Site nav */}
        <nav aria-label="Footer" className="md:col-span-4">
          <ul className="grid gap-2 text-sm">
            <li><a href="/work" className={link}>Work</a></li>
            <li><a href="/services" className={link}>Services</a></li>
            <li><a href="/about" className={link}>About</a></li>
            <li><a href="/contact" className={link}>Contact</a></li>
          </ul>
        </nav>

        {/* CTA + Socials */}
        <div className="md:col-span-3 md:justify-self-end flex flex-col items-start md:items-end gap-4">
          <a
            href="/contact"
            className="text-sm px-3 py-2 border border-bg rounded-full hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-bg"
          >
            Start a project →
          </a>

          <div className="flex items-center gap-4">
            {/* Email icon */}
            <a aria-label="Email" href="mailto:hello@movira.studio" className={link + " p-1"}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" />
                <path d="M4 7l8 6 8-6" stroke="currentColor" />
              </svg>
            </a>

            {/* Instagram icon */}
            <a
              aria-label="Instagram"
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className={link + " p-1"}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>

            {/* Behance icon */}
            <a
              aria-label="Behance"
              href="https://behance.net/"
              target="_blank"
              rel="noreferrer"
              className={link + " p-1"}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M4 8h5a3 3 0 1 1 0 6H4V8Zm5 9H4v-3h5a1.5 1.5 0 1 1 0 3ZM14 14h6a3 3 0 1 1-3 3h-3v-6a3 3 0 1 1 3-3h-3v6Z" stroke="currentColor" />
                <rect x="14" y="6" width="6" height="1.5" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-border/30" />
      </div>

      {/* Bottom row */}
      <div className="mx-auto max-w-7xl px-6 py-6 text-xs flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-bg-muted">
        <div>© {year} Movira Studio. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="/terms" className={link}>Terms</a>
          <a href="/privacy" className={link}>Privacy</a>
          <a href="#top" className={link}>Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
