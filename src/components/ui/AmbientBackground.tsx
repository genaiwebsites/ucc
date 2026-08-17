'use client';

import { Particles } from '@/components/ui/Particles';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Subtle Monochrome Molecular Particles */}
      <Particles quantity={35} staticity={50} ease={50} className="opacity-30 dark:opacity-40" />

      {/* Subtle Deep Navy/Slate Ambient Depth (No cartoonish color blobs) */}
      <div 
        className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full blur-[160px] opacity-15 dark:opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, transparent 70%)'
        }}
      />
    </div>
  );
}
