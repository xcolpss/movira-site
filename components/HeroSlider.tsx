'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  markers?: number;      // number of tick lines
  label?: string;        // initial display value
  sub?: string;          // e.g. SHUTTER
};

// shutter labels we snap to
const SHUTTER_STOPS = [
  '1/8','1/10','1/15','1/20','1/30','1/40','1/50','1/60','1/80',
  '1/100','1/125','1/160','1/200'
];

export default function HeroSlider({ markers = 80, label = '1/50', sub = 'SHUTTER' }: Props) {
  const railRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(0.5);                // 0..1
  const [readout, setReadout] = useState(label);
  const [hot, setHot] = useState<number | null>(null); // tick under cursor

  const pctToLabel = (p: number) => {
    const idx = Math.min(
      SHUTTER_STOPS.length - 1,
      Math.max(0, Math.round(p * (SHUTTER_STOPS.length - 1)))
    );
    return SHUTTER_STOPS[idx];
  };

  useEffect(() => { setReadout(pctToLabel(pct)); }, [pct]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let dragging = false;

    const toPct = (clientX: number) => {
      const r = rail.getBoundingClientRect();
      return Math.min(1, Math.max(0, (clientX - r.left) / r.width));
    };

    const nearestTick = (clientX: number) => {
      const r = rail.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (clientX - r.left) / r.width));
      return Math.round(p * (markers - 1));
    };

    // hover highlight
    const onMove = (e: MouseEvent) => {
      setHot(nearestTick(e.clientX));
      if (dragging) setPct(toPct(e.clientX));
    };
    const onLeave = () => setHot(null);

    // drag
    const down = (e: MouseEvent) => { dragging = true; setPct(toPct(e.clientX)); };
    const up   = () => { dragging = false; };

    rail.addEventListener('mousemove', onMove);
    rail.addEventListener('mouseleave', onLeave);
    rail.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    window.addEventListener('mousemove', onMove);

    // touch
    const tMove = (e: TouchEvent) => { setHot(nearestTick(e.touches[0].clientX)); if (dragging) setPct(toPct(e.touches[0].clientX)); };
    const tDown = (e: TouchEvent) => { dragging = true; setPct(toPct(e.touches[0].clientX)); setHot(nearestTick(e.touches[0].clientX)); };
    const tUp   = () => { dragging = false; setHot(null); };

    rail.addEventListener('touchstart', tDown, { passive: true });
    window.addEventListener('touchmove', tMove, { passive: true });
    window.addEventListener('touchend', tUp);

    return () => {
      rail.removeEventListener('mousemove', onMove);
      rail.removeEventListener('mouseleave', onLeave);
      rail.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('mousemove', onMove);
      rail.removeEventListener('touchstart', tDown);
      window.removeEventListener('touchmove', tMove);
      window.removeEventListener('touchend', tUp);
    };
  }, [markers]);

  const ticks = Array.from({ length: markers }, (_, i) => {
    const major = i % 10 === 0;
    const active = hot === i;
    return (
      <div
        key={i}
        className={`hero-tick${major ? ' major' : ''}${active ? ' active' : ''}`}
      />
    );
  });

  return (
    <div className="hero-slider relative">
      {/* Fixed value + sublabel on the left */}
      <div className="hero-slider-label-fixed pill">{readout}</div>
      <div className="hero-slider-subpill-fixed">{sub}</div>

      {/* Rail */}
      <div ref={railRef} className="hero-slider-row select-none cursor-pointer">
        {ticks}
        <div
          className="hero-tick-indicator"
          style={{ left: `${pct * 100}%`, transform: 'translateX(-50%)' }}
          aria-hidden
        />
      </div>
    </div>
  );
}
