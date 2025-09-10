// app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="bg-bg text-ink">
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">About</h1>
        <p className="mt-3 text-ink/75 max-w-2xl">
          Movira is a small studio focused on clear stories and sharp execution. We keep teams lean,
          decisions quick, and outputs measurable.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="border border-border/80 rounded-2xl p-6">
            <h2 className="text-xl font-medium mb-3">Principles</h2>
            <ul className="list-disc pl-5 space-y-2 text-ink/90">
              <li>Simplicity wins—cut to the signal.</li>
              <li>Strategy guides craft; craft drives results.</li>
              <li>Fast iteration beats big reveals.</li>
              <li>Deliverables that teams can actually use.</li>
            </ul>
          </div>

          <div className="border border-border/80 rounded-2xl p-6">
            <h2 className="text-xl font-medium mb-3">Studios & Location</h2>
            <p className="text-ink/90">
              Based in Rawalpindi, Pakistan. Remote-first; global clients. We partner with
              specialists across edit, CGI, code, and sound as needed.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
