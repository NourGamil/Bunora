"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { asset, brand, navLinks } from "../../lib/site";

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      gsap.fromTo(
        "[data-mobile-link]",
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.06, duration: 0.45, ease: "power3.out" }
      );
    }
  }, [open]);

  return (
    <header data-nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-5 ${
          scrolled
            ? "border-white/10 bg-ink/78 shadow-premium backdrop-blur-2xl"
            : "border-white/10 bg-white/[0.04] backdrop-blur-xl"
        }`}
        aria-label="Main navigation"
      >
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-saffron text-lg font-black text-ink shadow-glow transition-transform duration-300 group-hover:scale-105">
            <img className="h-5 w-5" src={asset("images/favicon.png")} alt="" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-2xl text-cream">{brand.name}</span>
            <span className="hidden text-[10px] uppercase tracking-[0.34em] text-cream/45 sm:block">Premium kitchen</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                isActive(pathname, link.href)
                  ? "bg-cream text-ink shadow-lg"
                  : "text-cream/70 hover:bg-white/[0.08] hover:text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/menu" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-cream/80 hover:border-saffron/50 hover:text-saffron" aria-label="Open menu">
            <span className="text-lg">☰</span>
          </Link>
          <Link href="/book" className="premium-button-primary px-5 py-3 text-[11px]">
            Reserve
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-cream lg:hidden"
          aria-label="Toggle mobile navigation"
          aria-expanded={open}
        >
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-white/10 bg-ink/92 p-4 shadow-premium backdrop-blur-2xl lg:hidden">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <Link
                data-mobile-link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                  isActive(pathname, link.href) ? "bg-saffron text-ink" : "bg-white/[0.04] text-cream/75"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
