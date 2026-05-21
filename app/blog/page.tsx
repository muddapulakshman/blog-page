import { BlogFilter } from '@/components/BlogFilter';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function BlogPage() {
  return (
    <main className="relative overflow-hidden bg-[#020617]">
      <Navbar />
      <section className="px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Blog archive</p>
            <h1 className="mt-4 text-5xl font-semibold text-white">Explore articles, tutorials, and ideas.</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">Filter by category, search fast, and discover fresh engineering content designed for modern developers.</p>
          </div>
        </div>
      </section>
      <BlogFilter />
      <Footer />
    </main>
  );
}
