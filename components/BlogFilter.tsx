'use client';

import { useMemo, useState } from 'react';
import { featuredBlogs, BlogCategory } from '@/lib/content';
import { BlogCard } from './BlogCard';

const categories: (BlogCategory | 'All')[] = ['All', 'Web Development', 'AI', 'Programming', 'Productivity', 'Personal Thoughts'];

export function BlogFilter() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<BlogCategory | 'All'>('All');

  const filtered = useMemo(() => {
    return featuredBlogs.filter((post) => {
      const matchesCategory = category === 'All' || post.category === category;
      const matchesQuery = query === '' || post.title.toLowerCase().includes(query.toLowerCase()) || post.description.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <section className="space-y-8">
      <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Blog archive</p>
            <h2 className="text-3xl font-semibold text-white">Explore latest articles</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search articles"
              className="rounded-3xl border border-white/10 bg-slate-900/85 px-4 py-3 text-white outline-none transition focus:border-indigo-500/60"
            />
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value as BlogCategory | 'All')}
              className="rounded-3xl border border-white/10 bg-slate-900/85 px-4 py-3 text-white outline-none transition focus:border-indigo-500/60"
            >
              {categories.map((item) => (
                <option key={item} value={item} className="bg-slate-950 text-white">
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="grid gap-6 xl:grid-cols-3">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
