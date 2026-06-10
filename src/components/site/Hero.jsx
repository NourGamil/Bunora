"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { asset, heroSlides, stats } from "../../lib/site";

export default function Hero() {
  const [active, setActive] = useState(0);
  const slide = heroSlides[active];
  const words = useMemo(() => slide.title.split(" "), [slide.title]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      "[data-slide-image]",
      { scale: 0.9, rotate: -4, opacity: 0 },
      { scale: 1, rotate: 0, opacity: 1, duration: 0.85, ease: "power3.out" }
    );
    gsap.fromTo(
      "[data-slide-copy]",
      { y: 18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: "power3.out" }
    );
  }, [active]);

  return (
    <section className="relative isolate min-h-screen overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      <div className="absolute inset-0 -z-30">
        <img src={asset("images/hero-bg.jpg")} alt="Premium burger restaurant" className="h-full w-full object-cover opacity-32" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(246,178,60,0.22),transparent_26rem),linear-gradient(110deg,rgba(9,8,6,0.98)_0%,rgba(9,8,6,0.82)_42%,rgba(9,8,6,0.52)_100%)]" />
      </div>
      <div className="absolute inset-0 -z-20 hero-grid opacity-35 mask-soft-bottom" />
      <div className="absolute left-1/2 top-28 -z-10 h-72 w-72 rounded-full bg-saffron/20 blur-[110px]" />
      <div className="absolute bottom-12 right-10 -z-10 h-80 w-80 rounded-full bg-ember/10 blur-[120px]" />

      <div className="container-premium grid min-h-[calc(100vh-10rem)] items-center gap-12 pb-16 lg:grid-cols-[1.02fr_0.98fr] lg:pb-20">
        <div className="max-w-3xl">
          <div data-hero-fade className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cream/70 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-saffron shadow-glow" />
            {slide.eyebrow}
          </div>

          <h1 className="font-display text-5xl leading-[0.9] tracking-[-0.05em] text-cream sm:text-7xl lg:text-[7.8rem]">
            {words.map((word, index) => (
              <span key={`${word}-${index}`} className="reveal-line mr-3 inline-block lg:mr-5">
                <span data-hero-word>{word}</span>
              </span>
            ))}
          </h1>

          <p data-slide-copy data-hero-fade className="mt-7 max-w-2xl text-lg leading-8 text-cream/68">
            {slide.description}
          </p>

          <div data-hero-fade className="mt-9 flex flex-wrap gap-4">
            <Link href="/book" className="premium-button-primary">
              Book a table
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/menu" className="premium-button-secondary">
              View menu
            </Link>
          </div>

          <div data-hero-fade className="mt-12 grid max-w-xl grid-cols-3 gap-3 sm:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl">
                <p className="font-display text-3xl text-saffron">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cream/45">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-saffron/25 bg-saffron/10 blur-0" />
          <div className="absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          <div data-float-slow className="relative mx-auto grid aspect-square max-w-[36rem] place-items-center rounded-full border border-white/10 bg-white/[0.05] p-8 shadow-premium backdrop-blur-2xl">
            <img data-slide-image src={asset(slide.image)} alt={slide.title} className="max-h-[72%] w-auto drop-shadow-[0_38px_44px_rgba(0,0,0,0.45)]" />
            <div className="absolute bottom-10 left-10 right-10 rounded-[2rem] border border-white/10 bg-ink/70 p-4 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-saffron">Today’s mood</p>
                  <p data-slide-copy className="mt-1 font-display text-2xl text-cream">{slide.eyebrow}</p>
                </div>
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-saffron text-ink shadow-glow">★</div>
              </div>
            </div>
          </div>

          <div data-hero-fade className="mt-7 flex justify-center gap-3">
            {heroSlides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${index === active ? "w-10 bg-saffron" : "w-2.5 bg-white/25 hover:bg-white/50"}`}
                aria-label={`Show slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
