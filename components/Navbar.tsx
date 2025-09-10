"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Primary nav items
const NAV: Array<{ label: string; href: string }> = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [elevated, setElevated] = useState(false);
  const [open, setOpen] = useState(false);

  // hairline on scroll
  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while mobile sheet is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const linkBase = "relative py-2 transition text-sm";
  const linkUnderline =
    "after:absolute after:left-0 after:-bottom-[2px] after:h-[1px] after:w-0 after:bg-current after:transition-all hover:after:w-full";
  const linkActive = "after:w-full";

  return (
    <header
      className={[
        "sticky top-0 z-50",
        "bg-bg/95 backdrop-blur supports-[backdrop-filter]:bg-bg/75",
        elevated ? "border-b border-border" : "border-b border-transparent",
      ].join(" ")}
    >
      {/* TOP BAR */}
      <div className="mx-auto max-w-7xl h-[64px] px-6 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="uppercase tracking-[0.22em] text-[12px] leading-none font-medium text-ink"
        >
          Movira Studios
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          <nav aria-label="Primary" className="flex items-center gap-8">
            {NAV.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "text-ink/90 hover:text-ink",
                    linkBase,
                    linkUnderline,
                    active ? linkActive : "",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Let’s talk (desktop, right-aligned & vertically centered) */}
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center h-9 px-4 rounded-full border border-ink/20 text-ink/90 hover:text-ink hover:border-ink transition
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
          >
            Let’s talk
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="ml-1 transition-transform group-hover:translate-x-[2px]"
              aria-hidden="true"
            >
              <path d="M6 12h12M12 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" fill="none" />
            </svg>
          </Link>
        </div>

        {/* MOBILE TRIGGER (hamburger animates into X) */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden relative p-2 -mr-2 text-ink/90 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <span className="sr-only">Open menu</span>
          <span
            className={[
              "block w-5 h-[2px] rounded bg-current transition-transform duration-200",
              open ? "translate-y-[6px] rotate-45" : "",
            ].join(" ")}
          />
          <span
            className={[
              "block w-5 h-[2px] rounded bg-current my-[5px] transition-opacity duration-200",
              open ? "opacity-0" : "opacity-100",
            ].join(" ")}
          />
          <span
            className={[
              "block w-5 h-[2px] rounded bg-current transition-transform duration-200",
              open ? "-translate-y-[6px] -rotate-45" : "",
            ].join(" ")}
          />
        </button>
      </div>

      {/* FULL-SCREEN MOBILE MENU */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

/* ----------------- Mobile Menu ----------------- */
function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null; // render nothing when closed

  return (
    <div
      className="fixed inset-0 z-[70] bg-black text-white"
      role="dialog"
      aria-modal="true"
    >
      {/* Top bar (logo + close) */}
      <div className="h-[64px] px-6 w-full flex items-center justify-between border-b border-white/10">
        <span className="uppercase tracking-[0.22em] text-[12px]">Movira Studios</span>
        <button
          onClick={onClose}
          className="group p-2 -mr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded"
          aria-label="Close menu"
        >
          {/* Animated X (strokes grow on hover) */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white/90 group-hover:text-white transition">
            <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>
      </div>

      {/* Menu list (solid dark bg + separators, readable) */}
      <nav
        aria-label="Mobile"
        className="h-[calc(100vh-64px-88px)] overflow-y-auto bg-ink text-white"
      >
        <ul className="flex flex-col divide-y divide-white/10">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="group flex items-center justify-between px-6 py-4 text-[16px] hover:bg-white/10 transition"
              >
                <span>{item.label}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="opacity-60 group-hover:opacity-100 group-hover:translate-x-[2px] transition"
                  aria-hidden="true"
                >
                  <path d="M8 5l8 7-8 7" stroke="currentColor" strokeWidth="1.6" fill="none" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer (no extra CTAs; clean, like your ref) */}
      <div className="px-6 h-[88px] w-full flex items-center justify-center border-t border-white/10">
        <p className="text-center text-[11px] tracking-[0.2em] uppercase text-white/60">
          © Movira Studio
        </p>
      </div>
    </div>
  );
}
