'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Corporate Information (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono tracking-widest text-amber uppercase font-semibold block mb-3">
                Commercial Inquiries
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Initiate Commercial Inquiry
              </h2>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                Connect directly with our Kolkata commercial desk for spot inventory pricing, container indent agreements, or certified technical datasheets.
              </p>
            </div>

            <div className="space-y-4 text-xs font-sans">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                <div className="text-muted-foreground">
                  <strong className="text-foreground block mb-0.5 font-medium">Headquarters</strong>
                  33, Brabourne Road, 2nd Floor, Kolkata 700001, West Bengal, India
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                <div className="text-muted-foreground">
                  <strong className="text-foreground block mb-0.5 font-medium">Direct Telephone</strong>
                  <a href="tel:+919830037437" className="hover:text-foreground font-mono block">+91 98300 37437</a>
                  <a href="tel:+919830080559" className="hover:text-foreground font-mono block">+91 98300 80559</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                <div className="text-muted-foreground">
                  <strong className="text-foreground block mb-0.5 font-medium">Email Desk</strong>
                  <a href="mailto:office@ushacommercialcorporation.com" className="hover:text-foreground">
                    office@ushacommercialcorporation.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border text-[11px] font-mono text-muted-foreground">
              OPERATING HOURS: MON – SAT, 09:30 – 18:30 IST
            </div>
          </div>

          {/* Right Column: Clean Form (7 cols) */}
          <div className="lg:col-span-7 bg-card border border-border p-6 md:p-8 rounded-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. R. K. Sharma"
                      className="w-full p-2.5 bg-background border border-border rounded-sm text-xs font-sans text-foreground focus:outline-hidden focus:border-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                      Company / Plant *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Rubber Mills"
                      className="w-full p-2.5 bg-background border border-border rounded-sm text-xs font-sans text-foreground focus:outline-hidden focus:border-foreground"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                      Work Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="procurement@company.com"
                      className="w-full p-2.5 bg-background border border-border rounded-sm text-xs font-sans text-foreground focus:outline-hidden focus:border-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91..."
                      className="w-full p-2.5 bg-background border border-border rounded-sm text-xs font-sans text-foreground focus:outline-hidden focus:border-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                    Polymer / Chemical Grade of Interest
                  </label>
                  <input
                    type="text"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    placeholder="e.g. SBR 1502, Carbon Black N330, EPDM 4045, Zinc Oxide..."
                    className="w-full p-2.5 bg-background border border-border rounded-sm text-xs font-sans text-foreground focus:outline-hidden focus:border-foreground"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                    Requirements &amp; Monthly Volume
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify estimated tonnage, required delivery destination, or technical test certificate requirements..."
                    className="w-full p-2.5 bg-background border border-border rounded-sm text-xs font-sans text-foreground focus:outline-hidden focus:border-foreground resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-foreground text-background font-sans font-semibold text-xs uppercase tracking-wider hover:bg-amber hover:text-foreground transition-colors rounded-sm"
                >
                  Submit Procurement RFQ
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h4 className="font-display font-bold text-xl text-foreground">
                  Inquiry Dispatched
                </h4>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                  Thank you. Your commercial inquiry for <strong>{formData.company || 'your facility'}</strong> has been routed to our raw material desk. A representative will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-secondary text-foreground text-xs uppercase font-semibold rounded-sm mt-2"
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
