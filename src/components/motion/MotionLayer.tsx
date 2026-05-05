"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionLayer() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.92,
      touchMultiplier: 1.05
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };
    rafId = window.requestAnimationFrame(raf);

    const revealNodes = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    revealNodes.forEach((node) => {
      gsap.fromTo(
        node,
        { y: 18 },
        {
          y: 0,
          duration: 0.42,
          ease: "power3.out",
          scrollTrigger: {
            trigger: node,
            start: "top bottom-=5%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
