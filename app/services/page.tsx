// app/services/page.tsx
export default function ServicesPage() {
  const capabilities = [
    { k: "Editing", v: "Trailers, campaigns, shorts, case studies" },
    { k: "VFX / CGI", v: "Design, simulation, lighting, compositing" },
    { k: "Web", v: "Next.js sites, performant UX, interactions" },
    { k: "Brand", v: "Identity, systems, toolkits, motion guidelines" },
  ];

  const process = [
    { k: "01. Discover", v: "Brief, goals, constraints, success metrics" },
    { k: "02. Direction", v: "Mood, references, boards, creative route" },
    { k: "03. Build", v: "Edit/VFX/Code; weekly check-ins; versions" },
    { k: "04. Deliver", v: "Master files, toolkits, handover, docs" },
  ];

  return (
    <main className="bg-bg text-ink">
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Services</h1>
        <p className="mt-3 text-ink/75 max-w-2xl">
          Practical capabilities aligned to strategy—kept simple, fast, and measurable.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-border/80 rounded-2xl p-6">
            <h2 className="text-xl font-medium mb-4">Capabilities</h2>
            <ul className="space-y-3">
              {capabilities.map((c) => (
                <li key={c.k} className="flex justify-between gap-6">
                  <span className="uppercase tracking-[0.16em] text-[12px] text-ink/80">{c.k}</span>
                  <span className="text-ink">{c.v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-border/80 rounded-2xl p-6">
            <h2 className="text-xl font-medium mb-4">Process</h2>
            <ul className="space-y-3">
              {process.map((c) => (
                <li key={c.k} className="flex justify-between gap-6">
                  <span className="uppercase tracking-[0.16em] text-[12px] text-ink/80">{c.k}</span>
                  <span className="text-ink">{c.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="border border-border/80 rounded-2xl p-6">
          <h2 className="text-xl font-medium mb-2">Typical Deliverables</h2>
          <p className="text-ink/80">
            Masters (ProRes/H.264), project files, web bundles, brand files (AI/PSD/FIG), usage docs and toolkits.
          </p>
        </div>
      </section>
    </main>
  );
}
