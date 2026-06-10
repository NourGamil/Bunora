"use client";

import { useRef } from "react";
import gsap from "gsap";
import SectionHeader from "./SectionHeader";

const times = ["12:00", "13:30", "15:00", "18:00", "19:30", "21:00"];

export default function BookingSection({ compact = false }) {
  const formRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (!formRef.current) return;
    gsap.fromTo(
      formRef.current,
      { boxShadow: "0 0 0 rgba(246, 178, 60, 0)" },
      {
        boxShadow: "0 0 80px rgba(246, 178, 60, 0.24)",
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: "power2.out"
      }
    );
  }

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-radial-gold opacity-80" />
      <div className="container-premium grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionHeader
          eyebrow="Book a table"
          title="Reserve the best seat before the rush starts."
          description="Pick your date, time, and table size, then arrive ready for warm service, bold plates, and a relaxed dining atmosphere."
          className="max-w-xl"
        />

        <div data-reveal ref={formRef} className="glass-panel rounded-[2.5rem] p-5 sm:p-8">
          <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-cream/70">
                Your name
                <input className="rounded-2xl border-white/10 bg-white/[0.06] px-4 py-4 text-cream outline-none transition focus:border-saffron focus:ring-saffron/30" placeholder="Name" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-cream/70">
                Phone number
                <input className="rounded-2xl border-white/10 bg-white/[0.06] px-4 py-4 text-cream outline-none transition focus:border-saffron focus:ring-saffron/30" placeholder="+20..." />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              <label className="grid gap-2 text-sm font-medium text-cream/70">
                Persons
                <select defaultValue="2" className="rounded-2xl border-white/10 bg-white/[0.06] px-4 py-4 text-cream outline-none transition focus:border-saffron focus:ring-saffron/30">
                  {[2, 3, 4, 5, 6, 8].map((count) => (
                    <option key={count} value={count} className="bg-ink">
                      {count}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium text-cream/70">
                Date
                <input type="date" className="rounded-2xl border-white/10 bg-white/[0.06] px-4 py-4 text-cream outline-none transition focus:border-saffron focus:ring-saffron/30" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-cream/70">
                Time
                <select defaultValue="19:30" className="rounded-2xl border-white/10 bg-white/[0.06] px-4 py-4 text-cream outline-none transition focus:border-saffron focus:ring-saffron/30">
                  {times.map((time) => (
                    <option key={time} value={time} className="bg-ink">
                      {time}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {!compact ? (
              <label className="grid gap-2 text-sm font-medium text-cream/70">
                Special request
                <textarea rows={4} className="rounded-2xl border-white/10 bg-white/[0.06] px-4 py-4 text-cream outline-none transition focus:border-saffron focus:ring-saffron/30" placeholder="Birthday table, quiet corner, allergies..." />
              </label>
            ) : null}

            <button type="submit" className="premium-button-primary mt-2 w-full">
              Book now
              <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
