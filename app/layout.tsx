import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from './providers';

const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE ?? 'Prashanth • Developer Blog';
const siteDescription =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ?? 'Personal blog and portfolio for Prashanth – developer, creator, and tech blogger.';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://your-deployment-domain.com';

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
