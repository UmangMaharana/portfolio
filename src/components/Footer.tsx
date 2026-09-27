'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Container from './Container';

export default function Footer() {
  const navigationLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const connectLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/umang-maharana', external: true },
    { name: 'GitHub', href: 'https://github.com/UmangMaharana', external: true },
    { name: 'Resume', href: '/resume.pdf', external: true },
  ];

  return (
    <footer className="bg-ink text-paper border-t border-paper/10">
      <Container size="wide" className="py-16 sm:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-12">
          {/* Left Column: Brand & Description */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-paper font-medium tracking-tight mb-3">
                UMANG MAHARANA
              </h2>
              <p className="text-[10px] font-mono uppercase tracking-widest-editorial text-warm-gray">
                PORTFOLIO · VOLUME 2027
              </p>
            </div>

            <p className="font-serif text-base sm:text-lg text-paper/70 leading-relaxed max-w-lg">
              An aspiring Data Analyst / AI/ML & Cloud Computing Engineer building data-driven products, AI systems, and cloud solutions.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-warm-gray">
              <span className="inline-block w-1.5 h-1.5 bg-gold/60 rounded-full"></span>
              <span className="uppercase tracking-widest">BASED IN INDIA</span>
            </div>
          </div>

          {/* Right Columns: Navigation & Connect */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 sm:gap-12">
            {/* Navigation Column */}
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-widest-editorial text-warm-gray mb-4">
                NAVIGATION
              </h3>
              <nav className="flex flex-col space-y-2.5">
                {navigationLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-serif text-sm text-paper/80 hover:text-paper transition-colors duration-200 inline-block w-fit"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Connect Column */}
            <div>
              <h3 className="text-[10px] font-mono uppercase tracking-widest-editorial text-warm-gray mb-4">
                CONNECT
              </h3>
              <nav className="flex flex-col space-y-2.5">
                {connectLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    {...(link.external && {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    })}
                    className="group inline-flex items-center gap-1.5 font-serif text-sm text-paper/80 hover:text-gold transition-colors duration-200 w-fit"
                  >
                    <span>{link.name}</span>
                    {link.external && (
                      <ArrowUpRight
                        size={12}
                        className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                      />
                    )}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 border-t border-paper/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-warm-gray">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <span className="uppercase tracking-widest">
                © 2026 UMANG MAHARANA
              </span>
              <span className="hidden sm:inline text-paper/20">·</span>
              <span className="uppercase tracking-widest">
                DESIGNED & BUILT WITH CARE
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="uppercase tracking-widest text-paper/40">
                Next.js · React · TypeScript · Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
