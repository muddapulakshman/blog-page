'use client';

import { motion } from 'framer-motion';
import { featuredBlogs } from '@/lib/content';
import { BlogCard } from './BlogCard';

export function FeaturedBlogs() {
  return (
    <section id="blogs" className="px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Blogs</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Featured stories</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">Explore the latest posts on web development, AI, productivity, and personal growth for developers.</p>
        </motion.div>
        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {featuredBlogs.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
