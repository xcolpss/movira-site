// components/PosterCard.tsx
import Link from "next/link";

export default function PosterCard({
  slug, title, logline, poster
}: { slug:string; title:string; logline:string; poster?:string; }){

  // Force a reliable placeholder for now:
  const useFallback = true;
  const fallback = `https://picsum.photos/seed/${encodeURIComponent(slug)}/600/900`;
  const src = useFallback ? fallback : (poster && poster.trim().length>0 ? poster : fallback);

  return (
    <Link href={`/work/${slug}`} className="poster-minimal group">
      <div className="artwrap">
        <img src={src} alt={title} className="art" />
        <span className="gold-corner" />
        <div className="shade" />
      </div>

      <div className="meta">
        <div className="title">{title}</div>
        <div className="sub">{logline}</div>
      </div>
    </Link>
  );
}
