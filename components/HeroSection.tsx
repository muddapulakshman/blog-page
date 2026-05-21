'use client';

import { motion } from 'framer-motion';
import { heroLinks, socialLinks } from '@/lib/content';

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-6 py-20 sm:px-8">
      <div className="hero-wave" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <span className="mb-6 inline-flex rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-200">
            Developer portfolio
          </span>
          <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl">
            Hi, I’m Prashanth
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-300">
            Developer, Creator, and Tech Blogger. I build premium digital experiences with modern web technologies and share ideas on engineering, productivity, and AI.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            {heroLinks.map((link) => (
              <a key={link.href} href={link.href} className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-90">
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4 text-slate-400">
            {socialLinks.map((social) => (
              <a key={social.href} href={social.href} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:border-indigo-500/30 hover:bg-white/10">
                {social.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex items-center justify-center"
        >
          <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-slate-950/60 p-1 shadow-soft">
            <div className="glass-panel rounded-[2.25rem] p-8">
              <div className="relative overflow-hidden rounded-[2rem] bg-slate-950/90 p-8 text-center">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=520&q=80" alt="Prashanth avatar" className="mx-auto h-44 w-44 rounded-full object-cover shadow-soft" />
                <div className="mt-8 rounded-3xl bg-slate-950/90 p-6 text-left">
                  <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Developer</p>
                  <h2 className="mt-4 text-3xl font-semibold text-white">Prashanth</h2>
                  <p className="mt-4 text-slate-300">Designer of scalable web applications, storyteller through code, and builder of polished UI systems.</p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-left">
                      <p className="text-sm text-slate-400">Experience</p>
                      <p className="mt-2 text-lg font-semibold text-white">5+ years</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-left">
                      <p className="text-sm text-slate-400">Focus</p>
                      <p className="mt-2 text-lg font-semibold text-white">Web & AI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
