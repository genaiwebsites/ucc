'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Regular fade-up reveals
      const reveals = gsap.utils.toArray('.reveal') as HTMLElement[];
      reveals.forEach((elem) => {
        gsap.fromTo(
          elem,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
            },
          }
        );
      });

      // Left slide reveals
      const leftReveals = gsap.utils.toArray('.reveal-left') as HTMLElement[];
      leftReveals.forEach((elem) => {
        gsap.fromTo(
          elem,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
            },
          }
        );
      });

      // Right slide reveals
      const rightReveals = gsap.utils.toArray('.reveal-right') as HTMLElement[];
      rightReveals.forEach((elem) => {
        gsap.fromTo(
          elem,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
            },
          }
        );
      });

      // Hero headline text reveal (if present)
      const hlLines = gsap.utils.toArray('.hl-inner') as HTMLElement[];
      if (hlLines.length > 0) {
        gsap.to(hlLines, {
          y: 0,
          opacity: 1,
          duration: 1.4,
          stagger: 0.15,
          ease: 'power4.out',
          delay: 0.2,
        });
      }

      // Eyebrow lines (if present)
      const eyebrows = gsap.utils.toArray('.hero-eyebrow-line, .eyebrow-line') as HTMLElement[];
      eyebrows.forEach((line) => {
        gsap.to(line, {
          scaleX: 1,
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: line,
            start: 'top 90%',
          },
        });
      });
      
      const eyebrowTexts = gsap.utils.toArray('.hero-eyebrow-text, .eyebrow-text') as HTMLElement[];
      eyebrowTexts.forEach((text) => {
        gsap.to(text, {
          opacity: 1,
          duration: 1,
          delay: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: text,
            start: 'top 90%',
          },
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef} className="contents">{children}</div>;
}
