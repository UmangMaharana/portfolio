'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Container from './Container';

export default function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
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
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 sm:pt-36 md:pt-44 pb-12 overflow-hidden border-b border-ink/10">
      {/* Background subtle editorial watermark or issue stamp */}
      <div
        aria-hidden="true"
        className="absolute right-6 top-28 sm:top-36 pointer-events-none select-none opacity-[0.035] text-ink font-serif text-[18vw] leading-none font-bold"
      >
        UM
      </div>

      <Container size="wide" className="relative z-10 flex-grow flex flex-col justify-between">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {/* Top Kicker & Issue metadata */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 pb-4 mb-8 sm:mb-12"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-rust font-medium">01</span>
              <span className="text-xs font-mono uppercase tracking-widest-editorial text-caption">
                COMPUTER SCIENCE · DATA · AI · CLOUD
              </span>
            </div>
            <div className="flex items-center gap-4 text-[11px] font-mono uppercase text-caption tracking-widest hidden sm:flex">
              <span>ISSUE NO. 01</span>
              <span>·</span>
              <span>GRADUATING 2027</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={fadeInUp} className="max-w-6xl">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] text-ink font-normal leading-[1.06] tracking-tight text-balance-custom mb-10">
              <span className="font-mono text-caption/40 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light tracking-widest mr-2 select-none">
                .....
              </span>
              I&apos;m a final-year Computer Science student building <span className="italic text-ink font-serif">data-driven products</span>, <span className="text-rust">AI systems</span> & <span className="italic text-ink font-serif">cloud solutions</span>.
            </h1>
          </motion.div>

          {/* Asymmetric Middle Grid: Core Specializations & Narrative metadata */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-8 border-t border-ink/10"
          >
            {/* Left: Core Pillars */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest-editorial text-caption block mb-3">
                  PRIMARY DISCIPLINES
                </span>
                <p className="font-serif text-xl sm:text-2xl md:text-3xl text-ink leading-snug">
                  Data Analytics <span className="text-rust font-sans text-lg align-middle mx-1">·</span> AI/ML <span className="text-rust font-sans text-lg align-middle mx-1">·</span> Cloud Computing <span className="text-rust font-sans text-lg align-middle mx-1">·</span> Full-Stack Engineering
                </p>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-rust transition-colors duration-200"
                >
                  <span>Explore Selected Work</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-ink border-b border-ink/40 pb-1 font-mono text-xs uppercase tracking-widest hover:border-rust hover:text-rust transition-colors duration-200"
                >
                  <span>Get in Touch</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Right: Editorial Meta Data Box */}
            <div className="lg:col-span-5 bg-cream/60 border border-ink/10 p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest-editorial text-caption block mb-1.5">
                    BASED IN
                  </span>
                  <p className="font-serif text-base text-ink font-medium">India</p>
                  <p className="text-[11px] text-caption mt-0.5 font-mono">Parul University</p>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest-editorial text-caption block mb-1.5">
                    FOCUS
                  </span>
                  <p className="font-serif text-base text-ink font-medium">Data · AI · Cloud</p>
                  <p className="text-[11px] text-caption mt-0.5 font-mono">Systems & ETL</p>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest-editorial text-caption block mb-1.5">
                    STATUS
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-sage"></span>
                    </span>
                    <p className="font-serif text-sm text-ink font-medium">Open to roles</p>
                  </div>
                  <p className="text-[10px] text-caption mt-0.5 font-mono">Graduating 2027</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll down footer indicator */}
        <div className="pt-12 sm:pt-16 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-caption">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 bg-rust rounded-full"></span>
            <span>SECTION 01 OF 08</span>
          </div>
          <a
            href="#about"
            className="group flex items-center gap-2 hover:text-ink transition-colors"
            aria-label="Scroll to Section 02"
          >
            <span>SCROLL TO READ</span>
            <ArrowDown size={12} className="group-hover:translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>
      </Container>
    </section>
  );
}
