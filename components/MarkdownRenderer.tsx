'use client';

import { useMemo } from 'react';

type MarkdownRendererProps = {
  markdown: string;
};

const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function MarkdownRenderer({ markdown }: MarkdownRendererProps) {
  const html = useMemo(() => {
    const lines = markdown.split('\n');
    let buffer = '';
    let inCode = false;
    for (const line of lines) {
      if (line.startsWith('```')) {
        inCode = !inCode;
        buffer += inCode ? '<pre class="rounded-3xl bg-slate-950 p-5 text-sm text-slate-100"><code>' : '</code></pre>';
        continue;
      }
      if (inCode) {
        buffer += `${escapeHtml(line)}\n`;
        continue;
      }
      if (line.startsWith('### ')) {
        buffer += `<h3 class="mt-8 text-xl font-semibold text-white">${escapeHtml(line.slice(4))}</h3>`;
        continue;
      }
      if (line.startsWith('## ')) {
        buffer += `<h2 class="mt-10 text-2xl font-semibold text-white">${escapeHtml(line.slice(3))}</h2>`;
        continue;
      }
      if (line.startsWith('# ')) {
        buffer += `<h1 class="mt-12 text-4xl font-bold text-white">${escapeHtml(line.slice(2))}</h1>`;
        continue;
      }
      if (line.startsWith('- ')) {
        if (!buffer.endsWith('</ul>')) {
          buffer += '<ul class="ml-6 list-disc space-y-2 text-slate-300">';
        }
        buffer += `<li>${escapeHtml(line.slice(2))}</li>`;
        if (line === lines[lines.length - 1]) {
          buffer += '</ul>';
        }
        continue;
      }
      if (line.trim() === '') {
        buffer += '<p class="mt-6 leading-8 text-slate-300"></p>';
        continue;
      }
      const inlineCode = line.replace(/`([^`]+)`/g, '<code class="rounded bg-slate-900 px-1.5 py-0.5 text-xs text-indigo-200">$1</code>');
      buffer += `<p class="mt-6 leading-8 text-slate-300">${inlineCode}</p>`;
    }
    return buffer;
  }, [markdown]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
