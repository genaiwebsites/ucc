'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[90vh] w-full text-foreground overflow-hidden flex flex-col justify-center" id="hero">
      
      {/* Background Graphic with Parallax and Seamless Bottom Fade */}
      {/* STATIC mask wrapper ensures the fade perfectly aligns with the bottom edge of the section */}
      <div className="absolute inset-0 z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]">
        {/* PARALLAX image moves inside the masked area. Taller inset-[-20%] to prevent edges showing during parallax */}
        <motion.div style={{ y }} className="absolute inset-[-20%]">
          <Image 
            src="/hero-bg.png" 
            alt="Abstract Polymer Chemistry" 
            fill
            priority
            className="object-cover opacity-[0.85] mix-blend-screen"
          />
          {/* Left-to-right gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent/10" />
        </motion.div>
      </div>

      {/* Left-Aligned Premium Typography */}
      <motion.div style={{ opacity }} className="w-full px-[5vw] relative z-10 flex flex-col justify-center pt-32 pb-24 lg:pb-32">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-sans font-medium text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.05] text-foreground mb-8">
              <span className="block mb-1 text-foreground/90">Precision</span>
              <span className="block mb-1 text-foreground/70">Polymers &</span>
              <span className="block text-amber">Chemistry.</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-foreground/80 font-sans font-light leading-relaxed max-w-2xl"
          >
            Importers, distributors, and indenters of synthetic rubber, natural rubber, and critical rubber chemicals across Eastern India.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
