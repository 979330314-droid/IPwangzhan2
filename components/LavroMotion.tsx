"use client";

import { useEffect } from "react";

type MotionParticle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  depth: number;
  alpha: number;
  phase: number;
};

export function LavroMotion() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".lavro-inspired-page");
    const canvas = document.querySelector<HTMLCanvasElement>(".lavro-motion-canvas");
    if (!page) return;

    let frame = 0;
    let animationFrame = 0;
    let mouseX = 0.5;
    let mouseY = 0.5;
    let scrollY = window.scrollY;
    let width = 0;
    let height = 0;
    let particles: MotionParticle[] = [];
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const context = canvas?.getContext("2d") ?? null;

    const update = () => {
      frame = 0;
      scrollY = window.scrollY;
      page.style.setProperty("--scroll-y", scrollY.toFixed(1));
      page.style.setProperty("--cut-top", `${Math.max(61, 72 - scrollY * 0.014)}%`);
      page.style.setProperty("--cut-bottom", `${Math.max(39, 47 - scrollY * 0.012)}%`);
      page.style.setProperty("--mouse-x", mouseX.toFixed(3));
      page.style.setProperty("--mouse-y", mouseY.toFixed(3));
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    const onPointerMove = (event: PointerEvent) => {
      mouseX = event.clientX / window.innerWidth;
      mouseY = event.clientY / window.innerHeight;
      requestUpdate();
    };

    const onScroll = () => requestUpdate();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.16 }
    );

    document.querySelectorAll(".lavro-reveal").forEach((element) => observer.observe(element));

    const buildParticles = () => {
      if (!canvas || !context) return;

      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(120, Math.max(64, Math.floor(width / 13)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: -0.08 - Math.random() * 0.24,
        width: 2 + Math.random() * 24,
        depth: 0.35 + Math.random() * 1.6,
        alpha: 0.08 + Math.random() * 0.32,
        phase: Math.random() * Math.PI * 2
      }));
    };

    const draw = (time: number) => {
      if (!canvas || !context || media.matches) return;

      context.clearRect(0, 0, width, height);

      const scrollRatio = Math.min(scrollY / Math.max(height, 1), 1);
      const isCompact = width < 680;
      const cutBase = isCompact ? 0.94 : 0.72;
      const cutTilt = (isCompact ? 0.12 : 0.25) + scrollRatio * 0.05;

      particles.forEach((particle) => {
        const cutX = width * (cutBase - cutTilt * (particle.y / Math.max(height, 1)));
        const onDarkSide = particle.x < cutX;
        const drift = Math.sin(time * 0.0009 + particle.phase) * particle.depth * 0.6;
        const radius = particle.width * particle.depth;

        particle.x += particle.vx * particle.depth + (mouseX - 0.5) * particle.depth * 0.16 + drift * 0.05;
        particle.y += particle.vy * particle.depth + (mouseY - 0.5) * particle.depth * 0.08;

        if (particle.y < -radius - 20) particle.y = height + radius + 20;
        if (particle.x < -radius - 40) particle.x = width + radius + 30;
        if (particle.x > width + radius + 40) particle.x = -radius - 30;

        const alpha = particle.alpha * (onDarkSide ? 0.86 : 0.62);
        const stroke = onDarkSide
          ? `rgba(255, 255, 255, ${alpha})`
          : `rgba(0, 0, 0, ${alpha * 0.55})`;
        const fill = onDarkSide
          ? `rgba(255, 255, 255, ${alpha * 0.08})`
          : `rgba(0, 0, 0, ${alpha * 0.04})`;

        context.beginPath();
        context.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
        context.fillStyle = fill;
        context.strokeStyle = stroke;
        context.lineWidth = Math.max(0.6, particle.depth * 0.75);
        context.fill();
        context.stroke();
      });

      animationFrame = window.requestAnimationFrame(draw);
    };

    const startCanvas = () => {
      if (!canvas || !context || media.matches) return;
      window.cancelAnimationFrame(animationFrame);
      buildParticles();
      animationFrame = window.requestAnimationFrame(draw);
    };

    const stopCanvas = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      if (context) context.clearRect(0, 0, width, height);
    };

    const onResize = () => startCanvas();
    const onMotionPreferenceChange = () => {
      if (media.matches) stopCanvas();
      else startCanvas();
    };

    page.classList.add("is-loaded");
    update();
    startCanvas();
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    media.addEventListener("change", onMotionPreferenceChange);

    return () => {
      page.classList.remove("is-loaded");
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      media.removeEventListener("change", onMotionPreferenceChange);
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      stopCanvas();
    };
  }, []);

  return <canvas className="lavro-motion-canvas" aria-hidden="true" />;
}
