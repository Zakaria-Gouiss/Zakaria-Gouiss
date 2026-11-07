export default function SectionHeading({
  number,
  eyebrow,
  title,
  meta,
  action,
}) {
  return (
    <div className="section-heading">
      <div className="section-heading__topline">
        <p>
          <span className="section-heading__dot" />
          {number}
        </p>
        <span className="section-heading__rule" />
        {action || <span className="section-heading__meta">{meta}</span>}
      </div>
      <div className="section-heading__title-row">
        <h2>{title}</h2>
        {meta && <span className="section-heading__label">{meta}</span>}
      </div>
    </div>
  );
}
