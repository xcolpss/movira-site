import Link from 'next/link'
import projects from '@/data/projects.json'

export default function Work(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="h1">Work</h1>
      <p className="sub mt-2">Case studies styled like movie posters.</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {projects.map(p => (
          <Link key={p.slug} href={`/work/${p.slug}`} className="rounded-2xl overflow-hidden border border-border group">
            <img src={p.poster} alt={p.title} className="w-full h-64 object-cover"/>
            <div className="p-3">
              <div className="font-semibold">{p.title}</div>
              <div className="text-sm text-neutral-600">{p.logline}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
