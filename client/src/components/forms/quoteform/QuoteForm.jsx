import { useState } from "react";
import Button from "@/ui/button/Button";
import Logo from "@/ui/logo/Logo";
import siteConfig from "@/assets/constants/siteConfig";
import "./quoteform.css";

const initialFormState = {
  name: "",
  email: "",
  organization: "",
  projectType: "",
  message: ""
};

const initialStatusState = {
  type: "",
  message: ""
};

const QuoteForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(initialStatusState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (status.type) setStatus(initialStatusState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus(initialStatusState);

    try {
      const response = await fetch(
        `${siteConfig.api.baseUrl}${siteConfig.api.quoteEndpoint}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Submission failed");
      }

      setFormData(initialFormState);
      setStatus({
        type: "success",
        message: "Your request was submitted successfully."
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="quote-wrapper">
      {/* HEADER */}
      <div className="quote-header">
        <div className="quote-header-inner">
          <Logo className="quote-logo" />

          <p className="quote-eyebrow">Start a Conversation</p>

          <h2 className="quote-heading">
            Let&apos;s Build What&apos;s Next.
          </h2>

          <p className="quote-subtext">
            Tell us about your goals and we&apos;ll reach out within one business day.
          </p>
        </div>
      </div>

      {/* FORM */}
      <form className="quote-form-body" onSubmit={handleSubmit} noValidate>
        <div className="quote-grid">
          <div className="form-field">
            <label>Full Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Jane Smith"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="jane@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field full">
            <label>Organization</label>
            <input
              type="text"
              name="organization"
              placeholder="Your company or organization name"
              value={formData.organization}
              onChange={handleChange}
            />
          </div>

          <div className="form-field full">
            <label>Project Type *</label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
            >
              <option value="">Select a solution area...</option>
              <option value="workforce">Workforce Solutions</option>
              <option value="digital">Digital Solutions</option>
            </select>
          </div>

          <div className="form-field full">
            <label>Message *</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your current challenges, goals, or what you'd like to accomplish..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {status.message && (
          <div className={`form-status form-status--${status.type}`}>
            {status.message}
          </div>
        )}

        <div className="quote-submit">
          <Button
            type="submit"
            variant="secondary"
            label={isSubmitting ? "Submitting..." : "Send My Request →"}
            disabled={isSubmitting}
          />
        </div>

        <p className="quote-footnote">
          Required fields marked with *. We never share your information.
        </p>
      </form>
    </div>
  );
};

export default QuoteForm;