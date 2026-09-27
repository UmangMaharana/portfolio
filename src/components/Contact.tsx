'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Container from './Container';

export default function Contact() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative py-32 sm:py-40 md:py-48 border-b border-ink/10 bg-gradient-to-b from-paper via-cream/40 to-cream/60 overflow-hidden"
    >
      {/* Subtle background element */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(26, 26, 26, 0.03) 0%, rgba(246, 243, 238, 0) 70%)`,
        }}
      />

      <Container size="default">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col items-center text-center"
        >
          {/* Section Kicker */}
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="font-mono text-xs text-rust font-medium">07</span>
              <span className="text-[11px] font-mono uppercase tracking-widest-editorial text-caption">
                FINAL STATEMENT
              </span>
            </div>
            <div className="h-px w-16 bg-rust/30 mx-auto" />
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ink font-normal tracking-tight leading-[1.08] mb-8 max-w-4xl text-balance-custom"
          >
            Let&apos;s build something worth{' '}
            <span className="italic text-ink">remembering</span>.
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            variants={fadeInUp}
            className="font-serif text-lg sm:text-xl text-caption leading-relaxed max-w-2xl mb-12"
          >
            I&apos;m currently looking for opportunities to apply my skills across software, data, AI/ML, and cloud computing — and to keep building things that solve real problems.
          </motion.p>

          {/* Editorial Call-to-Action Links */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
          >
            {/* Primary Action: Let's Connect */}
            <a
              href="https://linkedin.com/in/umang-maharana"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ink text-paper px-8 py-4 font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:bg-rust focus:outline-none focus:ring-2 focus:ring-rust focus:ring-offset-2 focus:ring-offset-paper"
              aria-label="Connect on LinkedIn"
            >
              <span>Let&apos;s Connect</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>

            {/* Secondary Action: View Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-ink text-ink px-8 py-4 font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:bg-ink hover:text-paper focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 focus:ring-offset-paper"
              aria-label="View resume in new tab"
            >
              <span>View Resume</span>
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
