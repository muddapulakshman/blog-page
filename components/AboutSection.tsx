'use client';

import { motion } from 'framer-motion';
import { aboutSummary, skills } from '@/lib/content';
import { SkillMeter } from './SkillMeter';

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">About</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Crafting thoughtful dev experiences</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{aboutSummary.intro}</p>
        </motion.div>

        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-6">
            <div className="card-glass rounded-[2rem] border border-white/10 p-8">
              <h3 className="text-2xl font-semibold text-white">Personal introduction</h3>
              <p className="mt-4 text-slate-300 leading-8">
                I combine modern frontend craftsmanship, backend reliability, and strong product thinking to build apps that feel premium and perform beautifully. My process is centered around clean code, polished motion, and a delightful reading experience.
              </p>
              <a href="#contact" className="mt-8 inline-flex rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-90">
                Download Resume
              </a>
            </div>

            <div className="card-glass rounded-[2rem] border border-white/10 p-8">
              <h3 className="text-2xl font-semibold text-white">Education & experience</h3>
              <div className="mt-6 space-y-5">
                {aboutSummary.timeline.map((item) => (
                  <div key={item.year} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-indigo-300">{item.year}</p>
                    <p className="mt-2 text-xl font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-slate-400">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {skills.map((group) => (
              <motion.div key={group.title} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="card-glass rounded-[2rem] border border-white/10 p-8">
                <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
                <div className="mt-6 grid gap-4">
                  {group.skills.map((skill) => (
                    <SkillMeter key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
