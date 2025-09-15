// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import ChannelSlider from "@/components/ChannelSlider";
import BrandsMarquee from "@/components/BrandsMarquee";

export default function HomePage() {
  // ✅ point to your local logos (public/logos/*.jpg)
  const channels = [
    {
      title: "Hey its mr J",
      href: "https://youtube.com/@heyitsmr.j",
      handle: "@heyitsmr.j",
      img: "/logos/heyitsmrj.jpg",
    },
    {
      title: "Watch Dogs Bodycam",
      href: "https://youtube.com/@watchdogbwc",
      handle: "@watchdogbwc",
      img: "/logos/watchdogs.jpg",
    },
    {
      title: "Tilt",
      href: "https://youtube.com/@tilt223",
      handle: "@tilt223",
      img: "/logos/tilt.jpg",
    },
  ];

  const brands = [
    "Gemthree",
    "Rubrics",
    "Tilt",
    "Watch Dogs bodycam",
    "Hey its Mr J",
    "Techno World",
    "Kama Love",
  ];

  const services = [
    { k: "Editing", v: "Trailers, campaigns, shorts" },
    { k: "VFX / CGI", v: "Design, simulation, compositing" },
    { k: "Web", v: "Next.js sites, interactions" },
    { k: "Brand", v: "Identity, systems, toolkits" },
  ];

  return (
    <>
      {/* ========================= HERO ========================= */}
      <section className="relative bg-ink text-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink to-ink/95" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 pt-16 sm:pt-20 md:pt-36 pb-12 sm:pb-14 md:pb-28">
          <div className="md:grid md:grid-cols-12 md:gap-10 md:items-center">
            {/* Copy */}
            <div className="md:col-span-7">
              <h1
                className="text-[28px] leading-[1.12] font-extrabold tracking-tight
                           sm:text-[34px] sm:leading-[1.1]
                           md:text-6xl md:leading-[1.07]
                           text-center md:text-left"
              >
                Stories with edge. Strategy without noise.
              </h1>

              <p
                className="mt-4 sm:mt-5 text-[15.5px] sm:text-base md:text-xl text-white/90 max-w-2xl
                           text-center md:text-left mx-auto md:mx-0"
              >
                Editing, VFX/CGI, web, and brand systems—built to move audiences and move the metric.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
                <Link
                  href="/work"
                  className="px-4 py-2.5 text-sm rounded-full bg-bg text-ink hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-bg"
                >
                  View work
                </Link>
                <Link
                  href="/services"
                  className="px-4 py-2.5 text-sm rounded-full border border-bg text-bg hover:bg-bg hover:text-ink transition focus:outline-none focus-visible:ring-2 focus-visible:ring-bg"
                >
                  Services
                </Link>
              </div>

              {/* Mobile logo badge */}
              <div className="mt-8 flex justify-center md:hidden">
                <div
                  className="inline-flex items-center justify-center w-45 h-45 rounded-full
                             bg-white/10 ring-1 ring-white/20
                             transition-all duration-300 ease-out motion-safe:hover:scale-[1.06] motion-safe:hover:ring-white/40"
                  aria-label="Movira Studio logo"
                >
                  <Image
                    src="/logo.png?v=9"
                    alt="Movira Studio"
                    width={250}
                    height={250}
                    priority
                    className="object-contain pointer-events-none"
                  />
                </div>
              </div>

              {/* --- Services inside hero (MOBILE ONLY) --- */}
              <div className="md:hidden mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {services.map((it) => (
                  <div
                    key={it.k}
                    className="rounded-xl p-4 sm:p-5 border border-white/15 bg-white/5 text-white
                               hover:bg-white/10 hover:-translate-y-0.5 transition-all"
                  >
                    <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-white/80 mb-1.5 sm:mb-2">
                      {it.k}
                    </div>
                    <div className="text-[15px] sm:text-[15.5px] font-medium">{it.v}</div>
                  </div>
                ))}
              </div>
              {/* --- /mobile services --- */}
            </div>

            {/* Desktop logo badge (unchanged) */}
            <div className="hidden md:block md:col-span-5 md:justify-self-end">
              <div
                className="group inline-flex items-center justify-center
                           w-65 h-65 rounded-full bg-white/10 ring-1 ring-white/20
                           transition-all duration-300 ease-out
                           motion-safe:hover:scale-[1.06] motion-safe:hover:ring-white/40 motion-safe:hover:bg-white/15 motion-safe:hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
                aria-label="Movira Studio logo"
              >
                <Image
                  src="/logo.png?v=9"
                  alt="Movira Studio"
                  width={300}
                  height={300}
                  priority
                  className="object-contain pointer-events-none transition-transform duration-300 ease-out motion-safe:group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES (DESKTOP ONLY) ===================== */}
      <section className="bg-bg hidden md:block">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 py-10 sm:py-12 md:py-16">
          <div className="mx-auto w-full max-w-xl md:max-w-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {services.map((it) => (
              <div
                key={it.k}
                className="rounded-xl p-4 sm:p-5 border border-border/70 bg-ink/5 hover:bg-ink/10 hover:-translate-y-0.5 transition-all"
              >
                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-ink/80 mb-1.5 sm:mb-2">
                  {it.k}
                </div>
                <div className="text-[15px] sm:text-[15.5px] font-medium text-ink">{it.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= CHANNELS / COLLABS SLIDER ============= */}
      <ChannelSlider items={channels} title="Channels & collaborations" />

      {/* ======================= MOVING CLIENTS STRIP ======================= */}
      <BrandsMarquee items={brands} speed={26} />

      {/* ======================== TESTIMONIAL ======================== */}
      <section className="bg-bg">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 py-12 sm:py-16 md:py-20 border-y border-border/80">
          <figure className="mx-auto max-w-2xl md:max-w-3xl">
            <blockquote className="text-[18px] sm:text-[20px] md:text-[28px] leading-snug tracking-tight text-ink text-center md:text-left">
              “They cut through the noise and delivered a system that actually moves the metric.”
            </blockquote>
            <figcaption className="mt-3 sm:mt-4 text-sm text-ink/75 text-center md:text-left">
              — Creative Director, Global Brand
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ========================= CTA ========================= */}
      <section className="bg-ink text-bg">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 py-10 sm:py-14 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-center md:text-left">
            Have a brief? Let’s build the simple version that wins.
          </h3>
          <div className="flex flex-col xs:flex-row gap-3 justify-center md:justify-start">
            <Link
              href="/contact"
              className="px-4 py-2.5 text-sm rounded-full bg-bg text-ink hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-bg text-center"
            >
              Contact
            </Link>
            <Link
              href="/services"
              className="px-4 py-2.5 text-sm rounded-full border border-bg text-bg hover:bg-bg hover:text-ink transition focus:outline-none focus-visible:ring-2 focus-visible:ring-bg text-center"
            >
              Capabilities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
