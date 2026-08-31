import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import RouteRail from "@/components/RouteRail";
import Cursor from "@/components/Cursor";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Reviews from "@/components/Reviews";
import Process from "@/components/Process";
import Studio from "@/components/Studio";
import Packages from "@/components/Packages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Logo America",
  url: "https://logoamerica.us",
  email: "contact@logoamerica.us",
  description:
    "Premium brand identity studio crafting distinctive logos, complete brand systems, and strategic rebrands for growing businesses across the United States. Fixed-scope pricing, full IP ownership.",
  areaServed: "United States",
  address: [
    { "@type": "PostalAddress", addressLocality: "New York", addressRegion: "NY", addressCountry: "US" },
    { "@type": "PostalAddress", addressLocality: "Los Angeles", addressRegion: "CA", addressCountry: "US" },
  ],
  sameAs: [],
  makesOffer: [
    "Custom Logo Design",
    "Brand Identity Systems",
    "Strategic Rebranding",
    "Naming & Verbal Identity",
    "Motion Logos & Digital Assets",
    "Brand Guidelines & Asset Libraries",
  ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
};

export default function Home() {
  return (
    <SmoothScroll>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Cursor />
      <Nav />
      <RouteRail />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Packages />
        <Testimonials />
        <Reviews />
        <Process />
        <Studio />
        <Contact />
      </main>
      <Footer />
      {/* <LeadModal /> */}
    </SmoothScroll>
  );
}
