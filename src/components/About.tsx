'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';

export default function About() {
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

  const stats = [
    { id: '01', value: '80K+', label: 'Records analyzed', note: 'Banking dataset EDA & statistics' },
    { id: '02', value: '10+', label: 'Backend API endpoints', note: 'AstraIQ platform architecture' },
    { id: '03', value: '100%', label: 'Backend test pass rate', note: 'Automated test suite across modules' },
    { id: '04', value: '2027', label: 'Expected graduation', note: 'B.Tech CSE, Parul University' },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 border-b border-ink/10 bg-paper">
      <Container size="wide">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
        >
          {/* Left Editorial Header Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs text-rust font-medium">02</span>
                <span className="text-[11px] font-mono uppercase tracking-widest-editorial text-caption">
                  ABOUT / THE LEDE
                </span>
              </div>
              <motion.h2
                variants={fadeInUp}
                className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink font-normal tracking-tight leading-[1.08] mb-8"
              >
                A little about me.
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="font-serif text-lg text-caption italic max-w-md leading-relaxed"
              >
                &ldquo;Understanding systems from the database layer to the AI interface, and building practical software that solves real data challenges.&rdquo;
              </motion.p>
            </div>

            {/* Editorial Metadata Footnote */}
            <div className="hidden lg:block pt-12 border-t border-ink/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-caption block mb-1">
                ACADEMIC AFFILIATION
              </span>
              <p className="font-serif text-sm text-ink">
                Department of Computer Science & Engineering
              </p>
              <p className="text-xs text-caption font-mono">Parul University · CGPA 7.50 / 10</p>
            </div>
          </div>

          {/* Right Narrative & Statistics Column (7 cols) */}
          <div className="lg:col-span-7 space-y-12">
            {/* Narrative Prose */}
            <motion.div
              variants={fadeInUp}
              className="space-y-6 font-serif text-lg sm:text-xl text-ink/85 leading-relaxed"
            >
              <p>
                I&apos;m a final-year Computer Science undergraduate who enjoys turning raw data and complex system requirements into tangible, working software.
              </p>
              <p>
                My work spans data analytics, machine learning, cloud-native pipelines, and full-stack software development. Whether analyzing large-scale datasets with Python and Pandas, designing automated ETL workflows on AWS, or integrating LLM interfaces with Flask and PostgreSQL, I gravitate towards solving practical engineering problems.
              </p>
              <p>
                I value clean architecture, maintainable systems, and deliberate craftsmanship. I am currently seeking opportunities where I can apply my skills across data, AI, and cloud computing to create measurable impact.
              </p>
            </motion.div>

            {/* Editorial Statistics Grid */}
            <motion.div
              variants={fadeInUp}
              className="pt-8 border-t border-ink/10 grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
              {stats.map((stat) => (
                <div key={stat.id} className="border-l-2 border-rust/40 pl-5 space-y-1">
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-3xl sm:text-4xl text-ink font-medium tracking-tight">
                      {stat.value}
                    </span>
                    <span className="font-mono text-[10px] text-caption uppercase tracking-wider">
                      STAT {stat.id}
                    </span>
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-ink font-medium">
                    {stat.label}
                  </div>
                  <div className="text-[11px] font-serif italic text-caption">
                    {stat.note}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
