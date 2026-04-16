import Button from "@/ui/button/Button";
import "./projectcta.css";

const ProjectCta = ({ onQuoteClick }) => {
  return (
    <section className="project-cta" id="project-cta">
      <div className="site-container">
        <div className="project-cta-card">
          <div className="project-cta-content">
            <h2 className="project-cta-title">
              Let&apos;s Build What&apos;s Next.
            </h2>

            <p className="project-cta-text">
              Choose the solution that fits your goals and let&apos;s get started.
            </p>
          </div>

          <div className="project-cta-action">
            <Button
              variant="primary"
              label="Start a Workforce Conversation"
              onClick={onQuoteClick}
            />

            <Button
              variant="secondary"
              label="Start a Digital Project"
              onClick={onQuoteClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCta;