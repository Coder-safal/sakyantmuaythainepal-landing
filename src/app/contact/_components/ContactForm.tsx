"use client";

import { useState, type FormEvent } from "react";
import { submitInquiry } from "@/lib/api";

const FIELDS = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "phone", label: "Phone / WhatsApp", type: "tel" },
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    const result = await submitInquiry({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: data.get("phone") ? String(data.get("phone")) : undefined,
      message: String(data.get("message") ?? ""),
      type: "general",
    });
    if (result.ok) {
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } else {
      setStatus("error");
      setErrorMsg(result.message ?? "Could not send message");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
      {FIELDS.map((f) => (
        <div key={f.name}>
          <label
            htmlFor={f.name}
            className="text-[11px] tracking-[0.25em] uppercase text-accent"
          >
            {f.label}
          </label>
          <input
            id={f.name}
            required={f.name !== "phone"}
            type={f.type}
            name={f.name}
            className="mt-2 w-full bg-card border border-border px-4 py-3 focus:border-accent outline-none transition-colors"
          />
        </div>
      ))}
      <div>
        <label
          htmlFor="message"
          className="text-[11px] tracking-[0.25em] uppercase text-accent"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          name="message"
          rows={5}
          className="mt-2 w-full bg-card border border-border px-4 py-3 focus:border-accent outline-none transition-colors"
        />
      </div>
      {status === "error" && errorMsg && (
        <p className="text-xs text-rose-400">{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-accent text-accent-foreground py-4 text-xs tracking-[0.25em] uppercase font-semibold hover:bg-accent/90 disabled:opacity-60"
      >
        {status === "submitting"
          ? "Sending…"
          : status === "sent"
            ? "Sent — Thank you"
            : status === "error"
              ? "Try again"
              : "Send Message"}
      </button>
    </form>
  );
}
