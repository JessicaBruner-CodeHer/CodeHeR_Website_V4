import SectionContainer from "@/ui/sectioncontainer/SectionContainer";
import { servicesContent } from "@/assets/constants/homeContent";
import "./services.css";

const Services = () => {
  return (
    <SectionContainer id="services" className="services-section">
      <div className="services-header">
        <span className="services-eyebrow">
          {servicesContent.eyebrow}
        </span>

        <h2 className="services-heading">
          {servicesContent.heading}
        </h2>

        <p className="services-description">
          {servicesContent.description}
        </p>
      </div>

      <div className="services-grid">
        {servicesContent.cards.map((card, index) => (
          <div key={index} className="service-card">
            <div className="service-card-inner">
              <h3 className="service-title">{card.title}</h3>

              <span className="service-subtitle">
                {card.price}
              </span>

              <p className="service-description">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Services;