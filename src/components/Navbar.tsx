'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Container from './Container';

const navItems = [
  { name: 'About', href: '#about', number: '02' },
  { name: 'Work', href: '#work', number: '03' },
  { name: 'Capabilities', href: '#capabilities', number: '04' },
  { name: 'Experience', href: '#experience', number: '05' },
  { name: 'Education', href: '#education', number: '06' },
  { name: 'Contact', href: '#contact', number: '07' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-paper/95 backdrop-blur-sm border-b border-ink/10 py-4 shadow-sm'
            : 'bg-transparent border-b border-ink/5 py-6'
        )}
      >
        <Container size="wide">
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            {/* Masthead Left: Name & Title */}
            <a
              href="#"
              className="group flex flex-col focus:outline-none"
              aria-label="Umang Maharana — Home"
            >
              <span className="font-serif text-lg sm:text-xl tracking-tight text-ink font-medium group-hover:text-rust transition-colors duration-200">
                UMANG MAHARANA
              </span>
              <span className="text-[10px] font-mono tracking-widest-editorial uppercase text-caption -mt-0.5">
                FOLIO · VOL. 2027
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-baseline gap-1 text-xs font-mono uppercase tracking-widest text-ink/70 hover:text-ink transition-colors duration-200"
                  >
                    <span className="text-[9px] text-rust opacity-70 group-hover:opacity-100 transition-opacity">
                      {item.number}
                    </span>
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>

              <div className="h-3 w-px bg-ink/15" aria-hidden="true" />

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-ink border border-ink/20 px-3.5 py-1.5 hover:border-ink hover:bg-ink hover:text-paper transition-all duration-200"
              >
                <span>Resume</span>
                <ArrowUpRight size={12} className="opacity-70" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2 text-ink hover:text-rust transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Editorial Table of Contents Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[73px] z-40 bg-paper border-b border-ink/15 px-6 py-8 shadow-lg md:hidden"
          >
            <div className="text-[10px] font-mono uppercase tracking-widest-editorial text-caption border-b border-ink/10 pb-2 mb-6">
              INDEX / TABLE OF CONTENTS
            </div>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-baseline justify-between py-2 border-b border-ink/5 group"
                >
                  <span className="font-serif text-2xl text-ink group-hover:text-rust transition-colors">
                    {item.name}
                  </span>
                  <span className="font-mono text-xs text-rust font-medium">
                    {item.number}
                  </span>
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between w-full py-3 px-4 border border-ink text-ink font-mono text-xs uppercase tracking-widest hover:bg-ink hover:text-paper transition-colors"
                >
                  <span>View Resume</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
