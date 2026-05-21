'use client';

import { useState } from 'react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="px-6 py-24 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-white/10 bg-slate-950/85 p-10 shadow-soft sm:grid-cols-[1.6fr_1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Newsletter</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Subscribe for latest articles and updates</h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">Get curated developer insights, product design thoughts, and release notes delivered to your inbox.</p>
        </div>
        <div className="space-y-4">
          <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-5">
            <label className="block text-sm font-medium text-slate-300">Email address</label>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="hello@prashanth.dev"
              className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-white outline-none transition focus:border-indigo-500/60"
            />
          </div>
          <button
            onClick={() => setSubscribed(true)}
            className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-4 text-sm font-semibold text-white shadow-glow transition hover:opacity-90"
          >
            {subscribed ? 'Subscribed' : 'Subscribe'}
          </button>
          {subscribed ? <p className="text-sm text-emerald-300">Thanks! You will receive the next release update.</p> : null}
        </div>
      </div>
    </section>
  );
}
