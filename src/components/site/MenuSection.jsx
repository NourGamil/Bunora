"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import SectionHeader from "./SectionHeader";
import Spotlight from "./Spotlight";
import { asset, categories, menuItems } from "../../lib/site";

function CategoryPill({ category, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 cursor-pointer ${
        active
          ? "bg-saffron text-ink shadow-glow"
          : "border border-white/10 bg-white/[0.05] text-cream/65 hover:border-saffron/50 hover:text-cream"
      }`}
    >
      {category.label}
    </button>
  );
}

function MenuCard({ item }) {
  return (
    <Spotlight className="glass-panel group h-full rounded-[2rem] p-4 transition-transform duration-500 hover:-translate-y-2">
      <article className="relative z-10 flex h-full flex-col">
        <div className="relative grid min-h-56 place-items-center overflow-hidden rounded-[1.65rem] bg-gradient-to-br from-latte/95 to-cream p-6">
          <div className="absolute left-6 top-6 rounded-full bg-ink/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-saffron">
            {item.badge}
          </div>
          <img
            src={asset(item.image)}
            alt={item.title}
            className="max-h-40 w-auto drop-shadow-[0_24px_28px_rgba(0,0,0,0.28)] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
          />
        </div>

        <div className="flex flex-1 flex-col px-2 pb-2 pt-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-saffron">{item.category}</p>
              <h3 className="mt-2 font-display text-2xl leading-tight text-cream">{item.title}</h3>
            </div>
            <p className="rounded-full bg-white/[0.06] px-3 py-1.5 font-display text-2xl text-saffron">${item.price}</p>
          </div>
          <p className="mt-4 flex-1 text-sm leading-7 text-cream/56">{item.description}</p>
          <button className="cursor-pointer mt-6 inline-flex items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-cream/75 transition-all hover:border-saffron/50 hover:text-saffron">
            Add to order
            <span className="grid h-8 w-8 place-items-center rounded-full bg-saffron text-ink">+</span>
          </button>
        </div>
      </article>
    </Spotlight>
  );
}

export default function MenuSection({ compact = false, showHeader = true }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const gridRef = useRef(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return compact ? menuItems.slice(0, 6) : menuItems;
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory, compact]);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll("[data-menu-card]");
    gsap.fromTo(
      cards,
      { y: 26, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, stagger: 0.06, duration: 0.55, ease: "power3.out" }
    );
  }, [filteredItems]);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute left-0 top-20 -z-10 h-96 w-96 rounded-full bg-saffron/10 blur-[120px]" />
      <div className="container-premium">
        {showHeader ? (
          <SectionHeader
            centered
            eyebrow="Our menu"
            title="The classics, redesigned with a premium appetite."
            description="Browse juicy burgers, hot pizzas, creamy pasta, and golden fries, each prepared with a polished Bunora finish."
          />
        ) : null}

        <div data-reveal className="mt-10 flex flex-wrap items-center justify-center gap-3 ">
          {categories.map((category) => (
            <CategoryPill
              key={category.id}
              category={category}
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            />
          ))}
        </div>

        <div ref={gridRef} className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item) => (
            <div data-menu-card key={item.title}>
              <MenuCard item={item} />
            </div>
          ))}
        </div>

        {compact ? (
          <div data-reveal className="mt-12 text-center">
            <Link href="/menu" className="premium-button-primary">
              See full menu
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
