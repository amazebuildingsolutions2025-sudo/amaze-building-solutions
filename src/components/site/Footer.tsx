import { Hammer, Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { waAppLink, handleWhatsAppClick, WhatsAppIcon } from "@/lib/whatsapp";

const serviceList = [
  "Industrial Roofing",
  "Structural Fabrication",
  "Steel Truss Systems",
  "Gate Fabrication",
  "MS & SS Railings",
  "Solar Panel Structures",
  "Maintenance & Cleaning",
  "Civil Contracting",
];

export function Footer() {
  return (
    <footer className="bg-steel text-slate-300 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="container-x relative grid grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="col-span-2 lg:col-span-1">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-amber-cta text-white">
              <Hammer className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-base font-extrabold text-white">Amaze Building</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-cta">
                Solutions
              </span>
            </span>
          </a>
          <p className="mt-5 text-sm text-slate-400 leading-relaxed">
            Engineering strength, delivering excellence. Kerala's trusted partner
            for industrial roofing and heavy structural fabrication since 2021.
          </p>
          <div className="mt-5 flex gap-2">
            <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 border border-white/10 hover:bg-amber-cta hover:border-amber-cta hover:text-white transition-all duration-300">
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/__amaze_bulding_solutoin__/?hl=en"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://www.instagram.com/__amaze_bulding_solutoin__/?hl=en",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 border border-white/10 hover:bg-amber-cta hover:border-amber-cta hover:text-white transition-all duration-300"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={waAppLink("Hi Amaze Building Solutions! I'd like to discuss a project.")}
              onClick={handleWhatsAppClick("Hi Amaze Building Solutions! I'd like to discuss a project.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 border border-white/10 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-300"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-cta">Services</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {serviceList.map((s) => (
              <li key={s}>
                <a href="#services" className="hover:text-amber-cta transition-colors">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-cta">Company</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li><a href="#home" className="hover:text-amber-cta">About Us</a></li>
            <li><a href="#testimonials" className="hover:text-amber-cta">Testimonials</a></li>
            <li><a href="#calculator" className="hover:text-amber-cta">Get a Quote</a></li>
            <li><a href="#contact" className="hover:text-amber-cta">Contact</a></li>
            <li><a href="#" className="hover:text-amber-cta">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-amber-cta">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-cta">Reach Us</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-amber-cta mt-0.5" />
              <span>Thodiyoor, Near Guru Manthiram Jn, Thazhava, Kollam-690523, Kerala</span>
            </li>
            <li className="flex gap-3">
              <a
                href={waAppLink("Hi Amaze Building Solutions! I'd like to discuss a project.")}
                onClick={handleWhatsAppClick("Hi Amaze Building Solutions! I'd like to discuss a project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 hover:text-[#25D366] transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#25D366] mt-0.5" />
                <span>+91 87140 03443 (WhatsApp)</span>
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-amber-cta mt-0.5" />
              <span>Open Daily · until 8:00 PM</span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-amber-cta mt-0.5" />
              <span>info@amazebuildingsolutions.in</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x relative mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <span>© {new Date().getFullYear()} Amaze Building Solutions. All rights reserved.</span>
        <span>Engineering Strength · Delivering Excellence</span>
      </div>
    </footer>
  );
}
