import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from './providers';

export const metadata: Metadata = {
  title: 'Prashanth • Developer Blog',
  description: 'Personal blog and portfolio for Prashanth – developer, creator, and tech blogger.',
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
