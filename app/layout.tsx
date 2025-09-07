import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Assuming Inter is still used somewhere
import { ThemeProvider } from '../lib/ThemeContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Consulting Raleigh | Echo Theory Labs',
  description:
    'Hands-on AI solutions and training for Triangle businesses and professionals. Multi-agent systems expertise for measurable ROI.',
  keywords:
    'AI consulting Raleigh, multi-agent AI Triangle, AI training Durham',
};

// This is the function for the anti-flicker script.
const setInitialTheme = `
  (function() {
    function getInitialTheme() {
      try {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) return storedTheme;
      } catch (e) {
        // Ignore errors
      }
      return 'dark'; // Default theme
    }
    const theme = getInitialTheme();
    document.documentElement.className = 'theme-' + theme;
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Anti-flicker script */}
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      {/*
        The body class can still use 'inter' if needed, but the primary
        font will be controlled by the theme context and CSS variables.
      */}
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
