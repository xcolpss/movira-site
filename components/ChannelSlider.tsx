// components/ChannelSlider.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type Item = {
  title: string;
  href: string;
  handle?: string;   // e.g. "@heyitsmr.j"
  img?: string;      // optional explicit thumbnail
};

export default function ChannelSlider({
  items,
  title = "Channels & collaborations",
}: {
  items: Item[];
  title?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  // derive a thumbnail (fallback to unavatar) so cards never look empty
  const withThumbs = useMemo(() => {
    return items.map((it) => {
      const handle = it.handle?.replace(/^@/, "") ?? "";
      const fallback = handle
        ? `https://unavatar.io/${encodeURIComponent(handle)}`
        : "/logo.png"; // final fallback
      return { ...it, _thumb: it.img || fallback };
    });
  }, [items]);

  // scroll to index
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const child = el.children[index] as HTMLElement | undefined;
    if (child) child.scrollIntoView({ behavior: "smooth", inline: "start" });
  }, [index]);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(withThumbs.length - 1, i + 1));

  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="mb-4 md:mb-6 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-ink">
            {title}
          </h2>

          {/* Nav buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous"
              className="size-9 rounded-full border border-border hover:bg-ink/5 grid place-content-center"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                {/* CHANGED: stroke to black */}
                <path d="M14 6l-6 6 6 6" stroke="black" strokeWidth="1.6" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="size-9 rounded-full border border-border hover:bg-ink/5 grid place-content-center"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                {/* CHANGED: stroke to black */}
                <path d="M10 6l6 6-6 6" stroke="black" strokeWidth="1.6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-5 snap-x snap-mandatory overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {withThumbs.map((it, i) => (
            <article
              key={it.href + i}
              className="min-w-[85%] sm:min-w-[44%] md:min-w-[31%] snap-start rounded-2xl border border-border/70 overflow-hidden bg-white"
            >
              <Link href={it.href} target="_blank">
                {/* Thumb */}
                <div className="relative aspect-[16/9] bg-ink/5">
                  <Image
                    src={it._thumb}
                    alt={it.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 33vw"
                    unoptimized
                  />
                  {/* Center play pill */}
                  <div className="absolute inset-0 grid place-content-center">
                    <span className="inline-grid place-content-center size-10 rounded-full bg-bg/70 text-ink ring-1 ring-border/80 backdrop-blur-sm">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 8l7 4-7 4V8z" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Meta */}
                <div className="p-4 md:p-5">
                  <div className="text-[15px] md:text-base font-medium text-ink">
                    {it.title}
                  </div>
                  {it.handle && (
                    <div className="mt-0.5 text-sm text-ink/70">{it.handle}</div>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-4 flex items-center gap-2 justify-end">
          {withThumbs.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={[
                "size-3 rounded-full border",
                i === index ? "bg-ink border-ink" : "border-border",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
