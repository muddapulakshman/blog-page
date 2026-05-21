export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-400 sm:px-8">
      <div className="grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
        <div>
          <p className="text-white">Built with ❤️ by Prashanth</p>
          <p className="mt-3 max-w-md leading-6">
            A premium developer portfolio and blog with modern glassmorphism, motion, and dark mode.
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Quick links</p>
          <ul className="mt-4 space-y-2">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#blogs" className="hover:text-white">Blogs</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Connect</p>
          <div className="mt-4 flex flex-wrap gap-3 text-slate-300">
            <a href="https://github.com/prashanth" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            <a href="https://linkedin.com/in/prashanth" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
            <a href="https://twitter.com/prashanth" target="_blank" rel="noreferrer" className="hover:text-white">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
