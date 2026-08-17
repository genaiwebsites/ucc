'use client';

import { motion } from 'framer-motion';

export default function Associates() {
  const partners = [
    'godrej', 'dupont', 'dow', 'reliance', 'lanxess',
    'basf', 'akzonobel', 'bayer', 'evonik', 'wacker',
    '3m', 'pidilite', 'tatachemicals', 'solvay'
  ];

  const clients = [
    'bata', 'mrftyres', 'tatamotors', 'apollotyres', 'exide', 'mahindra'
  ];

  const LogoBlock = ({ name }: { name: string }) => (
    <div className="group relative aspect-[3/2] flex items-center justify-center bg-background rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-border/40 hover:border-amber/30">
      <img
        src={`/logos/${name}.svg`}
        alt={`${name} logo`}
        className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-md"
        onError={(e) => {
          // If image fails to load, fallback to text
          const target = e.target as HTMLElement;
          target.style.display = 'none';
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = 'flex';
        }}
      />
      {/* Fallback Typographic Logo */}
      <div className="absolute inset-0 hidden items-center justify-center p-4">
        <span className="font-sans font-medium text-xs tracking-widest uppercase text-foreground/60 group-hover:text-amber transition-colors text-center break-words">
          {name}
        </span>
      </div>
    </div>
  );

  return (
    <section id="associates" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-[5vw]">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Info Panel */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[2px] bg-amber rounded-full" />
                <span className="font-sans text-xs tracking-widest uppercase text-foreground/60 font-semibold">
                  Network
                </span>
              </div>
              <h2 className="font-sans font-medium text-4xl lg:text-5xl xl:text-6xl tracking-tight text-foreground leading-[1.1] mb-6">
                Global<br /><span className="text-amber">Alliances.</span>
              </h2>
              <p className="font-sans text-base text-foreground/70 leading-relaxed mb-12 max-w-sm">
                Our supply chain is anchored by exclusive partnerships with the world&apos;s most trusted chemical manufacturers.
              </p>
              
              <div className="hidden lg:block">
                <div className="font-sans text-xs tracking-widest uppercase text-foreground/80 font-semibold mb-6">
                  Key Manufacturing Clients
                </div>
                <div className="flex flex-wrap gap-2">
                  {clients.map(client => (
                    <span key={client} className="font-sans text-[11px] font-medium uppercase tracking-widest px-4 py-2 bg-secondary/30 rounded-full text-foreground/70">
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Logo Grid */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <LogoBlock name={partner} />
                </motion.div>
              ))}
            </div>

            {/* Mobile Clients View */}
            <div className="mt-16 lg:hidden">
              <div className="font-sans text-xs tracking-widest uppercase text-foreground/80 font-semibold mb-6">
                Key Manufacturing Clients
              </div>
              <div className="flex flex-wrap gap-2">
                {clients.map(client => (
                  <span key={client} className="font-sans text-[11px] font-medium uppercase tracking-widest px-4 py-2 bg-secondary/30 rounded-full text-foreground/70">
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
