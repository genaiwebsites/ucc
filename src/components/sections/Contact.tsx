'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 lg:py-24 flex items-center justify-center overflow-hidden border-t border-border/50">
      <div className="container mx-auto px-[5vw] flex justify-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-5xl bg-secondary/20 backdrop-blur-md rounded-[2.5rem] p-8 lg:p-12 border border-border/30 relative shadow-2xl overflow-hidden group"
        >
          {/* Subtle inner glow */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-amber/5 blur-[80px] pointer-events-none group-hover:bg-amber/10 transition-colors duration-1000" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left Column - Contact Info */}
            <div className="w-full lg:w-5/12 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-[2px] bg-amber rounded-full" />
                <span className="font-sans text-xs tracking-widest uppercase text-foreground/60 font-semibold">
                  Get in Touch
                </span>
              </div>
              
              <h2 className="font-sans font-medium text-4xl lg:text-5xl tracking-tighter text-foreground leading-[1.05] mb-6">
                Initiate
                <br />
                <span className="text-amber">Consultation.</span>
              </h2>
              <p className="text-base text-foreground/70 leading-relaxed font-light mb-12 max-w-sm">
                Secure your supply chain with Eastern India&apos;s most trusted polymer and rubber distribution house. Let&apos;s discuss your manufacturing requirements.
              </p>

              <div className="flex flex-col gap-6 mt-auto">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-background/50 flex items-center justify-center shrink-0 border border-border/30 shadow-sm">
                    <MapPin className="w-4 h-4 text-amber" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs tracking-widest uppercase text-foreground/60 font-bold mb-1">Headquarters</h4>
                    <p className="font-sans text-sm text-foreground/90 leading-relaxed">
                      33, Brabourne Road, 2nd Floor<br />
                      Kolkata 700001, West Bengal, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-background/50 flex items-center justify-center shrink-0 border border-border/30 shadow-sm">
                    <Mail className="w-4 h-4 text-amber" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs tracking-widest uppercase text-foreground/60 font-bold mb-1">Email</h4>
                    <a href="mailto:office@ushacommercialcorporation.com" className="font-sans text-sm text-foreground/90 hover:text-amber transition-colors">
                      office@ushacommercialcorporation.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-background/50 flex items-center justify-center shrink-0 border border-border/30 shadow-sm">
                    <Phone className="w-4 h-4 text-amber" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs tracking-widest uppercase text-foreground/60 font-bold mb-1">Phone</h4>
                    <a href="tel:+919830037437" className="font-sans text-sm text-foreground/90 hover:text-amber transition-colors">
                      +91 98300 37437
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Premium Form */}
            <div className="w-full lg:w-7/12">
              <form className="flex flex-col gap-6 bg-background/40 p-6 lg:p-10 rounded-[2rem] border border-border/30 shadow-lg" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-xs tracking-widest uppercase text-foreground/60 font-semibold">First Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-background/80 border border-border/50 rounded-xl px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber/50 transition-all placeholder:text-foreground/30 shadow-sm"
                      placeholder="John"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-xs tracking-widest uppercase text-foreground/60 font-semibold">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-background/80 border border-border/50 rounded-xl px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber/50 transition-all placeholder:text-foreground/30 shadow-sm"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs tracking-widest uppercase text-foreground/60 font-semibold">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-background/80 border border-border/50 rounded-xl px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber/50 transition-all placeholder:text-foreground/30 shadow-sm"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs tracking-widest uppercase text-foreground/60 font-semibold">Message</label>
                  <textarea 
                    rows={3}
                    className="w-full bg-background/80 border border-border/50 rounded-xl px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber/50 transition-all resize-none placeholder:text-foreground/30 shadow-sm"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button 
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-3 bg-amber text-background px-6 py-4 rounded-xl font-sans text-sm font-bold tracking-widest uppercase hover:bg-amber/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 mt-2"
                >
                  Submit Inquiry
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
