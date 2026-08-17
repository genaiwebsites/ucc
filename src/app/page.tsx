'use client';

import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Products from '@/components/sections/Products';
import Associates from '@/components/sections/Associates';
import Geography from '@/components/sections/Geography';
import Mission from '@/components/sections/Mission';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import AmbientBackground from '@/components/ui/AmbientBackground';

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main className="min-h-screen text-foreground overflow-x-hidden selection:bg-amber selection:text-foreground">
        <Hero />
        <About />
        <Products />
        <Associates />
        <Geography />
        <Mission />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
