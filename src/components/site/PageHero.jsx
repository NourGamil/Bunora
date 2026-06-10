import Link from "next/link";
import { asset } from "../../lib/site";

export default function PageHero({ eyebrow, title, description, ctaHref = "/book", ctaLabel = "Reserve a table" }) {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-36 sm:pb-24 sm:pt-40">
      <div className="absolute inset-0 -z-20">
        <img src={asset("/images/hero-bg.jpg")} alt="Restaurant background" className="h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/88 to-ink" />
      </div>
      <div className="container-premium">
        <div className="max-w-3xl">
          <p data-hero-fade className="section-eyebrow">{eyebrow}</p>
          <h1 className="mt-5 font-display text-5xl leading-[0.95] text-cream sm:text-7xl lg:text-8xl">
            {title.split(" ").map((word, index) => (
              <span key={`${word}-${index}`} className="reveal-line mr-3 inline-block">
                <span data-hero-word>{word}</span>
              </span>
            ))}
          </h1>
          <p data-hero-fade className="mt-6 max-w-2xl text-lg leading-8 text-cream/68">{description}</p>
          <div data-hero-fade className="mt-9 flex flex-wrap gap-4">
            <Link href={ctaHref} className="premium-button-primary">{ctaLabel}</Link>
            <Link href="/menu" className="premium-button-secondary">Explore menu</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
