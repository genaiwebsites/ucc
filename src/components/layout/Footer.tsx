export default function Footer() {
  return (
    <footer className="px-[5vw] py-12 lg:py-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 lg:gap-8 mb-12">
        <div className="max-w-[320px]">
          <h4 className="font-sans font-semibold text-sm tracking-widest uppercase text-foreground mb-3">Usha Commercial Corporation</h4>
          <div className="font-sans text-[11px] font-medium tracking-widest uppercase text-amber mb-6">Est. 1969 · Salt Lake, Kolkata</div>
          <p className="text-[13px] text-foreground/60 leading-relaxed font-sans">
            Trusted importers, distributors and technical partners for synthetic & natural rubbers and rubber chemicals across Eastern India.
          </p>
        </div>
        
        <div>
          <h5 className="font-sans text-[11px] font-semibold tracking-widest uppercase text-foreground/80 mb-5">Products</h5>
          <ul className="flex flex-col gap-3 list-none">
            {['Natural Rubber', 'Synthetic Rubber', 'Rubber Chemicals', 'Carbon Black', 'Specialty Systems'].map(item => (
              <li key={item}>
                <a href="#products" className="text-[13px] text-foreground/60 font-sans no-underline transition-colors duration-300 hover:text-amber">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-sans text-[11px] font-semibold tracking-widest uppercase text-foreground/80 mb-5">Company</h5>
          <ul className="flex flex-col gap-3 list-none">
            {['About Us', 'Vision & Values', 'Our Associates', 'Our Reach', 'Contact'].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase().split(' ')[0]}`} className="text-[13px] text-foreground/60 font-sans no-underline transition-colors duration-300 hover:text-amber">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-sans text-[11px] font-semibold tracking-widest uppercase text-foreground/80 mb-5">Get in Touch</h5>
          <ul className="flex flex-col gap-3 list-none">
            <li><a href="tel:+919830037437" className="text-[13px] text-foreground/60 font-sans no-underline transition-colors duration-300 hover:text-amber">+91 98300 37437</a></li>
            <li><a href="tel:+919830080559" className="text-[13px] text-foreground/60 font-sans no-underline transition-colors duration-300 hover:text-amber">+91 98300 80559</a></li>
            <li><a href="mailto:office@ushacommercialcorporation.com" className="text-[13px] text-foreground/60 font-sans no-underline transition-colors duration-300 hover:text-amber">Email Us</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-border/50">
        <p className="text-[11px] text-foreground/40 font-sans font-medium tracking-wide">
          © 1969–{new Date().getFullYear()} Usha Commercial Corporation. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/company/usha-commercial-corporation/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-foreground/40 hover:text-amber transition-colors">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="14" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.2"/><path d="M4.5 6.5V11M4.5 5V5.01M7.5 11V8.5C7.5 7.7 8.2 7 9 7C9.8 7 10.5 7.7 10.5 8.5V11M7.5 6.5V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
