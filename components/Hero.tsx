import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-ink text-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink to-ink/95" />
      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 md:pt-36 md:pb-28">
        {/* Logo */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-bg/5 ring-1 ring-bg/10">
            <Image
              src="/vectors/logo-movira.svg"
              alt="Movira Studio"
              width={72}
              height={72}
              priority
              className="opacity-95"
            />
          </div>
        </div>

        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.07] tracking-tight">
            Stories with edge. Strategy without noise.
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-bg/80 max-w-2xl">
            Editing, VFX/CGI, web, and brand systems—built to move audiences and move the metric.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="px-4 py-2 text-sm rounded-full bg-bg text-ink hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-bg"
            >
              View work
            </Link>
            <Link
              href="/services"
              className="px-4 py-2 text-sm rounded-full border border-bg text-bg hover:bg-bg hover:text-ink transition focus:outline-none focus-visible:ring-2 focus-visible:ring-bg"
            >
              Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
