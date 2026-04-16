import SectionContainer from "@/ui/sectioncontainer/SectionContainer";
import aboutCapabilities from "@/assets/constants/aboutCapabilities";
import siteConfig from "@/assets/constants/siteConfig";
import "./about.css";

const About = () => {
  const about = siteConfig.about;

  return (
    <section id="about" className="about-section">
      <SectionContainer>
        <div className="about-header">
          <p className="about-eyebrow">{about.eyebrow}</p>
          <h2 className="about-heading">{about.heading}</h2>
        </div>

        <div className="about-capabilities-grid">
          {aboutCapabilities.map((capability) => (
            <div key={capability.id} className="about-capability-card">
              <div className="about-capability-icon">{capability.icon}</div>
              <h3 className="about-capability-title">{capability.title}</h3>
              <p className="about-capability-description">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default About;