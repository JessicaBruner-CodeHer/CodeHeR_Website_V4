import "./sectioncontainer.css";

const SectionContainer = ({
  id = "",
  className = "",
  variant = "",
  children
}) => {
  const variantClass = variant ? `section-container--${variant}` : "";
  const classes = `section-container ${variantClass} ${className}`.trim();

  return (
    <section id={id} className={classes}>
      <div className="site-container">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
