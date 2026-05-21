'use client';

import Link from 'next/link';
import { BlogPost } from '@/lib/content';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="card-glass group overflow-hidden rounded-3xl border border-white/10 p-6 transition duration-500 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-white/10">
      <div className="relative mb-5 overflow-hidden rounded-3xl">
        <img src={post.cover} alt={post.title} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-indigo-300">
        <span>{post.category}</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="text-2xl font-semibold text-white">{post.title}</h3>
      <p className="mt-4 text-slate-300">{post.description}</p>
      <div className="mt-6 flex items-center justify-between">
        <Link href={`/blog/${post.slug}`} className="rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400">
          Read More
        </Link>
        <span className="text-slate-400">{post.publishedAt}</span>
      </div>
    </article>
  );
}
