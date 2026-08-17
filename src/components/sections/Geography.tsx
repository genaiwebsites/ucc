'use client';

import { motion } from 'framer-motion';

export default function Geography() {
  return (
    <section id="geography" className="relative bg-secondary/5 py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-[5vw]">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Info Panel */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[2px] bg-amber rounded-full" />
                <span className="font-sans text-xs tracking-widest uppercase text-foreground/60 font-semibold">
                  Territory
                </span>
              </div>
              
              <h2 className="font-sans font-medium text-4xl lg:text-5xl xl:text-6xl tracking-tight text-foreground leading-[1.1] mb-8">
                Eastern<br /><span className="text-amber">Dominance.</span>
              </h2>
              
              <p className="text-lg font-sans text-foreground/70 leading-relaxed mb-12 max-w-lg">
                Our logistical footprint commands the entirety of Eastern India. From critical ports to deep industrial corridors, we guarantee uninterrupted supply velocity.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {['Kolkata', 'Bhubaneswar', 'Guwahati', 'Jamshedpur', 'Patna', 'Ranchi'].map((city, i) => (
                  <motion.div 
                    key={city}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-amber/80 shadow-[0_0_8px_var(--amber)]" />
                    <span className="font-sans text-sm font-medium tracking-wide uppercase text-foreground">{city}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Visual Panel - Elegant Map abstraction */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-lg aspect-square bg-background rounded-[2rem] p-8 shadow-xl border border-border/40 overflow-hidden group"
            >
              {/* Soft background gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 to-transparent" />
              
              <div className="relative z-10 w-full h-full flex flex-col">
                <div className="flex-1 relative">
                  {/* HQ Marker */}
                  <div className="absolute top-[35%] left-[55%]">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-12 h-12 bg-amber/20 rounded-full animate-ping" />
                      <div className="w-4 h-4 bg-amber rounded-full shadow-[0_0_15px_var(--amber)]" />
                      <div className="absolute left-6 whitespace-nowrap font-sans text-xs font-bold tracking-widest text-amber uppercase">
                        Kolkata HQ
                      </div>
                    </div>
                  </div>

                  {/* Other Nodes */}
                  <div className="absolute top-[50%] left-[40%] w-2 h-2 bg-foreground/40 rounded-full" />
                  <div className="absolute top-[20%] left-[70%] w-2 h-2 bg-foreground/40 rounded-full" />
                  <div className="absolute top-[65%] left-[45%] w-2 h-2 bg-foreground/40 rounded-full" />
                  <div className="absolute top-[40%] left-[30%] w-2 h-2 bg-foreground/40 rounded-full" />
                  
                  {/* Connecting lines (SVG) */}
                  <svg className="absolute inset-0 w-full h-full stroke-foreground/10 fill-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M55,35 Q40,50 40,50" strokeWidth="0.5" />
                    <path d="M55,35 Q70,20 70,20" strokeWidth="0.5" />
                    <path d="M55,35 Q45,65 45,65" strokeWidth="0.5" />
                    <path d="M55,35 Q30,40 30,40" strokeWidth="0.5" />
                  </svg>
                </div>
                
                <div className="mt-auto pt-6 border-t border-border/50 flex justify-between items-center backdrop-blur-sm">
                  <span className="font-sans text-xs tracking-widest uppercase text-foreground/50 font-medium">
                    Logistics Network
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-sans text-xs tracking-widest uppercase text-foreground/80 font-medium">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
