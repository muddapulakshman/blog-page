'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/content';
import { SkillMeter } from './SkillMeter';

export function SkillsSection() {
  return (
    <section className="px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Skills</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Tools and technologies</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">Organized into frontend, backend, database, and tooling categories for a balanced full-stack profile.</p>
        </motion.div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.title} className="card-glass rounded-[2rem] border border-white/10 p-8">
              <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
              <div className="mt-6 space-y-4">
                {group.skills.map((skill) => (
                  <SkillMeter key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
