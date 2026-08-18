'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export function ShinyText({
  text,
  disabled = false,
  speed = 5,
  className = '',
}: ShinyTextProps) {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={cn(
        'inline-block bg-clip-text text-transparent',
        disabled
          ? 'text-foreground'
          : 'bg-gradient-to-r from-foreground via-brand-accent to-foreground bg-[length:200%_auto] animate-shiny-text',
        className
      )}
      style={{
        animationDuration,
      }}
    >
      {text}
    </span>
  );
}
