import { notFound } from 'next/navigation';
import { BlogPost, featuredBlogs } from '@/lib/content';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { ReadingProgress } from '@/components/ReadingProgress';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

function getPost(slug: string): BlogPost | undefined {
  return featuredBlogs.find((post) => post.slug === slug);
}

function extractHeadings(markdown: string) {
  return markdown
    .split('\n')
    .filter((line) => line.startsWith('#'))
    .map((line) => ({
      level: line.startsWith('### ') ? 3 : line.startsWith('## ') ? 2 : 1,
      text: line.replace(/^#+\s*/, ''),
    }))
    .filter((item) => item.level > 1);
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return { title: 'Blog article' };
  return {
    title: `${post.title} | Prashanth`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const headings = extractHeadings(post.content);

  return (
    <main className="relative overflow-hidden bg-[#020617] text-white">
      <ReadingProgress />
      <Navbar />
      <section className="px-6 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_320px]">
          <article className="space-y-10 rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-soft">
            <div className="space-y-4">
              <div className="inline-flex rounded-full bg-indigo-500/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-indigo-200">
                {post.category}
              </div>
              <h1 className="text-5xl font-semibold text-white">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.publishedAt}</span>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/90">
              <img src={post.cover} alt={post.title} className="h-96 w-full object-cover" />
            </div>
            <div className="max-w-none">
              <MarkdownRenderer markdown={post.content} />
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Share this article</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="#" className="rounded-full bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-indigo-500/20">Twitter</a>
                <a href="#" className="rounded-full bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-indigo-500/20">LinkedIn</a>
                <a href="#" className="rounded-full bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-indigo-500/20">Copy link</a>
              </div>
            </div>
          </article>

          <aside className="space-y-8">
            <div className="sticky top-24 rounded-[2rem] border border-white/10 bg-slate-950/90 p-6 shadow-soft">
              <h2 className="text-xl font-semibold text-white">Table of contents</h2>
              <div className="mt-5 space-y-3 text-slate-300">
                {headings.map((item) => (
                  <div key={item.text} style={{ paddingLeft: `${item.level * 12}px` }}>
                    <a href={`#${item.text.toLowerCase().replace(/\s+/g, '-')}`} className="block rounded-2xl px-3 py-2 transition hover:bg-white/5 hover:text-white">
                      {item.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-white">Related articles</h3>
              <div className="mt-5 space-y-4 text-slate-300">
                {featuredBlogs.filter((item) => item.slug !== post.slug).slice(0, 3).map((item) => (
                  <a key={item.slug} href={`/blog/${item.slug}`} className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-indigo-500/30 hover:bg-white/10">
                    <div className="text-sm uppercase tracking-[0.25em] text-indigo-300">{item.category}</div>
                    <p className="mt-2 font-semibold text-white">{item.title}</p>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  );
}
