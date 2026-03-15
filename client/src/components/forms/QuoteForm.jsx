import { useState } from "react";
import Button from "../../../ui/button/Button";
import "./quoteform.css";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Quote Request Submitted", formData);

    // later this will call the Express API
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <h2 className="quote-form-title">
        Request a Quote
      </h2>

      <div className="quote-form-grid">

        <div className="form-field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>Project Type</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
          >
            <option value="">Select a project</option>
            <option value="new-site">New Website</option>
            <option value="rebuild">Website Rebuild</option>
            <option value="maintenance">Maintenance</option>
            <option value="hosting">Hosting</option>
            <option value="support">Technical Support</option>
          </select>
        </div>

      </div>

      <div className="form-field form-message">
        <label>Project Details</label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <div className="quote-form-actions">
        <Button
          type="submit"
          variant="primary"
          label="Submit Request"
        />
      </div>

    </form>
  );
};

export default QuoteForm;
