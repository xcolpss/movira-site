'use client';

import { useEffect, useRef } from 'react';
import TimecodeHUD from '@/components/TimecodeHUD';
import HeroSlider from '@/components/HeroSlider';

const TOOLS = ['Premiere Pro','After Effects','DaVinci','Blender','Unreal','Photoshop'];

export default function ReelHero() {
  const ref = useRef<HTMLElement>(null);

  // parallax arcs + mouse-follow light
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty('--mx', `${x}%`);
      el.style.setProperty('--my', `${y}%`);
      el.style.setProperty('--parx', `${(x - 50) / 12}px`);
      el.style.setProperty('--pary', `${(y - 50) / 12}px`);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section ref={ref} className="hero hero-pro">
      {/* Ambient layers */}
      <div className="grain" aria-hidden />
      <div className="gold-arc parallax-arc a1" aria-hidden />
      <div className="gold-arc parallax-arc a2" aria-hidden />
      <div className="mouse-spot" aria-hidden />

      <div className="max-w-7xl mx-auto px-6 frame flex flex-col items-center text-center">
        {/* Logo */}
        <div className="logo-badge lg" aria-hidden="true">
          <div className="logo-aura" />
          <img src="/logo-movira.png" alt="Movira Studios" className="logo-img" />
        </div>

        {/* Headline */}
        <h1 className="h1 hero-title">
          Make it cinematic. <span className="hero-title-gold">Make it convert.</span>
        </h1>

        {/* Subline */}
        <p className="mt-4 max-w-2xl text-white/80">
          Agency • Academy • Originals — pop-culture filmmaking energy with a premium studio finish.
        </p>

        {/* CTAs */}
        <div className="mt-6 flex gap-3">
          <a className="cta" href="#services">See Services</a>
          <a className="cta" href="#work">Watch the Work</a>
        </div>

        {/* Slider */}
        <div className="mt-14 w-full max-w-2xl relative z-10">
          <HeroSlider markers={80} label="1/50" sub="SHUTTER" />
        </div>

        {/* Marquee — pushed further down */}
        <div className="marquee mt-12 w-full max-w-3xl opacity-70 pointer-events-none" aria-hidden="true">
          <div className="marquee-track">
            {[...TOOLS, ...TOOLS].map((t, i) => (<span key={i}>{t}</span>))}
          </div>
        </div>

        {/* REC HUD — also a bit lower */}
        <div className="hud-wrap lower"><TimecodeHUD fps={30} /></div>
      </div>

      <img className="camera" src="/vectors/camera.svg" alt="" aria-hidden />
      <a className="scroll-cue" href="#services">Scroll</a>
    </section>
  );
}
