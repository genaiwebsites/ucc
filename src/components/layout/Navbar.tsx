'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Company', href: '#about' },
    { name: 'Principals', href: '#associates' },
    { name: 'Logistics', href: '#geography' },
    { name: 'Quality', href: '#mission' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b',
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-border'
          : 'bg-background/60 backdrop-blur-xs border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Brand Lockup */}
        <Link href="#" className="flex items-center gap-3 no-underline group">
          <div className="w-8 h-8 rounded-sm bg-foreground text-background flex items-center justify-center font-display font-bold text-sm tracking-tighter">
            UCC
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm md:text-base text-foreground tracking-tight group-hover:text-amber transition-colors">
              Usha Commercial Corporation
            </span>
            <span className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase">
              Est. 1969 · Kolkata
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-sans font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Action Items */}
        <div className="hidden md:flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          <Link
            href="#contact"
            className="px-4 py-2 text-xs font-sans font-semibold uppercase tracking-wider bg-foreground text-background hover:bg-amber hover:text-foreground transition-colors rounded-sm"
          >
            Enquire
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="p-2 text-muted-foreground hover:text-foreground"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 text-foreground"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-sans font-medium uppercase tracking-wider text-foreground py-1"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-2.5 text-xs font-sans font-semibold uppercase tracking-wider bg-foreground text-background rounded-sm"
          >
            Enquire
          </Link>
        </div>
      )}
    </header>
  );
}
