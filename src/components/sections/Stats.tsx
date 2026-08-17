'use client';

import { motion } from 'framer-motion';

export default function Stats() {
  return (
    <section className="relative z-20 flex justify-center w-full px-[5vw] -mt-12 md:-mt-24 pb-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl flex flex-wrap items-center justify-around gap-8 md:gap-4 text-center py-8"
      >
        
        <div className="flex flex-col items-center">
          <div className="font-sans font-medium text-6xl text-foreground drop-shadow-sm mb-3">
            55<span className="text-amber">+</span>
          </div>
          <div className="font-sans text-[10px] sm:text-xs tracking-widest uppercase text-foreground/60 font-semibold">
            Years Active
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="font-sans font-medium text-6xl text-foreground drop-shadow-sm mb-3">
            25<span className="text-amber">+</span>
          </div>
          <div className="font-sans text-[10px] sm:text-xs tracking-widest uppercase text-foreground/60 font-semibold">
            Global Partners
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="font-sans font-medium text-6xl text-foreground drop-shadow-sm mb-3">
            4
          </div>
          <div className="font-sans text-[10px] sm:text-xs tracking-widest uppercase text-foreground/60 font-semibold">
            Sister Concerns
          </div>
        </div>

      </motion.div>
    </section>
  );
}
