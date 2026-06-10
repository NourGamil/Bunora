export default function SectionHeader({ eyebrow, title, description, centered = false, className = "" }) {
  return (
    <div data-reveal className={`${centered ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title text-balance">{title}</h2>
      {description ? <p className={`section-copy ${centered ? "mx-auto" : ""}`}>{description}</p> : null}
    </div>
  );
}
