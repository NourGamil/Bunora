import Link from "next/link";
import { brand, navLinks, marqueeWords } from "../../lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink">
      <div className="border-b border-white/10 py-5">
        <div className="marquee-track flex animate-marquee gap-8 whitespace-nowrap text-sm uppercase tracking-[0.42em] text-cream/35">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, index) => (
            <span key={`${word}-${index}`} className="flex items-center gap-8">
              {word}
              <span className="h-2 w-2 rounded-full bg-saffron" />
            </span>
          ))}
        </div>
      </div>

      <div className="container-premium py-14 sm:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div data-reveal>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-saffron text-xl font-black text-ink shadow-glow">B</span>
              <span className="font-display text-3xl text-cream">{brand.name}</span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-cream/58">
              {brand.tagline} From casual lunches to late-night cravings, Bunora serves comfort food with a polished finish and warm hospitality.
            </p>
          </div>

          <div data-reveal>
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-saffron">Navigation</h3>
            <div className="mt-5 grid gap-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-cream/62 hover:text-saffron">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div data-reveal>
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-saffron">Contact</h3>
            <div className="mt-5 grid gap-3 text-sm text-cream/62">
              <p>{brand.address}</p>
              <a href={`tel:${brand.phone}`} className="hover:text-saffron">{brand.phone}</a>
              <a href={`mailto:${brand.email}`} className="hover:text-saffron">{brand.email}</a>
            </div>
          </div>

          <div data-reveal>
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-saffron">Opening Hours</h3>
            <div className="mt-5 grid gap-3 text-sm text-cream/62">
              <p>Everyday</p>
              <p>10:00 AM — 10:00 PM</p>
              <Link href="/book" className="mt-2 text-saffron hover:text-amber-300">Book your table →</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p>Made for good food, warm nights, and golden cravings.</p>
        </div>
      </div>
    </footer>
  );
}
