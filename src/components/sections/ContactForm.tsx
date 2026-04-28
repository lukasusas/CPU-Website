"use client";

import { FormEvent, useState } from "react";
import type { ContactContent } from "@/content/pages/pages";

export function ContactForm({ content }: { content: ContactContent["form"] }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="contact-form-section">
      <div>
        <p className="eyebrow">{content.title}</p>
        <h2>{content.body}</h2>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          <span>{content.nameLabel}</span>
          <input name="name" type="text" required autoComplete="name" />
        </label>
        <label>
          <span>{content.emailLabel}</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          <span>{content.typeLabel}</span>
          <select name="type" required>
            {content.options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label>
          <span>{content.messageLabel}</span>
          <textarea name="message" rows={5} required />
        </label>
        <button type="submit">{content.submitLabel}</button>
        <p className="form-status" role="status" aria-live="polite">
          {sent ? content.successMessage : ""}
        </p>
      </form>
    </section>
  );
}
