'use client';

import { Project } from '@/lib/content';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-glass overflow-hidden rounded-3xl border border-white/10 shadow-soft transition duration-500 hover:-translate-y-1 hover:border-indigo-500/30">
      <img src={project.image} alt={project.title} className="h-56 w-full object-cover" />
      <div className="space-y-4 p-6">
        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        <p className="text-slate-300">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-4">
          <a href={project.github} target="_blank" rel="noreferrer" className="rounded-full bg-slate-900 px-4 py-2 text-sm text-white transition hover:bg-indigo-500/80">
            GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-sm text-white transition hover:border-indigo-500/30 hover:bg-white/5">
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}
