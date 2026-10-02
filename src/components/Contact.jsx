import { useState } from 'react';

// ─── Web3Forms setup ──────────────────────────────────────────────────────────
// 1. Visit https://web3forms.com/
// 2. Enter your email: ahmadadebara04@gmail.com
// 3. Check your inbox → copy the Access Key
// 4. Paste it below ↓
const WEB3FORMS_ACCESS_KEY = 'ac50bca0-bacb-4360-87bb-c2a4ec955227';
// ─────────────────────────────────────────────────────────────────────────────

// ── Validation ────────────────────────────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(fields) {
  const errors = {};
  if (!fields.name.trim()) {
    errors.name = 'Name is required.';
  } else if (fields.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }
  if (!fields.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!EMAIL_REGEX.test(fields.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!fields.message.trim()) {
    errors.message = 'Message is required.';
  } else if (fields.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }
  return errors;
}

const INITIAL_FORM = {
  name: '',
  email: '',
  subject: 'Frontend Development',
  message: '',
};

export default function Contact() {
  const [formData, setFormData]       = useState(INITIAL_FORM);
  const [fieldErrors, setFieldErrors] = useState({});
  const [touched, setTouched]         = useState({});
  const [status, setStatus]           = useState({ state: 'idle', message: '' });

  // ── Field helpers ────────────────────────────────────────────────────────────
  const handleChange = (name, value) => {
    const next = { ...formData, [name]: value };
    setFormData(next);
    if (touched[name]) {
      const errs = validate(next);
      setFieldErrors((prev) => ({ ...prev, [name]: errs[name] || '' }));
    }
  };

  const handleBlur = (name) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errs = validate(formData);
    setFieldErrors((prev) => ({ ...prev, [name]: errs[name] || '' }));
  };

  // ── Submit ───────────────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, message: true };
    setTouched(allTouched);
    const errs = validate(formData);
    if (Object.values(errs).some(Boolean)) {
      setFieldErrors(errs);
      setStatus({ state: 'error', message: '' });
      return;
    }
    setFieldErrors({});
    setStatus({ state: 'loading', message: '' });

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: `[Portfolio] ${formData.subject} — from ${formData.name.trim()}`,
          message: formData.message.trim(),
          from_name: 'Portfolio Contact Form',
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({
          state: 'success',
          message: "Message sent! I'll get back to you within 24 hours.",
        });
        setFormData(INITIAL_FORM);
        setTouched({});
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Submit error:', err);
      setStatus({
        state: 'error',
        message: `Failed to send: ${err.message}. Please email me directly at ahmadadebara04@gmail.com`,
      });
    }
  };

  // ── Field border colour ───────────────────────────────────────────────────────
  const fieldCls = (name) => {
    const base =
      'w-full px-4 py-2.5 rounded-xl bg-[#0a0a0a] border text-xs sm:text-sm text-white placeholder-neutral-500 outline-none transition-colors';
    if (touched[name] && fieldErrors[name])
      return `${base} border-red-500 focus:border-red-400 focus:ring-1 focus:ring-red-500`;
    if (touched[name] && !fieldErrors[name])
      return `${base} border-[#22c55e] focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e]`;
    return `${base} border-[#27272a] focus:border-[#166534] focus:ring-1 focus:ring-[#22c55e]`;
  };

  // ── Contact channels ──────────────────────────────────────────────────────────
  const contactChannels = [
    {
      name: 'Email',
      label: 'Direct Correspondence',
      display: 'ahmadadebara04@gmail.com',
      actionText: 'Send Email',
      href: 'mailto:ahmadadebara04@gmail.com',
      icon: (
        <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      label: 'Instant Messaging',
      display: 'Message on WhatsApp',
      actionText: 'Open Chat',
      href: 'https://wa.me/2348109606739?text=Hello%20Adebara,%20I%20came%20across%20your%20portfolio',
      icon: (
        <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      label: 'Code & Repositories',
      display: 'View Code Profile',
      actionText: 'Open GitHub',
      href: 'https://github.com',
      icon: (
        <svg className="w-5 h-5 text-[#c9a84c]" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      label: 'Professional Network',
      display: 'Connect on LinkedIn',
      actionText: 'Open Profile',
      href: 'https://linkedin.com',
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.87 0-1.57.7-1.57 1.57s.7 1.57 1.57 1.57 1.57-.7 1.57-1.57-.7-1.57-1.57-1.57z" />
        </svg>
      ),
    },
  ];

  // ── Render ────────────────────────────────────────────────────────────────────
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#111111] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c] mb-2 inline-block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's Work Together
          </h2>
          <p className="mt-3 text-[#a1a1aa] text-sm sm:text-base">
            Whether you have a frontend engineering project, need a technology instructor for your bootcamp,
            or want to collaborate, I would love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* ── Left: Contact Channels ─────────────────────────────────── */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#151515] border border-[#27272a] shadow-md mb-6">
              <h3 className="text-lg font-bold text-white mb-2">Available for New Initiatives</h3>
              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                Currently open for frontend development contracts, UI engineering roles,
                technology bootcamps, and educational workshops.
              </p>
            </div>

            {contactChannels.map((ch) => (
              <a
                key={ch.name}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-[#151515] border border-[#27272a] hover:border-[#166534] transition-colors shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-[#27272a] flex items-center justify-center">
                    {ch.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-[#c9a84c] transition-colors">
                      {ch.name}
                    </h4>
                    <p className="text-[11px] text-[#a1a1aa]">{ch.display}</p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-[#22c55e] group-hover:text-[#c9a84c] transition-colors">
                  {ch.actionText} →
                </span>
              </a>
            ))}
          </div>

          {/* ── Right: Contact Form ───────────────────────────────────── */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#151515] border border-[#27272a] shadow-xl">
              <h3 className="text-xl font-bold text-white mb-1">Send a Direct Message</h3>
              <p className="text-xs sm:text-sm text-[#a1a1aa] mb-6">
                Fill out the details below and I'll respond within 24 hours.
              </p>

              {/* Success banner */}
              {status.state === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-[#166534]/40 border border-[#22c55e] text-white text-xs sm:text-sm flex items-start gap-2.5">
                  <span className="text-[#22c55e] text-lg font-bold flex-shrink-0">✓</span>
                  <span>{status.message}</span>
                </div>
              )}

              {/* General error banner (only when no field-level errors) */}
              {status.state === 'error' && status.message && (
                <div className="mb-6 p-4 rounded-xl bg-red-950/70 border border-red-500/50 text-red-200 text-xs sm:text-sm">
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* Name */}
                  <div>
                    <label htmlFor="cf-name" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Your Name <span className="text-[#c9a84c]">*</span>
                    </label>
                    <input
                      id="cf-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      placeholder="e.g. Samuel Adeyemi"
                      className={fieldCls('name')}
                    />
                    {touched.name && fieldErrors.name && (
                      <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                        <span>⚠</span> {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="cf-email" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Your Email <span className="text-[#c9a84c]">*</span>
                    </label>
                    <input
                      id="cf-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      placeholder="name@company.com"
                      className={fieldCls('email')}
                    />
                    {touched.email && fieldErrors.email && (
                      <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                        <span>⚠</span> {fieldErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="cf-subject" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Subject / Area of Interest
                  </label>
                  <select
                    id="cf-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0a0a0a] border border-[#27272a] focus:border-[#166534] focus:ring-1 focus:ring-[#22c55e] text-xs sm:text-sm text-white outline-none transition-colors"
                  >
                    <option value="Frontend Development">Frontend Web Development Project</option>
                    <option value="UI Engineering">UI Engineering &amp; Design Systems</option>
                    <option value="Technology Training">Technology Training / Coding Bootcamp</option>
                    <option value="Digital Literacy Mentorship">Digital Literacy Mentorship</option>
                    <option value="General Collaboration">General Collaboration Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="cf-message" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Message <span className="text-[#c9a84c]">*</span>
                  </label>
                  <textarea
                    id="cf-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    placeholder="Describe your project, goals, or training requirements..."
                    className={`${fieldCls('message')} resize-none`}
                  />
                  <div className="flex items-start justify-between mt-1">
                    {touched.message && fieldErrors.message ? (
                      <p className="text-[11px] text-red-400 flex items-center gap-1">
                        <span>⚠</span> {fieldErrors.message}
                      </p>
                    ) : (
                      <span />
                    )}
                    <span className={`text-[11px] tabular-nums flex-shrink-0 ${formData.message.length < 10 ? 'text-[#a1a1aa]' : 'text-[#22c55e]'}`}>
                      {formData.message.length} chars
                    </span>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={status.state === 'loading' || status.state === 'success'}
                  className="w-full py-3 rounded-xl bg-[#166534] hover:bg-[#22c55e] text-white font-bold text-xs sm:text-sm border border-[#27272a] shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.state === 'loading' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : status.state === 'success' ? (
                    <span>✓ Message Sent</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-[#a1a1aa]">
                  By submitting, you agree that I may use your email to respond to your inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
