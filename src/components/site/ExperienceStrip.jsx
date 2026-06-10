import { asset } from "../../lib/site";

const steps = [
  { title: "Choose", text: "Browse bold comfort dishes filtered by category." },
  { title: "Reserve", text: "Book a polished table experience in seconds." },
  { title: "Enjoy", text: "Arrive to warm service, golden plates, and clean vibes." }
];

export default function ExperienceStrip() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.03] py-12">
      <div className="container-premium grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div data-reveal className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-3">
          <img src={asset("/images/f5.png")} alt="Golden fries" className="mx-auto max-h-56 w-auto object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,0.35)]" />
        </div>
        <div data-stagger className="grid gap-4 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div data-stagger-item key={step.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <p className="font-display text-5xl text-saffron ">0{index + 1}</p>
              <h3 className="mt-4 font-display text-2xl text-cream">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-cream/55">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
