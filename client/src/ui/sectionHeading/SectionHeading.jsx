import "./sectionheading.css";

const SectionHeading = ({
  eyebrow = "",
  title = "",
  description = "",
  align = "center",
  className = ""
}) => {
  const alignClass = `section-heading--${align}`;
  const classes = `section-heading ${alignClass} ${className}`.trim();

  return (
    <div className={classes}>
      {eyebrow && (
        <div className="section-heading-eyebrow">
          {eyebrow}
        </div>
      )}

      {title && (
        <h2 className="section-heading-title">
          {title}
        </h2>
      )}

      {description && (
        <p className="section-heading-description">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
