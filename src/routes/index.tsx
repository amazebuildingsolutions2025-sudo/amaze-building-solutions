import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Calculator } from "@/components/site/Calculator";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amaze Building Solutions — Industrial Roofing & Fabrication, Kollam" },
      {
        name: "description",
        content:
          "Kerala's trusted industrial roofing contractor and structural steel fabrication firm. 4+ years, 5.0 rated. Based in Kollam.",
      },
      { property: "og:title", content: "Amaze Building Solutions — Engineering Strength" },
      {
        property: "og:description",
        content: "Industrial roofing, heavy structural fabrication, gates, and solar structures across Kerala.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Calculator />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
