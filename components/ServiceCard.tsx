export default function ServiceCard({
  title,
  bullets
}: {
  title: string;
  bullets: string[];
}) {
  return (
    <div className="card-light p-6">
      <h3 className="h3">{title}</h3>
      <ul className="mt-2 text-[15px] text-neutral-700 list-disc pl-5">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <a href="/contact" className="cta mt-5 inline-block">
        Book a Call
      </a>
    </div>
  );
}
