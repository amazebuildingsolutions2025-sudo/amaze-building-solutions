import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#calculator", label: "Quote" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between">
        <a
          href="#home"
          className="flex items-center group focus:outline-none"
          aria-label="Amaze Building Solutions Home"
        >
          <div
            className={cn(
              "flex items-center justify-center rounded-lg px-2.5 py-1.5 transition-all duration-300",
              scrolled ? "bg-transparent" : "bg-white shadow-sm border border-slate-200/60",
            )}
          >
            <img
              src={logoImg}
              alt="Amaze Building Solutions"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3.5 py-2 rounded-md text-sm font-semibold text-slate-700 hover:text-steel hover:bg-slate-100 transition-all duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center h-10 px-5 rounded-md bg-amber-cta text-amber-cta-foreground text-sm font-bold shadow-lg shadow-amber-cta/20 hover:bg-amber-cta/90 hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Free Consultation
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md text-steel hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="container-x py-3 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-semibold text-slate-700 border-b border-slate-100 last:border-0"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
