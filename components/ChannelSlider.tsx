// components/ChannelSlider.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";

export type ChannelItem = {
  title: string;
  href: string;
  handle?: string;
  img?: string; // preferred local logo (e.g., /logos/heyitsmrj.jpg)
};

function buildAvatarURL(it: ChannelItem) {
  if (it.img) return it.img; // ✅ your local logo wins
  const url = it.href?.toLowerCase() || "";
  const handle = it.handle?.replace(/^@/, "") || "";

  if (url.includes("youtube.com")) {
    return handle
      ? `https://unavatar.io/youtube/${encodeURIComponent(handle)}`
      : `https://unavatar.io/${encodeURIComponent(it.href)}`;
  }
  if (url.includes("twitch.tv")) {
    const user = handle || url.split("twitch.tv/")[1]?.split(/[/?#]/)[0] || "";
    return user
      ? `https://unavatar.io/twitch/${encodeURIComponent(user)}`
      : `https://unavatar.io/${encodeURIComponent(it.href)}`;
  }
  if (url.includes("twitter.com") || url.includes("x.com")) {
    const user =
      handle ||
      url.replace("https://", "").replace("http://", "").replace("x.com/", "twitter.com/")
        .split("twitter.com/")[1]?.split(/[/?#]/)[0] || "";
    return user
      ? `https://unavatar.io/twitter/${encodeURIComponent(user)}`
      : `https://unavatar.io/${encodeURIComponent(it.href)}`;
  }
  if (it.href?.startsWith("http")) {
    return `https://unavatar.io/${encodeURIComponent(it.href)}`;
  }
  return "/logo.png";
}

export default function ChannelSlider({
  items,
  title = "Channels & collaborations",
}: {
  items: ChannelItem[];
  title?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const withThumbs = useMemo(
    () => items.map((it) => ({ ...it, _thumb: buildAvatarURL(it) })),
    [items]
  );

  const pages = Math.ceil(withThumbs.length / 3);
  const canPrev = index > 0;
  const canNext = index < pages - 1;

  const go = (dir: -1 | 1) => {
    const next = Math.min(Math.max(index + dir, 0), pages - 1);
    setIndex(next);
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink">{title}</h2>
          <div className="hidden sm:flex items-center gap-2">
            <button
              aria-label="Previous"
              onClick={() => go(-1)}
              disabled={!canPrev}
              className={[
                "h-8 w-8 grid place-items-center rounded-full border border-border text-ink/80",
                canPrev ? "hover:bg-black/5" : "opacity-40 cursor-not-allowed",
              ].join(" ")}
            >
              ‹
            </button>
            <button
              aria-label="Next"
              onClick={() => go(1)}
              disabled={!canNext}
              className={[
                "h-8 w-8 grid place-items-center rounded-full border border-border text-ink/80",
                canNext ? "hover:bg-black/5" : "opacity-40 cursor-not-allowed",
              ].join(" ")}
            >
              ›
            </button>
          </div>
        </div>

        <div ref={trackRef} className="snap-x snap-mandatory overflow-x-auto scroll-smooth no-scrollbar">
          <div className="grid grid-flow-col auto-cols-[85%] sm:auto-cols-[50%] md:auto-cols-[33.333%] gap-4 sm:gap-5 md:gap-6">
            {withThumbs.map((it, i) => (
              <article
                key={it.href + i}
                className="snap-start rounded-2xl border border-border/80 bg-white shadow-sm overflow-hidden"
              >
                <Link href={it.href} target="_blank" className="block">
                  {/* Top avatar area */}
                  <div className="h-40 sm:h-44 grid place-items-center bg-black/[0.03]">
                    <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full ring-1 ring-black/10 overflow-hidden bg-white">
                      <Image
                        src={it._thumb!}
                        alt={it.title}
                        fill
                        unoptimized
                        loading="lazy"
                        className="object-cover"
                        onError={(e) => {
                          // @ts-ignore
                          e.currentTarget.src = "/logo.png";
                        }}
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="p-4">
                    <h3 className="font-medium text-ink">{it.title}</h3>
                    {it.handle && <p className="text-sm text-ink/60">{it.handle}</p>}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-4 flex items-center gap-2 justify-end sm:justify-start">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => {
                setIndex(i);
                const el = trackRef.current;
                if (!el) return;
                el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
              }}
              className={[
                "size-3 rounded-full border border-border",
                i === index ? "bg-ink" : "bg-transparent",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
