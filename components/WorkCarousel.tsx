'use client';

import { useEffect, useRef, useState } from "react";

type Project = { slug:string; title:string; logline:string; poster:string };

export default function WorkCarousel({ projects }:{ projects: Project[] }){
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if(!el) return;
    const onScroll = () => {
      const slide = el.querySelector<HTMLElement>('.slide')?.offsetWidth ?? 320;
      const idx = Math.round(el.scrollLeft / (slide + 14));
      setPage(idx);
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const go = (dir:number) => {
    const el = trackRef.current;
    if(!el) return;
    const slideW = el.querySelector<HTMLElement>('.slide')?.offsetWidth ?? 320;
    el.scrollBy({ left: dir * (slideW + 14), behavior:'smooth' });
  };

  return (
    <div className="carousel">
      <button className="arrow-btn left" onClick={()=>go(-1)} aria-label="prev">‹</button>
      <div className="track" ref={trackRef}>
        {projects.map(p => (
          <a key={p.slug} href={`/work/${p.slug}`} className="slide poster-min">
            <div className="artwrap">
              <img src={p.poster} alt={p.title}/>
              <div className="shade" />
            </div>
            <div className="meta">
              <div className="title">{p.title}</div>
              <div className="text-sm text-white/80">{p.logline}</div>
            </div>
          </a>
        ))}
      </div>
      <button className="arrow-btn right" onClick={()=>go(1)} aria-label="next">›</button>
    </div>
  );
}
