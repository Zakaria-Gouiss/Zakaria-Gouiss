import { profile } from "../data/portfolio";

const metrics = [
  {
    label: "Academic benchmark",
    value: "3.92",
    suffix: "/4.0",
    note: "Dean's List Honors",
  },
  { label: "Internships", value: "2x", note: "Medpace & GE Aero" },
  { label: "Hackathon honors", value: "1st", note: "NKU Champion" },
];

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-copy">
        <div className="availability">
          <span className="status-dot status-dot--pulse" />
          <span>
            Senior CS Student @ Northern Kentucky University (&apos;27)
          </span>
        </div>

        <div className="hero-intro">
          <h1>
            Software Development &amp;
            <span> AI/ML Engineering</span>
          </h1>
          <p className="hero-intro__summary">
            I am a computer scientist dedicated to building software,
            infrastructure, and high-value systems. Guided by the mission to
            spread valuable knowledge around the world, I develop accessible
            applications designed to break down barriers to education and
            insights.
          </p>
        </div>

        <div className="hero-actions">
          <a
            className="button button--primary"
            href={profile.linkedIn}
            target="_blank"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a
            className="button button--secondary"
            href={profile.github}
            target="_blank"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <aside className="profile-console" aria-label="Profile dossier">
        <div className="profile-console__top">
          <span>{profile.name}</span>
          <span>Covington, KY</span>
        </div>
        <div className="profile-art">
          <div className="profile-art__orbit profile-art__orbit--one" />
          <div className="profile-art__orbit profile-art__orbit--two" />
          <div className="profile-art__glow" />
          <div className="profile-art__monogram">AM</div>
        </div>
      </aside>
    </section>
  );
}
