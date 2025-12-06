import React, { useState } from "react";
import styles from "./Contact.module.scss";

/**
 * Replace FORM_ENDPOINT with your Formspree endpoint:
 * e.g. https://formspree.io/f/abcdxyz
 * Or leave as null to use mailto fallback.
 */
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"; // <-- replace

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = e => setForm(s => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();

    // If user hasn't configured Formspree, fallback to mailto
    if (!FORM_ENDPOINT || FORM_ENDPOINT.includes("YOUR_FORM_ID")) {
      // open mail client with prefilled body
      const subject = encodeURIComponent(`Portfolio message from ${form.name || "Visitor"}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
      window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className={styles.inner}>
        <div className={styles.info}>
          <h2 id="contact-heading">Contact</h2>
          <p>Interested in working together? Send me a message and I’ll get back in 2–3 business days.</p>

          <ul className={styles.social}>
            <li><a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="mailto:your.email@example.com">Email</a></li>
          </ul>

          <p className={styles.small}>Or download my resume: <a href="/resume.pdf" download>Resume (PDF)</a></p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <label>
            <span className={styles.labelText}>Your name</span>
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>

          <label>
            <span className={styles.labelText}>Email</span>
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </label>

          <label>
            <span className={styles.labelText}>Message</span>
            <textarea name="message" rows="6" value={form.message} onChange={handleChange} required />
          </label>

          <div className={styles.actions}>
            <button type="submit" className={styles.primary} disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <a className={styles.secondary} href="mailto:your.email@example.com">Or email directly</a>
          </div>

          {status === "success" && <p className={styles.success}>Thanks — message sent!</p>}
          {status === "error" && <p className={styles.error}>Sorry — something went wrong. Try mailto link.</p>}
        </form>
      </div>
    </section>
  );
}
