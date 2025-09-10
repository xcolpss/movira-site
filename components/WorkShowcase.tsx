import Link from "next/link";

const CARDS = [
  { title: "Kinetic Launch Film", tag: "Edit • VFX/CGI", href: "/work/kinetic" },
  { title: "Arcadia Rebrand Toolkit", tag: "Brand • Motion", href: "/work/arcadia" },
  { title: "Sable UX Microsite", tag: "Web • Next.js", href: "/work/sable" },
  { title: "Stills / Key Art", tag: "CGI • Retouch", href: "/work/keyart" },
];

export default function WorkShowcase() {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-6 md:mb-8 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Selected Work</h2>
          <Link href="/work" className="text-sm underline underline-offset-4 hover:opacity-80">
            View all →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {CARDS.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group block border border-border rounded-2xl overflow-hidden"
            >
              <div className="aspect-[16/9] bg-ink/5 group-hover:bg-ink/10 transition" />
              <div className="p-4 md:p-5">
                <div className="text-lg md:text-xl font-medium group-hover:opacity-80">
                  {c.title}
                </div>
                <div className="text-sm text-ink/70">{c.tag}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
