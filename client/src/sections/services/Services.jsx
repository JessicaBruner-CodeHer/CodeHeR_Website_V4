import SectionContainer from "@/ui/sectioncontainer/SectionContainer";
import { servicesContent } from "@/assets/constants/homeContent";
import "./services.css";

const Services = () => {
  return (
    <SectionContainer id="services" className="services-section">
      <div className="services-grid">
        {servicesContent.cards.map((card, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{card.icon}</div>

            <p className="service-eyebrow">{card.eyebrow}</p>

            <h3 className="service-title">
              {card.title.split("\n").map((line, lineIndex) => (
                <span key={lineIndex}>
                  {line}
                  {lineIndex < card.title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h3>

            <p className="service-description">{card.description}</p>

            <ul className="service-list">
              {card.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>

            <a href={card.href} className="service-link">
              {card.cta} →
            </a>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Services;