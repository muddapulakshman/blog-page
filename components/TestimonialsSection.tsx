'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/lib/content';
import { TestimonialCard } from './TestimonialCard';

export function TestimonialsSection() {
  return (
    <section className="px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Testimonials</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Trusted by collaborators</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">Real feedback from product leaders and engineering partners who value polished and reliable execution.</p>
        </motion.div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
