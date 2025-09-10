'use client';

import { useEffect, useRef } from 'react';
import TimecodeHUD from '@/components/TimecodeHUD';
import HeroSlider from '@/components/HeroSlider';

export default function ReelHero(){
  const ref = useRef<HTMLElement>(null);

  // soft mouse spotlight only
  useEffect(() => {
    const el = ref.current;
    if(!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty('--mx', `${x}%`);
      el.style.setProperty('--my', `${y}%`);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="hero" ref={ref}>
      <div className="grain" aria-hidden />
      <div className="max-w-7xl mx-auto px-6 frame flex flex-col items-center text-center">

        {/* Logo front and center */}
        <div className="logo-badge mb-6">
          <img src="/logo-movira.png" alt="Movira Studio" className="logo-img" />
        </div>

        <h1 className="h1">Stories with edge. Strategy without noise.</h1>
        <p className="mt-4 max-w-2xl lead">
          A studio for editing, VFX/CGI, web, and brand systems—built to move audiences and move the metric.
        </p>

        <div className="mt-8 flex gap-3">
          <a className="btn primary" href="#work">VIEW WORK</a>
          <a className="btn ghost" href="#services">SERVICES</a>
        </div>

        <div className="mt-16 w-full max-w-2xl">
          <HeroSlider markers={80} label="1/50" sub="SHUTTER" />
        </div>

        <div className="hud-wrap">
          <TimecodeHUD fps={30}/>
        </div>
      </div>

      <a className="scroll-cue" href="#services">Scroll</a>
    </section>
  );
}
