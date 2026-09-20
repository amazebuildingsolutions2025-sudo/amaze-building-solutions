import { Factory, Layers3, DoorOpen, SunMedium, ArrowUpRight } from "lucide-react";
import { waAppLink, waServiceMessage, handleWhatsAppClick, WhatsAppIcon } from "@/lib/whatsapp";

const services = [
  {
    icon: Factory,
    title: "Industrial Roofing Services",
    desc: "Premium warehouse, factory, and commercial truss roofing systems engineered for Kerala's monsoon climate. Galvanized purlins, insulated sheets, and zero-leak guarantees.",
    price: "₹90 – ₹120",
    unit: "/ Sq.ft",
  },
  {
    icon: Layers3,
    title: "Structural Fabrication",
    desc: "Heavy-duty structural frameworks, columns, beams, and custom engineered steel layouts welded and finished to IS-code standards.",
    price: "Custom",
    unit: "/ Project",
  },
  {
    icon: DoorOpen,
    title: "Gate & Architectural Fabrication",
    desc: "Custom high-finishing residential and commercial gates, MS railings, and stainless steel architectural designs with precision laser cutting.",
    price: "₹12K – ₹71K",
    unit: "/ Tn",
  },
  {
    icon: SunMedium,
    title: "Solar Infrastructure Support",
    desc: "Specialized solar panel framework installation, structural reinforcement, washing, and protective alignment for rooftop arrays.",
    price: "On Request",
    unit: "",
  },
];

export function Services() {
  return (
    <section id="services" className="section-pad bg-slate-50">
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Build"
          title="Heavy engineering, finished to the millimetre."
          subtitle="Four specialised divisions, one team. Every project is led by senior fabricators, signed off by site engineers, and delivered on schedule."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-7 hover:border-amber-cta hover:shadow-2xl hover:shadow-steel/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 h-32 w-32 bg-amber-cta/5 rounded-full blur-3xl group-hover:bg-amber-cta/15 transition-all duration-500" />
              <div className="relative flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-steel text-amber-cta group-hover:bg-amber-cta group-hover:text-white transition-all duration-300">
                  <s.icon className="h-7 w-7" strokeWidth={2} />
                </div>
                <div className="text-right">
                  <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold">From</div>
                  <div className="text-xl font-black text-steel">
                    {s.price}
                    <span className="text-xs font-semibold text-slate-500">{s.unit}</span>
                  </div>
                </div>
              </div>
              <h3 className="relative mt-6 text-xl font-bold text-steel">{s.title}</h3>
              <p className="relative mt-3 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              <div className="relative mt-6 flex items-center gap-5">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-cta group-hover:gap-3 transition-all duration-300"
                >
                  Enquire Now
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={waAppLink(waServiceMessage(s.title))}
                  onClick={handleWhatsAppClick(waServiceMessage(s.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1faa53] hover:gap-2.5 transition-all duration-300"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-cta">
        <span className="h-px w-8 bg-amber-cta" />
        {eyebrow}
      </div>
      <h2 className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${light ? "text-white" : "text-steel"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base ${light ? "text-slate-300" : "text-slate-600"} leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
