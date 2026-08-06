import { processSteps } from "@/data/content";

export default function Process() {
  return (
    <section className="section dark-section boxed" id="process" style={{ backgroundImage: "linear-gradient(160deg, rgba(11,37,69,0.9) 0%, rgba(11,37,69,0.82) 55%, rgba(4,14,28,0.94) 100%)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="aurora"><span className="a1"></span><span className="a2"></span><span className="a3"></span></div>
      <div className="wrap">
        <div className="section-head center" style={{ marginLeft: "auto", marginRight: "auto" }}>
          <div className="eyebrow">How It Works</div>
          <h2>Our process</h2>
          <p>Four stages, one goal: a mark you&apos;ll still love using in ten years.</p>
        </div>
        <div className="process-line">
          {processSteps.map((step) => (
            <div key={step.num} className="process-step">
              <div className="process-num">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
