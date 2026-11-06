import SectionHeading from "./SectionHeading";

const highlights = [
  {
    label: "Industry internships",
    value: "Medpace + GE Aerospace",
    detail:
      "Clinical trial cloud infrastructure & high-frequency flight propulsion telemetry.",
  },
  {
    label: "Academic honors",
    value: "3.92 / 4.00 cumulative GPA",
    detail:
      "Continuous Dean’s List Honor Roll across all academic terms at NKU College of Informatics.",
  },
  {
    label: "Hackathon honors",
    value: "1st place hackathon champion",
    detail:
      "Awarded 1st Place overall for the Campus Navigator & Peer Connect real-time coordination engine.",
  },
];

export default function AboutSection() {
  return (
    <section className="content-section" id="about">
      <SectionHeading number="01" title="About Me" />
      <div className="about-layout">
        <article className="panel about-story">
          <p className="eyebrow">Engineering philosophy & mission</p>
          <h3>
            Bridging rigorous computer science theory with high-availability
            enterprise execution in deep environments.
          </h3>
          <p>
            I am a graduating senior in Computer Science at{" "}
            <strong>Northern Kentucky University (NKU)</strong>, focused on
            large-scale distributed architectures, fault-tolerant ingestion
            pipelines, and applied machine intelligence.
          </p>
          <p>
            Across two enterprise engineering internships, I contributed to
            mission-critical platforms. At <strong>Medpace</strong>, I developed
            and audited high-concurrency clinical trial systems operating under
            strict regulatory compliance. At <strong>GE Aerospace</strong>, I
            constructed real-time telemetry processing pipelines handling live
            aircraft turbofan flight tests with sub-millisecond tolerances.
          </p>
          <p>
            Every system I design is built with production durability in mind:
            resilient against edge cases, decoupled, load-tested, and observed
            with comprehensive telemetry.
          </p>
        </article>
        {/* add 2 pictures, 1 of hackathon, 1 at GE*/}
      </div>
    </section>
  );
}
