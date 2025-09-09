import courses from '@/data/courses.json'

export default function Academy(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="h1">Academy</h1>
      <p className="sub mt-2">Free now, premium later — practical lessons from real projects.</p>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {courses.map(c => (
          <div className="card p-6" key={c.title}>
            <div className="text-xs uppercase tracking-wide text-neutral-500">{c.level}</div>
            <h3 className="text-lg font-semibold mt-1">{c.title}</h3>
            <p className="text-sm text-neutral-700 mt-2">{c.blurb}</p>
            <a className="btn btn-red mt-4 inline-block">Start</a>
          </div>
        ))}
      </div>
    </div>
  )
}
