import React from 'react';
import { cn } from '@/lib/utils';

interface EditorialDividerProps {
  className?: string;
  label?: string;
  accent?: 'default' | 'rust' | 'navy' | 'subtle';
}

export default function EditorialDivider({
  className,
  label,
  accent = 'default',
}: EditorialDividerProps) {
  const accentBorder = {
    default: 'border-ink/10',
    rust: 'border-rust/30',
    navy: 'border-navy/20',
    subtle: 'border-warm-gray/20',
  };

  if (label) {
    return (
      <div className={cn('relative my-16 md:my-24 flex items-center', className)}>
        <div className={cn('flex-grow border-t', accentBorder[accent])} />
        <span className="flex-shrink mx-4 text-[10px] font-mono tracking-widest-editorial uppercase text-caption">
          {label}
        </span>
        <div className={cn('flex-grow border-t', accentBorder[accent])} />
      </div>
    );
  }

  return (
    <hr className={cn('my-16 md:my-24 border-0 border-t', accentBorder[accent], className)} />
  );
}
