'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  number?: string;
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'split';
}

export default function SectionHeader({
  number,
  label,
  title,
  subtitle,
  className,
  align = 'left',
}: SectionHeaderProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  if (align === 'split') {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className={cn('mb-16 md:mb-24', className)}
      >
        <div className="flex items-center justify-between border-b border-ink/10 pb-4 mb-8">
          <div className="flex items-center gap-3">
            {number && (
              <span className="font-mono text-xs text-rust font-medium tracking-wider">
                {number}
              </span>
            )}
            <span className="text-[11px] font-mono uppercase tracking-widest-editorial text-caption">
              {label}
            </span>
          </div>
          <span className="text-[10px] font-mono uppercase text-warm-gray tracking-widest hidden sm:inline-block">
            UMANG MAHARANA · VOL. 2027
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-baseline">
          <div className="lg:col-span-7">
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink font-normal tracking-tight leading-[1.08]"
            >
              {title}
            </motion.h2>
          </div>
          {subtitle && (
            <div className="lg:col-span-5">
              <motion.p
                variants={fadeInUp}
                className="font-serif text-lg md:text-xl text-caption italic leading-relaxed"
              >
                {subtitle}
              </motion.p>
            </div>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={cn('mb-14 md:mb-20', align === 'center' && 'text-center', className)}
    >
      <div className={cn(
        "flex items-center gap-3 mb-4",
        align === 'center' && 'justify-center'
      )}>
        {number && (
          <span className="font-mono text-xs text-rust font-medium tracking-wider">
            {number}
          </span>
        )}
        <span className="text-[11px] font-mono uppercase tracking-widest-editorial text-caption">
          {label}
        </span>
      </div>

      <motion.h2
        variants={fadeInUp}
        className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink font-normal tracking-tight leading-[1.1]"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={cn(
            "mt-4 font-serif text-base sm:text-lg md:text-xl text-caption italic leading-relaxed max-w-2xl",
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
