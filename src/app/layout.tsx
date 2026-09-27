import type { Metadata } from 'next';
import { Newsreader, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['300', '400', '500', '600'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Umang Maharana — Editorial Portfolio',
  description:
    'Personal portfolio of Umang Maharana — Computer Science undergraduate building data-driven products, AI systems, and cloud solutions.',
  keywords: [
    'Umang Maharana',
    'Data Analytics',
    'AI/ML',
    'Cloud Computing',
    'Full-Stack Engineering',
    'Software Engineer',
  ],
  authors: [{ name: 'Umang Maharana' }],
  creator: 'Umang Maharana',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-paper text-ink font-sans antialiased selection:bg-rust/20 selection:text-ink min-h-screen">
        {children}
      </body>
    </html>
  );
}
