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
    <section className="content-section about-section" id="about">
      <SectionHeading number="01" title="About Me" />
      <div className="about-layout">
        <article className="panel about-story">
          <p className="eyebrow">My philosophy & mission</p>
          <h3>
            Transforming ideas into technology-based solutions to spread
            knowledge and information.
          </h3>
          <p>
            I am a graduating senior in Computer Science at{" "}
            <strong>Northern Kentucky University</strong>, focused on developing
            full-stack software solutions and machine learning projects.
          </p>
          <p>
            Across <strong>enterprise internships</strong>, I contributed to
            using information technology to solve business problems. At Medpace,
            I developed and audited microsegmentation policy and helped analyze
            network data to support a more cost-effective vendor solution. At GE
            Aerospace, I experimented and helped deploy new project management
            sofware for high-priority cybersecurity initiatives.
          </p>
          <p>
            My <strong>philosophy</strong> is simple: With all of the latest
            technology trends, there is always an exciting opportunity to
            increase productivity, spread valuable knowledge, and learning new
            skills. I use digital and information technology to embark on these
            opportunities to help design a future where accessing information
            and gaining knowledge is available for all.
          </p>
          <p>
            I always enjoy networking with others in the world of technology and
            learn new tech skills every day. I use my skills throughout my
            professional and personal projects to help work towards my mission
            of a more informed and intelligent society. And outside of tech, I
            enjoy my hobbies of making music and playing soccer :)
          </p>
        </article>
        {/* add 2 pictures, 1 of hackathon, 1 at GE*/}
      </div>
    </section>
  );
}
