// app/contact/thank-you/page.tsx
export const metadata = { title: "Thanks — Movira" };

const WHATSAPP = "923171511108";

export default function ThankYou() {
  return (
    <main className="bg-white text-ink dark:bg-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-xl rounded-2xl border border-border/80 bg-white shadow-sm p-10 text-center">
          {/* checkmark */}
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-emerald-600">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h1 className="text-3xl font-bold tracking-tight">Thanks — we got your brief.</h1>
          <p className="text-ink/70 mt-2">
            We’ll reply within 24–48h. For time-sensitive work, ping us on WhatsApp.
          </p>

          {/* actions */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="/" className="rounded-full bg-ink text-white px-5 py-2 text-sm hover:opacity-90">
              back to home
            </a>
            <a href="/contact" className="rounded-full border border-border px-5 py-2 text-sm hover:bg-black/5">
              start another brief
            </a>
            <a
              target="_blank"
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hey Movira — quick turnaround request.")}`}
              className="rounded-full bg-green-500 text-white px-5 py-2 text-sm hover:opacity-90"
            >
              WhatsApp us
            </a>
          </div>

          {/* subtle footer line */}
          <p className="text-xs text-ink/50 mt-6">
            If you don’t see our reply, check your Promotions/Spam tab.
          </p>
        </div>
      </section>
    </main>
  );
}
