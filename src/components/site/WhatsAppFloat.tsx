import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { waAppLink, WA_DEFAULT_MESSAGE, handleWhatsAppClick, WhatsAppIcon } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 transition-all duration-500",
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none",
      )}
    >
      {/* Chat prompt bubble */}
      {!dismissed && (
        <div className="relative max-w-[240px] rounded-2xl rounded-br-sm bg-white border border-slate-200 shadow-xl shadow-steel/10 p-4 animate-in fade-in slide-in-from-bottom-2">
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss"
            className="absolute top-2 right-2 p-1 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          <div className="text-xs font-bold uppercase tracking-wider text-amber-cta">Chat with us</div>
          <p className="mt-1.5 text-sm text-slate-600 leading-snug">
            Questions about pricing or your site? Message us on WhatsApp — we reply fast.
          </p>
        </div>
      )}

      <div className="flex items-center gap-3">
        {expanded && (
          <span className="rounded-lg bg-white border border-slate-200 shadow-lg px-3.5 py-2 text-xs font-bold text-steel whitespace-nowrap">
            +91 87140 03443
          </span>
        )}
        <a
          href={waAppLink(WA_DEFAULT_MESSAGE)}
          onClick={handleWhatsAppClick(WA_DEFAULT_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Amaze Building Solutions on WhatsApp"
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
          <WhatsAppIcon className="relative h-7 w-7" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-cta text-[9px] font-black text-white">
            1
          </span>
        </a>
      </div>
    </div>
  );
}
