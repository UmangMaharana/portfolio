'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';

export default function Education() {
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
    <section id="education" className="py-24 sm:py-32 border-b border-ink/10 bg-paper relative overflow-hidden">
      <Container size="wide">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-rust font-medium">06</span>
              <span className="text-[11px] font-mono uppercase tracking-widest-editorial text-caption">
                EDUCATION / ACHIEVEMENT
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink font-normal tracking-tight leading-[1.08]">
              An ongoing education.
            </h2>
          </motion.div>

          {/* Academic Records Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Primary Entry: Current Degree */}
            <motion.article
              variants={fadeInUp}
              className="lg:col-span-7 bg-cream/50 border border-ink/10 p-6 sm:p-8 space-y-4"
            >
              <div className="flex items-start justify-between gap-4 border-b border-ink/10 pb-4">
                <div className="flex-1">
                  <h3 className="font-serif text-2xl sm:text-3xl text-ink font-medium tracking-tight mb-2">
                    PARUL UNIVERSITY
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-ink/80 font-medium">
                    B.Tech. Computer Science & Engineering
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs text-caption tracking-wider block">
                    2023 — 2027
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-rust font-medium mt-1 block">
                    IN PROGRESS
                  </span>
                </div>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-caption">
                  CGPA
                </span>
                <span className="font-serif text-2xl text-ink font-medium">
                  7.50 / 10
                </span>
              </div>

              <p className="font-serif text-sm text-caption italic pt-2">
                Specialization in Data Analytics, AI/ML, Cloud Computing, and Software Engineering with a focus on practical system design and implementation.
              </p>
            </motion.article>

            {/* Achievement Entry */}
            <motion.article
              variants={fadeInUp}
              className="lg:col-span-5 border-l-2 border-sage/40 pl-6 space-y-3"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-caption block">
                  ACHIEVEMENT
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-ink font-medium tracking-tight">
                  ODOO HACKATHON
                </h3>
                <div className="flex items-center gap-2">
                  <span className="inline-block px-2.5 py-1 bg-sage/10 border border-sage/30 text-sage-dark font-mono text-xs uppercase tracking-wider font-medium">
                    Finalist
                  </span>
                </div>
              </div>

              <p className="font-serif text-sm text-caption italic leading-relaxed pt-2">
                Selected as a finalist in a competitive hackathon demonstrating problem-solving capabilities and software development skills.
              </p>
            </motion.article>
          </div>

          {/* Previous Education Archive */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 pt-12 border-t border-ink/10"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-caption block mb-6">
              PREVIOUS EDUCATION
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* 12th Grade */}
              <div className="space-y-2">
                <h4 className="font-serif text-base text-ink font-medium">
                  Mother&apos;s Public School, Bhubaneswar
                </h4>
                <div className="flex items-baseline gap-2 text-xs">
                  <span className="font-mono text-caption">12th, CBSE</span>
                  <span className="text-caption">·</span>
                  <span className="font-mono text-caption">2023</span>
                </div>
                <p className="font-mono text-sm text-ink/70">
                  62.60 / 100
                </p>
              </div>

              {/* 10th Grade */}
              <div className="space-y-2">
                <h4 className="font-serif text-base text-ink font-medium">
                  Shri LG Haria Multipurpose School, Vapi
                </h4>
                <div className="flex items-baseline gap-2 text-xs">
                  <span className="font-mono text-caption">10th, CBSE</span>
                  <span className="text-caption">·</span>
                  <span className="font-mono text-caption">2020</span>
                </div>
                <p className="font-mono text-sm text-ink/70">
                  85.40 / 100
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
