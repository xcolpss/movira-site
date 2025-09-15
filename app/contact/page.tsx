// app/contact/page.tsx
export const metadata = {
  title: "Contact — Movira Studios",
  description: "Start a project with Movira — video editing, VFX/CGI/3D, design, and web.",
};

const DIRECT_EMAIL = "hello@movira.studio";
const WHATSAPP = "923171511108"; // intl format, no "+"

export default function ContactPage() {
  return (
    <main className="bg-white text-ink dark:bg-white">
      {/* Heading */}
      <section className="mx-auto max-w-7xl px-6 pt-14 pb-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Start a project</h1>
        <p className="mt-2 text-ink/75 max-w-2xl">Tell us the essentials — we’ll reply fast.</p>
      </section>

      {/* Contact Card */}
      <section className="mx-auto max-w-7xl px-6">
        <form
          action="/api/contact"
          method="POST"
          className="max-w-2xl rounded-2xl border border-border/80 bg-white shadow-sm p-5 md:p-6"
        >
          {/* honeypot for bots (must stay named _honey) */}
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block text-sm font-medium">
              Name
              <input
                required
                name="name"
                placeholder="Your name"
                className="mt-1 w-full rounded-md border border-border/80 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-ink/40"
              />
            </label>

            <label className="block text-sm font-medium">
              Email
              <input
                required
                type="email"
                name="email"
                placeholder="you@company.com"
                className="mt-1 w-full rounded-md border border-border/80 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-ink/40"
              />
            </label>
          </div>

          {/* Service + Budget */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block text-sm font-medium">
              Service (optional)
              <select
                name="service"
                defaultValue=""
                className="mt-1 w-full rounded-md border border-border/80 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-ink/40"
              >
                <option value="">Select service</option>
                <option>Video editing</option>
                <option>VFX / CGI / 3D</option>
                <option>Design / Photoshop</option>
                <option>Web (Next.js)</option>
                <option>Other</option>
              </select>
            </label>

            <label className="block text-sm font-medium">
              Budget (optional)
              <select
                name="budget"
                defaultValue=""
                className="mt-1 w-full rounded-md border border-border/80 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-ink/40"
              >
                <option value="">Select range</option>
                <option>PKR 25–75k</option>
                <option>PKR 75–200k</option>
                <option>PKR 200–500k</option>
                <option>PKR 500k+</option>
              </select>
            </label>
          </div>

          {/* Company + Timeline */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block text-sm font-medium">
              Company (optional)
              <input
                name="company"
                placeholder="Brand / company"
                className="mt-1 w-full rounded-md border border-border/80 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-ink/40"
              />
            </label>

            <label className="block text-sm font-medium">
              Timeline (optional)
              <select
                name="timeline"
                defaultValue=""
                className="mt-1 w-full rounded-md border border-border/80 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-ink/40"
              >
                <option value="">Choose</option>
                <option>ASAP (rush)</option>
                <option>1–2 weeks</option>
                <option>2–6 weeks</option>
                <option>Flexible</option>
              </select>
            </label>
          </div>

          {/* Links */}
          <label className="block text-sm font-medium mt-4">
            Links (optional)
            <input
              name="links"
              placeholder="Mood, refs, Drive/brief URL"
              className="mt-1 w-full rounded-md border border-border/80 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-ink/40"
            />
          </label>

          {/* Message */}
          <label className="block text-sm font-medium mt-4">
            Project brief
            <textarea
              required
              name="message"
              placeholder="A few lines about the project, timing, budget"
              className="mt-1 w-full min-h-[130px] rounded-md border border-border/80 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-ink/40"
            />
          </label>

          {/* Button */}
          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-ink px-4 py-2 text-sm text-white hover:opacity-90"
          >
            Send brief
          </button>

          {/* Subtle helpers */}
          <div className="mt-4 text-sm text-ink/75">
            <span>Or reach us directly: </span>
            <a className="underline underline-offset-4" href={`mailto:${DIRECT_EMAIL}`}>
              {DIRECT_EMAIL}
            </a>
          </div>
        </form>
      </section>

      {/* WhatsApp Card */}
      <section className="mx-auto max-w-7xl px-6 pb-20 mt-6">
        <div className="max-w-2xl rounded-xl border border-border/80 bg-white shadow-sm p-4 flex items-center justify-between">
          <div>
            <h3 className="font-medium text-ink">Prefer WhatsApp?</h3>
            <p className="text-sm text-ink/70">
              Tap below to open a chat — we’ll ask a few quick questions and get started.
            </p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hey Movira — I have a project brief.")}`}
            target="_blank"
            className="shrink-0 rounded-full bg-green-500 text-white px-4 py-2 text-sm hover:opacity-90"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
