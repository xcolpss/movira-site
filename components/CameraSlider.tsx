// components/CameraSlider.tsx
export default function CameraSlider({
  label = "1/20",
  sub = "SHUTTER",
  markers = 40
}: {
  label?: string;
  sub?: string;
  markers?: number;
}) {
  const ticks = Array.from({ length: markers });
  return (
    <div className="camera-slider" role="presentation" aria-hidden>
      <div className="row">
        {ticks.map((_, i) => (
          <span key={i} className="tick" />
        ))}
      </div>
      <div className="cap">
        <span className="pill">{label}</span>
        <span className="pill ghost">{sub}</span>
      </div>
    </div>
  );
}
