'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navLinks, socialLinks } from '@/lib/content';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm text-slate-300 sm:px-8">
        <Link href="#home" className="font-semibold text-white">
          Prashanth
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-white/20 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-xl">{open ? '×' : '☰'}</span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-slate-900/90 px-6 py-5 md:hidden">
          <nav className="grid gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="rounded-2xl bg-slate-950/80 px-4 py-3 text-white transition hover:bg-indigo-500/15">
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-3">
              <ThemeToggle />
              <div className="flex gap-3 text-slate-400">
                {socialLinks.slice(0, 2).map((social) => (
                  <a key={social.href} href={social.href} target="_blank" rel="noreferrer" className="hover:text-white">
                    {social.label.slice(0, 2)}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
