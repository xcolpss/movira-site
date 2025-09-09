import Link from "next/link";

const links = [
  { href: "/", label: "HOME" },
  { href: "/shows", label: "SHOWS" },   // keep if you'll add later; or change to Originals
  { href: "/work", label: "WORK" },
  { href: "/academy", label: "LEARN" },
];

export default function Navbar(){
  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/98 backdrop-blur border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-[auto_1fr_auto] items-center gap-6">
        {/* Logo + wordmark */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo-movira.png" alt="Movira Studios" className="h-8 w-auto" />
          <span className="hidden md:inline text-sm font-semibold tracking-[.28em] text-white/90">MOVIRA STUDIOS</span>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-8 text-[13px] font-semibold">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/85 hover:text-white relative pb-1 uppercase tracking-wide"
            >
              {l.label}
              <span className="absolute left-0 right-0 -bottom-[3px] h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform origin-center"
                    style={{ background:'linear-gradient(90deg,transparent,var(--gold),transparent)' }} />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a href="/contact" className="px-4 py-2 rounded-lg bg-[var(--gold)] text-black font-semibold hover:brightness-110 transition">
          Book Call
        </a>
      </div>
    </header>
  );
}
