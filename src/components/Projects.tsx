'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Container from './Container';
import SectionHeader from './SectionHeader';

export default function Projects() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="work" className="py-24 sm:py-32 border-b border-ink/10 bg-paper">
      <Container size="wide">
        {/* Section Header */}
        <SectionHeader
          number="03"
          label="SELECTED WORK / PORTFOLIO"
          title="Selected work."
          subtitle="A few things I've been building across AI, data, cloud, and software."
          align="split"
        />

        <div className="space-y-28 md:space-y-36">
          {/* ============================================================ */}
          {/* FEATURE 01: ASTRAIQ */}
          {/* ============================================================ */}
          <article className="border-t border-ink/15 pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Left Column: Project Narrative & Technical Details */}
              <div className="lg:col-span-6 space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-rust font-medium">FEATURE 01</span>
                    <span className="text-[10px] font-mono uppercase tracking-widest-editorial text-caption">
                      SOLO PROJECT · ACTIVE DEVELOPMENT
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink font-normal tracking-tight">
                    ASTRAIQ
                  </h3>
                  <p className="font-serif text-lg text-caption italic mt-2">
                    AI-Powered Intelligent Assistant Platform
                  </p>
                </div>

                <p className="font-serif text-base sm:text-lg text-ink/80 leading-relaxed">
                  An intelligent assistant platform engineered to turn business datasets into explainable insights and actionable recommendations through an interactive AI assistant dashboard.
                </p>

                {/* Key Engineering Details */}
                <div className="border-y border-ink/10 py-6 space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest-editorial text-caption block">
                    KEY ENGINEERING HIGHLIGHTS
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs text-ink/85 font-mono">
                    <li className="flex items-start gap-2">
                      <span className="text-rust">›</span> 10+ backend API endpoints
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rust">›</span> JWT auth & session management
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rust">›</span> Multi-tenant workspace architecture
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rust">›</span> Google Gemini 2.5 Flash integration
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rust">›</span> Pluggable LLM provider system
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rust">›</span> 100% automated backend test pass rate
                    </li>
                  </ul>
                </div>

                {/* Tech Stack Metadata */}
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-caption block mb-3">
                    TECHNOLOGIES
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Vite', 'Flask', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Google Gemini 2.5 Flash', 'Tailwind CSS'].map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 bg-cream border border-ink/10 text-ink/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-ink hover:text-rust transition-colors"
                  >
                    <span>Request Demonstration</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

              {/* Right Column: Abstract Editorial Visual Artwork */}
              <div className="lg:col-span-6 bg-cream/70 border border-ink/10 p-6 sm:p-8 relative">
                <div className="flex items-center justify-between border-b border-ink/10 pb-3 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-caption">
                    FIG. 01 — SYSTEM ARCHITECTURE
                  </span>
                  <span className="text-[10px] font-mono text-rust uppercase">
                    ASTRAIQ CORE
                  </span>
                </div>

                {/* Abstract Visual Dashboard representation */}
                <div className="space-y-4 font-mono text-xs">
                  <div className="bg-paper border border-ink/10 p-4 space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-caption border-b border-ink/5 pb-2">
                      <span>[DATASET INGESTION]</span>
                      <span className="text-sage font-semibold">VALIDATED</span>
                    </div>
                    <div className="h-1.5 w-full bg-cream rounded-none overflow-hidden">
                      <div className="h-full bg-rust w-4/5"></div>
                    </div>
                    <p className="font-serif italic text-caption text-xs">
                      Parsing schema, running automated validation & statistical profiling...
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-paper border border-ink/10 p-4 space-y-2">
                      <span className="text-[10px] text-caption uppercase block">LLM ENGINE</span>
                      <p className="font-serif text-sm font-medium text-ink">Gemini 2.5 Flash</p>
                      <span className="text-[10px] text-sage block">Provider: Active</span>
                    </div>
                    <div className="bg-paper border border-ink/10 p-4 space-y-2">
                      <span className="text-[10px] text-caption uppercase block">AUTH LAYER</span>
                      <p className="font-serif text-sm font-medium text-ink">JWT & Refresh</p>
                      <span className="text-[10px] text-sage block">Sessions: Secured</span>
                    </div>
                  </div>

                  <div className="bg-paper border border-ink/10 p-4 space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-caption">TEST COVERAGE</span>
                      <span className="text-rust font-semibold">100% PASS RATE</span>
                    </div>
                    <div className="grid grid-cols-6 gap-1 pt-1">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="h-4 bg-sage/30 border border-sage/40 flex items-center justify-center text-[9px] text-sage-dark">
                          ✓
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* ============================================================ */}
          {/* FEATURE 02: CPJOP */}
          {/* ============================================================ */}
          <article className="border-t border-ink/15 pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Left Column: Abstract Diagram */}
              <div className="lg:col-span-6 bg-cream/70 border border-ink/10 p-6 sm:p-8 relative order-2 lg:order-1">
                <div className="flex items-center justify-between border-b border-ink/10 pb-3 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-caption">
                    FIG. 02 — DATA PIPELINE FLOW
                  </span>
                  <span className="text-[10px] font-mono text-navy uppercase">
                    AWS CLOUD PIPELINE
                  </span>
                </div>

                {/* Pipeline Flowchart Visual */}
                <div className="space-y-4 font-mono text-xs">
                  <div className="bg-paper border border-ink/10 p-3.5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-caption block">01 / INGESTION</span>
                      <span className="font-serif font-medium text-ink">AWS S3 Raw Storage</span>
                    </div>
                    <span className="text-[10px] text-caption font-mono">10K+ Records</span>
                  </div>

                  <div className="text-center text-ink/40 text-xs">↓</div>

                  <div className="bg-paper border border-ink/10 p-3.5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-caption block">02 / INTELLIGENT ROUTING</span>
                      <span className="font-serif font-medium text-ink">Gemini Decision Engine (Lambda vs Glue)</span>
                    </div>
                    <span className="text-[10px] text-navy font-mono">AWS Step Functions</span>
                  </div>

                  <div className="text-center text-ink/40 text-xs">↓</div>

                  <div className="bg-paper border border-ink/10 p-3.5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-caption block">03 / PERSISTENCE</span>
                      <span className="font-serif font-medium text-ink">MongoDB Metadata Storage</span>
                    </div>
                    <span className="text-[10px] text-sage font-mono">Schema Validated</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Project Narrative & Technical Details */}
              <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-rust font-medium">FEATURE 02</span>
                    <span className="text-[10px] font-mono uppercase tracking-widest-editorial text-caption">
                      TEAM OF 2 · ACTIVE DEVELOPMENT
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink font-normal tracking-tight">
                    CPJOP
                  </h3>
                  <p className="font-serif text-lg text-caption italic mt-2">
                    Cross-Platform Job Optimization Project
                  </p>
                </div>

                <p className="font-serif text-base sm:text-lg text-ink/80 leading-relaxed">
                  An AI-driven cloud optimization engine that analyzes dataset characteristics and dynamically recommends the most cost-effective AWS processing architecture (Lambda vs. Glue) for cloud ETL workloads.
                </p>

                {/* Key Engineering Details */}
                <div className="border-y border-ink/10 py-6 space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest-editorial text-caption block">
                    KEY ENGINEERING HIGHLIGHTS
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs text-ink/85 font-mono">
                    <li className="flex items-start gap-2">
                      <span className="text-rust">›</span> S3 → Lambda / Glue → MongoDB
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rust">›</span> AWS Step Functions orchestration
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rust">›</span> Gemini-powered workload analysis
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rust">›</span> Prototype on 10,000+ records
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rust">›</span> Designed for GB/TB scale with PySpark
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rust">›</span> Est. 50–70% planning effort reduction
                    </li>
                  </ul>
                  <p className="text-[11px] font-serif italic text-caption pt-1">
                    * Note: 50–70% figure represents an estimated architectural planning reduction from project benchmarks.
                  </p>
                </div>

                {/* Tech Stack Metadata */}
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-caption block mb-3">
                    TECHNOLOGIES
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'AWS S3', 'AWS Lambda', 'AWS Glue', 'AWS Step Functions', 'MongoDB', 'Google Gemini API'].map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 bg-cream border border-ink/10 text-ink/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* ============================================================ */}
          {/* FEATURE 03: FINLATICS (Data Science Internship Case Study) */}
          {/* ============================================================ */}
          <article className="border-t border-ink/15 pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-rust font-medium">CASE STUDY</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest-editorial text-caption">
                    PROFESSIONAL EXPERIENCE
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
                  FINLATICS
                </h3>
                <div className="space-y-1">
                  <p className="text-xs font-mono uppercase tracking-wider text-ink font-medium">
                    Data Science Intern
                  </p>
                  <p className="text-xs font-mono text-caption">
                    Jul 2024 — Sep 2024
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <p className="font-serif text-base sm:text-lg text-ink/85 leading-relaxed">
                  Conducted comprehensive exploratory data analysis on a banking dataset comprising approximately 80,000 records across 20 attributes using Python, Pandas, and NumPy.
                </p>

                <div className="bg-cream/50 border-l-2 border-rust/40 p-4 font-serif italic text-caption text-sm leading-relaxed">
                  Key Focus: Analyzed customer demographic segments, age distributions, and their correlation with loan uptake to identify statistically significant patterns for targeted lending decisions.
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {['Python', 'Pandas', 'NumPy', 'Exploratory Data Analysis', 'Statistical Modeling', 'Data Visualization', 'Report Delivery'].map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2.5 py-1 bg-paper border border-ink/10 text-caption"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
