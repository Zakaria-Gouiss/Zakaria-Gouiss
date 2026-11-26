import { useState } from "react";
import emailjs from "@emailjs/browser";
import { profile } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSending) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFormError("Contact form is currently unavailable.");
      return;
    }

    setIsSending(true);
    setFormSubmitted(false);
    setFormError("");

    const form = event.currentTarget;

    try {
      await emailjs.sendForm(serviceId, templateId, form, publicKey);

      setFormSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", {
        status: error.status,
        text: error.text,
        message: error.message,
      });

      setFormError("Unable to send your message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };
  const [copyStatus, setCopyStatus] = useState("");

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

  return (
    <section className="content-section" id="contact">
      <SectionHeading eyebrow="" number="6" title="Get in touch & connect" />
      <div className="contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Let&apos;s work together</p>
          <h3>Any cool ideas? Let's chat!</h3>

          <div className="contact-details">
            <p>
              <span aria-hidden="true">•</span> {profile.location}
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
          <label htmlFor="sender-name">Name</label>
          <input
            autoComplete="name"
            id="sender-name"
            name="name"
            placeholder="John Doe"
            required
            type="text"
          />
          <label htmlFor="sender-email">Email address</label>
          <input
            autoComplete="email"
            id="sender-email"
            name="email"
            placeholder="johndoe@example.com"
            required
            type="email"
          />
          <label htmlFor="sender-message">Message</label>
          <textarea
            id="sender-message"
            name="message"
            placeholder="Hi Zakaria, this is John ..."
            required
            rows="4"
          />
          <div className="contact-form__submit">
            <span>I try to respond within 24 hours</span>

            <button
              className="button button--primary"
              type="submit"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send"}
              <span aria-hidden="true"></span>
            </button>
          </div>

          <p
            aria-live="polite"
            className={`form-status ${
              formError ? "form-status--error" : "form-status--success"
            }`}
          >
            {formSubmitted
              ? "Message sent successfully. Thank you!"
              : formError}
          </p>
        </form>
      </div>
    </section>
  );
}
