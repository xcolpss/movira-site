import services from '@/data/services.json'

export default function Services(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="h1">Agency Services</h1>
      <p className="sub mt-2">White-first layouts. Clear offers. Fast delivery.</p>
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        {services.map(s => (
          <div className="card p-6" key={s.title}>
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <ul className="mt-2 text-sm text-neutral-700 list-disc pl-5">{s.bullets.map((b:string,i:number)=>(<li key={i}>{b}</li>))}</ul>
            <a className="btn btn-gold mt-5 inline-block" href="/contact">Get Quote</a>
          </div>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="h2">Productized Plans</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {['Starter','Growth','Pro'].map((name)=> (
            <div className="card p-6" key={name}>
              <h3 className="text-lg font-semibold">{name}</h3>
              <ul className="mt-2 text-sm text-neutral-700 list-disc pl-5">
                <li>Shorts bundle</li>
                <li>Long-form add-ons</li>
                <li>Thumbnails / CGI inserts</li>
              </ul>
              <a className="btn btn-gold mt-5 inline-block" href="/contact">Choose {name}</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
