import { marqueeBrands } from "@/data/content";

function MarqueeIcon({ inner }: { inner: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: inner }} />
  );
}

export default function TrustedBy() {
  const items = [...marqueeBrands, ...marqueeBrands];

  return (
    <section className="trusted">
      <div className="wrap">
        <div className="eyebrow">Trusted by businesses worldwide</div>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {items.map((b, i) => (
            <div key={i} className="marquee-item">
              <MarqueeIcon inner={b.icon} />
              <span>{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
