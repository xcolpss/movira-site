'use client'
import { useState } from 'react'

export default function Contact(){
  const [ok,setOk] = useState<boolean|null>(null)
  async function onSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault(); setOk(true)
  }
  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="h1">Contact</h1>
      <form onSubmit={onSubmit} className="card p-6 mt-6 grid gap-4">
        <input className="rounded-xl border border-border px-3 py-2" placeholder="Name" required/>
        <input className="rounded-xl border border-border px-3 py-2" placeholder="Email" type="email" required/>
        <select className="rounded-xl border border-border px-3 py-2">
          <option>Video Editing</option><option>VFX / CGI</option><option>Web</option><option>Branding</option>
        </select>
        <textarea className="rounded-xl border border-border px-3 py-2" rows={6} placeholder="Tell us about the project"></textarea>
        <button className="btn btn-gold">Send</button>
        {ok===true && <p className="text-green-600">Thanks — we’ll reply soon.</p>}
      </form>
    </div>
  )
}
