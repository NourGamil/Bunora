import SectionHeader from "./SectionHeader";
import Spotlight from "./Spotlight";
import { asset, testimonials } from "../../lib/site";

export default function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute right-0 top-10 -z-10 h-96 w-96 rounded-full bg-ember/10 blur-[120px]" />
      <div className="container-premium">
        <SectionHeader
          centered
          eyebrow="Guest notes"
          title="What our guests are saying."
          description="Real notes from guests who come for the comfort food, the atmosphere, and the small details that make each visit feel special."
        />

        <div data-stagger className="mt-14 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Spotlight key={testimonial.name} className="glass-panel rounded-[2.25rem] p-6 sm:p-8">
              <article data-stagger-item className="relative z-10">
                <div className="flex items-center gap-4">
                  <img src={asset(testimonial.image)} alt={testimonial.name} className="h-16 w-16 rounded-full border-2 border-saffron object-cover" />
                  <div>
                    <h3 className="font-display text-2xl text-cream">{testimonial.name}</h3>
                    <p className="text-sm text-saffron/80">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-7 text-lg leading-8 text-cream/68">“{testimonial.quote}”</p>
                <div className="mt-6 flex gap-1 text-saffron" aria-label="Five star rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
              </article>
            </Spotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
