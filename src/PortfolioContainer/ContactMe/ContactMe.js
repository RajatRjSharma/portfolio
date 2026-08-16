import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClockLoader } from "react-spinners";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./ContactMe.css";

function isEmailConfigured(emailConfig) {
  return Boolean(
    emailConfig?.serviceId && emailConfig?.templateId && emailConfig?.publickey
  );
}

export default function ContactMe({
  emailConfig,
  toastConfig,
  clockLoaderConfig,
}) {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const configured = isEmailConfigured(emailConfig);

  async function sendEmail(event) {
    event.preventDefault();
    if (loading) return;

    const honeypot = form.current?.elements?.company_website?.value;
    if (honeypot) {
      toast.success("Message submitted successfully", {
        className: "toast-success",
      });
      form.current?.reset();
      return;
    }

    if (!configured) {
      toast.error("Contact form is unavailable. Please try again later.", {
        className: "toast-error",
      });
      return;
    }

    setLoading(true);

    try {
      const emailjs = await import("@emailjs/browser");
      const result = await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        form.current,
        emailConfig.publickey
      );

      if (result.text === "OK") {
        toast.success("Message submitted successfully", {
          className: "toast-success",
        });
        form.current?.reset();
      } else {
        toast.error("Failed to submit message. Please try again later.", {
          className: "toast-error",
        });
      }
    } catch (error) {
      toast.error("Failed to submit message. Please try again later.", {
        className: "toast-error",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className="contactme-container"
      aria-labelledby="contact-heading"
      aria-busy={loading}
    >
      <div className="contactme-parent">
        <SectionTitle
          headingId="contact-heading"
          title="Contact Me"
          subtitle="Let's Keep in Touch"
        />
        <div className="contactme-body">
          <div className="contactme-intro">
            <h3>
              <span>Get</span> In Touch
            </h3>
            <p>Send a message and I will get back to you.</p>
          </div>
          <form ref={form} onSubmit={sendEmail} aria-label="Contact form">
            <div className="hp-field" aria-hidden="true">
              <label htmlFor="company_website">Company website</label>
              <input
                type="text"
                id="company_website"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control no-border"
                id="name"
                name="user_name"
                placeholder="Enter name..."
                autoComplete="name"
                maxLength={100}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control no-border"
                id="email"
                name="user_email"
                placeholder="Enter email..."
                autoComplete="email"
                maxLength={254}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control no-border"
                id="message"
                name="user_message"
                placeholder="Enter your message..."
                autoComplete="off"
                maxLength={2000}
                required
                rows="3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn primary-btn center"
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? "Sending" : "Submit"}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position={toastConfig?.position || "top-center"}
        autoClose={toastConfig?.autoClose || 3000}
        hideProgressBar={toastConfig?.hideProgressBar || false}
        newestOnTop={toastConfig?.newestOnTop || false}
        closeOnClick
        rtl={toastConfig?.rtl || false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={toastConfig?.theme || "colored"}
      />
      {loading ? (
        <div className="loader" role="status" aria-live="polite">
          <span className="sr-only">Sending message</span>
          <ClockLoader
            color={clockLoaderConfig?.color || "#333333"}
            loading={clockLoaderConfig?.loading ?? true}
            size={clockLoaderConfig?.size || 50}
            aria-label={clockLoaderConfig?.ariaLabel || "Sending message"}
            data-testid={clockLoaderConfig?.dataTestid || "loader"}
          />
        </div>
      ) : null}
    </section>
  );
}
