import { useState } from "react";
import { profile } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  const [copyStatus, setCopyStatus] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("Email copied to clipboard.");
      window.setTimeout(() => setCopyStatus(""), 3500);
    } catch {
      setCopyStatus(
        "Could not access the clipboard. Please copy the email address above.",
      );
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    setFormSubmitted(true);
    window.setTimeout(() => setFormSubmitted(false), 5000);
  }

  return (
    <section className="content-section" id="contact">
      <SectionHeading eyebrow="" number="06" title="Get in touch & connect" />
      <div className="contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Let&apos;s work together</p>
          <h3>
            Open to software, machine learning, infrastructure, or AI roles.
          </h3>

          <div className="contact-details">
            <p>
              <span aria-hidden="true">•</span> {profile.location} • Open to
              Relocation & Remote
            </p>
            <a href={`mailto:${profile.email}`}>
              <span aria-hidden="true">•</span> {profile.email}
            </a>
          </div>
          <button
            className="button button--secondary copy-button"
            onClick={copyEmail}
            type="button"
          >
            Copy email <span aria-hidden="true">⧉</span>
          </button>
          <p aria-live="polite" className="form-status">
            {copyStatus}
          </p>
        </div>

        <form className="panel contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__heading">
            <h3>Contact form</h3>
          </div>
          <label htmlFor="sender-name">Your name / recruiter / team</label>
          <input
            autoComplete="name"
            id="sender-name"
            name="name"
            placeholder="e.g. Sarah Jenkins // Engineering Manager"
            required
            type="text"
          />
          <label htmlFor="sender-email">Email address</label>
          <input
            autoComplete="email"
            id="sender-email"
            name="email"
            placeholder="s.jenkins@company.com"
            required
            type="email"
          />
          <label htmlFor="sender-message">Message</label>
          <textarea
            id="sender-message"
            name="message"
            placeholder="Hi Zakaria, we came across your projects and would love to chat regarding software engineering roles..."
            required
            rows="4"
          />
          <div className="contact-form__submit">
            <span>I try to respond within 24 hours</span>
            <button className="button button--primary" type="submit">
              Send<span aria-hidden="true"></span>
            </button>
          </div>
          <p aria-live="polite" className="form-status form-status--success">
            {formSubmitted ? "Transmission sent successfully. Thank you!" : ""}
          </p>
        </form>
      </div>
    </section>
  );
}
