'use client'
import { useEffect, useState } from 'react'

/** Kinetic title where the gold word cycles through options */
export default function KineticTitle() {
  const words = ["All Impact.", "Director’s Cut.", "No Filler.", "Cinematic AF."]
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % words.length), 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <h1 className="h1 hero-title">
      Black &amp; White.&nbsp;
      <span className="hero-title-gold">{words[i]}</span>
    </h1>
  )
}
