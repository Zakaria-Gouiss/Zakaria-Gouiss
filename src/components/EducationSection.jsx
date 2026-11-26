import { curriculum } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function EducationSection() {
  return (
    <section className="content-section" id="education">
      <SectionHeading number="5" title="Education" />
      <div className="panel education-card">
        <div className="education-card__degree">
          <span className="index-badge">Northern Kentucky University</span>
          <h3>Bachelor of Science, Computer Science</h3>
          <p>College of Informatics &nbsp; • &nbsp; Highland Heights, KY</p>
          <div className="education-card__facts">
            <p><strong>Minors&nbsp;/&nbsp;Focus Areas:</strong> <span>Applied AI, Mathematics</span></p>
            <p><strong>Projected graduation:</strong> <span>May 2027</span></p>
            <p><strong>Academic Grades:</strong> <span>3.92 / 4.00 cumulative GPA</span></p>
            <p><strong>Honors:</strong> <span>Dean&apos;s List Honor Roll (All Semesters)</span></p>
          </div>
        </div>
        <div className="education-card__curriculum">
          <p className="eyebrow"> Core technical curriculum:</p>
          <div className="curriculum-grid">
            {curriculum.map((course) => (
              <article className="curriculum-card" key={course.title}>
                <h4>{course.title}</h4>
                <p>{course.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
