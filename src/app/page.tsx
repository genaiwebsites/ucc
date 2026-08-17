'use client';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Products from '@/components/sections/Products';
import Associates from '@/components/sections/Associates';
import Mission from '@/components/sections/Mission';
import Geography from '@/components/sections/Geography';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';

import AmbientBackground from '@/components/ui/AmbientBackground';

export default function Home() {
  return (
    <>
      <AmbientBackground />

      <Navbar />
      <main className="min-h-screen text-foreground overflow-x-hidden selection:bg-amber selection:text-foreground">
        <Hero />
        
        {/* Scrolling Molecule Background - Only visible below the Hero Section */}
        <div className="relative">
          <div 
            className="absolute inset-0 z-[-1] pointer-events-none bg-foreground opacity-[0.4] dark:opacity-[0.2]"
            style={{
              maskImage: "url('/usha-bg-molecules.svg')",
              WebkitMaskImage: "url('/usha-bg-molecules.svg')",
              maskSize: '1440px auto',
              WebkitMaskSize: '1440px auto',
              maskPosition: 'top center',
              WebkitMaskPosition: 'top center',
              maskRepeat: 'repeat',
              WebkitMaskRepeat: 'repeat'
            }}
          />
          <About />
          <Products />
          <Associates />
          <Mission />
          <Geography />
          <Contact />
        </div>
      </main>
      <Footer />
      <ThemeSwitcher />
    </>
  );
}
