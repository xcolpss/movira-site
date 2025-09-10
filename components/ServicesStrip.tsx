export default function ServicesStrip() {
  const items = [
    { k: "Editing", v: "Trailers, campaigns, shorts" },
    { k: "VFX / CGI", v: "Design, simulation, compositing" },
    { k: "Web", v: "Next.js sites, interactions" },
    { k: "Brand", v: "Identity, systems, toolkits" },
  ];

  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {items.map((it) => (
            <div
              key={it.k}
              className="border border-border rounded-xl p-4 md:p-5 hover:bg-ink/2 transition"
            >
              <div className="text-sm uppercase tracking-[0.18em] text-ink/70">
                {it.k}
              </div>
              <div className="mt-1 text-base text-ink">{it.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
