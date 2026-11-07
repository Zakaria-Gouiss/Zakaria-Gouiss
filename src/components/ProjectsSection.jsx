import { projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

function ProjectCard({ project, index }) {
  return (
    <article
      className={`panel project-card${project.featured ? " project-card--featured" : ""}`}
    >
      <div className="project-card__content">
        <div className="project-card__topline">
          <span className={"index-badge"}>{project.category}</span>
        </div>

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
          {project.link && (
            <a href={project.link} rel="noreferrer" target="_blank">
              {project.repositoryLabel} <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
      {project.imageLink ? (
        <img
          className="project-card__image"
          src={project.imageLink}
          alt={`${project.title} project preview`}
          loading="lazy"
        />
      ) : (
        <div className="project-card__metric">
          <span>Project {index + 1}</span>
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
