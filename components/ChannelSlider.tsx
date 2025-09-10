// components/ChannelSlider.tsx
"use client";

import Link from "next/link";
import { useRef } from "react";

type Item = { title: string; href: string; handle: string };

export default function ChannelSlider({
  items,
  title = "Channels & collaborations",
}: {
  items: Item[];
  title?: string;
}) {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scroller.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.9, 480);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-14 md:py-16">
        <div className="mb-5 sm:mb-7 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink">{title}</h2>

          {/* Arrow controls only on md+; mobile uses swipe */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="h-9 w-9 rounded-full border border-border/80 hover:bg-ink/5"
              aria-label="Scroll left"
            >
              ‹
            </button>
            <button
              onClick={() => scroll("right")}
              className="h-9 w-9 rounded-full border border-border/80 hover:bg-ink/5"
              aria-label="Scroll right"
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory touch-pan-x"
        >
          {items.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="snap-center shrink-0 w-[86%] xs:w-[75%] sm:w-[48%] md:w-[32%] rounded-2xl border border-border/80 overflow-hidden hover:shadow-lg transition group"
            >
              <div className="relative aspect-[16/9] bg-gradient-to-br from-ink/10 via-ink/6 to-ink/10 grid place-items-center">
                <div className="h-12 w-12 rounded-full bg-ink/10 grid place-items-center border border-ink/15 text-ink/50">
                  ▶
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <div className="text-base sm:text-lg font-medium text-ink group-hover:opacity-85">{c.title}</div>
                <div className="text-sm text-ink/70">{c.handle}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
