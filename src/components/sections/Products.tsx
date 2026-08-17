'use client';

import { motion } from 'framer-motion';
import { Hexagon, Leaf, Beaker, Zap } from 'lucide-react';

export default function Products() {
  const products = [
    {
      title: 'Synthetic Rubbers',
      description: 'High-performance synthetic polymers for industrial applications demanding superior heat, chemical, and weather resistance.',
      items: ['SBR', 'PBR', 'NBR', 'EPDM', 'Butyl', 'Chloroprene'],
      icon: Hexagon,
    },
    {
      title: 'Natural Rubbers',
      description: 'Premium grade natural rubber products sourced from elite plantations for optimal tensile strength and elasticity.',
      items: ['RSS Grades', 'ISNR Grades', 'Latex Centrifuged'],
      icon: Leaf,
    },
    {
      title: 'Carbon Black',
      description: 'Essential reinforcing fillers for tire and non-tire rubber applications, engineered for maximum durability.',
      items: ['N220', 'N330', 'N550', 'N660', 'Specialty Grades'],
      icon: Zap,
    },
    {
      title: 'Rubber Chemicals',
      description: 'Critical accelerators, antioxidants, and vulcanizing agents that define the final properties of rubber compounds.',
      items: ['Accelerators', 'Antioxidants', 'Retarders', 'Peptizers'],
      icon: Beaker,
    }
  ];

  return (
    <section id="products" className="relative bg-secondary/10 py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-[5vw]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-amber rounded-full" />
              <span className="font-sans text-xs tracking-widest uppercase text-foreground/60 font-semibold">
                Inventory
              </span>
            </div>
            <h2 className="font-sans font-medium text-4xl lg:text-5xl xl:text-6xl tracking-tight text-foreground leading-[1.1]">
              Precision<br /><span className="text-amber">Polymers.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-md font-sans text-base text-foreground/60 leading-relaxed"
          >
            Our inventory is calibrated to support the most demanding manufacturing tolerances across the subcontinent.
          </motion.div>
        </div>

        {/* Elegant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="bg-background rounded-2xl p-8 lg:p-12 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-border/50 group"
            >
              <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber/10 group-hover:scale-110 transition-all duration-500">
                <product.icon className="w-6 h-6 text-foreground/60 group-hover:text-amber transition-colors duration-500" />
              </div>
              <h3 className="font-sans font-medium text-3xl mb-4 text-foreground group-hover:text-amber transition-colors duration-500">
                {product.title}
              </h3>
              <p className="text-base text-foreground/70 mb-8 leading-relaxed max-w-lg">
                {product.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {product.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="font-sans text-xs font-medium px-4 py-2 bg-secondary/50 text-foreground/80 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
