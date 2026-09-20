import { useState } from "react";
import { MapPin, Clock, Phone, CheckCircle2, Loader2, X, ExternalLink } from "lucide-react";
import { z } from "zod";
import { SectionHeading } from "./Services";
import { waAppLink, handleWhatsAppClick, WhatsAppIcon } from "@/lib/whatsapp";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80, "Name is too long"),
  phone: z.string().trim().regex(/^[+\d][\d\s-]{7,15}$/, "Enter a valid phone number"),
  project: z.string().min(1, "Please select a project type"),
  message: z.string().trim().min(10, "Tell us a bit more (min 10 chars)").max(1000, "Too long"),
});

type FormData = z.infer<typeof schema>;

// Mock DB — in production this would be a Supabase insert.
const mockLeadsTable: (FormData & { id: string; createdAt: string })[] = [];

const projectTypes = [
  "Industrial Roofing",
  "Structural Fabrication",
  "Gate / Railing",
  "Solar Structure",
  "Maintenance / Cleaning",
  "Other",
];

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Amaze Building Solutions, Thodiyoor, Near Guru Manthiram Jn, Puthiyakavu-Chakuvally Road, Thazhava, Kollam 690523, Kerala");

export function Contact() {
  const [data, setData] = useState<FormData>({ name: "", phone: "", project: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = <K extends keyof FormData>(k: K, v: FormData[K]) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Partial<Record<keyof FormData, string>> = {};
      parsed.error.issues.forEach((iss) => {
        const key = iss.path[0] as keyof FormData;
        errs[key] = iss.message;
      });
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    mockLeadsTable.push({ ...parsed.data, id: crypto.randomUUID(), createdAt: new Date().toISOString() });
    setSubmitting(false);
    setSuccess(true);
    setData({ name: "", phone: "", project: "", message: "" });
  };

  const buildWaMessage = (d: FormData) =>
    `Hi Amaze Building Solutions! New enquiry:\n\n*Name:* ${d.name}\n*Phone:* ${d.phone}\n*Project:* ${d.project}\n*Details:* ${d.message}`;

  return (
    <section id="contact" className="section-pad bg-slate-50 relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Let's Build"
          title="Start your project with a free consultation."
          subtitle="Tell us about your site. We respond within 4 hours, 7 days a week."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* Left: info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl bg-steel text-white p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-cta text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-amber-cta">Visit Us</div>
                  <div className="mt-2 text-sm font-semibold leading-relaxed">
                    Thodiyoor, Near Guru Manthiram Jn,<br />
                    Puthiyakavu-Chakuvally Road, Thazhava,<br />
                    Kollam-690523, Kerala
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#25D366] text-white">
                  <WhatsAppIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#1faa53]">WhatsApp Us</div>
                  <a
                    href="tel:+918714003443"
                    className="mt-1 block text-lg font-black text-steel hover:text-[#1faa53] transition-colors"
                  >
                    +91 87140 03443
                  </a>
                  <a
                    href={waAppLink("Hi Amaze Building Solutions! I'd like to discuss a project.")}
                    onClick={handleWhatsAppClick("Hi Amaze Building Solutions! I'd like to discuss a project.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-[#1faa53] hover:gap-2.5 transition-all duration-300"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Start a chat now
                  </a>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white border border-slate-200 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-cta/10 text-amber-cta">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-500">Hours</div>
                <div className="mt-1 text-sm font-bold text-steel">Open Daily</div>
                <div className="text-sm text-slate-600">Until 8:00 PM</div>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-cta/10 text-amber-cta">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-500">Response</div>
                <div className="mt-1 text-sm font-bold text-steel">Within 4 hours</div>
                <div className="text-sm text-slate-600">100% commitment</div>
              </div>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Amaze Building Solutions in Google Maps"
              className="group rounded-2xl overflow-hidden border border-slate-200 bg-white aspect-[16/10] relative block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-cta focus-visible:ring-offset-2"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#1e293b_0%,#334155_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6 transition-transform duration-300 group-hover:scale-105">
                <MapPin className="h-10 w-10 text-amber-cta" />
                <div className="mt-3 font-bold">Thazhava, Kollam</div>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-cta">
                  Open in Google Maps
                  <ExternalLink className="h-3.5 w-3.5" />
                </div>
              </div>
            </a>
          </div>

          {/* Right: form */}
          <form
            onSubmit={submit}
            className="lg:col-span-3 rounded-2xl bg-white border border-slate-200 p-7 lg:p-9 shadow-xl shadow-steel/5"
          >
            <h3 className="text-2xl font-black text-steel">Request a Consultation</h3>
            <p className="mt-1 text-sm text-slate-600">We'll get back to you within 4 hours.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" error={errors.name}>
                <input
                  value={data.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Your name"
                  className="input"
                />
              </Field>
              <Field label="Phone Number" error={errors.phone}>
                <input
                  value={data.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="+91 ..."
                  className="input"
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Project Type" error={errors.project}>
                <select
                  value={data.project}
                  onChange={(e) => update("project", e.target.value)}
                  className="input"
                >
                  <option value="">Select a project type</option>
                  {projectTypes.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Message / Requirements" error={errors.message}>
                <textarea
                  value={data.message}
                  onChange={(e) => update("message", e.target.value)}
                  rows={5}
                  placeholder="Tell us about your site, dimensions, timeline..."
                  className="input resize-none"
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-7 w-full inline-flex items-center justify-center gap-2 h-12 rounded-md bg-amber-cta text-amber-cta-foreground text-sm font-bold shadow-lg shadow-amber-cta/20 hover:bg-amber-cta/90 disabled:opacity-60 transition-all duration-300"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Request"
              )}
            </button>

            <div className="mt-3 flex items-center gap-3">
              <span className="h-px flex-1 bg-slate-200" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">or</span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>

            <a
              href={waAppLink(
                data.name || data.message
                  ? `Hi Amaze Building Solutions! New enquiry:\n\n*Name:* ${data.name}\n*Phone:* ${data.phone}\n*Project:* ${data.project}\n*Details:* ${data.message}`
                  : "Hi Amaze Building Solutions! I'd like to discuss a project.",
              )}
              onClick={handleWhatsAppClick(
                data.name || data.message
                  ? `Hi Amaze Building Solutions! New enquiry:\n\n*Name:* ${data.name}\n*Phone:* ${data.phone}\n*Project:* ${data.project}\n*Details:* ${data.message}`
                  : "Hi Amaze Building Solutions! I'd like to discuss a project.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full inline-flex items-center justify-center gap-2 h-12 rounded-md bg-[#25D366] text-white text-sm font-bold shadow-lg shadow-[#25D366]/25 hover:bg-[#1fbf5b] transition-all duration-300"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Send via WhatsApp
            </a>
            <p className="mt-3 text-[11px] text-center text-slate-500">
              By submitting, you agree to be contacted by Amaze Building Solutions.
            </p>
          </form>
        </div>
      </div>

      {success && <SuccessModal onClose={() => setSuccess(false)} />}

      <style>{`
        .input {
          width: 100%;
          height: 2.75rem;
          padding: 0 0.875rem;
          border-radius: 0.5rem;
          border: 1px solid rgb(203 213 225);
          background: white;
          font-size: 0.875rem;
          color: rgb(15 23 42);
          transition: all 0.3s;
        }
        textarea.input { height: auto; padding: 0.75rem 0.875rem; }
        .input:focus { outline: none; border-color: #ea580c; box-shadow: 0 0 0 3px rgba(234,88,12,0.15); }
      `}</style>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-wider text-slate-600">{label}</span>
      <div className="mt-2">{children}</div>
      {error && <span className="mt-1.5 block text-xs font-semibold text-red-600">{error}</span>}
    </label>
  );
}

function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-steel/70 backdrop-blur-sm animate-in fade-in">
      <div className="relative max-w-md w-full rounded-2xl bg-white p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-md text-slate-500 hover:bg-slate-100"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-cta/10 mx-auto">
          <CheckCircle2 className="h-9 w-9 text-amber-cta" />
        </div>
        <h3 className="mt-5 text-2xl font-black text-steel text-center">Request received!</h3>
        <p className="mt-3 text-center text-sm text-slate-600 leading-relaxed">
          Thanks for reaching out. Our team will respond within{" "}
          <span className="font-bold text-amber-cta">4 hours</span> — that's our speedy-response commitment.
        </p>
        <button
          onClick={onClose}
          className="mt-7 w-full h-11 rounded-md bg-steel text-white text-sm font-bold hover:bg-steel/90 transition-all duration-300"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
