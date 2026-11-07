import { experience } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  return (
    <section className="content-section" id="experience">
      <SectionHeading number="02" title="Professional Work Experience" />
      <div className="experience-list">
        {experience.map((job) => (
          <article className="panel experience-card" key={job.company}>
            <div className="experience-card__header">
              <div>
                <div className="experience-card__titleline">
                  <h3>{job.company}</h3>
                  <span className="experience-card__field"> {job.field}</span>
                </div>
                <p className="experience-card__role">{job.role}</p>
              </div>
              <div className="experience-card__dates">
                <strong> {job.period}</strong>
                <span>{job.location}</span>
              </div>
            </div>
            <div className="experience-card__body">
              <p>{job.summary}</p>
              <ul className="terminal-list">
                {job.achievements.map((achievement) => (
                  <li key={achievement}>
                    <span aria-hidden="true">.</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              <div className="tag-list">
                {job.technologies.map((technology) => (
                  <span className="tech-tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
