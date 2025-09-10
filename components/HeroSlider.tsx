'use client';

import { useEffect, useMemo, useRef, useState } from "react";

export default function HeroSlider({
  markers = 80,
  label = "1/50",
  sub = "SHUTTER",
}: { markers?: number; label?: string; sub?: string }) {
  const [x, setX] = useState(0.4); // 0..1
  const railRef = useRef<HTMLDivElement | null>(null);
  const [left, setLeft] = useState(0);

  const ticks = useMemo(() => Array.from({length: markers}, (_,i)=> i), [markers]);

  useEffect(() => {
    const el = railRef.current;
    if(!el) return;
    const r = el.getBoundingClientRect();
    setLeft(12 + x * (r.width - 24)); // account for padding
  }, [x]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    let dragging = false;

    const getX = (clientX:number) => {
      const r = rail.getBoundingClientRect();
      const nx = (clientX - r.left - 12) / (r.width - 24);
      return Math.min(1, Math.max(0, nx));
    };

    const onDown = (e:MouseEvent) => { dragging = true; setX(getX(e.clientX)); };
    const onMove = (e:MouseEvent) => { if(dragging) setX(getX(e.clientX)); };
    const onUp = () => { dragging = false; };

    rail.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      rail.removeEventListener('mousedown', onDown);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  return (
    <div className="hero-slider">
      <div className="hero-slider-row" ref={railRef}>
        {ticks.map((i) => (
          <div key={i} className={`hero-tick ${i % 10 === 0 ? 'major' : ''}`}/>
        ))}
        <div className="hero-knob" style={{ left }} />
      </div>
      <div className="hero-label">{label}</div>
      <div className="hero-sub">{sub}</div>
    </div>
  );
}
