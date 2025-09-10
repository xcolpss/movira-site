// components/MobileHero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Slide = {
  title: string;
  subtitle?: string;
  thumb: string; // /public path
  href?: string;
};

const SLIDES: Slide[] = [
  {
    title: "ESPN Wimbledon Broadcast Toolkit",
    subtitle: "Promo • ESPN",
    thumb: "/poster.jpg",       // you already have poster.jpg in /public
    href: "/work",
  },
  {
    title: "Kinetic Launch Film",
    subtitle: "Edit • VFX/CGI",
    thumb: "/hero-poster.jpg",  // you already have hero-poster.jpg in /public
    href: "/work",
  },
  {
    title: "Sable UX Microsite",
    subtitle: "Web • Next.js",
    thumb: "/poster.jpg",
    href: "/work",
  },
];

export default function MobileHero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  // watch which slide is centered
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const items = Array.from(el.querySelectorAll("[data-slide]"));
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const i = Number((visible.target as HTMLElement).dataset.index);
          setIndex(i);
        }
      },
      {
        root: el,
        threshold: [0.4, 0.6, 0.8],
      }
    );

    items.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="md:hidden bg-bg text-ink">
      {/* Title above the slider */}
      <div className="px-5 pt-8">
        <h1 className="text-[26px] leading-[1.05] font-extrabold tracking-tight text-center">
          Make it cinematic.{" "}
          <span className="text-ink/80">Make it convert.</span>
        </h1>
        <p className="mt-3 text-[13px] text-ink/75 text-center">
          Agency • Academy • Originals — built to move audiences with premium craft.
        </p>
      </div>

      {/* Slider */}
      <div
        ref={wrapRef}
        className="mt-6 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-5 px-5 pb-2"
      >
        <div className="flex gap-4">
          {SLIDES.map((s, i) => (
            <article
              key={s.title + i}
              data-slide
              data-index={i}
              className="snap-start shrink-0 w-[88%] max-w-[520px] rounded-2xl overflow-hidden bg-ink/5 relative"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={s.thumb}
                  alt={s.title}
                  fill
                  sizes="90vw"
                  priority={i === 0}
                  className="object-cover"
                />
                {/* soft vignette like IF */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/10 to-transparent" />
              </div>

              {/* caption */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="rounded-xl bg-ink/80 backdrop-blur px-4 py-3 text-bg">
                  <div className="text-[13px] opacity-80">{s.subtitle}</div>
                  <div className="text-base font-semibold leading-tight">{s.title}</div>

                  <div className="mt-2">
                    <Link
                      href={s.href || "#"}
                      className="inline-flex items-center gap-2 text-[12px] tracking-wide px-3 py-1.5 rounded-full bg-bg text-ink hover:opacity-90"
                    >
                      Watch the Work
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* dots */}
        <div className="mt-4 flex items-center justify-center gap-3">
          {SLIDES.map((_, i) => (
            <span
              key={i}
              className={`h-[3px] rounded-full transition-all ${
                index === i ? "w-10 bg-ink" : "w-5 bg-ink/35"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
