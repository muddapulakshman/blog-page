'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/content';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Projects</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Selected work</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">A showcase of modern web apps, dashboards, and AI-powered experiences designed for polish and speed.</p>
        </motion.div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
