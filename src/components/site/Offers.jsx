import Link from "next/link";
import SectionHeader from "./SectionHeader";
import Spotlight from "./Spotlight";
import { asset, offers } from "../../lib/site";

export default function Offers() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-saffron/30 to-transparent" />
      <div className="container-premium">
        <SectionHeader
          centered
          eyebrow="Limited offers"
          title="Premium deals with a golden finish."
          description="Catch rotating offers on crowd-favorite plates, from stacked burgers to hot pizza nights made for sharing."
        />

        <div data-stagger className="mt-14 grid gap-6 lg:grid-cols-2">
          {offers.map((offer) => (
            <Spotlight key={offer.title} className="glass-panel rounded-[2.25rem] p-5" data-stagger-item>
              <div data-stagger-item className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="relative h-44 w-full overflow-hidden rounded-[1.75rem] sm:h-52 sm:w-52 sm:shrink-0">
                  <img src={asset(offer.image)} alt={offer.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/65 to-transparent" />
                </div>

                <div className="p-2 sm:p-0">
                  <p className="section-eyebrow">{offer.title}</p>
                  <h3 className="mt-3 font-display text-5xl text-cream sm:text-6xl">{offer.discount}</h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-cream/58">{offer.description}</p>
                  <Link href="/menu" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-saffron hover:text-amber-300">
                    Order now <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </Spotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
