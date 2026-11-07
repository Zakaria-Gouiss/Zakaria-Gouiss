import { skillGroups } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function SkillsSection() {
  return (
    <section className="content-section" id="skills">
      <SectionHeading number="04" title="Skills and Tech Stacks" />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="panel skill-card" key={group.name}>
            <div className="skill-card__heading">
              <h3>{group.name}</h3>
            </div>
            <div className="tag-list">
              {group.skills.map((skill) => (
                <span className="tech-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
