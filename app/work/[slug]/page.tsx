import projects from '@/data/projects.json'
import { notFound } from 'next/navigation'

export default function Case({ params }:{ params:{ slug:string } }){
  const proj = (projects as any[]).find(p => p.slug === params.slug)
  if(!proj) return notFound()
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="h1">{proj.title}</h1>
      <p className="sub mt-2">{proj.logline}</p>
      <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border mt-6">
        {proj.videoUrl ? (
          <iframe className="w-full h-full" src={proj.videoUrl.replace('watch?v=','embed/')} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen></iframe>
        ) : <img src={proj.poster} className="w-full h-full object-cover" alt={proj.title}/>}
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <section>
          <h2 className="h2">Challenge</h2>
          <p className="sub mt-1">{proj.challenge}</p>
        </section>
        <section>
          <h2 className="h2">Tools</h2>
          <ul className="list-disc pl-5 text-sm text-neutral-700">{proj.tools?.map((t:string,i:number)=>(<li key={i}>{t}</li>))}</ul>
        </section>
      </div>
    </article>
  )
}
