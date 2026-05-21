export type BlogCategory = 'Web Development' | 'AI' | 'Programming' | 'Productivity' | 'Personal Thoughts';

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  readingTime: string;
  publishedAt: string;
  cover: string;
  author: string;
  content: string;
  tags: string[];
};

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
};

export type SkillGroup = {
  title: string;
  skills: { name: string; level: number }[];
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

export const heroLinks = [
  { href: '#blogs', label: 'Read Blogs' },
  { href: '#projects', label: 'View Projects' },
];

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#blogs', label: 'Blogs' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const socialLinks = [
  { href: 'https://github.com/prashanth', label: 'GitHub' },
  { href: 'https://linkedin.com/in/prashanth', label: 'LinkedIn' },
  { href: 'https://twitter.com/prashanth', label: 'Twitter' },
  { href: 'https://instagram.com/prashanth', label: 'Instagram' },
];

export const skills: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 92 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 89 },
      { name: 'Next.js', level: 88 },
      { name: 'Tailwind CSS', level: 94 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 84 },
      { name: 'Express', level: 82 },
      { name: 'MongoDB', level: 80 },
      { name: 'API Design', level: 88 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Figma', level: 74 },
      { name: 'VS Code', level: 96 },
      { name: 'Framer Motion', level: 86 },
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Nebula Notes',
    description: 'A polished note-taking web app with dark mode, markdown preview, and smart tagging.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    github: 'https://github.com/prashanth/nebula-notes',
    demo: '#',
  },
  {
    title: 'Pulse AI',
    description: 'A blog recommendation engine that uses AI signals to surface relevant developer content.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    technologies: ['React', 'Node.js', 'Firebase', 'Framer Motion'],
    github: 'https://github.com/prashanth/pulse-ai',
    demo: '#',
  },
  {
    title: 'LaunchPad CRM',
    description: 'An admin dashboard built for startups to manage contacts, analytics, and project pipelines.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    technologies: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/prashanth/launchpad-crm',
    demo: '#',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Sara Kim',
    role: 'Product Lead',
    quote: 'Prashanth delivers polished interfaces with thoughtful motion and great performance.',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'CTO, Tech Startup',
    quote: 'A talented developer who builds clean, user-friendly products quickly and reliably.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Priya Sharma',
    role: 'Founder',
    quote: 'The blog design and content experience are both highly professional and deeply engaging.',
    avatar: 'https://images.unsplash.com/photo-1546692636-4c4a4aca8fd7?auto=format&fit=crop&w=500&q=80',
  },
];

export const featuredBlogs: BlogPost[] = [
  {
    slug: 'building-responsive-ui-with-tailwind',
    title: 'Building Responsive UI with Tailwind CSS',
    description: 'A practical guide to crafting responsive developer blogs with fluid layouts and modern cards.',
    category: 'Web Development',
    readingTime: '5 min read',
    publishedAt: 'May 15, 2026',
    cover: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    author: 'Prashanth',
    tags: ['Tailwind CSS', 'Responsive', 'UI'],
    content: `# Building Responsive UI with Tailwind CSS

Creating a modern blog experience starts with responsive layout patterns. In this article, we explore how to use Tailwind CSS to craft flexible grids, glassmorphism cards, and intuitive navigation.

## Why Tailwind for blogs

Tailwind offers utility-first styling, fast prototyping, and excellent compatibility with React and Next.js. You can rapidly apply gradients, shadows, and motion without leaving your JSX.

### Example code

\`\`\`tsx
export function Button() {
  return <button className="rounded-full bg-indigo-500 px-6 py-3 text-white shadow-glow hover:bg-indigo-400">Subscribe</button>;
}
\`\`\`

## Conclusion

A strong visual system helps your blog stand out. Combine readable typography, intuitive spacing, and motion to keep your readers engaged.`,
  },
  {
    slug: 'ai-powered-personalization-for-dev-blogs',
    title: 'AI-Powered Personalization for Dev Blogs',
    description: 'How to use AI to recommend articles, personalize content, and improve reader retention.',
    category: 'AI',
    readingTime: '7 min read',
    publishedAt: 'April 28, 2026',
    cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    author: 'Prashanth',
    tags: ['AI', 'Personalization', 'Recommendations'],
    content: `# AI-Powered Personalization for Dev Blogs

Personalization helps deliver the right article at the right moment. In this piece, we look at how AI can power recommendations, bookmarks, and curated feeds.

## Recommendation signals

- Article category affinity
- Reading time patterns
- Bookmark history

## Sample algorithm

\`\`\`js
const score = (article, user) => {
  return article.tags.reduce((sum, tag) => sum + (user.interest[tag] || 0), 0) + article.popularity;
};
\`\`\`

## Building trust with readers

Create clear category filters, show related posts, and respect reading habits. Intelligent recommendations are about relevance, not complexity.`,
  },
  {
    slug: 'developer-productivity-habits',
    title: 'Developer Productivity Habits for Focused Work',
    description: 'Productivity habits, tooling tips, and routines that help developers ship high-quality work consistently.',
    category: 'Productivity',
    readingTime: '6 min read',
    publishedAt: 'March 18, 2026',
    cover: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80',
    author: 'Prashanth',
    tags: ['Habits', 'Focus', 'Workflow'],
    content: `# Developer Productivity Habits for Focused Work

The right habits make deep work sustainable. Here are strategies for writing better code without burning out.

## Morning routine

Start with a lightweight review of priorities. Choose one high-impact task and block time around it.

## Work session tips

- Use short focused sprints
- Keep commit messages clear
- Review before merging

### Code example

\`\`\`js
function focusMode() {
  return 'Do one thing at a time.';
}
\`\`\`

## Final thoughts

Consistency is the key. Combine strong habits with smart tooling to make every sprint feel productive.`,
  },
];

export const aboutSummary = {
  title: 'About Prashanth',
  intro: 'I am a developer, creator, and tech writer who builds interactive products and writes thoughtful engineering content. I enjoy designing premium digital experiences, optimizing performance, and sharing what I learn with the developer community.',
  timeline: [
    { year: '2026', title: 'Senior Frontend Engineer', detail: 'Leading product interface work for a fast-growing SaaS team.' },
    { year: '2024', title: 'Full-Stack Developer', detail: 'Built scalable apps with Next.js, Node.js, and MongoDB.' },
    { year: '2022', title: 'Software Engineer Intern', detail: 'Delivered analytics dashboards and developer tooling.' },
  ],
};
