// app/contact/page.tsx
export default function ContactPage() {
  return (
    <main className="bg-bg text-ink">
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-3 text-ink/75 max-w-2xl">Have a brief? Send a few lines and we’ll get back within 24–48h.</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <form className="grid gap-4 max-w-xl border border-border/80 rounded-2xl p-6">
          <label className="text-sm">
            Name
            <input
              required
              className="mt-1 w-full rounded-md border border-border/80 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-ink/40"
              name="name"
              placeholder="Your name"
            />
          </label>

          <label className="text-sm">
            Email
            <input
              required
              type="email"
              className="mt-1 w-full rounded-md border border-border/80 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-ink/40"
              name="email"
              placeholder="you@company.com"
            />
          </label>

          <label className="text-sm">
            Message
            <textarea
              required
              className="mt-1 w-full min-h-[120px] rounded-md border border-border/80 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-ink/40"
              name="message"
              placeholder="A few lines about the project, timing, budget"
            />
          </label>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-4 py-2 text-sm text-white hover:opacity-90"
          >
            Send
          </button>

          <p className="text-sm text-ink/75">
            Or email us directly:{" "}
            <a className="underline underline-offset-4" href="mailto:hello@movira.studio">
              hello@movira.studio
            </a>
          </p>
        </form>
      </section>
    </main>
  );
}
