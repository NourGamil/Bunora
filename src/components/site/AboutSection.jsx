import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { asset, stats } from "../../lib/site";

export default function AboutSection({ standalone = false }) {
  return (
    <section className="section-padding relative overflow-hidden bg-cream text-ink">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-saffron/30 blur-[110px]" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-ember/15 blur-[120px]" />

      <div className="container-premium relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-reveal className="relative mx-auto max-w-md lg:mx-0">
          <div className="absolute -inset-6 rounded-[3rem] border border-ink/10" />
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-ink to-charcoal p-8 shadow-premium">
            <img data-parallax src={asset("/images/about-img.png")} alt="Bunora chef plate" className="mx-auto max-h-[34rem] w-auto drop-shadow-[0_38px_42px_rgba(0,0,0,0.45)]" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[1.75rem] border border-white/10 bg-white/[0.08] p-4 text-cream backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.28em] text-saffron">Kitchen note</p>
              <p className="mt-2 font-display text-2xl">Built for flavor, staged for elegance.</p>
            </div>
          </div>
        </div>

        <div>
          <div data-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.42em] text-copper">We are Bunora</p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.03em] text-ink sm:text-5xl lg:text-7xl">
              Fast comfort food, treated like a premium restaurant brand.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/68">
              We bring together flame-seared burgers, crisp pizza, rich pasta, golden sides, and warm service in a space built for relaxed nights, quick cravings, and memorable meals.
            </p>
          </div>

          <div data-stagger className="mt-9 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div data-stagger-item key={stat.label} className="rounded-[1.5rem] border border-ink/10 bg-white/70 p-5 shadow-lg shadow-ink/5">
                <p className="font-display text-4xl text-copper">{stat.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">{stat.label}</p>
              </div>
            ))}
          </div>

          <div data-reveal className="mt-10 flex flex-wrap gap-4">
            <Link href="/about" className={`${standalone ? "hidden" : ""} premium-button bg-ink text-cream hover:-translate-y-1 hover:bg-charcoal`}>
              Read more
            </Link>
            <Link href="/book" className="premium-button border border-ink/15 text-ink hover:-translate-y-1 hover:border-copper hover:bg-white/70">
              Book a table
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
