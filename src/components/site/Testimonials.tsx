import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./Services";

const reviews = [
  {
    name: "Lijo",
    role: "Verified Customer · Justdial",
    text: "Outstanding work on our interior and finishing project. Quality, accuracy, and top-class finishing.",
  },
  {
    name: "Princy",
    role: "Verified Customer · Justdial",
    text: "Top-class quality, accuracy, and finishing in welding works compared to ordinary shops.",
  },
  {
    name: "Hari",
    role: "Verified Customer · Justdial",
    text: "Remarkable speedy response time, cost-efficient, and highly reliable repair works.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-steel relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Client Voices"
          title="A perfect 5.0 across every project."
          subtitle="Real reviews from real clients across Kollam. The work speaks — but so do the people we build for."
          light
        />

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-7 hover:bg-white/10 hover:border-amber-cta/40 transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-amber-cta/60" />
              <div className="mt-4 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-cta text-amber-cta" />
                ))}
              </div>
              <blockquote className="mt-4 text-base text-slate-200 leading-relaxed">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-white/10">
                <div className="text-base font-bold text-white">{r.name}</div>
                <div className="text-xs text-slate-400 mt-0.5">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
