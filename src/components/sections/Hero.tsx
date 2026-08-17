'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" id="hero">
      
      {/* Background Graphic - Refined & Subtle */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-25 [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]">
        <Image 
          src="/hero-bg.png" 
          alt="Industrial Polymer Science" 
          fill
          priority
          className="object-cover object-right"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Main Content Area */}
        <div className="max-w-3xl">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-widest text-amber uppercase font-semibold mb-4"
          >
            Raw Material Distribution · Since 1969
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6"
          >
            Precision Polymers &amp; Industrial Chemicals.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed mb-8 max-w-2xl"
          >
            Importers, stockists, and indenting agents for synthetic rubber, natural rubber, carbon black, and rubber chemicals across Eastern India and nationwide.
          </motion.p>

          {/* Clean Rectangular Action Buttons - Zero Pill Slop */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <Link
              href="#products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-foreground text-background font-sans font-semibold text-xs uppercase tracking-wider hover:bg-amber hover:text-foreground transition-colors"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-sm border border-border bg-card text-foreground font-sans font-semibold text-xs uppercase tracking-wider hover:border-foreground transition-colors"
            >
              Contact Sales Desk
            </Link>
          </motion.div>

        </div>

        {/* Minimalist 3-Metric Rule - Clean Typographic Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-border"
        >
          <div>
            <div className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-1">
              55<span className="text-amber">+</span>
            </div>
            <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
              Years Active Legacy
            </div>
          </div>

          <div>
            <div className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-1">
              100K<span className="text-amber">+</span>
            </div>
            <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
              Sq.Ft Covered Storage
            </div>
          </div>

          <div>
            <div className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-1">
              25<span className="text-amber">+</span>
            </div>
            <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
              Global Principals
            </div>
          </div>

          <div>
            <div className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-1">
              100<span className="text-amber">%</span>
            </div>
            <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
              Batch COA Traceability
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
