import { ArrowRight, Star, Wrench, Timer } from "lucide-react";
import heroImg from "@/assets/hero-industrial.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-steel">
      <img
        src={heroImg}
        alt="Industrial steel roofing structure at sunset"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-steel via-steel/85 to-steel/40" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container-x relative z-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8 text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-amber-cta">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-cta animate-pulse" />
            Kollam · Kerala · Est. 2021
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.02] tracking-tight">
            Kerala's Trusted{" "}
            <span className="text-amber-cta">Industrial Roofing</span> &
            Fabrication Experts.
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
            Four years of heavy-duty engineering, hundreds of trusses raised,
            and a perfect 5.0-star track record across Kollam. From factory
            roofs to architectural gates — we build steel that lasts.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md bg-amber-cta text-amber-cta-foreground text-sm font-bold shadow-2xl shadow-amber-cta/30 hover:bg-amber-cta/90 hover:-translate-y-0.5 transition-all duration-300"
            >
              Request an Estimate
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center h-12 px-7 rounded-md border border-white/25 bg-white/5 backdrop-blur text-white text-sm font-bold hover:bg-white/10 transition-all duration-300"
            >
              Explore Our Services
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
            <TrustBadge icon={<Star className="h-4 w-4 fill-amber-cta text-amber-cta" />} label="5.0 Rated" sub="on Justdial" />
            <TrustBadge icon={<Wrench className="h-4 w-4 text-amber-cta" />} label="4+ Years" sub="of Expertise" />
            <TrustBadge icon={<Timer className="h-4 w-4 text-amber-cta" />} label="Speedy Response" sub="within 4 hrs" />
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-4">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-cta">
              Project Snapshot
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <StatBox value="₹90" unit="/Sq.ft" label="Roofing from" />
              <StatBox value="100%" unit="" label="On-time" />
              <StatBox value="50+" unit="" label="Projects" />
              <StatBox value="24/7" unit="" label="Support" />
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 text-sm text-slate-300">
              <div className="font-semibold text-white">Open Today</div>
              <div className="text-xs mt-1">Mon–Sun · Until 8:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBadge({ icon, label, sub }: { icon: React.ReactNode; label: string; sub: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur px-4 py-3 hover:bg-white/10 transition-all duration-300">
      <div className="flex h-8 w-8 items-center justify-center rounded bg-white/10">{icon}</div>
      <div className="leading-tight">
        <div className="text-sm font-bold text-white">{label}</div>
        <div className="text-[11px] text-slate-400">{sub}</div>
      </div>
    </div>
  );
}

function StatBox({ value, unit, label }: { value: string; unit: string; label: string }) {
  return (
    <div className="rounded-lg bg-white/5 border border-white/10 p-3">
      <div className="text-2xl font-black text-white">
        {value}
        <span className="text-sm font-semibold text-amber-cta">{unit}</span>
      </div>
      <div className="text-[11px] uppercase tracking-wider text-slate-400 mt-1">{label}</div>
    </div>
  );
}
