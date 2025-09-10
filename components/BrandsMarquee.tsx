// components/BrandsMarquee.tsx
"use client";

export default function BrandsMarquee({
  items,
  speed = 26, // seconds for one full loop
}: {
  items: string[];
  speed?: number;
}) {
  return (
    <section className="bg-ink text-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-20 bg-gradient-to-r from-ink to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-20 bg-gradient-to-l from-ink to-transparent" />

          <div className="group">
            <ul
              className="flex w-max items-center gap-12 sm:gap-16 animate-brands-marquee group-hover:[animation-play-state:paused]"
              style={{ animationDuration: `${speed}s` }}
            >
              {items.map((c) => (
                <li
                  key={`b1-${c}`}
                  className="shrink-0 text-sm sm:text-base tracking-[0.18em] uppercase opacity-95"
                >
                  {c}
                </li>
              ))}
              {items.map((c) => (
                <li
                  key={`b2-${c}`}
                  className="shrink-0 text-sm sm:text-base tracking-[0.18em] uppercase opacity-95"
                  aria-hidden="true"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
