'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';

export default function Experience() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="experience" className="py-24 sm:py-32 border-b border-ink/10 bg-cream/30 relative overflow-hidden">
      {/* Subtle background decorative element */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-1/3 pointer-events-none select-none opacity-[0.015] text-ink font-serif text-[20vw] leading-none font-bold"
      >
        05
      </div>

      <Container size="wide">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
        >
          {/* Left Column: Section Header */}
          <div className="lg:col-span-4">
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs text-rust font-medium">05</span>
                <span className="text-[11px] font-mono uppercase tracking-widest-editorial text-caption">
                  EXPERIENCE / ARCHIVE
                </span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink font-normal tracking-tight leading-[1.08] mb-6">
                Where I&apos;ve worked.
              </h2>

              <p className="font-serif text-base text-caption italic leading-relaxed max-w-md">
                Professional experience applying data science methodologies to real-world business datasets.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Experience Entry */}
          <div className="lg:col-span-8">
            <motion.article
              variants={fadeInUp}
              className="border-l-2 border-rust/40 pl-8 space-y-6"
            >
              {/* Header: Organization, Role, Dates */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-ink font-medium tracking-tight">
                    FINLATICS
                  </h3>
                  <span className="font-mono text-xs text-caption tracking-wider">
                    JUL 2024 — SEP 2024
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-rust font-medium">
                    DATA SCIENCE INTERN
                  </span>
                  <span className="text-caption">·</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-caption">
                    FINLATICS DATA SCIENCE WITH PYTHON EXPERIENCE PROGRAM
                  </span>
                </div>
              </div>

              {/* Thin Rule */}
              <div className="h-px bg-ink/10" />

              {/* Description */}
              <div className="space-y-4">
                <p className="font-serif text-base sm:text-lg text-ink/85 leading-relaxed">
                  Completed a comprehensive data science internship focused on analyzing real-world banking datasets using Python-based statistical and analytical methodologies.
                </p>

                {/* Key Contributions */}
                <div className="space-y-3 pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-caption block">
                    KEY CONTRIBUTIONS
                  </span>
                  <ul className="space-y-2.5 text-sm text-ink/80 font-sans">
                    <li className="flex items-start gap-3">
                      <span className="text-rust mt-1 flex-shrink-0">›</span>
                      <span>
                        Analyzed a banking dataset of approximately <strong className="font-medium text-ink">80,000 rows across 20 columns</strong> using Python, Pandas, and NumPy
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rust mt-1 flex-shrink-0">›</span>
                      <span>
                        Performed data cleaning, statistical analysis, exploratory data analysis, and visualization to surface actionable business insights
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rust mt-1 flex-shrink-0">›</span>
                      <span>
                        Analyzed the relationship between customer age groups and loan uptake to identify statistically significant patterns for targeted lending strategies
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rust mt-1 flex-shrink-0">›</span>
                      <span>
                        Delivered findings through a structured analysis report and presentation to stakeholders
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Technical Stack */}
                <div className="pt-4 border-t border-ink/5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-caption block mb-3">
                    TECHNOLOGIES APPLIED
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Pandas', 'NumPy', 'Data Cleaning', 'EDA', 'Statistical Analysis', 'Data Visualization'].map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 bg-paper border border-ink/10 text-ink/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
