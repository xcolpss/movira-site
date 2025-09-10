// app/work/page.tsx
import Link from "next/link";

export default function WorkPage() {
  const projects = [
    { title: "Kinetic Launch Film", tag: "Edit • VFX/CGI" },
    { title: "Arcadia Rebrand Toolkit", tag: "Brand • Motion" },
    { title: "Sable UX Microsite", tag: "Web • Next.js" },
    { title: "Stills / Key Art", tag: "CGI • Retouch" },
    { title: "Campaign Social Cutdowns", tag: "Edit" },
    { title: "Show Open / Toolkits", tag: "Motion" },
  ];

  return (
    <main className="bg-bg text-ink">
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Work</h1>
        <p className="mt-3 text-ink/75 max-w-2xl">
          A selection of recent projects across edit, VFX/CGI, web, and brand systems.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.title}
              href="#"
              className="group block border border-border/80 rounded-2xl overflow-hidden hover:shadow-sm"
            >
              <div className="aspect-[16/9] bg-ink/10 group-hover:bg-ink/15 transition" />
              <div className="p-5">
                <div className="text-lg md:text-xl font-medium group-hover:opacity-85">{p.title}</div>
                <div className="text-sm text-ink/75">{p.tag}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
