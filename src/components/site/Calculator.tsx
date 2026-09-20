import { useMemo, useState } from "react";
import { Calculator as CalcIcon, Send, Info } from "lucide-react";
import { SectionHeading } from "./Services";

type ServiceKey = "roofing" | "gate" | "structure";

const services: Record<ServiceKey, { label: string; unit: string; rate: number; min: number; max: number; step: number }> = {
  roofing: { label: "Industrial Roofing", unit: "Sq.ft", rate: 105, min: 500, max: 20000, step: 100 },
  gate: { label: "Gate Fabrication", unit: "Tonne", rate: 42000, min: 0.1, max: 5, step: 0.1 },
  structure: { label: "Custom Structure", unit: "Tonne", rate: 95000, min: 0.5, max: 50, step: 0.5 },
};

export function Calculator() {
  const [service, setService] = useState<ServiceKey>("roofing");
  const cfg = services[service];
  const [qty, setQty] = useState<number>(cfg.unit === "Sq.ft" ? 2500 : 1);

  const onServiceChange = (k: ServiceKey) => {
    setService(k);
    setQty(services[k].unit === "Sq.ft" ? 2500 : 1);
  };

  const estimate = useMemo(() => Math.round(qty * cfg.rate), [qty, cfg.rate]);
  const low = Math.round(estimate * 0.92);
  const high = Math.round(estimate * 1.15);

  return (
    <section id="calculator" className="section-pad bg-white relative overflow-hidden">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-amber-cta/5 blur-3xl" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Instant Quotation"
          title="Get an indicative price in seconds."
          subtitle="Pick a service, set the scale, and see a transparent ballpark. Final pricing is confirmed after a free on-site inspection."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3 rounded-2xl bg-slate-50 border border-slate-200 p-7 lg:p-9">
            <div className="flex items-center gap-3 text-steel">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-steel text-amber-cta">
                <CalcIcon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest font-bold text-amber-cta">Step 1</div>
                <div className="text-lg font-bold">Choose your service</div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
              {(Object.keys(services) as ServiceKey[]).map((k) => (
                <button
                  key={k}
                  onClick={() => onServiceChange(k)}
                  className={`text-left rounded-lg border px-4 py-3 transition-all duration-300 ${
                    service === k
                      ? "border-amber-cta bg-amber-cta text-white shadow-lg shadow-amber-cta/20"
                      : "border-slate-200 bg-white hover:border-slate-400"
                  }`}
                >
                  <div className="text-xs font-semibold uppercase tracking-wider opacity-70">
                    {services[k].unit}
                  </div>
                  <div className="text-sm font-bold mt-0.5">{services[k].label}</div>
                </button>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 text-steel">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-steel text-amber-cta">
                <span className="text-sm font-black">2</span>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest font-bold text-amber-cta">Step 2</div>
                <div className="text-lg font-bold">Set the scale ({cfg.unit})</div>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {cfg.min} {cfg.unit}
                </span>
                <span className="text-3xl font-black text-steel tabular-nums">
                  {qty.toLocaleString()}{" "}
                  <span className="text-sm font-semibold text-slate-500">{cfg.unit}</span>
                </span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {cfg.max.toLocaleString()} {cfg.unit}
                </span>
              </div>
              <input
                type="range"
                min={cfg.min}
                max={cfg.max}
                step={cfg.step}
                value={qty}
                onChange={(e) => setQty(parseFloat(e.target.value))}
                className="mt-3 w-full h-2 rounded-full bg-slate-200 appearance-none cursor-pointer accent-amber-cta"
              />
              <input
                type="number"
                value={qty}
                min={cfg.min}
                max={cfg.max}
                step={cfg.step}
                onChange={(e) => setQty(Math.min(cfg.max, Math.max(cfg.min, parseFloat(e.target.value) || cfg.min)))}
                className="mt-4 w-full h-12 px-4 rounded-lg border border-slate-300 bg-white text-base font-bold text-steel focus:outline-none focus:border-amber-cta focus:ring-2 focus:ring-amber-cta/20"
              />
            </div>
          </div>

          {/* Result */}
          <div className="lg:col-span-2 rounded-2xl bg-steel text-white p-7 lg:p-9 relative overflow-hidden flex flex-col">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(234,88,12,0.15))]" />
            <div className="relative flex-1">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-amber-cta">
                Estimated Project Cost
              </div>
              <div className="mt-4 text-5xl lg:text-6xl font-black tabular-nums leading-none">
                ₹{(estimate / 100000).toFixed(2)}L
              </div>
              <div className="mt-2 text-sm text-slate-300">
                Range: ₹{(low / 100000).toFixed(2)}L – ₹{(high / 100000).toFixed(2)}L
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 space-y-2 text-sm">
                <Row k="Service" v={cfg.label} />
                <Row k="Quantity" v={`${qty.toLocaleString()} ${cfg.unit}`} />
                <Row k="Indicative Rate" v={`₹${cfg.rate.toLocaleString()} / ${cfg.unit}`} />
              </div>

              <div className="mt-6 flex items-start gap-2 text-xs text-slate-400">
                <Info className="h-4 w-4 shrink-0 mt-0.5 text-amber-cta" />
                <span>Easily understandable & flexible quotes. Final pricing confirmed on site inspection.</span>
              </div>
            </div>

            <a
              href="#contact"
              className="relative mt-7 inline-flex items-center justify-center gap-2 h-12 rounded-md bg-amber-cta text-amber-cta-foreground text-sm font-bold shadow-xl hover:bg-amber-cta/90 transition-all duration-300"
            >
              Submit Details for Booking
              <Send className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-3">
      <span className="text-slate-400">{k}</span>
      <span className="font-semibold text-white text-right">{v}</span>
    </div>
  );
}
