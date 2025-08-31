import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../lib/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Consulting Raleigh | Echo Theory Labs',
  description:
    'Hands-on AI solutions and training for Triangle businesses and professionals. Multi-agent systems expertise for measurable ROI.',
  keywords:
    'AI consulting Raleigh, multi-agent AI Triangle, AI training Durham',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
