import Link from "next/link";

export default function CTABand() {
  return (
    <section className="bg-ink text-bg">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
          Have a brief? Let’s build the simple version that wins.
        </h3>
        <div className="flex gap-3">
          <Link
            href="/contact"
            className="px-4 py-2 text-sm rounded-full bg-bg text-ink hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-bg"
          >
            Contact
          </Link>
          <Link
            href="/services"
            className="px-4 py-2 text-sm rounded-full border border-bg text-bg hover:bg-bg hover:text-ink transition focus:outline-none focus-visible:ring-2 focus-visible:ring-bg"
          >
            Capabilities
          </Link>
        </div>
      </div>
    </section>
  );
}
