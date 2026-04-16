import SectionContainer from "@/ui/sectioncontainer/SectionContainer";
import Button from "@/ui/button/Button";
import { heroContent } from "@/assets/constants/homeContent";
import "./hero.css";

const Hero = ({ onQuoteClick }) => {
  return (
    <SectionContainer id="hero" className="hero-section">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="hero-eyebrow">{heroContent.eyebrow}</div>

          <h1 className="hero-heading">{heroContent.heading}</h1>

          <p className="hero-description">{heroContent.description}</p>

          <div className="hero-actions">
            <Button
              variant="primary"
              label={heroContent.primaryCta.label}
              onClick={onQuoteClick}
            />

            <Button
              variant="secondary"
              label={heroContent.secondaryCta.label}
              href={heroContent.secondaryCta.href}
            />
          </div>
        </div>

        <div className="hero-emblem">
          <div className="hero-emblem-ring">
            <div className="hero-emblem-inner">
              <span className="hero-emblem-mark">{`{R}`}</span>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;