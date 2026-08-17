'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    grade: 'SBR 1502 / Synthetic Elastomers',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.company && formData.email && formData.phone) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Corporate Information (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono tracking-widest text-amber uppercase font-semibold block mb-3">
                Direct Procurement Desk
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
                Request Consignment Quotation
              </h2>
              <p className="text-sm text-muted-foreground font-sans mt-3 leading-relaxed">
                Connect directly with our commercial trading desk for container indents, ex-warehouse buffer reserves, and technical batch specifications.
              </p>
            </div>

            {/* Clean Typographic Contact Details */}
            <div className="space-y-6 pt-2 border-t border-border">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono uppercase text-muted-foreground font-semibold">Headquarters</div>
                  <div className="text-sm font-semibold text-foreground mt-0.5">33, Brabourne Road, 2nd Floor</div>
                  <div className="text-xs text-muted-foreground">Kolkata 700001, West Bengal, India</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-cobalt shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono uppercase text-muted-foreground font-semibold">Commercial Phone</div>
                  <div className="flex flex-col gap-1 mt-0.5">
                    <a href="tel:+919830037437" className="text-sm font-mono font-bold text-foreground hover:text-amber">
                      +91 98300 37437 <span className="text-xs font-sans font-normal text-muted-foreground">(Sales &amp; Indents)</span>
                    </a>
                    <a href="tel:+919830080559" className="text-sm font-mono font-bold text-foreground hover:text-amber">
                      +91 98300 80559 <span className="text-xs font-sans font-normal text-muted-foreground">(Technical Advisory)</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-emerald-chem shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono uppercase text-muted-foreground font-semibold">Official Email</div>
                  <a href="mailto:office@ushacommercialcorporation.com" className="text-sm font-mono font-bold text-foreground hover:underline mt-0.5 block">
                    office@ushacommercialcorporation.com
                  </a>
                </div>
              </div>
            </div>

            <div className="text-xs font-mono text-muted-foreground pt-4 border-t border-border">
              Mon – Sat: 10:00 AM – 7:00 PM IST · Port Clearance Monitored 24/7
            </div>
          </div>

          {/* Right Column: Clean, Spacious RFQ Form (7 cols) */}
          <div className="lg:col-span-7 bg-card border border-border p-6 md:p-8 rounded-xs shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-1.5 font-semibold">
                      Company / Plant Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Polymer Mills"
                      className="w-full px-3.5 py-2.5 bg-background border border-border rounded-xs text-xs font-sans text-foreground focus:outline-hidden focus:border-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-1.5 font-semibold">
                      Contact Person *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Procurement Head / Chemist"
                      className="w-full px-3.5 py-2.5 bg-background border border-border rounded-xs text-xs font-sans text-foreground focus:outline-hidden focus:border-foreground"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-1.5 font-semibold">
                      Official Work Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="purchase@company.com"
                      className="w-full px-3.5 py-2.5 bg-background border border-border rounded-xs text-xs font-sans text-foreground focus:outline-hidden focus:border-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-1.5 font-semibold">
                      Mobile / WhatsApp *
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98..."
                      className="w-full px-3.5 py-2.5 bg-background border border-border rounded-xs text-xs font-sans text-foreground focus:outline-hidden focus:border-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-muted-foreground mb-1.5 font-semibold">
                    Product Line / Grade of Interest
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-background border border-border rounded-xs text-xs font-sans text-foreground focus:outline-hidden focus:border-foreground"
                  >
                    <option value="SBR 1502 / Synthetic Elastomers">Synthetic Rubber (SBR 1502 / 1712, NBR, EPDM, PBR)</option>
                    <option value="Natural Rubber RSS / ISNR">Natural Rubber (RSS-1 to RSS-4, ISNR-10/20, Latex)</option>
                    <option value="Carbon Black N220 / N330">Furnace Carbon Black (N220, N330, N550, N660)</option>
                    <option value="Rubber Chemicals & Accelerators">Vulcanizing Chemicals (CBS, TBBS, Zinc Oxide 99.5%, Stearic Acid)</option>
                    <option value="Multiple Raw Materials">Full Formulation Package (Multiple Materials)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-muted-foreground mb-1.5 font-semibold">
                    Estimated Tonnage &amp; Delivery Requirements (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify estimated volume (e.g. 20 MT FCL), destination plant location, or delivery timelines..."
                    className="w-full px-3.5 py-2.5 bg-background border border-border rounded-xs text-xs font-sans text-foreground focus:outline-hidden focus:border-foreground resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-foreground text-background font-sans font-bold text-xs uppercase tracking-wider hover:bg-amber hover:text-foreground transition-colors rounded-xs flex items-center justify-center gap-2 mt-2"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                <div className="text-[11px] font-mono text-muted-foreground text-center pt-1">
                  100% Verified Manufacturer COA · Formal quotation issued within 2 hours
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h3 className="font-display font-bold text-2xl text-foreground">
                  Inquiry Dispatched
                </h3>
                <p className="text-xs font-mono text-muted-foreground max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong> from <strong>{formData.company}</strong>. Our raw material trading desk has received your requisition for <strong>{formData.grade}</strong> and will follow up shortly at {formData.email}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 bg-secondary text-foreground text-xs uppercase font-semibold rounded-xs mt-3 hover:bg-border transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
