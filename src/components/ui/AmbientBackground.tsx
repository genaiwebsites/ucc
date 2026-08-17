'use client';

import { Particles } from '@/components/ui/Particles';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Dynamic Molecular Particle Mesh */}
      <Particles quantity={45} staticity={40} ease={40} className="opacity-40 dark:opacity-60" />

      {/* Atmospheric Multi-Chromic Ambient Light Wells */}
      {/* Amber Vulcanization Warmth (Top Right) */}
      <div 
        className="absolute -top-[20%] -right-[15%] w-[65vw] h-[65vw] rounded-full blur-[140px] opacity-25 dark:opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, rgba(217, 119, 6, 0.15) 50%, transparent 70%)'
        }}
      />

      {/* Petrochemical Cobalt/Cyan Well (Mid Left) */}
      <div 
        className="absolute top-[35%] -left-[20%] w-[60vw] h-[60vw] rounded-full blur-[150px] opacity-20 dark:opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.35) 0%, rgba(37, 99, 235, 0.15) 50%, transparent 70%)'
        }}
      />

      {/* Quality Verification Emerald Well (Lower Right) */}
      <div 
        className="absolute top-[75%] -right-[15%] w-[55vw] h-[55vw] rounded-full blur-[140px] opacity-20 dark:opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, rgba(5, 150, 105, 0.1) 50%, transparent 70%)'
        }}
      />
    </div>
  );
}
