'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';

interface Capability {
  number: string;
  roman: string;
  title: string;
  technologies: string[];
}

const capabilities: Capability[] = [
  {
    number: '01',
    roman: 'I',
    title: 'DATA & ANALYTICS',
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'SQL',
      'PostgreSQL',
      'Data Analytics',
      'EDA',
      'Data Visualization',
      'Statistics',
    ],
  },
  {
    number: '02',
    roman: 'II',
    title: 'AI / ML',
    technologies: [
      'Machine Learning',
      'Large Language Models',
      'Prompt Engineering',
      'Generative AI',
      'Google Gemini API',
    ],
  },
  {
    number: '03',
    roman: 'III',
    title: 'CLOUD',
    technologies: [
      'AWS',
      'Amazon S3',
      'AWS Lambda',
      'AWS Glue',
      'AWS Step Functions',
      'Cloud Architecture',
    ],
  },
  {
    number: '04',
    roman: 'IV',
    title: 'ENGINEERING',
    technologies: [
      'Java',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Node.js',
      'Express.js',
      'Flask',
      'REST APIs',
      'MongoDB',
      'Prisma',
      'Git',
      'GitHub',
      'Data Structures & Algorithms',
      'Problem Solving',
    ],
  },
];

export default function Skills() {
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
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <section id="capabilities" className="py-24 sm:py-32 border-b border-ink/10 bg-paper relative overflow-hidden">
      {/* Subtle background watermark */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/4 pointer-events-none select-none opacity-[0.02] text-ink font-serif text-[22vw] leading-none font-bold"
      >
        IV
      </div>

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Section Header & Supporting Text */}
          <div className="lg:col-span-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="lg:sticky lg:top-32"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs text-rust font-medium">04</span>
                <span className="text-[11px] font-mono uppercase tracking-widest-editorial text-caption">
                  CAPABILITIES / TECHNICAL INDEX
                </span>
              </div>

              <motion.h2
                variants={fadeInUp}
                className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink font-normal tracking-tight leading-[1.08] mb-8"
              >
                What I work with.
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="font-serif text-base sm:text-lg text-caption leading-relaxed max-w-md"
              >
                A technical index of the primary tools, frameworks, and methodologies I use to build data-driven systems, AI products, and cloud infrastructure.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="mt-12 pt-8 border-t border-ink/10 hidden lg:block"
              >
                <span className="text-[10px] font-mono uppercase tracking-widest text-caption block mb-2">
                  INDEX NOTATION
                </span>
                <p className="text-xs font-serif text-ink/70 leading-relaxed">
                  Technologies are grouped by primary domain. Each entry represents tools and concepts actively applied in project work and professional contexts.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Capability Index List */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-7 space-y-12"
          >
            {capabilities.map((capability, index) => (
              <motion.article
                key={capability.number}
                variants={fadeInUp}
                className="group relative border-l-2 border-ink/10 pl-8 pb-12 last:pb-0 hover:border-rust/40 transition-colors duration-300"
              >
                {/* Large Background Roman Numeral */}
                <div
                  aria-hidden="true"
                  className="absolute -left-4 -top-2 text-[6rem] sm:text-[8rem] font-serif text-ink/[0.03] leading-none pointer-events-none select-none group-hover:text-rust/[0.06] transition-colors duration-300"
                >
                  {capability.roman}
                </div>

                {/* Capability Header */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-mono text-xs text-rust font-medium tracking-wider">
                      {capability.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-caption">
                      CAPABILITY DOMAIN
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-ink font-medium tracking-tight group-hover:text-rust transition-colors duration-300">
                    {capability.title}
                  </h3>
                </div>

                {/* Technology List */}
                <div className="relative z-10">
                  <p className="font-sans text-base text-ink/80 leading-relaxed">
                    {capability.technologies.map((tech, i) => (
                      <React.Fragment key={tech}>
                        {i > 0 && (
                          <span className="text-rust/40 mx-1.5 select-none">·</span>
                        )}
                        <span className="group-hover:text-ink transition-colors duration-200">
                          {tech}
                        </span>
                      </React.Fragment>
                    ))}
                  </p>
                </div>

                {/* Thin Bottom Rule */}
                {index < capabilities.length - 1 && (
                  <div className="absolute bottom-0 left-8 right-0 h-px bg-ink/5 group-hover:bg-rust/20 transition-colors duration-300" />
                )}
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
