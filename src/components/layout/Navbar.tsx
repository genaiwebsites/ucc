'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeString, setTimeString] = useState('');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Live Kolkata Time (IST)
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setTimeString(now.toLocaleTimeString('en-GB', options) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { name: 'Heritage', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Principals', href: '#associates' },
    { name: 'Logistics', href: '#geography' },
    { name: 'Quality SLA', href: '#mission' },
    { name: 'Procurement', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-xs py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Corporate Identifier */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-xs bg-foreground text-background flex items-center justify-center font-display font-black text-xs tracking-tighter group-hover:bg-brand group-hover:text-primary-foreground transition-colors">
              UCC
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-foreground leading-tight">
                Usha Commercial Corporation
              </span>
              <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground">
                <span>EST. 1969</span>
                <span>·</span>
                <span className="font-semibold text-foreground">KOLKATA HQ</span>
                {timeString && (
                  <>
                    <span>·</span>
                    <span>{timeString}</span>
                  </>
                )}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-sans uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Tools */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Switcher Button */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle visual theme"
                className="w-8 h-8 rounded-xs border border-border bg-card/80 flex items-center justify-center text-foreground hover:border-foreground transition-colors"
              >
                {theme === 'dark' ? (
                  <Sun className="w-3.5 h-3.5 text-foreground" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-foreground" />
                )}
              </button>
            )}

            {/* Direct Commercial CTA */}
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-foreground text-background font-sans font-semibold text-xs uppercase tracking-wider hover:bg-brand hover:text-primary-foreground transition-colors rounded-xs shadow-xs"
            >
              <span>Lot RFQ</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle theme"
                className="w-8 h-8 rounded-xs border border-border flex items-center justify-center text-foreground"
              >
                {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-8 h-8 border border-border rounded-xs flex items-center justify-center text-foreground"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-b border-border px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-sans uppercase font-semibold text-foreground hover:text-brand py-1"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-border flex flex-col gap-2">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 bg-foreground text-background text-center text-xs font-bold uppercase rounded-xs"
            >
              Submit Procurement RFQ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
