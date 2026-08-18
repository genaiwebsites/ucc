'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileText, CheckCircle } from 'lucide-react';
import { NumberTicker } from '@/components/ui/NumberTicker';
import { ShinyText } from '@/components/ui/ShinyText';
import { SplitText } from '@/components/ui/SplitText';
import { TiltedCard } from '@/components/ui/TiltedCard';

export default function Hero() {
  const metrics = [
    {
      value: 55,
      suffix: '+',
      label: 'Years Active',
      subtext: 'Est. 1969 · Brabourne Rd'
    },
    {
      value: 100,
      suffix: 'K+',
      label: 'Sq.Ft Storage',
      subtext: 'Dankuni & Taratala Hubs'
    },
    {
      value: 25,
      suffix: '+',
      label: 'Global Principals',
      subtext: 'Direct Indenting Channels'
    },
    {
      value: 100,
      suffix: '%',
      label: 'ASTM Traceable',
      subtext: 'Batch Manufacturer COA'
    }
  ];

  return (
    <section className="relative pt-20 pb-8 md:pt-24 md:pb-10 overflow-hidden border-b border-border/80" id="hero">
      
      {/* 3D Molecular Polymer Structure - Smooth Full Bleed Fade */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full pointer-events-none z-0">
        <div className="relative w-full h-full">
          <Image 
            src="/hero-bg.png" 
            alt="Polymer Molecular Structure & Covalent Bonds" 
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center lg:object-right opacity-85 dark:opacity-95 contrast-105"
          />
          {/* Smooth Left & Bottom Gradient Fades */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent/30" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        
        {/* Main Content Area */}
        <div className="max-w-2xl lg:max-w-3xl mb-6 md:mb-8">
          
          {/* Scientific Badge with ShinyText */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-card/90 border border-border rounded-xs mb-3 text-[10px] font-mono text-muted-foreground"
          >
            <CheckCircle className="w-3 h-3 text-brand" />
            <ShinyText text="INSTITUTIONAL RAW MATERIAL SUPPLY · EST. 1969" speed={4} />
          </motion.div>

          {/* Main Headline with SplitText Blur Reveal */}
          <h1 className="font-display font-bold text-2xl sm:text-3xl lg:text-[40px] text-foreground leading-[1.14] mb-3 tracking-tight">
            <SplitText text="Precision Polymers & Heavy Industrial Chemicals." delay={20} />
          </h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed mb-5 max-w-xl"
          >
            Eastern India&apos;s institutional importing, stockist, and indenting partner for synthetic elastomers, natural rubber, carbon black, and rubber chemicals across Tier-1 tire, belting, and footwear compounding lines.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              href="#products"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-foreground text-background font-sans font-semibold text-xs uppercase tracking-wider hover:bg-brand hover:text-primary-foreground transition-all rounded-xs shadow-xs"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-border bg-card/80 text-foreground font-sans font-semibold text-xs uppercase tracking-wider hover:border-foreground transition-all rounded-xs"
            >
              <FileText className="w-3.5 h-3.5 text-muted-foreground" />
              <span>Contact Sales Desk</span>
            </Link>
          </motion.div>

        </div>

        {/* 4 Compact Interactive TiltedCard Statistics Grid (ReactBits 3D physics) */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3"
        >
          {metrics.map((item) => (
            <TiltedCard
              key={item.label}
              maxTilt={6}
              scale={1.02}
              className="bg-card/75 backdrop-blur-xs border border-border/80 p-2.5 sm:p-3 rounded-xs hover:border-brand/50 transition-colors"
            >
              <div className="space-y-0.5">
                <div className="flex items-center gap-0.5 font-mono text-lg sm:text-xl font-bold text-foreground leading-tight">
                  <NumberTicker value={item.value} />
                  <span className="text-brand">{item.suffix}</span>
                </div>
                <div className="font-sans text-[11px] text-foreground uppercase tracking-wider font-semibold">
                  {item.label}
                </div>
                <div className="text-[10px] font-mono text-muted-foreground">
                  {item.subtext}
                </div>
              </div>
            </TiltedCard>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
