import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Frontend Development',
    message: '',
  });

  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const contactChannels = [
    {
      name: 'Email',
      label: 'Direct Correspondence',
      value: 'ahmadadebara04@gmail.com',
      display: 'ahmadadebara04@gmail.com',
      actionText: 'Send Email',
      href: 'mailto:ahmadadebara04@gmail.com',
      icon: (
        <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      label: 'Instant Messaging',
      value: '+234 (8109606739)',
      display: 'Message on WhatsApp',
      actionText: 'Open Chat',
      href: 'https://wa.me/2348109606739?text=Hello%20Adebara,%20I%20came%20across%20your%20portfolio',
      icon: (
        <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      label: 'Code & Repositories',
      value: 'github.com/adebara',
      display: 'View Code Profile',
      actionText: 'Open GitHub',
      href: 'https://github.com',
      icon: (
        <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      label: 'Professional Network',
      value: 'linkedin.com/in/adebara',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ state: 'error', message: 'Please fill out all required fields.' });
      return;
    }

    setStatus({ state: 'loading', message: 'Sending message...' });

    setTimeout(() => {
      setStatus({
        state: 'success',
        message: 'Thank you for reaching out! Your message has been received, and Adebara will follow up shortly.',
      });
      setFormData({ name: '', email: '', subject: 'Frontend Development', message: '' });
    }, 900);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#040705] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2 inline-block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's Work Together
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Whether you have a frontend engineering project, need a technology instructor for your bootcamp, or want to collaborate, I would love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#080d0a] border border-emerald-900/30 shadow-xl mb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Available for New Initiatives
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Currently open for frontend development contracts, UI engineering roles, technology bootcamps, and educational workshops.
              </p>
            </div>

            {contactChannels.map((ch) => (
              <a
                key={ch.name}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-[#090e0b] border border-emerald-900/30 hover:border-amber-400/40 transition-all shadow-md hover:-translate-x-0.5"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#0e1612] border border-neutral-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {ch.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                      {ch.name}
                    </h4>
                    <p className="text-[11px] text-neutral-400">
                      {ch.display}
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-semibold text-emerald-400 group-hover:text-amber-400 transition-colors">
                  {ch.actionText} →
                </span>
              </a>
            ))}
          </div>

          {/* Right Column: Clean Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#080d0a] border border-emerald-900/30 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6">
                Fill out the details below and I'll respond within 24 hours.
              </p>

              {status.state === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-200 text-xs sm:text-sm flex items-start gap-2.5">
                  <span className="text-emerald-400 text-base font-bold">✓</span>
                  <span>{status.message}</span>
                </div>
              )}

              {status.state === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-red-950/70 border border-red-500/50 text-red-200 text-xs sm:text-sm">
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Your Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Samuel Adeyemi"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#060907] border border-neutral-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-xs sm:text-sm text-white placeholder-neutral-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Your Email <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#060907] border border-neutral-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-xs sm:text-sm text-white placeholder-neutral-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Subject / Area of Interest
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#060907] border border-neutral-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-xs sm:text-sm text-white outline-none transition-all"
                  >
                    <option value="Frontend Development">Frontend Web Development Project</option>
                    <option value="UI Engineering">UI Engineering & Design Systems</option>
                    <option value="Technology Training">Technology Training / Coding Bootcamp</option>
                    <option value="Digital Literacy Mentorship">Digital Literacy Mentorship</option>
                    <option value="General Collaboration">General Collaboration Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Message <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, goals, or training requirements..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#060907] border border-neutral-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-xs sm:text-sm text-white placeholder-neutral-500 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.state === 'loading'}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {status.state === 'loading' ? (
                    <span>Submitting message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
