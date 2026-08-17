'use client';

import { useEffect, useRef } from 'react';

interface IndustrialCanvasProps {
  theme?: 'obsidian' | 'navy' | 'deep-navy';
  className?: string;
}

export default function IndustrialCanvas({ theme = 'obsidian', className = '' }: IndustrialCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const hctx = canvas.getContext('2d');
    if (!hctx) return;

    let HW = 0, HH = 0, DPR = 1;
    let requestRef: number;
    let time = 0;

    const resizeHero = () => {
      DPR = window.devicePixelRatio || 1;
      HW = canvas.offsetWidth;
      HH = canvas.offsetHeight;
      canvas.width = HW * DPR;
      canvas.height = HH * DPR;
      hctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    window.addEventListener('resize', resizeHero);
    resizeHero();

    // STEAM LOGIC
    const steamParticles: SteamParticle[] = [];
    const STEAM_COUNT = 40;
    const chimneyX = [0.52, 0.56, 0.62, 0.68, 0.74, 0.79, 0.84, 0.88];

    class SteamParticle {
      xBase: number;
      x: number = 0;
      y: number = 0;
      vy: number = 0;
      vx: number = 0;
      r: number = 0;
      alpha: number = 0;
      maxA: number = 0;
      life: number = 0;
      maxL: number = 0;

      constructor(xFrac: number) {
        this.xBase = xFrac;
        this.reset();
      }

      reset() {
        this.x = this.xBase * HW + (Math.random() - 0.5) * 18;
        this.y = HH * 0.55 + Math.random() * 40;
        this.vy = -(0.3 + Math.random() * 0.55);
        this.vx = (Math.random() - 0.5) * 0.15;
        this.r = 6 + Math.random() * 14;
        this.alpha = 0.0;
        this.maxA = 0.05 + Math.random() * 0.07;
        this.life = 0;
        this.maxL = 120 + Math.random() * 140;
      }

      update() {
        this.life++;
        this.x += this.vx;
        this.y += this.vy;
        this.r += 0.12;
        this.vx += (Math.random() - 0.5) * 0.02;
        const prog = this.life / this.maxL;
        if (prog < 0.2) this.alpha = this.maxA * (prog / 0.2);
        else if (prog < 0.6) this.alpha = this.maxA;
        else this.alpha = this.maxA * (1 - (prog - 0.6) / 0.4);
        if (this.life >= this.maxL) this.reset();
      }

      draw() {
        const g = hctx!.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
        
        // Steam color matches theme
        if (theme === 'navy' || theme === 'deep-navy') {
            g.addColorStop(0, `rgba(100,120,180,${this.alpha * 0.8})`);
            g.addColorStop(0.4, `rgba(60,80,120,${this.alpha * 0.4})`);
        } else {
            g.addColorStop(0, `rgba(220,180,100,${this.alpha * 0.8})`);
            g.addColorStop(0.4, `rgba(180,130,70,${this.alpha * 0.4})`);
        }
        g.addColorStop(1, `rgba(0,0,0,0)`);
        
        hctx!.beginPath();
        hctx!.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        hctx!.fillStyle = g;
        hctx!.fill();
      }
    }

    chimneyX.forEach(xf => {
      const count = Math.floor(STEAM_COUNT / chimneyX.length);
      for (let i = 0; i < count; i++) {
        const p = new SteamParticle(xf);
        p.life = Math.floor(Math.random() * p.maxL); // stagger birth
        steamParticles.push(p);
      }
    });

    const drawIndustrialScene = () => {
      time += 0.01;
      hctx.clearRect(0, 0, HW, HH);

      // AMBIENT FURNACE GLOW (Right Side)
      const gx = HW * 0.72, gy = HH * 0.65;
      const furnaceGlow = hctx.createRadialGradient(gx, gy, 0, gx, gy, HW * 0.55);
      
      if (theme === 'navy' || theme === 'deep-navy') {
        furnaceGlow.addColorStop(0, `rgba(40,60,100,${0.12 + 0.04 * Math.sin(time * 0.7)})`);
        furnaceGlow.addColorStop(0.35, `rgba(20,30,60,${0.07 + 0.02 * Math.sin(time * 0.9)})`);
      } else {
        furnaceGlow.addColorStop(0, `rgba(200,120,20,${0.12 + 0.04 * Math.sin(time * 0.7)})`);
        furnaceGlow.addColorStop(0.35, `rgba(160,80,10,${0.07 + 0.02 * Math.sin(time * 0.9)})`);
      }
      furnaceGlow.addColorStop(1, 'rgba(0,0,0,0)');
      hctx.fillStyle = furnaceGlow;
      hctx.fillRect(0, 0, HW, HH);

      // STEAM PARTICLES
      steamParticles.forEach(p => { p.update(); p.draw(); });

      // DISTANT HORIZON
      if (theme === 'navy' || theme === 'deep-navy') {
          hctx.fillStyle = 'rgba(13,18,32,0.9)'; // --deep-navy
      } else {
          hctx.fillStyle = 'rgba(15,14,18,0.9)';
      }
      
      hctx.beginPath();
      hctx.moveTo(0, HH * 0.72);
      const distLayer = [
          [0.34, 0.72], [0.37, 0.62], [0.37, 0.62], [0.385, 0.72],
          [0.42, 0.72], [0.435, 0.58], [0.435, 0.58], [0.45, 0.72],
          [0.48, 0.72], [0.495, 0.60], [0.50, 0.60], [0.51, 0.72],
          [0.54, 0.72], [0.555, 0.55], [0.56, 0.55], [0.575, 0.72],
          [0.60, 0.72], [0.615, 0.57], [0.62, 0.57], [0.64, 0.72],
          [0.67, 0.72], [0.68, 0.52], [0.685, 0.52], [0.70, 0.72],
          [0.73, 0.72], [0.74, 0.60], [0.745, 0.60], [0.76, 0.72],
          [0.78, 0.72], [0.79, 0.56], [0.795, 0.56], [0.81, 0.72],
          [0.84, 0.72], [0.855, 0.58], [0.86, 0.58], [0.875, 0.72],
          [0.90, 0.72], [0.92, 0.64], [0.93, 0.64], [0.95, 0.72],
          [1.0, 0.72], [1.0, 1.0], [0, 1.0]
      ];
      distLayer.forEach(([xf, yf]) => hctx.lineTo(xf * HW, yf * HH));
      hctx.closePath();
      hctx.fill();

      // MIDGROUND FACTORY SILHOUETTE
      if (theme === 'navy' || theme === 'deep-navy') {
          hctx.fillStyle = 'rgba(8,12,24,0.97)';
      } else {
          hctx.fillStyle = 'rgba(10,11,14,0.97)';
      }
      hctx.beginPath();
      hctx.moveTo(0, HH);
      hctx.lineTo(0, HH * 0.76);
      hctx.lineTo(HW * 0.33, HH * 0.76);
      hctx.lineTo(HW * 0.34, HH * 0.68);
      hctx.lineTo(HW * 0.345, HH * 0.68);
      hctx.lineTo(HW * 0.345, HH * 0.70);
      hctx.lineTo(HW * 0.37, HH * 0.70);
      hctx.lineTo(HW * 0.37, HH * 0.65);
      hctx.lineTo(HW * 0.38, HH * 0.65);
      hctx.lineTo(HW * 0.38, HH * 0.70);
      hctx.lineTo(HW * 0.41, HH * 0.70);
      hctx.lineTo(HW * 0.41, HH * 0.68);
      hctx.lineTo(HW * 0.42, HH * 0.62);
      hctx.lineTo(HW * 0.425, HH * 0.62);
      hctx.lineTo(HW * 0.43, HH * 0.68);
      hctx.lineTo(HW * 0.455, HH * 0.68);
      hctx.lineTo(HW * 0.455, HH * 0.73);
      hctx.lineTo(HW * 0.50, HH * 0.73);
      hctx.lineTo(HW * 0.50, HH * 0.66);
      hctx.lineTo(HW * 0.515, HH * 0.66);
      hctx.lineTo(HW * 0.515, HH * 0.60);
      hctx.lineTo(HW * 0.522, HH * 0.60);
      hctx.lineTo(HW * 0.522, HH * 0.66);
      hctx.lineTo(HW * 0.545, HH * 0.66);
      hctx.lineTo(HW * 0.545, HH * 0.73);
      hctx.lineTo(HW * 0.56, HH * 0.73);
      hctx.lineTo(HW * 0.56, HH * 0.64);
      hctx.arcTo(HW * 0.60, HH * 0.60, HW * 0.64, HH * 0.64, HW * 0.04);
      hctx.lineTo(HW * 0.64, HH * 0.73);
      hctx.lineTo(HW * 0.66, HH * 0.73);
      hctx.lineTo(HW * 0.66, HH * 0.55);
      hctx.lineTo(HW * 0.68, HH * 0.55);
      hctx.lineTo(HW * 0.68, HH * 0.73);
      hctx.lineTo(HW * 0.72, HH * 0.73);
      hctx.lineTo(HW * 0.72, HH * 0.62);
      hctx.lineTo(HW * 0.74, HH * 0.62);
      hctx.lineTo(HW * 0.74, HH * 0.73);
      hctx.lineTo(HW * 0.77, HH * 0.73);
      hctx.lineTo(HW * 0.77, HH * 0.58);
      hctx.lineTo(HW * 0.79, HH * 0.58);
      hctx.lineTo(HW * 0.79, HH * 0.73);
      hctx.lineTo(HW * 0.82, HH * 0.73);
      hctx.lineTo(HW * 0.82, HH * 0.65);
      hctx.lineTo(HW * 0.84, HH * 0.65);
      hctx.lineTo(HW * 0.84, HH * 0.73);
      hctx.lineTo(HW * 0.86, HH * 0.73);
      hctx.lineTo(HW * 0.86, HH * 0.60);
      hctx.lineTo(HW * 0.88, HH * 0.60);
      hctx.lineTo(HW * 0.88, HH * 0.73);
      hctx.lineTo(HW * 0.95, HH * 0.73);
      hctx.lineTo(HW * 0.95, HH * 0.68);
      hctx.lineTo(HW * 0.97, HH * 0.68);
      hctx.lineTo(HW * 0.97, HH * 0.73);
      hctx.lineTo(HW, HH * 0.73);
      hctx.lineTo(HW, HH);
      hctx.closePath();
      hctx.fill();

      // BASE GRADIENT
      const baseGrad = hctx.createLinearGradient(0, HH * 0.7, 0, HH);
      if (theme === 'navy' || theme === 'deep-navy') {
        baseGrad.addColorStop(0, 'rgba(8,12,24,0)');
        baseGrad.addColorStop(1, '#0d1220');
      } else {
        baseGrad.addColorStop(0, 'rgba(10,11,15,0)');
        baseGrad.addColorStop(1, '#0a0b0f');
      }
      hctx.fillStyle = baseGrad;
      hctx.fillRect(0, HH * 0.7, HW, HH * 0.3);

      requestRef = requestAnimationFrame(drawIndustrialScene);
    };

    requestRef = requestAnimationFrame(drawIndustrialScene);

    return () => {
      window.removeEventListener('resize', resizeHero);
      cancelAnimationFrame(requestRef);
    };
  }, [theme]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 z-0 pointer-events-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
