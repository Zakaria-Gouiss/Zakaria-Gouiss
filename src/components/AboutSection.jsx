import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section className="content-section about-section" id="about">
      <SectionHeading number="1" title="About Me" />
      <div className="about-layout">
        <article className="panel about-story">
          <p className="eyebrow">My philosophy & mission</p>
          <h3>
            Build useful software, solve problems, and make tech work for
            people:
          </h3>
          <p>
            I am a graduating senior in Computer Science at{" "}
            <strong>Northern Kentucky University</strong>, interested in
            building practical software solutions and exploring applications of
            machine learning. I enjoy solving problems, learning new
            technologies, and turning ideas into tools that people can actually
            use.
          </p>

          <p>
            Through internships, I have gained experience working in enterprise
            IT environments where accuracy, security, and confidentiality
            matter. At <strong>Medpace</strong>, I developed and audited network
            microsegmentation policies and analyzed network data to help
            evaluate more cost-effective security solutions. At{" "}
            <strong>GE Aerospace</strong>, I helped evaluate and deploy project
            management software supporting high-priority cybersecurity
            initiatives. These experiences strengthened my ability to work with
            business-critical systems, handle sensitive information responsibly,
            and collaborate across technical teams.
          </p>

          <p>
            I believe good technology should make people's work easier, solve
            real problems, and be built with the people using it in mind.
            Whether I am developing a full-stack application, experimenting with
            machine learning, or learning a new framework, I value curiosity,
            thoughtful problem-solving, and continuous improvement.
          </p>
        </article>
        {/* add 2 pictures, 1 of hackathon, 1 at GE*/}
      </div>
    </section>
  );
}
