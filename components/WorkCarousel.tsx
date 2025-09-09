'use client';

import { useEffect, useRef } from 'react';

type Project = {
  slug: string;
  title: string;
  logline: string;
  poster: string;
};

export default function WorkCarousel({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollByOne = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const child = el.querySelector<HTMLElement>('.wc-card');
    const gap = 16;
    const step = (child?.offsetWidth || 320) + gap;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  // drag-to-scroll for desktop
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let isDown = false, startX = 0, startLeft = 0;
    const down = (e: PointerEvent) => {
      isDown = true;
      startX = e.clientX;
      startLeft = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
    };
    const move = (e: PointerEvent) => { if (isDown) el.scrollLeft = startLeft - (e.clientX - startX); };
    const up = (e: PointerEvent) => { isDown = false; try { el.releasePointerCapture(e.pointerId); } catch {} };
    el.addEventListener('pointerdown', down);
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerup', up);
    el.addEventListener('pointerleave', up);
    return () => {
      el.removeEventListener('pointerdown', down);
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerup', up);
      el.removeEventListener('pointerleave', up);
    };
  }, []);

  return (
    <div className="wc">
      <div ref={trackRef} className="wc-track">
        {projects.map((p, i) => {
          // Make Unsplash Source more cache/bot friendly & unique per card
          const poster =
            p.poster.includes('source.unsplash.com')
              ? `${p.poster}${p.poster.includes('?') ? '&' : '?'}sig=${i}&orientation=portrait`
              : p.poster;

        return (
          <a key={p.slug} href={`/work/${p.slug}`} className="wc-card">
            <div className="wc-artwrap">
              <img
                className="wc-img"
                src={poster}
                alt={p.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // local fallback if the CDN blocks the request
                  (e.currentTarget as HTMLImageElement).src = '/banner-original.jpg';
                }}
              />
            </div>
            <div className="wc-meta">
              <div className="wc-title">{p.title}</div>
              <div className="wc-sub">{p.logline}</div>
            </div>
          </a>
        );
        })}
      </div>

      {projects.length > 1 && (
        <>
          <button className="wc-arrow left" aria-label="Previous" onClick={() => scrollByOne(-1)}>‹</button>
          <button className="wc-arrow right" aria-label="Next" onClick={() => scrollByOne(1)}>›</button>
        </>
      )}
    </div>
  );
}
