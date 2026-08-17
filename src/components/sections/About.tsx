'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Building2, Globe2, Users2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-[5vw]">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Section Header */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[2px] bg-amber rounded-full" />
                <span className="font-sans text-xs tracking-widest uppercase text-foreground/60 font-semibold">
                  Corporate Overview
                </span>
              </div>
              
              <h2 className="font-sans font-medium text-4xl lg:text-5xl xl:text-6xl tracking-tight text-foreground leading-[1.1]">
                Built on
                <br />
                <span className="text-amber">unbroken trust.</span>
              </h2>
            </motion.div>
          </div>

          {/* Content Block */}
          <div className="w-full lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed mb-8">
                Founded in 1969, Usha Commercial Corporation stands as Eastern India&apos;s oldest and most formidable distribution partner in the polymer and rubber sector. What began as a trading vision has evolved into a cornerstone of industrial manufacturing supply chains.
              </p>
              <p className="text-base text-foreground/60 font-sans leading-relaxed">
                We represent global chemical giants, delivering mission-critical raw materials to manufacturers who refuse to compromise on quality. Our logistical precision ensures continuous supply for continuous production.
              </p>
            </motion.div>
          </div>

        </div>

        {/* Soft Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24">
          {[
            { value: "55+", label: "Years Experience", icon: ShieldCheck },
            { value: "3", label: "Strategic Warehouses", icon: Building2 },
            { value: "25+", label: "Global Associates", icon: Globe2 },
            { value: "100+", label: "Active Enterprise Clients", icon: Users2 }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="bg-secondary/20 p-8 rounded-2xl hover:bg-secondary/40 transition-all duration-500 hover:-translate-y-2 group flex flex-col justify-between"
            >
              <stat.icon className="w-8 h-8 text-amber/60 group-hover:text-amber mb-6 group-hover:scale-110 transition-all duration-500" />
              <div>
                <div className="font-sans font-semibold text-4xl md:text-5xl mb-3 text-foreground group-hover:text-amber transition-colors duration-500">
                  {stat.value}
                </div>
                <div className="font-sans text-xs tracking-widest uppercase text-foreground/60 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
