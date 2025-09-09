'use client';

import { useEffect, useRef, useState } from 'react';

export default function TimecodeHUD({ fps = 30 }: { fps?: number }) {
  const [frames, setFrames] = useState(0);
  const raf = useRef<number>();

  useEffect(() => {
    let last = performance.now();
    const step = (now: number) => {
      if (now - last >= 1000 / fps) {
        setFrames(f => f + 1);
        last = now;
      }
      raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => raf.current && cancelAnimationFrame(raf.current);
  }, [fps]);

  const totalSeconds = Math.floor(frames / fps);
  const ss = String(totalSeconds % 60).padStart(2, '0');
  const mm = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const ff = String(frames % fps).padStart(2, '0');

  return (
    <div className="tc">
      <span className="rec-dot" />
      <span>REC</span>
      <span className="tc-sep">•</span>
      <span className="digits">{mm}:{ss}:{ff}</span>
    </div>
  );
}
