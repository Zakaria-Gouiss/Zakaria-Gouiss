import { profile, projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

function ProjectCard({ project, index }) {
  return (
    <article
      className={`panel project-card${project.featured ? " project-card--featured" : ""}`}
    >
      <div className="project-card__content">
        <div className="project-card__topline">
          <span
            className={
              project.featured
                ? "index-badge index-badge--bright"
                : "index-badge"
            }
          >
            {project.category}
          </span>
          {project.status && (
            <span className="project-status">Status: {project.status}</span>
          )}
          {project.score && (
            <span className="project-score">{project.score}</span>
          )}
        </div>
        {project.subtitle && (
          <p className="project-card__subtitle">{project.subtitle}</p>
        )}
        <h3>{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        <div className="tag-list">
          {project.technologies.map((technology) => (
            <span className="tech-tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>
        <div className="project-card__actions">
          <a href={profile.github} rel="noreferrer" target="_blank">
            {project.repositoryLabel} <span aria-hidden="true">↗</span>
          </a>
          {project.featured && (
            <a className="project-card__secondary" href="#contact">
              View demo <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
      {project.featured ? (
        <div
          className="terminal-preview"
          aria-label="Syllabus tracker system status"
        >
          <div className="terminal-preview__header">
            <span>
              <span className="status-dot" /> ingest_pipeline.log
            </span>
            <span className="terminal-preview__connected">Connected</span>
          </div>
          <p className="terminal-preview__command">
            &gt; INGEST CSC402_DISTRIBUTED_SYSTEMS.PDF
          </p>
          <p className="terminal-preview__success">
            [200 OK] 14 ASSESSMENT DATES INDEXED
          </p>
          <div className="terminal-preview__priority">
            <div>
              <strong>Priority: Exam 2 review</strong>
              <span>T-minus 38h</span>
            </div>
            <div className="priority-meter">
              <span />
            </div>
            <div className="terminal-preview__details">
              <span>Severity: high</span>
              <span>Weight: 94.2/100</span>
            </div>
          </div>
          <p className="terminal-preview__sync">
            Redis cache synchronized with zero drop rate across cluster.
          </p>
          <div className="terminal-preview__footer">
            <span>Latency: &lt; 5ms</span>
            <span>Status: healthy</span>
          </div>
        </div>
      ) : (
        <div className="project-card__metric">
          <span>0{index + 1}</span>
          {project.metric}
        </div>
      )}
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section className="content-section" id="projects">
      <SectionHeading number="03" title="Various Projects" />
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard index={index} key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
