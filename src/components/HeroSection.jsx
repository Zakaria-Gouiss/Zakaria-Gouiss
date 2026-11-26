import { profile } from "../data/portfolio";
import portrait from "../assets/test1-Photoroom.png";

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-copy">
        <div className="hero-intro">
          <h1>
            Software Development &amp;
            <span> AI/ML Engineering</span>
          </h1>
          <p className="hero-intro__summary">
            I am a computer science student passionate about building software
            that solves practical problems. My interests span full-stack
            development, machine learning, and infrastructure, with a focus on
            creating reliable, accessible applications that make everyday tasks
            easier and more efficient.
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
          <img
            className="profile-art__portrait"
            src={portrait}
            alt={`${profile.name} portrait`}
          />
        </div>
      </aside>
    </section>
  );
}
