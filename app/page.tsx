// app/page.tsx
import dynamic from "next/dynamic";
import ScrollReveal from "@/components/ScrollReveal";
import ReelHero from "@/components/ReelHero";

// JSON types (keeps TS happy)
type Service = {
  title: string;
  bullets: string[];
};

type Project = {
  slug: string;
  title: string;
  logline: string;
  poster: string;
};

// Data
import services from "@/data/services.json";
import projects from "@/data/projects.json";

// Load the slider only on the client (prevents SSR/hydration issues)
const WorkCarousel = dynamic(() => import("@/components/WorkCarousel"), {
  ssr: false,
  // Optional mini fallback while the client bundle hydrates
  loading: () => (
    <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--canvas2)] p-8 text-center text-sm text-white/60">
      Loading showcase…
    </div>
  ),
});

export default function Home() {
  // Cast JSON to typed arrays
  const svc = services as unknown as Service[];
  const reels = projects as unknown as Project[];

  return (
    <div>
      {/* ===== HERO ===== */}
      <ReelHero />

      {/* ===== SERVICES ===== */}
      <section id="services" className="section section-canvas">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="h2">What We Do</h2>
            <p className="mt-2 text-white/70">
              Editing, VFX/CGI, Web &amp; Branding — productized for speed and results.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5 mt-7">
            {svc.slice(0, 3).map((s) => (
              <ScrollReveal key={s.title}>
                <div className="card p-6">
                  <h3 className="h3">{s.title}</h3>
                  <ul className="mt-2 text-[15px] text-white/80 list-disc pl-5">
                    {s.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <a href="/contact" className="cta mt-5 inline-block">
                    Book a Call
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED WORK (Slider) ===== */}
      <section id="work" className="section section-canvas2">
        <div className="max-w-7xl mx-auto px-6">
          <div>
            <h2 className="h2">Featured Work</h2>
            <p className="mt-2 text-white/70">
              Cinematic case studies — each project like a film poster.
            </p>
          </div>

          <div className="mt-6">
            <WorkCarousel projects={reels} />
          </div>

          <div className="flex justify-center">
            <a href="/work" className="cta mt-8">
              Browse All Projects
            </a>
          </div>
        </div>
      </section>

      {/* ===== ORIGINALS ===== */}
      <section className="section section-canvas">
        <div className="max-w-7xl mx-auto px-6">
          <div className="card-alt p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src="/banner-original.jpg"
                className="h-36 w-auto rounded-xl"
                alt="Show banner"
              />
              <div className="flex-1">
                <h3 className="h3" style={{ color: "var(--gold)" }}>
                  MOVIRA // REACTS
                </h3>
                <p className="mt-2 text-white/80">
                  VFX breakdowns, BTS, challenges — our own series. Add playlist/embed later.
                </p>
              </div>
              <a href="/originals" className="cta">
                Watch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact-short" className="section section-canvas2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="card p-8 flex flex-col md:flex-row items-center justify-between">
            <h3 className="h3">Ready for a cinematic system that performs?</h3>
            <a href="/contact" className="cta mt-4 md:mt-0">
              Book a 15-min Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
