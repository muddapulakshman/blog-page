'use client';

import { useState } from 'react';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="px-6 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Contact</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">Let’s build something impactful</h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">Have a project, collaboration, or question? Send a message and I’ll get back to you shortly.</p>
          </div>
          <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8">
            <div>
              <p className="text-sm text-slate-400">Email</p>
              <p className="mt-1 text-white">hello@prashanth.dev</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Location</p>
              <p className="mt-1 text-white">Remote / Bangalore, India</p>
            </div>
            <div className="rounded-3xl bg-slate-900/90 p-6 text-slate-300">
              <p className="text-sm text-indigo-300">Map placeholder</p>
              <div className="mt-4 h-48 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
            </div>
          </div>
        </div>

        <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="space-y-5 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft">
          <div>
            <label className="text-sm font-medium text-slate-300">Name</label>
            <input type="text" required className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-900/85 px-4 py-4 text-white outline-none transition focus:border-indigo-500/60" />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-300">Email</label>
            <input type="email" required className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-900/85 px-4 py-4 text-white outline-none transition focus:border-indigo-500/60" />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-300">Message</label>
            <textarea required rows={5} className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-900/85 px-4 py-4 text-white outline-none transition focus:border-indigo-500/60" />
          </div>
          <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-4 text-sm font-semibold text-white shadow-glow transition hover:opacity-90">
            {submitted ? 'Message sent!' : 'Send message'}
          </button>
          {submitted && <p className="text-sm text-emerald-300">Thanks for reaching out! I’ll reply within 24 hours.</p>}
        </form>
      </div>
    </section>
  );
}
