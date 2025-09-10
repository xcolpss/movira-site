export default function ClientsStrip() {
  const clients = ["ESPN", "Nike", "A24", "Spotify", "Google", "Adobe", "Warner", "Samsung"];

  return (
    <section className="bg-ink text-bg">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">
        <div className="flex items-center justify-between gap-6 overflow-x-auto no-scrollbar">
          {clients.map((c) => (
            <div
              key={c}
              className="shrink-0 text-sm md:text-base tracking-[0.18em] uppercase opacity-80 hover:opacity-100"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
