'use client';

import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

export default function Mission() {
  return (
    <section id="mission" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-[5vw]">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[2px] bg-amber rounded-full" />
                <span className="font-sans text-xs tracking-widest uppercase text-foreground/60 font-semibold">
                  Objective
                </span>
              </div>
              
              <h2 className="font-sans font-medium text-[clamp(40px,6vw,80px)] tracking-tight text-foreground leading-[1.05] mb-16">
                Catalyzing<br />
                <span className="text-amber">Industrial<br />Growth.</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center group-hover:bg-amber/10 group-hover:scale-110 transition-all duration-500">
                      <Target className="w-5 h-5 text-foreground/60 group-hover:text-amber transition-colors duration-500" />
                    </div>
                    <h3 className="font-sans text-lg font-semibold tracking-wide uppercase text-foreground group-hover:text-amber transition-colors duration-500">
                      The Mission
                    </h3>
                  </div>
                  <p className="text-base font-sans text-foreground/70 leading-relaxed">
                    To provide the chemical backbone for Eastern India&apos;s manufacturing sector. We don&apos;t just supply raw materials; we supply reliability. Our mission is to ensure that no production line ever halts due to supply chain failure.
                  </p>
                </div>
                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center group-hover:bg-amber/10 group-hover:scale-110 transition-all duration-500">
                      <Eye className="w-5 h-5 text-foreground/60 group-hover:text-amber transition-colors duration-500" />
                    </div>
                    <h3 className="font-sans text-lg font-semibold tracking-wide uppercase text-foreground group-hover:text-amber transition-colors duration-500">
                      The Vision
                    </h3>
                  </div>
                  <p className="text-base font-sans text-foreground/70 leading-relaxed">
                    To remain the most trusted, technologically advanced, and precision-driven distribution house in the subcontinent, expanding our chemical portfolio while maintaining absolute logistical supremacy.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Box */}
          <div className="w-full lg:w-1/3 flex items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="w-full bg-secondary/30 rounded-[2rem] p-10 lg:p-12 shadow-lg border border-border/30"
            >
              <div className="font-sans text-xs tracking-widest uppercase text-foreground/60 font-semibold mb-6">
                Communicate
              </div>
              <div className="font-sans font-medium text-3xl text-foreground mb-12 leading-tight">
                Initiate technical consultation.
              </div>
              
              <button className="group w-full bg-amber hover:bg-amber/90 text-background rounded-full p-4 flex items-center justify-center gap-4 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1">
                <span className="font-sans text-sm tracking-widest uppercase font-bold">
                  Contact Command
                </span>
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
