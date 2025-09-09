'use client'
import { useEffect, useRef } from 'react'

/**
 * Wrap any block with <ScrollReveal> ... </ScrollReveal>
 * It will add the 'in' class when the element enters the viewport.
 */
export default function ScrollReveal({ children, className = '' }: { children: React.ReactNode; className?: string }){
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if(!el) return
    el.classList.add('reveal')
    const io = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting){
        el.classList.add('in')
        io.disconnect()
      }
    }, { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return <div ref={ref} className={className}>{children}</div>
}
